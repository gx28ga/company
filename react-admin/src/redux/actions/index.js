/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:49
 *  description :
 */
import action_user from "./user";
import Api from "../../api/Api";
import {USER} from "../../api/urls/user";
function login(userInfo) {
	return function (dispatch) {
		dispatch(action_user.login.requestLogin.login(userInfo));
		return Api.post(USER.login,userInfo).then(data => {
			dispatch(action_user.login.receiveLogin.login(userInfo, data))
		})
	}
}
export{
  //用户登录
	action_user,
	login,
}