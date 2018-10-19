<style lang='sass'>
  @import '../style/global.scss'; 
  .main-record{
    .recordTitle{
        background:#fff;
        @include font-size(18px);
        color:#A0A0A0;
       padding-left:$s30; 
       padding-right:$s30;
       margin-bottom:$s10;
       .recordLeft{
        float: left;
       }
       .recordNumber{
        @include font-size(24px)
        float: right;
        color:#151515;
        .number{
            color:#FF8246;
        }
       } 
    }
    .recordList{
        background:#fff;
        padding-left:$s20;
        padding-right:$s20;
        position: relative;
        .leftImg{
            @include contain('../images/mingxi.png');
            float: left;
        }
        .count{
           @include font-size(18px);
           color:#333;
           float:left;
        }
        .recordMing{
            float: left;
            .task{
                @include font-size(14px);
                color:#333;
                line-height:$s20;
            }
            .time{
                color:#A0A0A0;
                @include font-size(12px);
                line-height:$s12;
            }
        }
    }
    .di{
       text-align:center;
       color:#A0A0A0;
       @include font-size(14px);
       margin-top:$s15;
    }
  } 
</style>
<template>
    <div class="main-record">
        <div class="recordTitle img-size" data-height='130' data-lineHeight='130'>
            <div class="recordLeft">累计邀请奖励</div>
            <div class="recordNumber"><span class="number">{{returnFloat(taskReward)}}</span>元</div>
        </div>
        <div class="recordList img-size" data-paddingBottom='40' data-paddingTop='40' data-height='100' v-for='con in taskCon'>
            <div class="leftImg img-size" data-width='22' data-height='106'></div>
            <div class="count img-size">+{{con.amount}}元</div>
            <div class="recordMing img-size" data-marginLeft='20'>
                <p class="task">完成【邀请首投≥5000元{{con.count}}人】任务</p>
                <p class="time">{{new Date(con.addTime).Format('yyyy-MM-dd hh:mm:ss')}}</p>
            </div>
        </div> 
        <div class="di">已经到底啦~</div>
    </div>
</template>
<script>
  import {commissionRecord,MonthlyTask,status} from "../common/URL.js";
export default{
    data (){
    return{
      taskCon:[],
      taskReward:5,
      enableAmount1:0

    }
  },
  mounted(){
  T.ajax({
    url:MonthlyTask,
    data:{uid:T.uid,pageOn:1,pageSize:100}
  }).then(data=>{
    this.taskReward=data.map.taskReward;
    this.enableAmount1=data.map.drRecommendTask.enableAmount;
    this.taskCon=data.map.pageInfo.rows;
    this.$nextTick(function(){
      T.setImgSize();
    })
  });
  T.setImgSize();
  },
  methods:{
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
