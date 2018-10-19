/**
 *@author bo.peng
 *@createTime 10 2018/9/10
 *@description 会员信息管理
 */
import layout from "@/views/layout.vue";
import businessList from "@/router/module/userInfo/businessList";
import agentList from "@/router/module/userInfo/agentList";
import shopsList from "@/router/module/userInfo/shopsList";
export default {
	path : "/user",
	component: layout,
	children: [
		{path: '', redirect: '/user/businessList'},
		...businessList,//商家列表
		...agentList,//代理商列表
		...shopsList,//门店列表
	]
}