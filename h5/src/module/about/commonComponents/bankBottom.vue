/**
* describe  公共底部合作单位
* Created by wangCuiqing
* Date: 2018/6/1
*/
<style scoped>
    .novice{
        background:#fff; overflow:hidden;
        .title{
            color:#1d2e55;
            font-weight: 700;
            text-align: center;
        }
        .box{
            position: relative;
            width: 100%;
            z-index: 1;
            display:flex;
            flex-direction:row;
            -webkit-perspective: 1500px;
            .leftl{
                background: url("../../../images/about/insurance/left.png") no-repeat;
                background-size: contain;
                position: absolute;
                left:0;
                top:70%;
            }
            .rightr{
                background: url("../../../images/about/insurance/right.png")  no-repeat;
                background-size: contain;
                position: absolute;
                right:0;
                top:70%;
            }
            li{
                flex-shrink: 0;
                text-align: center;
                font-size: 18px;
                background: #fff;
                display: flex;
                overflow:hidden;
                justify-content: center;
                align-items: center;
            }
            img{
                display:block;
                width:100%;
            }
        }
        .swiper-container{
            margin:0 auto;
            overflow:hidden;
            z-index:1;
        }
        .partner1{
            position: relative;
            .leftl{
                background: url("../../../images/about/insurance/left.png") no-repeat;
                background-size: contain;
                position: absolute;
                left:0;
                top:0;
                z-index: 2;
            }
            .rightr{
                background: url("../../../images/about/insurance/right.png")  no-repeat;
                background-size: contain;
                position: absolute;
                right:0;
                top:0;
                z-index: 2;
            }
        }
    }
</style>
<template>
    <article class='novice img-size' data-paddingTop='30' data-paddingBottom='40'>
        <div class='title img-size' data-fontSize='32' data-marginBottom='40'>合作单位
        </div>
        <div class='partner img-size'>
            <div class="swiper-container partner1  img-size " data-height="59" data-width="750">
                    <ul class="swiper-wrapper box img-size" data-height="59">
                        <li class="swiper-slide img-size"  data-height="59" >
                            <img src="../../../images/about/insurance/a.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='0' data-marginRight='0'></li>
                        <li class="swiper-slide img-size">
                            <img src="../../../images/about/insurance/b.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='0' data-marginRight='0'></li>
                        <li class="swiper-slide img-size">
                            <img src="../../../images/about/insurance/c.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='0' data-marginRight='0'></li>
                        <li class="swiper-slide img-size"  >
                            <img src="../../../images/about/insurance/d.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='0' data-marginRight='0'></li>
                        <li class="swiper-slide img-size"  >
                            <img src="../../../images/about/insurance/e.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='0' data-marginRight='0'></li>
                        <li class="swiper-slide img-size"  >
                            <img src="../../../images/about/insurance/f.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='0' data-marginRight='0'></li>
                        <li class="swiper-slide img-size"  >
                            <img src="../../../images/about/insurance/g.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='0' data-marginRight='0'></li>
                    </ul>
                <!-- Add Arrows -->
                <div class="swiper-button-next rightr img-size" data-width='30' data-height='55' id='left'></div>
                <div class="swiper-button-prev leftl img-size" data-width='31' data-height='54' id='right'></div>
            </div>
        </div>
    </article>
</template>

<script>
    import Swiper from "../../../../static/plug/swiper-3.4.2.jquery.min";
    export default {
        mounted(){
            this.gun();
        },
        methods:{
            gun(){
                 new Swiper('.partner1', {
                    loop: true,
                    slidesPerView: 2,
                    direction:'horizontal',
                    ally:true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                });
            }
        }
    }
</script>
