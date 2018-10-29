Date.prototype.Format = function (fmt) { //author: meizz
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		"S": this.getMilliseconds() //毫秒
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
};
module.exports = {
    format_number(n){ //金额加“逗号”
        return parseFloat(n).toLocaleString()
    },
    getUserAgent(request,response){
    },
	setButtonName(status){ //新手专享 确定按钮显示规则
		return [
			{
				code: 0,
				cnvalue: "",
				disabled: true
			},
			{
				code: 1,
				cnvalue: "待审核",
				disabled: true
			},
			{
				code: 2,
				cnvalue: "已审核",
				disabled: true
			},
			{
				code: 3,
				cnvalue: "已驳回",
				disabled: true
			},
			{
				code: 4,
				cnvalue: "已作废",
				disabled: true
			},
			{
				code: 5,
				cnvalue: "立即抢购",
				disabled: false
			},
			{
				code: 6,
				cnvalue: "募集完成",
				disabled: true
			},
			{
				code: 7,
				cnvalue: "募集失败",
				disabled: true
			},
			{
				code: 8,
				cnvalue: "待还款",
				disabled: true
			},
			{
				code: 9,
				cnvalue: "已还款",
				disabled: true
			}
		][status]
	},
	isNumber2(val) {
		val = parseFloat(val);
		if ((/^[0-9]+(\.{1}\d{2})$/).test(val)) {
			return val;
		}
		if ((/^[0-9]+(\.{1}\d{1})$/).test(val)) {
			return String(val) + '0';
		}
		if ((/^[0-9]+$/).test(val)) {
			return String(val) + '.00';
		}
	},
	init(val){
		return parseInt(val);
	}
};