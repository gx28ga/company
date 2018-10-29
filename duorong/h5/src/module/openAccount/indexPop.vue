/**
* 开通银行存管弹窗提示
* created by bo.peng 2018/4/19
* email:spion@qq.com
*/
<style scoped>
    .openbrank{
        .logo{
            margin:0 auto;
            background:url("../../images/common/logo.png") no-repeat;
            background-size:contain;
        }
        .tel{
            margin:0 auto;
            background:url("../../images/openAccount/zhuceicon.png");
            background-size:contain;
        }
        .text{
            color:#666;
            text-align:justify;
        }
        .submit{
            display:flex;
            .btn{
                flex:1;
                border-radius:50px;
                box-sizing:border-box;
                &.cancel{
                    border:1px solid #FF8246;
                    background:#fff;
                    color: #FF8246;
                }
            }
        }
    }
</style>
<template>
    <article class="openbrank img-size" data-paddingLeft="60" data-paddingBottom="30" data-paddingRight="60">
        <div class="logo img-size" data-width="210" data-height="66" data-marginTop="70"></div>
        <div class="tel img-size" data-width="220" data-height="220" data-marginTop="50" data-marginBottom="50"></div>
        <div class="text img-size" data-fontSize="28" data-lineHeight="40" data-marginBottom="40">
            为提升您的资金安全，您需要通过绑定银行卡开通存管账户，才能进行充值、提现、投资等操作。
        </div>
        <div class="submit">
            <div class="btn cancel img-size" @click="close"
                 data-marginRight="20"
                 data-height="68" data-lineHeight="68" data-fontSize="28">关闭</div>
            <div v-if="version=='2.0'" class="btn img-size" @click="bind" :class="{gray:!btnEvent}"
                 data-height="68" data-lineHeight="68" data-fontSize="28">{{account.memberType==0?'开通':'绑卡'}}</div>
            <div v-if="version=='1.0'" class="btn img-size" @click="openAccount" :class="{gray:!btnEvent}"
                 data-height="68" data-lineHeight="68" data-fontSize="28">立即开通</div>
        </div>
        <send-form ref="form" :data="formData"></send-form>
    </article>

</template>

<script>
    import {OPEN_USER_ACCOUNT} from "../../contant/urls/OPENACCOUNT";
    import sendForm from "../components/sendForm";
    import store from "../../store";
    import {mapGetters} from "vuex";
    export default {
        store,
        components : {
            sendForm
        },
        computed:{
            ...mapGetters({
                user : "getUserInfo",
                account : "getUserAccount"
            })
        },
        data(){
            return{
                formData : null,
                btnEvent : true,
                version : window.version
            }
        },
        mounted(){
            this.setImgSize();
        },
        methods : {
            close(){
                this.$parent.close();
            },
            bind(){
                if(!this.btnEvent) return;
                this.btnEvent = false;
                let self = this;
                this.ajax({
                    url : OPEN_USER_ACCOUNT,
                    data:{
                        uid : this.user.member.uid
                    }
                }).then(data=>{
                    let map = data.map;
                    self.formData = {
                        url: map.url,
                        type: "POST",
                        list: map.openAccountOfUserReqData,
                        callBack() {
                            self.$pops.loadding();
                            this.submit();
                        }
                    }
                })
            },
            openAccount(){
                this.close();
                this.go().openAccount.home();
            }
        }
    }
</script>
