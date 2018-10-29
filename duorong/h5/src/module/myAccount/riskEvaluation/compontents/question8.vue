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
        8.  您的投资出现何种程度的波动时，您会呈现明显的焦虑？
    </div>
    <div class='answer img-size' data-paddingLeft='40' data-fontSize='28'>
    <div class='answerCon img-size'  data-lineHeight='80' data-height='80'><label for="number22"  class='img-size' data-fontSize='28'>A. 本金无损失，但收益未达预期</label><input type="radio" name='NUM8' id='number22' class='optionRadio img-size'  value='A' v-model='question8' ></div>
     <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number23" class='img-size' data-fontSize='28'>B.  本金5%以内的损失</label><input type="radio" name='NUM8' id='number23' class='optionRadio img-size' value='B' v-model='question8' ></div>
    <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number24">C. 本金5%-20%的损失</label><input type="radio" name='NUM8' id='number24' class='optionRadio img-size' value='C' v-model='question8' ></div>
    <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number25"> D.  本金20%以上的损失</label><input type="radio" name='NUM8' id='number25' class='optionRadio img-size'  value='D' v-model='question8' ></div>
</div>
<div class='next img-size' @click='question7' v-show='question8 !=-1&& riskShow==true' data-paddingRight='20' data-paddingTop='20'>下一题</div>
   </div>
</template>
<script>
    export default{
    data(){
      return{
        question8:-1,
        // riskShow:false
      }
    },
    props: {
        riskShow: {
            default: false
        }
    },
    methods:{
      question7(){
        this.$emit("changeValue",'question8,'+this.question8);
        }
    },
    watch:{
       question8(){
        this.$emit("changeValue",'question8,'+this.question8);
        }
    }
  }
</script>
