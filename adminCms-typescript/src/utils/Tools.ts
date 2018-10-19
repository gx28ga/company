/**
 *@author bo.peng
 *@createTime 10 2018/9/10
 *@description
 */
export class Tools{
	static timestamp(_timestamp: string, num: number = 1) {               //时间戳转换成日期
		let timestmp: number | string = (_timestamp == null || _timestamp == undefined || !Number(_timestamp)) ? new Date().getTime() : _timestamp;
		num = (num == undefined || num == null) ? 1 : num
		let time = new Date(timestmp)
		let year = time.getFullYear()
		let month = time.getMonth() + 1
		let day = time.getDate()
		let hours = time.getHours()
		let minutes = time.getMinutes()
		let seconds = time.getSeconds()
		if (num == 1) {
			return year + '-' + month + '-' + day
		} else if (num == 2) {
			return year + '/' + month + '/' + day
		} else if (num == 3) {
			return month + '-' + day
		} else if (num == 4) {
			return month + '/' + day
		} else if (num == 5) {
			return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds
		} else if (num == 6) {
			return hours + ':' + minutes + ':' + seconds
		}
	}
	static setItem(key:string, value:object) {
		localStorage.setItem(key, JSON.stringify(value));
	}
	static getItem(name:string) {
		// @ts-ignore
		return JSON.parse(localStorage.getItem(name));
	}
	static delItem(name:string) {
		localStorage.removeItem(name);
	}
	static setSession(key:string, value:object) {
		sessionStorage.setItem(key, JSON.stringify(value));
	}
	static getSession(name:string) {
		// @ts-ignore
		return JSON.parse(sessionStorage.getItem(name));
	}
	static delSession(name:string) {
		sessionStorage.removeItem(name);
	}
	//用于判断ID是否存在
	static isLong(id:string){
		return id && id.length>3;
	}
}