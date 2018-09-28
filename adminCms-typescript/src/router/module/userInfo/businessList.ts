/**
 *@author bo.peng
 *@createTime 11 2018/9/11
 *@description
 */
export default [
	{//商家列表
		path: "businessList",
		component: () => import(/* webpackChunkName: "businessList" */ '@/views/userInfo/business/index.vue')
	},
	{//商家资格审核
		path: "qualifications",
		component: () => import('@/views/userInfo/business/qualifications.vue')
	}
]