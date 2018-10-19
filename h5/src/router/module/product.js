/**
 * 产品列表
 * created by bo.peng 2018/4/26
 * email:spion@qq.com
 */
module.exports={
    path: "list",
    component: {template: '<router-view></router-view>'},
    meta : {
        keepAlive : true
    },
    children: [
        {
            path: '',
            component: () => import('../../module/product'),
        },
        {//产品信息
            path: 'detail',
            component: () => import('../../module/product/detail')
        },
        {//产品信息详情
            path : "detailInfo",
            component: () => import('../../module/product/detail/detailInfo')
        },
        {//投资产品
            path : "pay",
            component: () => import('../../module/product/payDetail')
        },
        {//产品投资记录
            path : "investList",
            component: () => import('../../module/product/detail/investList')
        },
        {//购买时选择优惠券
            path : "coupon",
            component: () => import('../../module/product/detail/pay/coupon')
        },
        {//完成购买
            path : "payDone",
            component: () => import('../../module/product/payDetail/done')
        }
    ]
};
