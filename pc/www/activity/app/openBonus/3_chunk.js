webpackJsonp([3],{17:function(t,e,n){n(50);var i=n(27)(n(34),n(70),null,null);i.options.__file="E:\\git\\source_tree\\develop\\dr_pc_web\\nodejsSever\\static\\activity\\app\\openBonus\\src\\module\\main\\index.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},27:function(t,e){t.exports=function(t,e,n,i){var a,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,o=t.default);var r="function"==typeof o?o.options:o;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),n&&(r._scopeId=n),i){var c=Object.create(r.computed||null);Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}}),r.computed=c}return{esModule:a,exports:o,options:r}}},28:function(t,e,n){"use strict";(function(e){var i=function(t,i,a){e.ajax({url:t,data:i,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var e=n(29);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}a(t)}})};t.exports={requestService:i,httpStatus:"/activity/february/work/status.do",httpParticipate:"/activity/february/work/participate.do",httpChance:"/activity/february/work/chance.do",httpDraw:"/activity/february/work/draw.do",httpRank:"/activity/february/work/rank.do",httpCount:"/activity/february/work/game.do",httpMyGift:"/activity/february/work/my_record.do",httpXchg:"/activity/february/work/exchange.do",httpGetSign:"/activity/february/work/game_init.do"}}).call(e,n(1))},29:function(t,e,n){"use strict";(function(e){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(30);var o=n(1),s=function(t){return t&&t.__esModule?t:{default:t}}(o),r=e("body");t.exports=function(){function t(n){i(this,t);var a=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){a.close()},cancelCallback:function(){a.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,n),this.init()}return a(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var n=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:n,title:n.find(".title"),close:n.find(".close"),bg:n.find(".pop-cnt"),content:n.find(".content"),submit:n.find(".submit"),okbtn:n.find(".okbtn"),nextbtn:n.find(".next"),cancelbtn:n.find(".unbind"),error:n.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,n=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":n,"animation-duration":n}),t.bg.css({"-webkit-transition-duration":n,"-webkit-animation-duration":n}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,n=this.element,i=this;return n.elem.parent().length?i.close():(r.append(n.elem),this.addContent(t),setTimeout(function(){n.bg.addClass("cur")},i.config.timingTime),s.default.body.css({overflowY:"hidden"}),i.history(),setTimeout(function(){e.updateEvent(),i.config.openDone()},i.config.time+20)),n.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){s.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,n,i){function a(){t.removeClass("unbind").text(s),o.unbind(t,e,n,i)}var o=this,s=t.text();n=n||s,i=i||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(n),e(),setTimeout(a,1e3*i)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,n=this.config;s.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),s.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),n.windowClose&&t.close()}),s.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==n.okBtn&&s.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),n.okCallback.call(t)}),1==n.nextBtn&&s.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),n.nextCallback.call(t)}),1==n.cancelBtn&&s.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),n.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var n=this.element.error,i=this.element.bg,a=this.config.time;i.addClass("errorcur"),n.html(t).addClass("cur"),setTimeout(function(){i.removeClass("errorcur"),i.css({"animation-duration":"0s"}),i.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){i.css({"animation-duration":a+"s"}),i.css({"-webkit-animation-duration":a+"s"})},1e3*a+10)},1e3*a+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,n=this,i=this.element.error,a=this.config.time;i.html(t.txt).addClass("cur succee"),setTimeout(function(){n.hideError(),t.callback&&t.callback()},1e3*a+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var n=this.element;n.bg.removeClass("cur"),setTimeout(function(){n.elem.remove(),t&&"function"==e.type(t)&&t(),s.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,n(3))},30:function(t,e){},34:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(61),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={components:{Main:a.default}}},36:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=n(28),a=n(8),o=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{status:0,isLogin:!1,isAjaxing:!1,chanceNum:0}},components:{lockScreen:function(t){n.e(11).then(function(){var e=[n(31)];t.apply(null,e)}.bind(this)).catch(n.oe)}},mounted:function(){t.setImgSize(),t.mobile(),t.getAppInfo(),this.isLogin=t.isLogin,this.isAjaxing=!0,this.getActivityStatus()},methods:{onRule:function(){var e=window.location.pathname+"#/rule";t.wap?(e+="?wap=true",t.isLogin&&(e+="&uid="+t.uid)):t.isLogin&&(e+="?uid="+t.uid),window.location.replace(e)},onHowGet:function(){(0,o.default)("howGetChance",{props:{transition:"fadeIn"}})},getActivityStatus:function(){var t=this;(0,i.requestService)(i.httpStatus,{},function(e){if(0==e.success)return t.isAjaxing=!1,(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:e.errorMsg?e.errorMsg:"系统错误，请联系客服。",btnBackHome:!0}}),!1;t.status=e.map.status,t.endTime=e.map.endTime;var n=t.status;if(0!=n)return t.isAjaxing=!1,(0,o.default)("warning",{props:{transition:"bounceIn",title:n<0?"敬请期待":"温馨提示",detail:n<0?"活动即将开始, 期待您的热情参与!":"此活动已结束，您可以参加其他活动",btnBackHome:!0}}),!1;t.isLogin?t.checkParticipatable():t.isAjaxing=!1})},checkParticipatable:function(){var e=this;if(!t.isLogin)return!1;var n={uid:t.uid};(0,i.requestService)(i.httpParticipate,n,function(t){if(t.flag){if(0==t.success)return e.isAjaxing=!1,(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg?t.errorMsg:"系统错误，请联系客服。",btnBackHome:!0}}),!1;e.getMyChance()}else e.isAjaxing=!1,(0,o.default)("warning",{props:{transition:"bounceIn",title:"感谢关注！",detail:"VIP渠道用户不能参加，敬请期待后续活动……",btnBackHome:!0}})})},getMyChance:function(){var e=this;if(!t.isLogin)return!1;var n={uid:t.uid};(0,i.requestService)(i.httpChance,n,function(n){if(e.isAjaxing=!1,0==n.success)return(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:n.errorMsg?n.errorMsg:"系统错误，请联系客服。",btnBackHome:!0}}),!1;e.chanceNum=n.map.totalchance,setTimeout(function(){t.setImgSize()},20)})},login:function(){t.getQueryString("wap")&&"force"!==t.getQueryString("force")?this.__launchApp():t.login()},__launchApp:function(){if(t.weixin)(0,o.default)("warning",{props:{transition:"bounceIn",title:"温馨提示",detail:'请点击右上角选择"在浏览器打开"',btnBackHome:!1}});else if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var e=new Date;window.setTimeout(function(){new Date-e<2200?window.location.href="itms-apps://itunes.apple.com/cn/app/duo-rong-li-cai/id1095192150?mt=8":window.close()},2e3),window.location.href="duorongcf://"}else if(navigator.userAgent.match(/android/i))try{window.location.href="duorongcf://",setTimeout(function(){window.location.href="http://app.duorongcf.com/dr_app.apk"},500)}catch(t){window.location.href="http://app.duorongcf.com/dr_app.apk"}},onGoDraw:function(){if(this.chanceNum<=0)return void(0,o.default)("notify",{props:{transition:"bounceIn",popState:1}});window.location.replace(window.location.pathname+"#/draw/?"+(1==t.wap?"wap=true&":"")+"uid="+t.uid)},onDrawTen:function(){var e=this;if(!t.isLogin)return!1;if(this.chanceNum<10)return void(0,o.default)("notify",{props:{transition:"bounceIn",popState:this.chanceNum>1?2:1}});this.isAjaxing=!0;var n=!0;setTimeout(function(){n=!1},1001);var a={uid:t.uid,isMany:!0};(0,i.requestService)(i.httpDraw,a,function(t){var i=setInterval(function(){if(0==n){if(clearInterval(i),e.isAjaxing=!1,0==t.success){var a={10000:1,10001:2}[t.errorCode+""];return a?(0,o.default)("notify",{props:{transition:"bounceIn",popState:a},on:{"close-only-event":e.onBack}}):(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg?t.errorMsg:"系统错误，请联系客服。",btnBackHome:!0}}),!1}(0,o.default)("notify",{props:{transition:"fadeIn",popState:6}}),e.chanceNum=t.map.totalchance}},1)})},onGoMy:function(){var e=window.location.pathname+"#/record/?"+(1==t.wap?"wap=true&":"")+"uid="+t.uid+"&from=home";window.location.replace(e)}}}}).call(e,n(1))},50:function(t,e){},54:function(t,e){},61:function(t,e,n){n(54);var i=n(27)(n(36),n(74),null,null);i.options.__file="E:\\git\\source_tree\\develop\\dr_pc_web\\nodejsSever\\static\\activity\\app\\openBonus\\src\\module\\main\\main.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},70:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-section"},[n("Main")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},74:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-box img-size",attrs:{"data-width":"750","data-height":"1334"}},[n("lock-screen",{attrs:{lock:t.isAjaxing}}),t._v(" "),n("div",{staticClass:"rule-link img-size",attrs:{"data-top":"0","data-right":"0","data-width":"138","data-height":"60"},on:{click:t.onRule}}),t._v(" "),n("div",{staticClass:"chance img-size",attrs:{"data-top":"800","data-fontSize":"36","data-lineHeight":"36"}},[t._v("剩余次数："),n("span",{staticClass:"img-size",attrs:{"data-fontSize":"44"}},[t._v(t._s(t.isLogin?t.chanceNum:"--"))])]),t._v(" "),n("div",{staticClass:"how-get img-size",attrs:{"data-top":"1080","data-left":"250","data-width":"248","data-height":"40"},on:{click:t.onHowGet}}),t._v(" "),t.isLogin?[n("div",{staticClass:"draw-link img-size",attrs:{"data-top":"963","data-left":"50","data-width":"310","data-height":"97"},on:{click:t.onGoDraw}}),t._v(" "),n("div",{staticClass:"draw-ten img-size",attrs:{"data-top":"963","data-left":"387","data-width":"310","data-height":"97"},on:{click:t.onDrawTen}}),t._v(" "),n("div",{staticClass:"my-link img-size",attrs:{"data-top":"1165","data-left":"225","data-width":"300","data-height":"80"},on:{click:t.onGoMy}})]:t._e(),t._v(" "),t.isLogin?t._e():[n("div",{staticClass:"draw-link img-size",attrs:{"data-top":"963","data-left":"50","data-width":"310","data-height":"97"},on:{click:t.login}}),t._v(" "),n("div",{staticClass:"draw-ten img-size",attrs:{"data-top":"963","data-left":"387","data-width":"310","data-height":"97"},on:{click:t.login}}),t._v(" "),n("div",{staticClass:"my-link img-size",attrs:{"data-top":"1165","data-left":"225","data-width":"300","data-height":"80"},on:{click:t.login}})],t._v(" "),n("div",{staticClass:"gift-link img-size",attrs:{"data-top":"1260","data-left":"250","data-width":"248","data-height":"40"},on:{click:t.onRule}})],2)},staticRenderFns:[]},t.exports.render._withStripped=!0}});