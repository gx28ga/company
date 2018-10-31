/**
 *  author : bo.peng
 *  createTime 2018-10-26 18:01
 *  description :
 */
import {user} from "../store";
import TYPE_USER from "../types";
const U = {
	login: {
		posts(state = user.USER_INFO, action){
			switch (action.type) {
				case TYPE_USER.login.REQUEST_LOGIN:
					return Object.assign({}, state, {
						isFetching: true,
						didInvalidate: false,
						login : false,
					});
				case TYPE_USER.login.POST_LOGIN:
					return Object.assign({}, state, {
						isFetching: false,
						didInvalidate: false,
						login : true,
						data: action.data,
						lastUpdated: action.receivedAt
					});
				default:
					return state
			}

		},
		postsLogin(state= {}, action){
			switch (action.type) {
				case TYPE_USER.login.REQUEST_LOGIN:
				case TYPE_USER.login.POST_LOGIN:
					return Object.assign({},state,U.login.posts(state,action));
				default:
					return state
			}
		}
	}
};
 export default U;