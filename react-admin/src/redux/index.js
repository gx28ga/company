/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:47
 *  description :
 */
import { createStore } from 'redux'
import storeApp from './reducers'
let store = createStore(storeApp);
console.log(store.getState());
export default store;