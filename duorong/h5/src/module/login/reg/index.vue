/**
* 注册
* created by bo.peng 2018/3/31
* email:spion@qq.com
*/
<style scoped>
.register{
    .input-text{
        display:flex;
        flex-direction:row;
        align-items:center;
        background:#fff;
    input{
        flex:1;
        height:100%;
        border:none;
    }
    .btn{
        padding:0 10px;
        border-radius:3px;
    }
    }
    .eye{
        background: url("../../../images/login/eyegray.png");
        background-size:contain;
        &.current{
             background-image: url("../../../images/login/eye.png");
         }
    }
    .explain{
        color:#FE7634;
    }
    .error{
        height:0;
        overflow:hidden;
        text-align:center;
        color:#e60012;
        transition-duration:.3s;
        &.current{
             height:22px;
             line-height:22px;
         }
    }
}
</style>
<template>
    <article class="register">
        <banner></banner>
        <section @click="hideError">
            <div class="input-text img-size" data-height="100"
                 data-marginBottom="20" data-marginTop="10"
                 data-paddingLeft="30" data-paddingRight="30">
                <input class="text" v-model="imgCode" type="text"
                       maxlength="6"
                       placeholder="请输入验证码"/>
                <img :src="src" class="img-size"
                     @click="changeImgCode"
                     data-width="120" data-height="60"/>
            </div>
            <div class="input-text img-size" data-height="100"
                 data-marginBottom="20"
                 data-paddingLeft="30" data-paddingRight="30">
                <input class="text" v-model="code" type="text"
                       maxlength="6"
                       placeholder="请输入短信验证码"/>
                <div class="btn img-size" data-height="60" data-lineHeight="60"
                     :class='{gray:codeclass}'
                     @click="codeEvent">{{codeMsg}}</div>
            </div>
            <div class="input-text img-size" data-height="100"
                 data-marginBottom="15"
                 data-paddingLeft="30" data-paddingRight="30">
                <input class="text" v-model="pwd" :type="type"
                       maxlength="18"
                       placeholder="请输入登录密码"/>
                <div class="eye img-size" :class="{current:showPwd}"
                     data-width="60" data-height="36"
                     @click="setPwdShow"></div>
            </div>
            <div class="explain img-size" data-marginBottom="15"
                 data-paddingLeft="30" data-fontSize="24">
                登录密码为6-18位数字与字母组合
            </div>
            <div class="input-text img-size" data-height="100"
                 data-marginBottom="20"
                 data-paddingLeft="30" data-paddingRight="30">
                <input class="text" v-model="invitation" type="tel"
                       maxlength="11"
                       placeholder="请输入邀请人手机号（非必填）"/>
            </div>
        </section>
        <div class="error" :class="{current:error}">{{errMsg}}</div>
        <div class="submit">
            <div class="btn img-size" data-height="100" data-fontSize="32"
                 data-marginTop="50" data-lineHeight="100"
                 :class="{gray:!btnEvent}" @click="submit"
                 data-marginLeft="60" data-marginRight="60">
                注册
            </div>
        </div>
    </article>
</template>

