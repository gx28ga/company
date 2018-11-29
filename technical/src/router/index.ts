/**
 *  author : bo.peng
 *  createTime 2018-11-29 13:01
 *  description :
 */
import Vue from 'vue';
import Router from 'vue-router';
import Container from '@/views/Container';
import project from "./project";
import browser from "./browser";
import webpack from "./webpack";
import script from "./script";
import vue from "./vue";
import react from "./react";
import interview from "./interview";

Vue.use(Router);
export const routesConfig = {
    routes: [
        {
            path: '/',
            component: Container,
            children: [
                // 项目管理
                project,
                // 浏览器
                browser,
                // webpack
                webpack,
                // js原生
                script,
                // vue
                vue,
                // react
                react,
                // 面试
                interview,
            ],
        },
    ],
};

export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    ...routesConfig,
});