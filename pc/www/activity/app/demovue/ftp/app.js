webpackJsonp([9],{11:function(t,n,i){"use strict";(function(t,n,o,e){i(8);var a=i(4);!function(t){t&&t.__esModule}(a);i(7),t.use(n);var s=new n({mode:"hash",base:o,routes:[{path:"/",redirect:"/main"},{path:"/main",meta:{title:"赚佣金"},component:function(t){i.e(7).then(function(){var n=[i(14)];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/task",meta:{title:"邀请奖励记录"},component:function(t){i.e(4).then(function(){var n=[i(17)];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/level",meta:{title:"我的待收等级"},component:function(t){i.e(5).then(function(){var n=[i(16)];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/earn",meta:{title:"每月任务"},component:function(t){i.e(3).then(function(){var n=[i(18)];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/hesitory",meta:{title:"历史数据"},component:function(t){i.e(6).then(function(){var n=[i(15)];t.apply(null,n)}.bind(this)).catch(i.oe)}},{path:"/strategy",meta:{title:"攻略"},component:function(t){i.e(8).then(function(){var n=[i(19)];t.apply(null,n)}.bind(this)).catch(i.oe)}}]});window.router=s,window.bus=new t,new t({router:s,data:function(){return{transitionName:"slide-left",home:!1}},watch:{$route:function(t,n){this.transitionName=this.getTransition(t,n)}},methods:{getTransition:function(t,n){for(var i="left",o=["/main","/task","/level","/strategy"],e=0;e<o.length;e++){if(t.path==o[e]){i="right";break}if(n.path==o[e]){i="left";break}i="left"}return i}},mounted:function(){e.imgsrc;e.init({loadding:{imgs:[],callback:function(){e.uid||e.login()}}})},template:'\n        <div id="app">\n            <transition :name="transitionName">\n                <router-view class="child-view"></router-view>\n            </transition>\n            <div id=\'pop\'></div>\n        </div>\n    '}).$mount("#app")}).call(n,i(0),i(3),"/",i(1))},13:function(t,n){},7:function(t,n,i){"use strict";(function(t,n){i(13),t.component("pop",{render:function(t){var n=this;return t("transition",{attrs:{name:n.transition}},[t("div",{class:n.superClass,staticClass:"modal-mask",directives:[{name:"show",rawName:"v-show",value:n.showModal}],on:{click:n.closePop}},[t("div",{staticClass:"modal-wrapper",on:{click:n.closePropagtion}},[this.$slots.main])])])},data:function(){return{showModal:!0}},props:{superClass:String,transition:String,closeCallback:Function},methods:{closePropagtion:function(t){t.stopPropagation()},showPop:function(t){this.showModal=!0,"function"==n.type(t)&&setTimeout(t,500)},closePop:function(t){var i=this;this.showModal=!1,setTimeout(function(){n(i.$el).remove()},510),"function"==n.type(t)&&setTimeout(t,500),this.closeCallback&&this.closeCallback.call(this)}}})}).call(n,i(0),i(2))},8:function(t,n){}},[11]);