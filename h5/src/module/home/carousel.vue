/**
* describe  新用户底部轮播
* Created by wangCuiqing
* Date: 2018/4/23
*/
<style scoped>
    .carousel {
        background: #fff;
    }
    .swiper-container {
        position: relative;
        z-index: 1;
        overflow: hidden;
    }
    .swiper-wrapper {
        width: 530px;
        justify-content: center;
    }
    .swiper-slide {
        text-align: center;
        width: 60%;
    }
    .bannerSider {
        position: relation;
        width: 100%;
        z-index: 1;
        display: flex;
        flex-direction: row;
        li {
            background: #fff;
            justify-content: center;
            align-items: center;
        }
        img {
            display: block;
            height:100%;
        }
    }
    .swiper-slide-prev, .swiper-slide-next {
        img {
            /*width:20%;*/
            display: block;
            width:210px;
            height:75px;
            margin: 0 auto;
            margin-top: 10px;
            margin-bottom: 15px;
            vertical-align: -50%;
        }
    }
</style>
<template>
    <article v-if="data" class="carousel img-size" data-height="190" data-paddingBottom="25">
        <div class="swiper-container img-size" data-height="190">
            <ul class="swiper-wrapper bannerSider img-size" v-if="data">
                <li v-for="obj in data" :key="obj.id" class="swiper-slide img-size" data-height="190"
                    @click="goURL(obj)" data-width="530">
                    <img :src="obj.imgUrl" alt="" class="img-size" data-width="530">
                </li>
            </ul>
        </div>
    </article>
</template>
<script>
    import Swiper from "../../../static/plug/swiper-3.4.2.jquery.min";
    export default {
        props: ["data"],
        data() {
            return {}
        },
        mounted() {
            this.$nextTick(function () {
                T.setImgSize();
                new Swiper('.swiper-container', {
                    slidesPerView: "auto",//同时显示的slides的数量
                    centeredSlides: true,//活动块居中
                    spaceBetween: 10,
                    loop: true,
                    setWrapperSize: true,
                    speed: 300,
                });
            })
        },
        methods: {
            goURL(item) {
                let uid = this.user ? "?uid=" + this.user.member.uid : "";
                this.go().outside({
                    url: item.location + uid,
                    title: item.title
                })
            }
        }
    }
</script>
