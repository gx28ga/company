/**
* describe 没有登录的时候弹框
* Created by wangCuiqing
* Date: 2018/5/23
*/
<style scoped>
.noLogin{
    background:url("../../../images/home/tan.png") no-repeat;
    background-size:contain;
}
</style>
<template>
<div class="img-size noLogin" data-width="650" data-height="818" @click="goLogin"></div>
</template>

<script>
    export default {
        name: "no-login",
        mounted(){
            this.setImgSize();
        },
        methods:{
            goLogin(){
                this.go().login.home();
                this.$parent.close();
            }
        }
    }
</script>
