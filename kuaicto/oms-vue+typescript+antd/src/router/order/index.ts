/**
 *  author : bo.peng
 *  createTime 2018-11-10 14:36
 *  description :
 */
import {Layout} from '@/views/Layout';

export default {
    name: '订单管理',
    path: '/order',
	component: Layout,
    children: [
        {
            name: '销售订单',
            path: 'saleOrderList',
            component: () => import(/* webpackChunkName: "SaleOrderList" */'@/views/order/SaleOrderList.vue'),
        },
    ],
};