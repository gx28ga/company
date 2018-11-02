/**
 *  author : bo.peng
 *  createTime 2018-10-26 18:02
 *  description :
 */
import currentUser from "./currentUser";
import global from "./global";
import catchs from "./catch";
export const stateStatus = {
	isFetching: true, //表示是否在抓取数据
	didInvalidate: true, //数据是否过时
	lastUpdated: new Date() //上一次更新时间
};
export{
	currentUser, //用户信息
	catchs,
	global,
}