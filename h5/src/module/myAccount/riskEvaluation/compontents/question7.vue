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
        7.  以下哪项描述最符合您的投资态度？
    </div>
    <div class='answer img-size' data-paddingLeft='40' data-fontSize='28'>
    <div class='answerCon img-size'  data-lineHeight='80' data-height='80'><label for="number19"  class='img-size' data-fontSize='28'>A. 厌恶风险，不希望本金损失，希望获得稳定回报 </label><input type="radio" name='NUM7' id='number19' class='optionRadio img-size' value='A' v-model='question7'></div>
     <div class='answerCon img-size' data-lineHeight='80'  data-paddingRight='50'><label for="number20" class='img-size' data-fontSize='28'>B.  保守投资，不希望本金损失，愿意承担一定幅度的收益波动</label><input type="radio" name='NUM7' id='number20' class='optionRadio img-size' value='B' v-model='question7' ></div>
    <div class='answerCon img-size' data-lineHeight='80'  data-paddingRight='50'><label for="number21">C. 寻求资金的较高收益和成长性，愿意为此承担有限本金损失</label><input type="radio" name='NUM7' id='number21' class='optionRadio img-size' value='C' v-model='question7' ></div>
    <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number22">D. 希望赚取高回报，愿意为此承担较大本金损失</label><input type="radio" name='NUM7' id='number22' class='optionRadio img-size'  value='D' v-model='question7' ></div>
</div>
 <div class='next img-size' @click='question6' v-show='question7 !=-1&& riskShow==true' data-paddingRight='20' data-paddingTop='20'>下一题</div>
   </div>
</template>
<script>
 export default{
    data(){
      return{
        question7:-1,
        /*riskShow:false*/
      }
    },
     props: {
         riskShow: {
             default: false
         }
     },
    methods:{
       question6(){
        this.$emit("changeValue",'question7,'+this.question7);
        }
    },
    watch:{
       question7(){
        this.$emit("changeValue",'question7,'+this.question7);
        }
    }
  }
</script>
