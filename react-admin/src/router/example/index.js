/**
 *  author : bo.peng
 *  createTime 2018-11-15 16:16
 *  description : 试例
 */
import lazyLoad from "../LazyLoad";
export default {
	path: 'example',
	name: '试例',
	component: lazyLoad(() => import(/* webpackChunkName: "standard" */ '../../containers/example')),
}