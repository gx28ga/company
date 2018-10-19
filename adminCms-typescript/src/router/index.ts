/**
 *@author bo.peng
 *@createTime 05 2018/9/5
 *@description router
 */
import Vue from "vue";
import Router from 'vue-router'
import Home from '../views/home/index.vue'
import user from "./module/userInfo";

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/login',
			name: 'login',
			component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue')
		},
		user,//会员信息管理
	]
});
export default router;