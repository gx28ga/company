/**
* 授权成功
* Created by wangcuiqing on 2018/3/27.
*/
<style>
    @import "../style/openAccount.css";
</style>
<template>
    <div class='openAccount-content img-size' data-paddingTop='60' data-paddingBottom='60'>
        <div class='successimg img-size' data-width='218' data-height='226' data-marginBottom='15'></div>
      <div class='handle img-size' data-fontSize='32' data-marginBottom='30'>操作成功</div>
      <div class='line img-size' data-width='590'></div>
      <div class='prompt img-size' data-fontSize='24' data-marginTop='26' data-marginBottom='26' data-marginLeft='60' data-marginRight='60'>恭喜，您已经成功更新了您的授权额度！</div>
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
                title : "授权",
                back : true,
            });
            T.setImgSize();
        },
        methods:{
            getPower(){
                this.go.resultUrl( this );
            }
        }
    }
</script>
