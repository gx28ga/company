webpackJsonp([8,13],{28:function(t,e){t.exports=function(t,e,s,o){var i,a=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(i=t,a=t.default);var r="function"==typeof a?a.options:a;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),s&&(r._scopeId=s),o){var l=Object.create(r.computed||null);Object.keys(o).forEach(function(t){var e=o[t];l[t]=function(){return e}}),r.computed=l}return{esModule:i,exports:a,options:r}}},29:function(t,e,s){"use strict";(function(t,s){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{superClass:String,transition:String,closeCallback:Function},data:function(){return{showModal:!0}},mounted:function(){t.setImgSize(),bus.$on("closePop",this.closePop)},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==s.type(t)&&setTimeout(t,500)},closePop:function(e,s){s=s||"closePopEvent",this.showModal=!1,t.getPop(e),bus.$emit(s),this.closeCallback&&this.closeCallback.call(this)}}}}).call(e,s(0),s(3))},30:function(t,e){},31:function(t,e,s){s(30);var o=s(28)(s(29),s(32),"data-v-e9dcf386",null);o.options.__file="E:\\products\\pc\\activity\\app\\digGold\\src\\pop\\pop.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},32:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:t.transition}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-mask",class:t.superClass},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container img-size",on:{click:function(e){t.closePropagtion(e)}}},[t._t("close"),t._v(" "),s("div",{staticClass:"modal-header"},[t._t("header",[t._v("\r\n                        default header\r\n                    ")])],2),t._v(" "),s("div",{staticClass:"modal-body"},[t._t("body",[t._v("\r\n                        default body\r\n                    ")])],2),t._v(" "),s("div",{staticClass:"modal-footer"},[t._t("footer")],2)],2)])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},43:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o=s(31),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={computed:{},components:{pop:i.default},data:function(){return{info:window.info,end:null,start:null}},props:{transition:String},mounted:function(){t.setImgSize();var e=this;e.start=e.info.startTime.substr(0,8),e.end=e.info.endTime.substr(0,8)},methods:{close:function(){this.$refs.pop.closePop()}}}}).call(e,s(0))},50:function(t,e){},68:function(t,e,s){s(50);var o=s(28)(s(43),s(75),"data-v-3f4c1780",null);o.options.__file="E:\\products\\pc\\activity\\app\\digGold\\src\\pop\\rule.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] rule.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},75:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pop",{ref:"pop",attrs:{transition:t.transition}},[s("div",{staticClass:"title-bg img-size",attrs:{"data-marginTop":"25","data-height":"55"},slot:"header"},[s("i",{staticClass:"close img-size",attrs:{"data-width":"40","data-height":"38"},on:{click:t.close}})]),t._v(" "),s("div",{staticClass:"winning-pop",slot:"body"},[s("div",{staticClass:"rule img-size",attrs:{"data-width":"620","data-height":"960","data-borderRadius":"20","data-fontSize":"24"}},[s("div",{staticClass:"title img-size",attrs:{"data-width":"579","data-height":"91"}}),t._v(" "),s("ul",{staticClass:"img-size",attrs:{"data-height":"812","data-paddingLeft":"70","data-paddingRight":"20","data-paddingTop":"20"}},[s("li",[s("span",{staticClass:"img-size",attrs:{"data-left":"-34"}},[t._v("1.")]),t._v("活动时间："+t._s(t.start)+" - "+t._s(t.end))]),t._v(" "),s("li",[s("span",{staticClass:"img-size",attrs:{"data-left":"-34"}},[t._v("2.")]),t._v("集齐东南西北四方财神，兑换600元京东卡大礼；集齐任意两方财神，获2%加息券1张。集财神奖励，限发放1次，集齐多套财神，不重复发放奖励。")]),t._v(" "),s("li",[t._v("东方财神"),s("br"),t._v("【每日参拜】：随机领取红包或加息券（最高1.5%加息或100元红包），每天1次免费机会（不可累计）"),s("br"),t._v("【东方财神】：累计参拜10次，即可获得")]),t._v(" "),s("li",[t._v("南方财神"),s("br"),t._v("【挖金矿】：单笔购买≥20天产品，每满5000元，获得1次挖金矿机会。单笔购买≥80天产品，每满30000元，获得10次挖金矿机会。每次挖矿时间15秒，可挖到金子，金子可用来获取更多丰厚的活动奖品，详见下方"),s("br"),t._v("【南方财神】：挖金矿次数20次及以上，即可获得")]),t._v(" "),s("li",[t._v("西方财神"),s("br"),t._v("【西方财神】：累计购买产品≥500000元（除20天以下产品），自动获得")]),t._v(" "),s("li",[t._v("北方财神"),s("br"),t._v("【北方财神】：累计购买产品≥1000000元（除20天以下产品），自动获得")]),t._v(" "),s("li",[t._v("大财神"),s("br"),t._v("单笔购买≥300天产品，每满100000元，可获得1次大财神福佑，可兑换四方财神中的任意一位。（按上述规则，同时也获得30次挖金矿机会）")]),t._v(" "),s("li",[s("span",{staticClass:"img-size",attrs:{"data-left":"-34"}},[t._v("3.")]),t._v("挖矿获得的金子有什么用？"),s("br"),t._v("【多挖多得】：金子数量越多，可获得的对应奖品越丰厚（不累计获得）。")]),t._v(" "),s("li",[t._v("挖到银子达到数量　　　礼品名称")]),t._v(" "),s("li",[t._v("1000　　　　　　20元京东卡")]),t._v(" "),s("li",[t._v("2000　　　　　　50元京东卡")]),t._v(" "),s("li",[t._v("3880　　　　　　100元京东卡")]),t._v(" "),s("li",[t._v("12800　　　　　　300元京东卡")]),t._v(" "),s("li",[t._v("26800　　　　　　600元京东卡")]),t._v(" "),s("li",[t._v("48800　　　　　　1000元京东卡")]),t._v(" "),s("li",[t._v("*以最高奖项为准，不累计获得")]),t._v(" "),s("li",[t._v("【排名奖励】：活动结束后，根据挖到金子的最终数量进行排名，前10名可依次获得")]),t._v(" "),s("li",[t._v("名次　　　　奖品"),s("br"),t._v("第一名　　　Surface Pro4二合一"),s("br"),t._v(" 第二名　　　Gopro Hero5"),s("br"),t._v("第三名　　　2000元携程电子购物卡"),s("br"),t._v("第四名　　　佳明vivosmart HR+gps智能环"),s("br"),t._v("第五名　　　Dior花漾甜心香水"),s("br"),t._v("第六名　　　拍立得"),s("br"),t._v("第七名　　　小米手环"),s("br"),t._v("第八名　　　小米移动电源"),s("br"),t._v("第九名　　　50元京东购物卡"),s("br"),t._v("第十名　　　30元京东购物卡")]),t._v(" "),s("li",[s("span",{staticClass:"img-size",attrs:{"data-left":"-34"}},[t._v("4.")]),t._v("活动实物奖品将于活动结束后15个工作日内发放。活动期间如发现作弊现象，取消一切获奖资格。")]),t._v(" "),s("li",[s("span",{staticClass:"img-size",attrs:{"data-left":"-34"}},[t._v("5.")]),t._v("活动最终解释权归多融财富所有")])])])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});