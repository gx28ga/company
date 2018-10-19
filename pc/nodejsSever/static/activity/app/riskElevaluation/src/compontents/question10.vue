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

</style>
<template>
   <div class='QA'>
    <div class='question img-size' data-fontSize='36' data-paddingLeft='40'data-paddingBottom='50'>
        10. 您准备在多融理财投资的资金占到您个人或者家庭资产（包括固定和流动资产）的比例范围？
    </div>
    <div class='answer img-size' data-paddingLeft='40' data-fontSize='28'>
        <div class='answerCon img-size'  data-lineHeight='80' data-height='80'><label for="number30"  class='img-size' data-fontSize='28'>A. 10%以下</label><input type="radio" name='NUM10' id='number30' class='optionRadio img-size' value='A' v-model='question10'  @click='question9'></div> 
         <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number31" class='img-size' data-fontSize='28'>B.  10%以上30%以下</label><input type="radio" name='NUM10' id='number31' class='optionRadio img-size' value='B' v-model='question10' @click='question9'></div> 
        <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number32">C. 30%以上50%以下</label><input type="radio" name='NUM10' id='number32' class='optionRadio img-size' value='C' v-model='question10'  @click='question9'></div> 
        <div class='answerCon img-size' data-lineHeight='80' data-height='80'><label for="number33"> D.  50%以上</label><input type="radio" name='NUM10' id='number33' class='optionRadio img-size' value='D' v-model='question10' @click='question9'></div>
    </div>
  
   </div> 
</template>
<script>
  export default{
    data(){
      return{
        question10:12
      }
    },
    methods:{
      /*question9(){
        this.$emit("changeValue",'question10,'+this.question10);
        }*/
    },
    watch:{
       question10(){
        this.$emit("changeValue",'question10,'+this.question10);
        }
    }
  }
</script>
