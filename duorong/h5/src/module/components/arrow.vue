/**
* 箭头
* created by bo.peng 2018/4/2
* email:spion@qq.com
*/
<style scoped>
    .arrow{
        border-left:3px solid #666;
        border-top:3px solid #666;
        &.left{transform:rotate(-45deg);};
        &.right{transform:rotate(135deg);};
        &.top{transform:rotate(45deg);};
        &.bottom{transform:rotate(225deg);};
    }
</style>
<template>
    <div class="arrow img-size" :class="name" @click="clickEvent"
         :data-borderWidth="borderWidth" :style="{'border-color':color}"
         :data-width="width" :data-height="height"></div>
</template>

<script>
export default {
    props : {
        name : {
            default : "left",
            type:String
        },
        color:{
            default : "#999999",
            type:String
        },
        borderWidth : {
            default : 4,
            type : Number
        },
        width : {
            default : 20,
            type : Number
        },
        height : {
            default : 20,
            type : Number
        }
    },
    mounted(){
        this.setImgSize();
    },
    methods:{
        clickEvent(){
            this.$emit("clickEvent");
        }
    }
};
</script>
