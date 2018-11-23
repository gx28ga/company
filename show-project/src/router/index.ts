/**
 *  author : bo.peng
 *  createTime 2018-11-23 12:38
 *  description :
 */
import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/Layout';
import Container from '@/views/Container';
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
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
        {
            path: '/user',
            name: 'user',
            component: () => import(/* webpackChunkName: "user" */ '../views/user'),
        },
    ],
});