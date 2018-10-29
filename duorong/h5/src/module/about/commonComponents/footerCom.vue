/**
* describe  公共底部合作单位
* Created by wangCuiqing
* Date: 2018/6/1
*/
<style scoped>
    .novice{
        background:#fff; overflow:hidden;
        .titl{
            color:#1d2e55;
            font-weight: 700;
            text-align: center;
        }
        .box{
            position: relative;
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
            .swiper-wrapper{
                .swiper-slide{
                    float: left;
                }
            }
        }
    }
</style>
<template>
    <article class='novice img-size' data-paddingTop='30' data-paddingBottom='40'>
        <div class='titl img-size' data-fontSize='32' data-marginBottom='40'>合作单位
        </div>
        <div class='partner img-size'>
            <div class="swiper-container img-size box"  >
                <div class="swiper-wrapper img-size">
                    <div class="swiper-slide img-size"  style='float:left'  >
                        <img src="../../../images/about/insurance/a.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
                    <div class="swiper-slide img-size" style='float:left' ><img src="../../../images/about/insurance/b.png" class='img-size' data-width='178' data-height='59' alt=""  data-marginLeft='100' data-marginRight='10'></div>
                    <div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/c.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
                    <div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/d.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
                    <div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/e.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
                    <div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/f.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>    <div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/g.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
                    <div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/h.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
                    <div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/i.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/j.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/k.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/l.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/m.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../../../images/about/insurance/n.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
                </div>
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
        name: "footer",
        mounted(){
            this.gun();
        },
        methods:{
            gun(){
                 new Swiper('.box', {
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
