/**
* 授权管理
* created by bo.peng 2018/4/19
* email:spion@qq.com
授权调用方试
this.go().openAccount.authorization({
    submit : true, //直接提交时 为 true
    showPop : false //是否需要显示弹窗信息
});
*/
/**
<style scoped>
    .openbrank{
        h2{
            text-align:center;
            color: #FE7634;
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
    <article class="openbrank img-size" data-paddingLeft="60" data-paddingTop="40" data-paddingBottom="20" data-paddingRight="60">
        <h2 class="img-size" data-fontSize="28">授权</h2>
        <div class="text img-size" data-fontSize="28" data-lineHeight="40" data-paddingTop="40" data-paddingBottom="40">
            {{text}}
        </div>
        <div class="submit">
            <div class="btn cancel img-size" @click="close"
                 data-marginRight="20"
                 data-height="68" data-lineHeight="68" data-fontSize="28">关闭</div>
            <div class="btn img-size" @click="bind" :class="{gray:!btnEvent}"
                 data-height="68" data-lineHeight="68" data-fontSize="28">授权</div>
        </div>
        <send-form ref="form" :data="formData"></send-form>
    </article>

</template>

<script>
    import {MEMBER_SETTING} from "../../../contant/urls/OPENACCOUNT";
    import sendForm from "../../components/sendForm";
    import store from "../../../store";
    import {mapGetters} from "vuex";
    export default {
        store,
        components : {
            sendForm
        },
        computed:{
            ...mapGetters({
                user : "getUserInfo"
            })
        },
        props:{
            obj : Object, // obj.submit=true 直接跳转， obj.type=0
        },
        data(){
            return{
                formData : null,
                btnEvent : true,
                text : "",
            }
        },
        mounted(){
            if(this.obj.submit){
                this.bind();
            }
            this.text = this.obj.errorMsg;
            this.text = this.text || "跳转中，请销等。";
            this.setTitle({
                title : "开通帐户"
            });
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
                    url : MEMBER_SETTING,
                    data:{
                        uid : this.user.member.uid
                    }
                }).then(data=>{
                    let map = data.map;
                    self.formData = {
                        url: map.url,
                        type: "POST",
                        list: map.authorizeOfUserReqData,
                        callBack() {
                            self.$pops.loadding();
                            this.submit();
                        }
                    }
                })
            }
        }
    }
</script>
