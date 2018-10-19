/**
* describe 重设登录密码
* Created by wangCuiqing
* Date: 2018/5/22
*/
<style scoped>
    .get-pwd{
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
    <article class="get-pwd img-size" data-marginTop="20">
        <section @click="hideError">
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
                       placeholder="请输入交易密码"/>
                <div class="eye img-size" :class="{current:showPwd}"
                     data-width="60" data-height="36"
                     @click="setPwdShow"></div>
            </div>
           <!-- <div class="explain img-size" data-marginBottom="50"
                 data-paddingLeft="30" data-fontSize="24">
                登录密码为6-18位数字与字母组合
            </div>-->
        </section>
        <div class="error" :class="{current:error}">{{errMsg}}</div>
        <div class="submit">
            <div class="btn img-size" data-height="100" data-fontSize="32"
                 data-marginTop="50" data-lineHeight="100"
                 @click="submit"
                 :class="{gray:!btnEvent}"
                 data-marginLeft="60" data-marginRight="60">
                修改密码
            </div>
        </div>
    </article>
</template>

<script>
    import mixin from '../../../mixin';
    import filters from '../../../mixin/filters';
    import {V1} from "../../../contant/urls/MYACCOUNT";
    import {mapGetters} from "vuex";
    import send from "../../../mixin/sendTips";
    export default {
        mixins : [mixin,filters,send],
        computed:{
            ...mapGetters({
                data : "getCatch",
                user : "getUserInfo",
                catch: "getCatch",
            })
        },
        data(){
            return{
                showPwd : false,
                pwd : "",
                btnEvent : false,
                type : "password",

                //验证
                code: "",
                errMsg: "",
                error: false,
                //验证码
                time: 60,
                codeclass: false,
                codeMsg: '获取验证码',
            }
        },
        watch:{
            pwd(val){
                let newPwd = this._justNumber(val);
                this.pwd = newPwd;
                this.setBtnStatus();
            },
            code(){
                this.setBtnStatus();
            }
        },
        mounted(){
            this.setTitle({
                back:true,
                title : "重设交易密码",
                show : true,
            });
            this.setNav({
                show:false
            });
            this.setImgSize();
            let num=this.catch.time.timeNum?this.catch.time.timeNum:false;
            if(num&& num<60 && num>0){
                this.time=num;
                this.reSendCode();
            }
            //this._sendMsgTips(this.user.member.mobilePhone);
            // this.codeEvent();
        },
        methods : {
            setPwdShow(){
                this.showPwd = !this.showPwd;
                this.type = this.showPwd?"text":"password";
            },
            showError(msg) {
                this.errMsg = msg;
                this.error = true;
                this.btnEvent = false;
                return false;
            },
            hideError() {
                this.error = false;
            },
            sendSmsId() {//发送短信
                let self = this;
                this.ajax({
                    url: V1.SEND_TRANSACATION_CODE,
                    data: {
                        mobilePhone: self.user.member.mobilePhone,
                        type : 1,
                    },
                    callback: true,
                }).then(data => {
                    if (data.success) {
                        self.reSendCode();
                        self._sendMsgTips(self.user.member.mobilePhone);
                    } else {
                        let obj = {
                            "1001" : "发送失败",
                            "8888" : "频繁操作",
                            "9999" : "系统错误"
                        };
                        let val = obj[data.errorCode] || "未知错误";
                        self.showError(val);

                    }
                });
            },
            codeEvent() {
                if (!this.codeclass) {
                    this.sendSmsId();
                }
            },
            reSendCode() {
                this.time = this.time - 1;
                this.$store.commit("setCatch",{
                    time : {
                        timeNum : this.time
                    }
                });
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
                let pwd = this._justNumber(this.pwd);
                this.btnEvent = pwd&&(pwd.length===6);
            },
            submit(){
                let self = this,
                    user = this.user,
                    code = this.code,
                    tel = this.data.tel,
                    pwd = this.pwd;
                if(self.btnEvent==false){
                    return false;
                }
                require.ensure([], function(require) {
                    let setpwd = require("../../../middle/setPwd");

                    let obj = {
                        tpwd : setpwd.setPwd(pwd),
                        smsCode : code
                    };
                    if(user){

                    }else{
                        obj.mobilePhone = tel;
                    }
                    self.ajax({
                        url : V1.UPDATETRANSACTIONPWD,
                        data : obj,
                        load : true,
                        callback : true,
                    }).then(data=>{
                        if(data.success){
                            self.go().resultUrl(()=>{
                                self.go().myAccount.setting();
                            });
                        }else{
                            let val = data.errorCode;
                            let obj = {
                                "1001":"验证码错误",
                                "1002" : "密码为空" ,
                                "1003":"登录密码不合法",
                                "9999":"系统错误"
                            };
                            val = obj[val] || "密码设置失败，请联系客服";
                            self.showError(val);
                        }
                    })
                });
            }
        }
    }
</script>
