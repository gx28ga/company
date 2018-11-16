/**
 *  author : bo.peng
 *  createTime 2018-11-15 14:19
 *  description :
 */
import lazyLoad from "../LazyLoad";
export default {
	path: "product",
	name: "商品",
	component: lazyLoad(() => import(/* webpackChunkName: "product" */ '../../containers/product')),
	redirect:"/product/productList",
	children: [
		{
			name: "商品列表",
			path: "productList",
			component: lazyLoad(() => import(/* webpackChunkName: "productList" */ '../../containers/product/ProductList'))
		},
	]
}