webpackJsonp([3],{13:function(t,e,i){i(43);var n=i(22)(i(26),i(57),null,null);n.options.__file="E:\\git\\source_tree\\magicCube\\dr_pc_web\\nodejsSever\\static\\activity\\app\\magicCube\\src\\module\\main\\index.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},22:function(t,e){t.exports=function(t,e,i,n){var a,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),i&&(r._scopeId=i),n){var c=Object.create(r.computed||null);Object.keys(n).forEach(function(t){var e=n[t];c[t]=function(){return e}}),r.computed=c}return{esModule:a,exports:s,options:r}}},23:function(t,e,i){"use strict";t.exports={httpStatus:"/activity/september/status.do",httpParticipate:"/activity/september/participate.do",httpChance:"/activity/september/index.do",httpHomeData:"/activity/september/index_my_info.do",httpXchg:"/activity/september/color_convert.do",httpPlay:"/activity/september/turn_magic.do",httpMyRecord:"/activity/september/gift_record.do"}},24:function(t,e,i){"use strict";(function(e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}();i(25);var s=i(0),o=function(t){return t&&t.__esModule?t:{default:t}}(s),r=e("body");t.exports=function(){function t(i){n(this,t);var a=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){a.close()},cancelCallback:function(){a.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,i),this.init()}return a(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var i=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:i,title:i.find(".title"),close:i.find(".close"),bg:i.find(".pop-cnt"),content:i.find(".content"),submit:i.find(".submit"),okbtn:i.find(".okbtn"),nextbtn:i.find(".next"),cancelbtn:i.find(".unbind"),error:i.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,i=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":i,"animation-duration":i}),t.bg.css({"-webkit-transition-duration":i,"-webkit-animation-duration":i}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,i=this.element,n=this;return i.elem.parent().length?n.close():(r.append(i.elem),this.addContent(t),setTimeout(function(){i.bg.addClass("cur")},n.config.timingTime),o.default.body.css({overflowY:"hidden"}),n.history(),setTimeout(function(){e.updateEvent(),n.config.openDone()},n.config.time+20)),i.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){o.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,i,n){function a(){t.removeClass("unbind").text(o),s.unbind(t,e,i,n)}var s=this,o=t.text();i=i||o,n=n||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(i),e(),setTimeout(a,1e3*n)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,i=this.config;o.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),o.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),i.windowClose&&t.close()}),o.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==i.okBtn&&o.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),i.okCallback.call(t)}),1==i.nextBtn&&o.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),i.nextCallback.call(t)}),1==i.cancelBtn&&o.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),i.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var i=this.element.error,n=this.element.bg,a=this.config.time;n.addClass("errorcur"),i.html(t).addClass("cur"),setTimeout(function(){n.removeClass("errorcur"),n.css({"animation-duration":"0s"}),n.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){n.css({"animation-duration":a+"s"}),n.css({"-webkit-animation-duration":a+"s"})},1e3*a+10)},1e3*a+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,i=this,n=this.element.error,a=this.config.time;n.html(t.txt).addClass("cur succee"),setTimeout(function(){i.hideError(),t.callback&&t.callback()},1e3*a+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var i=this.element;i.bg.removeClass("cur"),setTimeout(function(){i.elem.remove(),t&&"function"==e.type(t)&&t(),o.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,i(3))},25:function(t,e){},26:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(44),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default={components:{Main:a.default}}},27:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=i(23),a=i(7),s=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={data:function(){return{status:0,isLogin:!1,chanceNum:0,multiNum:0,redNum:0,myRank:0,possiblePrize:"",rankList:[],isXchging:!1}},computed:{},mounted:function(){var e=this;t.setImgSize(),t.mobile(),t.getAppInfo(),this.isLogin=t.isLogin,this.getActivityStatus(),bus.$on("closePopEvent",function(){e.isXchging=!1})},methods:{onRule:function(){var e=window.location.pathname+"#/rule";t.wap?(e+="?wap=true",t.isLogin&&(e+="&uid="+t.uid)):t.isLogin&&(e+="?uid="+t.uid),window.location.replace(e)},__requestService:function(e,n,a){t.ajax({url:e,data:n,callback:!0,success:function(t){if(!t.success&&!t.errorMsg){var e=i(24);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}a(t)}})},getActivityStatus:function(){var t=this;this.__requestService(n.httpStatus,{},function(e){return 0==e.success&&e.hasOwnProperty("errorMsg")?((0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:e.errorMsg,btnBackHome:!0}}),!1):(t.status=e.map.status,t.status<0?((0,s.default)("warning",{props:{transition:"bounceIn",title:"敬请期待",detail:"活动即将开始, 期待您的热情参与!",btnBackHome:!0}}),!1):void(t.status>=0&&t.checkParticipatable()))})},checkParticipatable:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid};this.__requestService(n.httpParticipate+"?uid="+t.uid,i,function(t){if(t.flag){if(0==t.success&&t.hasOwnProperty("errorMsg"))return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:t.errorMsg,btnBackHome:!1}}),!1;e.getMyChance()}else(0,s.default)("warning",{props:{transition:"bounceIn",title:"感谢关注！",detail:"VIP渠道用户不能参加，敬请期待后续活动……",btnBackHome:!0}})})},getMyChance:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid};this.__requestService(n.httpChance+"?uid="+t.uid,i,function(i){if(0==i.success&&i.hasOwnProperty("errorMsg"))return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:i.errorMsg,btnBackHome:!1}}),!1;e.chanceNum=i.map.totalchance,setTimeout(function(){t.setImgSize()},20),e.getHomeData()})},getHomeData:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid};this.__requestService(n.httpHomeData+"?uid="+t.uid,i,function(i){if(0==i.success&&i.hasOwnProperty("errorMsg"))return(0,s.default)("warning",{props:{transition:"bounceIn",title:"系统提示",detail:i.errorMsg,btnBackHome:!1}}),!1;e.multiNum=i.map.colorNum,e.redNum=i.map.redNum,e.myRank=i.map.myRank,e.possiblePrize=i.map.myGift,e.rankList=i.map.rankList,setTimeout(function(){t.setImgSize()},20)})},login:function(){t.login()},onInvest:function(){t.callApp.investment()},onGoPlay:function(){window.location.replace(window.location.pathname+"#/play/?"+(1==t.wap?"wap=true&":"")+"uid="+t.uid)},onMyRecord:function(){t.isLogin?window.location.replace(window.location.pathname+"#/my/?"+(1==t.wap?"wap=true&":"")+"uid="+t.uid):t.login()},onXchg:function(){if(t.isLogin){if(0!=this.status||this.isXchging)return;this.isXchging=!0,this.multiNum<=0?(0,s.default)("exchange",{props:{transition:"bounceIn",popState:0}}):(0,s.default)("exchange",{props:{transition:"bounceIn",popState:1,parent:this}})}else t.login()},onConfirmXchg:function(){var e=this;if(!t.isLogin)return!1;var i={uid:t.uid};this.__requestService(n.httpXchg+"?uid="+t.uid,i,function(t){if(0==t.success&&t.hasOwnProperty("errorMsg"))return(0,s.default)("exchange",{props:{transition:"bounceIn",popState:3,error:t.errorMsg}}),!1;(0,s.default)("exchange",{props:{transition:"bounceIn",popState:2}}),e.getHomeData()})}}}}).call(e,i(0))},39:function(t,e){},43:function(t,e){},44:function(t,e,i){i(39);var n=i(22)(i(27),i(53),null,null);n.options.__file="E:\\git\\source_tree\\magicCube\\dr_pc_web\\nodejsSever\\static\\activity\\app\\magicCube\\src\\module\\main\\main.vue",n.esModule&&Object.keys(n.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),t.exports=n.exports},53:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-box img-size",attrs:{"data-width":"750","data-height":"2500"}},[i("div",{staticClass:"rule-btn img-size",attrs:{"data-top":"20","data-left":"630","data-width":"120","data-height":"40"},on:{click:t.onRule}}),t._v(" "),i("div",{staticClass:"left-chance img-size",attrs:{"data-top":"430","data-left":"640","data-fontSize":"26"}},[t._v(t._s(t.isLogin?t.chanceNum:"--")+" 次")]),t._v(" "),i("div",{staticClass:"my-prize-btn img-size",attrs:{"data-top":"285","data-left":"550","data-width":"115","data-height":"60"},on:{click:t.onMyRecord}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.status>0,expression:"status > 0"}],staticClass:"end-btn img-size",attrs:{"data-top":"362","data-left":"235","data-width":"132","data-height":"66"}}),t._v(" "),t.status<=0?[i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.isLogin,expression:"isLogin == false"}],staticClass:"login-btn img-size",attrs:{"data-top":"362","data-left":"235","data-width":"132","data-height":"66"},on:{click:t.login}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.isLogin&&t.chanceNum<=0,expression:"isLogin == true && chanceNum <= 0"}],staticClass:"invest-btn img-size",attrs:{"data-top":"362","data-left":"235","data-width":"132","data-height":"66"},on:{click:t.onInvest}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:1==t.isLogin&&t.chanceNum>0,expression:"isLogin == true && chanceNum > 0"}],staticClass:"goto-play-btn img-size",attrs:{"data-top":"362","data-left":"235","data-width":"132","data-height":"66"},on:{click:t.onGoPlay}})]:t._e(),t._v(" "),i("div",{staticClass:"method img-size",attrs:{"data-top":"730","data-left":"55","data-width":"645","data-height":"65"}}),t._v(" "),i("div",{staticClass:"cube-num img-size",attrs:{"data-top":"1267","data-left":"435","data-width":"55","data-height":"28","data-fontSize":"24","data-lineHeight":"30"}},[t._v(t._s(t.isLogin?t.multiNum:"--"))]),t._v(" "),i("div",{staticClass:"cube-num img-size",attrs:{"data-top":"1645","data-left":"435","data-width":"55","data-height":"28","data-fontSize":"24","data-lineHeight":"30"}},[t._v(t._s(t.isLogin?t.redNum:"--"))]),t._v(" "),i("div",{staticClass:"xchg img-size",attrs:{"data-top":"1400","data-left":"465","data-width":"130","data-height":"50"},on:{click:t.onXchg}}),t._v(" "),0==t.isLogin?[i("div",{staticClass:"about-rank img-size",attrs:{"data-top":"1726","data-left":"385","data-fontSize":"24","data-lineHeight":"28"}},[t._v("--")]),t._v(" "),i("div",{staticClass:"about-rank img-size",attrs:{"data-top":"1767","data-left":"435","data-fontSize":"24","data-lineHeight":"28"}},[t._v("--")])]:[i("div",{staticClass:"about-rank img-size",attrs:{"data-top":"1726","data-left":"385","data-fontSize":"24","data-lineHeight":"24"}},[t._v(t._s(t.myRank>0?t.myRank:"暂无"))]),t._v(" "),i("div",{staticClass:"about-rank img-size",attrs:{"data-top":"1767","data-left":"435","data-fontSize":"24","data-lineHeight":"24"}},[t._v(t._s(""==t.possiblePrize?"暂无":t.possiblePrize))])],t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:0==t.isLogin,expression:"isLogin == false"}],staticClass:"login-notice img-size",attrs:{"data-top":"1930","data-left":"215","data-width":"320","data-height":"24","data-paddingTop":"90","data-paddingBottom":"90","data-lineHeight":"24","data-fontSize":"24"},on:{click:t.login}},[t._v("请"),i("span",[t._v(" 登录 ")]),t._v("后查看")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin&&0==t.rankList.length,expression:"isLogin && rankList.length == 0"}],staticClass:"no-rank-data img-size",attrs:{"data-top":"1930","data-left":"215","data-width":"320","data-height":"24","data-paddingTop":"90","data-paddingBottom":"90","data-lineHeight":"24","data-fontSize":"24"}},[t._v("暂无数据")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin&&t.rankList.length>0,expression:"isLogin && rankList.length > 0"}],staticClass:"rank img-size",attrs:{"data-top":"1890","data-left":"78","data-fontSize":"18","data-lineHeight":"18"}},t._l(t.rankList,function(e){return i("div",{staticClass:"img-size",attrs:{"data-marginBottom":"20"}},[i("div",{staticClass:"col img-size",attrs:{"data-width":"77"}},[t._v(t._s(e.rowNo))]),t._v(" "),i("div",{staticClass:"col img-size",attrs:{"data-width":"205"}},[t._v(t._s(e.mobilePhone))]),t._v(" "),i("div",{staticClass:"col shift img-size",attrs:{"data-left":"-12","data-width":"50"}},[t._v(t._s(e.description))]),t._v(" "),i("div",{staticClass:"col prize img-size",attrs:{"data-marginLeft":"85"}},[t._v(t._s(e.gift))])])})),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isLogin&&t.rankList.length>0,expression:"isLogin && rankList.length > 0"}],staticClass:"comment img-size",attrs:{"data-top":"2355","data-left":"110","data-fontSize":"18"}},[t._v("*  仅供参考，最终结果以活动结束日排名为准")])],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},57:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-section"},[i("Main")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});