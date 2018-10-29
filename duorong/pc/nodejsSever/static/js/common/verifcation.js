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
			return "验证码不能为空";
		} else if (val.length < num) {
			return "请输入正确的验证码";
		} else if (reg.test(val) == false) {
			return "图片验证码格式错误";
		}
		return true;
	},
	imgCodeUrl(){
		return http+"../../login/validateCode.do?"+new Date().getTime();
	},
	varMobile( val ){ //手机号是否被注册
		return new Promise((resolve, reject) => {
			T.ajax({
				url: http + '/existMobilePhone',
				data: {
					mobilePhone: val
				},
                success : function( data) {
                    if (data.success) {
                        if (data.map.exists) {
                            resolve({status:false, msg:"此号码已经注册"});
                        } else {
                            resolve({status:true});
                        }
                    } else {
                        resolve({status:false, msg:"系统错误" + data.errorCode});
                    }
                }
			})
		});
	},
	sendMsg( mobile , imgCode , callback ){ //发送短信
		let self = this;
		T.ajax({
			url : http+'/sendRegMsg' ,
			data : {
				mobilePhone : mobile,
				picCode : imgCode,
				type : 1
			},
			success:function(data){
                if(data.success){
                    self.reSendYzm(callback);
                }else{
                    if(data.errorCode=='1001'){ return callback(false,"图片验证码不正确");}
                    if(data.errorCode=='1002'){ return callback(false,"当天短信发送超过限制");}
                    if(data.errorCode=='1003'){ return callback(false,"短信发送失败");}
                    if(data.errorCode=='8888'){ return callback(false,"频繁操作");}
                    callback(false,"系统错误"+data.errorCode);
                }
            }
		})
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
		let self=this;
		return new Promise((resolve, reject) => {
			T.ajax({
				url: http + '/reg',
				data: {
					mobilePhone: obj.mobile,
					passWord: obj.pwd,
					picCode: obj.imgCode,
					smsCode: obj.msg,
					checkbox: obj.check,
					recommPhone: obj.recommPhone,
					toFrom: obj.toFrom
				},
				success : function(data){
                    if (data.success) {
                    	self.tongji(obj.mobile);
                        resolve({status:true,flag:false,msg:"注册成功",success:true,userName:"亲爱的用户"});
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
				}
			})
		});
	},
	tongji(data){//统计代码
        (function(w,n){
            w[n] = typeof w[n] === 'function' ? w[n]:function(){
                (w[n].c = w[n].c || []).push(arguments);
            }
            _qha('send', {
                et: 31,
                order: [{
                    id:data,/* 注册id, 必填项*/
                    orderType:'1'/* 常量，请勿修改*/
                }]
            });
        })(window, '_qha');
	},
	toLogin(obj){ //去登陆
        return new Promise((resolve, reject) => {
            T.ajax({
                url: http + '/doLogin',
                data: {
                    mobilePhone: obj.mobile,
                    passWord: obj.pwd
                },
                success : function(data){
                    if (data.success) {
                        resolve({status:true});
                    }else{
                        resolve({status:false});
                    }
                }
            })
        });
    }
};
window.Verify = Verify;