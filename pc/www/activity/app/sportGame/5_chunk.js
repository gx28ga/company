webpackJsonp([5],{21:function(t,i,a){a(58);var e=a(27)(a(47),a(79),null,null);e.options.__file="E:\\git\\source_tree\\develop\\dr_pc_web\\nodejsSever\\static\\activity\\app\\sportGame\\src\\module\\main\\rule.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] rule.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports},27:function(t,i){t.exports=function(t,i,a,e){var s,n=t=t||{},d=typeof t.default;"object"!==d&&"function"!==d||(s=t,n=t.default);var o="function"==typeof n?n.options:n;if(i&&(o.render=i.render,o.staticRenderFns=i.staticRenderFns),a&&(o._scopeId=a),e){var r=Object.create(o.computed||null);Object.keys(e).forEach(function(t){var i=e[t];r[t]=function(){return i}}),o.computed=r}return{esModule:s,exports:n,options:o}}},28:function(t,i,a){"use strict";(function(i){var e=function(t,e,s){i.ajax({url:t,data:e,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var i=a(29);new i({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}s(t)}})};t.exports={requestService:e,httpStatus:"/activity/1803/status.do",httpParticipate:"/activity/1803/participate.do",httpChance:"/activity/1803/chance.do",httpPlay:"/activity/1803/game.do",httpMyGift:"/activity/1803/gift_record.do",httpXchg:"/activity/1803/convert.do",httpGetSign:"/activity/1803/game_init.do",httpDailyRank:"/activity/1803/rank_day.do",httpFinalRank:"/activity/1803/rank_sum.do"}}).call(i,a(1))},29:function(t,i,a){"use strict";(function(i){function e(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var s=function(){function t(t,i){for(var a=0;a<i.length;a++){var e=i[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(i,a,e){return a&&t(i.prototype,a),e&&t(i,e),i}}();a(30);var n=a(1),d=function(t){return t&&t.__esModule?t:{default:t}}(n),o=i("body");t.exports=function(){function t(a){e(this,t);var s=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){s.close()},cancelCallback:function(){s.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},i.extend(this.config,a),this.init()}return s(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var a=i("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:a,title:a.find(".title"),close:a.find(".close"),bg:a.find(".pop-cnt"),content:a.find(".content"),submit:a.find(".submit"),okbtn:a.find(".okbtn"),nextbtn:a.find(".next"),cancelbtn:a.find(".unbind"),error:a.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,i=this.config,a=i.time+"s";t.okbtn.addClass(i.okCls).html(i.okTxt),t.nextbtn.html(i.nextTxt),t.cancelbtn.addClass(i.cancelCls).html(i.cancelTxt),1==i.mask&&this.addContent("<div class='loading'></div>"),t.title.html(i.title),i.content&&this.add(function(){return i.content}),t.elem.addClass(i.superClass),t.bg.addClass(i.class),t.bg.css({"transition-duration":a,"animation-duration":a}),t.bg.css({"-webkit-transition-duration":a,"-webkit-animation-duration":a}),i.width&&t.bg.css({width:i.width}),i.title.length<2&&t.title.remove(),0==i.okBtn&&t.okbtn.remove(),0==i.nextBtn&&t.nextbtn.remove(),0==i.cancelBtn&&t.cancelbtn.remove(),0==i.okBtn&&0==i.cancelBtn&&t.submit.remove(),0==i.close&&t.close.remove()}},{key:"add",value:function(t){var i=this,a=this.element,e=this;return a.elem.parent().length?e.close():(o.append(a.elem),this.addContent(t),setTimeout(function(){a.bg.addClass("cur")},e.config.timingTime),d.default.body.css({overflowY:"hidden"}),e.history(),setTimeout(function(){i.updateEvent(),e.config.openDone()},e.config.time+20)),a.content}},{key:"addContent",value:function(t){var i=this.element.content;t&&"function"==typeof t?i.html(t.call(i)):i.html(t),setTimeout(function(){d.default.setImgSize()},100)}},{key:"history",value:function(t){function i(){return t.apply(this,arguments)}return i.toString=function(){return t.toString()},i}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,i,a,e){function s(){t.removeClass("unbind").text(d),n.unbind(t,i,a,e)}var n=this,d=t.text();a=a||d,e=e||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(a),i(),setTimeout(s,1e3*e)})}},{key:"updateEvent",value:function(){var t=this,i=this.element,a=this.config;d.default.myAddListener(i.close,"mousedown",function(i){i.stopPropagation(),t.close()}),d.default.myAddListener(i.elem,"mousedown",function(i){i.stopPropagation(),a.windowClose&&t.close()}),d.default.myAddListener(i.bg,"mousedown",function(t){t.stopPropagation()}),1==a.okBtn&&d.default.myAddListener(i.okbtn,"mousedown",function(i){i.stopPropagation(),a.okCallback.call(t)}),1==a.nextBtn&&d.default.myAddListener(i.nextbtn,"mousedown",function(i){i.stopPropagation(),a.nextCallback.call(t)}),1==a.cancelBtn&&d.default.myAddListener(i.cancelbtn,"mousedown",function(i){i.stopPropagation(),a.cancelCallback.call(t)})}},{key:"error",value:function(t,i){var a=this.element.error,e=this.element.bg,s=this.config.time;e.addClass("errorcur"),a.html(t).addClass("cur"),setTimeout(function(){e.removeClass("errorcur"),e.css({"animation-duration":"0s"}),e.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){e.css({"animation-duration":s+"s"}),e.css({"-webkit-animation-duration":s+"s"})},1e3*s+10)},1e3*s+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var i=t.time||.1,a=this,e=this.element.error,s=this.config.time;e.html(t.txt).addClass("cur succee"),setTimeout(function(){a.hideError(),t.callback&&t.callback()},1e3*s+1e3*i)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var a=this.element;a.bg.removeClass("cur"),setTimeout(function(){a.elem.remove(),t&&"function"==i.type(t)&&t(),d.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(i,a(3))},30:function(t,i){},47:function(t,i,a){"use strict";(function(t,e){Object.defineProperty(i,"__esModule",{value:!0});var s=a(28),n=a(8),d=function(t){return t&&t.__esModule?t:{default:t}}(n);i.default={data:function(){return{startTime:0,endTime:0,dailyPrize:["1500积分","800积分","500积分","300积分","100积分"],totalRankPrize:["戴森空气净化扇","iPad","科沃斯扫地机器人","Sk-2小灯泡精华","小米2空气净化器","松下洗牙器","飞利浦剃须刀","小米手环","星享卡","50元JD卡"],xchgMap:[{val:"7500",gift:"小米移动电源"},{val:"15000",gift:"星享卡"},{val:"27500",gift:"小米手环"},{val:"50000",gift:"拍立得"},{val:"135000",gift:"Foreo洁面仪"},{val:"165000",gift:"戴森吹风机"},{val:"265000",gift:"6666元JD卡"}]}},filters:{convertTimestampToDatetime:function(t){var i=new Date(t);return i?i.Format("yyyy.M.d"):t}},mounted:function(){if(t.setImgSize(),this.getActivityPeriod(),t.getQueryString("scroll")){var i=document.getElementsByClassName("scroll-dest")[0],a=i.getBoundingClientRect();e(".rule-main").scrollTop(a.top)}},methods:{getActivityPeriod:function(){var t=this;(0,s.requestService)(s.httpStatus,{},function(i){var a=i.success,e=i.errorMsg;if(0==a)return(0,d.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:e||"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("closePopEvent",t.onBack),!1;t.startTime=i.map.startTime,t.endTime=i.map.endTime})},onBack:function(){var i=window.location.pathname;t.wap?(i+="?wap=true",t.isLogin&&(i+="&uid="+t.uid)):t.isLogin&&(i+="?uid="+t.uid),window.location.replace(i)}}}}).call(i,a(1),a(3))},58:function(t,i){},79:function(t,i,a){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"rule-main flip-left-bounce"},[a("div",{staticClass:"img-size content-wrapper",attrs:{"data-width":"750","data-height":"3100"}},[a("div",{staticClass:"back-btn img-size",attrs:{"data-left":"0","data-top":"0","data-width":"80","data-height":"100","data-fontSize":"64","data-lineHeight":"64"},on:{click:t.onBack}},[t._v("«")]),t._v(" "),a("div",{staticClass:"rule-area img-size",attrs:{"data-top":"140","data-left":"20","data-width":"720","data-fontSize":"30","data-lineHeight":"46"}},[a("div",{staticClass:"item"},[a("div",{staticClass:"part img-size",attrs:{"data-width":"45"}},[t._v("1、")]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"660"}},[t._v("活动时间："+t._s(t._f("convertTimestampToDatetime")(t.startTime))+" ~ "+t._s(t._f("convertTimestampToDatetime")(t.endTime)))])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"item"},[a("div",{staticClass:"part img-size",attrs:{"data-width":"45"}},[t._v("4、")]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"660"}},[t._v("每日能量大作战（每天运动能量可参与每日排名）\n          "),t._m(2),t._v(" "),t._l(t.dailyPrize,function(i,e){return a("div",{staticClass:"row bg-clrfu",class:e+1==t.dailyPrize.length?"last":""},[a("div",{staticClass:"td left img-size",attrs:{"data-width":"80","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(e+1))]),a("div",{staticClass:"td img-size",attrs:{"data-width":"274","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(i))])])})],2)]),t._v(" "),t._m(3),t._v(" "),a("div",{staticClass:"item scroll-dest"},[a("div",{staticClass:"part img-size",attrs:{"data-width":"45"}},[t._v("6、")]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"660","data-marginBottom":"20"}},[t._v("运动达人就是我（排名，包含已兑换掉的运动能量）\n          "),t._m(4),t._v(" "),t._l(t.totalRankPrize,function(i,e){return a("div",{staticClass:"row bg-clrfu",class:e+1==t.totalRankPrize.length?"last":""},[a("div",{staticClass:"td left img-size",attrs:{"data-width":"130","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(e+1))]),a("div",{staticClass:"td img-size",attrs:{"data-width":"240","data-fontSize":"24","data-lineHeight":"48"}},[t._v(t._s(i))])])}),t._v(" "),a("div",{staticClass:"inner-item comment img-size",attrs:{"data-fontSize":"24","data-lineHeight":"32"}},[t._v("* 以活动结束最终排名为准。如总能量相同，则按时间顺序优先排名")])],2)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part img-size",attrs:{"data-width":"45"}},[t._v("2、")]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"660"}},[t._v("活动期间："),a("br"),t._v("• 投资≥20天以上产品，单笔投资≥10000元，即可获得踢毽子机会1次，可累计"),a("br"),t._v("• 投资≥120天以上产品，单笔投资≥30000元，可额外获得踢足球机会2次，可累计"),a("br"),t._v("• 举例：投资143天产品8万元，可获得踢毽子8次，踢足球4次，以此类推")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part img-size",attrs:{"data-width":"45"}},[t._v("3、")]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"660"}},[t._v("运动对抗赛："),a("br"),t._v("• 【踢毽子】5秒内点击屏幕中的毽子，每成功点击一次即可获得5运动能量"),a("br"),t._v("• 【踢足球】5秒内点击屏幕中的足球，每成功点击一次即可获得10运动能量\n          "),a("div",{staticClass:"inner-item"},[t._v("选择踢毽子/踢足球10次可进入省力模式，不参与游戏，直接获赠1500/3000的能量值及随机小奖品")]),t._v(" "),a("div",{staticClass:"inner-item"},[t._v("如时间到达则游戏结束，请在5秒内尽可能的多点踢毽子/足球；每次游戏结束可获赠运动对抗赛随机小奖品：")]),t._v(" "),a("div",{staticClass:"row img-size",attrs:{"data-marginLeft":"14","data-marginTop":"28","data-marginBottom":"20"}},[a("div",{staticClass:"td out-left bg-clrfu img-size",attrs:{"data-width":"84","data-height":"240"}},[a("div",{staticClass:"img-size",attrs:{"data-width":"60","data-fontSize":"24"}},[t._v("奖品包含")])]),a("div",{staticClass:"td out-right img-size"},[a("div",{staticClass:"row bg-clrfu img-size"},[a("div",{staticClass:"td single head left img-size",attrs:{"data-paddingLeft":"20","data-width":"447","data-fontSize":"24","data-lineHeight":"48"}},[t._v("积分：5 / 10 / 50")])]),t._v(" "),a("div",{staticClass:"row bg-clrfu"},[a("div",{staticClass:"td left img-size",attrs:{"data-paddingLeft":"20","data-width":"171","data-fontSize":"24","data-lineHeight":"48"}},[t._v("1.2%加息券")]),a("div",{staticClass:"td img-size",attrs:{"data-width":"256","data-paddingLeft":"20","data-fontSize":"24","data-lineHeight":"48"}},[t._v("10元红包")])]),t._v(" "),a("div",{staticClass:"row bg-clrfu"},[a("div",{staticClass:"td left img-size",attrs:{"data-paddingLeft":"20","data-width":"171","data-fontSize":"24","data-lineHeight":"48"}},[t._v("10元京东卡")]),a("div",{staticClass:"td img-size",attrs:{"data-width":"256","data-paddingLeft":"20","data-fontSize":"24","data-lineHeight":"48"}},[t._v("能量值： 5 / 10")])]),t._v(" "),a("div",{staticClass:"row bg-clrfu"},[a("div",{staticClass:"td left img-size",attrs:{"data-paddingLeft":"20","data-width":"171","data-fontSize":"24","data-lineHeight":"48"}},[t._v("星享卡")]),a("div",{staticClass:"td img-size",attrs:{"data-width":"256","data-paddingLeft":"20","data-fontSize":"24","data-lineHeight":"48"}},[t._v("松下离子蒸汽美容仪")])]),t._v(" "),a("div",{staticClass:"row bg-clrfu last"},[a("div",{staticClass:"td single left last img-size",attrs:{"data-paddingLeft":"20","data-width":"447","data-fontSize":"24","data-lineHeight":"48"}},[t._v("Kindle paperwhite")])])])])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row bg-clrfu img-size",attrs:{"data-marginTop":"28"}},[a("div",{staticClass:"td head left img-size",attrs:{"data-width":"80","data-fontSize":"24","data-lineHeight":"48"}},[t._v("名 次")]),a("div",{staticClass:"td head img-size",attrs:{"data-width":"274","data-fontSize":"24","data-lineHeight":"48"}},[t._v("奖 品")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part img-size",attrs:{"data-width":"45"}},[t._v("5、")]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"660","data-marginBottom":"20"}},[t._v("我的能量不可想象（运动能量可以兑换不同奖品），详见活动页面\n        ")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"row bg-clrfu img-size",attrs:{"data-marginTop":"28"}},[a("div",{staticClass:"td head left img-size",attrs:{"data-width":"130","data-fontSize":"24","data-lineHeight":"48"}},[t._v("名 次")]),a("div",{staticClass:"td head img-size",attrs:{"data-width":"240","data-fontSize":"24","data-lineHeight":"48"}},[t._v("奖 品")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part img-size",attrs:{"data-width":"45"}},[t._v("7、")]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"660"}},[t._v("活动结束之后，尚未使用的机会一律作废。如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part img-size",attrs:{"data-width":"45"}},[t._v("8、")]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"660"}},[t._v("奖品以活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；积分、红包、加息券实时发放；积分可用于前往“积分商城”兑换红包、加息券、各种实物奖励等")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"item"},[a("div",{staticClass:"part img-size",attrs:{"data-width":"45"}},[t._v("9、")]),t._v(" "),a("div",{staticClass:"part img-size",attrs:{"data-width":"660"}},[t._v("本活动最终解释权归多融财富所有。")])])}]},t.exports.render._withStripped=!0}});