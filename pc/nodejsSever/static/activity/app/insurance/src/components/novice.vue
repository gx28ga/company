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
      background: url("../images/left.png") no-repeat;
      background-size: contain;
      position: absolute;
      left:0;
      top:70%;
      }
     .rightr{
      background: url("../images/right.png")  no-repeat;
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
            <div class="swiper-slide img-size"  style='float:left'  ><img src="../images/a.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
            <div class="swiper-slide img-size" style='float:left' ><img src="../images/b.png" class='img-size' data-width='178' data-height='59' alt=""  data-marginLeft='100' data-marginRight='10'></div>
            <div class="swiper-slide img-size"  style='float:left' ><img src="../images/c.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
            <div class="swiper-slide img-size"  style='float:left' ><img src="../images/d.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>  
              <div class="swiper-slide img-size"  style='float:left' ><img src="../images/e.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div> 
               <div class="swiper-slide img-size"  style='float:left' ><img src="../images/f.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>    <div class="swiper-slide img-size"  style='float:left' ><img src="../images/g.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
               <div class="swiper-slide img-size"  style='float:left' ><img src="../images/h.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
               <div class="swiper-slide img-size"  style='float:left' ><img src="../images/i.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../images/j.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../images/k.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../images/l.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../images/m.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div><div class="swiper-slide img-size"  style='float:left' ><img src="../images/n.png" class='img-size' data-width='178' data-height='59' alt="" data-marginLeft='100' data-marginRight='10'></div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next rightr img-size" data-width='30' data-height='55' id='left'></div>
        <div class="swiper-button-prev leftl img-size" data-width='31' data-height='54' id='right'></div>
    </div>
    </div>
</article>
</template>
<script>
import requirePop from '../pop/requirePop.js';
import { mapState , mapGetters } from 'vuex';
export default {
    props : {
        commend : Boolean,//是否是推荐项目里显示 true 为是
    },
    data (){
        return {
            data : null,
            list : []
        }
    },
    computed : {
        ...mapState([
            'user'
        ]),
        ...mapGetters([
            'userInfo'
        ])
    },
    mounted(){
        const self = this;
        /*T.ajax({
            mobile : 
        },'M003').then(data=>{

        })*/
       this.gund()
    },
    watch:{
        "userInfo"(){
            this.getRcomment();
        }
    },
    filters : {
    
    },
    methods : {
        gund(){
             var swiper = new Swiper('.box', {
         loop: true,
            slidesPerView: 2,
            // autoplay: 3000,
            direction:'horizontal',
            ally:true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
         });
        }
    }
}
</script>
