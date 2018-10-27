<style scoped>
@import '../style/global';
.enrollBox{
    .banner{
    @mixin contain '../images/bannerH5.jpg';
    background-color:#fff;
    position:relative; z-index:1;
    }
    .sang{
        background: #fff5c1;
        .sangTitle{
            @mixin contain "../images/gaotitle.png";
            margin:0 auto;
        }
        .sangFont{
            @mixin contain "../images/gaofont.png";
            margin: 0 auto;
        }
         .progress{
            @mixin contain "../images/gif5.gif";
             width: 100%;
            }
    }
    .you{
        background: #191919;
        .youTitle{
            @mixin contain "../images/youTitle.png";
            margin:0 auto;
        }
        .youfont{
            @mixin contain "../images/youfont.png";
            margin:0 auto;
        }
        .youcontent{
            position: relative;
             .left{
            @mixin contain "../images/left.png";
            position: absolute;
        }
          .right{
            @mixin contain "../images/right.png";
            position: absolute;
          }
          .zuIMG{
            position: absolute;
            overflow:hidden;
            .zu2{
                float: left;
                @mixin contain "../images/zu1.png";
            }
            .zu3{
                float: left;
                @mixin contain "../images/zu2.png";
            }
            .zu4{
                float: left;
                @mixin contain "../images/zu3.png";
            }
            .zu5{
                float: left;
                @mixin contain "../images/zu4.png";
            }
            .zu1{
                float: left;
                @mixin contain "../images/zu5.png";
            }
          }
        }
       
    }
    .qian{
        /* background:-webkit-linear-gradient(top,#191919 , #101010);*/
        background: #101010;
       .qianTitle{
        @mixin contain "../images/qianTitle.png";
        margin:0 auto;
       }
       .qianfont{
        @mixin contain "../images/qianFont.png";
        margin:0 auto;
       }
       .big{
        @mixin contain "../images/bigEvebt.png";
        margin: 0 auto;
       }
        
    }
    .thank{
         /*@mixin contain "../images/bg.jpg";*/
         background: #191919;
        .thankTitle{
            @mixin contain "../images/threeTitle.png";
            margin: 0 auto;
        }
        .thankFont{
            @mixin contain "../images/threeFont.png";
            margin:0 auto;
        }
        .thanTree{
            @mixin contain "../images/three.png";
            margin:0 auto;
        }
        .thankCon{
            @mixin contain "../images/threeContent.png";
            margin: 0 auto;
        }
    }
    .footer{
        @mixin contain "../images/footer.png";
        position: relative;
        color:#ff9c00;
        .download{
            color:#ff9c00;
            position: absolute;
        }
        .erweima{
            @mixin contain "../images/erweima.png";
            position: absolute;

        }
        .duorong{
            position: absolute;
        }
        .duorongCon{
            position: absolute;
        }
        .line{
            border:1px dotted #ff9c00;
            position: absolute;
        }
        .con{
            text-align: center;
            position: absolute;
            bottom:0;
            left:0;
        }

    }
   
}

</style>
<template>
<div class='enrollBox index' >
    <div class='banner img-size' data-height='568' data-width='750'></div>
     <div class='sang img-size' data-paddingTop='30'>
        <div class='sangTitle img-size' data-width='552' data-height='77' data-marginBottom='50'></div>
        <div class='sangFont img-size' data-width='472' data-height='70' data-marginBottom='40'></div>
         <div class='progress img-size' data-height='463' data-width='750'></div>
     </div>
     <div class='you img-size'  data-paddingTop='50' data-paddingBottom='100'>
         <div class='youTitle img-size' data-width='492' data-height='77' data-marginBottom='70'></div>
         <div class='youfont img-size' data-width='576' data-height='77' data-marginBottom='100'></div>
         <!-- 点击改变 -->
         <div class='youcontent img-size' data-width='750' data-height='300' >
                <div class='left img-size' data-width='18' data-height='46' data-left='12' data-top='125' @click='left'></div>
                <div class='zuIMG img-size'  data-height='300' data-left='60'>
                    <div class='zu1 img-size' data-width='205' data-height='302' data-marginRight='15' v-show='current==0'></div>
                    <div class='zu2 img-size' data-width='205' data-height='302' data-marginRight='15' v-show='current ==1 || current==0'></div>
                    <div class='zu3 img-size' data-width='205' data-height='302' data-marginRight='15' ></div>
                    <div class='zu4 img-size' data-width='205' data-height='302' data-marginRight='15' v-show='current==1 || current ==2'></div>
                    <div class='zu5 img-size' data-width='205' data-height='302' v-show='current==2'></div>
                </div>
                <div class='right img-size' data-width='18' data-height='46' data-right='12' data-top='125' @click='right'></div>
         </div>
     </div>
     <div class='qian img-size' data-paddingTop='50' data-paddingBottom='70'>
         <div class='qianTitle img-size' data-width='490' data-height='77' data-marginBottom='30'></div>
         <div class='qianfont img-size' data-width='424' data-height='72' data-marginBottom='55'></div>
         <div class='big img-size' data-width='686' data-height='958'></div>
     </div>
     <div class='thank img-size' data-paddingTop='60' data-paddingBottom='92'>
         <div class='thankTitle img-size' data-width='673' data-height='77' data-marginBottom='60'></div>
         <div class='thankFont img-size' data-width='576' data-height='77' data-marginBottom='95'></div>
         <div class='thanTree img-size' data-width='680' data-height='92' data-marginBottom='90'></div>
         <div class='thankCon img-size' data-width='644' data-height='125'></div>
     </div> 
     <div class='footer img-size' data-width='750' data-height='391' data-marginTop='-40'>
         <div class='download img-size' data-fontSize='34' data-width='44' data-top='80' data-left='120' data-lineHeight='34'>下载二维码</div>
         <div class='erweima img-size' data-height='164' data-width='164' data-top='85' data-left='160'></div>
         <div class='duorong img-size' data-fontSize='41' data-left='370' data-top='120'>多融财富</div>
         <div class='duorongCon img-size' data-fontSize='34' data-left='370' data-top='190'>国企中商沪深旗下</div>
         <div class='line img-size' data-height='0' data-width='670' data-left='40' data-bottom='93'></div>
         <div class='con img-size' data-width='750' data-fontSize='25' data-height='90' data-lineHeight='90'>每几分钟就有一个人 在多融财富获取超过8%的收益</div>
     </div>
</div>
</template>
<script>
import requirePop from '../pop/requirePop.js';
import {mapState} from 'vuex';
import store from '../store';
    export default {
        store,
        computed:{
            ...mapState([
                'userCoin'
            ])
        },
              data(){
            return {
               current:0
            }
        },
        components:{
             
        },
        mounted(){
            T.init();
            T.setImgSize();
        },
    
        methods : {
           left(){
            if(this.current==0){
                return ;
            }else{
               this.current--;  
            }   
           },
           right(){
            if(this.current==2){
                return;
            }else{
                this.current++;  
            }
             }
            },
    }
</script>
