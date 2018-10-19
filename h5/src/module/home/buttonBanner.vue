/**
* describe
* Created by wangCuiqing
* Date: 2018/4/26
*/
<style scoped>
    .buttonBannerList{
        background:#fff;
        display:flex;
        color:#102542;
        .buttonBanner{
            flex:1;
            img{
                margin:0 auto;
                display: block;
            }
            p{
                text-align:center;
            }
        }
    }
</style>
<template>
    <article class="buttonBannerList img-size" v-if="index" data-marginBottom="20">
        <div class="buttonBanner img-size" data-paddingTop="38" data-paddingBottom="36" v-for="item in index.buttonBnnnersList" :key="item.id" >
            <img :src=item.imgUrl alt="" class="img-size" data-width="52" data-height="52" @click="goUrl(item)">
            <p class="img-size" data-fontSize="24" data-marginTop="10" @click="goUrl(item)">{{item.title}}</p>
        </div>
    </article>
</template>

<script>
    export default {
        props:["index","user"],
        mounted(){
            this.setImgSize();
        },
        methods:{
            goUrl(item){
                let uid = this.user ? "?uid=" + this.user.member.uid : "";
                this.go().outside({
                    url: item.location + uid,
                    title: item.title
                });
            }
        }
    }
</script>
