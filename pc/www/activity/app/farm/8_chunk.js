webpackJsonp([8],{20:function(t,e,n){n(53);var i=n(27)(n(46),n(72),"data-v-03455762",null);i.options.__file="E:\\git\\duorongcf\\develop\\pc\\nodejsSever\\static\\activity\\app\\farm\\src\\module\\main\\playRaise.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] playRaise.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},27:function(t,e){t.exports=function(t,e,n,i){var a,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,o=t.default);var c="function"==typeof o?o.options:o;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),n&&(c._scopeId=n),i){var r=Object.create(c.computed||null);Object.keys(i).forEach(function(t){var e=i[t];r[t]=function(){return e}}),c.computed=r}return{esModule:a,exports:o,options:c}}},28:function(t,e,n){"use strict";(function(e){var i=function(t,i,a){e.ajax({url:t,data:i,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var e=n(29);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}a(t)}})};t.exports={requestService:i,httpStatus:"/activity/1805/status.do",httpParticipate:"/activity/1805/participate.do",httpChance:"/activity/1805/chance.do",httpPlay:"/activity/1805/game.do",httpMyGift:"/activity/1805/gift_record.do",httpXchg:"/activity/1805/convert.do",httpRank:"/activity/1805/rank.do"}}).call(e,n(1))},29:function(t,e,n){"use strict";(function(e){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(30);var o=n(1),s=function(t){return t&&t.__esModule?t:{default:t}}(o),c=e("body");t.exports=function(){function t(n){i(this,t);var a=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){a.close()},cancelCallback:function(){a.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,n),this.init()}return a(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var n=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:n,title:n.find(".title"),close:n.find(".close"),bg:n.find(".pop-cnt"),content:n.find(".content"),submit:n.find(".submit"),okbtn:n.find(".okbtn"),nextbtn:n.find(".next"),cancelbtn:n.find(".unbind"),error:n.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,n=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":n,"animation-duration":n}),t.bg.css({"-webkit-transition-duration":n,"-webkit-animation-duration":n}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,n=this.element,i=this;return n.elem.parent().length?i.close():(c.append(n.elem),this.addContent(t),setTimeout(function(){n.bg.addClass("cur")},i.config.timingTime),s.default.body.css({overflowY:"hidden"}),i.history(),setTimeout(function(){e.updateEvent(),i.config.openDone()},i.config.time+20)),n.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){s.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,n,i){function a(){t.removeClass("unbind").text(s),o.unbind(t,e,n,i)}var o=this,s=t.text();n=n||s,i=i||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(n),e(),setTimeout(a,1e3*i)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,n=this.config;s.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),s.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),n.windowClose&&t.close()}),s.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==n.okBtn&&s.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),n.okCallback.call(t)}),1==n.nextBtn&&s.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),n.nextCallback.call(t)}),1==n.cancelBtn&&s.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),n.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var n=this.element.error,i=this.element.bg,a=this.config.time;i.addClass("errorcur"),n.html(t).addClass("cur"),setTimeout(function(){i.removeClass("errorcur"),i.css({"animation-duration":"0s"}),i.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){i.css({"animation-duration":a+"s"}),i.css({"-webkit-animation-duration":a+"s"})},1e3*a+10)},1e3*a+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,n=this,i=this.element.error,a=this.config.time;i.html(t.txt).addClass("cur succee"),setTimeout(function(){n.hideError(),t.callback&&t.callback()},1e3*a+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var n=this.element;n.bg.removeClass("cur"),setTimeout(function(){n.elem.remove(),t&&"function"==e.type(t)&&t(),s.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,n(3))},30:function(t,e){},46:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=n(28),a=n(8),o=function(t){return t&&t.__esModule?t:{default:t}}(a),s=["feeding","cleaning"],c=["喂食","清扫"],r=["anm-feeding.gif","anm-cleaning.gif"];e.default={data:function(){return{isAjaxing:!1,jobId:void 0,chance:0,playedTimes:0,workingState:0}},components:{"lock-screen":function(t){n.e(11).then(function(){var e=[n(31)];t.apply(null,e)}.bind(this)).catch(n.oe)}},computed:{jobClass:function(){return s[this.jobId]},jobName:function(){return c[this.jobId]}},mounted:function(){t.setImgSize(),t.isLogin?(this.jobId=Number(t.getQueryString("cat"))%2,this.getInitData()):t.login()},methods:{getInitData:function(){var e=this;if(!t.isLogin)return!1;this.isAjaxing=!0;var n={uid:t.uid};(0,i.requestService)(i.httpChance,n,function(t){e.isAjaxing=!1;var n=t.success,i=t.errorMsg;if(0==n)return(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:i||"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("closePopEvent",e.onBack),!1;var a=t.map;e.chance=[a.tsChance,a.qsChance][e.jobId],e.playedTimes=[a.tsChanceSY,a.qsChanceSY][e.jobId]})},onPlay:function(t,e){var n=this;if(!(this.workingState>0)){var i=this.chance,a=i<1?1:e&&i<10?2:-1;if(a>0)return void(0,o.default)("notify",{props:{transition:"bounceIn",popState:a}});this.workingState=1;var c=document.querySelector("."+s[this.jobId]+"-anm"),l=new Image;l.onload=function(){n.isAjaxing=!1,c.style.background="url('"+l.src+"')",c.style.backgroundSize="contain",setTimeout(function(){n.workingState=2},100);var t=Date.now(),i=setInterval(function(){Date.now()-t>=3e3&&(clearInterval(i),n.workingState=0,c.style.background="none",n.__submit(e))},1)},this.isAjaxing=!0,l.src="./src/images/"+r[this.jobId]+"?"+1e6*Math.random()}},__submit:function(e){var n=this;if(!t.isLogin)return!1;this.isAjaxing=!0;var a=void 0,s=void 0,c=void 0,r=function(){n.isAjaxing=!1,(0,o.default)("showGift",{props:{transition:"rotate3d",giftType:e?0:a,giftName:s,medal:Math.max(c,0)},on:{"go-to-record":function(){n.onBack("","&tab=3")}}})},l=!1;setTimeout(function(){l?r():l=!0},3e3);var d={uid:t.uid,pattern:this.jobId+3,isMany:e};(0,i.requestService)(i.httpPlay,d,function(t){var i=t.success,d=t.errorCode,u=t.errorMsg;if(0==i){n.isAjaxing=!1;var f=10009==d?1:e&&10011==d?2:-1;return f>0?(0,o.default)("notify",{props:{transition:"bounceIn",popState:f}}):(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:u||"系统错误，请联系客服。",btnBackHome:!1}}),!1}a=t.map.prizeType,s=t.map.prizeName,c=Number(t.map.medal),n.chance=t.map.totalchance,n.playedTimes+=e?10:1,l?r():l=!0})},onBack:function(){var e=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],arguments.length>1&&void 0!==arguments[1]?arguments[1]:"");t.wap?window.location.replace(window.location.pathname+"#/?wap=true&uid="+t.uid+e):window.location.replace(window.location.pathname+"#/?uid="+t.uid+e)}}}}).call(e,n(1))},53:function(t,e){},72:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-section"},[n("lock-screen",{attrs:{lock:t.isAjaxing}}),t._v(" "),n("div",{staticClass:"img-size content-wrapper",attrs:{"data-width":"750","data-height":"1334"}},[n("div",{staticClass:"img-size back-btn",attrs:{"data-top":"13","data-left":"20","data-width":"59","data-height":"57"},on:{click:t.onBack}}),t._v(" "),n("div",{staticClass:"img-size greet",attrs:{"data-top":"26","data-left":"102","data-fontSize":"30","data-lineHeight":"30"}},[t._v("hi，"+t._s(t.jobName)+"达人")]),t._v(" "),n("div",{staticClass:"img-size played-times",attrs:{"data-top":"28","data-right":"48","data-fontSize":"26","data-lineHeight":"30"}},[t._v("已玩 "),n("span",{staticClass:"img-size",attrs:{"data-fontSize":"30"}},[t._v(t._s(t.playedTimes))]),t._v(" 次")]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.workingState<=1&&"feeding"==t.jobClass,expression:"workingState <= 1 && jobClass == 'feeding'"}]},[n("div",{staticClass:"img-size feed-box",attrs:{"data-top":"668","data-left":"134","data-width":"146","data-height":"66"}}),t._v(" "),n("div",{staticClass:"img-size feed-bag pulse-slow",attrs:{"data-top":"630","data-left":"27","data-width":"103","data-height":"103"},on:{click:function(e){t.onPlay(e,!1)}}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.workingState<=1&&"cleaning"==t.jobClass,expression:"workingState <= 1 && jobClass == 'cleaning'"}]},[n("div",{staticClass:"img-size faeces",attrs:{"data-top":"491","data-left":"315","data-width":"249","data-height":"142"}}),t._v(" "),n("div",{staticClass:"img-size broom pulse-slow",attrs:{"data-top":"445","data-left":"416","data-width":"150","data-height":"157"},on:{click:function(e){t.onPlay(e,!1)}}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.workingState>=1&&"feeding"==t.jobClass,expression:"workingState >= 1 && jobClass == 'feeding'"}],staticClass:"img-size feeding-anm",attrs:{"data-top":"220","data-width":"750","data-height":"530"}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.workingState>=1&&"cleaning"==t.jobClass,expression:"workingState >= 1 && jobClass == 'cleaning'"}],staticClass:"img-size cleaning-anm",attrs:{"data-top":"220","data-width":"750","data-height":"530"}}),t._v(" "),n("div",{staticClass:"img-size chance",attrs:{"data-top":"880","data-left":"300","data-fontSize":"30","data-lineHeight":"55"}},[t._v("剩余次数："),n("span",{staticClass:"img-size",attrs:{"data-fontSize":"36","data-lineHeight":"60"}},[t._v(t._s(t.chance))])]),t._v(" "),n("div",{staticClass:"img-size play-btn",class:t.jobClass,attrs:{"data-top":"988","data-left":"39","data-width":"305","data-height":"90"},on:{click:function(e){t.onPlay(e,!1)}}}),t._v(" "),n("div",{staticClass:"img-size play-ten",attrs:{"data-top":"988","data-left":"405","data-width":"305","data-height":"90"},on:{click:function(e){t.onPlay(e,!0)}}}),t._v(" "),n("div",{staticClass:"img-size back-link",attrs:{"data-top":"1133","data-left":"327","data-width":"96","data-height":"27"},on:{click:t.onBack}})])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});