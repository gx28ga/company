/**
 *  author : bo.peng
 *  createTime 2018-10-22 15:48
 *  description :
 */
import Vue from 'vue';
import Router from 'vue-router';
import order from './order';
import product from './product';
import trader from './trader';
import {Layout} from '@/views/Layout';

Vue.use(Router);

export const routeConfig: any = {
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: Layout,
            children: [
                {path: '', redirect: '/home'},
                {
                    name: '正文',
                    path: '/home',
                    component: () => import(/* webpackChunkName: "Home" */'@/views/home/Home.vue'),
                },
                order, // 订单
                product, // 产品
                trader, // 商家
            ],
        },
    ],
};
export const router = new Router(routeConfig);