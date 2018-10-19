<style>
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
    <div class='question img-size' data-fontSize='36' data-paddingLeft='40'data-paddingBottom='50'>
        5.  您每年可以用于投资的资金量为？
    </div>
    <div class='answer img-size' data-paddingLeft='40' data-fontSize='28'>
    <div class='answerCon img-size'  data-lineHeight='80' data-height='80'><label for="number11"  class='img-size' data-fontSize='28'>A. 小于2万</label><input type="radio" name='NUM5' id='number11' class='optionRadio img-size' value='A' v-model='question5'></div> 
     <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number12" class='img-size' data-fontSize='28'>B.  2万-10万</label><input type="radio" name='NUM5' id='number12' class='optionRadio img-size' value='B' v-model='question5'  ></div> 
    <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number13">C. 10万-50万</label><input type="radio" name='NUM5' id='number13' class='optionRadio img-size' value='C' v-model='question5'  ></div> 
    <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number14"> D.  大于50万</label><input type="radio" name='NUM5' id='number14' class='optionRadio img-size' value='D' v-model='question5'  ></div>
</div>
 <div class='next img-size' @click='question4' v-show='question5 !=-1&& riskShow == true' data-paddingRight='20' data-paddingTop='20'>下一题</div>
   </div> 
</template>
<script>
  export default{
    data(){
      return{
        question5:-1,
        riskShow:false
      }
    },
    props:['riskShow'],
    methods:{
       question4(){
        this.$emit("changeValue",'question5,'+this.question5);
        }
    },
     watch:{
       question5(){
        this.$emit("changeValue",'question5,'+this.question5);
        }
    }
  } 
</script>
