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
        1.  您是否有投资于其他金融产品(如余额宝、基金或股票等)的经历？
    </div>
    <div class='answer img-size' data-paddingLeft='40' data-fontSize='28'>
    <div class='answerCon img-size'  data-lineHeight='80' data-height='80'><label for="number1"  class='img-size' data-fontSize='28' >A. 是</label>
      <input type="radio" name='age' id='number1' class='optionRadio img-size' value='A' v-model='question1'>
   <!--    <input type="radio" name='agde' :checked='!checked1' @click="click"> -->
    </div>
     <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number2" class='img-size' data-fontSize='28' >B.  否</label>
     <input type="radio" name='age' id='number2' value='B' class='optionRadio img-size'  v-model='question1'></div>
    <!--  <input type="radio" name='agde' :checked='checked1' @click="click"> -->
    </div>
    <div class='next img-size' @click='question' v-show='question1 !=-1 && riskShow == true' data-paddingRight='20' data-paddingTop='20'>下一题</div>
   </div>
</template>
<script>
 export default{
     data(){
         return {
             question1: -1,
             /*riskShow:false,*/
         }
     },
     props: {
         riskShow: {
             default: false
         }
    },
  mounted(){
      // T.init();
  },
  methods:{
    // click(name){
    //   this.checked1 = !this.checked1;
    // }
    question(){
        this.$emit("changeValue",'question1,'+this.question1);
      }
  },
  watch:{
       question1(){
        setTimeout(()=>{this.$emit("changeValue",'question1,'+this.question1)},500)
    }
  }
 }
</script>
