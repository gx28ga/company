/**
* describe  回款日历    https://docs.vcalendar.io/
* Created by wangCuiqing
* Date: 2018/5/21
*/
<style scoped>
    .calendarTop{
        background:#FE7634;
        color:#fff;
        display: flex;
        justify-content: center;
        align-items: center;
        .calendarDate{
            text-align: center;
        }
    }
    .calendar{
        text-align: center;
        background:#fff;
        .bar{
            height:30px;
            line-height:30px;
            text-align:center;
            .back{
                display:inline-block;
            }
            i{
                display:inline-block;
                width:15px;
                height:15px;
                margin-right:3px;
                vertical-align:middle;
                border:1px solid #ccc;
                border-radius:100%;

            }
            span{padding-right:5px;}
            .qu1{
                color:#FE7634;
                i{
                    background:#FE7634;
                    border-color:#FE7634;
                }
            }
            .qu2{
                color:#26b7aa;
                i{
                    height:1px;
                    border-radius:0;
                    background:#26b7aa;
                    border-color:#26b7aa;
                }
            }
        }
        .calendarList{
            .calendarTitle{
                text-align: center;
                color:#A0A0A0;
                border-top:1px solid #ccc;
                .close{
                    color:#0084D7;
                    float: right;
                }
            }
            .calendarContent{
                //display: flex;
                border-top:1px solid #ccc;
                .name{
                    color:#102542;
                    float:left;
                    //text-align: left;
                }
                .value{
                    color:#A0A0A0;
                    float:right;
                    //text-align: right;
                }
            }
        }
    }
    .siginBox{
        .signList{
            display: flex;
            /*justify-content: center;*/
            align-items: center;
            .okIcon{
                background:url("../../../images/account/okicons.png") no-repeat;
                background-size:contain;
                display: block;
            }
            .info{
                background:url("../../../images/account/info.png") no-repeat;
                background-size:contain;
                display: block;
            }
            .fontColor{
                color:#FE7634;
            }
            .explainFon{
                color:#A0A0A0;
            }
        }
    }
</style>
<template>
    <article>
        <div class="calendarTop img-size" data-height="220">
            <div class="calendarDate img-size"  data-width="375">
                <span class="img-size" data-fontSize="96">{{day}}</span><br>
                <span class="img-size" data-fontSize="24">{{year}}年{{month}}月</span>
            </div>
            <div class="calendarC img-size" data-fontSize="28" data-width="375" data-paddingLeft="">
                <div class="img-size" data-marginBottom="20" v-show="pre">{{monthText}}应收{{returnMoney.length}}笔</div>
                <div v-show="next">{{monthText}}已收{{downMoney.length}}笔</div>
            </div>
        </div>
        <div class="calendar">
            <v-calendar
                :pane-width="width"
                :theme-styles='themeStyles'
                @update:page="updatePage"
                @dayclick="dayclick"
                ref="root"
                :attributes='attributes'>
            </v-calendar>
            <div class="bar">
                <div class="back">
                    <i></i>
                    <span>已回款</span>
                </div>
                <div class="back qu1">
                    <i></i>
                    <span>待回款</span>
                </div>
                <div class="back qu2">
                    <i></i>
                    <span>奖励</span>
                </div>
            </div>
            <div class="calendarList img-size" data-paddingLeft="30" data-paddingRight="30" v-show="showList">
                <div class="calendarTitle img-size" data-fontSize="24" data-height="65" data-lineHeight="65">{{new Date(dataOfTheDay).Format('yyyy年MM月dd日')}}<span class="close" @click="closeList">隐藏</span>   </div>
                <div class="calendarContent img-size" data-height="89" data-lineHeight="89" v-for="item in productLlist" v-bind:key="item.id">
                    <div class="name img-size" data-fontSize="28">{{item.fullName}}</div>
                    <div class="value img-size" data-fontSize="28">待回款{{item.interest}}元</div>
                </div>
            </div>
        </div>
        <div class="siginBox img-size" data-marginTop="60" data-paddingLeft="60" v-show="incomeCalendar.attendanceEXP!=''||incomeCalendar.attendancePoints!=''">
            <div class="signList img-size" data-fontSize="28">
                <span class="okIcon img-size" data-width="24" data-height="20" data-marginRight="20"></span>
                <p>今日签到成功<span v-if="incomeCalendar.attendancePoints"><span class="fontColor">+{{incomeCalendar.attendancePoints}}</span>积分</span><span v-if="incomeCalendar.attendanceEXP"><span class="fontColor">+{{incomeCalendar.attendanceEXP}}</span>经验</span></p>
                <span class="info img-size" data-width="30" data-height="30" data-marginLeft="20" @click="signExplain"></span>
            </div>
            <div class="img-size explainFon" data-fontSize="24" data-paddingLeft="54" data-marginTop="30">{{incomeCalendar.attendanceBonus}}</div>
        </div>
    </article>
</template>

