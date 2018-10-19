<style lang='sass'>
   @import '../style/global.scss'; 
   .level-box{
    margin-bottom:$s10;
       .levelTop{
        background:#fff;
         margin-bottom:$s10;
            .nowLevel{
            @include font-size(16px);
            color:#A0A0A0;
            text-align:center;
            }
            .levelCup{
            margin:$s10 auto $s30;
            }
            .levelContent{

                .levelLeft{
                    float: left;
                    width:49%;
                    .number{
                        color:#333333;
                        text-align:center;
                        @include font-size(16px);
                    }
                    .name{
                        color:#A0A0A0;
                        text-align:center;
                        @include font-size(14px);
                    }
                    
                }
                .line{
                     border-left:1px solid #D2D2D2;
                   
                }
            }
       }
       .levelList{
        color:#A0A0A0;
        background:#fff;
        @include font-size(14px);
        border-bottom:1px solid #f2f2f2;
        .levelNumber{
            width:25%;
            text-align:center;
            float: left;
            .leveCC{
              margin:$s5 auto;
              display:inherit;
            }
        }
        .levelCount{
            width:50%;
            text-align:center;
            float:left;
        }
        .levelRate{
            width:25%;
            text-align:center;
            float: left;
        }
       }
       .import{
        background:#fff;
        color:#FF8246;
        @include font-size(14px);
        text-align:center;

       }
       .impoveBtn{
        background:#fff;
        padding-bottom:$s20;
        padding-top:$s20;
        .goimpro{
          margin:0 auto;
          border-radius:$s30;
          background: #FF8246;
          color:#fff;
          @include font-size(16px);
          display:block;
          text-align:center;
        }
       }
       .tishi{
        @include font-size(14px);
        color:#A0A0A0;
        margin-top:$s40;
        padding-left:$s20;
       }
       // .levelContent{
       //  clear:both;
       // }

   } 
</style>
<template>
    <div class="level-box">
        <div class="levelTop img-size" data-paddingTop='60' data-paddingBottom='60'>
            <p class="nowLevel img-size">当前待收等级</p>
            <div class="levelCup img-size" data-width='90' data-height='80'>
               <!--  <img id='myGrade' src="../images/icon"+{{myGrade}}+".png" height="52" width="60" alt=""> -->
                <img  :src="src" height="52" width="60" alt="">
            </div>
             <div class="levelContent">
                 <div class="levelLeft img-size">
                     <p class="number">{{returnFloat(wprincipal)}}元</p>
                     <p class="name">我的待收</p>
                 </div>
                 <div class="levelLeft line img-size">
                       <p class="number">{{rate}}%</p>
                     <p class="name">今日待收佣金率</p>
                 </div>
                 <div style='clear:both'></div>
             </div>
        </div>
       <div class="levelList img-size" data-height='68' data-lineHeight='68'>
           <ul>
               <li class="levelNumber img-size">待收等级</li>
               <li class="levelCount img-size">我的待收(元)</li>
               <li class="levelRate img-size">佣金利率</li>
               <div style='clear:both'></div>
           </ul>
       </div>
    <!--     <div class="levelList img-size" data-height='90' data-lineHeight='90' v-for="(item,index) in level">
        <ul>
            <li class="levelNumber img-size"><img class='img-size leveCC' data-width='60' data-height='52'  data-marginTop='20' src="../images/icon1.png"></li>
            <li class="levelCount img-size" v-if='index==1'>待收&gt;{{item.minAmount}} </li>
            <li class="levelCount img-size" v-else>{{item.minAmount}}≤待收＜{{item.maxAmount}}</li>
            <li class="levelRate img-size">{{item.rate}}%</li>
            <div style='clear:both'></div>
        </ul>
            </div>  --> 
       <div class="levelList img-size" data-height='90' data-lineHeight='90' v-for="(item,index) in level">
            <ul>
                <li class="levelNumber img-size">
                    <img class='img-size leveCC' data-width='60'     data-height='52'  data-marginTop='20' :src="item.img" >
                </li>
                <li class="levelCount img-size" v-if='index==0'>待收&lt;{{item.maxAmount}} </li>
                <li class="levelCount img-size" v-if='index !=0 && index !=level.length-1'>{{item.minAmount}} ≤待收＜{{item.maxAmount}}</li>
                <li class="levelCount img-size" v-if='index==level.length-1'> 待收≥{{item.minAmount}}</li>
                <li class="levelRate img-size">{{item.rate}}%</li>
                <div style='clear:both'></div>
            </ul>
      </div>  
       <div class='import img-size' data-height='80' data-lineHeight='80'>升级到更高等级，获取更多收益</div>
       <div class='impoveBtn img-size'><a  class="goimpro img-size" data-width='470' data-height='60' data-lineHeight='60' @click='invest'>前往提升</a>
       </div>
       <p class="tishi">温馨提示：新手宝不计入有效待收哦</p>
    </div>
</template>
<script>
 import {waitingLevel} from "../common/URL.js";
 export default{
  data(){
    return{
      level:"",
      wprincipal:0,
      rate:1,
      myGrade:9,
      src:'balck.jpg'
    }
  },
  mounted(){
    var self=this;
  T.ajax({
    url:waitingLevel,
    data:{uid:T.uid},
  }).then(data=>{
    self.level=data.map.drRecommendConfig.drRecommendConfigDetails;
    for(var i=0;i<self.level.length;i++){
      self.level[i].img="src/images/icon"+(i+1)+".png";
    }

    self.wprincipal=data.map.wprincipal;
    self.rate=data.map.rate;
    var myGrade=data.map.MyGrade;
    self.src="src/images/icon"+myGrade+".png";
     self.$nextTick(function(){
      T.setImgSize();
    })
  });
    T.setImgSize();
  },
  methods:{
    invest(){
      T.callApp.investment();
    },
         returnFloat(value){
        var value=Math.round(parseFloat(value)*100)/100;
        var xsd=value.toString().split(".");
       if(xsd.length==1){
      value=value.toString()+".00";
      return value;
         }
     if(xsd.length>1){
      if(xsd[1].length<2){
       value=value.toString()+"0";
      }
       return value;
       }
      }
  }
}    
</script>
