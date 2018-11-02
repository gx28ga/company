/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:47
 *  description :
 */
import { combineReducers } from 'redux';
import currentUser from "./currentUser";
import global from "./global";
import catchs from "./catch";

const reducerApp = combineReducers({
	currentUser,
	global,
	catchs,
});
export default reducerApp;