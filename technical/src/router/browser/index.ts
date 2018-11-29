/**
 *  author : bo.peng
 *  createTime 2018-11-29 15:55
 *  description : 浏览器相关
 */
import Layout from '@/views/Layout';

export default {
    path: 'name',
    name: '浏览器原理',
    component: Layout,
    children: [
        {
            path: 'name',
            name: '浏览器渲染',
            component: Layout,
        },
        {
            path: 'name',
            name: '浏览器全局变量',
            component: Layout,
        },
    ],
};