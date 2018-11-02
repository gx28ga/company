/**
 *  author : bo.peng
 *  createTime 2018-11-01 16:38
 *  description :
 */
import {all, fork} from 'redux-saga/effects';
import user from "./currentUser";
import global from "./global";

function* rootSaga() {
	yield all([
		fork(user),
		fork(global),
	])
}
export default rootSaga;