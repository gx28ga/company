/**
 *  author : bo.peng
 *  createTime 2018-11-23 12:38
 *  description :
 */
import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/Layout';
import Container from '@/views/Container';
import demo from "./demo";
import user from "./user";
Vue.use(Router);
const routesConfig = {
    routes: [
        {
            path: '/',
            component: Container,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import(/* webpackChunkName: "home" */ '../views/home'),
                },
                {
                    path: '/classify',
                    name: 'classify',
                    component: () => import(/* webpackChunkName: "home1" */ '../views/classify'),
                },
            ],
        },
        // 用户中心
        user,
        // 展示页
        demo,
    ],
};

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    ...routesConfig,
});