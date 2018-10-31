/**
 *  author : bo.peng
 *  createTime 2018-10-25 15:00
 *  description :
 */
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { selectSubreddit, fetchPosts,fetchPostsIfNeeded } from './actions';
/*import storeApp from './reducers';*/
import storeApp from './reducers';
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
	);
store
	.dispatch(fetchPostsIfNeeded('reactjs'))
	.then(() => console.log(store.getState())
	)
export default store;