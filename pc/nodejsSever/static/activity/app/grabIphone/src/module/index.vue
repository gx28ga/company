<style>
    @import '../style/index.css';
    
</style>
<template>
    <article>
        <div class="banner img-size" data-height="500">
        </div>
        <div class="topbox img-size" data-marginTop="-500">
            <div class="top img-size" data-height="964">
                <div v-show="islast" class="rulebtn img-size" data-width="128" data-lineHeight="33" data-marginRight="44" data-marginTop="25" data-fontSize="24">
                    <a href="#rule">活动规则</a></div>
            </div>
            <div v-show="islast" class="invebtn img-size" data-width="374" data-height="95" data-marginTop="-457" @click="investment"></div>
            <div v-show="!islast" class="img-size" data-width="374" data-height="30" data-marginTop="-457"></div>
            <div class="infobox img-size" data-width="686" data-height="512" data-marginTop="60" >
                <div class="today img-size" data-width="356" data-lineHeight="60" data-top="16" data-fontSize="36" v-show='islast'> 
                    <span class="img-size" data-width='123' data-height='58' data-paddingLeft="13" data-paddingRight="13">2017</span>
                    <span>-</span>
                    <span class="img-size" data-width='72' data-height='58' data-paddingLeft="13" data-paddingRight="13">10</span>
                    <span>-</span>
                    <span class="img-size" data-width='72' data-height='58' data-paddingLeft="13" data-paddingRight="13">{{toDay}}</span>
                </div>
                <div class="info-box img-size" data-fontSize="36" data-lineHeight="60" data-top="162" data-paddingLeft='105' data-paddingRight='50'>
                    <p class="name img-size" data-paddingLeft="45" data-paddingBottom="40">Hi,{{userName}}</p>
                    <div v-show='islast'>
                        <p>今日累计投资：{{toDayTotalAmount | money}}元</p>
                        <p>今日排名：{{rank}}</p>
                        <p>预计获得：{{gift}}</p>
                    </div>
                    <p v-show='!islast'>累计获得：{{giftList}}</p>
                </div>
            </div>
        </div>
        <div class="notice img-size" data-paddingLeft="30" data-paddingRight="25" data-paddingTop="40">
            <p class="img-size" data-paddingLeft="30" data-fontSize="24"><i class="img-size" data-height="20" data-width="17" data-left="0" data-top="10"></i>活动期间，每天进行一次排名，共5天。根据每天投资≥120天产品的总金额进行排名，前10名可获得超值大奖（当日投资≥120天产品的总金额＜5万元的用户不参与排名）。</p>
        </div>
        <div class="list-box img-size" data-width="686" data-marginTop="20" data-marginBottom='30'>
            <div class="top img-size" data-height="139" data-lineHeight="104" data-fontSize="36">{{istoday?'当前排名':'获奖名单公示'}}</div>
            <div class="list-body img-size" data-borderBottomLeftRadius="8" data-borderBottomRightRadius="8" data-paddingBottom="35">
                <div class="date img-size" data-lineHeight="75" data-paddingLeft="20" data-fontSize="32">
                    <span id="prev" class="" @click='prev'>＜10月{{infoDate-1}}日</span>
                    <span>10月{{infoDate}}日</span>
                    <span id="next" class="" @click='next'>10月{{infoDate+1}}日＞</span>
                </div>
                <div class="table img-size" data-lineHeight="50" data-fontSize="24">
                    <ul>
                        <li>排名</li>
                        <li>用户手机号</li>
                        <li>金额</li>
                        <li>奖品</li>
                    </ul>
                    <ul v-show='taDayInfo!=""' v-for='item in taDayInfo'>
                        <li>{{item.rowNum}}</li>
                        <li>{{item.mobilePhone}}</li>
                        <li>{{item.amount | money}}</li>
                        <li>{{item.gift}}</li>
                    </ul>
                    <p v-show='taDayInfo==""' style="text-align:center;">很遗憾，无人上榜</p>
                    <div v-show='istoday' class="ts img-size" data-width="618" data-lineHeight="26" data-paddingTop="26">榜单实时展示，榜单结果以当天23:59最终结果为准，其余时间仅供参考</div>
                </div>
            </div>
        </div>
        <rule v-show='islast'></rule>
    </article>
