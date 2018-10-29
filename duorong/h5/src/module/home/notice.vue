/**
* describe 首页公告
* Created by wangCuiqing
* Date: 2018/4/26
*/
<style scoped>
.notice{
    background:#fff;
    .laba{
        background:url("../../images/home/laba.png") no-repeat;
        background-size:contain;
        float: left;
    }
    .close{
        background:url("../../images/home/close.png") no-repeat;
        background-size:contain;
        float: right;
    }
    .noticeList{
        overflow: hidden;
        color:#102542;
        display:block;
        li{
            height:100%;
        }
    }
}
</style>
<template>
    <div class="img-size notice" data-paddingLeft="20" data-paddingRight="20" data-height="70" data-marginBottom="20" v-if="isShow">
        <span class="laba img-size" data-width="24" data-height="21" data-marginTop="25"></span>
        <span class="close img-size" data-width="32" data-height="32" data-marginTop="14" @click="goclose"></span>
        <div class="img-size noticeList" data-marginLeft="35" data-fontSize="24" data-height="32" data-lineHeight="32" data-paddingTop="8" data-paddingBottom="10">
            <!--<ul v-bind:class="{marqueeTop:animate}" class="img-size">-->
                <!--<li v-for="item in noticeList" v-bind:key="item.id" class="img-size" data-height="32" data-lineHeight="32" data-paddingTop="5" data-paddingBottom="5">{{item.title}}</li>-->
            <!--</ul>-->
            <div class="swiper-container1 img-size" data-marginTop="10">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide img-size" v-for="item in noticeList" v-bind:key="item.id" @click="goMessageDetail(item)" data-height="32" data-lineHeight="32">{{item.title}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";
    import {NOTICELIST} from "../../contant/urls/HOME";
    import Swiper from "../../../static/plug/swiper-3.4.2.jquery.min";
    export default {
        computed:{
            ...mapGetters({
                userInfo:"getUserInfo",
            })
        },
        data(){
            return{
               noticeList:null,
                isShow:true,
                animate:false,
            }
        },
        mounted(){
           let self=this;
            this.setImgSize();
            self.ajax({
                url:NOTICELIST,
                data:{
                    uid:self.userInfo.member.uid,
                    proid:14
                }
            }).then(data=>{
                self.noticeList=data.map.noticeList;
                self.$nextTick(()=>{
                    self.setImgSize();
                    new Swiper('.swiper-container1', {
                        direction:"vertical",
                        slidesPerView: 1,
                        speed:300,
                        loop:true,
                        autoplay: 3000,//可选选项，自动滑动
                    });
                });
            })
        },
        methods:{
            gourl(){
                window.location.href='http://www.baidu.com';
            },
            goclose(){
                this.isShow=false;
            },
            goMessageDetail(item){
                this.go().messageLog.messageDetail({
                    query:{
                        id:item.id,
                        type:1,
                        title:item.title,
                    }
                })
            },
        }
    }
</script>
