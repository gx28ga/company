/**
* describe 消息和回款日历
* Created by wangCuiqing
* Date: 2018/4/26
*/
<style scoped>
    .informationAndBack{
        width:100%;
        z-index:2;
        position: absolute;
        top:0;
        left:0;
    }
    .information{
        background:url("../../images/home/xiaoxi.png") no-repeat;
        background-size:contain;
        position:absolute;
        z-index:3;
    }
    .kalendar{
        background:url("../../images/home/rili.png") no-repeat;
        background-size:contain;
        position:absolute;
        z-index:3;
    }
    span{
        display: block;
        background: #FF001F;
        color:#fff;
        border-radius: 50%;
        text-align: center;
        float: right;
    }
</style>
<template>
    <div class="informationAndBack img-size" data-height="90" id="informationAndBack">
        <div class="information img-size" data-width="62" data-height="62" data-top="20" data-left="20" @click="goMessageLog"><span class="img-size" data-width="22" data-height="22" data-fontSize="14" data-lineHeight="22" v-show="data.unReadMsg>0">{{data.unReadMsg}}</span></div>
        <div class="kalendar img-size" data-width="64" data-height="62" data-top="20" data-right="20" @click="goCalendar"><span class="img-size" data-width="22" data-height="22" data-lineHeight="22" data-fontSize="14" v-show="data.isPayBack>0">{{data.isPayBack}}</span></div>
    </div>
</template>

<script>
    export default {
        props:["data"],
        data(){
            return{
                bg:null
            }
        },
        mounted(){
            this.setImgSize();
        },
        methods:{
            goMessageLog(){
                this.go().all({returnUrl:"/messageLog"})
            },
            goCalendar(){
                this.go().myAccount.calendar();
            }
        }
    }
</script>