</template>
<script>
    import requirePop from '../pop/requirePop.js';
    import rule from './rule.vue';
    export default {
        data() {
            return{
                userName : 'xxx',
                toDayTotalAmount : 0,
                rank : 0,
                gift : '',
                dayNum: 0,
                infoDate : new Date().getDate(),
                toDay : 0,
                istoday : true,
                islogin : false,
                islast : true,//活动最后一天
                participate : false,//渠道用户
                startTime: '',
                taDayInfo:null,
                status: 0,
                aa : 0
            }
        },
        components:{
            rule
        },
        filters: {
            data:function (input) {
                var d = new Date(input);
                var year = d.getFullYear();
                var month = d.getMonth() + 1;
                var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
                return year+ '-' + month + '-' + day;
            },
            money: function(n){
                return parseFloat(n).toLocaleString();
            }
        },
        mounted(){
            T.init();
            const self = this; 
            self.islogin = T.isLogin;
            
            self.activityStatus((val)=>{
                self.startTime = val.startTime;
                self.status = val.status;
                if(val.status==-1){
                    requirePop('participate',{
                        props: {
                            cancelTxt :true,
                            info : '活动未开始',
                            transition : 'rotate3d',
                            btn :'知道了',
                            closeCallback :function(){
                                T.callApp.home();
                            }
                        }
                    },'notice');
                }else if(val.status==0 || val.status==2){
                    if(val.status==2){
                        self.islast = false;
                        self.istoday = false;
                    }
                    if(self.islogin){
                        self.indexInfo((info)=>{
                            self.userName = info.name;
                            self.toDayTotalAmount = info.toDayTotalAmount;
                            self.rank = info.rank;
                            self.gift = info.gift;
                            self.giftList = info.giftList;
                            self.dayNum = info.dayNum;
                            self.oneInfo = info.oneInfo;
                            self.twoInfo = info.twoInfo;
                            self.threeInfo = info.threeInfo;
                            self.fourInfo = info.fourInfo;
                            self.fiveInfo = info.fiveInfo;
                            var day = new Date(self.startTime).getDate();
                            self.toDay = day+self.dayNum-1;
                            self.infoDate = self.toDay;
                            self.aa = self.dayNum;
                            if(self.dayNum==1){
                                $('#prev').addClass('not');
                            }
                            $('#next').addClass('not');
                            if(info.dayNum==1){
                                self.taDayInfo = info.oneInfo;
                            }else if(info.dayNum==2){
                                self.taDayInfo = info.twoInfo;
                            }else if(info.dayNum==3){
                                self.taDayInfo = info.threeInfo;
                            }else if(info.dayNum==4){
                                self.taDayInfo = info.fourInfo;
                            }else if(info.dayNum==5){
                                self.taDayInfo = info.fiveInfo;
                            }
                        })
                    }else{//未登录
                        requirePop('login',{
                            props: {
                                info : '请登录后再操作',
                                transition : 'rotate3d',
                                btn :'立即登录',
                                closeCallback :function(){
                                    T.login();
                                }
                            }
                        },'notice');
                    }
                }else if(val.status==1){
                    requirePop('over',{
                        props: {
                            info : '活动已结束',
                            transition : 'rotate3d',
                            btn :'知道了',
                            closeCallback :function(){
                                T.callApp.home();
                            }
                        }
                    },'notice');
                }
            })
        },
        methods :{
            activityStatus : function (callback) {
                T.ajax({
                    url : '/activity/october/iphone_rank/status.do',
                    data :{
                        time:new Date()
                    },
                    callback :true,
                }).then(data=>{
                    self.startTime = data.map.startTime;
                    self.status = data.map.status;
                    callback({ 
                        startTime : data.map.startTime,
                        status :data.map.status,
                    })
                })
            },
            investment : function () {
                T.callApp.investment();
            },
            participateFn : function(callback){
                var self = this;
                T.ajax({
                    url : '/activity/october/iphone_rank/participate.do',
                    data :{
                        uid : T.uid ,
                        time:new Date()
                    },
                    callback :true,
                }).then(data=>{
                    callback({ 
                        participate :data.flag,
                    })
                })
            },
            indexInfo : function(callback){
                T.ajax({
                    url: '/activity/october/iphone_rank/index.do',
                    data : {
                        uid : T.uid,
                        time : new Date()
                    },
                    callback : true,
                }).then(data=>{
                    self.oneInfo = data.map.one;
                    self.twoInfo = data.map.two;
                    self.threeInfo = data.map.three;
                    self.fourInfo = data.map.four;
                    self.fiveInfo = data.map.five;
                    self.dayNum = data.map.dayNum;
                    callback({
                        name:data.map.name,
                        toDayTotalAmount : data.map.toDayTotalAmount,
                        rank : data.map.rank,
                        gift : data.map.gift,
                        giftList : data.map.giftList,
                        dayNum : data.map.dayNum,
                        oneInfo : data.map.one,
                        twoInfo : data.map.two,
                        threeInfo : data.map.three,
                        fourInfo : data.map.four,
                        fiveInfo : data.map.five
                    })
                })
            },
            prev : function(){
                var self = this;
                var a = self.aa-1;
                if(a>0){
                    self.toggle(a);
                    self.aa -=1;
                    if(a<self.dayNum){
                        $('#next').removeClass('not');
                    }
                    if(a==1){
                        $('#prev').addClass('not');
                        $('#next').removeClass('not')
                    }else{
                        $('#prev').removeClass('not');
                    }
                }
            },
            next : function(){
                var self = this;
                var a = self.aa+1;
                if(self.aa<self.dayNum){
                    self.toggle(a);
                    self.aa +=1;
                    if(a==self.dayNum){
                        $('#next').addClass('not');
                        $('#prev').removeClass('not')
                    }else{
                        $('#prev').removeClass('not');
                    }
                }
            },
            toggle :function(pagenum){
                var self = this;
                var day = new Date(self.startTime).getDate();
                $('.page-box span').removeClass('cur');
                if(pagenum==1){
                    self.taDayInfo = self.oneInfo;
                    self.infoDate = day;
                    $('#cur1').addClass('cur');
                }else if(pagenum==2){
                    self.taDayInfo = self.twoInfo;
                    self.infoDate = day+1;
                    $('#cur2').addClass('cur')
                }else if(pagenum==3){
                    self.taDayInfo = self.threeInfo;
                    self.infoDate = day+2;
                    $('#cur3').addClass('cur')
                }else if(pagenum==4){
                    self.taDayInfo = self.fourInfo;
                    self.infoDate = day+3;
                    $('#cur4').addClass('cur')
                }else if(pagenum==5){
                    self.taDayInfo = self.fiveInfo;
                    self.infoDate = day+4;
                    $('#cur5').addClass('cur')
                }
                if(self.status!=2){
                    if(pagenum==self.dayNum){
                        self.istoday = true;
                    }else{
                        self.istoday = false;
                    }
                }
            }
        }
    }
</script>