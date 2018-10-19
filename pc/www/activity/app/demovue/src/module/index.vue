<style lang='sass'>
@import '../style/global.scss';
    .main-box{
        background:#fff;
        padding-bottom:$s20;
       .taskTitle{
           border-bottom:1px solid  #D2D2D2;
           @include font-size(14px);
           padding-right:$s20;
           padding-left:$s20;
           .every{
                float: left;
                color:#666;
                display:inline-block;

           }
           .inviteRecord{
                float:right;
                color:#333;
                display:inline-block;
                a{
                  color:#333;
                }
                a:link {
                  color:#333;
                  text-decoration:none;
                }
                a:visited{
                  text-decoration:none;
                }
           }
       }
       .inviteNumber{
        .ben{
            width:50%;
           float: left;
            .month{
                color:#A0A0A0;
                @include font-size(14px);
                text-align:center;
            }
            .number{
                color:#333;
                @include font-size(18px);
                text-align:center;
            }
        }
       }
        .Taskexplain{
            background: #FFF9EF;
            padding:$s20;
            clear: both;
            margin-top:2rem;
            @include font-size(14px);
            .explainTitle{
                color:#666666;
            }
            .explainContent{
                color:#A0A0A0;
                dl{ padding:1px 0; overflow:hidden; 
                display:flex;
                flex-diraction:row;
                dd{
                    width:15px; text-align:left;
                }
                    }
            }
            .explainTable{
                margin:$s20 auto;
                 color:#666;
                @include font-size(12px);
                table{
                    th{
                       background: #D2D2D2;
                       width:33.3%;
                        text-align:center;
                    }
                    td{
                     background: #F2F2F2;
                      text-align:center;
                      line-height:$s20;
                      span{
                        color:#FF8246;
                      }  
                    }
                }
            }
            .inviteFriend{
             border: 1px solid #FF8246;
             color:#FF8246;
             margin:$s10 auto;
             text-align:center;
             @include font-size(14px);
             .big{
                @include font-size(18px);
             } 
            }
        }
        .inviteFriendBtn{
            margin:auto;
            a{
                 background: #FF8246;
           border-radius: $s30;
           color:#fff;
           display:block;
           text-align:center;
           @include font-size(16px);  
            }
        

        }
        .taskTishi{
          @include font-size(14px);
          .tishiTitle{
            color:#666;
          }
          .tishiContent{
            color:#A0A0A0;
          }

        }
    }
</style>
<template>
  <div class="main-box">
      <div class="taskTitle img-size" data-height='80' data-lineHeight='80'>
          <span class="every">每月任务</span>
          <span class="inviteRecord"><a  @click='lalal'>邀请奖励记录&gt;</a></span>
      </div>
      <div class="inviteNumber img-size" data-paddingTop='50' data-paddingBottom='50'>
          <div class="ben">
              <p class="month">本月完成邀请</p>
              <p class="number">{{count}}人</p>
          </div>
          <div class="ben">
              <p class="month">已获得奖励</p>
              <p class="number">{{returnFloat(task.taskReward)}}元</p>
          </div>
      </div>
      <div class="Taskexplain">
          <div class="explainTitle">任务说明</div>
          <div class="explainContent">
               <dl>
                    <dd>*</dd>
                    <dt>任务时间：<span style='color:#FF8246'>{{new Date(DrRecommendTask.startTime).Format('yyyy-MM-dd')}}～{{new Date(DrRecommendTask.endTime).Format('yyyy-MM-dd')}}</span></dt>
                </dl>
                <dl>
                    <dd>* </dd>
                    <dt> &nbsp;邀请任务期间,邀请新用户注册且首投≥<span style='color:#FF8246'>{{enableAmount}}</span>元（新手宝除外）人数达到一定数量，即可领取一定奖励。如下:</dt>
                </dl>
          </div>
          <div class="explainTable img-size" data-width='662'>
              <table>
                  <tr class='img-size' data-height='80'>
                  <th>本月邀请首投≥{{enableAmount}}元人数</th>
                  <th>邀请奖励</th>
                  <th>状态</th>
                  </tr>
                  <tr v-for='(item,index) in monthTask'>
                      <td v-if='index !== monthTask.length-1'><span>{{item.personNum}}</span>人</td>
                      <td v-if='index == monthTask.length-1'><span>{{item.personNum}}</span>人以上</td>
                      <td v-if='index==0'>可得现金<span>{{item.reward}}</span>元</td>
                      <td v-else>再得现金<span>{{item.reward}}</span>元</td>
                      <td v-if='item.status == 0'>未完成</td>
                      <td v-if='item.status == 1'>已完成</td>
                  </tr> 
              </table>
          </div>
          <div class='inviteFriend img-size' data-width='662' data-height='64' data-lineHeight='64'>
              邀请的<span class='big'>好友越多，奖励</span>越多   每月上限<span class='big'>240元</span>
          </div>
      </div>
      <div class='inviteFriendBtn img-size' data-width='470' data-height='60' data-lineHeight='60' data-marginTop='60' data-marginBottom='60'>
          <a @click='invite'>邀请好友</a>
      </div>
      <div class='taskTishi img-size' data-paddingLeft='20' data-paddingRight='20'>
          <div class='tishiTitle img-size'>温馨提示：</div>
          <div class='tishiContent img-size'>邀请任务要求的完成条件与邀请佣金、首月返现并不相关。例如：被邀请人首投＜5000元，同样可以建立邀请关系，不影响邀请佣金及首月返现的计算，但无法获得邀请任务的奖励（因为不满足完成邀请任务的条件）</div>
      </div>

  </div>
</template>
<script>
import {MonthlyTask,MyFriend} from "../common/URL.js";
export default{
  data(){
    return{
      task:"",
      enableAmount:0,
      DrRecommendTask:'',
      count:0,
      friendNumber:0,
      monthTask:[],
      recommCodes:'',
      monthRewards:''
    }
  },
  mounted(){
  T.setImgSize();
  var self=this;
  T.ajax({
    url:MonthlyTask,
    data:{uid:T.uid,pageOn:1,pageSize:100}
  }).then(data=>{
    self.task=data.map;
    self.count=data.map.effectiveCount;
    self.DrRecommendTask=data.map.drRecommendTask;//被邀请人任务
    self.enableAmount=data.map.drRecommendTask.enableAmount;////被邀请人首投金额
    self.monthTask=data.map.drRecommendTask.drRecommendTaskDetails;//被邀请人状态
     self.$nextTick(function(){
      T.setImgSize();
    })
  })
  T.ajax({
    url:MyFriend,
    data:{uid:T.uid,pageOn:1,pageSize:5}
  }).then(data=>{
    self.friendNumber=data.map.total;
    self.recommCodes=data.map.recommCodes;
   //self.monthRewards=data.map.monthRewards;//本月获得的邀请收益
  })
  },
  methods:{
    lalal(){
   router.push("/task");
      
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
      }
  }
}
</script>
