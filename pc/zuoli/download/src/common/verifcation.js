const http = '';
let Verify = {
	mobile(val){//手机
		let reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
		if (val == '') {
			return "手机号不能为空";
		} else if (reg.test(val) == false) { //手机号校验提示
			return "请输入正确格式的手机号";
		}
		return true;
	},
	pwd(val){
		let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/;
		if(val==''){
			return '请输入密码';
		}else if(val.length<6){
			return '注册密码不能少于6位';
		}else if(reg.test(val)==false){
			return '注册密码为 6-20位数字、字母或两者组合';
		}
		return true;
	},
	imgCode(val , num){//图形验证码  num 为长度
		num = num || 4;
		let reg = new RegExp("^[0-9A-Za-z]{"+num+"}$");
		if (val == '') {
			return "图形验证码不能为空";
		} else if (val.length < num) {
			return "请输入正确的验证码";
		} else if (reg.test(val) == false) {
			return "图片验证码格式错误";
		}
		return true;
	},
	imgCodeUrl(){
		//return http+"/login/validateCode.do?"+new Date().getTime();
		return http+"/api/h5/imgCode/generate.htm?"+new Date().getTime();
	},
	varMobile( val ){ //手机号是否被注册
		return new Promise((resolve, reject) => {
			T.ajax({
				url: http + '/api/user/isPhoneExists.htm',
				data: {
					phone: val
				},
				callback: true
			}).then(data => {
				if (data.success) {
					if (data.data.exists==20) {
						resolve({status:false, msg:"此号码已经注册"});
					} else {
						resolve({status:true});
					}
				} else {
					resolve({status:false, msg:"系统错误" + data.errorCode});
				}
			});
		});
	},
	sendMsg( mobile , code , callback ){ //发送短信
		let self = this;
		T.ajax({
			//url : http+'/api/user/h5SendSms.htm' ,
			url:http+"/api/user/h5SendSms.htm",
			data : {
				phone : mobile,
				code : code,
				type : "register"
			},
			callback:true
		}).then(data=>{ 
			if(data.code ==200){
				self.reSendYzm(callback);
			}else{
				if(data.code=='400'){ return callback(false,""+data.msg);}
				else{
					return callback(false,""+data.msg);
				}
			}
		});
	},
	shortMessageTime : 60,
	reSendYzm( callback ){ //倒计时
		Verify.shortMessageTime -= 1;
		if(Verify.shortMessageTime>0){
			callback(true,{
				status : -1,
				time : Verify.shortMessageTime
			});
			setTimeout(()=>{
				Verify.reSendYzm(callback);
			},1000);
		}else{
			Verify.shortMessageTime = 60;
			callback(true,{
				status : 0,
				time : Verify.shortMessageTime
			});
		}
	},
	register( obj ){ //注册
		return new Promise((resolve, reject) => {
			T.ajax({
				url: http + '/api/user/register.htm',
				data: {
					loginName: obj.mobile,
					loginPwd: obj.pwd,
					registerAddr: obj.registerAddr,
					registerCoordinate: obj.registerCoordinate,
					client: "H5",
					invitationCode: obj.invitationCode,
					vcode: obj.vcode
				},
				callback: true
			}).then(data => {
				console.log(data);
				if (data.success) {
					resolve({status:true});
				} else {
					if (data.errorCode == '1001') {
						resolve({status:false,msg:"短信验证码为空"});
					}
					if (data.errorCode == '1002') {
						resolve({status:false,msg:"短信验证码错误"});
					}
					if (data.errorCode == '1003') {
						resolve({status:false,msg:"手机号为空"});
					}
					if (data.errorCode == '1004') {
						resolve({status:false,msg:"图片验证码为空"});
					}
					if (data.errorCode == '1005') {
						resolve({status:false,msg:"密码格式错误"});
					}
					if (data.errorCode == '1006') {
						resolve({status:false,msg:"未勾选注册协议"});
					}
					if (data.errorCode == '1007') {
						resolve({status:false,msg:"手机号已注册"});
					}
					if (data.errorCode == '1008') {
						resolve({status:false,msg:"推荐人不存在"});
					}
				}
			});
		});
	}
};
module.exports = Verify;
