webpackJsonp([5],{21:function(t,i,a){a(55);var e=a(27)(a(47),a(74),null,null);e.options.__file="E:\\git\\duorongcf\\develop\\pc\\nodejsSever\\static\\activity\\app\\farm\\src\\module\\main\\rule.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] rule.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports},27:function(t,i){t.exports=function(t,i,a,e){var s,n=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,n=t.default);var d="function"==typeof n?n.options:n;if(i&&(d.render=i.render,d.staticRenderFns=i.staticRenderFns),a&&(d._scopeId=a),e){var o=Object.create(d.computed||null);Object.keys(e).forEach(function(t){var i=e[t];o[t]=function(){return i}}),d.computed=o}return{esModule:s,exports:n,options:d}}},28:function(t,i,a){"use strict";(function(i){var e=function(t,e,s){i.ajax({url:t,data:e,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var i=a(29);new i({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}s(t)}})};t.exports={requestService:e,httpStatus:"/activity/1805/status.do",httpParticipate:"/activity/1805/participate.do",httpChance:"/activity/1805/chance.do",httpPlay:"/activity/1805/game.do",httpMyGift:"/activity/1805/gift_record.do",httpXchg:"/activity/1805/convert.do",httpRank:"/activity/1805/rank.do"}}).call(i,a(1))},29:function(t,i,a){"use strict";(function(i){function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(t,i){for(var a=0;a<i.length;a++){var e=i[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,a,e){return a&&t(i.prototype,a),e&&t(i,e),i}}();a(30);var n=a(1),r=function(t){return t&&t.__esModule?t:{default:t}}(n),d=i("body");t.exports=function(){function t(a){e(this,t);var s=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){s.close()},cancelCallback:function(){s.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},i.extend(this.config,a),this.init()}return s(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var a=i("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:a,title:a.find(".title"),close:a.find(".close"),bg:a.find(".pop-cnt"),content:a.find(".content"),submit:a.find(".submit"),okbtn:a.find(".okbtn"),nextbtn:a.find(".next"),cancelbtn:a.find(".unbind"),error:a.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,i=this.config,a=i.time+"s";t.okbtn.addClass(i.okCls).html(i.okTxt),t.nextbtn.html(i.nextTxt),t.cancelbtn.addClass(i.cancelCls).html(i.cancelTxt),1==i.mask&&this.addContent("<div class='loading'></div>"),t.title.html(i.title),i.content&&this.add(function(){return i.content}),t.elem.addClass(i.superClass),t.bg.addClass(i.class),t.bg.css({"transition-duration":a,"animation-duration":a}),t.bg.css({"-webkit-transition-duration":a,"-webkit-animation-duration":a}),i.width&&t.bg.css({width:i.width}),i.title.length<2&&t.title.remove(),0==i.okBtn&&t.okbtn.remove(),0==i.nextBtn&&t.nextbtn.remove(),0==i.cancelBtn&&t.cancelbtn.remove(),0==i.okBtn&&0==i.cancelBtn&&t.submit.remove(),0==i.close&&t.close.remove()}},{key:"add",value:function(t){var i=this,a=this.element,e=this;return a.elem.parent().length?e.close():(d.append(a.elem),this.addContent(t),setTimeout(function(){a.bg.addClass("cur")},e.config.timingTime),r.default.body.css({overflowY:"hidden"}),e.history(),setTimeout(function(){i.updateEvent(),e.config.openDone()},e.config.time+20)),a.content}},{key:"addContent",value:function(t){var i=this.element.content;t&&"function"==typeof t?i.html(t.call(i)):i.html(t),setTimeout(function(){r.default.setImgSize()},100)}},{key:"history",value:function(t){function i(){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,i,a,e){function s(){t.removeClass("unbind").text(r),n.unbind(t,i,a,e)}var n=this,r=t.text();a=a||r,e=e||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(a),i(),setTimeout(s,1e3*e)})}},{key:"updateEvent",value:function(){var t=this,i=this.element,a=this.config;r.default.myAddListener(i.close,"mousedown",function(i){i.stopPropagation(),t.close()}),r.default.myAddListener(i.elem,"mousedown",function(i){i.stopPropagation(),a.windowClose&&t.close()}),r.default.myAddListener(i.bg,"mousedown",function(t){t.stopPropagation()}),1==a.okBtn&&r.default.myAddListener(i.okbtn,"mousedown",function(i){i.stopPropagation(),a.okCallback.call(t)}),1==a.nextBtn&&r.default.myAddListener(i.nextbtn,"mousedown",function(i){i.stopPropagation(),a.nextCallback.call(t)}),1==a.cancelBtn&&r.default.myAddListener(i.cancelbtn,"mousedown",function(i){i.stopPropagation(),a.cancelCallback.call(t)})}},{key:"error",value:function(t,i){var a=this.element.error,e=this.element.bg,s=this.config.time;e.addClass("errorcur"),a.html(t).addClass("cur"),setTimeout(function(){e.removeClass("errorcur"),e.css({"animation-duration":"0s"}),e.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){e.css({"animation-duration":s+"s"}),e.css({"-webkit-animation-duration":s+"s"})},1e3*s+10)},1e3*s+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var i=t.time||.1,a=this,e=this.element.error,s=this.config.time;e.html(t.txt).addClass("cur succee"),setTimeout(function(){a.hideError(),t.callback&&t.callback()},1e3*s+1e3*i)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var a=this.element;a.bg.removeClass("cur"),setTimeout(function(){a.elem.remove(),t&&"function"==i.type(t)&&t(),r.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(i,a(3))},30:function(t,i){},47:function(t,i,a){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0});var s=a(28),n=a(8),r=function(t){return t&&t.__esModule?t:{default:t}}(n);i.default={data:function(){return{startTime:0,endTime:0,cultivatePrize:["1-10积分","1%加息券","1.5%加息券","5元JD卡","劳动勋章"],raisePrize:["1-30积分","1.5%加息券","2%加息券","10元JD卡","30元JD卡","星享卡","小米电饭煲3L","劳动勋章"],totalRankPrize:["iPhoneX 64g","华为P20 Pro手机","以色列美容仪","Kindle Paperwhite","松下护眼台灯","米家电磁炉","飞利浦剃须刀","星享卡","小米移动电源5000mah","30元JD卡"],xchgMap:[{val:"62",gift:"小米手环"},{val:"84",gift:"kindle入门款"},{val:"115",gift:"airpods"},{val:"140",gift:"米家扫地机器人"},{val:"175",gift:"索尼PS4主机"},{val:"350",gift:"戴森空调扇"}]}},filters:{convertTimestampToDatetime:function(t){var i=new Date(t);return i?i.Format("yyyy.M.d"):t}},mounted:function(){if(t.setImgSize(),this.getActivityPeriod(),t.getQueryString("scroll")){var i=document.getElementsByClassName("scroll-dest")[0],a=i.getBoundingClientRect();e(".rule-main").scrollTop(a.top)}},methods:{getActivityPeriod:function(){var t=this;(0,s.requestService)(s.httpStatus,{},function(i){var a=i.success,e=i.errorMsg;if(0==a)return(0,r.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:e||"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("closePopEvent",t.onBack),!1;t.startTime=i.map.startTime,t.endTime=i.map.endTime})},onBack:function(){var i=window.location.pathname;t.wap?(i+="?wap=true",t.isLogin&&(i+="&uid="+t.uid)):t.isLogin&&(i+="?uid="+t.uid),window.location.replace(i)}}}}).call(i,a(1),a(3))},55:function(t,i){},74:function(t,i,a){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"rule-main flip-left-bounce"},[a("div",{staticClass:"img-size content-wrapper",attrs:{"data-width":"750","data-height":"4200"}},[a("div",{staticClass:"back-btn img-size",attrs:{"data-left":"20","data-top":"13","data-width":"59","data-height":"57","data-fontSize":"64","data-lineHeight":"64"},on:{click:t.onBack}}),t._v(" "),a("div",{staticClass:"rule-area img-size",attrs:{"data-top":"225","data-left":"32","data-width":"700","data-fontSize":"30","data-lineHeight":"48"}},[a("div",{staticClass:"item"},[t._m(0),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("活动时间："+t._s(t._f("convertTimestampToDatetime")(t.startTime))+" ~ "+t._s(t._f("convertTimestampToDatetime")(t.endTime)))])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"item"},[t._m(3),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("【随机劳动奖励】"),a("br"),t._v("每回劳动（锄草、浇水、喂食、清扫），都会获得1份劳动奖励，通过抽奖获得。奖品如下："),a("br"),t._v("• 农场模式：\n          "),t._m(4),t._v(" "),t._l(t.cultivatePrize,function(i,e){return a("div",{staticClass:"row bg-clrfu",class:e+1==t.cultivatePrize.length?"last":""},[a("div",{staticClass:"td single img-size",attrs:{"data-width":"240","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(i))])])}),a("div",{staticClass:"img-size",attrs:{"data-marginBottom":"18"}}),t._v("\n          • 牧场模式：\n          "),t._m(5),t._v(" "),t._l(t.raisePrize,function(i,e){return a("div",{staticClass:"row bg-clrfu",class:e+1==t.raisePrize.length?"last":""},[a("div",{staticClass:"td single img-size",attrs:{"data-width":"240","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(i))])])})],2)]),t._v(" "),a("div",{staticClass:"item"},[t._m(6),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("【劳模表彰大会 领奖啦】"),a("br"),t._v("劳动勋章可用于兑换不同的奖品，逾期不兑换，视为自动放弃兑换奖励，概不补发。奖品如下：\n          "),t._m(7),t._v(" "),t._l(t.xchgMap,function(i,e){return a("div",{staticClass:"row bg-clrfu",class:e+1==t.xchgMap.length?"last":""},[a("div",{staticClass:"td left img-size",attrs:{"data-width":"130","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(i.val))]),a("div",{staticClass:"td img-size",attrs:{"data-width":"340","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(i.gift))])])})],2)]),t._v(" "),a("div",{staticClass:"item"},[t._m(8),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("【劳动最光荣 多融致敬赠豪礼】"),a("br"),t._v("活动期间，根据最终获得的劳动勋章进行排名，排名前10的用户，依次获得如下大奖\n          "),t._m(9),t._v(" "),t._l(t.totalRankPrize,function(i,e){return a("div",{staticClass:"row bg-clrfu",class:e+1==t.totalRankPrize.length?"last":""},[a("div",{staticClass:"td left img-size",attrs:{"data-width":"130","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(e+1))]),a("div",{staticClass:"td img-size",attrs:{"data-width":"340","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(i))])])}),t._v(" "),a("div",{staticClass:"inner-item comment img-size",attrs:{"data-fontSize":"24","data-lineHeight":"32"}},[t._v("* 以活动结束最终排名为准。如劳动勋章总数相同，则按时间顺序优先排名")])],2)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12)])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("【农场劳动】"),a("br"),t._v("• 单笔投资20≤期限＜120天产品，每满10000元，可获得1次农场锄草机会。5次锄草即可获赠1枚劳模勋章"),a("br"),t._v("• 单笔投资20≤期限＜120天产品，每满30000元，可额外获得1次农场浇水机会。1次浇水即可获赠1枚劳模勋章"),a("br"),a("p",{staticClass:"img-size",attrs:{"data-marginTop":"10"}},[t._v("举例：投资90天产品7万，可获得7次锄草+2次浇水机会，共计获得3枚勋章，以此类推。")])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("【牧场劳动】"),a("br"),t._v("• 单笔投资 ≥120天产品，每满10000元，可获得1次牧场喂食机会。2次喂食即可获赠1枚劳模勋章"),a("br"),t._v("• 单笔投资 ≥120天产品，每满30000元，可额外获得1次牧场清扫机会。1次清扫即可获赠2枚劳模勋章"),a("br"),a("p",{staticClass:"img-size",attrs:{"data-marginTop":"10"}},[t._v("举例：投资147天产品7万，可获得7次喂食+2次清扫机会，共计获得7枚勋章，以此类推。")])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row bg-clrfu img-size",attrs:{"data-marginTop":"18"}},[a("div",{staticClass:"td head single img-size",attrs:{"data-width":"240","data-fontSize":"24","data-lineHeight":"48"}},[t._v("奖 品")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row bg-clrfu img-size",attrs:{"data-marginTop":"18"}},[a("div",{staticClass:"td head single img-size",attrs:{"data-width":"240","data-fontSize":"24","data-lineHeight":"48"}},[t._v("奖 品")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row bg-clrfu img-size",attrs:{"data-marginTop":"28"}},[a("div",{staticClass:"td head left img-size",attrs:{"data-width":"130","data-fontSize":"24","data-lineHeight":"48"}},[t._v("劳模勋章")]),a("div",{staticClass:"td head img-size",attrs:{"data-width":"340","data-fontSize":"24","data-lineHeight":"48"}},[t._v("奖 品")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row bg-clrfu img-size",attrs:{"data-marginTop":"28"}},[a("div",{staticClass:"td head left img-size",attrs:{"data-width":"130","data-fontSize":"24","data-lineHeight":"48"}},[t._v("名 次")]),a("div",{staticClass:"td head img-size",attrs:{"data-width":"340","data-fontSize":"24","data-lineHeight":"48"}},[t._v("奖 品")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；活动结束后尚未使用的游戏机会将被清零，概不补发。")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；活动中获得的积分，即时发放到您的账户，积分可前往【积分商城】兑换红包、加息券、实物奖品等")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part paragraph-symbol img-size",attrs:{"data-width":"32","data-height":"51"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"25","data-height":"25"}})]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"645"}},[t._v("本活动最终解释权归多融财富所有")])])}]},t.exports.render._withStripped=!0}});