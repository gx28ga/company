/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:59
 *  description :
 */
/*import user from "../types/user";
import Api from "../../api/Api";
import {USER} from "../../api/urls/user";*/
import {createActions} from "redux-actions";
const CurrentUser = createActions({
	login:{
		request: userInfo => ({ userInfo: userInfo }),
		receive: userInfo => ({ userInfo: userInfo }),
	},
	update:{
		request: userInfo => ({ userInfo: userInfo }),
		receive: userInfo => ({ userInfo: userInfo }),
	},
	exit:{
		request: userInfo => ({ userInfo: userInfo }),
		receive: userInfo => ({ userInfo: userInfo }),
	}
});
export default CurrentUser;