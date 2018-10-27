import Vue from "vue";
import T from "../../common/global";
let MyPlugin = function () {
	T.init();
	Date.prototype.Format = function (fmt) { //author: meizz
		let o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (let k in o){
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		}
		return fmt;
	};
    require.ensure([],(require)=>{
        Object.assign(window,{
            TweenLite : require("../../../static/plug/TweenMax.min"),
        })
    });
};
MyPlugin.install = function (Vue, options) {
	Object.assign(Vue, {
	});
	Object.assign(Vue.prototype, {
		ajax(obj) {
			let self = this;
			obj.type = obj.type || 'POST';
			obj.data = obj.data || {};
			Object.assign(obj.data,{
                token : T.token,
                channel : T.channel,
                version : T.version,
                uid : T.uid
            });
			//设置
			if (obj.load) self.$pops.loadding();
			return new Promise((resolve, reject) => {
				$.ajax({
					url: obj.url,
					type: obj.type,
					dataType: obj.dataType || 'json',
					data: obj.data,
                    headers : obj.headers,
					timeout: 500000,
					success: function (data) {
						if (data.success === true) { //更新登录信息
							resolve(data);
						} else if (obj.callback && data.errorCode !== "9998") {
							resolve(data);
                            self.$pops.removeLoadding();
						} else {
							if (data.errorCode === "9998") {
								self.$store.dispatch("clearLoginInfo");
								self.go().login.home();
                                self.$pops.removeLoadding();
							}else{
                                self.$pop({
                                    title: "错误",
                                    icon : "icon2",
                                    close: true,//是否显示关闭按钮
                                    content: data.errorCode||data.errorMsg
                                });
                            }
						}
						if (obj.load) self.$pops.removeLoadding();
					},
					error: function () {
						if (obj.error) {
							obj.error();
						} else {
							self.$pop({
								title: "请求接口超时",
								close: true,//是否显示关闭按钮
                                icon : "icon2",
								content: "请重试，或联系客服！"
							});
						}
						self.$pops.removeLoadding();
					}
				});
			})
		},
		loginJudge(){ //是否登录，未登录则返回首页
			if(!this.user){
				this.go().home();
				return false;
			}
			return true;
		},
		openBank(){ //是否开通银行存管，未开通则去开通页面
		    //this.$store.dispatch("getUserAccount");
		    let state = this.$store.state ,
                user = state.user.info.member;
		        //account = state.user.account;
		    if(version!=="1.0"){
                let memberType = user.memberType;
                if (memberType===0) {//新用户
                    this.go().openAccount.home();
                    return false;
                } else if (memberType===1) {//3码用户  老的正常用户 邦卡2.0后即可
                    this.go().openAccount.home();
                    return false;
                } else if (memberType===2) {//4码用户  正常用户
                    return true;
                }else{
                    alert("帐户异常，请联系客服！");
                }
            }else{
		        if(user.isRas===0 || !user.isRas){
                    if(user.realVerify===1){
                        this.$pop({
                            title : "错误",
                            close : true,//是否显示关闭按钮
                            content : "帐户异常，请联系客服！",
                            icon : "icon2",//icon1 确定 2取消 3提示
                        });
                        //this.go().openAccount.openBrank();
                        return false;
                    }
		            this.go().openAccount.home(true);
                    return false;
                }
                return true;
            }
		},
		setImgSize : T.setImgSize
	});
};
MyPlugin();
Vue.use(MyPlugin);
