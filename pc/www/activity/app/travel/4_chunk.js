webpackJsonp([4],{15:function(t,e,i){i(41);var s=i(24)(i(29),i(62),null,null);s.options.__file="E:\\git\\source_tree\\travel\\dr_pc_web\\nodejsSever\\static\\activity\\app\\travel\\src\\module\\main\\draw.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] draw.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},24:function(t,e){t.exports=function(t,e,i,s){var n,a=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(n=t,a=t.default);var r="function"==typeof a?a.options:a;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),s){var c=Object.create(r.computed||null);Object.keys(s).forEach(function(t){var e=s[t];c[t]=function(){return e}}),r.computed=c}return{esModule:n,exports:a,options:r}}},25:function(t,e,i){"use strict";t.exports={httpStatus:"/activity/septemberTrip/status.do",httpParticipate:"/activity/septemberTrip/participate.do",httpChance:"/activity/septemberTrip/case_num.do",httpPlay:"/activity/septemberTrip/case_info.do",httpCard:"/activity/septemberTrip/my_cards.do",httpConvert:"/activity/septemberTrip/card_exchange.do",httpXchg:"/activity/septemberTrip/exchange.do",httpMyRecord:"/activity/septemberTrip/case_record.do",httpRank:"/activity/septemberTrip/my_rank.do"}},26:function(t,e,i){"use strict";(function(e){function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}();i(27);var a=i(0),o=function(t){return t&&t.__esModule?t:{default:t}}(a),r=e("body");t.exports=function(){function t(i){s(this,t);var n=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){n.close()},cancelCallback:function(){n.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,i),this.init()}return n(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var i=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:i,title:i.find(".title"),close:i.find(".close"),bg:i.find(".pop-cnt"),content:i.find(".content"),submit:i.find(".submit"),okbtn:i.find(".okbtn"),nextbtn:i.find(".next"),cancelbtn:i.find(".unbind"),error:i.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,i=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":i,"animation-duration":i}),t.bg.css({"-webkit-transition-duration":i,"-webkit-animation-duration":i}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,i=this.element,s=this;return i.elem.parent().length?s.close():(r.append(i.elem),this.addContent(t),setTimeout(function(){i.bg.addClass("cur")},s.config.timingTime),o.default.body.css({overflowY:"hidden"}),s.history(),setTimeout(function(){e.updateEvent(),s.config.openDone()},s.config.time+20)),i.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){o.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,i,s){function n(){t.removeClass("unbind").text(o),a.unbind(t,e,i,s)}var a=this,o=t.text();i=i||o,s=s||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(i),e(),setTimeout(n,1e3*s)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,i=this.config;o.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),o.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),i.windowClose&&t.close()}),o.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==i.okBtn&&o.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),i.okCallback.call(t)}),1==i.nextBtn&&o.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),i.nextCallback.call(t)}),1==i.cancelBtn&&o.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),i.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var i=this.element.error,s=this.element.bg,n=this.config.time;s.addClass("errorcur"),i.html(t).addClass("cur"),setTimeout(function(){s.removeClass("errorcur"),s.css({"animation-duration":"0s"}),s.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){s.css({"animation-duration":n+"s"}),s.css({"-webkit-animation-duration":n+"s"})},1e3*n+10)},1e3*n+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,i=this,s=this.element.error,n=this.config.time;s.html(t.txt).addClass("cur succee"),setTimeout(function(){i.hideError(),t.callback&&t.callback()},1e3*n+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var i=this.element;i.bg.removeClass("cur"),setTimeout(function(){i.elem.remove(),t&&"function"==e.type(t)&&t(),o.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,i(3))},27:function(t,e){},29:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s=i(25),n=i(8),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{isLogin:!1,chanceNum:0,isOnBusy:!1,stopCity:0}},computed:{},mounted:function(){t.setImgSize(),t.mobile(),t.getAppInfo(),this.isLogin=t.isLogin,t.isLogin?this.getChance():t.login()},methods:{__requestService:function(e,s,n){t.ajax({url:e,data:s,callback:!0,success:function(t){if(!t.success&&!t.hasOwnProperty("errorMsg")){var e=i(26);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}n(t)}})},getChance:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid};this.__requestService(s.httpChance+"?uid="+t.uid,i,function(t){if(0==t.success&&t.hasOwnProperty("errorMsg"))return(0,a.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg,btnBackHome:!1}}),!1;e.chanceNum=t.map.totalchance})},getDrawResult:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid};this.__requestService(s.httpPlay+"?uid="+t.uid,i,function(t){if(0==t.success)return 8002==t.errorCode?(0,a.default)("otherResult",{props:{transition:"bounceIn",popState:2,parent:e}}):(0,a.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg?t.errorMsg:"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("pop-display-ok",function(){e.isOnBusy=!1}),!1;e.stopCity=t.map.prizeType,setTimeout(function(){e.stopCity=0,(0,a.default)("cityPrize",{props:{transition:"fadeIn",city:t.map.prizeType}})},1750),bus.$once("pop-display-ok",function(){e.isOnBusy=!1}),e.chanceNum=t.map.totalchance})},getPlayTenResult:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid,isMany:!0};this.__requestService(s.httpPlay+"?uid="+t.uid+"&isMany=true",i,function(t){if(0==t.success)return 8002==t.errorCode?(0,a.default)("otherResult",{props:{transition:"bounceIn",popState:2}}):7005==t.errorCode?(0,a.default)("otherResult",{props:{transition:"bounceIn",popState:3}}):(0,a.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg?t.errorMsg:"系统错误，请联系客服。",btnBackHome:!1}}),bus.$once("pop-display-ok",function(){e.isOnBusy=!1}),!1;(0,a.default)("otherResult",{props:{transition:"fadeIn",popState:1}}),bus.$once("pop-display-ok",function(){e.isOnBusy=!1}),e.chanceNum=t.map.totalchance})},onDraw:function(){var e=this;return!(!t.isLogin||this.isOnBusy)&&(0==this.chanceNum?((0,a.default)("otherResult",{props:{transition:"bounceIn",popState:2}}),!1):(this.isOnBusy=!0,void setTimeout(function(){e.getDrawResult()},4e3)))},onClickPower:function(){var e=this;return!(!t.isLogin||this.isOnBusy)&&(this.chanceNum<10?((0,a.default)("otherResult",{props:{transition:"bounceIn",popState:this.chanceNum>0?3:2}}),!1):(this.isOnBusy=!0,void setTimeout(function(){e.getPlayTenResult()},4e3)))},onBack:function(){t.wap?window.location.replace(window.location.pathname+"#/?wap=true&uid="+t.uid):window.location.replace(window.location.pathname+"#/?uid="+t.uid)}}}}).call(e,i(0))},41:function(t,e){},54:function(t,e,i){t.exports=i.p+"src/images/travel.gif?83e786f4"},62:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"draw-outer flip-left-bounce"},[s("div",{staticClass:"img-size content-wrapper",attrs:{"data-width":"750","data-height":"3100"}},[s("div",{staticClass:"back-btn img-size",attrs:{"data-top":"-10","data-left":"20"},on:{click:t.onBack}},[t._v("«")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isOnBusy,expression:"!isOnBusy"}],staticClass:"draw-btn img-size",attrs:{"data-top":"527","data-left":"100","data-width":"240","data-height":"107"},on:{click:t.onDraw}}),t._v(" "),s("div",{staticClass:"power-btn img-size",attrs:{"data-top":"527","data-left":"413","data-width":"240","data-height":"107"},on:{click:t.onClickPower}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&0==t.stopCity,expression:"isOnBusy && stopCity == 0"}],staticClass:"travelling img-size",attrs:{"data-top":"26","data-left":"88","data-width":"550","data-height":"498"}},[s("img",{attrs:{src:i(54),width:"100%"}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&1==t.stopCity,expression:"isOnBusy && stopCity == 1"}],staticClass:"stop-flag img-size",attrs:{"data-top":"240","data-left":"535","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&2==t.stopCity,expression:"isOnBusy && stopCity == 2"}],staticClass:"stop-flag img-size",attrs:{"data-top":"255","data-left":"340","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&3==t.stopCity,expression:"isOnBusy && stopCity == 3"}],staticClass:"stop-flag img-size",attrs:{"data-top":"105","data-left":"535","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&4==t.stopCity,expression:"isOnBusy && stopCity == 4"}],staticClass:"stop-flag img-size",attrs:{"data-top":"210","data-left":"490","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&5==t.stopCity,expression:"isOnBusy && stopCity == 5"}],staticClass:"stop-flag img-size",attrs:{"data-top":"175","data-left":"515","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&6==t.stopCity,expression:"isOnBusy && stopCity == 6"}],staticClass:"stop-flag img-size",attrs:{"data-top":"340","data-left":"380","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&7==t.stopCity,expression:"isOnBusy && stopCity == 7"}],staticClass:"stop-flag img-size",attrs:{"data-top":"345","data-left":"450","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&8==t.stopCity,expression:"isOnBusy && stopCity == 8"}],staticClass:"stop-flag img-size",attrs:{"data-top":"130","data-left":"470","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&9==t.stopCity,expression:"isOnBusy && stopCity == 9"}],staticClass:"stop-flag img-size",attrs:{"data-top":"263","data-left":"215","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&10==t.stopCity,expression:"isOnBusy && stopCity == 10"}],staticClass:"stop-flag img-size",attrs:{"data-top":"405","data-left":"420","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&11==t.stopCity,expression:"isOnBusy && stopCity == 11"}],staticClass:"stop-flag img-size",attrs:{"data-top":"210","data-left":"400","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isOnBusy&&12==t.stopCity,expression:"isOnBusy && stopCity == 12"}],staticClass:"stop-flag img-size",attrs:{"data-top":"350","data-left":"485","data-width":"60","data-height":"75"}}),t._v(" "),s("div",{staticClass:"chance img-size",attrs:{"data-top":"657","data-left":"0","data-fontSize":"30","data-lineHeight":"30"}},[t._v("剩余机会： "+t._s(t.chanceNum)+"次")])])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});