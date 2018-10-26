/**
 *  author : bo.peng
 *  createTime 2018-10-22 15:48
 *  description :
 */
import Vue from 'vue';
import Router from 'vue-router';
import user from './user';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/home/index.vue'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../views/login/index.vue'),
        },
        user, // 会员信息管理
    ],
});
