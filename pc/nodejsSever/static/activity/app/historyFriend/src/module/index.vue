<style scoped>
@import '../style/global';
.earn-box{
    height:100%;
    color:#A0A0A0;
    @include font-size(14px);
    .hebanner{
       background: -webkit-gradient(linear,0 100% , 0 0, from(#ff5b0b), to(#fe8a2b));
       position:relative;
       .diImg{
        @mixin contain "../images/di.png";
        position:absolute;
       }
       .hedeadline{
          color:#ffff66;
          text-align:center;
       }
       
      .icome{
        color:#fff;
        text-align:center;
        .question1{
          border-radius:50%;
               font-family:icons;
               background:#fff;
               color:#FF8246;
               display:inline-block;
               text-align:center;
        }
      }
      .icomeNumber{
        text-align:center;
        color:#fff;
     
        .yuan{
         
        }
      }
    }
     .heTotal{
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
     z-index:99;
     a{
     color:#fff;
      display:block;
      width:100%;
      text-align: center;
      z-index: 99;
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
          <div class='hedeadline img-size' data-fontSize='28'>好友邀请首月返现</div>
          <div class='icome img-size' data-marginTop='60' data-fontSize='34'>累计获得 <span class='question1 img-size' data-width='40' data-height='40' data-fontSize='40' data-lineHeight='40' @click='question'>?</span></div>
          <div class='icomeNumber img-size' data-marginTop='40' data-fontSize='90'>{{income}}<span class='yuan img-size' data-fontSize='34'>元</span></div>
      </div>
     <!--  <div class='heTotal img-size'  data-height='60' data-lineHeight='60' data-paddingLeft='40'>累计邀请人数<span class='tnumber'>{{incomeTotal}}</span></div> -->
      <div class='hisrecord img-size' data-paddingBottom='120'>
          <ul class='hisrecordTittle img-size' data-height='65' data-lineHeight='65' data-fontSize='28'>
            <li>好友ID</li>
            <li>投资时间</li>
            <li>可获奖励</li>
            <div style='clear:both'></div>
          </ul> 
          <ul class='hislist img-size' data-lineHeight='75' data-height='75' v-for='fr in incomeList'>
             <li>{{fr.mobilePhone}} </li>
             <li>{{new Date(fr.investTime).Format('yyyy-MM-dd')}}</li>
             <li>{{fr.referrerReward}}元</li>
             <div style='clear:both'></div>
           </ul>
            <ul class='hislist img-size' data-lineHeight='75' data-height='75' v-show='incomeList.length==0'>
             <li style='text-align:center' class='img-size' data-width='750'>暂无记录</li>
             <div style='clear:both'></div>
           </ul>  
        </div>
      <!--   <li @click='loadingMOre' style='text-align:center;color:#c6e2ff' v-show='incomeList.length>10'>{{load}}</li> -->
          <div class='inviteBtn img-size'data-width='750'><a class='img-size' data-lineHeight='100' data-height='100' @click='returnla'>返回佣金记录</a></div>
    </div>
</template>
<script>
import requirePop from '../pop/requirePop.js';
import {mapState} from 'vuex';
import {hesitory} from '../common/URL.js';
import store from '../store';
    export default {
        store,
        computed:{
            ...mapState([
                'userCoin'
            ])
        },
        components:{
        },
        data(){
            return {
              income:0,
        incomeList:[],
        incomeTotal:0,
        dadelinTime:'',
        load:'查看更多'
            }
        },
        mounted(){
            var self=this;
            T.init();
            if(!T.uid){
                 requirePop('gologin',{
                        props: {
                            content : '对不起，请登录后再操作。',
                            transition : 'rotate3d',
                            okTxt : '去登录',
                            okCallback : function(){
                                T.login();
                            }
                        }
                    },'publicTips');
             }
T.ajax({
    url:hesitory,
    data:{uid:T.uid,pageOn:1,pageSize:100},
    callback:true
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
        },
        methods : {
            goback(){
                 router.push("/number2");      
            },
            question(){
              T.click(function(){
                requirePop('friend',{
                    props: {
                            content : '①活动期间，被邀请人在注册成功当天起首月内（30天内，含第30天），成功投资任意产品（除新手宝外），邀请人就能获得一定比例的返现奖励：<br />②首月返现奖励=被邀请人投资产品基本收益金额（不含任何加息/红包等福利收益）*15%',
                            transition : 'rotate3d',
                            okCallback : function(){
                                T.login();
                            }
                        }
                },'publicTips')
              })
            },
            returnla(){
              T.callApp.invite();
            }

        }
    }
</script>
