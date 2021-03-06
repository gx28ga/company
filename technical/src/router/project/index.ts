/**
 *  author : bo.peng
 *  createTime 2018-11-29 15:51
 *  description :
 */
export default {
    path: 'namingSpecification',
    name: '项目管理',
    icon: 'folder',
    component: () => import(
        /* webpackChunkName: "namingSpecification" */
        '@/views/namingSpecification'),
    children: [
        {
            path: 'namingSpecification',
            name: '命名规范',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
        {
            path: 'namingSpecification',
            name: '项目结构',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
        {
            path: 'namingSpecification',
            name: '项目共公组件方法等',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
        {
            path: 'namingSpecification',
            name: '项目流程图',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
        {
            path: 'namingSpecification',
            name: '代码优化',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
        {
            path: 'namingSpecification',
            name: '安全',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
        {
            path: 'namingSpecification',
            name: '单元测试',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
        {
            path: 'namingSpecification',
            name: '打包',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
        {
            path: 'namingSpecification',
            name: '布署',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
        {
            path: 'namingSpecification',
            name: '项目版本管理',
            component: () => import(
                /* webpackChunkName: "namingSpecification" */
                '@/views/namingSpecification'),
        },
    ],
};