webpackJsonp([9],{26:function(t,e,n){"use strict";(function(e){var i=function(t,i,a){e.ajax({url:t,data:i,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var e=n(27);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}a(t)}})};t.exports={requestService:i,httpStatus:"/activity/1806/status.do",httpParticipate:"/activity/1806/participate.do",httpChance:"/activity/1806/chance.do",httpPlay:"/activity/1806/game.do",httpMyGift:"/activity/1806/gift_record.do",httpGetSign:"/activity/1806/game_init.do",httpRank:"/activity/1806/rank.do",httpXchg:"/activity/1806/convert.do"}}).call(e,n(1))},27:function(t,e,n){"use strict";(function(e){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(28);var s=n(1),o=function(t){return t&&t.__esModule?t:{default:t}}(s),c=e("body");t.exports=function(){function t(n){i(this,t);var a=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){a.close()},cancelCallback:function(){a.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,n),this.init()}return a(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var n=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:n,title:n.find(".title"),close:n.find(".close"),bg:n.find(".pop-cnt"),content:n.find(".content"),submit:n.find(".submit"),okbtn:n.find(".okbtn"),nextbtn:n.find(".next"),cancelbtn:n.find(".unbind"),error:n.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,n=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":n,"animation-duration":n}),t.bg.css({"-webkit-transition-duration":n,"-webkit-animation-duration":n}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,n=this.element,i=this;return n.elem.parent().length?i.close():(c.append(n.elem),this.addContent(t),setTimeout(function(){n.bg.addClass("cur")},i.config.timingTime),o.default.body.css({overflowY:"hidden"}),i.history(),setTimeout(function(){e.updateEvent(),i.config.openDone()},i.config.time+20)),n.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){o.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,n,i){function a(){t.removeClass("unbind").text(o),s.unbind(t,e,n,i)}var s=this,o=t.text();n=n||o,i=i||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(n),e(),setTimeout(a,1e3*i)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,n=this.config;o.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),o.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),n.windowClose&&t.close()}),o.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==n.okBtn&&o.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),n.okCallback.call(t)}),1==n.nextBtn&&o.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),n.nextCallback.call(t)}),1==n.cancelBtn&&o.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),n.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var n=this.element.error,i=this.element.bg,a=this.config.time;i.addClass("errorcur"),n.html(t).addClass("cur"),setTimeout(function(){i.removeClass("errorcur"),i.css({"animation-duration":"0s"}),i.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){i.css({"animation-duration":a+"s"}),i.css({"-webkit-animation-duration":a+"s"})},1e3*a+10)},1e3*a+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,n=this,i=this.element.error,a=this.config.time;i.html(t.txt).addClass("cur succee"),setTimeout(function(){n.hideError(),t.callback&&t.callback()},1e3*a+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var n=this.element;n.bg.removeClass("cur"),setTimeout(function(){n.elem.remove(),t&&"function"==e.type(t)&&t(),o.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,n(2))},28:function(t,e){},35:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=n(26),a=n(9),s=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{isLogin:!1,isAjaxing:!1,myBills:0,myRcds:[],myCntChance:0,pgIndex:0}},components:{lockScreen:function(t){n.e(6).then(function(){var e=[n(29)];t.apply(null,e)}.bind(this)).catch(n.oe)}},computed:{rcdPageNum:function(){return Math.ceil(this.myRcds.length/10)},rcdPages:function(){var t=this.myRcds;t.sort(function(t,e){return e.addTime-t.addTime});for(var e=Math.ceil(t.length/10),n=[],i=void 0,a=0;a<e;a++)i=t.slice(10*a,10*(a+1)),n.push(i);return n.slice(0)}},filters:{transferTimeStr:function(t){if(Number(t)){return new Date(t).Format("yyyy-M-d hh:mm")}return""}},mounted:function(){t.setImgSize(),this.isLogin=t.isLogin,t.isLogin&&this.getMyGift()},methods:{getContentLength:function(t){return null==t?0:("string"!=typeof t&&(t+=""),t.replace(/[^\x00-\xff]/g,"01").length)},getMyGift:function(){var e=this;if(!t.isLogin)return!1;this.isAjaxing=!0;var n={uid:t.uid};(0,i.requestService)(i.httpMyGift,n,function(n){e.isAjaxing=!1;var i=n.success,a=n.errorMsg;if(0==i)return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:a||"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("closePopEvent",function(){e.$emit("record-error")}),!1;e.myRcds=n.map.lotteryList,e.$nextTick(function(){t.setImgSize()})})},onNav:function(t){var e=this.pgIndex+t;e<0||e+1>this.rcdPageNum||(this.pgIndex=e)},onBack:function(){var e=t.getQueryString("from"),n=e&&"home"!=e?"#/"+e:"",i=window.location.pathname;t.wap?i+=n+"?wap=true&uid="+t.uid:i+=n+"?uid="+t.uid,window.location.replace(i)}}}}).call(e,n(1))},50:function(t,e){},63:function(t,e,n){n(50);var i=n(25)(n(35),n(75),"data-v-6d4061f7",null);i.options.__file="E:\\git\\duorongcf\\develop\\pc\\nodejsSever\\static\\activity\\app\\2018\\06\\toyMachine\\src\\module\\main\\record.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] record.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},75:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-section"},[n("div",{staticClass:"img-size record-wrapper",attrs:{"data-width":"750","data-height":"1334"}},[n("lockScreen",{attrs:{lock:t.isAjaxing}}),t._v(" "),t.myRcds.length>0?[n("div",{staticClass:"record-area img-size",attrs:{"data-top":"265","data-left":"44"}},t._l(t.rcdPages,function(e,i){return n("div",t._l(e,function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:t.pgIndex==i,expression:"pgIndex == no"}],staticClass:"row img-size",attrs:{"data-fontSize":"30","data-lineHeight":"60"}},[n("div",{staticClass:"img-size",class:t.getContentLength(e.giftName)>16?"left":"",attrs:{"data-width":t.getContentLength(e.giftName)>16?385:254,"data-marginRight":t.getContentLength(e.giftName)>16?0:130}},[t._v(t._s(e.giftName))]),n("div",{staticClass:"img-size",attrs:{"data-width":"248"}},[t._v(t._s(t._f("transferTimeStr")(e.addTime)))])])}))})),t._v(" "),n("div",{staticClass:"pager-box img-size",attrs:{"data-top":"900"}},[n("div",{staticClass:"nav img-size",class:t.pgIndex<=0?"disable":"",attrs:{"data-fontSize":"28","data-lineHeight":"55","data-marginRight":"50"},on:{click:function(e){t.onNav(-1)}}},[t._v("上一页")]),n("div",{staticClass:"img-size",attrs:{"data-fontSize":"34","data-lineHeight":"55"}},[t._v(t._s(t.pgIndex+1)+" / "+t._s(t.rcdPageNum))]),n("div",{staticClass:"nav img-size",class:t.pgIndex+1>=t.rcdPageNum?"disable":"",attrs:{"data-fontSize":"28","data-lineHeight":"55","data-marginLeft":"50"},on:{click:function(e){t.onNav(1)}}},[t._v("下一页")])])]:t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.myRcds.length<=0,expression:"myRcds.length <= 0"}],staticClass:"section img-size",attrs:{"data-top":"468"}},[n("div",{staticClass:"no-data img-size",attrs:{"data-borderRadius":"12","data-width":"300","data-height":"200","data-fontSize":"24","data-lineHeight":"200"}},[t._v("暂无获奖记录")])])],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0}});