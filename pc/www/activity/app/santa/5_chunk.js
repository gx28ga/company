webpackJsonp([5],{19:function(t,e,i){i(46);var a=i(26)(i(35),i(66),null,null);a.options.__file="E:\\git\\source_tree\\santa\\dr_pc_web\\nodejsSever\\static\\activity\\app\\santa\\src\\module\\main\\rule.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] rule.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},26:function(t,e){t.exports=function(t,e,i,a){var n,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(n=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),a){var c=Object.create(r.computed||null);Object.keys(a).forEach(function(t){var e=a[t];c[t]=function(){return e}}),r.computed=c}return{esModule:n,exports:s,options:r}}},27:function(t,e,i){"use strict";t.exports={httpStatus:"/activity/december/christmas/status.do",httpParticipate:"/activity/december/christmas/participate.do",httpChance:"/activity/december/christmas/chance.do",httpTreeRank:"/activity/december/christmas/rank.do",httpPlay:"/activity/december/christmas/game.do",httpMyGift:"/activity/december/christmas/my_gift.do",httpTear:"/activity/december/christmas/pull.do",httpGetSign:"/activity/december/christmas/game_init.do",httpConvert:"/activity/december/christmas/convert.do",httpDailyRank:"/activity/december/christmas/jf_rank.do"}},28:function(t,e,i){"use strict";(function(e){function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}();i(29);var s=i(1),o=function(t){return t&&t.__esModule?t:{default:t}}(s),r=e("body");t.exports=function(){function t(i){a(this,t);var n=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){n.close()},cancelCallback:function(){n.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,i),this.init()}return n(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var i=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:i,title:i.find(".title"),close:i.find(".close"),bg:i.find(".pop-cnt"),content:i.find(".content"),submit:i.find(".submit"),okbtn:i.find(".okbtn"),nextbtn:i.find(".next"),cancelbtn:i.find(".unbind"),error:i.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,i=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":i,"animation-duration":i}),t.bg.css({"-webkit-transition-duration":i,"-webkit-animation-duration":i}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,i=this.element,a=this;return i.elem.parent().length?a.close():(r.append(i.elem),this.addContent(t),setTimeout(function(){i.bg.addClass("cur")},a.config.timingTime),o.default.body.css({overflowY:"hidden"}),a.history(),setTimeout(function(){e.updateEvent(),a.config.openDone()},a.config.time+20)),i.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){o.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,i,a){function n(){t.removeClass("unbind").text(o),s.unbind(t,e,i,a)}var s=this,o=t.text();i=i||o,a=a||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(i),e(),setTimeout(n,1e3*a)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,i=this.config;o.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),o.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),i.windowClose&&t.close()}),o.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==i.okBtn&&o.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),i.okCallback.call(t)}),1==i.nextBtn&&o.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),i.nextCallback.call(t)}),1==i.cancelBtn&&o.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),i.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var i=this.element.error,a=this.element.bg,n=this.config.time;a.addClass("errorcur"),i.html(t).addClass("cur"),setTimeout(function(){a.removeClass("errorcur"),a.css({"animation-duration":"0s"}),a.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){a.css({"animation-duration":n+"s"}),a.css({"-webkit-animation-duration":n+"s"})},1e3*n+10)},1e3*n+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,i=this,a=this.element.error,n=this.config.time;a.html(t.txt).addClass("cur succee"),setTimeout(function(){i.hideError(),t.callback&&t.callback()},1e3*n+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var i=this.element;i.bg.removeClass("cur"),setTimeout(function(){i.elem.remove(),t&&"function"==e.type(t)&&t(),o.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,i(3))},29:function(t,e){},35:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=i(27),n=i(8),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{startTime:0,endTime:0,giftData:[{small:"1积分",big:"圣诞树"},{small:"3积分",big:"2.0%加息券"},{small:"5积分",big:"300积分"},{small:"10积分",big:"500积分"},{small:"1.0%加息券",big:"10元JD卡"},{small:"1.5%加息券",big:"50元JD卡"},{small:"　",big:"星享卡"},{small:"　",big:"膳魔师保温杯"},{small:"　",big:"Kindle入门款"},{small:"　",big:"Foreo luna mini2洁面仪"}]}},filters:{convertTimestampToDatetime:function(t){var e=new Date(t);return e?e.Format("yyyy.M.d"):t}},mounted:function(){t.setImgSize(),this.getActivityPeriod()},methods:{__requestService:function(e,a,n){t.ajax({url:e,data:a,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var e=i(28);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}n(t)}})},getActivityPeriod:function(){var t=this;this.__requestService(a.httpStatus,{},function(e){if(0==e.success&&e.hasOwnProperty("errorMsg"))return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:e.errorMsg,btnBackHome:!0}}),!1;t.startTime=e.map.startTime,t.endTime=e.map.endTime})},onBack:function(){var e=window.location.pathname;t.wap?(e+="?wap=true",t.isLogin&&(e+="&uid="+t.uid)):t.isLogin&&(e+="?uid="+t.uid),window.location.replace(e)}}}}).call(e,i(1))},46:function(t,e){},66:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"rule-main flip-left-bounce"},[i("div",{staticClass:"img-size content-wrapper",attrs:{"data-width":"750","data-height":"2000"}},[i("div",{staticClass:"back-btn img-size",attrs:{"data-left":"20","data-top":"-10","data-fontSize":"64"},on:{click:t.onBack}},[t._v("«")]),t._v(" "),i("div",{staticClass:"rule-area img-size",attrs:{"data-top":"170","data-left":"32","data-width":"686","data-borderRadius":"16","data-paddingTop":"40","data-paddingBottom":"30","data-fontSize":"24","data-lineHeight":"32"}},[i("div",{staticClass:"item"},[i("div",{staticClass:"part index img-size",attrs:{"data-top":"6","data-height":"20","data-width":"45"}}),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"610"}},[t._v("活动时间："+t._s(t._f("convertTimestampToDatetime")(t.startTime))+" ~ "+t._s(t._f("convertTimestampToDatetime")(t.endTime)))])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._l(t.giftData,function(e,a){return i("div",{staticClass:"row",class:a+1==t.giftData.length?"last":""},[i("div",{staticClass:"td left img-size",attrs:{"data-width":"290","data-fontSize":"20","data-lineHeight":"40"}},[t._v(t._s(e.small))]),i("div",{staticClass:"td img-size",attrs:{"data-width":"290","data-fontSize":"20","data-lineHeight":"40"}},[t._v(t._s(e.big))])])}),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)],2)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("div",{staticClass:"part index img-size",attrs:{"data-top":"6","data-height":"20","data-width":"45"}}),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"610"}},[t._v("活动期间，单笔投资≥20天产品，每满10000元，可获得1次追击圣诞老人机会。单笔投资≥120天产品，每满5万元，可获得8次追击圣诞老人机会。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("div",{staticClass:"part index img-size",attrs:{"data-top":"6","data-height":"20","data-width":"45"}}),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"610"}},[t._v("单笔投资≥120天产品，每满5万元，可额外直接获赠5个圣诞树。圣诞树可用来参与排名，获取排名奖励\n          "),i("div",{staticClass:"inner-item"},[t._v("例如：投资147天产品23万，可获得35次追击机会，且可"),i("br"),t._v("　　　额外获得20个圣诞树")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("div",{staticClass:"part index img-size",attrs:{"data-top":"6","data-height":"20","data-width":"45"}}),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"610"}},[t._v("每次追击5秒，点中圣诞老人即有机会获得一个圣诞小礼盒。可直接打开小礼盒获赠小奖品或合成大礼盒获得更丰厚的奖品，每50个小礼盒可以转换成一个大礼盒，拆开大礼盒，可获得更丰厚的奖品1份。（一旦转换成大礼盒，不可撤销，不可转换回小礼盒）\n        ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"row img-size",attrs:{"data-marginTop":"28"}},[i("div",{staticClass:"td head left img-size",attrs:{"data-width":"290","data-fontSize":"24","data-lineHeight":"48"}},[t._v("小礼盒")]),i("div",{staticClass:"td head img-size",attrs:{"data-width":"290","data-fontSize":"24","data-lineHeight":"48"}},[t._v("大礼盒")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item img-size",attrs:{"data-marginTop":"36"}},[i("div",{staticClass:"part index img-size",attrs:{"data-top":"6","data-height":"20","data-width":"45"}}),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"610"}},[t._v("活动期间，获得圣诞树最多的前10名获得排名奖励，依次为：iphoneX 64G/惠人原汁机第三代/飞利浦空气炸锅/科沃斯扫地机器人/LG趣拍得/兰蔻粉水400ML/欧姆龙家用电子血压计/小米体脂称/星享卡/50元JD卡\n          "),i("div",{staticClass:"inner-item"},[t._v("* 以活动结束最终排名为准。如成绩相同，按最先到达该"),i("br"),t._v("　成绩的排名在前")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item img-size",attrs:{"data-marginTop":"36"}},[i("div",{staticClass:"part index img-size",attrs:{"data-top":"6","data-height":"20","data-width":"45"}}),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"610"}},[t._v("活动期间，每天进行一次排名，根据每天投资的年化总金额进行排名（年化总金额=投资金额*产品期限/360），前6名可以获得积分奖励，依次为：2000积分/1000积分/800积分/500积分/300积分/100积分\n          "),i("div",{staticClass:"inner-item"},[t._v("*以当天23:59:59最终排名结果为准。如成绩相同，按最先到达该成绩的排名在前")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("div",{staticClass:"part index img-size",attrs:{"data-top":"6","data-height":"20","data-width":"45"}}),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"610"}},[t._v("如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("div",{staticClass:"part index img-size",attrs:{"data-top":"6","data-height":"20","data-width":"45"}}),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"610"}},[t._v("活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；积分奖励，将于活动结束后5个工作日内发放，积分可前往【积分商城】用于兑换红包、加息券及各种实物奖品。")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("div",{staticClass:"part index img-size",attrs:{"data-top":"6","data-height":"20","data-width":"45"}}),t._v(" "),i("div",{staticClass:"part img-size",attrs:{"data-width":"610"}},[t._v("本活动最终解释权归多融财富所有。")])])}]},t.exports.render._withStripped=!0}});