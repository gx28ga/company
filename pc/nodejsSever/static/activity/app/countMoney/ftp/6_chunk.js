webpackJsonp([6],{24:function(t,a){t.exports=function(t,a,e,i){var s,o=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,o=t.default);var n="function"==typeof o?o.options:o;if(a&&(n.render=a.render,n.staticRenderFns=a.staticRenderFns),e&&(n._scopeId=e),i){var c=Object.create(n.computed||null);Object.keys(i).forEach(function(t){var a=i[t];c[t]=function(){return a}}),n.computed=c}return{esModule:s,exports:o,options:n}}},27:function(t,a,e){"use strict";(function(t,i){Object.defineProperty(a,"__esModule",{value:!0});var s=e(9);a.default={props:{transition:String},data:function(){return{showModal:!0,isactive:0,userChance:{}}},mounted:function(){var a=this;t.setImgSize(),t.getAppInfo(),this.islogin=t.isLogin,this.islogin&&t.uid&&t.ajax({url:s.getlucky,data:{uid:t.uid},success:function(t){a.userChance=t.map.userChance}})},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==i.type(t)&&setTimeout(t,550)},closePop:function(a){this.showModal=!1,t.getPop(a),bus.$emit("closePopEvent")},hui:function(){var t=this.isactive;0==t?(i(".pice").eq(0).addClass("colors"),i(".pice").eq(1).removeClass("colors"),i(".pice").eq(2).removeClass("colors"),i(".selected").eq(0).addClass("img"),i(".selected").eq(1).removeClass("img"),i(".selected").eq(2).removeClass("img"),i(".surebtn").removeClass("gray"),this.userChance.chanceCommon<1&&(this.isactive=-1,i(".surebtn").addClass("gray"))):1==t?(i(".pice").eq(1).addClass("colors"),i(".pice").eq(0).removeClass("colors"),i(".pice").eq(2).removeClass("colors"),i(".selected").eq(1).addClass("img"),i(".selected").eq(0).removeClass("img"),i(".selected").eq(2).removeClass("img"),i(".surebtn").removeClass("gray"),this.userChance.chanceSpecial<1&&(this.isactive=-1,i(".surebtn").addClass("gray"))):2==t&&(i(".pice").eq(2).addClass("colors"),i(".pice").eq(0).removeClass("colors"),i(".pice").eq(1).removeClass("colors"),i(".selected").eq(2).addClass("img"),i(".selected").eq(0).removeClass("img"),i(".selected").eq(1).removeClass("img"),i(".surebtn").removeClass("gray"),this.userChance.chanceMultiple<1&&(this.isactive=-1,i(".surebtn").addClass("gray")))},active:function(t){0==t?(this.isactive=t,this.hui()):1==t?(this.isactive=t,this.hui()):2==t&&(this.isactive=t,this.hui())},change:function(){var a=this;this.isactive<0||this.closePop(function(){router.replace({path:"game",query:{uid:t.uid,wap:t.wap,type:a.isactive}})})}}}}).call(a,e(0),e(3))},36:function(t,a){},37:function(t,a,e){e(36);var i=e(24)(e(27),e(46),"data-v-7ce631f9",null);i.options.__file="E:\\products\\pc\\activity\\app\\countMoney\\src\\pop\\change.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] change.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},46:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("transition",{attrs:{name:t.transition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask explain",on:{click:t.closePop}},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container pop-cnt img-size",attrs:{"data-paddingTop":"25","data-paddingBottom":"25","data-paddingLeft":"33","data-paddingRight":"33","data-width":"630","data-height":"979"},on:{click:function(a){t.closePropagtion(a)}}},[e("div",{staticClass:"ruletitle"},[t._v("请选择钞票，然后开始数钱")]),t._v(" "),e("div",{staticClass:"close img-size",attrs:{"data-width":"31","data-height":"31","data-lineHeight":"31","data-fontSize":"40","data-top":"15","data-right":"15"},on:{click:t.closePop}},[t._v("×")]),t._v(" "),e("div",{staticClass:"content img-size",attrs:{"data-width":"626","data-fontSize":"22"}},[e("div",{staticClass:"pice comm colors img-size",attrs:{"data-width":"570","data-paddingLeft":"32","data-paddingRight":"23","data-paddingTop":"17","data-paddingBottom":"17"},on:{click:function(a){t.active(0)}}},[e("div",{staticClass:"left img-size",attrs:{"data-width":"190","data-paddingTop":"35"}},[e("p",{staticClass:"name img-size",attrs:{"data-fontSize":"30"}},[t._v("普通钞票")]),t._v(" "),e("p",[t._v("面额：100元/张")]),t._v(" "),e("p",[t._v("剩余机会："+t._s(t.userChance.chanceCommon)+"次")])]),t._v(" "),e("div",{staticClass:"right img-size",attrs:{"data-width":"400","data-height":"182"}},[e("div",{staticClass:"selected img img-size",attrs:{"data-top":"5","data-right":"5","data-width":"44","data-height":"44"}})])]),t._v(" "),e("div",{staticClass:"pice silver img-size",attrs:{"data-width":"570","data-paddingLeft":"32","data-paddingRight":"23","data-paddingTop":"17","data-paddingBottom":"17","data-marginTop":"14"},on:{click:function(a){t.active(1)}}},[e("div",{staticClass:"left img-size",attrs:{"data-width":"190","data-paddingTop":"35"}},[e("p",{staticClass:"name img-size",attrs:{"data-fontSize":"30"}},[t._v("银钞")]),t._v(" "),e("p",[t._v("面额：188元/张")]),t._v(" "),e("p",[t._v("剩余机会："+t._s(t.userChance.chanceSpecial)+"次")])]),t._v(" "),e("div",{staticClass:"right img-size",attrs:{"data-width":"400","data-height":"182"}},[e("div",{staticClass:"selected img-size",attrs:{"data-top":"5","data-right":"5","data-width":"44","data-height":"44"}})])]),t._v(" "),e("div",{staticClass:"pice gold img-size",attrs:{"data-width":"570","data-paddingLeft":"32","data-paddingRight":"23","data-paddingTop":"17","data-paddingBottom":"17","data-marginTop":"14"},on:{click:function(a){t.active(2)}}},[e("div",{staticClass:"left img-size",attrs:{"data-width":"190","data-paddingTop":"35"}},[e("p",{staticClass:"name img-size",attrs:{"data-fontSize":"30"}},[t._v("金钞")]),t._v(" "),e("p",[t._v("面额：288元/张")]),t._v(" "),e("p",[t._v("剩余机会："+t._s(t.userChance.chanceMultiple)+"次")])]),t._v(" "),e("div",{staticClass:"right img-size",attrs:{"data-width":"400","data-height":"182"}},[e("div",{staticClass:"selected img-size",attrs:{"data-top":"5","data-right":"5","data-width":"44","data-height":"44"}})])])]),t._v(" "),e("div",{staticClass:"surebtn img-size",attrs:{"data-width":"290","data-height":"114"},on:{click:t.change}},[t._v("确定")]),t._v(" "),e("p",{staticClass:"ques img-size",attrs:{"data-fontSize":"28"}},[t._v("Tips:如何获取数银钞/金钞机会？")]),t._v(" "),e("p",{staticClass:"answ img-size",attrs:{"data-fontSize":"24"}},[t._v("单笔投资≥80天产品，每满3万元额外获得一次数银钞机会")]),t._v(" "),e("p",{staticClass:"answ img-size",attrs:{"data-fontSize":"24"}},[t._v("单笔投资≥300天产品，每满3万元额外获得一次数金钞机会")])])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},9:function(t,a,e){"use strict";t.exports={status:"/activity/counting-money/status.do",participate:"/activity/counting-money/participate.do",getlucky:"/activity/counting-money/chance.do",backprize:"/activity/counting-money/counting-to-prize.do",prize:"/activity/counting-money/counting-to-more.do",prizelist:"/activity/counting-money/counting-rank.do"}}});