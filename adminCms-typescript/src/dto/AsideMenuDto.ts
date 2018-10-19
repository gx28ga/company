/**
 *@author bo.peng
 *@createTime 10 2018/9/10
 *@description
 */
import AsideMenu from "@/domain/AsideMenu";

export default class AsideMenuDto extends AsideMenu{
	list : Array<AsideMenu>;
	constructor(menu:AsideMenu,list:Array<AsideMenu>){
		super(menu.name,menu.path);
		this.list = list;
	}
}