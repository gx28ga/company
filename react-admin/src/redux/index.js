/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:47
 *  description :
 */
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPosts } from './actions/test';
/*import storeApp from './reducers';*/
import storeApp from './reducers/test';
const loggerMiddleware = createLogger();
let store = createStore(
	storeApp,
	applyMiddleware(
		thunkMiddleware,
		loggerMiddleware
	)
);
store.dispatch(selectSubreddit('reactjs'));
debugger;
store
	.dispatch(fetchPosts('reactjs'))
	.then(() => console.log(store.getState())
	)
export default store;