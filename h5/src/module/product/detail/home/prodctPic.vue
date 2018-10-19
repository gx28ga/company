/**
* 产品资料
* created by bo.peng 2018/4/24
* email:spion@qq.com
*/
<style scoped>
.pic{
    overflow: hidden;
    background:#fff;
    .title{
        display:flex;
        border-bottom:.5px solid #D2D2D2;
        .name{
            flex:1;
        }
    }
    .content{
        position: relative;
        height:100%;
        overflow: hidden;
        box-sizing:border-box;
        z-index: 1;
    }
    .prodctPic-container{
        overflow:hidden;
    }
    .swiper-wrapper{
        display:flex;
        transition-property: transform;
        box-sizing: content-box;
    }
    li{
        display:flex;
        width:90px;
        height:110px;
        justify-content:center;
        align-items:center;
        &.swiper-slide{
            flex-shrink: 0;
            width: 100%;
        }
        img{
            display:block;
            max-width:100%;
            max-height:100%;
        }
    }
}
</style>
<template>
	<section v-if="user && data.length" class="pic img-size" data-marginTop="20">
        <div class="title img-size" data-height="68" data-lineHeight="68"  data-paddingLeft="30" data-paddingRight="30">
            <h2 class="name img-size" data-fontSize="28">产品资料({{data.length}})</h2>
        </div>
        <div class="content img-size" data-padding="30">
            <div class="prodctPic-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" v-for="item in data" :key="item.id">
                        <img :src="item.bigUrl" @click="showPic(item.bigUrl)">
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
    import Swiper from "../../../../../static/plug/swiper-3.4.2.jquery.min";
	export default {
	    props : ["user","data"],
        mounted(){
		    this.$nextTick(()=>{
		        this.setImgSize();
                new Swiper('.prodctPic-container', {
                    slidesPerView: 3,
                    paginationClickable: true,
                    spaceBetween: 20
                })
            });
        },
        methods:{
            showPic(src){
                require.ensure([],(require)=> {
                    this.$requirePop(require('./showPic'), {
                            props : {
                                src : src
                            } //弹窗内容相关属性
                        },
                        {
                            props: {//弹窗相关属性 同上面的 this.$Pop
                                obj: {
                                    close: true,//是否显示关闭按钮
                                    wrapper : "shpwBigpic",
                                    superClass : "mask",
                                },
                                transition : "down"
                            }
                        });
                });
            }
        }
	}
</script>
