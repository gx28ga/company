/**
* 提现失败
* Created by wangcuiqing on 2018/3/27.
*/
<style>
    @import "../../openAccount/style/openAccount.css";
</style>
<template>
    <div class='openAccount-content img-size' data-paddingTop='60' data-paddingBottom='60'>
        <div class='faileimg img-size' data-width='218' data-height='226' data-marginBottom='15'></div>
      <div class='handle img-size' data-fontSize='32' data-marginBottom='30'>操作失败</div>
      <div class='line img-size' data-width='590'></div>
      <div class='prompt img-size' data-fontSize='24' data-marginTop='26' data-marginBottom='26' data-marginLeft='60' data-marginRight='60'>由于{{errMsg}}原因，您的提现操作已失败！</div>
      <div class='btn img-size' data-width='260' data-height='80' data-lineHeight='80' data-fontSize='32' @click='withdraw'>再试一次</div>
    </div>
</template>
<script>
    import store from "../../../store";
    import {mapGetters} from "vuex";
    export default {
        store,
        data(){
            return {
                errMsg:null,
                uid:null,
                msg:null,
                url:""
            }
        },
        computed:{
                ...mapGetters({
                    user : "getUserInfo",
                    account : "getUserAccount"
                })
        },
        mounted(){
            this.setTitle({
                show : true,
                title : "提现",
                back : true,
                backUrl : true
            });
            T.setImgSize();
            let self=this;
                //uid=T.getQuery("uid");
            self.errMsg=T.getQuery("errorMsg");
        },
        methods:{
            withdraw(){
                if(this.user){
                    return this.go().myAccount.withdrawCash();
                }
            }
        }
    }
</script>
