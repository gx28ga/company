/**
 *  author : bo.peng
 *  createTime 2018-11-29 15:59
 *  description : 打包相关
 */
import Layout from '@/views/Layout';
export default {
    path: 'name',
    name: 'webpack',
    component: Layout,
    children: [
        {
            path: 'name',
            name: 'webpack配置',
            component: Layout,
        },
        {
            path: 'name',
            name: 'vue-cli3',
            component: Layout,
        },
        {
            path: 'name',
            name: 'react-script',
            component: Layout,
        },
    ],
};