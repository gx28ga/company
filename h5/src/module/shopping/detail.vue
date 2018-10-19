/**
* describe 积分详情
* Created by wangCuiqing
* Date: 2018/5/3
*/
<style scoped>
.change{
    .changeImg{
        background:#fff;
        display:flex ;
        img{
            margin: auto;
            display: block;
            max-height:160px ;
        }
    }
    .changeContent{
        background:#fff;
        .changeTitle{
            color:#A0A0A0;
            .numFont{
                display: inline-block;
            }
        }
        .changT{
            color:#A0A0A0;
            display: flex;
            .numFont{
                display: inline-block;
            }
        }
        .explain{
            color:#001200;
            span{
                display: block;
            }
        }
        .del{
            text-decoration: line-through;
        }
        .cmallNum{
            color:#FE7634;
        }
        .input{
            overflow: hidden;
            display: inline-block;
            .del{
                border:0.5px solid #DDDDDD;
                border-radius: 2px 0 0 2px;
                text-align: center;
                float: left;
            }
            .txt{
                text-align: center;
                color:#666;
                float: left;
                outline:none;
                border:none;
               border-top:0.5px solid #DDDDDD;
               border-bottom:0.5px solid #DDDDDD;
            }
            .add{
                border:0.5px solid #DDDDDD;
                border-radius: 2px 0 0 2px;
                color:#666;
                float: left;
                text-align: center;
            }
        }
    }
    .changBtn{
        background: #fff;
        /*display: flex;*/
        position: fixed;
        bottom:0;
        .xianshi{
            color: #A0A0A0;
            text-align: center;
        }
        .btn{
            background:#FE7634;
            color:#fff;
            text-align: center;
            border-radius: 45px;
            margin:0 auto;
        }
        .sellOutBtn{
            background:#a0a0a0;
            color:#fff;
            text-align: center;
            border-radius: 45px;
            margin:0 auto;
        }
    }
}
</style>
<template>
    <div class="change">
        <div class="changeImg img-size" data-height="400" data-marginBottom="20">
            <img :src="detailInfo.androidListPathS" alt="" class="img-size">
        </div>
        <div class="changeContent img-size" data-paddingLeft="30" data-paddingRight="50" data-paddingTop="40" data-paddingBottom="40">
            <div class="changT img-size" data-fontSize="28" data-marginBottom="50">
                <div class="numFont img-size" data-height="48" data-lineHeight="48" data-marginRight="16">数量:</div>
                <span class="explain img-size" v-if="detailInfo.type==5" data-height="48" data-lineHeight="48">仅限1个</span>
                <div class="input img-size" v-if="detailInfo.type!=5">
                    <div class="del img-size" data-width="48" data-height="48" data-lineHeight="48" @click="del">-</div>
                    <input type="text" v-model="num" class="txt img-size" data-width="84" data-height="48">
                    <div class="add img-size" data-width="48" data-height="48" data-lineHeight="48" @click="add">+</div>
                </div>
            </div>
            <div class="changeTitle img-size" data-fontSize="28" data-marginBottom="40">积分:
                <span class="cmallNum img-size" data-fontSize="36" data-marginLeft="16" >{{detailInfo.realPoints}}</span>
                <span class="del">{{detailInfo.originalPoints}}</span>
            </div>
            <div class="changeTitle img-size" data-fontSize="28" data-marginBottom="40" v-if="detailInfo.type!=5">
                有效期限:
                <div class="explain img-size" data-marginTop="10">兑换后{{detailInfo.deadline}}天内有效</div>
            </div>
            <div class="changeTitle img-size" data-fontSize="28" data-marginBottom="40" v-if="detailInfo.type!=5">
                使用条件:
                <div class="explain img-size" data-marginTop="10" >
                    <span v-if="detailInfo.productDeadline!=null&&detailInfo.maxProductDeadline!=null">{{detailInfo.productDeadline}}天≤投资期限≤{{detailInfo.maxProductDeadline}}天</span>
                    <span v-if="detailInfo.maxProductDeadline!=null&&detailInfo.productDeadline==null">投资期限≤{{detailInfo.maxProductDeadline}}天</span>
                    <span v-if="detailInfo.productDeadline!=null&&detailInfo.maxProductDeadline==null">投资期限≥{{detailInfo.productDeadline}}天</span>
                    <span class="img-size" data-marginTop="10" v-if="detailInfo.enableAmount!=null&&detailInfo.maxAmount!=null">{{detailInfo.enableAmount}}元≤ 投资金额≤{{detailInfo.maxAmount}}元</span>
                    <span class="img-size" data-marginTop="10" v-if="detailInfo.enableAmount!=null&&detailInfo.maxAmount==null"> 投资金额≥{{detailInfo.enableAmount}}元</span>
                    <span class="img-size" data-marginTop="10" v-if="detailInfo.enableAmount==null&&detailInfo.maxAmount!=null"> 投资金额≤{{detailInfo.maxAmount}}元</span>
                </div>
            </div>
            <div class="changeTitle img-size" data-fontSize="28" data-marginBottom="40" v-if="detailInfo.type==5">
                温馨提示:
                <div class="explain img-size" data-marginTop="10">积分兑换实物奖品，将在每月月初前15个工作日内统一发放上月奖品。</div>
            </div>
        </div>
        <div class="changBtn img-size" data-paddingTop="30" data-paddingBottom="15" data-width="750">
            <div class="xianshi img-size" data-fontSize="24" data-marginBottom="20" v-show="detailInfo.xsStatus==2 && !isEnd">离<span v-if="isStart&& !isEnd">结束</span><span v-if="!isStart&&!isEnd">开始</span>还剩{{hh}}:{{mm}}:{{ss}}</div>
            <div class="sellOutBtn img-size" data-width="690" data-fontSize="36" data-height="90" data-lineHeight="90" v-if="detailInfo.surplusQty==0 ||detailInfo.xsStatus==3 ">
                <span v-if="detailInfo.surplusQty==0">已兑换完</span>
                <span v-if="detailInfo.xsStatus==3 ||detailInfo.surplusQty!=0">兑换结束</span>
            </div>
            <div class="btn img-size" data-width="690" data-fontSize="36" data-height="90" data-lineHeight="90" @click="change" v-if="detailInfo.xsStatus==2&&isStart&&detailInfo.surplusQty>0&&isStart">限时兑换</div>
            <div class="sellOutBtn img-size" data-width="690" data-fontSize="36" data-height="90" data-lineHeight="90" v-if="(detailInfo.xsStatus==1)|| (detailInfo.xsStatus==2&& !isEnd && !isStart)">
                <span v-show="detailInfo.xsStatus==1">{{detailStartTime}}开抢</span>
                <span v-show="detailInfo.xsStatus==2&& !isEnd && !isStart">限时兑换</span>
                <!--<span v-show="!isEnd">兑换结束</span>-->
            </div>
            <div class="btn img-size" data-width="690" data-fontSize="36" data-height="90" data-lineHeight="90" @click="change" v-if="detailInfo.surplusQty>0 && detailInfo.xsStatus==0">立即兑换</div>
        </div>
    </div>
