/**
 *  author : bo.peng
 *  createTime 2018-11-29 16:02
 *  description :
 */
import Layout from '@/views/Layout';
export default {
    path: 'name',
    name: 'JS原生',
    component: Layout,
    children: [
        {
            path: 'name',
            name: '同步异步',
            component: Layout,
        },
        {
            path: 'name',
            name: '堆栈',
            component: Layout,
        },
        {
            path: 'name',
            name: '容错',
            component: Layout,
        },
        {
            path: 'name',
            name: '构造涵数',
            component: Layout,
        },
        {
            path: 'name',
            name: '创建对像，继承',
            component: Layout,
        },
    ],
};