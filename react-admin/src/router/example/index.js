/**
 *  author : bo.peng
 *  createTime 2018-11-15 16:16
 *  description : 试例
 */
import lazyLoad from "../LazyLoad";
import Layout from "../../containers/Layout";
export default {
	path: 'example',
	name: '项目说明',
	component: Layout,
	redirect:"/example/namingSpecification",
	children: [
		{
			name: "命名规范",
			path: "namingSpecification",
			component: lazyLoad(() => import(/* webpackChunkName: "example.namingSpecification" */ '../../containers/example/namingSpecification'))
		},
		{
			name: "项目结构",
			path: "projectStructure",
			component: lazyLoad(() => import(/* webpackChunkName: "example.projectStructure" */ '../../containers/example/projectStructure'))
		},
	]
}