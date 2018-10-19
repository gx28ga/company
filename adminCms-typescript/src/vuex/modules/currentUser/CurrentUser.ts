import {currentUserContents} from "../../../contants/sessionStorege/currentUserContents";
import login from "../../../contants/urls/login/login";
import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "../../RootState";
import CurrentUser from "@/domain/CurrentUser";
import CurrentUserState from "@/vuex/modules/currentUser/currentUserState";
import {Tools} from "@/utils/Tools";
const state: CurrentUserState = {
	userInfo : new CurrentUser("","",""),
};
const getters: GetterTree<CurrentUserState, RootState> = {
	currentUserInfo(state):CurrentUser{
		// @ts-ignore
		state.userInfo = state.userInfo && Tools.isLong(state.userInfo.userId)?state.userInfo:Tools.getSession(currentUserContents.userInfo);
		// @ts-ignore
		return state.userInfo;
	}
}
const mutations: MutationTree<CurrentUserState> = {
	_setUserInfo(state, user: CurrentUser) {
		// @ts-ignore
		state.userInfo = user;
		// @ts-ignore
		Tools.setSession(currentUserContents.userInfo,state.userInfo);
	}
}
const actions: ActionTree<CurrentUserState, RootState> = {
	login({commit,state}:any,data:object){
		// @ts-ignore
		this._vm.$axios({
			url:login.login,
			method : "post",
			load : true,
			data:data
		}).then((data:any)=>{
			// @ts-ignore
			commit("_setUserInfo", data.data);
		});
	}
}
const currentUser: Module<CurrentUserState, RootState> = {
	state,
	mutations,
	actions,
	getters,
};
export default currentUser;