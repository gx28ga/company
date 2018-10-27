/**
* describe 已完成任务
* Created by wangCuiqing
* Date: 2018/5/5
*/
<style scoped>
    .record{
        .change{
            background:#fff;
            color:#A0A0A0;
            .changeName{
                color:#333;
                float: left;
            }
            .changNum{
                color:rgba(254,118,52,0.90);
                float: right;
                background:#F7F7F7;
                border-radius: 20px;
            }
            .money{
                color:#A0A0A0;
                float: left;
                .moneyNum{
                    color:#151515;
                }
                .time{
                    color: #A0A0A0;
                }
            }
            .changeTime{
                float:right;
                .time{
                    color:#151515;
                }
            }
        }
        .noRecord{
            margin: 100px auto;
            color:#D2D2D2;
            text-align: center;
            .record{
                margin:0 auto;
                background:url("../../images/shopping/no.png") no-repeat;
                background-size:contain;
            }
        }
    }
</style>
<template>
    <article class="record">
        <div class="change img-size" data-height="126" data-paddingLeft="40" data-paddingRight="40" data-paddingTop="40" data-marginBottom="20"  v-for="item in taskFinishRecord" v-bind:key="item.id">
            <div class="img-size" data-marginBottom="30" data-height="32" data-lineHeight="32">
                <span class="img-size changeName" data-fontSize="32">{{item.taskName}}</span>
                <span class="changNum img-size" data-fontSize="24" data-paddingLeft="20" data-paddingRight="20" data-paddingTop="5" data-paddingBottom="5">{{item.points}}积分</span>
            </div>
            <div>
                <div class="money img-size" data-fontSize="24">完成时间&nbsp;:&nbsp;<span class="time img-size">{{item.completedTime}}</span></div>
                <div class="changeTime img-size" data-fontSize="24">奖励已领取</div>
            </div>
        </div>
        <no-record  v-show="taskFinishRecord.length==0"></no-record>
    </article>
</template>

<script>
    import {TASKLIST} from "../../contant/urls/SHOPPING";
    import noRecord from "../components/noRecord";
    export default {
        data(){
            return{
                taskFinishRecord:[],
            }
        },
        components:{
            noRecord
        },
        mounted(){
            this.setTitle({
                show:true,
                title:"已完成任务",
                back:true,
            })
            this.setNav({
                show:false
            })
            let self=this;
            self.ajax({
                url:TASKLIST,
                load:true,
            }).then(data=>{
                self.taskFinishRecord=data.map.result.finishedTaskList;
                self.$nextTick(()=>{
                    self.setImgSize();
                })
            })
        }
    }
</script>
