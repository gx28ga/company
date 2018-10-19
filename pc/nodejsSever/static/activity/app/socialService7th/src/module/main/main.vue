<style lang='sass' scoped>
  @import '../../css/global.scss';
  @import "../../css/ft-carousel.css";

  .main-box {
    @include contain('../../images/bg.jpg');
    position: relative;
    .prize-title,
    .prize-detail,
    .prize-slide,
    .nav,
    .infulence,
    .spot-slide,
    .program
    {
      position: absolute;
    }
    .prize-title{
      color: #ba1c1d;
    }
    .prize-detail,
    .infulence{
      color: #333;
    }
    .prize-slide{
      .carousel-item{
        position: relative;
        text-align: center;
        div{
          display: inline-block;
          vertical-align: middle;
        }
        .pic-1{
          @include contain("../../images/slide-1/1.jpg");
          background-position: top center;
          position: relative;
        }
        .pic-2{
          @include contain("../../images/slide-1/2.jpg");
          background-position: top center;
          position: relative;
        }
        .pic-3{
          @include contain("../../images/slide-1/3.jpg");
          background-position: top center;
          position: relative;
        }
        .pic-4{
          @include contain("../../images/slide-1/4.jpg");
          background-position: top center;
          position: relative;
        }
        .pic-5{
          @include contain("../../images/slide-1/5.jpg");
          background-position: top center;
          position: relative;
        }
      }
      .carousel-item:after{
        display: inline-block;
        vertical-align: middle;
        content: '';
        width: 0;
        height: 100%;
      }
    }
    .spot-slide{
      .carousel-item{
        position: relative;
        text-align: center;
      div{
        display: inline-block;
        vertical-align: middle;
      }
      .pic-1{
        @include contain("../../images/slide-2/1.jpg");
        background-position: top center;
        position: relative;
      }
      .pic-2{
        @include contain("../../images/slide-2/2.jpg");
        background-position: top center;
        position: relative;
      }
      .pic-3{
        @include contain("../../images/slide-2/3.jpg");
        background-position: top center;
        position: relative;
      }
      .pic-4{
        @include contain("../../images/slide-2/4.jpg");
        background-position: top center;
        position: relative;
      }
      .pic-5{
        @include contain("../../images/slide-2/5.jpg");
        background-position: top center;
        position: relative;
      }
      }
      .carousel-item:after{
        display: inline-block;
        vertical-align: middle;
        content: '';
        width: 0;
        height: 100%;
      }
    }
    .nav{
      @include contain("../../images/btn-nav.png");
    }
    .prev, .next{
      @extend .nav;
    }
    .prev{
      transform: rotate(180deg);
    }
    .program{
      .title{
        color: #ba1c1d;
      }
      .detail{
        color: #333;
      }
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="4825">
    <div class="prize-title img-size" data-top="485" data-left="55" data-fontSize="24" data-lineHeight="24">多融财富荣获“2017年度责任品牌奖”</div>
    <div class="prize-detail img-size" data-top="520" data-left="55" data-width="650" data-fontSize="18" data-lineHeight="32">　　2018年1月29日—30日，第七届中国公益节暨“因为爱”致敬盛典在北京举行，盛典通过颁奖礼的形式向公益践行者致敬，经组委会层层把关，多级筛选，最终评选出多个公益奖项。多融财富在历时数月，经专家、媒体的严格评审及数百万网友投票之后，被组委会授予“2017年度责任品牌奖”。</div>
    <div class="prize-slide img-size" data-top="685" data-left="75" data-width="600" data-height="279">
      <div class="ft-carousel" id="carousel-1">
        <ul class="carousel-inner" @touchstart="onTouchStart1($event)" @touchend="onTouchEnd1($event)">
          <li class="carousel-item">
            <div class="pic-1 img-size" data-top="0" data-width="600" data-height="279"></div>
          </li>
          <li class="carousel-item">
            <div class="pic-2 img-size" data-top="0" data-width="600" data-height="279"></div>
          </li>
          <li class="carousel-item">
            <div class="pic-3 img-size" data-top="0" data-width="600" data-height="279"></div>
          </li>
          <li class="carousel-item">
            <div class="pic-4 img-size" data-top="0" data-width="600" data-height="279"></div>
          </li>
          <li class="carousel-item">
            <div class="pic-5 img-size" data-top="0" data-width="600" data-height="279"></div>
          </li>
        </ul>
        <div class="prize carousel-prev-btn nav prev img-size" data-top="115" data-left="20" data-width="45" data-height="45"></div>
        <div class="prize carousel-next-btn nav next img-size" data-top="115" data-right="20" data-width="45" data-height="45"></div>
      </div>
    </div>
    <div class="infulence img-size" data-top="1230" data-left="55" data-width="640" data-fontSize="18" data-lineHeight="40">
      <div class="img-size" data-marginBottom="70">● 设立于2011年，国内首个由大众媒体联袂发起，以“公益”命名的节日，是中国公益慈善领域最具影响力的年度盛事。</div>
      <div class="img-size" data-marginBottom="70">● 公益界领军人物、政府官员、杰出企业家代表、传媒领袖以及众多极具影响力的演艺和体育明星聚首，多元智慧激荡。</div>
      <div class="img-size" data-marginBottom="70">● 林志玲、林志颖、杨幂、罗志祥、宁静、景甜、任泉、蔡少芬、潘晓婷等20多位知名明星都曾担任过公益节的形象大使。</div>
      <div class="img-size" data-marginBottom="70">● 汇聚中国人寿、蒙牛乳业、广发证券、宜信等知名品牌，中国扶贫基金会、中华儿慈会、壹基金等公益组织，倡导向上向善。</div>
    </div>
    <div class="spot-slide img-size" data-top="2852" data-left="63" data-width="623" data-height="383">
      <div class="ft-carousel" id="carousel-2">
        <ul class="carousel-inner" @touchstart="onTouchStart2($event)" @touchend="onTouchEnd2($event)">
          <li class="carousel-item">
            <div class="pic-1 img-size" data-top="0" data-width="623" data-height="383"></div>
          </li>
          <li class="carousel-item">
            <div class="pic-2 img-size" data-top="0" data-width="623" data-height="383"></div>
          </li>
          <li class="carousel-item">
            <div class="pic-3 img-size" data-top="0" data-width="623" data-height="383"></div>
          </li>
          <li class="carousel-item">
            <div class="pic-4 img-size" data-top="0" data-width="623" data-height="383"></div>
          </li>
          <li class="carousel-item">
            <div class="pic-5 img-size" data-top="0" data-width="623" data-height="383"></div>
          </li>
        </ul>
        <div class="spot carousel-prev-btn nav prev img-size" data-top="165" data-left="20" data-width="45" data-height="45" @click="onNav(-1)"></div>
        <div class="spot carousel-next-btn nav next img-size" data-top="165" data-right="20" data-width="45" data-height="45" @click="onNav(1)"></div>
      </div>
    </div>
    <div class="program img-size" data-top="3355" data-left="65">
      <div v-for="(item, i) in spotInfo" v-show="index == i">
        <div class="title img-size" data-marginBottom="12" data-fontSize="24" data-lineHeight="24">{{item.title}}</div>
        <div class="detail img-size" data-fontSize="18" data-lineHeight="42" data-width="630">　　{{item.detail}}</div>
      </div>
    </div>
  </div>
</template>
<script>
    const cSpotSlideLength = 5;
    const cSpotInfo = [
        {title : '关爱孤寡老人  倡导公益文化',
         detail: '2017年4月9日，多融财富CEO王会敏携多融核心团队前往欧祥养老院探访孤寡老人，除了给老人们送去吃穿用品外，还精心准备了小礼物，并帮助行动不便的老人们打扫卫生，给老人们做饭，陪老人们聊天。'},
        {title: '温暖凉山  融爱计划',
         detail: '2017年7月14日，多融财富爱心代表远赴四川大凉山展开了为期5天的支教公益活动，为教资、物资严重匮乏的甘洛县黑马乡中心小学校的120名学生提供教学物资、生活物资和支教力量。'},
        {title: '情暖中秋  让独居老人不孤独',
         detail: '2017年9月25日，在中秋佳节来临之际，多融财富携手久耕小区居委会，带着现金红包、电子血压计、月饼、牛奶等礼品探访了多位高龄独居、孤寡老人，让一向孤寂的老人更多的感受到了来自社会大家庭的温暖和关爱。'},
        {title: '小小暴走  为爱暴走',
         detail: '2017年11月4日，多融财富作为爱心企业参与了由上海联劝公益基金发起的第四届“小小暴走”亲子公益徒步筹款活动，5组员工家庭和其他500多个家庭一起历时3个小时，完成了一场充满童趣的6公里互动公益之旅。'},
        {title: '暖冬计划  让孩子温暖过冬',
         detail: '2017年12月5日，多融财富携手上海联劝公益基金会、青海省民和星光救助会联合发起“暖冬计划”，为青海民和县满坪镇浪塘教学点154位山区贫困留守儿童发放羽绒服、手套、围脖、防冻防裂膏等，让孩子们过上一个温暖的冬天。'}
    ]

    import '../../plug/ft-carousel.min';
    export default {
        data: function() {
            return {
                index : 0,
            };
        },
        computed : {
            spotInfo : function () {
                return cSpotInfo;
            }
        },
        mounted(){
            T.setImgSize();
            jQuery("#carousel-1").FtCarousel({
                index: 0,
                buttons: false,
                auto: false,
                indicators: false
            });
            jQuery("#carousel-2").FtCarousel({
                index: 0,
                buttons: false,
                auto: false,
                indicators: false
            });
        },
        methods: {
            onTouchStart1 : function(evt) {
                this.stPosX = evt.changedTouches[0].clientX;
                this.stPosY = evt.changedTouches[0].clientY;
            },
            onTouchEnd1 : function(evt) {
                let last = evt.changedTouches.length - 1;
                this.edPosX = evt.changedTouches[last].clientX;
                this.edPosY = evt.changedTouches[last].clientY;
                let lenX = Math.abs(this.edPosX - this.stPosX);
                if(lenX < 20 || Math.abs(this.edPosY - this.stPosY) > lenX) return;
                if (this.edPosX > this.stPosX ) {
                    document.getElementsByClassName("prize carousel-prev-btn")[0].click();
                } else {
                    document.getElementsByClassName("prize carousel-next-btn")[0].click();
                }
            },
            onTouchStart2 : function(evt) {
                this.stPosX = evt.changedTouches[0].clientX;
                this.stPosY = evt.changedTouches[0].clientY;
            },
            onTouchEnd2 : function(evt) {
                let last = evt.changedTouches.length - 1;
                this.edPosX = evt.changedTouches[last].clientX;
                this.edPosY = evt.changedTouches[last].clientY;
                let lenX = Math.abs(this.edPosX - this.stPosX);
                if(lenX < 20 || Math.abs(this.edPosY - this.stPosY) > lenX) return;
                if (this.edPosX > this.stPosX ) {
                    document.getElementsByClassName("spot carousel-prev-btn")[0].click();
                } else {
                    document.getElementsByClassName("spot carousel-next-btn")[0].click();
                }
            },
            onNav : function (offset) {
                let idx = this.index + offset;
                if (idx >= cSpotSlideLength) {
                    idx = 0;
                } else if (idx < 0) {
                    idx = cSpotSlideLength - 1;
                }
                this.index = idx;
            }
        }
    }
</script>