/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:47
 *  description :
 */
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import storeApp from './reducers';
import mySaga from './sagas';
const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger();
let store = createStore(
	storeApp,
	applyMiddleware(
		sagaMiddleware,
		loggerMiddleware
	)
);
console.log(store.getState());
export default store;
sagaMiddleware.run(mySaga);
