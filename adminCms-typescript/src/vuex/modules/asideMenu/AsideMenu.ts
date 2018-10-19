import CurrentUserState from "@/vuex/modules/currentUser/CurrentUserState";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/vuex/RootState";
import AsideMenuDto from "@/dto/AsideMenuDto";
import AsideMenuState from "@/vuex/modules/asideMenu/AsideMenuState";
import AsideMenuUrl from "@/contants/urls/asideMenu";
import {Tools} from "@/utils/Tools";
import {asideMenuContents} from "@/contants/sessionStorege/asideMenuContents";

/**
 *@author bo.peng
 *@createTime 10 2018/9/10
 *@description
 */
const state: AsideMenuState = {
	// @ts-ignore  Array<AsideMenuDto>
	menu : null
};
const getters: GetterTree<AsideMenuState, RootState> = {
	currentMenu:state=>{
		state.menu = state.menu?state.menu:Tools.getSession(asideMenuContents.currentMenu);
		return state.menu;
	}
}
const mutations: MutationTree<AsideMenuState> = {
	_setMenu(state, menu:Array<AsideMenuDto>) {
		// @ts-ignore
		state.menu = menu;
		Tools.setSession(asideMenuContents.currentMenu,menu);
	}
}
const actions: ActionTree<AsideMenuState, RootState> = {
	getCurrentMenu({commit,state}:any,data:object){
		// @ts-ignore
		this._vm.$axios({
			url:AsideMenuUrl.currentMenu,
			method : "post",
			load : true,
			data:data
		}).then((data:any)=>{
			commit("_setMenu", data.data);
		});
	}
}
const AsideMenu: Module<AsideMenuState, RootState> = {
	// @ts-ignore
	state,
	mutations,
	actions,
	getters,
};
export default AsideMenu;