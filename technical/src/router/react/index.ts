/**
 *  author : bo.peng
 *  createTime 2018-11-29 16:12
 *  description :
 */
import Layout from '@/views/Layout';
export default {
    path: 'name',
    name: 'react',
    component: Layout,
    children: [
        {
            path: 'name',
            name: 'react原理',
            component: Layout,
        },
        {
            path: 'name',
            name: 'react常用方法',
            component: Layout,
        },
    ],
};