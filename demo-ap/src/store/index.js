/**
 *  author : bo.peng
 *  createTime 2018-10-25 15:00
 *  description :
 */
import { createStore } from 'redux'
import todoApp from './reducers'

let store = createStore(todoApp);
export default store;