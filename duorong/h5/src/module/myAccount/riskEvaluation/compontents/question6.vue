<style scoped>
    .question{
    font-family: "PingFangSC-Light";
    color:#333;

}
.answer{
    background: #fff;
    .answerCon{
        border-bottom: 1px solid #d2d2d2;
          position: relative;
        .optionRadio{
            width:0px;
            height:0px;
            background: #000;
            margin-right:30px;
            border-radius: 50%;
        }
          .optionRadio:before{
            content:"";
            display: block;
            position: absolute;
            border-radius: 50%;
            transition: 0.3s ease;
        }
        .optionRadio:before{
            top:12px;
            right:10px;
            width:16px;
            height:16px;
            background: url("../images/Oval.png");
            /*border:1px solid #000;*/
        }
        .optionRadio:checked:before{
          /*  border-color:red;*/
          width:16px;
          height:16px;
          background:url("../images/Group-4.png");
          top:12px;
          right:10px;
        }
    }
}
.next{
          color: #FF8246;
          font-family: PingFangSC-Light;
          float:right;
        }
</style>
<template>
   <div class='QA'>
    <div class='question img-size' data-fontSize='36' data-paddingLeft='40' data-paddingBottom='50'>
        6.  以下哪项能说明您的投资经验？
    </div>
    <div class='answer img-size' data-paddingLeft='40' data-fontSize='28'>
    <div class='answerCon img-size'  data-lineHeight='80'  data-paddingRight='20'><label for="number15"  class='img-size' data-fontSize='28'>A. 除存款、国债外，我几乎不投资其他金融产品</label><input type="radio" name='NUM6' id='number15' class='optionRadio img-size' value='A' v-model='question6' ></div>
     <div class='answerCon img-size' data-lineHeight='80' data-paddingRight='50'><label for="number16" class='img-size' data-fontSize='28' value='B' >B.  大部分投资于存款、国债等，较少投资于股票、基金、P2P等风险产品</label><input type="radio" name='NUM6' id='number16' class='optionRadio img-size' v-model='question6' ></div>
    <div class='answerCon img-size' data-lineHeight='80' data-paddingRight='50'><label for="number17">C. 资产均衡地分布于存款、国债、银行理财产品、信托产品、股票、基金、P2P等</label><input type="radio" name='NUM6' id='number17' class='optionRadio img-size' value='C' v-model='question6' ></div>
    <div class='answerCon img-size' data-lineHeight='80' data-paddingRight='50'><label for="number18"> D.  大部分投资于股票、基金、P2P、外汇、金融衍生品、海外投资产品等高风险产品，较少投资于存款、国债</label><input type="radio" name='NUM6' id='number18' class='optionRadio img-size' v-model='question6' value='D' ></div>
</div>
 <div class='next img-size' @click='question5' v-show='question6 !=-1&& riskShow==true' data-paddingRight='20' data-paddingTop='20'>下一题</div>
   </div>
</template>
<script>
      export default{
    data(){
      return{
        question6:-1,
        // riskShow:false
      }
    },
     props: {
         riskShow: {
             default: false
         }
     },
    methods:{
      question5(){
        this.$emit("changeValue",'question6,'+this.question6);
        }
    },
    watch:{
       question6(){
        this.$emit("changeValue",'question6,'+this.question6);
        }
    }
  }
</script>
