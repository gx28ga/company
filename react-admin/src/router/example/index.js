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
	children: [
		{
			name: "命名规范",
			path: "file",
			component: lazyLoad(() => import(/* webpackChunkName: "example.file" */ '../../containers/example/file'))
		},
	]
}