<style lang='sass'>
   @import '../style/global.scss'; 
   .earn-box{
    color:#A0A0A0;
    @include font-size(14px);
    height:100%;
     .todayCount{
        background:#fff;
        position:relative;
        margin-bottom:$s10;
        .today{
          @include font-size(16px);
          text-align:center;
          .question{
               border-radius:50%;
               font-family:icons;
               background:#FF8246;
               color:#fff;
               @include font-size(20px);
               display:inline-block;
               text-align:center;
            }
        }
        .number{
          @include font-size(36px);
          color:#FE7634;
          text-align:center;
        }
        .gonglue{
                @include contain('../images/gonglue.png');
                position:absolute;
                display:block;
              }

        .countList{
          .line{
            border-left:1px solid #D2D2D2;
            border-right:1px solid #D2D2D2;
          }
            li{
              float: left;
              width:33%;
              .yong{
                color:#333;
                @include font-size(16px);
                text-align:center;
              }
              .yongName{
                text-align:center;
              }
                          }
        }
     }
     .earnTab{
        .tabList{
          text-align:center;
          @include font-size(16px);
          width:50%;
          float: left;
          background:#ffffff;
          border-bottom:1px solid #D2D2D2;
          .line{
            width:1px;
            float: left;
            background:#D2D2D2;
          }
          .invite{
            background: #FA4040;
            color:#fff;
            text-align:center;
            border-radius:$s13;
            display:inline-block;
            vertical-align:middle;
            @include font-size(10px);
          }
        }
        .active{
          color:#FF8246;
          border-bottom:1px solid #FF8246;
        }
        .yong{
          background:#fff;
          .yongrecord{
            width:33.333%;
            float: left;
            .name{
              text-align:center;
              height:$s14;
              line-height:$s14;
            }
            .number{
              color:#333;
              text-align:center;
              height:$s18;
              line-height:$s18;
              @include font-size(16px);
            }
            .question{
               border-radius:50%;
               font-family:icons;
               background:#FF8246;
               color:#fff;
               @include font-size(20px);
               display:inline-block;
               text-align:center;
            }
          }
        }
        .month{
          .monthTitle{
            background:#f2f2f2;
          }
          li{
            background:#fff;
            border-bottom:1px solid #f2f2f2;
             padding-left:$s20;
            padding-right:$s20;
            height:$s30;
            line-height:$s30;
          }
          .date{
            float: left;
          }
          .money{
            float:right;
            span{
              color:#FF8246;
            }
          }
        }
        .myFriend{
          background:#fff;
            .myFriendTab{
                background:#fff;
                .friendLeft{
                    float: left;
                    width:50%;
                    .name{
                      text-align:center;
                    .question{
                         border-radius:50%;
                         font-family:icons;
                         background:#FF8246;
                         color:#fff;
                         @include font-size(20px);
                         display:inline-block;
                         text-align:center;
                      }    
                    }
                    .number{
                      color:#333;
                      text-align:center;
                      @include font-size(16px);
                      span{
                        color:#A0A0A0;
                        @include font-size(12px);
                      }
                    }
                }
            }
            .shuoming{
              background:#FFF9EF;
              margin:0 auto;
              .invite{
                background:#FA4040;
                @include font-size(10px);
                color:#fff;
                float: left;
                text-align:center;
                border-radius:$s13;
                vertical-align:middle;
              }
              .explain2{
                color:#666;
                 float: left;
              }
              .goimpove{
                background:#FF8246;
                color:#fff;
                 float: left;
                text-align:center;
                border-radius:$s4;
              }
            }
          .record{
            .recordTittle{
              background:#F2F2F2;
              color:#333;
              @include font-size(14px);
              li{
                text-align:center;
                width:33.333%;
                float: left;
              }
            }
            .list{
              background:#fff;
              li{
                float: left;
                width:33.33%;
                text-align:center;
              }
            }
          }
        }
     }
     .inviteBtn{
     background: #FF8246;
     @include font-size(24px);
     text-align:center;
     position: fixed;
     bottom:0;
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
       <div class="todayCount img-size" data-paddingTop='62' data-paddingBottom='60'>
           <p class="today">今日预计佣金<span class='question img-size' data-width='40' data-height='40' data-lineHeight='40' @click="explain" data-marginLeft='10'>?</span></p>
           <p class="number">{{returnFloat(commission)}}</p>
           <a  class='gonglue img-size' data-width='144' data-height='50' data-top='50' data-right='30' @click='strategy'></a>
           <div class="countList img-size" data-marginTop='60'>
             <ul>
               <li>
                 <p class="yong">{{returnFloat(yesterdayAmount)}}元</p>
                 <p class="yongName">昨日佣金</p>
               </li>
               <li class='line'>
                 <p class="yong">{{returnFloat(sumAmount)}}元</p>
                 <p class="yongName">累计佣金</p>
               </li>
               <li>
                 <p class="yong">{{returnFloat(xian)}}元</p>
                 <p class="yongName" @click='lookHestory'>首月返现奖励&gt;</p>
               </li>
               <div style='clear:both'></div>
             </ul>
           </div>
       </div>
       <div class="earnTab img-size" data-paddingBottom='120'>
           <ul>
             <li class="tabList img-size active" data-height='80' data-lineHeight='80' @click='tab(0,$event)' >佣金记录</li>
             <!-- <li class="tabList img-size" data-height='80' data-lineHeight='80' @click="tab(1,$event)"><span class='line img-size' data-height='50' data-marginTop='15' data-marginBottom='15'></span>我的好友<p class='invite img-size' data-width='100' data-height='30' data-lineHeight='30' style='height:normal' v-show='showIvite'>邀请有奖</p></li>  -->
             <li class="tabList img-size" data-height='80' data-lineHeight='80' @click="tab(1,$event)"><span class='line img-size' data-height='50' data-marginTop='15' data-marginBottom='15'></span>我的好友<p class='invite img-size' data-width='100'   style='line-height:normal'>邀请有奖</p></li>
             <div style='clear:both'></div>
           </ul>
           <div class='recordList' v-show='show'>
           <ul class="yong img-size" data-height='192' data-lineHeight='192'>
             <li class="yongrecord img-size" data-paddingTop='60' data-paddingBottom='60'>
               <div class="name">我的待收本金</div>
               <div class="number">{{numFormat(wprincipal)}}元</div>
             </li>
             <li class="yongrecord img-size" data-paddingTop='60' data-paddingBottom='42'>
               <div class="name">我的佣金利率</div>
               <div class="number">{{rate}}%</div>
             </li>
            <!--  <li class="yongrecord img-size" @click='impove'>
              <span class='question img-size' data-width='40' data-height='40' data-lineHeight='40'>?</span>  如何提升？
            </li> -->
            <li class="yongrecord img-size" @click='impove'>
              <span class='question img-size' data-width='40' data-height='40' data-lineHeight='40'>?</span>  如何提升？
            </li> 
           </ul>
           <ul class='month img-size' id='list'>
             <!--  <li class='monthTitle img-size' data-height='60' data-lineHeight='60'>
                 <div class="date">本月</div>
                 <div class="money">总计：<span >{{charge.monthAmount}}</span>元</div>
              </li>  -->
              <li class='monthTitle img-size' data-height='60' data-lineHeight='60'>
                 <div class="date">日期</div>
                 <div class="money">获得佣金</div>
              </li>
              <li class='img-size' data-height='60' data-lineHeight='60' v-if='list' v-for='obj in list' v-show='list.length>0'>
                 <div class="date">{{new Date(obj.addTime).Format('yyyy-MM-dd')}}</div>
                 <div class="money">{{returnFloat(obj.amount)}}元</div>
              </li>
              <li @click='loadingMOre' style='text-align:center' v-show='list.length>0'>{{con}}</li>
              <li  style='text-align:center' v-show='list.length==0'>暂无数据马上看<a  @click='strategy' style='color:#FF8246'>攻略</a>赚取佣金吧</li>
             <!--  <li style='text-align:center'><a @click='lookHestory'>点击查看{{new Date(time).Format('yyyy-MM-dd')}}之前的邀请奖励明细</a></li> -->
           </ul>
           </div>
           <div class='myFriend' v-show='!show'>
                <div class='myFriendTab img-size' data-paddingTop='60' data-paddingBottom='60'>
                   <div class='friendLeft'>
                        <div class='name'>我的好友数量 <span class='question img-size' data-width='40' data-height='40' data-lineHeight='40' @click='myFriendNumber'>?</span></div>
                        <div class='number'>{{sumCount}}人</div>
                   </div>
                   <div class='friendLeft'>
                        <div class='name'>我的好友待收本金</div>
                        <div class='number'>{{returnFloat(friendAmount)}}元<span>(可计提佣金)</span></div>
                   </div>
                   <div style='clear:both'></div>
                </div>
                <div class='shuoming img-size' data-width='670' data-height='96' data-lineHeight='96' data-marginBottom='46'>
                    <p class='invite img-size' data-width='100' data-marginLeft='14'  data-marginRight='16' data-marginTop='36' style='line-height:normal'>邀请有奖</p>
                    <div class='explain2 img-size' data-width='346' data-height='76'><p class='img-size' data-height='30' data-lineHeight='30' data-marginTop='20'>完成每月邀请任务，每月最高赢取240元现金奖励。</p></div>
                    <div class='goimpove img-size' data-width='130' data-height='50'data-marginTop='22' data-lineHeight='50' @click='finish'>去完成</div>
                </div>
                <div class='record'>
                  <ul class='recordTittle img-size' data-height='50' data-lineHeight='50'>
                    <li>好友ID</li>
                    <li>手机号</li>
                    <li>时间</li>
                    <div style='clear:both'></div>
                  </ul>
                  <ul class='list img-size' data-lineHeight='50' data-height='50' v-for='fr in rows'>
                    <li>{{fr.realName}} </li>
                    <li>{{fr.mobilephone}} </li>
                    <li>{{new Date(fr.investTime).Format('yyyy-MM-dd')}}</li>
                    <div style='clear:both'></div>
                  </ul>
                </div>
           </div>
       </div>
       <div class='inviteBtn img-size'data-width='750'><a class='img-size' data-lineHeight='100' data-height='100' @click='invite'>邀请好友</a></div>
    </div>
</template>
<script>
//import date from "../common/date.js";
   // import explain from "../pop/explain.vue";
   // import friend from "../pop/friend.vue";
  import requirePop from '../pop/requirePop.js';
  import {commissionRecord,MonthlyTask,MyFriend} from "../common/URL.js";
 export default{
  data (){
    return{
       show:true,
       showIvite:false,
       commission:0,
       charge:"",
       yesterdayAmount:0,
       sumAmount:0,
       friend:"",
       list: [],
       List:[],
       scrolled:false,
       month:'',
       nowPage:0,
       pageOn:1,
       recommCodes:'',
       totalPage:0,
       con:'点击加载更多',
       time:'',
       xian:0,
       wprincipal:0,
       rate:0,
       sumCount:0,
       friendAmount:0

    }
  },
  mounted(){
  T.setImgSize();
    if(!T.uid){
         requirePop('login',{
              props : {
                     transition : 'rotate3d'
                   }
                  })
      }else{
             router.push("/main")
          }
  var self=this;
  var pageSize=10;
//发送ajax请求佣金记录
//===========制作滑动的效果================
//var list=document.querySelector('#list');
var childBox=document.querySelector("#list");
var lis=childBox.querySelectorAll("li")
var parentHeight=childBox.offsetHeight;
var childHeight=lis.offsetHeight;
var distance=30;
var maxPosition=0;
var minPosition=parentHeight-childHeight;
// 滑动区间
var maxSwiper=maxPosition+distance;
var minSwiper=minPosition-distance;
var startY=0;
var moveY=0;
var distanceY=0;
childBox.addEventListener("touchstart",function(e){
  startY=e.touches[0].clientY;
})
childBox.addEventListener("touchmove",function(e){
  moveY=e.touches[0].clientY;
  distanceY=moveY-startY;
  // if((currentY + distanceY) < maxSwipe && (currentY + distanceY) > minSwipe){
  //     setTranslateY(currentY + distanceY);
  //    }
})
childBox.addEventListener('touchend',function(e){
  // if((currentY+distanceY)>maxPosition){
  //   currentY=maxPosition;
  //   addTransition();
  //   setTranslateY(currentY);
  // }
  self.loadingMOre();
 
})
  T.ajax({
    url:commissionRecord,
    data:{uid: T.uid,pageOn:1,pageSize:10}
  }).then(data=>{
    self.list= data.map.page.rows;//佣金记录
    this.commission=data.map.estimateAmount;//查询整个接口数据
    this.xian=data.map.firstMonthAmount;//首月返现奖励
    this.charge=data.map;//查询整个数据
    this.yesterdayAmount=data.map.yesterdayAmount;//昨日佣金
    this.sumAmount=data.map.sumAmount;//累计佣金
    this.wprincipal=data.map.wprincipal;//累计佣金
    this.rate=data.map.rate;//佣金利率
    this.totalPage=data.map.page.totalPage;//总页数
      this.$nextTick(function(){
      T.setImgSize();
    })
  });
   T.ajax({
    url:MyFriend,
    data:{uid: T.uid,pageOn:1,pageSize:100}
  }).then(data=>{
   this.friend=data.map;//好友
   this.sumCount=data.map.sumCount;//好友数量
   this.friendAmount=data.map.friendAmount;//我的好友待收本金
   this.rows=data.map.page.rows;
      this.$nextTick(function(){
      T.setImgSize();
    })
   this.recommCodes=data.map.recommCodes;//邀请码
   /* var list= data.map.page.rows;//佣金记录
    this.commission=data.map.estimateAmount;//查询整个接口数据
    this.charge=data.map;//查询整个数据*/
  }); 
  //查询首月返现奖励
  /*  T.ajax({
    url:hesitory,
    data:{uid: T.uid,pageOn:1,pageSize:10}
  }).then(data=>{
   this.xian=data.map.rewards;//首月返现奖励
  });*/
  T.ajax({
    url:MonthlyTask,
    data:{uid:T.uid,pageOn:1,pageSize:100}
  }).then(data=>{
    this.time=data.map.drRecommendTask.startTime;
  })
  },
  methods:{
      tab(i,$event){
            const li = $('.earnTab .tabList');
            var self = this , 
            tag = $event.currentTarget;
            li.removeClass('active');
            $(tag).addClass('active');
            this.show = i==0;
            this.showIvite=i==1;
            this.transition = i==0?'left':'right';
        },
      explain(){
          requirePop('explain',{
               props : {
                    transition : 'rotate3d'
                }
          });
      },
      myFriendNumber(){
          requirePop('yongjin',{
               props : {
                    transition : 'rotate3d'
                }
          });
      },
      impove(){
        router.push("/level");
      },
       state(){
        router.push("/strategy");
      },
      lookHestory(){
        router.push("/hesitory")
      },
      loadingMOre(){
        if(this.pageOn<this.totalPage){
          if(this.pageOn<this.totalPage-1){
             this.con='点击加载更多';
           }else{
            this.con='没有更多数据了'
           }
          this.pageOn++;
        }else {
          this.con='没有更多数据了';
          return;
        }
          T.ajax({
              url:commissionRecord,
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
      strategy(){
        router.push('/strategy');
      },
      finish(){
        router.push("/earn")
      },
      invite(){
      var urlCode = {
         page: 38,
         title: '送你1588元红包和12%安全好收益，多融财富亲测靠谱！',
         content: '您的好友邀您领取1588元现金红包奖励，和Ta一起赚更多的钱！',
         pic: 'http://www.duorongcf.com/activity/app/huaruiBank/images/logo.png',
         src: 'http://www.duorongcf.com/activity/app/enroll?recommCode='+this.recommCodes
       }
       var Title = encodeURIComponent(urlCode.title);
       var Content = encodeURIComponent(urlCode.content);
       var appUrl = "jump://page=38?title=" + encodeURIComponent(urlCode.title) + "&content=" + encodeURIComponent(urlCode.content) + "&pic=" + encodeURIComponent(urlCode.pic) + "&src=" + encodeURIComponent(urlCode.src);
       window.location.href = appUrl;
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
      },
       numFormat(num){
              var arr = (num+"").split("");
          arr.reverse();
         var tmp= ""
          for(var i=1; i<=arr.length;i++) {
           tmp +=arr[i-1]
            if(i%3==0&&i!=arr.length){
          tmp+=","
      }
      }
      return tmp.split("").reverse().join("")
          }
      //===============佣金滚动====================
   /* addTransitionaddTransition(){//添加过度
       childBox.style.transition = 'all 0.2s';
        childBox.style.webkitTransition = 'all 0.2s';*//*做兼容*/
   /* },
    clearTransition(){//清楚过度
        childBox.style.transition = 'none';
        childBox.style.webkitTransition = 'none';*//*做兼容*/
    //}

      //===============佣金滚动====================
      }
    }    
</script>
