<style scoped>
@import '../style/global';
.enrollBox{
  font-family: "PingFang SC Regular";
  .fon{
    color:#333;
    background: #fff;
    .xiangqing{
        color:red;
    }
  }
  .fonColor{
    color:red;
  }
}
</style>
<template>
<div class='enrollBox img-size'  data-paddingTop='20' data-fontSize='28'>
    <div class='fon img-size'  data-height='60' data-lineHeight='60' data-fontSize='28' data-marginBottom='2' data-paddingLeft='30'>1、请将所还款金额支付宝转账以下账户</div>
    <div class='fon img-size'  data-lineHeight='35' data-fontSize='20' data-height='70' data-paddingTop='25' data-paddingLeft='56' data-paddingBottom='25'>裴魁成 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;招商银行 <br> 6214 8321 5230 8222 </div>
    <div class='fonColor img-size' data-height='60' data-lineHeight='60' data-fontSize='18' data-paddingLeft='30'>请一定要备注您的手机号码</div>
    <div class='fon img-size' data-height='60' data-lineHeight='60' data-fontSize='28' data-paddingLeft='30'>2、 如不懂如何支付宝转账操作，点击<span class='xiangqing' @click='shuoming'>查看详情</span></div>
</div>
</template>
<script>
export default {
        data(){
          return{
          }
        },
        mounted(){
            document.title = '转账介绍';
            T.init();
            T.setImgSize();
        },
        methods : {
         shuoming:function(){
            router.replace({ 
                    path: 'shuoming',
                    query:{}
                })
         } 
        }
    }
</script>
