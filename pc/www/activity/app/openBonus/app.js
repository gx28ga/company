webpackJsonp([10],{12:function(n,t,i){"use strict";(function(n,t,e,o){i(7),n.use(t);var a=new t({mode:"hash",base:e,routes:[{path:"/",component:function(n){i.e(3).then(function(){var t=[i(17)];n.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"/rule",component:function(n){i.e(6).then(function(){var t=[i(20)];n.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"/draw",component:function(n){i.e(9).then(function(){var t=[i(16)];n.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"/count",component:function(n){i.e(4).then(function(){var t=[i(15)];n.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"/record",component:function(n){i.e(7).then(function(){var t=[i(19)];n.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"/rank",component:function(n){i.e(8).then(function(){var t=[i(18)];n.apply(null,t)}.bind(this)).catch(i.oe)}},{path:"/xchg",component:function(n){i.e(5).then(function(){var t=[i(21)];n.apply(null,t)}.bind(this)).catch(i.oe)}}]});window.router=a,window.bus=new n,new n({router:a,data:function(){return{transitionName:"slide-left",home:!1}},watch:{$route:function(n,t){this.home="/"!=n.path;var i=n.path.split("/").length,e=t.path.split("/").length;this.transitionName=i<e?"slide-right":"slide-left"}},mounted:function(){o.init({loadding:{timing:"spinner-loader",fillColor:"rgba(150,213,0,1)",imgs:[],callback:function(){}}})},template:'\n        <div id="app">\n            <transition name="left">\n            \x3c!--<transition name="fade">--\x3e\n                <router-view class="child-view"></router-view>\n            </transition>\n            <div id=\'pop\'><div class=\'child\'></div></div>\n        </div>\n    '}).$mount("#app")}).call(t,i(0),i(2),"/",i(1))},7:function(n,t){}},[12]);