webpackJsonp([7],{17:function(t,e,i){i(52);var a=i(26)(i(33),i(72),null,null);a.options.__file="E:\\git\\source_tree\\santa\\dr_pc_web\\nodejsSever\\static\\activity\\app\\santa\\src\\module\\main\\play.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] play.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},26:function(t,e){t.exports=function(t,e,i,a){var n,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(n=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),a){var c=Object.create(r.computed||null);Object.keys(a).forEach(function(t){var e=a[t];c[t]=function(){return e}}),r.computed=c}return{esModule:n,exports:s,options:r}}},27:function(t,e,i){"use strict";t.exports={httpStatus:"/activity/december/christmas/status.do",httpParticipate:"/activity/december/christmas/participate.do",httpChance:"/activity/december/christmas/chance.do",httpTreeRank:"/activity/december/christmas/rank.do",httpPlay:"/activity/december/christmas/game.do",httpMyGift:"/activity/december/christmas/my_gift.do",httpTear:"/activity/december/christmas/pull.do",httpGetSign:"/activity/december/christmas/game_init.do",httpConvert:"/activity/december/christmas/convert.do",httpDailyRank:"/activity/december/christmas/jf_rank.do"}},28:function(t,e,i){"use strict";(function(e){function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,i,a){return i&&t(e.prototype,i),a&&t(e,a),e}}();i(29);var s=i(1),o=function(t){return t&&t.__esModule?t:{default:t}}(s),r=e("body");t.exports=function(){function t(i){a(this,t);var n=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){n.close()},cancelCallback:function(){n.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,i),this.init()}return n(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var i=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:i,title:i.find(".title"),close:i.find(".close"),bg:i.find(".pop-cnt"),content:i.find(".content"),submit:i.find(".submit"),okbtn:i.find(".okbtn"),nextbtn:i.find(".next"),cancelbtn:i.find(".unbind"),error:i.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,i=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":i,"animation-duration":i}),t.bg.css({"-webkit-transition-duration":i,"-webkit-animation-duration":i}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,i=this.element,a=this;return i.elem.parent().length?a.close():(r.append(i.elem),this.addContent(t),setTimeout(function(){i.bg.addClass("cur")},a.config.timingTime),o.default.body.css({overflowY:"hidden"}),a.history(),setTimeout(function(){e.updateEvent(),a.config.openDone()},a.config.time+20)),i.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){o.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,i,a){function n(){t.removeClass("unbind").text(o),s.unbind(t,e,i,a)}var s=this,o=t.text();i=i||o,a=a||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(i),e(),setTimeout(n,1e3*a)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,i=this.config;o.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),o.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),i.windowClose&&t.close()}),o.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==i.okBtn&&o.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),i.okCallback.call(t)}),1==i.nextBtn&&o.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),i.nextCallback.call(t)}),1==i.cancelBtn&&o.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),i.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var i=this.element.error,a=this.element.bg,n=this.config.time;a.addClass("errorcur"),i.html(t).addClass("cur"),setTimeout(function(){a.removeClass("errorcur"),a.css({"animation-duration":"0s"}),a.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){a.css({"animation-duration":n+"s"}),a.css({"-webkit-animation-duration":n+"s"})},1e3*n+10)},1e3*n+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,i=this,a=this.element.error,n=this.config.time;a.html(t.txt).addClass("cur succee"),setTimeout(function(){i.hideError(),t.callback&&t.callback()},1e3*n+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var i=this.element;i.bg.removeClass("cur"),setTimeout(function(){i.elem.remove(),t&&"function"==e.type(t)&&t(),o.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,i(3))},29:function(t,e){},33:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=i(27),n=i(8),s=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={data:function(){return{gameBegin:!1,beginCounter:3,chanceNum:0,clockItv:void 0,roundScore:0,hasWrong:!1,isRoundOver:!1,miliseconds:5e3,roundData:[],adding:[!1,!1,!1,!1,!1],addIndex:0,isOnBusy:!1}},computed:{seconds:function(){var t=this.miliseconds,e=Math.floor(t%1e3/10);return(t<1e4?"0":"")+Math.floor(t/1e3)+"."+(e<10?"0":"")+e}},watch:{miliseconds:function(t,e){var i=this;0===t&&setTimeout(function(){i.sendPlayResult()},1e3)},hasWrong:function(t,e){!0===t&&this.sendPlayResult()}},mounted:function(){t.setImgSize(),t.mobile(),t.getAppInfo(),t.isLogin?this.getInitData():t.login()},methods:{__requestService:function(e,a,n){t.ajax({url:e,data:a,callback:!0,success:function(t){if(!t.success&&!t.hasOwnProperty("errorMsg")){var e=i(28);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}n(t)}})},getInitData:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid};this.__requestService(a.httpChance+"?uid="+t.uid,i,function(t){return 0==t.success&&t.hasOwnProperty("errorMsg")?((0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg,btnBackHome:!1}}),!1):(e.chanceNum=t.map.totalchance,e.chanceNum<=0?((0,s.default)("playResult",{props:{transition:"bounceIn",popState:1}}),bus.$once("closePopEvent",function(){e.onBack()}),!1):void e.getGameSign())})},getGameSign:function(){var e=this,i={uid:t.uid};this.__requestService(a.httpGetSign,i,function(t){if(0==t.success&&t.hasOwnProperty("errorMsg"))return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg,btnBackHome:!0}}),!1;e.sign=t.map.uuid,e.gameRun()})},gameRun:function(){function e(){for(var t=[],e=0;e<4;e++){for(var i=[],a=0;a<3;a++){var n=Math.floor(4*Math.random());i.push({col:a+1,val:n,status:0})}t.push({rowno:e+1,data:i})}return t}var i=this,a=setInterval(function(){if(i.beginCounter>1)i.beginCounter--;else{clearInterval(a),i.gameBegin=!0;var n=e();i.roundData=n.slice(0),setTimeout(function(){t.setImgSize()},0),i.clockItv=setInterval(function(){if(i.miliseconds<5)clearInterval(i.clockItv);else{if(i.miliseconds%550==0){var a=e();i.roundData=a.slice(0),t.setImgSize()}i.miliseconds-=10}},10)}},1e3)},onPush:function(e,i){var a=this;if(!(this.isRoundOver||this.roundScore>=10)){for(var n=-1,s=0;s<this.roundData.length;s++)if(this.roundData[s].rowno==e){n=s;break}if(n>=0){if(0!=this.roundData[n].data[i].status)return;if(1==this.roundData[n].data[i].val){this.roundData[n].data[i].status=1;var o=this.addIndex;this.adding[o]=!0,setTimeout(function(){t.setImgSize()},160),this.addIndex+1==this.adding.length?this.addIndex=0:this.addIndex++,setTimeout(function(){a.adding[o]=!1,a.roundScore<10&&a.roundScore++,t.setImgSize()},900)}this.roundData=this.roundData.slice(0)}}},sendPlayResult:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid,uuid:this.sign,caseNum:this.roundScore};this.__requestService(a.httpPlay,i,function(t){if(0==t.success)return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg?t.errorMsg:"系统错误，请联系客服。",btnBackHome:!0}}),!1;e.chanceNum=t.map.totalchance,(0,s.default)("playResult",{props:{transition:e.roundScore>0?"rotate3d":"bounceIn",popState:0,chanceNum:e.chanceNum,roundScore:e.roundScore,isTimeout:e.miliseconds<=0}}),bus.$once("closePopEvent",function(){e.onBack()})})},onBack:function(){this.isOnBusy||(t.wap?window.location.replace(window.location.pathname+"#/?wap=true&uid="+t.uid):window.location.replace(window.location.pathname+"#/?uid="+t.uid))}}}}).call(e,i(1))},52:function(t,e){},72:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.gameBegin,expression:"!gameBegin"}],staticClass:"begin-mask img-size",attrs:{"data-fontSize":"150"}},[i("div",{staticClass:"counter"},[t._v(t._s(t.beginCounter))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.gameBegin,expression:"gameBegin"}],staticClass:"main-section"},[i("div",{staticClass:"img-size content-wrapper",attrs:{"data-width":"750","data-height":"1336"}},[i("div",{staticClass:"timer img-size",attrs:{"data-top":"40","data-left":"115","data-fontSize":"24","data-lineHeight":"55"}},[t._v("倒计时： "+t._s(t.seconds)+" 秒")]),t._v(" "),i("div",{staticClass:"counter img-size",attrs:{"data-top":"40","data-left":"535","data-fontSize":"24","data-lineHeight":"55"}},[t._v("本次成绩： "+t._s(t.roundScore))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.miliseconds>0&&!t.hasWrong,expression:"miliseconds > 0 && !hasWrong"}],staticClass:"play-box img-size",attrs:{"data-top":"200"}},t._l(t.roundData,function(e,a){return i("div",{key:e.rowno,staticClass:"row img-size",attrs:{"data-top":"0","data-marginBottom":"60"}},[t._l(e.data,function(a,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.roundScore<10,expression:"roundScore < 10"}],key:a.col,staticClass:"santa img-size",class:{0:"counterfeit",1:"genuine",2:"",3:""}[a.val],attrs:{"data-width":"160","data-height":"160","data-marginRight":"70"},on:{click:function(i){t.onPush(e.rowno,n)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:a.status<0,expression:"item.status < 0"}],staticClass:"fork img-size",attrs:{"data-height":"87","data-width":"64"}})])}),t._v(" "),t._l(e.data,function(a,n){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.roundScore>=10,expression:"roundScore >= 10"}],key:a.col,staticClass:"santa img-size",class:{0:"counterfeit",1:"counterfeit",2:"",3:""}[a.val],attrs:{"data-width":"160","data-height":"160","data-marginRight":"70"},on:{click:function(i){t.onPush(e.rowno,n)}}},[i("div",{directives:[{name:"show",rawName:"v-show",value:a.status<0,expression:"item.status < 0"}],staticClass:"fork img-size",attrs:{"data-height":"87","data-width":"64"}})])})],2)})),t._v(" "),1==t.adding[0]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"575"}},[t._m(0)]):t._e(),t._v(" "),1==t.adding[1]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"575"}},[t._m(1)]):t._e(),t._v(" "),1==t.adding[2]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"575"}},[t._m(2)]):t._e(),t._v(" "),1==t.adding[3]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"575"}},[t._m(3)]):t._e(),t._v(" "),1==t.adding[4]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"575"}},[t._m(4)]):t._e(),t._v(" "),1==t.adding[0]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"625"}},[t._m(5)]):t._e(),t._v(" "),1==t.adding[1]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"625"}},[t._m(6)]):t._e(),t._v(" "),1==t.adding[2]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"625"}},[t._m(7)]):t._e(),t._v(" "),1==t.adding[3]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"625"}},[t._m(8)]):t._e(),t._v(" "),1==t.adding[4]?i("div",{staticClass:"fly-wrapper img-size",attrs:{"data-top":"270","data-left":"625"}},[t._m(9)]):t._e()])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"48"}},[t._v("+1")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"48"}},[t._v("+1")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"48"}},[t._v("+1")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"48"}},[t._v("+1")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"score img-size",attrs:{"data-fontSize":"48"}},[t._v("+1")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"gift img-size",attrs:{"data-width":"60"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"gift img-size",attrs:{"data-width":"60"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"gift img-size",attrs:{"data-width":"60"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"gift img-size",attrs:{"data-width":"60"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"fly-box img-size",attrs:{"data-width":"40","data-height":"40"}},[i("div",{staticClass:"gift img-size",attrs:{"data-width":"60"}})])}]},t.exports.render._withStripped=!0}});