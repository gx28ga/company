webpackJsonp([4,12],{11:function(t,n,e){e(36);var i=e(27)(e(34),e(39),"data-v-55b073c2",null);i.options.__file="E:\\git\\source_tree\\develop\\dr_pc_web\\nodejsSever\\static\\activity\\app\\sportGame\\src\\module\\main\\xchg.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] xchg.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},27:function(t,n){t.exports=function(t,n,e,i){var a,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,o=t.default);var c="function"==typeof o?o.options:o;if(n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns),e&&(c._scopeId=e),i){var r=Object.create(c.computed||null);Object.keys(i).forEach(function(t){var n=i[t];r[t]=function(){return n}}),c.computed=r}return{esModule:a,exports:o,options:c}}},28:function(t,n,e){"use strict";(function(n){var i=function(t,i,a){n.ajax({url:t,data:i,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var n=e(29);new n({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}a(t)}})};t.exports={requestService:i,httpStatus:"/activity/1803/status.do",httpParticipate:"/activity/1803/participate.do",httpChance:"/activity/1803/chance.do",httpPlay:"/activity/1803/game.do",httpMyGift:"/activity/1803/gift_record.do",httpXchg:"/activity/1803/convert.do",httpGetSign:"/activity/1803/game_init.do",httpDailyRank:"/activity/1803/rank_day.do",httpFinalRank:"/activity/1803/rank_sum.do"}}).call(n,e(1))},29:function(t,n,e){"use strict";(function(n){function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}();e(30);var o=e(1),s=function(t){return t&&t.__esModule?t:{default:t}}(o),c=n("body");t.exports=function(){function t(e){i(this,t);var a=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){a.close()},cancelCallback:function(){a.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},n.extend(this.config,e),this.init()}return a(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var e=n("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:e,title:e.find(".title"),close:e.find(".close"),bg:e.find(".pop-cnt"),content:e.find(".content"),submit:e.find(".submit"),okbtn:e.find(".okbtn"),nextbtn:e.find(".next"),cancelbtn:e.find(".unbind"),error:e.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,n=this.config,e=n.time+"s";t.okbtn.addClass(n.okCls).html(n.okTxt),t.nextbtn.html(n.nextTxt),t.cancelbtn.addClass(n.cancelCls).html(n.cancelTxt),1==n.mask&&this.addContent("<div class='loading'></div>"),t.title.html(n.title),n.content&&this.add(function(){return n.content}),t.elem.addClass(n.superClass),t.bg.addClass(n.class),t.bg.css({"transition-duration":e,"animation-duration":e}),t.bg.css({"-webkit-transition-duration":e,"-webkit-animation-duration":e}),n.width&&t.bg.css({width:n.width}),n.title.length<2&&t.title.remove(),0==n.okBtn&&t.okbtn.remove(),0==n.nextBtn&&t.nextbtn.remove(),0==n.cancelBtn&&t.cancelbtn.remove(),0==n.okBtn&&0==n.cancelBtn&&t.submit.remove(),0==n.close&&t.close.remove()}},{key:"add",value:function(t){var n=this,e=this.element,i=this;return e.elem.parent().length?i.close():(c.append(e.elem),this.addContent(t),setTimeout(function(){e.bg.addClass("cur")},i.config.timingTime),s.default.body.css({overflowY:"hidden"}),i.history(),setTimeout(function(){n.updateEvent(),i.config.openDone()},i.config.time+20)),e.content}},{key:"addContent",value:function(t){var n=this.element.content;t&&"function"==typeof t?n.html(t.call(n)):n.html(t),setTimeout(function(){s.default.setImgSize()},100)}},{key:"history",value:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,n,e,i){function a(){t.removeClass("unbind").text(s),o.unbind(t,n,e,i)}var o=this,s=t.text();e=e||s,i=i||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(e),n(),setTimeout(a,1e3*i)})}},{key:"updateEvent",value:function(){var t=this,n=this.element,e=this.config;s.default.myAddListener(n.close,"mousedown",function(n){n.stopPropagation(),t.close()}),s.default.myAddListener(n.elem,"mousedown",function(n){n.stopPropagation(),e.windowClose&&t.close()}),s.default.myAddListener(n.bg,"mousedown",function(t){t.stopPropagation()}),1==e.okBtn&&s.default.myAddListener(n.okbtn,"mousedown",function(n){n.stopPropagation(),e.okCallback.call(t)}),1==e.nextBtn&&s.default.myAddListener(n.nextbtn,"mousedown",function(n){n.stopPropagation(),e.nextCallback.call(t)}),1==e.cancelBtn&&s.default.myAddListener(n.cancelbtn,"mousedown",function(n){n.stopPropagation(),e.cancelCallback.call(t)})}},{key:"error",value:function(t,n){var e=this.element.error,i=this.element.bg,a=this.config.time;i.addClass("errorcur"),e.html(t).addClass("cur"),setTimeout(function(){i.removeClass("errorcur"),i.css({"animation-duration":"0s"}),i.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){i.css({"animation-duration":a+"s"}),i.css({"-webkit-animation-duration":a+"s"})},1e3*a+10)},1e3*a+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var n=t.time||.1,e=this,i=this.element.error,a=this.config.time;i.html(t.txt).addClass("cur succee"),setTimeout(function(){e.hideError(),t.callback&&t.callback()},1e3*a+1e3*n)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var e=this.element;e.bg.removeClass("cur"),setTimeout(function(){e.elem.remove(),t&&"function"==n.type(t)&&t(),s.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(n,e(3))},30:function(t,n){},34:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0});var i=e(28),a=e(8),o=function(t){return t&&t.__esModule?t:{default:t}}(a),s=[7500,15e3,27500,5e4,135e3,165e3,265e3];n.default={data:function(){return{isLogin:!1,isAjaxing:!1,myEngy:0}},components:{lockScreen:function(t){e.e(11).then(function(){var n=[e(31)];t.apply(null,n)}.bind(this)).catch(e.oe)}},mounted:function(){t.setImgSize(),this.isLogin=t.isLogin,t.isLogin?this.__getMyEngy():t.login()},methods:{__getMyEngy:function(){var n=this;this.isAjaxing=!0;var e={uid:t.uid};(0,i.requestService)(i.httpChance,e,function(t){n.isAjaxing=!1;var e=t.success,i=t.errorMsg;if(0==e)return(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:i||"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("closePopEvent",function(){n.$emit("xchg-init-failed")}),!1;var a=Number(t.map.myDescription);n.myEngy=a>0?a:0})},onXchg:function(n){if(!t.isLogin)return!1;if(this.myEngy<s[n-2])(0,o.default)("notify",{props:{transition:"bounceIn",popState:4}});else{var e=this;(0,o.default)("notify",{props:{transition:"fadeIn",popState:5,cost:s[n-2]},on:{"confirm-ok-event":function(){e.__submit(n)}}})}},__submit:function(n){var e=this;this.isAjaxing=!0;var a=!0;setTimeout(function(){a=!1},1001);var s={uid:t.uid,convertType:n};(0,i.requestService)(i.httpXchg,s,function(t){var n=setInterval(function(){if(!1===a){clearInterval(n),e.isAjaxing=!1;var i=t.success,s=t.errorCode,c=t.errorMsg;if(0==i)return 10010==s?(0,o.default)("notify",{props:{transition:"bounceIn",popState:4}}):(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:c||"系统错误，请联系客服。",btnBackHome:!1}}),!1;(0,o.default)("notify",{props:{transition:"rotate3d",popState:6}}),e.myEngy=t.map.myDescription}},1)})},onBack:function(){var n=t.getQueryString("from"),e=n&&"home"!=n?"#/"+n:"",i=window.location.pathname;t.wap?i+=e+"?wap=true&uid="+t.uid:i+=e+"?uid="+t.uid,window.location.replace(i)}}}}).call(n,e(1))},36:function(t,n){},39:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main-section"},[e("div",{staticClass:"img-size xchg-wrapper",attrs:{"data-width":"750","data-height":"1770"}},[e("lock-screen",{attrs:{lock:t.isAjaxing}}),t._v(" "),e("div",{staticClass:"img-size my-engy",attrs:{"data-top":"202","data-left":"40","data-fontSize":"36","data-lineHeight":"36"}},[t._v("我的能量："),e("span",[t._v(t._s(t.myEngy))])]),t._v(" "),e("div",{staticClass:"xchg-btn img-size",attrs:{"data-top":"532","data-left":"226","data-width":"120","data-height":"56"},on:{click:function(n){t.onXchg(2)}}}),t._v(" "),e("div",{staticClass:"xchg-btn img-size",attrs:{"data-top":"532","data-left":"574","data-width":"120","data-height":"56"},on:{click:function(n){t.onXchg(3)}}}),t._v(" "),e("div",{staticClass:"xchg-btn img-size",attrs:{"data-top":"850","data-left":"226","data-width":"120","data-height":"56"},on:{click:function(n){t.onXchg(4)}}}),t._v(" "),e("div",{staticClass:"xchg-btn img-size",attrs:{"data-top":"850","data-left":"574","data-width":"120","data-height":"56"},on:{click:function(n){t.onXchg(5)}}}),t._v(" "),e("div",{staticClass:"xchg-btn img-size",attrs:{"data-top":"1167","data-left":"226","data-width":"120","data-height":"56"},on:{click:function(n){t.onXchg(6)}}}),t._v(" "),e("div",{staticClass:"xchg-btn img-size",attrs:{"data-top":"1167","data-left":"574","data-width":"120","data-height":"56"},on:{click:function(n){t.onXchg(7)}}}),t._v(" "),e("div",{staticClass:"xchg-btn img-size",attrs:{"data-top":"1485","data-left":"226","data-width":"120","data-height":"56"},on:{click:function(n){t.onXchg(8)}}})],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0}});