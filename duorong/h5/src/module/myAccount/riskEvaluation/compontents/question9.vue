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
        9.  在作出重大理财决策时, 您更关注的是潜在的亏损还是可能产生的收益？
    </div>
    <div class='answer img-size' data-paddingLeft='40' data-fontSize='28'>
    <div class='answerCon img-size'  data-lineHeight='80' data-height='80'><label for="number26"  class='img-size' data-fontSize='28'>A. 总是关注亏损 </label><input type="radio" name='NUM9' id='number26' class='optionRadio img-size'  value='A' v-model='question9' ></div>
     <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number27" class='img-size' data-fontSize='28'>B.  通常关注亏损</label><input type="radio" name='NUM9' id='number27' class='optionRadio img-size' value='B' v-model='question9' ></div>
    <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number28">C. 通常关注收益</label><input type="radio" name='NUM9' id='number28' class='optionRadio img-size' value='C' v-model='question9' ></div>
    <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number29">D. 总是关注收益</label><input type="radio" name='NUM9' id='number29' class='optionRadio img-size' value='D' v-model='question9' ></div>
</div>
<div class='next img-size' @click='question8' v-show='question9 !=-1&& riskShow==true' data-paddingRight='20' data-paddingTop='20'>下一题</div>
   </div>
</template>
<script>
        export default{
    data(){
      return{
        question9:-1,
        /*riskShow:false*/
      }
    },
    props: {
        riskShow: {
            default: false
        }
    },
    methods:{
       question8(){
        this.$emit("changeValue",'question9,'+this.question9);
        }
    },
    watch:{
       question9(){
        this.$emit("changeValue",'question9,'+this.question9);
        }
    }
  }
</script>
