/**
 *  author : bo.peng
 *  createTime 2018-11-02 16:01
 *  description :
 */
import {createActions} from "redux-actions";
const Global = createActions({
	//用户权限相关
	permission:{
		menu:{
			request: payload => payload,
			receive: payload => payload,
		},
		menuChidren: payload=> payload,
	},
});
export default Global;