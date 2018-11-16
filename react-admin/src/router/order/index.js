/**
 *  author : bo.peng
 *  createTime 2018-11-15 14:17
 *  description : 订单
 */
import lazyLoad from "../LazyLoad";
export default {
	path: "order",
	name: "销售",
	component: lazyLoad(() => import(/* webpackChunkName: "order" */ '../../containers/order')),
	redirect: "/order/saleOrderList",
	children: [
		{
			name: "销售订单",
			path: "saleOrderList",
			component: lazyLoad(() => import(/* webpackChunkName: "saleOrderList" */ '../../containers/order/saleOrderList'))
		},
		{
			name: "订单详情",
			path: "saleOrderDetail/:id",
			component: lazyLoad(() => import(/* webpackChunkName: "saleOrderDetail" */ '../../containers/order/saleOrderDetail'))
		},
	]
}