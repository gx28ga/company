/**
 *  author : bo.peng
 *  createTime 2018-11-22 16:40
 *  description : vue 代码相关
 */
import lazyLoad from "../LazyLoad";
import Layout from "../../containers/Layout";
export default {
	path: 'example',
	name: 'Vue原理',
	component: Layout,
	redirect:"/example/namingSpecification",
	children: [
		{
			name: "vue原理",
			path: "namingSpecification",
			component: lazyLoad(() => import(/* webpackChunkName: "example.namingSpecification" */ '../../containers/example/namingSpecification'))
		},
		{
			name: "vuex原理",
			path: "projectStructure",
			component: lazyLoad(() => import(/* webpackChunkName: "example.projectStructure" */ '../../containers/example/projectStructure'))
		},
		{
			name: "vue-router原理",
			path: "public",
			component: lazyLoad(() => import(/* webpackChunkName: "example.flowChart" */ '../../containers/example/flowChart'))
		},
		{
			name: "vue-cli配置",
			path: "flowChart",
			component: lazyLoad(() => import(/* webpackChunkName: "example.flowChart" */ '../../containers/example/flowChart'))
		},
	]
}