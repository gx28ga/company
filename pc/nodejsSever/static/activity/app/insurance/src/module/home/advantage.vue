<style scoped>
    .advantage{
        background:#fff;
       .title{
            color:#1d2e55;
            font-weight: 700;
            text-align: center;
       }
       .swiper-container{
        position: relative;
           .left{
          background: url("../../images/left.png") no-repeat;
          background-size: contain;
          position: absolute;
          left:0;
          top:50%;
          }
         .right{
          background: url("../../images/right.png")  no-repeat;
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
         <div class="swiper-container img-size"  >
         
        <div class="swiper-wrapper imgBox img-size">
            <div class="swiper-slide img-size" data-width='320' style='float:left'  ><img src="../../images/zu1.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></div>
            <div class="swiper-slide img-size" data-width='300' style='float:left' ><img src="../../images/zu2.png" class='img-size' data-width='300' data-height='213' alt=""  data-marginLeft='30' data-marginRight='10'></div>
            <div class="swiper-slide img-size" data-width='300' style='float:left' ><img src="../../images/zu3.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></div>
            <div class="swiper-slide img-size" data-width='310' style='float:left' ><img src="../../images/zu4.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></div> 
             <div class="swiper-slide img-size" data-width='310' style='float:left' ><img src="../../images/zu5.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></div> 
               <div class="swiper-slide img-size" data-width='310' style='float:left' ><img src="../../images/zu6.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></div> 
               <div class="swiper-slide img-size" data-width='310' style='float:left' ><img src="../../images/zu7.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></div> 
                <div class="swiper-slide img-size" data-width='310' style='float:left' ><img src="../../images/zu8.png" class='img-size' data-width='300' data-height='213' alt="" data-marginLeft='30' data-marginRight='10'></div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next right img-size" data-width='30' data-height='55' id='left'></div>
        <div class="swiper-button-prev left img-size" data-width='31' data-height='54' id='right'></div>
    </div>
   </div>
</article>
</template>
<script>
 import Swiper from "../../common/swiper-3.4.2.min.js" ;
export default {

    props : {
        icons : Array
    },
    data(){
       
    },
    mounted(){
        this.$nextTick(T.setImgSize);
        this.gundong()
    },
    methods : {
        gundong(){
             var swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            autoplay: 3000,
            loop: true,
            direction:'horizontal',
            ally:true,
         
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
         });
        }
    }
}
</script>
