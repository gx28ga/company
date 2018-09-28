/**
 *@author bo.peng
 *@createTime 10 2018/9/10
 *@description 菜单
 */
import RestResponse from "../RestResponse";
const Mock =  require('mockjs');
import AsideMenuDto from "@/dto/AsideMenuDto";
import AsideMenu from "@/domain/AsideMenu";
import AsideMenuUrl from "@/contants/urls/asideMenu";
let data = [
	{
		name:"会员信息管理",
		path : "user",
		list : [
			{
				name : "商家列表",
				path : "businessList"
			},
			{
				name : "门店列表",
				path : "shopsList"
			},
			{
				name : "代理商列表",
				path : "agentList"
			}
		]
	},
	{
		name:"商品信息",
		path : "shoppingInfo",
		list : [
			{
				name : "商品管理",
				path : "shopping"
			},
			{
				name : "分类管理",
				path : "mendian"
			},
			{
				name : "属性管理",
				path : "mendian"
			},
			{
				name : "品牌管理",
				path : "mendian"
			}
		]
	},
	{
		name:"订单管理",
		path : "user",
		list : [
			{
				name : "订单",
				path : "shopping"
			},
			{
				name : "发货单",
				path : "mendian"
			},
			{
				name : "退货单",
				path : "mendian"
			},
			{
				name : "退款仲裁",
				path : "mendian"
			},
			{
				name : "评论屏蔽仲裁",
				path : "mendian"
			}
		]
	}
];
let asideMenus : Array<AsideMenuDto> = new Array<AsideMenuDto>();
data.forEach(obj=>{
	let menu : AsideMenu;
	let list : Array<AsideMenu> = new Array<AsideMenu>();
	let asideMenu : AsideMenuDto;
	menu = new AsideMenu(obj.name,obj.path);
	if(obj.list){
		obj.list.forEach(_obj=>{
			list.push(new AsideMenu(_obj.name,_obj.path));
		});
	}
	asideMenu = new AsideMenuDto(menu,list);
	asideMenus.push(asideMenu);
});
Mock.mock(AsideMenuUrl.currentMenu,"post",RestResponse.success(asideMenus));