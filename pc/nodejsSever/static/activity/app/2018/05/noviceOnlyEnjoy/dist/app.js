webpackJsonp([4],{10:function(n,i,t){"use strict";(function(n,i,e,a){t(6),n.use(i);var o=new i({mode:"hash",base:e,routes:[{path:"/",component:function(n){t.e(3).then(function(){var i=[t(13)];n.apply(null,i)}.bind(this)).catch(t.oe)}}]});window.router=o,window.bus=new n,new n({router:o,data:function(){return{transitionName:"slide-left",home:!1}},watch:{$route:function(n,i){this.home="/"!=n.path;var t=n.path.split("/").length,e=i.path.split("/").length;this.transitionName=t<e?"slide-right":"slide-left"}},mounted:function(){var n="/activity/app/noviceOnlyEnjoy/src/images/";a.init({loadding:{timing:"spinner-loader",fillColor:"rgba(150,213,0,1)",imgs:[n+"bg.jpg",n+"invest-on.png",n+"invest-off.png"],callback:function(){}}})},template:'\n        <div id="app">\n            <transition name="left">\n            \x3c!--<transition name="fade">--\x3e\n                <router-view class="child-view"></router-view>\n            </transition>\n            <div id=\'pop\'><div class=\'child\'></div></div>\n        </div>\n    '}).$mount("#app")}).call(i,t(1),t(2),"/",t(0))},6:function(n,i){}},[10]);