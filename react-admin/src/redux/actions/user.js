/**
 *  author : bo.peng
 *  createTime 2018-10-26 17:59
 *  description :
 */
import user from "../types/user";
function userLogin( login ){
	return {
	  type: user.USER_LOGIN,
	  login
	}
}
export default {
  userLogin,
}