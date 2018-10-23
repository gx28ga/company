/**
*  author : bo.peng
*  createTime 2018-10-23 15:52
*  description : Header
*/
<template>
    <article class="header-container">
        <div class="userInfo">
            <div class="imgHead">
            </div>
            <div class="name"></div>
        </div>
        <div class="logo" @click="goHome">
            <img src="../../assets/logo.png" height="40">
        </div>
        <div class="menu">
            <ul>
                <li class="current">栏目名称</li>
                <li>栏目名称</li>
                <li>栏目名称</li>
                <li>栏目名称</li>
                <li>栏目名称</li>
            </ul>
        </div>
    </article>
</template>

<script lang="ts">
    import Header from "@/controller/global/Header.ts";
    export default Header;
</script>

<style scoped lang="scss">
    .header-container{
        height:100%;
        padding:0 20px;
        .userInfo{
            float:right;
        }
        .logo{
            float:left;
            display:flex;
            height:100%;
            justify-items:center;
            align-items:center;
            cursor: pointer;
            img{
                display:block;
            }
        }
        .menu{
            padding-left:50px;
            height:100%;
            overflow:hidden;
            ul{
                height:100%;
            }
            li{
                float:left;
                display:flex;
                height:100%;
                padding:0 30px;
                justify-items: center;
                align-items: center;
                font-size: 18px;
                color:#fff;
                cursor: pointer;
                &.current{
                    background:#fff;
                    color:#409efe;
                }
            }
        }
    }
</style>