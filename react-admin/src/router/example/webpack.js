/**
 *  author : bo.peng
 *  createTime 2018-11-22 16:44
 *  description :
 */
import lazyLoad from "../LazyLoad";
import Layout from "../../containers/Layout";
export default {
	path: 'example',
	name: 'Webpack配置',
	component: Layout,
	redirect:"/example/namingSpecification",
	children: [
		{
			name: "webpack配置",
			path: "namingSpecification",
			component: lazyLoad(() => import(/* webpackChunkName: "example.namingSpecification" */ '../../containers/example/namingSpecification'))
		},
		{
			name: "babel",
			path: "namingSpecification",
			component: lazyLoad(() => import(/* webpackChunkName: "example.namingSpecification" */ '../../containers/example/namingSpecification'))
		},
		{
			name: "plugs",
			path: "namingSpecification",
			component: lazyLoad(() => import(/* webpackChunkName: "example.namingSpecification" */ '../../containers/example/namingSpecification'))
		},
	]
}