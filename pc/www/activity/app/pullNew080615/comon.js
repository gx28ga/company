!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,i,o){for(var a,s,c=0,u=[];c<e.length;c++)s=e[c],r[s]&&u.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);for(n&&n(e,i,o);u.length;)u.shift()()};var i={},r={14:0};e.e=function(t){function n(){a.onerror=a.onload=null,clearTimeout(s);var e=r[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),r[t]=void 0)}if(0===r[t])return Promise.resolve();if(r[t])return r[t][2];var i=new Promise(function(e,n){r[t]=[e,n]});r[t][2]=i;var o=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.timeout=12e4,e.nc&&a.setAttribute("nonce",e.nc),a.src=e.p+""+({}[t]||t)+"_chunk.js?name=d4310b345484ec209610";var s=setTimeout(n,12e4);return a.onerror=a.onload=n,o.appendChild(a),i},e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e.oe=function(t){throw console.error(t),t},e(e.s=28)}({0:function(t,e,n){"use strict";(function(e){function i(t){return t&&t.__esModule?t:{default:t}}n(7);var r=n(1),o=(i(r),n(6));i(o);Date.prototype.Format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in e)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[n]:("00"+e[n]).substr((""+e[n]).length)));return t};var a={body:e("body"),duorongHttp:"http://app.duorongcf.com",imgsrc:"http://www.duorongcf.com",init:function(t){var n={loadding:{timing:"spinner-loader",fillColor:"rgba(150,213,0,1)",imgs:[],callback:function(){}}};if(e.extend(n.loadding,t.loadding),e.extend(a,t),t.loadding.imgs&&t.loadding.imgs.length>0){var i=a.loadding.imgs||[];i=i.concat(t.loadding.imgs),n.loadding.imgs=i}e.extend(a,n),a.setImgSize(),a.mobile(),a.load(),a.getAppInfo(),window.onresize=a.setImgSize},requestAnimationFrame:window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||window.setImmediate||window.msSetIntermediate||function(t){setInterval(t,1e3/60)},mobile:function(){var t=navigator.userAgent,e=t.toLowerCase(),n=null!=t.match(/iPad/i),i=!n&&(null!=t.match(/iPhone/i)||null!=t.match(/iPod/i)),r=n||i,o=!r&&null!=t.match(/android/i),s=r||o;a.Iphone=r,a.Android=o,a.Mobile=s,a.weixin=function(){return"micromessenger"==e.match(/micromessenger/i)}(),a.ios_weixin=function(){return!("micromessenger"!=e.match(/micromessenger/i)||!a.Iphone)}(),a.weibo=function(){return"weibo"==e.match(/Weibo/i)}(),a.qq=function(){return"qq/"==e.match(/QQ\//i)}()},localStorage:{setItem:function(t,n,i){window.localStorage?localStorage.setItem(t,n):e.fn.cookie(t,n,i)},getItem:function(t){return window.localStorage?localStorage.getItem(t):e.fn.cookie(t)}},getPop:function(t){e("#pop .child").length?t():setTimeout(function(){e("#pop").html('<div class="child"></div>'),"function"==e.type(t)&&t()},550)},getAppInfo:function(){var t=a.getQueryString("uid"),e=a.getQueryString("wap"),n=a.getQueryString("toFrom"),i=a.getQueryString("type");a.uid=t,a.type=i,a.toFrom=n,a.isLogin=!!(a.uid&&a.uid.length>0),a.wap="true"==e},login:function(t){a.callApp.login({callback:t})},callApp:{login:function(t){var e=t.url?"returnUrl="+t.url:"";a.getQueryString("wap");1==a.isLogin?t.callback&&t.callback():a.wap?window.location.href=a.duorongHttp+"/dl?"+encodeURIComponent(e):window.location.href="jump://page=4?"},investment:function(){a.wap?window.location.href=a.duorongHttp+"/main/bankBillList":window.location.href="jump://page=2?"},home:function(){a.wap?window.location.href="http://app.duorongcf.com":window.location.href="jump://page=1?"}},getEvent:function(t,e,n){return t=t||window.event,e||t.stopPropagation(),n||t.preventDefault(),t=t.touches?t.touches[0]:t},myAddListener:function(t,e,n){if(a.Mobile){e={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"}[e]||e}t.each(function(){this.removeEventListener(e,n,!1),this.addEventListener(e,n,!1)})},getMS:function(){var t=new Date;return 1e3*(60*t.getMinutes()+t.getSeconds())+t.getMilliseconds()},getQueryString:function(t){var e=new RegExp("(^|&|/?)"+t+"=([^&]*)(&|$)","i"),n=encodeURI(window.location.search||window.location.href||window.location.hash).substr(1).match(e);return null!=n?unescape(n[2]):null},update:function(){a.width=a.body.width(),a.height=a.body.height()},setImgSize:function(){a.update();var t=a.width/375;e(".img-size").each(function(){var n=e(this);e.each(["borderLeftWidth","borderTopWidth","borderRightWidth","borderBottomWidth","borderTopLeftRadius","borderTopRightRadius","borderRadius","height","width","fontSize","left","right","bottom","top","paddingTop","lineHeight","paddingLeft","paddingRight","paddingBottom","marginTop","marginLeft","marginRight","marginBottom"],function(e,i){var r=n.attr("data-"+i);r&&(r=r*t/2/16+"rem",n.css(i,r))})})},ajax:function(t){"get"!=t.type?e.ajax({url:t.url,type:"POST",dataType:"json",contentType:"application/json;charset=UTF-8",processData:!1,data:JSON.stringify(t.data),success:function(e){if(1==e.flag)t.success(e);else if(t.callback)return t.success(e)}}):e.ajax({url:t.url,type:"GET",dataType:"json",data:t.data,success:t.success})},load:function(){var t=a.loadding.timing,i=a.loadding.fillColor,r=e('<div id="Loading"><div class="loadIcon"></div><div class="loadText"></div></div>'),o=r.find(".loadIcon"),s=r.find(".loadText"),c="",u=0,l=0,f=e(".load-img"),h=f.length?a.loadding.imgs.concat(f):a.loadding.imgs,p=h.length,d=function(t){t()};"spinner-loader"==t?c="<div class='spinner-loader'></div>":"loadingbar"==t?c='<div class="loadingbar"><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div><div class="loading-bar"></div></div>':"spinner"==t?c="<div class='spinner'></div>":"lightLoader"==t&&(c="<canvas id='loadCavans' class='"+t+"'></canvas>"),o.html(c),a.body.append(r),r.click(function(t){t.stopPropagation()}),"lightLoader"==t?(n.e(2).then(function(){var t=n(14);try{var e=document.getElementById("loadCavans");e.width=a.width/1.5,e.height=100,a.canvasDemo=new t(e,e.width,e.height),a.canvasDemo.init(),d=function(t){t()}}catch(t){console.log("多融财富欢迎您！")}}.bind(null,n)).catch(n.oe),s.css({marginTop:"-30px"})):"square"!=t&&"circles"!=t&&"circles1"!=t&&"circles2"!=t&&"circles3"!=t&&"circles4"!=t&&"line"!=t||n.e(1).then(function(){var e=n(15),r={};"square"==t?(l=-20,r={width:50,height:50,stepsPerFrame:2,trailLength:.3,pointDistance:.1,padding:10,fillColor:i,strokeColor:i,setup:function(){this._.lineWidth=20},path:[["line",0,0,30,0],["line",30,0,30,30],["line",30,30,0,30],["line",0,30,0,0]]}):"circles"==t?r={width:50,height:50,stepsPerFrame:1,trailLength:1,pointDistance:.025,strokeColor:i,fps:20,setup:function(){this._.lineWidth=2},step:function(t,e){var n=this.padding+25,i=this.padding+25,r=this._,o=Math.PI/180*(360*t.progress);this._.globalAlpha=Math.max(.5,this.alpha),r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(25*Math.cos(o)+n,25*Math.sin(o)+i),r.closePath(),r.stroke(),r.beginPath(),r.moveTo(25*Math.cos(-o)+n,25*Math.sin(-o)+i),r.lineTo(19*Math.cos(-o)+n,19*Math.sin(-o)+i),r.closePath(),r.stroke()},path:[["arc",25,25,12,0,360]]}:"circles1"==t?r={width:50,height:50,stepsPerFrame:1,trailLength:1,pointDistance:.05,fillColor:i,strokeColor:i,fps:20,setup:function(){this._.lineWidth=2},step:function(t,e){var n=this.padding+25,i=this.padding+25,r=this._,o=Math.PI/180*(360*t.progress),a=1===e?10:25;r.beginPath(),r.moveTo(t.x,t.y),r.lineTo(Math.cos(o)*a+n,Math.sin(o)*a+i),r.closePath(),r.stroke()},path:[["arc",25,25,10,0,360]]}:"circles2"==t?r={width:50,height:50,stepsPerFrame:1,trailLength:1,pointDistance:.02,fps:30,fillColor:i,step:function(t,e){this._.beginPath(),this._.moveTo(t.x,t.y),this._.arc(t.x,t.y,3*e,0,2*Math.PI,!1),this._.closePath(),this._.fill()},path:[["arc",25,25,17,0,360]]}:"circles3"==t?r={width:50,height:50,stepsPerFrame:3,trailLength:1,pointDistance:.01,fps:30,step:"fader",fillColor:i,strokeColor:i,setup:function(){this._.lineWidth=6},path:[["arc",25,25,20,360,0]]}:"circles4"==t?r={width:100,height:100,stepsPerFrame:4,trailLength:1,pointDistance:.01,fps:25,fillColor:i,setup:function(){this._.lineWidth=10},step:function(t,e,n){var i=t.progress,r=360*i,o=Math.PI/180*r,a=Math.PI/180*(r-180),s=5*e;this._.fillRect(25*Math.cos(o)+(50-s/2),15*Math.sin(o)+(50-s/2),s,s),this._.fillStyle="#63D3FF",this._.fillRect(15*Math.cos(a)+(50-s/2),25*Math.sin(a)+(50-s/2),s,s),1==t.progress&&(this._.globalAlpha=n<.5?1-n:n,this._.fillStyle="#EEE",this._.beginPath(),this._.arc(50,50,5,0,360,0),this._.closePath(),this._.fill())},path:[["line",40,10,60,90]]}:"line"==t&&(l=-30,r={width:100,height:50,stepsPerFrame:1,trailLength:1,pointDistance:.1,fps:15,padding:10,fillColor:i,setup:function(){this._.lineWidth=20},path:[["line",0,20,100,20],["line",100,20,0,20]]}),a.canvasDemo=new e(r),o.append(a.canvasDemo.canvas),a.canvasDemo.play(),s.css({marginTop:l+"px"}),d=function(t){t()}}.bind(null,n)).catch(n.oe),p?d(function(){a.body.css({height:a.height+"px"}),h.map(function(n){var i=new Image,o="";o="string"==typeof n?n:e(n).attr("src"),i.src=o,s.html("Loading&nbsp;0%"),i.onload=function(){if(u++,"lightLoader"==t)try{a.canvasDemo.progress=Math.round(u/p*100)}catch(t){console.log("多融财富欢迎您！")}s.html("Loading&nbsp;"+Math.round(u/p*100)+"%"),u==p&&(a.canvasDemo&&a.canvasDemo.stop(),r.remove(),e(".remove-hide").remove(),a.body.css({height:"100%"}),a.loadding.callback&&a.loadding.callback())},i.onerror=function(){console.log("错误的地址："+o)}})}):(a.loadding.callback&&a.loadding.callback(),r.remove(),e(".remove-hide").remove())}};t.exports=a}).call(e,n(3))},1:function(t,e,n){"use strict";var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};t.exports=function(t,e,r){r=r||t,e?e.props.transition=e.props.transition||"rotate3d":e={props:{transition:"rotate3d"}},n.e(0).then(function(o){(function(o){o.component(t,function(){return n(13)("./"+r+".vue")}),new o({el:"#pop .child",render:function(n){return n(t,i({},e))}})}).call(this,n(2))}.bind(null,n)).catch(n.oe)}},28:function(t,e,n){n(3),t.exports=n(0)},3:function(t,e,n){"use strict";var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(r,o){void 0!==(i=function(){return o(r)}.call(e,n,e,t))&&(t.exports=i)}(window,function(e){var n=function(){function t(t){return null==t?String(t):J[X.call(t)]||"object"}function n(e){return"function"==t(e)}function i(t){return null!=t&&t==t.window}function o(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function a(e){return"object"==t(e)}function s(t){return a(t)&&!i(t)&&Object.getPrototypeOf(t)==Object.prototype}function c(t){var e=!!t&&"length"in t&&t.length,n=P.type(t);return"function"!=n&&!i(t)&&("array"==n||0===e||"number"==typeof e&&e>0&&e-1 in t)}function u(t){return L.call(t,function(t){return null!=t})}function l(t){return t.length>0?P.fn.concat.apply([],t):t}function f(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function h(t){return t in F?F[t]:F[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function p(t,e){return"number"!=typeof e||I[f(t)]?e:e+"px"}function d(t){var e,n;return R[t]||(e=A.createElement(t),A.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),R[t]=n),R[t]}function m(t){return"children"in t?k.call(t.children):P.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function g(t,e){var n,i=t?t.length:0;for(n=0;n<i;n++)this[n]=t[n];this.length=i,this.selector=e||""}function v(t,e,n){for(j in e)n&&(s(e[j])||K(e[j]))?(s(e[j])&&!s(t[j])&&(t[j]={}),K(e[j])&&!K(t[j])&&(t[j]=[]),v(t[j],e[j],n)):e[j]!==T&&(t[j]=e[j])}function y(t,e){return null==e?P(t):P(t).filter(e)}function b(t,e,i,r){return n(e)?e.call(t,i,r):e}function w(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function x(t,e){var n=t.className||"",i=n&&n.baseVal!==T;if(e===T)return i?n.baseVal:n;i?n.baseVal=e:t.className=e}function E(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?P.parseJSON(t):t):t}catch(e){return t}}function S(t,e){e(t);for(var n=0,i=t.childNodes.length;n<i;n++)S(t.childNodes[n],e)}var T,j,P,C,M,N,O=[],D=O.concat,L=O.filter,k=O.slice,A=e.document,R={},F={},I={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},_=/^\s*<(\w+|!)[^>]*>/,$=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,q=/^(?:body|html)$/i,z=["val","css","html","text","data","width","height","offset"],Z=["after","prepend","before","append"],H=A.createElement("table"),U=A.createElement("tr"),B={tr:A.createElement("tbody"),tbody:H,thead:H,tfoot:H,td:U,th:U,"*":A.createElement("div")},W=/complete|loaded|interactive/,V=/^[\w-]*$/,J={},X=J.toString,Q={},Y=A.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},K=Array.isArray||function(t){return t instanceof Array};return Q.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=Y).appendChild(t),i=~Q.qsa(r,e).indexOf(t),o&&Y.removeChild(t),i},M=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return L.call(t,function(e,n){return t.indexOf(e)==n})},Q.fragment=function(t,e,n){var i,r,o;return $.test(t)&&(i=P(A.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,"<$1></$2>")),e===T&&(e=_.test(t)&&RegExp.$1),e in B||(e="*"),o=B[e],o.innerHTML=""+t,i=P.each(k.call(o.childNodes),function(){o.removeChild(this)})),s(n)&&(r=P(i),P.each(n,function(t,e){z.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},Q.Z=function(t,e){return new g(t,e)},Q.isZ=function(t){return t instanceof Q.Z},Q.init=function(t,e){var i;if(!t)return Q.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&_.test(t))i=Q.fragment(t,RegExp.$1,e),t=null;else{if(e!==T)return P(e).find(t);i=Q.qsa(A,t)}else{if(n(t))return P(A).ready(t);if(Q.isZ(t))return t;if(K(t))i=u(t);else if(a(t))i=[t],t=null;else if(_.test(t))i=Q.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==T)return P(e).find(t);i=Q.qsa(A,t)}}return Q.Z(i,t)},P=function(t,e){return Q.init(t,e)},P.extend=function(t){var e,n=k.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){v(t,n,e)}),t},Q.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,a=V.test(o);return t.getElementById&&a&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:k.call(a&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},P.contains=A.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},P.type=t,P.isFunction=n,P.isWindow=i,P.isArray=K,P.isPlainObject=s,P.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},P.isNumeric=function(t){var e=Number(t),n=void 0===t?"undefined":r(t);return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},P.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},P.camelCase=M,P.trim=function(t){return null==t?"":String.prototype.trim.call(t)},P.uuid=0,P.support={},P.expr={},P.noop=function(){},P.map=function(t,e){var n,i,r,o=[];if(c(t))for(i=0;i<t.length;i++)null!=(n=e(t[i],i))&&o.push(n);else for(r in t)null!=(n=e(t[r],r))&&o.push(n);return l(o)},P.each=function(t,e){var n,i;if(c(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(i in t)if(!1===e.call(t[i],i,t[i]))return t;return t},P.grep=function(t,e){return L.call(t,e)},e.JSON&&(P.parseJSON=JSON.parse),P.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){J["[object "+e+"]"]=e.toLowerCase()}),P.fn={constructor:Q.Z,length:0,forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,splice:O.splice,indexOf:O.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=Q.isZ(e)?e.toArray():e;return D.apply(Q.isZ(this)?this.toArray():this,n)},map:function(t){return P(P.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return P(k.apply(this,arguments))},ready:function(t){return W.test(A.readyState)&&A.body?t(P):A.addEventListener("DOMContentLoaded",function(){t(P)},!1),this},get:function(t){return t===T?k.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return!1!==t.call(e,n,e)}),this},filter:function(t){return n(t)?this.not(this.not(t)):P(L.call(this,function(e){return Q.matches(e,t)}))},add:function(t,e){return P(N(this.concat(P(t,e))))},is:function(t){return this.length>0&&Q.matches(this[0],t)},not:function(t){var e=[];if(n(t)&&t.call!==T)this.each(function(n){t.call(this,n)||e.push(this)});else{var i="string"==typeof t?this.filter(t):c(t)&&n(t.item)?k.call(t):P(t);this.forEach(function(t){i.indexOf(t)<0&&e.push(t)})}return P(e)},has:function(t){return this.filter(function(){return a(t)?P.contains(this,t):P(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!a(t)?t:P(t)},last:function(){var t=this[this.length-1];return t&&!a(t)?t:P(t)},find:function(t){var e=this;return t?"object"==(void 0===t?"undefined":r(t))?P(t).filter(function(){var t=this;return O.some.call(e,function(e){return P.contains(e,t)})}):1==this.length?P(Q.qsa(this[0],t)):this.map(function(){return Q.qsa(this,t)}):P()},closest:function(t,e){var n=[],i="object"==(void 0===t?"undefined":r(t))&&P(t);return this.each(function(r,a){for(;a&&!(i?i.indexOf(a)>=0:Q.matches(a,t));)a=a!==e&&!o(a)&&a.parentNode;a&&n.indexOf(a)<0&&n.push(a)}),P(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=P.map(n,function(t){if((t=t.parentNode)&&!o(t)&&e.indexOf(t)<0)return e.push(t),t});return y(e,t)},parent:function(t){return y(N(this.pluck("parentNode")),t)},children:function(t){return y(this.map(function(){return m(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||k.call(this.childNodes)})},siblings:function(t){return y(this.map(function(t,e){return L.call(m(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return P.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=d(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=n(t);if(this[0]&&!e)var i=P(t).get(0),r=i.parentNode||this.length>1;return this.each(function(n){P(this).wrapAll(e?t.call(this,n):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){P(this[0]).before(t=P(t));for(var e;(e=t.children()).length;)t=e.first();P(t).append(this)}return this},wrapInner:function(t){var e=n(t);return this.each(function(n){var i=P(this),r=i.contents(),o=e?t.call(this,n):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){P(this).replaceWith(P(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=P(this);(t===T?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return P(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return P(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;P(this).empty().append(b(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=b(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(a(t))for(j in t)w(this,j,t[j]);else w(this,t,b(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:T},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){w(this,t)},this)})},prop:function(t,e){return t=G[t]||t,1 in arguments?this.each(function(n){this[t]=b(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=G[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(/([A-Z])/g,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?E(i):T},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=b(this,t,e,this.value)})):this[0]&&(this[0].multiple?P(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=P(this),i=b(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(A.documentElement!==this[0]&&!P.contains(A.documentElement,this[0]))return{top:0,left:0};var n=this[0].getBoundingClientRect();return{left:n.left+e.pageXOffset,top:n.top+e.pageYOffset,width:Math.round(n.width),height:Math.round(n.height)}},css:function(e,n){if(arguments.length<2){var i=this[0];if("string"==typeof e){if(!i)return;return i.style[M(e)]||getComputedStyle(i,"").getPropertyValue(e)}if(K(e)){if(!i)return;var r={},o=getComputedStyle(i,"");return P.each(e,function(t,e){r[e]=i.style[M(e)]||o.getPropertyValue(e)}),r}}var a="";if("string"==t(e))n||0===n?a=f(e)+":"+p(e,n):this.each(function(){this.style.removeProperty(f(e))});else for(j in e)e[j]||0===e[j]?a+=f(j)+":"+p(j,e[j])+";":this.each(function(){this.style.removeProperty(f(j))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(P(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&O.some.call(this,function(t){return this.test(x(t))},h(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){C=[];var n=x(this);b(this,t,e,n).split(/\s+/g).forEach(function(t){P(this).hasClass(t)||C.push(t)},this),C.length&&x(this,n+(n?" ":"")+C.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===T)return x(this,"");C=x(this),b(this,t,e,C).split(/\s+/g).forEach(function(t){C=C.replace(h(t)," ")}),x(this,C.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=P(this);b(this,t,n,x(this)).split(/\s+/g).forEach(function(t){(e===T?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===T?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===T?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=q.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(P(t).css("margin-top"))||0,n.left-=parseFloat(P(t).css("margin-left"))||0,i.top+=parseFloat(P(e[0]).css("border-top-width"))||0,i.left+=parseFloat(P(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||A.body;t&&!q.test(t.nodeName)&&"static"==P(t).css("position");)t=t.offsetParent;return t})}},P.fn.detach=P.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});P.fn[t]=function(n){var r,a=this[0];return n===T?i(a)?a["inner"+e]:o(a)?a.documentElement["scroll"+e]:(r=this.offset())&&r[t]:this.each(function(e){a=P(this),a.css(t,b(this,n,e,a[t]()))})}}),Z.forEach(function(n,i){var r=i%2;P.fn[n]=function(){var n,o,a=P.map(arguments,function(e){var i=[];return n=t(e),"array"==n?(e.forEach(function(t){return t.nodeType!==T?i.push(t):P.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(Q.fragment(t)))}),i):"object"==n||null==e?e:Q.fragment(e)}),s=this.length>1;return a.length<1?this:this.each(function(t,n){o=r?n:n.parentNode,n=0==i?n.nextSibling:1==i?n.firstChild:2==i?n:null;var c=P.contains(A.documentElement,o);a.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return P(t).remove();o.insertBefore(t,n),c&&S(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var n=t.ownerDocument?t.ownerDocument.defaultView:e;n.eval.call(n,t.innerHTML)}})})})},P.fn[r?n+"To":"insert"+(i?"Before":"After")]=function(t){return P(t)[n](this),this}}),Q.Z.prototype=g.prototype=P.fn,Q.uniq=N,Q.deserializeValue=E,P.zepto=Q,P}();return e.Zepto=n,void 0===e.$&&(e.$=n),t.exports=n,function(t){function n(t){return t._zid||(t._zid=p++)}function i(t,e,i,a){if(e=r(e),e.ns)var s=o(e.ns);return(v[n(t)]||[]).filter(function(t){return t&&(!e.e||t.e==e.e)&&(!e.ns||s.test(t.ns))&&(!i||n(t.fn)===n(i))&&(!a||t.sel==a)})}function r(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function o(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function a(t,e){return t.del&&!b&&t.e in w||!!e}function s(t){return x[t]||b&&w[t]||t}function c(e,i,o,c,u,f,p){var d=n(e),m=v[d]||(v[d]=[]);i.split(/\s/).forEach(function(n){if("ready"==n)return t(document).ready(o);var i=r(n);i.fn=o,i.sel=u,i.e in x&&(o=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return i.fn.apply(this,arguments)}),i.del=f;var d=f||o;i.proxy=function(t){if(t=l(t),!t.isImmediatePropagationStopped()){t.data=c;var n=d.apply(e,t._args==h?[t]:[t].concat(t._args));return!1===n&&(t.preventDefault(),t.stopPropagation()),n}},i.i=m.length,m.push(i),"addEventListener"in e&&e.addEventListener(s(i.e),i.proxy,a(i,p))})}function u(t,e,r,o,c){var u=n(t);(e||"").split(/\s/).forEach(function(e){i(t,e,r,o).forEach(function(e){delete v[u][e.i],"removeEventListener"in t&&t.removeEventListener(s(e.e),e.proxy,a(e,c))})})}function l(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(j,function(t,i){var r=n[t];e[t]=function(){return this[i]=E,r&&r.apply(n,arguments)},e[i]=S}),e.timeStamp||(e.timeStamp=Date.now()),(n.defaultPrevented!==h?n.defaultPrevented:"returnValue"in n?!1===n.returnValue:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=E)),e}function f(t){var e,n={originalEvent:t};for(e in t)T.test(e)||t[e]===h||(n[e]=t[e]);return l(n,t)}var h,p=1,d=Array.prototype.slice,m=t.isFunction,g=function(t){return"string"==typeof t},v={},y={},b="onfocusin"in e,w={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};y.click=y.mousedown=y.mouseup=y.mousemove="MouseEvents",t.event={add:c,remove:u},t.proxy=function(e,i){var r=2 in arguments&&d.call(arguments,2);if(m(e)){var o=function(){return e.apply(i,r?r.concat(d.call(arguments)):arguments)};return o._zid=n(e),o}if(g(i))return r?(r.unshift(e[i],e),t.proxy.apply(null,r)):t.proxy(e[i],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var E=function(){return!0},S=function(){return!1},T=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,j={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,s,l=this;return e&&!g(e)?(t.each(e,function(t,e){l.on(t,n,i,e,o)}),l):(g(n)||m(r)||!1===r||(r=i,i=n,n=h),r!==h&&!1!==i||(r=i,i=h),!1===r&&(r=S),l.each(function(l,h){o&&(a=function(t){return u(h,t.type,r),r.apply(this,arguments)}),n&&(s=function(e){var i,o=t(e.target).closest(n,h).get(0);if(o&&o!==h)return i=t.extend(f(e),{currentTarget:o,liveFired:h}),(a||r).apply(o,[i].concat(d.call(arguments,1)))}),c(h,e,r,i,n,s||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!g(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(g(n)||m(i)||!1===i||(i=n,n=h),!1===i&&(i=S),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=g(e)||t.isPlainObject(e)?t.Event(e):l(e),e._args=n,this.each(function(){e.type in w&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var r,o;return this.each(function(a,s){r=f(g(e)?t.Event(e):e),r._args=n,r.target=s,t.each(i(s,e.type||e),function(t,e){if(o=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){g(t)||(e=t,t=e.type);var n=document.createEvent(y[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),l(n)}}(n),function(t){function n(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function i(t,e,i,r){if(t.global)return n(e||w,i,r)}function r(e){e.global&&0==t.active++&&i(e,null,"ajaxStart")}function o(e){e.global&&!--t.active&&i(e,null,"ajaxStop")}function a(t,e){var n=e.context;if(!1===e.beforeSend.call(n,t,e)||!1===i(e,n,"ajaxBeforeSend",[t,e]))return!1;i(e,n,"ajaxSend",[t,e])}function s(t,e,n,r){var o=n.context;n.success.call(o,t,"success",e),r&&r.resolveWith(o,[t,"success",e]),i(n,o,"ajaxSuccess",[e,n,t]),u("success",e,n)}function c(t,e,n,r,o){var a=r.context;r.error.call(a,n,e,t),o&&o.rejectWith(a,[n,e,t]),i(r,a,"ajaxError",[n,r,t||e]),u(e,n,r)}function u(t,e,n){var r=n.context;n.complete.call(r,e,t),i(n,r,"ajaxComplete",[e,n]),o(n)}function l(t,e,n){if(n.dataFilter==f)return t;var i=n.context;return n.dataFilter.call(i,t,e)}function f(){}function h(t){return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==S?"json":x.test(t)?"script":E.test(t)&&"xml")||"text"}function p(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function d(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()&&"jsonp"!=e.dataType||(e.url=p(e.url,e.data),e.data=void 0)}function m(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function g(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,c){o=t.type(c),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(c.name,c.value):"array"==o||!i&&"object"==o?g(e,c,i,n):e.add(n,c)})}var v,y,b=+new Date,w=e.document,x=/^(?:text|application)\/javascript/i,E=/^(?:text|application)\/xml/i,S="application/json",T="text/html",j=/^\s*$/,P=w.createElement("a");P.href=e.location.href,t.active=0,t.ajaxJSONP=function(n,i){if(!("type"in n))return t.ajax(n);var r,o,u=n.jsonpCallback,l=(t.isFunction(u)?u():u)||"Zepto"+b++,f=w.createElement("script"),h=e[l],p=function(e){t(f).triggerHandler("error",e||"abort")},d={abort:p};return i&&i.promise(d),t(f).on("load error",function(a,u){clearTimeout(o),t(f).off().remove(),"error"!=a.type&&r?s(r[0],d,n,i):c(null,u||"error",d,n,i),e[l]=h,r&&t.isFunction(h)&&h(r[0]),h=r=void 0}),!1===a(d,n)?(p("abort"),d):(e[l]=function(){r=arguments},f.src=n.url.replace(/\?(.+)=\?/,"?$1="+l),w.head.appendChild(f),n.timeout>0&&(o=setTimeout(function(){p("timeout")},n.timeout)),d)},t.ajaxSettings={type:"GET",beforeSend:f,success:f,error:f,complete:f,context:null,global:!0,xhr:function(){return new e.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:S,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:f},t.ajax=function(n){var i,o,u=t.extend({},n||{}),m=t.Deferred&&t.Deferred();for(v in t.ajaxSettings)void 0===u[v]&&(u[v]=t.ajaxSettings[v]);r(u),u.crossDomain||(i=w.createElement("a"),i.href=u.url,i.href=i.href,u.crossDomain=P.protocol+"//"+P.host!=i.protocol+"//"+i.host),u.url||(u.url=e.location.toString()),(o=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,o)),d(u);var g=u.dataType,b=/\?.+=\?/.test(u.url);if(b&&(g="jsonp"),!1!==u.cache&&(n&&!0===n.cache||"script"!=g&&"jsonp"!=g)||(u.url=p(u.url,"_="+Date.now())),"jsonp"==g)return b||(u.url=p(u.url,u.jsonp?u.jsonp+"=?":!1===u.jsonp?"":"callback=?")),t.ajaxJSONP(u,m);var x,E=u.accepts[g],S={},T=function(t,e){S[t.toLowerCase()]=[t,e]},C=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:e.location.protocol,M=u.xhr(),N=M.setRequestHeader;if(m&&m.promise(M),u.crossDomain||T("X-Requested-With","XMLHttpRequest"),T("Accept",E||"*/*"),(E=u.mimeType||E)&&(E.indexOf(",")>-1&&(E=E.split(",",2)[0]),M.overrideMimeType&&M.overrideMimeType(E)),(u.contentType||!1!==u.contentType&&u.data&&"GET"!=u.type.toUpperCase())&&T("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(y in u.headers)T(y,u.headers[y]);if(M.setRequestHeader=T,M.onreadystatechange=function(){if(4==M.readyState){M.onreadystatechange=f,clearTimeout(x);var e,n=!1;if(M.status>=200&&M.status<300||304==M.status||0==M.status&&"file:"==C){if(g=g||h(u.mimeType||M.getResponseHeader("content-type")),"arraybuffer"==M.responseType||"blob"==M.responseType)e=M.response;else{e=M.responseText;try{e=l(e,g,u),"script"==g?(0,eval)(e):"xml"==g?e=M.responseXML:"json"==g&&(e=j.test(e)?null:t.parseJSON(e))}catch(t){n=t}if(n)return c(n,"parsererror",M,u,m)}s(e,M,u,m)}else c(M.statusText||null,M.status?"error":"abort",M,u,m)}},!1===a(M,u))return M.abort(),c(null,"abort",M,u,m),M;var O=!("async"in u)||u.async;if(M.open(u.type,u.url,O,u.username,u.password),u.xhrFields)for(y in u.xhrFields)M[y]=u.xhrFields[y];for(y in S)N.apply(M,S[y]);return u.timeout>0&&(x=setTimeout(function(){M.onreadystatechange=f,M.abort(),c(null,"timeout",M,u,m)},u.timeout)),M.send(u.data?u.data:null),M},t.get=function(){return t.ajax(m.apply(null,arguments))},t.post=function(){var e=m.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=m.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=m(e,n,i),c=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"")).find(r):e),c&&c.apply(o,arguments)},t.ajax(s),this};var C=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(C(e)+"="+C(n))},g(i,e,n),i.join("&").replace(/%20/g,"+")}}(n),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function t(n){if(n.forEach)return n.forEach(t);i.push({name:e,value:n})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(n),function(){try{getComputedStyle(void 0)}catch(n){var t=getComputedStyle;e.getComputedStyle=function(e,n){try{return t(e,n)}catch(t){return null}}}}(),n})},6:function(t,e,n){"use strict";!function(t){t.extend(t.fn,{cookie:function(e,n,i){var r,o,a,s;return arguments.length>1&&"[object Object]"!==String(n)?(i=t.extend({},i),null!==n&&void 0!==n||(i.expires=-1),"number"==typeof i.expires&&(r=24*i.expires*60*60*1e3,o=i.expires=new Date,o.setTime(o.getTime()+r)),n=String(n),document.cookie=[encodeURIComponent(e),"=",i.raw?n:encodeURIComponent(n),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")):(i=n||{},s=i.raw?function(t){return t}:decodeURIComponent,(a=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?s(a[1]):null)}})}(Zepto)},7:function(t,e){}});