<script>
    import Vue from 'vue';
    import VCalendar from 'v-calendar';
    import 'v-calendar/lib/v-calendar.min.css';
    import {INDEX} from "../../../contant/urls/CALENDAR";//回款日历
    Vue.use(VCalendar, {
        firstDayOfWeek: 2,  // Monday
    });
    export default {
        data(){
           return{
               width : 0 ,
               attributes: [
                   {//待还款
                       highlight: {
                           backgroundColor: '#FE7634',     // Red background
                           borderColor: '#ff6666',
                           borderWidth: '2px',
                           borderStyle: 'solid',
                       },
                       contentStyle: {
                           color: 'white',                 // White text
                       },
                       dates: [
                           new Date(2018, 5, 6),           // Feb 6th
                           new Date(2018, 5, 23),          // Feb 23rd
                       ],
                   },
                   {//完成的
                       highlight: {
                           borderColor: '#ccc',
                           borderWidth: '1px',
                       },
                       dates: [
                           new Date(2018, 5, 2),
                           new Date(2018, 5, 3),
                       ],
                   },
                   {//今天
                       highlight: {
                           backgroundColor: '#9f80ff',     // Purple background
                           borderColor: '#8c66ff',
                           borderWidth: '2px',
                       },
                       contentStyle: {
                           color: 'white',                 // White text
                       },
                       dates: new Date(),
                   },
                   {//签到
                       dot: {
                           backgroundColor: '#ffbf0a', // Red dot
                       },
                       dates: [
                           new Date(2018, 5, 1),           // Jan 1st
                           "2018-06-03",
                       ],
                   },
                   {//奖品
                       bar: {
                           backgroundColor: '#26b7aa',     // Red bar
                       },
                       dates: [
                       ],
                   },
               /*    {
                       page:{
                           frompage(){
                               console.log(22);
                           },
                           topage(){
                               console.log(1)
                           }
                       }
                   }*/
               ],
               themeStyles: {
                   wrapper: {
                       background:"#fff",
                       border: '0',
                   },
                   dots: {
                       marginBottom: '2px'
                   },
                   bars: {
                       marginBottom: '2px',
                       width: '40%'
                   }
               },
               signList:[],//签到的
               returnMoney:[],//待回款
               downMoney:[],//已回款
               productLlist:[],//需要显示的产品列表,
               showList:false,//是否显示产品类表
               dataOfTheDay:"",//产品列表显示的日期
               year:2018,
               month:5,
               day:20,
               investList:[],//投资列表
               incomeCalendar:"",//回款日历数据
               giftList:[],//奖励
               monthText:"",//最上面显示数据
               pre:true,//应收
               next:true,//已收
           }
        },
        mounted(){
            this.setImgSize();
            this.width = T.width;
            this.setTitle({
                title:"回款日历",
                show:true,
                back:true,
            })
            this.monthText="本月";
            this.requesrDate(Date.parse(new Date()));
        },
        methods: {
            dayclick(data){
                let self=this;
                self.productLlist=[];
                self.dataOfTheDay=data.dateTime;//点击的产品列表的时间
                self.investList.forEach(key=>{
                    let expireDate=(new Date(key.expireDate)).Format("yyyy-MM-dd");
                    let dateTime=(new Date(data.dateTime)).Format("yyyy-MM-dd");
                   if(expireDate==dateTime){
                       self.$nextTick(()=>{
                           self.setImgSize();
                       })
                       self.productLlist.push(key);
                   }
                })
                if(self.productLlist.length==0){
                    self.showList=false;
                }else{
                    self.showList=true;
                }
            },
            closeList(){
                this.showList=false;
            },
            signExplain(){
                this.$pop({
                    title : "签到说明",
                    close : false ,//是否显示关闭按钮
                    content : "每日签到送1积分，连续签到可获得更多积分",
                    icon : "icon3",//icon1 确定 2取消 3提示
                    footer : {
                        ok : "我知道了",//确定按钮
                        okCallback : function(){
                            this.close();
                        }, //确定按钮事件
                    }
                });
            },
            updatePage(obj){
              let date=Date.parse(new Date(obj.monthComps.year,obj.monthComps.month-1,12));
              this.requesrDate(date);
                let isTodyMonth=new Date().getMonth();
                if(isTodyMonth==obj.monthComps.month-1){
                    self.monthText="本月"
                }else{
                    self.monthText=obj.monthComps.month+"月";
                }
            },
            requesrDate(data1){
                //let newDay=data ? data:Date.parse(new Date());
                //console.log(data);
                this.year=new Date().getFullYear();
                this.month=new Date().getMonth()+1;
                this.day=new Date().getDate();
                let self=this;
                this.ajax({
                    url:INDEX,
                    data:{
                        queryTime:data1
                    },
                    load:true
                }).then(data=>{
                    let nowMonth=new Date().getMonth(),Month=new Date(data1).getMonth();
                    if(nowMonth==Month){
                        this.monthText="本月"
                    }else{
                        this.monthText=Month+1+"月"
                        if(nowMonth<Month){
                            self.pre=true;
                            self.next=false;
                        }else{
                            self.pre=false;
                            self.next=true;
                        }
                    }
                    self.returnMoney=[];
                    self.downMoney=[];
                    self.incomeCalendar=data.map;
                    self.investList=data.map.investList;//回款列表
                    data.map.dailyAttendanceList.forEach(key=>{
                        if(key.isSign==1){
                            self.signList.push(key.repDate)
                        }
                    })
                    if(data.map.investList.length>0){
                        data.map.investList.forEach(name=>{
                            if(name.status==0){
                                self.returnMoney.push(new Date(name.expireDate));//待回款
                            }else if(name.status==1){
                                self.downMoney.push(new Date(name.expireDate));//已回款
                            }
                        })
                    }
                    self.giftList=Number(data.map.attendanceBonusDate);
                   //self.giftList=1531411200000;
                    //self.giftList.push(attendanceBonusDate.getFullYear()+"-"+attendanceBonusDate.getMonth()+1+"-"+attendanceBonusDate.getDate());
                    self.attributes[3].dates=self.signList;
                    self.attributes[0].dates=self.returnMoney;//待回款
                    self.attributes[1].dates=self.downMoney;//已回款
                    // console.log(new Date(data.map.attendanceBonusDate*1000));
                    self.attributes[4].dates=self.giftList;//小礼品
                })
            }
        }
    }
</script>
