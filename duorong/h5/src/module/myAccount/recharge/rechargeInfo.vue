/**
* 确认充值
* created by bo.peng 2018/4/23
* email:spion@qq.com
*/
<style scoped>
    .rechargeinfo{
        position:relative;
        ul{
            background:#fff;
        }
        li{
            display:flex;
            align-items:center;
            &:not(:last-child){
                border-bottom:.5px solid #ddd;
            }
        }
        .title{
            width: 80px;
        }
        .text{
            flex:1;
            color: #A0A0A0;
        }
        .input-text{
            flex:1;
            input{
                width:100%;
                height:100%;
                border:none;
                background:#fff;
                color: #A0A0A0;
            }
        }
        .right-side{
            color: #FF8246;
            text-align:center;
            &.gray{
                color:#999;
            }
        }
        .error{
            height:0;
            overflow:hidden;
            text-align:center;
            color:#e60012;
            transition-duration:.3s;
            &.current{
                height:32px;
                line-height:22px;
            }
        }
        .explain{color: #FF8246;}
        .rechargetInfofooter{
            padding:20px 0;
            text-align:center;
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
    <article class="rechargeinfo img-size" data-fontSize="28">
        <section v-if="member">
            <ul class="img-size" data-paddingLeft="30" data-marginBottom="30">
                <li class="img-size" data-height="110" data-lineHeight="110" data-paddingRight="30">
                    <div class="title">充值金额</div>
                    <div class="text">{{data.rechargeNum|fixed|localeString}}元</div>
                </li>
                <li class="img-size" data-height="110" data-lineHeight="110" data-paddingRight="30">
                    <div class="title">银行名称</div>
                    <div class="text">{{member.bankName}}</div>
                </li>
                <li class="img-size" data-height="110" data-lineHeight="110" data-paddingRight="30">
                    <div class="title">银行卡号</div>
                    <div class="text">尾号{{member.bankNum}}</div>
                </li>
                <li class="img-size" data-paddingRight="30" data-paddingTop="20" data-lineHeight="110">
                    <div class="title">真实姓名</div>
                    <div class="text">*{{member.realName.substr(1)}}</div>
                </li>
                <li class="img-size" data-paddingRight="30" data-paddingTop="20" data-lineHeight="110">
                    <div class="title">身份证号</div>
                    <div class="text">{{member.idCards}}</div>
                </li>
            </ul>
            <div class="explain img-size" data-padding="30" data-fontSize="24">请确认此号码是否为您在办理此银行卡时所预留的手机号</div>
            <ul class="img-size" data-paddingLeft="30" data-marginBottom="30">
                <li class="img-size" data-height="110" data-lineHeight="110" data-paddingRight="30">
                    <div class="title">预留手机号</div>
                    <div class="input-text">
                        <input type="tel" v-model="tel" @focus="focus" maxlength="11"/>
                    </div>
                    <div class="right-side gray img-size" data-width="100">可修改</div>
                </li>
            </ul>
            <ul class="img-size" data-paddingLeft="30" data-marginBottom="30">
                <li class="img-size" data-height="110" data-lineHeight="110" data-paddingRight="30">
                    <div class="title">短信验证码</div>
                    <div class="input-text">
                        <input v-model="code" type="text"
                               maxlength="6"
                               placeholder="请输入短信验证码"/>
                    </div>
                    <div class="right-side img-size" data-height="60" data-lineHeight="60"
                         :class='{gray:codeclass}'
                         @click="codeEvent">{{codeMsg}}</div>
                </li>
            </ul>
            <div class="error" :class="{current:error}">{{errMsg}}</div>
            <div class="submit img-size" data-marginTop="30" data-paddingLeft="30" data-paddingRight="30">
                <div class="btn img-size" @click="submit" :class="{gray:!btnEvent}"
                     data-fontSize="32" data-height="90" data-lineHeight="90">确认充值</div>
            </div>
        </section>
        <copyright className="rechargetInfofooter"></copyright>
    </article>
</template>

<script>
    import {V1} from "../../../contant/urls/MYACCOUNT";
    import {mapGetters,mapState} from "vuex";
    import filter from "../../../mixin/filters";
    import arrow from "../../components/arrow";
    import copyright from "../../components/copyright";
    filter.filters = {
        fixed : filter.methods._toFixed,
        localeString(val){
            return filter.methods._localeString(val,true);
        }
    };
    export default {
        mixins:[filter],
        components:{
            arrow,
            copyright
        },
        computed:{
            ...mapState({
                member : state => state.user.memberInfo
            }),
            ...mapGetters({
                user : "getUserInfo",
                account : "getUserAccount",
                data : "getCatch"
            })
        },
        data(){
            return{
                code : "",
                tel : "",
                btnEvent : false,
                //错误提示
                errMsg : "",
                error : false,
                isSendCode : false,
                //验证码
                time: 60,
                codeclass: false,
                codeMsg: '获取验证码',
                serialNum : ""
            }
        },
        watch:{
            tel(val){
                if(val===this.member.mobilePhone) return;
                this.tel = this._justNumber(val);
            },
            code(){
                this.verification();
            },
            member( obj ){
                this.tel = obj.mobilePhone;
                this.$nextTick(()=>{
                    this.setImgSize();
                });
            }
        },
        mounted(){
            if(!this.data || !this.data.rechargeNum){
                this.go().myAccount.home();
                return;
            }
            this.$store.commit("updateMemberInfo",{self:this});
            this.setTitle({
                title : "确认充值",
                show : true,
                back:true,
                gap : true,
            });
            this.setNav({
                show : false
            });
            this.$nextTick(()=>{
                this.setImgSize();
            });
        },
        methods : {
            showError( msg ){
                this.errMsg = msg;
                this.error = true;
                return false;
            },
            hideError(){
                this.error = false;
            },
            focus(){
                this.tel = "";
            },
            sendSmsId() {//发送短信
                let self = this ,
                    tel = self.tel;
                if(tel===this.member.mobilePhone){
                    tel = this.member.reservedMobilePhone;
                };
                this.ajax({
                    url: V1.SEND_MSG,
                    data: {
                        mobilePhone: tel,
                        uid : self.user.member.uid,
                        amount : self.data.rechargeNum
                    },
                    callback: true,
                }).then(data => {
                    if (data.success) {
                        self.reSendCode();
                        self.serialNum = data.map.serialNum;
                    } else {
                        let val = data.errorMsg;
                        val = val||"错误操作，请联系客服";
                        self.showError(val);
                    }
                });
            },
            codeEvent() {
                if (!this.codeclass) {
                    this.codeclass = true;
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
            verification(){
                if(this.code.length>3){
                    this.btnEvent = true;
                }
            },
            submit(){
                let self = this ,
                    tel = self.tel;
                if(tel===this.member.mobilePhone){
                    tel = this.member.reservedMobilePhone;
                };
                if(!this.btnEvent) return;
                this.btnEvent = false;
                this.ajax({
                    url : V1.PAY,
                    data:{
                        uid : this.user.member.uid,
                        serialNum : this.serialNum,
                        captcha : this.code,
                        mobilePhone: tel,
                    },
                    load : true,
                    callback : true,
                }).then(data=>{
                    if(data.success){
                        self.$store.commit("updateHomeIndex",{update:true});
                        self.$pop({
                            title : "操作成功",
                            close : true,//是否显示关闭按钮
                            content : "你已成功充值<em style='padding:0 3px; color:red'>"+self.data.rechargeNum+"</em>元！",
                            icon : "icon1",//icon1 确定 2取消 3提示=
                            footer : {
                                ok : "确定",//确定按钮
                                okCallback : function(){
                                    this.close();
                                }, //确定按钮事件
                            },
                            closeCallback(){
                                self.$store.dispatch("updateUserAccount",{update:true});
                                //更新充值后的钱 用于投资时候显示的金钱  更新用户的金额
                                if(self.data.productData){
                                    self.data.productData.balance = parseFloat(self.data.balance)+parseFloat(self.data.rechargeNum);
                                    self.$store.commit("setCatch",{
                                        productData : self.data.productData
                                    });
                                }
                                self.$store.commit("setCatch",{
                                    rechargeNum : null
                                });
                                self.go().resultUrl();
                            }
                        });
                    }else{
                        self.showError(data.errorMsg);
                    }
                    self.btnEvent = true;
                });
            }
        }
    }
</script>
