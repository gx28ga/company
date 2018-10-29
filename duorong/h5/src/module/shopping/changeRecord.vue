/**
* describe 兑换记录
* Created by wangCuiqing
* Date: 2018/5/2
*/
<style scoped>
    .record{
        .change{
            background:#fff;
            color:#A0A0A0;
            .changeName{
                color:rgba(254,118,52,0.90);
                float: left;
            }
            .changNum{
                float: right;
            }
            .money{
                color:#A0A0A0;
                float: left;
                .moneyNum{
                    color:#151515;
                }
            }
            .changeTime{
                float:right;
                .time{
                    color:#151515;
                }
            }
        }
    }
</style>
<template>
    <article class="record">
        <div class="change img-size" data-height="166" data-paddingLeft="40" data-paddingRight="40" data-paddingTop="40" data-marginBottom="20" v-for="item in changeRecord" v-bind:key="item.id">
            <div class="img-size" data-marginBottom="30" data-height="32" data-lineHeight="32">
                <span class="img-size changeName" data-fontSize="32">{{item.name}}</span>
                <span class="changNum img-size" data-fontSize="24">x{{item.exchangeCount}}</span>
            </div>
            <div>
                <div class="money img-size" data-fontSize="24">花费积分&nbsp;:&nbsp;<span class="moneyNum img-size">{{item.expensedPoints}}</span></div>
                <div class="changeTime img-size" data-fontSize="24">兑换时间&nbsp;:&nbsp;<span class="time">{{item.date}}</span></div>
            </div>
        </div>
        <no-record  v-show="changeRecord.length==0"></no-record>
    </article>
</template>

<script>
    import noRecord from "../components/noRecord";
    import {CHANGRECORD} from "../../contant/urls/SHOPPING";
    export default {
        data(){
            return{
                changeRecord:[],
            }
        },
        components:{
            noRecord
        },
        mounted(){
            this.setTitle({
                show:true,
                title:"兑换记录",
                back:true,
            })
            this.setNav({
                show:false
            })
            let self=this;
            self.ajax({
                url:CHANGRECORD,
                load:true,
            }).then(data=>{
                self.changeRecord=data.map.result;
                self.$nextTick(()=>{
                    self.setImgSize();
                })
            })
        }
    }
</script>
