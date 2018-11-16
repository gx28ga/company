/**
 *  author : bo.peng
 *  createTime 2018-11-02 16:26
 *  description :
 */
import { combineReducers } from 'redux';
import {handleActions,handleAction} from "redux-actions";
import {action_global} from "../actions";
import Util from "../../utils/Util";
import {global} from "../store";
import {GLOBAL} from "../../constants/storage/global";
const globalStore = {
	menu(){
		let menu = Util.storage.getLocal(GLOBAL.PERMISSION.MENU);
		return menu || global.permission.menu;
	},
};
const globalReducer= {
	permission:{
		menu:handleActions({
			[action_global.permission.menu.request](state, actions) {
				let menu;
				if(actions.payload === 'menu'){
					menu= Object.assign({}, state, {
						isFetching: true,
					});
				}else{ //删除数据
					menu= Object.assign({}, state, {
						isFetching: true,
						data : null,
					});
				}
				Util.storage.setLocal(GLOBAL.PERMISSION.MENU,menu);
				return menu;
			},
			[action_global.permission.menu.receive](state, actions) {
				let menu= Object.assign({}, state, {
					isFetching: false,
					data : actions.payload
				});
				Util.storage.setLocal(GLOBAL.PERMISSION.MENU,menu);
				return menu;
			},
		},globalStore.menu),
		menuChidren:handleAction([action_global.permission.menuChidren],
			(state,{payload})=>{
				return Object.assign({},state,{
					data : payload
				});
		},{})
	}
};
const permission = combineReducers({
	menu: globalReducer.permission.menu,
	menuChidren: globalReducer.permission.menuChidren
});
export default combineReducers({
	permission
});