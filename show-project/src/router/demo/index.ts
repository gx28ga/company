/**
 *  author : bo.peng
 *  createTime 2018-11-24 10:44
 *  description :
 */
export default {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo'),
    children: [
        {
            path: '/namingSpecification',
            name: '命名规范',
            component: () => import(/* webpackChunkName: "namingSpecification" */ '@/views/demo/namingSpecification'),
        },
    ],
};
