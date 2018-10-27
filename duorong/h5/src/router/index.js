/**
 * 路由相关信息
 * create from bo.peng 2018/3/27
 *  email:spion@qq.com
 */
import VueRouter from 'vue-router';
import login from "./module/login";
import find from "./module/find";
import product from "./module/product";
import update from "./module/update";
import openAccount from "./module/openAccount";
import myAccount from "./module/myAccount";
import shopping from "./module/shopping";
import protocol from "./module/protocol";
import help from "./module/help";
import about from "./module/about";
import messageLog from "./module/messageLog";
window.router = new VueRouter({
	//mode: 'hash',
	mode: "history",
	base: __dirname,
	linkActiveClass: "active",
	routes: [
		{
			path: "/",
			component: {template: '<router-view></router-view>'},
			children: [
				{path: '', redirect: '/main'},
				{
					path: '/404',
					component: () => import('../module/404')
				},
				{//首页
					path: '/main', component: () => import('../module')
				},
                login,//登录
				find,//发现
                product,//产品列表
                update,//更新 升级 相关
				openAccount,//开户相关
                myAccount,//用户中心
                shopping,//积分商城
                protocol,//协议页面
                help,//帮助中心
                about,//关于多融以及下载
                {//关于我们
                    path : "GYWM",
                    redirect: '/about/dr'
                },
                messageLog,//消息记录
				{//站外链接
					path: "/outside", component: () => import("../module/outside")
				},
				{//测试页面
					path: "/test",
					component: () => import('../module/test')
				},
                {//关于我们 IOS 提审保用
                    path: "/gywmzt", component: () => import("../module/gywmzt")
                },
			]
		},
		// catch all redirect
		{path: '*', redirect: '/'},
	]
});