</template>

<script>
    import {PRODUCTINFO,PRODUCTEXCHANGE} from "../../contant/urls/SHOPPING";
    import '../../common/time.js';
    import {mapGetters} from "vuex";
    export default {
        computed: {
            ...mapGetters({
                user: "getUserAccount",
            })
        },
        data(){
           return{
               num:1,
               detailInfo:"",
               xiansh:"",
               hh : "00",
               mm : "00",
               ss : "00",
               btnCon:"",
               isStart:false,//是否开始
               isEnd:false,
               detailStartTime:""
           }
        },
        watch:{
            data : function(val){
            }
        },
        mounted(){
            // this.setImgSize();
            this.setNav({
                show:false
            })
            let self=this,
                pid=T.getQueryString("pid");
            self.ajax({
                data:{pid:pid},
                url:PRODUCTINFO,
                load : true
               /* dataType:"jsonp",
                type:"get"*/
            }).then(data=>{
                self.xiansh=data.map;
                self.detailInfo=data.map.result;
                self.$nextTick(()=>{
                    self.setImgSize();
                    if(data.map.result.xsStatus!=0){
                        self.setTime();
                    }
                })
                this.setTitle({
                    show:true,
                    title:self.detailInfo.name,
                    back:true,
                })
                // self.setTime();
            })
          /*  setTimeout(()=>{
                self.setImgSize();
                },1000
            )
*/
        },
        methods:{
            setTime(){
                let self = this;
                if(this.detailInfo.xsStatus==0) return;
                let startTime = new Date(parseInt(self.detailInfo.xsStartTimeLong)).Format("yyyy/MM/dd hh:mm:ss") ,
                    nowTime = new Date(parseInt(self.xiansh.now)).Format("yyyy/MM/dd hh:mm:ss"),
                    endTime = new Date(parseInt(self.detailInfo.xsEndTimeLong)).Format("yyyy/MM/dd hh:mm:ss");
                    self.detailStartTime=new Date(parseInt(self.detailInfo.xsStartTimeLong)).Format("MM-dd hh:mm");
                new CountTime({
                    startTime : startTime,
                    endTime : endTime,
                    nowTime : nowTime,
                    updateTime : true,
                    callback : function( obj ){
                        self.hh = obj.hour;
                        self.mm = obj.minute;
                        self.ss = obj.second;
                        if(obj.statusName=="进行中"){
                            self.isStart=true;
                            self.isEnd=false;
                        }else if(obj.statusName=="已结束"){
                            self.isStart=false;
                            self.isEnd=true;
                        }else{
                            self.isStart=false;
                            self.isEnd=false;
                        }
                        if(self.hh==0&&self.mm==0&&self.ss==0){
                            console.log("开始")
                            //location.reload();
                        }
                    }
                })
            },
           add(){
               let self=this;
               let maxNum=parseInt(self.user.userAccountLevel.points/self.detailInfo.realPoints);
               if(self.detailInfo.realPoints > self.user.userAccountLevel.points || self.detailInfo.surplusQty==0){
                   this.num=1;
               }else if(this.num==maxNum || this.num==self.detailInfo.surplusQty){
                   return this.num;
               } else{
                   this.num++;
               }
           },
            del(){
               if(this.num==1){
                   this.num=1;
               }else{
                   this.num--;
               }
            },
            change(){
               let self=this;
               let totalPoints=self.num*self.detailInfo.realPoints;
               // if(totalPoints<self.user.userAccountLevel.points){
                   self.$pop({
                       title:"确认兑换",
                       content:"你正在消耗"+totalPoints+"积分兑换"+self.num+"个"+self.detailInfo.name,
                        close:true,
                       footer:{
                          ok:"确认兑换",
                          okCallback:function(){
                           this.close();
                           self.submit();
                            },
                           cancel : "取消", //取消按钮
                           cancelCallback : function(){
                              this.close();
                           },//取消按钮事件
                       }
                   })
              /* }else{
                   self.$pop({
                       title: "积分不足",
                       close: true,//是否显示关闭按钮
                       content: "您的积分不足，无法进行兑换,获取更多积分再来兑换吧",
                       footer : {
                           ok : "确定",
                           okCallback : function(){
                               this.close();
                               self.go().product.home();
                           }
                       }
                   });
               }*/
            },
            submit(){//立即兑换
                let pid=T.getQueryString("pid"),
                     self=this;
                self.ajax({
                    url:PRODUCTEXCHANGE,
                    data:{
                        productId:pid,
                        quantity:self.num
                    },
                    callback:true,
                    load:true,
                    // type:"get",
                    // dataType:"jsonp",
                }).then(data=>{
                    if(data.success){
                       let con=self.detailInfo.type==5? "兑换成功，3个工作日内会有客服与您进行联系。":"兑换成功，" + self.detailInfo.name + "已发放至您的账户中！";
                       if(self.detailInfo.type==5){
                           self.$pop({
                               title:"兑换成功",
                               icon:"icon1",
                               close:true,
                               content:con,
                               footer:{
                                   ok:"确定",
                                   okCallback:function(){
                                       this.close();
                                       self.go().resultUrl(()=>{
                                           self.go().myAccount.home();
                                       });
                                   },
                               }
                           })
                       }else{
                           self.$pop({
                               title:"兑换成功",
                               icon:"icon1",
                               close:true,
                               content:con,
                               footer:{
                                   ok:"立即使用",
                                   cancel:"暂不使用",
                                   okCallback:function(){
                                       this.close();
                                       self.go().product.home();
                                   },
                                   cancelCallback:function(){
                                       this.close();
                                       self.$store.dispatch("updateUserAccount",{update:true});
                                       self.go().shopping.home();
                                   }
                               }
                           })
                       }
                    }else{
                        self.$pop({
                            title: "兑换失败",
                            icon : "icon3",
                            close: true,//是否显示关闭按钮
                            content: data.errorMsg,
                            footer : {
                                ok : "确定",
                                okCallback : function(){
                                   this.close();
                                   // self.go().product.home();
                                }
                            }
                        });
                    }
                })
            }
        }
    }
</script>
