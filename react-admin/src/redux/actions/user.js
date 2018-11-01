/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:59
 *  description :
 */
/*import user from "../types/user";
import Api from "../../api/Api";
import {USER} from "../../api/urls/user";*/
import {createActions} from "redux-actions";
/*const U = {
	login: {
		requestLogin(userInfo){
			return {
				type: user.login.REQUEST_LOGIN,
				userInfo
			}
		},
		postLogin(userInfo,data){
			return{
				type: user.login.POST_LOGIN,
				userInfo,
				data: data,
				receivedAt: Date.now()
			}
		}
	}
};
function login(userInfo) {
	return function (dispatch) {
		dispatch(U.login.requestLogin(userInfo));
		return Api.post(USER.login,userInfo).then(data => {
			dispatch(U.login.postLogin(userInfo, data))
		})
	}
}*/
const User = createActions({
	login:{
		login: userInfo => ({ userInfo: userInfo }),
		exit: userInfo => ({ userInfo: userInfo }),
		update: userInfo => ({ userInfo: userInfo }),
	},
});
export default User;