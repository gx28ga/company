webpackJsonp([11,16],{30:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{superClass:String,transition:String,closeCallback:Function},data:function(){return{}},mounted:function(){t.setImgSize()},methods:{closePop:function(t){this.$refs.pop.closePop(t)}}}}).call(e,s(0))},31:function(t,e,s){var a=s(8)(s(30),s(32),null,null);a.options.__file="E:\\products\\pc\\activity\\app\\guhuaDafuweng\\src\\pop\\pop.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] pop.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},32:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pop",{ref:"pop",attrs:{transition:t.transition,superClass:t.superClass,closeCallback:t.closeCallback}},[s("div",{staticClass:"modal-container img-size",attrs:{"data-width":"555","data-height":"454"},slot:"main"},[t._t("close",[s("div",{staticClass:"close img-size",attrs:{"data-width":"82","data-height":"81"},on:{click:t.closePop}})]),t._v(" "),s("div",{staticClass:"modal-header"},[t._t("header",[s("div",{staticClass:"title-bg img-size",attrs:{"data-width":"391","data-height":"79","data-marginTop":"20"}})])],2),t._v(" "),s("div",{staticClass:"modal-body img-size",attrs:{"data-paddingLeft":"40","data-paddingRight":"40"}},[t._t("body",[t._v("\r\n                default body\r\n            ")])],2),t._v(" "),s("div",{staticClass:"modal-footer img-size",attrs:{"data-paddingBottom":"40"}},[t._t("footer",[s("div",{staticClass:"btn img-size",attrs:{"data-width":"327","data-height":"60","data-lineHeight":"60"}})])],2)],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},46:function(t,e,s){"use strict";(function(t){function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(1),o=a(i),n=s(31),d=a(n),r=s(9),c=s(3),l=a(c);e.default={store:l.default,components:{pop:d.default},props:{diceType:Number,diceNumber:Number},mounted:function(){var e=this,s={uid:t.uid,diceType:e.diceType};2==e.diceType&&(s.diceNumber=e.diceNumber),t.ajax({url:r.dicePlay,data:s}).then(function(s){if(s.flag){var a,i,n=s.map.memberWalk,d=s.map.diceNumList;d.length>1?(a=d[0],i=d[1]):(a=d[0],i=0),e.do(a,i,function(){e.$refs.pop.closePop(),10==n.nextPoint||20==n.nextPoint?(0,o.default)("continue"):(0,o.default)("winning"),e.$store.commit("updateData",n),e.$store.commit("updatePrize",n),e.$store.commit("userMessage",n)})}else e.$refs.pop.closePop(),(0,o.default)("touzhijihui",{props:{content:s.errorMsg,transition:"rotate3d",okTxt:"投资获取机会",closeCallback:function(){t.callApp.investment()}}},"publicTips")})},methods:{do:function(t,e,s){var a=$(".scenedo").eq(0),i=$(".scenedo").eq(1),o=$(".scenedo-num"),n="img1 img2 img3 img4 img5 img6 img7 img8 img9 img10 img11 img12";0==e&&i.hide(),setTimeout(function(){a.removeClass(n).addClass(" img"+t),setTimeout(function(){i.removeClass(n).addClass(" img"+e),o.removeClass(n).addClass("cur img"+(t+e)),setTimeout(s,300)},1030)},2830)}}}}).call(e,s(0))},63:function(t,e){},78:function(t,e,s){s(63);var a=s(8)(s(46),s(93),null,null);a.options.__file="E:\\products\\pc\\activity\\app\\guhuaDafuweng\\src\\pop\\scenedo.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] scenedo.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},93:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("pop",{ref:"pop",attrs:{superClass:"scenedo-pop"}},[s("div",{slot:"close"}),t._v(" "),s("div",{slot:"header"}),t._v(" "),s("div",{staticClass:"selectSceneNum img-size",attrs:{"data-paddingTop":"200","data-paddingBottom":"10"},slot:"body"},[s("div",{staticClass:"lights img-size",attrs:{"data-width":"726","data-height":"699","data-top":"100","data-marginLeft":"-363"}}),t._v(" "),s("div",{staticClass:"scenedobg img-size",attrs:{"data-width":"374","data-height":"130","data-paddingLeft":"54"}},[s("div",{staticClass:"scenedo img-size",attrs:{"data-width":"139","data-height":"144","data-top":"-60"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2==t.diceType,expression:"diceType==2"}],staticClass:"scenedo img-size",attrs:{"data-marginLeft":"-10","data-width":"139","data-height":"144","data-top":"-60"}}),t._v(" "),s("div",{staticClass:"scenedo-num img-size",attrs:{"data-width":"114","data-height":"92","data-top":"-30"}})])]),t._v(" "),s("div",{staticClass:"submit",slot:"footer"})])},staticRenderFns:[]},t.exports.render._withStripped=!0}});