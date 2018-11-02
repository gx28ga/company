/**
 *  author : bo.peng
 *  createTime 2018-11-02 11:09
 *  description :
 */
export default {
	setLocal(key, value) {
		localStorage.setItem(key, JSON.stringify(value));
	},
	getLocal(name) {
		// @ts-ignore
		return JSON.parse(localStorage.getItem(name));
	},
	delLocal(name) {
		localStorage.removeItem(name);
	},
	setSession(key, value) {
		sessionStorage.setItem(key, JSON.stringify(value));
	},
	getSession(name) {
		return JSON.parse(sessionStorage.getItem(name));
	},
	delSession(name) {
		sessionStorage.removeItem(name);
	}
}