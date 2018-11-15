/**
 *  author : bo.peng
 *  createTime 2018-11-08 10:59
 *  description : 时间过滤器
 */
export const DataFormat = {
	padLeftZero(str: string) {
		return ('00' + str).substr(str.length);
	},
	formatDate(date: Date, fmt: string) {
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		let o: any = {
			'M+': date.getMonth() + 1,
			'd+': date.getDate(),
			'h+': date.getHours(),
			'm+': date.getMinutes(),
			's+': date.getSeconds(),
		};
		let k: string;
		for (k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				let str = o[k] + '';
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : DataFormat.padLeftZero(str));
			}
		}
		return fmt;
	},
	dateFilter(val: string, fmt: string = 'yyyy-MM-dd') {
		// 时间
		if (!val) { return '-'; }
		let time = new Date(val);
		return DataFormat.formatDate(time, fmt);
	},
	datetimeFilter(val: string, fmt: string = 'yyyy-MM-dd hh:mm:ss') {
		// 时间
		if (!val) { return '-'; }
		let time = new Date(val);
		return DataFormat.formatDate(time, fmt);
	},
};