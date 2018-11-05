/**
 *  author : bo.peng
 *  createTime 2018-11-02 16:38
 *  description :
 */
import {call, put, takeEvery,select} from 'redux-saga/effects';
import {action_global} from "../actions";
import Api from "../../api/Api";
import {GLOBAL} from "../../api/urls/global";
const global= {
	permission:{
		*menu({type,payload}){
			let menu= yield select(state=>state.global.permission.menu.data);
			if(!menu){
				menu = yield call(Api.get, GLOBAL.PERMISSION_MENU);
			}
			yield put({
				type: action_global.permission.menu.receive,
				payload: menu
			});
			yield put({
				type: action_global.permission.menuChidren,
				payload: menu.menus[0]
			})
		}
	}
};
function* globalSaga() {
	yield takeEvery(action_global.permission.menu.request, global.permission.menu);
}
export default globalSaga;