webpackJsonp([8],{14:function(t,n,e){e(52);var i=e(24)(e(28),e(73),null,null);i.options.__file="E:\\git\\source_tree\\travel\\dr_pc_web\\nodejsSever\\static\\activity\\app\\travel\\src\\module\\main\\cards.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] cards.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},24:function(t,n){t.exports=function(t,n,e,i){var a,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(a=t,o=t.default);var r="function"==typeof o?o.options:o;if(n&&(r.render=n.render,r.staticRenderFns=n.staticRenderFns),e&&(r._scopeId=e),i){var c=Object.create(r.computed||null);Object.keys(i).forEach(function(t){var n=i[t];c[t]=function(){return n}}),r.computed=c}return{esModule:a,exports:o,options:r}}},25:function(t,n,e){"use strict";t.exports={httpStatus:"/activity/septemberTrip/status.do",httpParticipate:"/activity/septemberTrip/participate.do",httpChance:"/activity/septemberTrip/case_num.do",httpPlay:"/activity/septemberTrip/case_info.do",httpCard:"/activity/septemberTrip/my_cards.do",httpConvert:"/activity/septemberTrip/card_exchange.do",httpXchg:"/activity/septemberTrip/exchange.do",httpMyRecord:"/activity/septemberTrip/case_record.do",httpRank:"/activity/septemberTrip/my_rank.do"}},26:function(t,n,e){"use strict";(function(n){function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}();e(27);var o=e(0),s=function(t){return t&&t.__esModule?t:{default:t}}(o),r=n("body");t.exports=function(){function t(e){i(this,t);var a=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){a.close()},cancelCallback:function(){a.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},n.extend(this.config,e),this.init()}return a(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var e=n("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:e,title:e.find(".title"),close:e.find(".close"),bg:e.find(".pop-cnt"),content:e.find(".content"),submit:e.find(".submit"),okbtn:e.find(".okbtn"),nextbtn:e.find(".next"),cancelbtn:e.find(".unbind"),error:e.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,n=this.config,e=n.time+"s";t.okbtn.addClass(n.okCls).html(n.okTxt),t.nextbtn.html(n.nextTxt),t.cancelbtn.addClass(n.cancelCls).html(n.cancelTxt),1==n.mask&&this.addContent("<div class='loading'></div>"),t.title.html(n.title),n.content&&this.add(function(){return n.content}),t.elem.addClass(n.superClass),t.bg.addClass(n.class),t.bg.css({"transition-duration":e,"animation-duration":e}),t.bg.css({"-webkit-transition-duration":e,"-webkit-animation-duration":e}),n.width&&t.bg.css({width:n.width}),n.title.length<2&&t.title.remove(),0==n.okBtn&&t.okbtn.remove(),0==n.nextBtn&&t.nextbtn.remove(),0==n.cancelBtn&&t.cancelbtn.remove(),0==n.okBtn&&0==n.cancelBtn&&t.submit.remove(),0==n.close&&t.close.remove()}},{key:"add",value:function(t){var n=this,e=this.element,i=this;return e.elem.parent().length?i.close():(r.append(e.elem),this.addContent(t),setTimeout(function(){e.bg.addClass("cur")},i.config.timingTime),s.default.body.css({overflowY:"hidden"}),i.history(),setTimeout(function(){n.updateEvent(),i.config.openDone()},i.config.time+20)),e.content}},{key:"addContent",value:function(t){var n=this.element.content;t&&"function"==typeof t?n.html(t.call(n)):n.html(t),setTimeout(function(){s.default.setImgSize()},100)}},{key:"history",value:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,n,e,i){function a(){t.removeClass("unbind").text(s),o.unbind(t,n,e,i)}var o=this,s=t.text();e=e||s,i=i||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(e),n(),setTimeout(a,1e3*i)})}},{key:"updateEvent",value:function(){var t=this,n=this.element,e=this.config;s.default.myAddListener(n.close,"mousedown",function(n){n.stopPropagation(),t.close()}),s.default.myAddListener(n.elem,"mousedown",function(n){n.stopPropagation(),e.windowClose&&t.close()}),s.default.myAddListener(n.bg,"mousedown",function(t){t.stopPropagation()}),1==e.okBtn&&s.default.myAddListener(n.okbtn,"mousedown",function(n){n.stopPropagation(),e.okCallback.call(t)}),1==e.nextBtn&&s.default.myAddListener(n.nextbtn,"mousedown",function(n){n.stopPropagation(),e.nextCallback.call(t)}),1==e.cancelBtn&&s.default.myAddListener(n.cancelbtn,"mousedown",function(n){n.stopPropagation(),e.cancelCallback.call(t)})}},{key:"error",value:function(t,n){var e=this.element.error,i=this.element.bg,a=this.config.time;i.addClass("errorcur"),e.html(t).addClass("cur"),setTimeout(function(){i.removeClass("errorcur"),i.css({"animation-duration":"0s"}),i.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){i.css({"animation-duration":a+"s"}),i.css({"-webkit-animation-duration":a+"s"})},1e3*a+10)},1e3*a+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var n=t.time||.1,e=this,i=this.element.error,a=this.config.time;i.html(t.txt).addClass("cur succee"),setTimeout(function(){e.hideError(),t.callback&&t.callback()},1e3*a+1e3*n)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var e=this.element;e.bg.removeClass("cur"),setTimeout(function(){e.elem.remove(),t&&"function"==n.type(t)&&t(),s.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(n,e(3))},27:function(t,n){},28:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0});var i=e(25),a=e(8),o=function(t){return t&&t.__esModule?t:{default:t}}(a);n.default={data:function(){return{isLogin:!1,common:0,beijing:0,shanghai:0,guangzhou:0,nanjing:0,qingdao:0,lasa:0,hongkong:0,changbaishan:0,chengdu:0,guilin:0,xiAn:0,sanya:0,isOnBusy:!1}},computed:{cards:function(){var t=[];return t.push(this.beijing),t.push(this.shanghai),t.push(this.guangzhou),t.push(this.nanjing),t.push(this.qingdao),t.push(this.lasa),t.push(this.hongkong),t.push(this.changbaishan),t.push(this.chengdu),t.push(this.guilin),t.push(this.xiAn),t.push(this.sanya),t}},mounted:function(){t.setImgSize(),t.mobile(),t.getAppInfo(),this.isLogin=t.isLogin,t.isLogin?(this.getCommonCard(),this.getCityCard()):t.login()},methods:{__requestService:function(n,i,a){t.ajax({url:n,data:i,callback:!0,success:function(t){if(!t.success&&!t.hasOwnProperty("errorMsg")){var n=e(26);new n({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}a(t)}})},getCommonCard:function(){var n=this;if(!t.isLogin)return!1;var e={uid:t.uid};this.__requestService(i.httpChance+"?uid="+t.uid,e,function(t){if(0==t.success&&t.hasOwnProperty("errorMsg"))return(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg,btnBackHome:!1}}),!1;n.common=t.map.specialNum})},getCityCard:function(){var n=this;if(!t.isLogin)return!1;var e={uid:t.uid};this.__requestService(i.httpCard+"?uid="+t.uid,e,function(t){if(0==t.success&&t.hasOwnProperty("errorMsg"))return(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg,btnBackHome:!1}}),!1;if(t.map.data){var e=t.map.data;n.beijing=e.beiJing,n.shanghai=e.shangHai,n.guangzhou=e.guangZhou,n.nanjing=e.nanJing,n.qingdao=e.qingDao,n.lasa=e.laSa,n.hongkong=e.hongKong,n.changbaishan=e.changBaiShan,n.chengdu=e.chengDu,n.guilin=e.guiLin,n.xiAn=e.xiAn,n.sanya=e.sanYa}})},onConvert:function(){var t=this;this.isOnBusy||(this.isOnBusy=!0,(0,o.default)("convert",{props:{transition:"mask"}}),bus.$once("pop-display-ok",function(){t.isOnBusy=!1}),bus.$once("convert-confirm",this.onConvertConfirm))},onConvertConfirm:function(n){var e=this,a={uid:t.uid,debrisType:n};this.__requestService(i.httpConvert+"?uid="+t.uid+"&debrisType="+n,a,function(t){if(!t.success&&t.hasOwnProperty("errorMsg"))return(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg,btnBackHome:!1}}),!1;t.success&&((0,o.default)("otherResult",{props:{transition:"rotate3d",popState:4}}),e.getCommonCard(),e.getCityCard(),bus.$once("pop-display-ok",function(){e.isOnBusy=!1}))})},onXchg:function(t){var n=this;if(!this.isOnBusy){this.isOnBusy=!0;var e=!1;switch(t){case 1:(this.sanya<10||this.xiAn<10||this.hongkong<10)&&(e=!0);break;case 2:(this.beijing<1||this.sanya<1||this.lasa<1)&&(e=!0);break;case 3:(this.beijing<1||this.guilin<1||this.guangzhou<1)&&(e=!0);break;case 4:for(var i=0;i<this.cards.length;i++)if(this.cards[i]<1){e=!0;break}}e?((0,o.default)("otherResult",{props:{transition:"bounceIn",popState:6}}),bus.$once("pop-display-ok",function(){n.isOnBusy=!1})):((0,o.default)("exchange",{props:{transition:"fadeIn",xchgType:t}}),bus.$once("pop-display-ok",function(){n.isOnBusy=!1}),bus.$once("xchg-confirmed",function(t){n.getXchgResult(t)}))}},getXchgResult:function(n){var e=this,a={uid:t.uid,exchange:n};this.__requestService(i.httpXchg+"?uid="+t.uid+"&exchange="+n,a,function(t){if(!t.success)return 8001==t.errorCode?(0,o.default)("otherResult",{props:{transition:"bounceIn",popState:6}}):(0,o.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg?t.errorMsg:"操作失败，请联系客服。",btnBackHome:!1}}),!1;(0,o.default)("otherResult",{props:{transition:"rotate3d",popState:5}}),e.getCommonCard(),e.getCityCard()})},onGoRank:function(){var n=t.getQueryString("from");t.wap?window.location.replace(window.location.pathname+"#/rank/?wap=true&uid="+t.uid+"&backFrom="+n):window.location.replace(window.location.pathname+"#/rank/?uid="+t.uid+"&backFrom="+n),window.location.reload()},onBack:function(){var n=t.getQueryString("from");n&&(t.wap?window.location.replace(window.location.pathname+"#/"+n+"/?wap=true&uid="+t.uid):window.location.replace(window.location.pathname+"#/"+n+"/?uid="+t.uid))}}}}).call(n,e(0))},52:function(t,n){},73:function(t,n,e){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cards-outer flip-left-bounce"},[e("div",{staticClass:"img-size content-wrapper",attrs:{"data-width":"750","data-height":"2627"}},[e("div",{staticClass:"back-btn img-size",attrs:{"data-top":"-10","data-left":"20"},on:{click:t.onBack}},[t._v("«")]),t._v(" "),e("div",{staticClass:"rank-btn img-size",attrs:{"data-top":"29","data-left":"450","data-width":"280","data-height":"60"},on:{click:t.onGoRank}}),t._v(" "),e("div",{staticClass:"common-card img-size",attrs:{"data-top":"154","data-left":"172","data-width":"100","data-fontSize":"36","data-lineHeight":"36"}},[t._v("× "+t._s(t.common))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.common>0,expression:"common > 0"}],staticClass:"btn-convert img-size",attrs:{"data-top":"140","data-left":"272","data-width":"141","data-height":"65"},on:{click:t.onConvert}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.common<=0,expression:"common <= 0"}],staticClass:"convert-disabled img-size",attrs:{"data-top":"140","data-left":"272","data-width":"138","data-height":"65"}}),t._v(" "),e("div",{staticClass:"cards-area img-size",attrs:{"data-top":"675","data-width":"560"}},t._l(["北京","上海","广州","南京","青岛","拉萨","香港","长白山","成都","桂林","西安","三亚"],function(n,i){return e("div",{staticClass:"city img-size",class:{true:"on",false:"off"}[t.cards[i]>0],attrs:{"data-marginRight":"25","data-marginBottom":"20","data-paddingTop":"8","data-width":"72","data-height":"64","data-fontSize":"22","data-lineHeight":"30","data-borderRadius":"36"}},[t._v(t._s(n)),e("br"),t._v("×"+t._s(t.cards[i]))])})),t._v(" "),e("div",{staticClass:"btn-xchg img-size",attrs:{"data-top":"1390","data-left":"435","data-width":"135","data-height":"65"},on:{click:function(n){t.onXchg(1)}}}),t._v(" "),e("div",{staticClass:"btn-xchg img-size",attrs:{"data-top":"1745","data-left":"435","data-width":"135","data-height":"65"},on:{click:function(n){t.onXchg(2)}}}),t._v(" "),e("div",{staticClass:"btn-xchg img-size",attrs:{"data-top":"2100","data-left":"435","data-width":"135","data-height":"65"},on:{click:function(n){t.onXchg(3)}}}),t._v(" "),e("div",{staticClass:"btn-xchg img-size",attrs:{"data-top":"2455","data-left":"435","data-width":"135","data-height":"65"},on:{click:function(n){t.onXchg(4)}}})])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});