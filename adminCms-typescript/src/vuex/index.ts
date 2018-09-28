import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import currentUser from "./modules/currentUser/CurrentUser";
import AsideMenu from "./modules/asideMenu/AsideMenu";
import {RootState} from "@/vuex/RootState";

Vue.use(Vuex);
const store: StoreOptions<RootState> = {
	state: {
		version: 'v1.0.0'
	},
	modules: {
		currentUser,
		AsideMenu,
	}
};
export default new Vuex.Store<RootState>(store);

