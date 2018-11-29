/**
 *  author : bo.peng
 *  createTime 2018-11-29 16:06
 *  description :
 */
import Layout from '@/views/Layout';
export default {
    path: 'name',
    name: 'vue',
    component: Layout,
    children: [
        {
            path: 'name',
            name: '双向绑定',
            component: Layout,
        },
        {
            path: 'name',
            name: '数组实现',
            component: Layout,
        },
        {
            path: 'name',
            name: '生命周期及使用常景',
            component: Layout,
        },
    ],
};