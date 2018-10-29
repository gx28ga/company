/**
* describe 任务中心
* Created by wangCuiqing
* Date: 2018/5/3
*/
<style scoped>
.taskTitle{
    background:#FE7634;
    color:#fff;
    position: relative;
    .changeProduct{
       border:1px solid #fff;
        border-radius: 17px;
        text-align: center;
        color:#fff;
        top:50%;
        position: absolute;
    }
}
.taskExplian{
    background:#fff;
    color:#102542;
    display: flex;
    .look{
        color:#0082DA;
    }
}
    .taskListTitle{
        color:#A0A0A0;
        text-align: center;
    }
    .taskListContent{
        background:#fff;
        display: flex;
        .taskIcon1{
            background:url("../../images/shopping/renwu_ico1.png") no-repeat;
            background-size:contain;
            float:left;
        }
        .taskIcon2{
            background:url("../../images/shopping/renwu_ico2.png") no-repeat;
            background-size:contain;
            float:left;
        }.taskIcon3{
            background:url("../../images/shopping/renwu_ico3.png") no-repeat;
            background-size:contain;
            float:left;
        }.taskIcon4{
            background:url("../../images/shopping/renwu_ico4.png") no-repeat;
            background-size:contain;
            float:left;
        }
        .taskCon{
            color:#A0A0A0;
            text-align: justify;
            .title{
                color:#0F2443;
            }
            .time{
                color:#A0A0A0;
                background:#F2F2F2;
                border-radius:14px;
            }
            .expre{
                color: #FE7634;
            }
        }
        .investBtn{
            color:#FE7634;
            border:1px solid #FE7634;
            border-radius: 15px;
            text-align: center;
        }
    }
</style>
<template>
    <article class="task img-size" >
        <!--顶部明细-->
        <div  class="taskTitle img-size" data-paddingLeft="30" data-paddingTop="40" data-paddingRight="30" data-paddingBottom="40">
            <div class="cmallNumber img-size" data-fontSize="48" data-marginBottom="20" v-if="point">{{point.points}}<span class="img-size" data-fontSize="28">积分</span></div>
            <div @click="goMingXi">查看明细&gt;</div>
            <div class="changeProduct img-size" data-width="140" data-height="50" data-lineHeight="50" data-marginTop="-25" data-right="30" @click="goMall">兑换奖品</div>
        </div>
        <div class="taskExplian img-size" data-fontSize="32" data-height="104" data-paddingLeft="30" data-paddingRight="30" data-lineHeight="104" data-marginBottom="20">
            <div class="img-size" data-fontSize="32">做任务&nbsp;领福利</div>
            <div class="look img-size" data-fontSize="24" data-marginLeft="300" @click="goFinish">查看已完成任务</div>
        </div>
        <!--任务内容-->
        <div v-for="(item,index) in taskList" v-bind:key="item.id">
            <div class="taskListTitle img-size" data-paddingTop="20" data-paddingBottom="20" data-fontSize="28">{{item.taskGroupName}}</div>
            <div class="taskListContent img-size" data-paddingTop="30" data-paddingBottom="30" data-paddingLeft="30" data-paddingRight="30" data-marginBottom="3" v-for="task in item.tasks" v-bind:key="task.id">
                <div class="taskIcon1 img-size" v-if="index==0"  data-width="56" data-height="56"></div>
                <div class="taskIcon2 img-size" v-if="index==1"  data-width="56" data-height="56"></div>
                <div class="taskIcon3 img-size" v-if="index==2"  data-width="56" data-height="56"></div>
                <div class="taskIcon4 img-size" v-if="index==3"  data-width="56" data-height="56"></div>
                <div class="taskIcon1 img-size" v-if="index==4"  data-width="56" data-height="56"></div>
                <div class="taskCon img-size" data-marginLeft="30" data-width="400">
                    <p class="title img-size" data-fontSize="28" data-lineHeigt="48">{{task.taskName}}</p>
                    <p class="img-size time" data-fontSize="24" data-height="28" data-lineHeight="28" data-marginTop="10" data-marginBottom="10" data-paddingLeft="15" data-paddingRight="15" data-width="280">{{task.startTime}}-{{task.endTime}}</p>
                    <p class="miaoshu img-size" data-fontSize="24" data-lineHeight="44">{{task.taskDesc}}</p>
                    <p class="expre img-size" data-fontSize="24" >奖励<span v-show="task.points>0">{{task.points}}积分</span><span v-show="task.experiencePoints>0">,&nbsp;{{task.experiencePoints}}经验</span></p>
                </div>
                <div class="investBtn img-size" data-width="140" data-height="50" data-lineHeight="50" data-marginLeft="60" @click="goToPage(task.goToPage)">去做任务</div>
            </div>
        </div>
    </article>
</template>

<script>
    import {TASKLIST} from "../../contant/urls/SHOPPING";
    import {mapGetters} from "vuex";
    export default {
        computed: {
            ...mapGetters({
                point:"getShoppingIndex",
            })
        },
        data(){
            return{
                taskList:[],
            }
        },
        mounted(){
            this.setImgSize();
            this.setTitle({
                show:true,
                title:"任务中心",
                back:true,
            })
            this.setNav({
                show:false
            });
            let self=this;
            self.ajax({
                url:TASKLIST,
            }).then(data=>{
                self.taskList=data.map.result.taskGroupList;
                self.$nextTick(()=>{
                    self.setImgSize();
                })
            })
        },
        methods:{
            goInvest(){//去投资
                this.go().product.home();
            },
            goToPage(item){
                if(item==0){
                    this.go().all("/main")
                }else if(item==1){
                    this.go().openAccount.home()//认证页面
                }else if(item==2){
                    this.go().product.home();//投资界面
                }else if(item==4){
                    this.go().myAccount.inviteFriend.home();
                }
            },
            goMall(){//跳转积分商城
                this.go().shopping.home();
            },
            goMingXi(){//跳转积分明细
                this.go().shopping.mingXi();
            },
            goFinish(){//跳转已完成任务
                this.go().shopping.taskFinish();
            },

        }
    }
</script>
