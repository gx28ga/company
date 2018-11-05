/**
 *  author : bo.peng
 *  createTime 2018-11-02 10:21
 *  description :
 */
import {call, put, takeEvery} from 'redux-saga/effects';
import {action_currentUser,action_global} from "../actions";
import Api from "../../api/Api";
import {USER} from "../../api/urls/user";
const CurrentUser= {
	*login({type,payload}){
		const res = yield call(Api.post, USER.login, payload.userInfo);
		yield put({
			type: action_currentUser.login.receive,
			payload: res
		});
	},
	*update({type,payload}){
		const res = yield call(Api.post, USER.login, payload.userInfo);
		yield put({
			type: action_currentUser.login.receive,
			payload: res
		});
	},
	*exit({type,payload}){
		const res = yield call(Api.get, USER.logout);
		yield put({
			type: action_currentUser.exit.receive,
			payload: res
		});
		yield put({
			type: action_global.permission.menu.request,
			payload: null
		})
	},
};
function* rootSaga() {
	yield takeEvery(action_currentUser.login.request, CurrentUser.login);
	yield takeEvery(action_currentUser.update.request, CurrentUser.update);
	yield takeEvery(action_currentUser.exit.request, CurrentUser.exit);
}
export default rootSaga;