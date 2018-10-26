/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:47
 *  description :
 */
import { combineReducers } from 'redux';
import userFn from "./user";
const reducerApp = combineReducers({
	user: userFn
});
export default reducerApp;