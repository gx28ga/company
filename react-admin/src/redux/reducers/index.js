/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:47
 *  description :
 */
import { combineReducers } from 'redux';
import reduces from "./user";
import catchs from "./catch";
const reducerApp = combineReducers({
	user: reduces.login.postsLogin,
	catchs: catchs
});
export default reducerApp;