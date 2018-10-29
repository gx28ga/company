<style scope>
    .resultlal{

       
        .resultA{
             background: #fff;
          margin:30px auto 0;
         .resultTitle{
            font-family: "PingFangSC-Semibold";
            color:#333;
            text-align: center;
        }
        .resultContent{
            color:#666;
            text-indent: 2em;
            font-family: "PingFangSC-Light";
          }
        }
        
    .returnRisk{
        background:#FE7634;
        color:#fff;
        font-family: "PingFangSC-Semibold";
        text-align: center; 
        margin:100px auto;
        border-radius: 5px;

    }
    }
</style>
<template>
    <div class='resultlal img-size' >
        <div class='resultA img-size' data-width='630' data-paddingLeft='16' data-paddingRight='16' data-paddingTop='14'  data-paddingBottom='20'>
             <div class='resultTitle img-size' data-lineHeight='60' data-fontSize='36'>您的风险偏好为<br>{{riskType}}</div>
        <div class='resultContent img-size' data-fontSize='28' data-lineHeight='40'>
             {{riskContent}}
        </div>
        </div>
      
    </div>
</template>
<script>
export default{
  data(){
    return{
        riskType:"稳健型",
        riskContent:"lal"
    }
  },
  methods:{
    returnRisk(){
        console.log("abk");
    }
  },
  props:["riskType","riskContent"]
}
    
</script>
