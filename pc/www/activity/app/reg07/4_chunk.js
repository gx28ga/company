webpackJsonp([4],{25:function(t,a,e){e(41);var i=e(28)(e(36),e(50),"data-v-3be51920",null);i.options.__file="E:\\git\\duorongcf\\develop\\pc\\nodejsSever\\static\\activity\\app\\reg07\\src\\module\\main\\regOK.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] regOK.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},28:function(t,a){t.exports=function(t,a,e,i){var s,d=t=t||{},n=typeof t.default;"object"!==n&&"function"!==n||(s=t,d=t.default);var o="function"==typeof d?d.options:d;if(a&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),e&&(o._scopeId=e),i){var r=Object.create(o.computed||null);Object.keys(i).forEach(function(t){var a=i[t];r[t]=function(){return a}}),o.computed=r}return{esModule:s,exports:d,options:o}}},29:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default={mounted:function(){t.setImgSize()}}}).call(a,e(0))},30:function(t,a){},31:function(t,a,e){e(30);var i=e(28)(e(29),e(32),"data-v-0768f6c9",null);i.options.__file="E:\\git\\duorongcf\\develop\\pc\\nodejsSever\\static\\activity\\app\\reg07\\src\\module\\html\\newbill.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] newbill.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},32:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"abouta img-size",attrs:{"data-paddingTop":"50","data-paddingBottom":"60"}},[e("div",{staticClass:"bhtitle img-size",attrs:{"data-height":"47","data-width":"522"}}),t._v(" "),e("div",{staticClass:"bai img-size",attrs:{"data-width":"636","data-height":"446","data-borderRadius":"16","data-marginTop":"62","data-paddingBottom":"26"}},[e("div",{staticClass:"newtitle img-size",attrs:{"data-width":"260","data-height":"34"}},[e("span",{staticClass:"img-size",attrs:{"data-width":"152","data-fontSize":"30","data-top":"12"}},[t._v("新手福利")])]),t._v(" "),e("p",{staticClass:"hong img-size",attrs:{"data-fontSize":"36","data-marginTop":"44"}},[e("span",{staticClass:"img-size",attrs:{"data-fontSize":"99"}},[t._v("12")]),t._v("%")]),t._v(" "),e("p",{staticClass:"img-size",attrs:{"data-fontSize":"24"}},[t._v("投资期限：28天起")]),t._v(" "),e("p",{staticClass:"img-size",attrs:{"data-fontSize":"24"}},[t._v("投资期限：100元起")]),t._v(" "),e("div",{staticClass:"xztz img-size",attrs:{"data-marginTop":"36","data-borderRadius":"10","data-fontSize":"24","data-width":"255","data-height":"60","data-lineHeight":"60"}},[e("a",{attrs:{href:"http://app.duorongcf.com/html/2weima.html"}},[t._v("下载立即投资")])])]),t._v(" "),e("div",{staticClass:"bai img-size",attrs:{"data-width":"636","data-height":"446","data-borderRadius":"16","data-marginTop":"62","data-paddingBottom":"26"}},[e("div",{staticClass:"newtitle img-size",attrs:{"data-width":"260","data-height":"34"}},[e("span",{staticClass:"img-size",attrs:{"data-width":"152","data-fontSize":"30","data-top":"12"}},[t._v("新手红包")])]),t._v(" "),e("div",{staticClass:"bag img-size",attrs:{"data-width":"210","data-height":"252","data-marginTop":"40"}}),t._v(" "),e("div",{staticClass:"xztz img-size",attrs:{"data-marginTop":"36","data-borderRadius":"10","data-fontSize":"24","data-width":"255","data-height":"60","data-lineHeight":"60"}},[e("a",{attrs:{href:"http://app.duorongcf.com/html/2weima.html"}},[t._v("下载立即使用")])])]),t._v(" "),e("div",{staticClass:"bottom img-size",attrs:{"data-paddingTop":"20","data-paddingLeft":"45","data-paddingRight":"45","data-fontSize":"18"}},[e("p",{staticClass:"img-size",attrs:{"data-paddingBottom":"20","data-marginBottom":"20"}},[t._v("市场有风险 投资需谨慎"),e("br"),t._v("平台建议的历史年化收益率仅供参考，不代表未来实际收益")]),t._v(" "),e("p",[t._v("icp备案：沪ICP备15011207号"),e("br"),t._v("公司名称：上海银砖金融信息服务有限公司")])])])}]},t.exports.render._withStripped=!0},36:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0});var i=e(31),s=function(t){return t&&t.__esModule?t:{default:t}}(i),d=e(12);a.default={data:function(){return{phone:"",getThis:!0}},components:{newbill:s.default},mounted:function(){t.setImgSize(),this.phone=this.$route.query.phone},methods:{toBill:function(){var a=this.$route.query.phone;this.getThis&&(this.getThis=!1,t.ajax({url:d.sendAward,data:{uid:t.uid},callback:!0,success:function(e){e.success&&router.replace({path:"billOK",query:{phone:a,toFrom:t.toFrom}})}}))}}}}).call(a,e(0))},41:function(t,a){},50:function(t,a,e){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"hl hl3 img-size",staticStyle:{height:"auto"},attrs:{"data-paddingTop":"2"}},[e("div",{staticClass:"success regi img-size",staticStyle:{"text-align":"center"},attrs:{"data-marginTop":"39","data-fontSize":"36","data-lineHeight":"58"}},[e("span",[t._v("当前账户：")]),e("span",[t._v(t._s(t.phone))])]),t._v(" "),e("div",{staticClass:"box"},[e("div",{staticClass:"register img-size",attrs:{"data-width":"570","data-marginTop":"30","data-borderTopLeftRadius":"30","data-borderTopRightRadius":"30","data-fontSize":"30"}},[e("p",{staticClass:"name img-size",attrs:{"data-fontSize":"32","data-lineHeight":"90"}},[t._v("新手体验标")]),t._v(" "),t._m(1),t._v(" "),e("p",{staticClass:"img-size",attrs:{"data-fontSize":"30"}},[t._v("历史年化收益率")]),t._v(" "),e("div",{staticClass:"info2 img-size",attrs:{"data-width":"533","data-fontSize":"30","data-paddingTop":"30","data-paddingBottom":"30"}},[t._v("收益立即到账，随时可提现!")]),t._v(" "),e("div",{staticClass:"regbtn img-size",attrs:{"data-width":"460","data-height":"70","data-lineHeight":"70","data-marginTop":"70","data-fontSize":"32"},on:{click:t.toBill}},[t._v("使用10000元体验金")])]),t._v(" "),e("div",{staticClass:"bottbgg img-size",attrs:{"data-width":"586","data-height":"105"}})]),t._v(" "),e("p",{staticClass:"notice img-size",attrs:{"data-lineHeight":"100","data-fontSize":"24"}},[t._v("操作中如有任何疑问请致联系客服：400-690-8896")])]),t._v(" "),e("newbill")],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banntitle img-size",attrs:{"data-paddingTop":"30","data-paddingBottom":"30"}},[e("div",{staticClass:"title img-size",attrs:{"data-width":"475","data-height":"61"}},[e("p",{staticClass:"prti"},[e("span",{staticClass:"titlebga img-size",attrs:{"data-width":"246","data-height":"30","data-marginTop":"10"}},[t._v("新手福利")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"red img-size",attrs:{"data-fontSize":"80","data-lineHeight":"82"}},[t._v("12"),e("span",{staticClass:"img-size",attrs:{"data-fontSize":"60"}},[t._v(".0%")])])}]},t.exports.render._withStripped=!0}});