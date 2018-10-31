/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:47
 *  description :
 */
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import storeApp from './reducers';
const loggerMiddleware = createLogger();
let store = createStore(
	storeApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);
console.log(store.getState());
export default store;