/**
 *  author : bo.peng
 *  createTime 2018-11-01 16:38
 *  description :
 */

import {call, put, takeEvery} from 'redux-saga/effects';
import {action_user} from "../actions";
import Api from "../../api/Api";
import {USER} from "../../api/urls/user";

function* goAge({type,payload} ){    // 参数是action创建函数返回的action
	const res = yield call(Api.post,USER.login,payload.userInfo);    // 执行p函数，返回值赋值给res
	yield put({      // dispatch一个action到reducer， payload是请求返回的数据
		type: action_user.login.login,
		payload: res
	})
}

function* rootSaga() {     // 在store.js中，执行了 sagaMiddleware.run(rootSaga)
	yield takeEvery(action_user.login.login, goAge)   // 如果有对应type的action触发，就执行goAge()函数
}
export default rootSaga;