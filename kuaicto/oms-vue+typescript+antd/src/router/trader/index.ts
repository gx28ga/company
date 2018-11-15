/**
 *  author : wangcheng
 *  createTime 2018-11-12
 *  description : 商家相关路由配置
 */
import {Layout} from '@/views/Layout';

export default {
    name: '商家',
    path: '/trader',
    component: Layout,
    children: [
        {
            name: '品牌商列表',
            path: 'brandbusinessList',
            component: () => import(/* webpackChunkName: "BrandbusinessList" */'@/views/trader/BrandbusinessList.vue'),
        },
        {
            name: '批发商列表',
            path: 'wholesalerList',
            component: () => import(/* webpackChunkName: "WholesalerList" */'@/views/trader/WholesalerList.vue'),
        },
        {
            name: '零售商列表',
            path: 'retailerList',
            component: () => import(/* webpackChunkName: "RetailerList" */'@/views/trader/RetailerList.vue'),
        },
        {
            name: '添加商家',
            path: 'addTrader',
            component: () => import(/* webpackChunkName: "AddTrader" */'@/views/trader/AddTrader.vue'),
        },
        {
            name: '商家详情列表',
            path: 'traderdetailList',
            component: () => import(/* webpackChunkName: "TraderdetailList" */'@/views/trader/TraderdetailList.vue'),
        },
    ],
};