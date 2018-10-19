/**
* describe laba
* Created by wangCuiqing
* Date: 2018/4/28
*/
<style scoped>
    .horn{
        background:#FFF9EF;
        display: flex;
        color:rgba(254,118,52,0.90);
        .hornIcon{
            background:url("../../../images/shopping/notice.png") no-repeat;
            background-size:contain;
            display: block;
        }
        .hornClose{
            background:url("../../../images/shopping/close.png") no-repeat;
            background-size:contain;
            display: block;
            float: right;
        }
    }
</style>
<template>
    <div class="horn img-size" data-height="60" data-lineHeight="60" data-paddingLeft="18" v-if="showHorn &&data.castTitle!=null" >
        <i class="hornIcon img-size" data-width="36" data-height="36" data-marginRight="28" data-marginTop="12"></i>
        <p class="img-size" data-fontSize="28" data-width="600">{{data.castContent}}</p>
        <i class="hornClose img-size" data-width="32" data-height="32" data-marginTop="16" @click="close"></i>
    </div>
</template>

<script>
    export default {
        props:["data"],
        mounted(){
            this.setImgSize();
        },
        data(){
            return{
                showHorn:true,
            }
        },
        methods:{
            close(){
                let self=this;
                self.showHorn=false;
            }
        }
    }
</script>
