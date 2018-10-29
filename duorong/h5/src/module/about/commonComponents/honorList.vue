/**
* describe
* Created by wangCuiqing
* Date: 2018/6/1
*/
<style scoped>
    .advantage{
        background:#fff;
        .title{
            color:#1d2e55;
            font-weight: 700;
            text-align: center;
        }
        .imgBox{
            width: 100%;
            z-index: 1;
            display:flex;
            flex-direction:row;
            -webkit-perspective: 1500px;
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
            .left{
                background: url("../../../images/about/insurance/left.png") no-repeat;
                background-size: contain;
                position: absolute;
                left:0;
                top:0;
            }
            .right{
                background: url("../../../images/about/insurance/right.png")  no-repeat;
                background-size: contain;
                position: absolute;
                right:0;
                top:0;
            }
        }
        .rongyuBox{
            position: relative;
            .left{
                background: url("../../../images/about/insurance/left.png") no-repeat;
                background-size: contain;
                position: absolute;
                left:0;
                top:50%;
            }
            .right{
                background: url("../../../images/about/insurance/right.png")  no-repeat;
                background-size: contain;
                position: absolute;
                right:0;
                top:50%;
            }
        }
    }
</style>
<template>
    <article class='advantage img-size' data-paddingTop='60'>
        <div class='title img-size' data-fontSize='36' data-marginBottom='80'>公司荣誉</div>
        <div class='rongyuImg img-size'>
            <div class="swiper-container rongyuBox img-size" data-width="750" data-height="213" >
                <ul class="swiper-wrapper imgBox img-size" data-height="213">
                    <li class="swiper-slide img-size" data-width='320'><img src="../../../images/about/insurance/zu1.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></li>
                    <li class="swiper-slide img-size" data-width='300'><img src="../../../images/about/insurance/zu2.png" class='img-size' data-width='300' data-height='213' alt=""  data-marginLeft='30' data-marginRight='10'></li>
                    <li class="swiper-slide img-size" data-width='300'><img src="../../../images/about/insurance/zu3.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></li>
                    <li class="swiper-slide img-size" data-width='310'><img src="../../../images/about/insurance/zu4.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></li>
                    <li class="swiper-slide img-size" data-width='310'><img src="../../../images/about/insurance/zu5.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></li>
                    <li class="swiper-slide img-size" data-width='310'><img src="../../../images/about/insurance/zu6.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></li>
                    <li class="swiper-slide img-size" data-width='310'><img src="../../../images/about/insurance/zu7.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></li>
                    <li class="swiper-slide img-size" data-width='310' ><img src="../../../images/about/insurance/zu8.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></li>
                </ul>
                <!-- Add Arrows -->
                <div class="swiper-button-next right img-size" data-width='30' data-height='55' id='left' data-marginTop="-27"></div>
                <div class="swiper-button-prev left img-size" data-width='31' data-height='54' id='right' data-marginTop="-27"></div>
            </div>
        </div>
    </article>
</template>

<script>
    export default {
        name: "honor-list",
        mounted(){
                new Swiper('.rongyuBox', {
                    loop: true,
                    slidesPerView: 2,
                    direction:'horizontal',
                    ally:true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                });
        }
    }
</script>
