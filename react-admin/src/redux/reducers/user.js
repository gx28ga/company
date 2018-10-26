/**
 *  author : bo.peng
 *  createTime 2018-10-26 18:01
 *  description :
 */
import user from "../store";
import TYPE_USER from "../types";

export default function userFn(state =user.USER_INFO, action){
	switch (action.type) {
	  case TYPE_USER.USER_LOGIN:
	    state.LOGIN = action.login;
	    return Object.assign({},state,{
	      LOGIN : action.login
		});
	  default:
	    return state;
	}
}