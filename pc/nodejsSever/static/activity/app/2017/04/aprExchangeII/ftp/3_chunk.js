webpackJsonp([3,5],[,,,,,,,,,,,,,function(t,e,n){n(40);var i=n(19)(n(30),n(64),null,null);i.options.__file="E:\\git\\source_tree\\dr_pc_web\\activity\\app\\aprExchangeII\\src\\module\\main\\index.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},,,,,,function(t,e){t.exports=function(t,e,n,i){var a,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),n&&(r._scopeId=n),i){var c=Object.create(r.computed||null);Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}}),r.computed=c}return{esModule:a,exports:s,options:r}}},function(t,e,n){"use strict";(function(e){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();n(23);var s=n(2),o=function(t){return t&&t.__esModule?t:{default:t}}(s),r=e("body");t.exports=function(){function t(n){i(this,t);var a=this;this.config={title:"",content:null,okBtn:!0,okCls:"",nextBtn:!1,cancelBtn:!0,cancelCls:"",width:null,okTxt:"确定",nextTxt:"下一步",cancelTxt:"取消",history:!0,okCallback:function(){a.close()},cancelCallback:function(){a.close()},close:!0,closeCallback:function(){},windowClose:!0,superClass:"",class:"",time:.5,mask:!1,maskTiming:"mask",timing:"rotate3d",timingTime:0,openDone:function(){}},e.extend(this.config,n),this.init()}return a(t,[{key:"init",value:function(){var t=this.config.timing;"rotate3d"!=t&&"slideOutUp"!=t&&"fadeIn"!=t&&"slideOutDown"!=t||(this.config.timingTime=50),1==this.config.mask?this.config.timing="":this.config.maskTiming="";var n=e("<div class='pop "+this.config.maskTiming+"'><div data-width='555' data-height='454' class='pop-cnt img-size "+this.config.timing+"'><div class='close'><div class='v-line'></div><div class='h-line'></div></div><div class='title'></div><div class='content'></div><div class='error'></div><div class='submit'><div class='btn okbtn img-size'  data-width='326' data-height='60' data-lineHeight='60'></div><div class='btn next'></div><div class='btn unbind'></div></div></div></div>");this.element={elem:n,title:n.find(".title"),close:n.find(".close"),bg:n.find(".pop-cnt"),content:n.find(".content"),submit:n.find(".submit"),okbtn:n.find(".okbtn"),nextbtn:n.find(".next"),cancelbtn:n.find(".unbind"),error:n.find(".error")},this.updateElement()}},{key:"updateElement",value:function(){var t=this.element,e=this.config,n=e.time+"s";t.okbtn.addClass(e.okCls).html(e.okTxt),t.nextbtn.html(e.nextTxt),t.cancelbtn.addClass(e.cancelCls).html(e.cancelTxt),1==e.mask&&this.addContent("<div class='loading'></div>"),t.title.html(e.title),e.content&&this.add(function(){return e.content}),t.elem.addClass(e.superClass),t.bg.addClass(e.class),t.bg.css({"transition-duration":n,"animation-duration":n}),t.bg.css({"-webkit-transition-duration":n,"-webkit-animation-duration":n}),e.width&&t.bg.css({width:e.width}),e.title.length<2&&t.title.remove(),0==e.okBtn&&t.okbtn.remove(),0==e.nextBtn&&t.nextbtn.remove(),0==e.cancelBtn&&t.cancelbtn.remove(),0==e.okBtn&&0==e.cancelBtn&&t.submit.remove(),0==e.close&&t.close.remove()}},{key:"add",value:function(t){var e=this,n=this.element,i=this;return n.elem.parent().length?i.close():(r.append(n.elem),this.addContent(t),setTimeout(function(){n.bg.addClass("cur")},i.config.timingTime),o.default.body.css({overflowY:"hidden"}),i.history(),setTimeout(function(){e.updateEvent(),i.config.openDone()},i.config.time+20)),n.content}},{key:"addContent",value:function(t){var e=this.element.content;t&&"function"==typeof t?e.html(t.call(e)):e.html(t),setTimeout(function(){o.default.setImgSize()},100)}},{key:"history",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){var t=this;t.config.history&&(history.pushState({status:"mask"},""),window.maskSelf||(window.maskSelf=[]),maskSelf.push(t),window.onpopstate=function(t){maskSelf.length&&(maskSelf[maskSelf.length-1].back(),maskSelf.pop())})})},{key:"unbind",value:function(t,e,n,i){function a(){t.removeClass("unbind").text(o),s.unbind(t,e,n,i)}var s=this,o=t.text();n=n||o,i=i||3,t.unbind().click(function(){t.unbind().addClass("unbind").text(n),e(),setTimeout(a,1e3*i)})}},{key:"updateEvent",value:function(){var t=this,e=this.element,n=this.config;o.default.myAddListener(e.close,"mousedown",function(e){e.stopPropagation(),t.close()}),o.default.myAddListener(e.elem,"mousedown",function(e){e.stopPropagation(),n.windowClose&&t.close()}),o.default.myAddListener(e.bg,"mousedown",function(t){t.stopPropagation()}),1==n.okBtn&&o.default.myAddListener(e.okbtn,"mousedown",function(e){e.stopPropagation(),n.okCallback.call(t)}),1==n.nextBtn&&o.default.myAddListener(e.nextbtn,"mousedown",function(e){e.stopPropagation(),n.nextCallback.call(t)}),1==n.cancelBtn&&o.default.myAddListener(e.cancelbtn,"mousedown",function(e){e.stopPropagation(),n.cancelCallback.call(t)})}},{key:"error",value:function(t,e){var n=this.element.error,i=this.element.bg,a=this.config.time;i.addClass("errorcur"),n.html(t).addClass("cur"),setTimeout(function(){i.removeClass("errorcur"),i.css({"animation-duration":"0s"}),i.css({"-webkit-animation-duration":"0s"}),setTimeout(function(){i.css({"animation-duration":a+"s"}),i.css({"-webkit-animation-duration":a+"s"})},1e3*a+10)},1e3*a+10)}},{key:"hideError",value:function(){this.element.error.html("").removeClass("cur succee"),this.element.bg.removeClass("errorcur")}},{key:"succee",value:function(t){var e=t.time||.1,n=this,i=this.element.error,a=this.config.time;i.html(t.txt).addClass("cur succee"),setTimeout(function(){n.hideError(),t.callback&&t.callback()},1e3*a+1e3*e)}},{key:"close",value:function(){this.config.history?history.back():this.back(),this.config.closeCallback()}},{key:"back",value:function(t){var n=this.element;n.bg.removeClass("cur"),setTimeout(function(){n.elem.remove(),t&&"function"==e.type(t)&&t(),o.default.body.css({overflowY:"auto"})},510)}}]),t}()}).call(e,n(3))},function(t,e,n){"use strict";t.exports={httpStatus:"/activity/apr-exchange/status.do",httpParticipate:"/activity/apr-exchange/participate.do",httpUserMsg:"/activity/apr-exchange/user-message.do",httpGetPrize:"/activity/apr-exchange/get-prize.do",httpSetContact:"/activity/apr-exchange/contact-save.do"}},,function(t,e){},,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={props:{myGrade:Array,waterHeight:Number,exchanged:{type:Boolean,default:!1},selectOptions:Array},data:function(){return{defaultGrades:[288,220,175,150,120,85,72,58,45,22,15,7.5,1.5,.8]}},computed:{waterMark:function(){switch(this.waterHeight){case 1:return["g01"];case 2:return["g02"];case 3:return["g03"];case 4:return["g04"];case 5:return["g05"];case 6:return["g06"];case 7:return["g07"];case 8:return["g08"];case 9:return["g09"];case 10:return["g10"];case 11:return["g11"];case 12:return["g12"];case 13:return["g13"];case 14:return["g14"];default:return[""]}},yourPosition:function(){switch(this.waterHeight){case 1:return["pos01"];case 2:return["pos02"];case 3:return["pos03"];case 4:return["pos04"];case 5:return["pos05"];case 6:return["pos06"];case 7:return["pos07"];case 8:return["pos08"];case 9:return["pos09"];case 10:return["pos10"];case 11:return["pos11"];case 12:return["pos12"];case 13:return["pos13"];case 14:return["pos14"];default:return["nopos"]}},prizeList:function(){var t=this.myGrade.length-1;return this.myGrade.slice(0,t)}},methods:{onClickPrizeImg:function(t){if(t)return!1;var e=this;(0,a.default)("selectPrize",{props:{transition:"bounceIn",selectOptions:e.selectOptions}})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7),a=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={props:{period:String},methods:{displayRule:function(){var t=this;(0,a.default)("explain",{props:{transition:"bounceIn",period:t.period}})}}}},function(t,e,n){"use strict";(function(t){function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(54),s=i(a),o=n(55),r=i(o),c=n(53),u=i(c),l=n(21),d=n(7),p=i(d);e.default={components:{Top:s.default,Main:r.default,Bottom:u.default},data:function(){return{isLogin:!1,userMsg:{},actStartTime:0,actEndTime:0,status:0,people:0}},computed:{actPeriod:function(){var t=this.actStartTime,e=this.actEndTime,n="";return t>0&&e>0&&(t=new Date(t),e=new Date(e),n=t.Format("yyyy年MM月dd日")+"-"+e.Format("yyyy年MM月dd日")),n},coin:function(){var t=this.userMsg;if(t.hasOwnProperty("map"))return t.map.userCoin},prizeName:function(){var t=this.userMsg;if(t.hasOwnProperty("map")&&t.map.hasOwnProperty("gottenInfo")){var e=t.map.gottenInfo;if(1==e.gotten)return e.prizeName}return""},contactExist:function(){var t=this.userMsg;if(t.hasOwnProperty("map")&&t.map.hasOwnProperty("contactInfo"))return t.map.contactInfo.contactExist},contactName:function(){var t=this.userMsg;if(t.hasOwnProperty("map")&&t.map.hasOwnProperty("contactInfo")&&t.map.contactInfo.hasOwnProperty("name"))return t.map.contactInfo.name},contactPhone:function(){var t=this.userMsg;if(t.hasOwnProperty("map")&&t.map.hasOwnProperty("contactInfo")&&t.map.contactInfo.hasOwnProperty("mobilePhone"))return t.map.contactInfo.mobilePhone},contactAddress:function(){var t=this.userMsg;if(t.hasOwnProperty("map")&&t.map.hasOwnProperty("contactInfo")&&t.map.contactInfo.hasOwnProperty("address"))return t.map.contactInfo.address},userGrade:function(){var t=this.userMsg;if(t.hasOwnProperty("map")){var e=t.map.lotteryList.map(function(e,n){var i=t.map.userCoin;return{num:e.needGoldCoin,ishere:e.userLocation,locked:!(i>=e.needGoldCoin)}});return e=e.reverse()}return[]},waterHeight:function(){var t=this.userMsg;if(t.hasOwnProperty("map")){var e=0,n=t.map.userCoin;return t.map.lotteryList.forEach(function(t,i){t.needGoldCoin<=n&&e++}),e}return 0},selectOptions:function(){var t=this.userMsg;return t.hasOwnProperty("map")?t.map.lotteryList.filter(function(e,n){return e.needGoldCoin<=t.map.userCoin}):[]},exchanged:function(){if(!this.isLogin)return!1;var t=this.userMsg;return!!t.hasOwnProperty("map")&&t.map.gottenInfo.gotten}},mounted:function(){t.setImgSize(),t.mobile(),t.getAppInfo(),this.isLogin=t.isLogin,this.getActivityStatus()},methods:{getActivityStatus:function(){var e=this;t.ajax({url:l.httpStatus,data:{},success:function(t){if(!t.flag||!t.hasOwnProperty("map")){var i=n(20);new i({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"})}if(e.status=t.map.status,e.people=t.map.people,e.actStartTime=t.map.startTime,e.actEndTime=t.map.endTime,e.status<0)return(0,p.default)("waitWarning"),!1;e.getUserMsg()}})},getUserMsg:function(){var e=this;t.ajax({url:l.httpUserMsg,data:{uid:t.uid},success:function(n){e.userMsg=n,t.uid&&e.checkParticipatable()}})},checkParticipatable:function(){t.ajax({url:l.httpParticipate,data:{uid:t.uid},callback:!0,success:function(t){if(!t.hasOwnProperty("flag")){var e=n(20);new e({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"})}0==t.flag&&(0,p.default)("vipWarning")}})}},watch:{userMsg:function(t,e){if(t.hasOwnProperty("map")){if(14!=t.map.lotteryList.length){var i=n(20);new i({title:"&nbsp;",content:"奖品数据不正确!",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"})}}}}}}).call(e,n(2))},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=n(21),a=n(7),s=function(t){return t&&t.__esModule?t:{default:t}}(a);e.default={props:{isLogin:Boolean,coin:{type:Number,default:0},contactExist:{type:Boolean,default:!1},contactName:{type:String,default:""},contactPhone:{type:String,default:""},contactAddress:{type:String,default:""},prizeName:{type:String,default:""},selectOptions:Array,status:{type:Number,default:0},people:Number},computed:{coinValue:function(){return this.isLogin&&""==this.prizeName?this.coin:"******"}},mounted:function(){bus.$on("submitSelectPrize",this.onSelectPrize)},methods:{login:function(){t.login()},popSelect:function(){var t=this;(0,s.default)("selectPrize",{props:{transition:"bounceIn",selectOptions:t.selectOptions}})},onSelectPrize:function(e){var a=this;t.ajax({url:i.httpGetPrize,data:{uid:t.uid,prizeId:a.selectOptions[e].id},callback:!0,success:function(t){if(1!=t.flag){var i=n(20);new i({title:"&nbsp;",content:"操作失败，请联系客服！",okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"});return!1}if(1==t.success){var s="恭喜您，成功领取"+a.selectOptions[e].name,o=n(20);new o({title:"&nbsp;",content:s,okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定",okCallback:function(){this.close(),window.location.reload(!0)}})}else if(t.hasOwnProperty("errorMsg")){var r=n(20);new r({title:"&nbsp;",content:t.errorMsg,okBtn:!0,cancelBtn:!1,timing:"rotate3d",okTxt:"确定"})}}})},setContact:function(){if(this.contactExist){var t=this;(0,s.default)("setContact",{props:{transition:"bounceIn",oldName:t.contactName,oldMobilePhone:t.contactPhone,oldAddress:t.contactAddress}})}else(0,s.default)("setContact",{props:{transition:"bounceIn"}})},investment:function(){t.callApp.investment()}}}}).call(e,n(2))},,,,,,,,function(t,e){},function(t,e){},,,,,function(t,e){},,function(t,e){},,,,,,function(t,e,n){n(45);var i=n(19)(n(28),n(69),null,null);i.options.__file="E:\\git\\source_tree\\dr_pc_web\\activity\\app\\aprExchangeII\\src\\module\\main\\bottom.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] bottom.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){n(47);var i=n(19)(n(29),n(71),null,null);i.options.__file="E:\\git\\source_tree\\dr_pc_web\\activity\\app\\aprExchangeII\\src\\module\\main\\head.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] head.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){n(39);var i=n(19)(n(31),n(63),null,null);i.options.__file="E:\\git\\source_tree\\dr_pc_web\\activity\\app\\aprExchangeII\\src\\module\\main\\main.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},,,,,,,,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-box img-size",attrs:{"data-width":"750","data-height":"1140"}},[n("div",{staticClass:"active-part img-size",attrs:{"data-width":"626","data-height":"319"}},[n("div",{staticClass:"user-msg"},[n("div",{staticClass:"point-info"},[n("div",{staticClass:"lpart"},[n("div",{staticClass:"wrap"},[n("span",[t._v("您当前的财富值: "+t._s(t.coinValue))])])]),t._v(" "),n("div",{staticClass:"rpart"},[t.isLogin?n("div",{directives:[{name:"show",rawName:"v-show",value:""==t.prizeName,expression:"prizeName == ''"}],staticClass:"btn-select img-size",attrs:{"data-width":"129","data-height":"37"},on:{click:t.popSelect}}):n("div",{staticClass:"btn-login img-size",attrs:{"data-width":"129","data-height":"37"},on:{click:t.login}})])]),t._v(" "),n("div",{staticClass:"gotten-info"},[t.isLogin&&""!=t.prizeName?n("p",{staticClass:"get-prize"},[n("span",{staticClass:"name"},[t._v("已获得 "+t._s(t.prizeName))]),t._v(" "),0==t.contactExist?n("a",{staticClass:"contact-link",on:{click:t.setContact}},[t._v("填写联系方式")]):t._e(),t._v(" "),1==t.contactExist?n("a",{staticClass:"contact-link",on:{click:t.setContact}},[t._v("修改联系方式")]):t._e()]):t._e()])]),t._v(" "),t.isLogin&&""!=t.prizeName?n("div",{staticClass:"exchanged-sign img-size",attrs:{"data-width":"135","data-height":"88"}}):t._e(),t._v(" "),t._m(0),t._v(" "),t.status>0?n("div",{staticClass:"over-btn img-size",attrs:{"data-width":"626","data-height":"70"}}):n("div",{staticClass:"invest-btn img-size",attrs:{"data-height":"70","data-width":"626"},on:{click:t.investment}}),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"appeal"},[n("div",{staticClass:"wrap"},[t._v("财富路上，您并不孤单，多融与您相伴"),n("br"),t._v("已有"),n("span",[t._v(t._s(t.people))]),t._v("人参与本活动")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"formula img-size",attrs:{"data-height":"38"}},[n("span",[t._v("*财富值=投资金额×产品期限/360")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"remark"},[n("span",[t._v("投资20天以下产品(不含20天)不计入财富值总值")])])}]},t.exports.render._withStripped=!0},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-section"},[n("Top",{attrs:{period:t.actPeriod}}),t._v(" "),n("Main",{attrs:{isLogin:t.isLogin,coin:t.coin,prizeName:t.prizeName,contactExist:t.contactExist,contactName:t.contactName,contactPhone:t.contactPhone,contactAddress:t.contactAddress,selectOptions:t.selectOptions,status:t.status,people:t.people}}),t._v(" "),n("Bottom",{attrs:{exchanged:t.exchanged,myGrade:t.userGrade,waterHeight:t.waterHeight,selectOptions:t.selectOptions}})],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},,,,,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bottom img-size",attrs:{"data-width":"750","data-height":"1956"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.exchanged,expression:"exchanged"}]},[n("div",{staticClass:"prize-mask img-size",attrs:{"data-width":"640","data-height":"1765"}})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.exchanged,expression:"!exchanged"}]},[t.myGrade.length>0?n("div",{staticClass:"visual-grades"},[n("div",{class:t.waterMark})]):t._e(),t._v(" "),t.myGrade.length>0?n("div",{staticClass:"grades"},t._l(t.myGrade,function(e){return n("div",{staticClass:"grade-num"},[n("span",[t._v(t._s(e.num))])])})):t._e(),t._v(" "),n("div",{staticClass:"lock-wraper"},t._l(t.myGrade,function(e,i){return n("div",{class:["lock-item","img-size",e.locked?"":"unlock"],attrs:{"data-width":"227","data-height":"116"},on:{click:function(n){t.onClickPrizeImg(e.locked)}}})})),t._v(" "),n("div",{class:t.yourPosition},[t._m(0),t._v(" "),n("div",{staticClass:"img-wraper img-size",attrs:{"data-width":"51","data-height":"100"}})])]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"label-wraper"},[n("span",[t._v("您当前的位置")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"remark"},[n("div",{staticClass:"content-wraper"},[n("div",[t._v("*")]),n("div",[t._v("当财富值达到对应数值，即可解锁该对应奖品。可挑选已解锁的任意一个奖品作为本活动的最终奖品（选定后，无法更换奖品）")])])])}]},t.exports.render._withStripped=!0},,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"bg img-size",attrs:{"data-width":"750","data-height":"88"}},[n("div",{staticClass:"btn img-size",attrs:{"data-width":"96","data-height":"52"},on:{click:t.displayRule}})])])},staticRenderFns:[]},t.exports.render._withStripped=!0}]);