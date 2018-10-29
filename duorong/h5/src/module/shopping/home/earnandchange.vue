/**
* describe
* Created by wangCuiqing
* Date: 2018/5/2
*/
<style scoped>
    .earnBox{
        background:#fff;
        display:flex;
        justify-content: center;
        .earn{
            display: flex;
            justify-content: center;
            text-align: center;
            .earnIcon{
                align-items: center;
                justify-content: center;
                background:url("../../../images/shopping/ico_zhuanjf.png") no-repeat;
                background-size:contain;
                display: block;
            }
            .changeIcon{
                align-items: center;
                justify-content: center;
                background:url("../../../images/shopping/ico_dhjilu.png") no-repeat;
                background-size:contain;
                display: block;
            }
        }
        .bor{
            border-right: 0.5px solid #D2D2D2;
        }

    }
</style>
<template>
   <div class="earnBox img-size" data-width="750" data-marginTop="20" data-marginBottom="20" data-paddingTop="14" data-paddingBottom="14" >
        <div class="earn img-size bor" data-width="375" data-height="52" data-lineHeight="52" @click="goEarn">
            <span class="earnIcon img-size" data-width="36" data-height="40" data-marginRight="20" data-marginTop="10"></span>
            <p class="img-size" data-fontSize="36">赚积分</p>
        </div>
        <div class="earn img-size" data-width="375" data-height="52"  data-lineHeight="52" @click="changrRecord">
            <span class="changeIcon img-size" data-width="34" data-height="38" data-marginRight="20" data-marginTop="9"></span>
            <p class="img-size" data-fontSize="36">兑换记录</p>
        </div>
   </div>
</template>

<script>
    export default {
        mounted(){
            this.setImgSize();
        },
        methods:{
            goEarn(){//去赚积分跳任务积分
                this.go().shopping.taskList();
            },
            changrRecord(){//兑换记录
                this.go().shopping.changeRecord();
            },
        }
    }
</script>
