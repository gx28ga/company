/**
 *  author : bo.peng
 *  createTime 2018-11-24 11:15
 *  description :
 */
export default {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/user'),
};