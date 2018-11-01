/**
 *  author : bo.peng
 *  createTime 2018-10-26 18:01
 *  description :
 */
import {user} from "../store";
import {combineActions, handleActions} from "redux-actions";
import {action_user} from "../actions";
/*const U = {
	login: {
		posts(state = user.USER_INFO, action) {
			switch (action.type) {
				case TYPE_USER.login.REQUEST_LOGIN:
					return Object.assign({}, state, {
						isFetching: true,
						didInvalidate: false,
						login: false,
					});
				case TYPE_USER.login.POST_LOGIN:
					return Object.assign({}, state, {
						isFetching: false,
						didInvalidate: false,
						login: true,
						data: action.data,
						lastUpdated: action.receivedAt
					});
				default:
					return state
			}

		},
		postsLogin(state = {}, action) {
			switch (action.type) {
				case TYPE_USER.login.REQUEST_LOGIN:
				case TYPE_USER.login.POST_LOGIN:
					return Object.assign({}, state, U.login.posts(state, action));
				default:
					return state
			}
		}
	}
}*/
console.log(action_user)
const User = handleActions({
	[combineActions(
		action_user.login.login,
		action_user.login.update,
		action_user.login.exit,
	)](state, actions) {
		debugger;
		return state;
	},
},user.USER_INFO);
export default User;