<script>
    import banner from "../common/banner";
    import mixin from '../../../mixin';
    import filters from '../../../mixin/filters';
    import {REGISTER,VALIDATE_CODE,SEND_REG_MSG} from "../../../contant/urls/LOGIN";
    import {mapGetters} from "vuex";
    import send from "../../../mixin/sendTips";
    export default {
        mixins : [mixin,filters,send],
        components:{
            banner
        },
        computed:{
            ...mapGetters({
                data : "getCatch"
            })
        },
        data(){
            return{
                showPwd : false,
                imgCode : "",
                pwd : "",
                btnEvent : false,
                invitation : "",
                src : "",
                type : "password",
                //验证码
                code: "",
                errMsg: "",
                error: false,
                isSendCode : false,
                //验证码
                time: 60,
                codeclass: false,
                codeMsg: '获取验证码',
            }
        },
        watch : {
            code(){
                this.setBtnStatus();
            },
            imgCode(){
                this.setBtnStatus();
            },
            pwd(val){
                let newPwd = this._toNumberAndLetter(val);
                this.pwd = newPwd;
                this.setBtnStatus();
            },
            invitation(val){
                this.invitation = this._toNumber(val);
            }
        },
        mounted(){
            if(this.user){
                return this.go().home();
            }
	        let tel = this.data.tel;
	        if(!tel) return this.go().login.home();
            this.setTitle({
                back:true,
                title : "注册",
                show : true,
            });
            this.setImgSize();
            this.changeImgCode();
        },
        methods:{
            setPwdShow(){
                this.showPwd = !this.showPwd;
                this.type = this.showPwd?"text":"password";
            },
            changeImgCode(){
            	let channel = T.channel?("&channel="+T.channel):"";
            	let version = T.version?("&version="+T.version):"";
                this.src=VALIDATE_CODE+"?mobilephone="+this.data.tel+channel+version+"&"+new Date().getTime();
                this.isSendCode = false;
                /*this.ajax({
                    url : "/login/validateCode.do",
                    type : "get",
                    data : {
                        mobilephone : "13713331283"
                    }
                }).then(data=>{

                })*/
            },
            showError(msg) {
                this.errMsg = msg;
                this.error = true;
                return false;
            },
            hideError() {
                this.error = false;
            },
            sendSmsId() {//发送短信
                let self = this ,
                    tel = self.data.tel;
                this.ajax({
                    url: SEND_REG_MSG,
                    data: {
                        mobilePhone: tel,
                        type : 1,
                        picCode : self.imgCode,
                    },
	                callback: true,
                }).then(data => {
                    if (data.success) {
                        self.reSendCode();
                        self._sendMsgTips(tel);
                    } else {
                        let val = data.errorCode;
                        let obj = {
                            "1002" : "当天短信发送超过限制",
                            "1003" : "短信发送失败",
                            "1004" : "图形验证码为空",
                            "1009" : "图形验证码输入有误",
                            "1112" : "手机号为空",
                            "1113" : "手机验证码为空",
                            "8888" : "频繁操作",
                            "9999" : "表示系统错误",
                            "9998" : "系统错误",
                        };
                        val = obj[val] || val;
                        self.showError(val);
                    }
                });
            },
            codeEvent() {
                if (!this.codeclass) {
	                this.isSendCode = true;
                    this.sendSmsId();
                }
            },
            reSendCode() {
                this.time = this.time - 1;
                if (this.time > 0) {
                    this.codeMsg = this.time + 's后重发';
                    setTimeout(this.reSendCode, 1000);
                    this.codeclass = true;
                } else {
                    this.codeclass = false;
                    this.codeMsg = '获取验证码';
                    this.time = 60;
                }
            },
            setBtnStatus(){
                this.btnEvent = this.code.length>3 && this.imgCode.length>3 && this._numAndLetter(this.pwd);
            },
            submit(){
                let self = this;
                if(!this.btnEvent) return;
                this.btnEvent = false;
                if(!this.isSendCode){
	                self.showError("请获取短信验证码。");
                	return;
                }
	            require.ensure([], function(require) {
		            let pwd = require("../../../middle/setPwd").setPwd(self.pwd);
                    let obj = {
	                    mobilePhone : self.data.tel,
                        passWord : pwd,
                        picCode : self.imgCode,
                        smsCode : self.code,
                    };
                    if(self.invitation){
                        obj.recommPhone = self.invitation;
                    }
		            self.ajax({
			            url: REGISTER,
			            data: obj,
			            callback: true,
		            }).then(data => {
			            if (data.success) {
				            self.$store.commit("setUserInfo",data.map);
				            self.$store.commit("updateUserInfo",data.map);
				            self.$store.commit("updateHomeIndex",{update:true});
                            self.outside().out();
				            self.go().openAccount.openBrank();
			            } else {
				            let val = data.errorCode;
				            let obj = {
					            "1001": "短信验证码为空",
					            "1002": "短信验证码错误",
					            "1003": "手机号为空",
					            "1005": "密码格式错误",
					            "1006": "未勾选注册协议",
					            "1007": "手机号已注册",
					            "1008": "推荐人不存在",
					            "9999": "未知问题9999，请链接客服"
				            };
				            val = obj[val] || val;
				            self.showError(val);
				            if(val=="1002") return;
				            self.changeImgCode();
				            self.time = 2;
			            }
			            self.btnEvent = true;
		            })
	            });
            }
        }
    }
</script>
