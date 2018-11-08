/**
 *  author : bo.peng
 *  createTime 2018-11-08 10:59
 *  description :
 */
function padLeftZero(str) {
	return ('00' + str).substr(str.length);
}
export const formatDate=(date, fmt)=> {
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + '';
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
		}
	}
	return fmt;
};
export const dateFilter= (val, fmt = 'yyyy-MM-dd') => {
	// 时间
	if (!val) return '-';
	let time = new Date(val);
	return formatDate(time, fmt)
};
export const datetimeFilter= (val, fmt = 'yyyy-MM-dd hh:mm:ss') => {
	// 时间
	if (!val) return '-';
	let time = new Date(val);
	return formatDate(time, fmt)
};