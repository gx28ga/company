<style lang='sass'>
   @import '../style/global.scss'; 
   .earn-box{
    height:100%;
    color:#A0A0A0;
    @include font-size(14px);
    .hebanner{
       background: -webkit-gradient(linear,0 100% , 0 0, from(#ff5b0b), to(#fe8a2b));
       position:relative;
       .diImg{
        @include contain("../images/di.png");
        position:absolute;
       }
       .hedeadline{
          color:#ffff66;
          @include font-size(14px);
          text-align:center;
       }
      .icome{
        color:#fff;
        text-align:center;
        @include font-size(17px);
        .question1{
          border-radius:50%;
               font-family:icons;
               background:#fff;
               color:#FF8246;
               @include font-size(20px);
               display:inline-block;
               text-align:center;
        }
      }
      .icomeNumber{
        text-align:center;
        color:#fff;
        @include font-size(45px);
        .yuan{
          @include font-size(17px);
        }
      }
    }
     .heTotal{
        @include font-size(14px);
        background:#f2f2f2;
        color:#666;
        .tnumber{
          color:#ff6000;
        }
       }
          .hisrecord{
            .hisrecordTittle{
              background:#ffffff;
              border-bottom:1px solid #eaeaea;
              color:#999;
              @include font-size(14px);
              li{
                text-align:center;
                width:33.333%;
                float: left;
              }
            }
            .hislist{
              background:#fff;
              border-bottom:1px solid #eaeaea;
              li{
                float: left;
                width:33.33%;
                color:#666;
                text-align:center;
              }
            }
          }
  .inviteBtn{
     background: -webkit-gradient(linear,0 100% , 0 0, from(#ff610f), to(#ff8225));
     @include font-size(24px);
     text-align:center;
     position: fixed;
     bottom:0;
     z-index:2;
     a{
     color:#fff;
      display:block;
      width:100%;
     }
     a:active{
      text-decoration:none;
     }
     }
   } 
</style>
<template>
    <div class="earn-box">
      <!-- 导航栏 -->
      <div class='hebanner img-size' data-height='320'  data-paddingTop='40'>
          <div class='diImg img-size' data-height='167' data-bottom='-9' data-left='0' data-width='750'></div>
          <!-- 截止日期 -->
          <div class='hedeadline img-size'>好友邀请首月返现</div>
          <div class='icome img-size' data-marginTop='60'>累计获得 <span class='question1 img-size' data-width='40' data-height='40' data-lineHeight='40' @click='question'>?</span></div>
          <div class='icomeNumber img-size' data-marginTop='40'>{{returnFloat(income)}}<span class='yuan'>元</span></div>
      </div>
     <!--  <div class='heTotal img-size'  data-height='60' data-lineHeight='60' data-paddingLeft='40'>累计邀请人数<span class='tnumber'>{{incomeTotal}}</span></div> -->
      <div class='hisrecord img-size' data-paddingBottom='120'>
          <ul class='hisrecordTittle img-size' data-height='65' data-lineHeight='65'>
            <li>好友ID</li>
            <li>投资时间</li>
            <li>可获奖励</li>
            <div style='clear:both'></div>
          </ul> 
          <ul class='hislist img-size' data-lineHeight='75' data-height='75' v-for='fr in incomeList'>
             <li>{{fr.mobilePhone}} </li>
             <li>{{new Date(fr.investTime).Format('yyyy-MM-dd')}}</li>
             <li>{{returnFloat(fr.referrerReward)}}元</li>
             <div style='clear:both'></div>
           </ul>  
        </div>
      <!--   <li @click='loadingMOre' style='text-align:center;color:#c6e2ff' v-show='incomeList.length>10'>{{load}}</li> -->
          <div class='inviteBtn img-size'data-width='750'><a class='img-size' data-lineHeight='100' data-height='100' @click='returnla'>返回佣金记录</a></div>
    </div>
</template>
<script>
//import date from "../common/date.js";
  // import explain from "../pop/explain.vue";
  import requirePop from '../pop/requirePop.js';
   import {hesitory,MonthlyTask,MyFriend} from "../common/URL.js";
 export default{
  data (){
    return{
        income:0,
        incomeList:[],
        incomeTotal:0,
        dadelinTime:'',
        load:'查看更多'
    }
  },
  mounted(){
    var self=this;
     if(!T.uid){
         requirePop('login',{
              props : {
                     transition : 'rotate3d'
                   }
                  })
      };
  T.setImgSize();
  T.ajax({
    url:hesitory,
    data:{uid:T.uid,pageOn:1,pageSize:100}
  }).then(data=>{
    if(data.success){
      self.incomeList=data.map.page.rows;
      self.incomeTotal=data.map.total;
      self.income=data.map.firstMonthAmount;
            self.$nextTick(function(){
              T.setImgSize();
          })
    }
  }); 
  //   T.ajax({
  //   url:MonthlyTask,
  //   data:{uid:T.uid,pageOn:1,pageSize:10}
  // }).then(data=>{
  //   if(data.success){
  //     self.dadelinTime=data.map.drRecommendTask.startTime;
  //   }
  // }); 

  },
  methods:{
      question(){
          requirePop('friend',{
               props : {
                    transition : 'rotate3d'
                }
          });
      },
      loadingMOre(){
            if(this.pageOn<this.totalPage){
          if(this.pageOn<this.totalPage-1){
             this.load='查看更多';
           }else{
            this.load='没有更多数据了'
           }
          this.pageOn++;
        }else {
          this.con='没有更多数据了';
          return;
        }
          T.ajax({
              url:hesitory,
              data:{uid: T.uid,pageOn:1,pageSize:this.pageOn*10}
              }).then(data=>{
              this.list= data.map.page.rows;//佣金记录
              //this.$set("list",this.list.concat(data.map.page.rows));
              this.commission=data.map.estimateAmount;//查询整个接口数据
              this.charge=data.map;//查询整个数据
              this.$nextTick(function(){
              T.setImgSize();
          })
        });
      },
      returnla(){
        router.push('/main');
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
      
      //===============佣金滚动====================
      }
    }    
</script>
