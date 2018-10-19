/**
* 解绑成功
* Created by wangcuiqing on 2018/3/27.
*/
<style>
    @import "../../openAccount/style/openAccount.css";
</style>
<template>
    <div class='openAccount-content img-size' data-paddingTop='60' data-paddingBottom='60'>
        <div class='successimg img-size' data-width='218' data-height='226' data-marginBottom='15'></div>
      <div class='handle img-size' data-fontSize='32' data-marginBottom='30'>操作成功</div>
      <div class='line img-size' data-width='590'></div>
      <div class='prompt img-size' data-fontSize='24' data-marginTop='26' data-marginBottom='26' data-marginLeft='60' data-marginRight='60'>恭喜，您已成功解绑尾号为{{trailCardNo}}的银行卡！          PS.在未绑定新的银行卡期间无法进行充值以及提现操作</div>
      <div class='btn img-size' data-width='260' data-height='80' data-lineHeight='80' data-fontSize='32' @click='getPower'>关闭</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                uid:null,
            }
        },
        mounted(){
            this.setTitle({
                show : true,
                title : "解绑",
                back : true,
                backUrl : true
            });
            T.setImgSize();
            let self=this;
            self.trailCardNo=T.getQuery("trailCardNo");
        },
        methods:{
            getPower(){
                return this.go().myAccount.home();
            }
        }
    }
</script>
