/**
 *  author : bo.peng
 *  createTime 2018-11-29 16:13
 *  description:
 */
import Layout from '@/views/Layout';
export default {
    path: 'name',
    name: '面试题',
    component: Layout,
    children: [
        {
            path: 'name',
            name: '算法',
            component: Layout,
        },
        {
            path: 'name',
            name: '输出',
            component: Layout,
        },
    ],
};