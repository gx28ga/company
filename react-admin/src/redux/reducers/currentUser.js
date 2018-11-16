/**
 *  author : bo.peng
 *  createTime 2018-10-26 18:01
 *  description :
 */
import {currentUser} from "../store";
import { message } from 'antd';
import {handleActions,combineActions} from "redux-actions";
import {action_currentUser} from "../actions";
import Util from "../../utils/Util";
import {USER} from "../../constants/storage/user";
const getStore={
	currentUser(){//获取当前用户信息
		let current = Util.storage.getLocal(USER.CURRENT_USER);
		if(!current) return currentUser;
		return current;
	}
};
const CurrentUser= handleActions({
	//请求 登录、更新、退出
	[combineActions(
		action_currentUser.login.request,
		action_currentUser.update.request,
		action_currentUser.exit.request
	)](state, actions) {
		let user= getStore.currentUser();
		if(actions.type !== action_currentUser.exit.request){
			user= Object.assign({}, state, {
				isFetching: true,
				login: false,
			});
		}else{
			user= Object.assign({}, state, {
				isFetching: true,
				login: true,
			});
		}
		Util.storage.setLocal(USER.CURRENT_USER,user);
		return user;
	},
	//处理更新、登录、退出
	[combineActions(
		action_currentUser.login.receive,
		action_currentUser.update.receive,
		action_currentUser.exit.receive
	)](state, actions) {
		let user= Object.assign({}, state, {
			isFetching: false,
			login: true,
			data: actions.payload
		});
		Util.storage.setLocal(USER.CURRENT_USER,user);
		switch (actions.type) {
			case action_currentUser.login.receive:
				message.success('登录成功！');
				break;
			case action_currentUser.update.receive:
				message.success('更新成功！');
				break;
			default:
				let user= Object.assign({}, state, {
					isFetching: false,
					login: false,
					data : null
				});
				Util.storage.setLocal(USER.CURRENT_USER,user);
				message.success('退出成功！');
				return user;
		}
		return user;
	},
},getStore.currentUser);
export default CurrentUser;