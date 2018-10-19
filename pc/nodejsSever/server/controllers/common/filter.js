let T = require('./tool');
module.exports = function(env){
	env.addFilter('setButtonName', function(val) { //设置按钮名称 ，购买产品按钮
		return T.setButtonName(val);
	});
	env.addFilter('isNumber2',function(val){
		return T.isNumber2(val);
	});
	env.addFilter('init',function(val){
		return T.init(val);
	});
	env.addFilter('toLocaleString',function(val , num){
		let n = parseFloat(val).toLocaleString();
		if(num==2){
			n = n+'.00';
		}
		return n;
	});
}