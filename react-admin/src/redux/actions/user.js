/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:59
 *  description :
 */
import user from "../types/user";
import Api from "../../api/Api";
import {USER} from "../../api/urls/user";

function userLogin(userInfo) {
	return {
		type: user.USER_LOGIN,
		userInfo
	}
}
function receivePosts(userInfo, data){
	return {
		type: user.USER_LOGIN,
		userInfo,
		posts: data,
		receivedAt: Date.now()
	}
}

function login(userInfo) {
	return function (dispatch) {
		dispatch(userLogin(userInfo));
		return Api.post(USER.login).then(data => {
			dispatch(receivePosts(userInfo, data))
		})
	}
}

export default {
	userLogin,
	login,
}