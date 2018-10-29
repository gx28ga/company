<style lang='sass' scoped>
  @import '../../css/global.scss';

  .main-box {
    height: auto;
    background: #000;
    text-align: center;
    position: relative;

    .top-light{
      @include contain("../../images/top-light.png");
    }
    .sunrise{
      @include contain("../../images/sunrise.png");
    }
    .title{
      position: absolute;
      @include contain("../../images/title.png");
    }
    .centered{
      margin: auto;
    }
    .sentence-1{
      @extend .centered;
      @include contain("../../images/sentence-1.png");
    }
    .steps{
      @extend .centered;
      @include contain("../../images/steps.png");
    }
    .sentence-2{
      @extend .centered;
      @include contain("../../images/sentence-2.png");
    }
    .profits{
      @extend .centered;
      @include contain("../../images/profits.png");
    }
    .sentence-3{
      @extend .centered;
      @include contain("../../images/sentence-3.png");
    }
    .property{
      @extend .centered;
      @include contain("../../images/property.png");
    }
    .speech{
      @extend .centered;
      @include contain("../../images/speech.png");
    }
  }
</style>
<template>
  <div class="main-box img-size" data-paddingBottom="53" data-width="750">
    <div class="img-size top-light" data-width="750" data-height="170"></div>
    <div class="img-size sunrise" data-marginTop="85" data-width="750" data-height="200"></div>
    <div class="img-size title" data-top="0" data-width="750" data-height="340"></div>
    <div class="img-size sentence-1" data-marginTop="15" data-marginBottom="40" data-width="606" data-height="57"></div>
    <div class="img-size steps" data-width="669" data-height="218"></div>
    <div class="img-size sentence-2" data-marginTop="120" data-marginBottom="60" data-width="542" data-height="57"></div>
    <div class="img-size profits" data-width="424" data-height="102"></div>
    <div class="img-size sentence-3" data-marginTop="117" data-marginBottom="85" data-width="597" data-height="57"></div>
    <div class="img-size property" data-width="678" data-height="374"></div>
    <div class="img-size speech" data-marginTop="73" data-width="687" data-height="609"></div>
  </div>
</template>
<script>
    export default {
        mounted(){
            T.setImgSize();
        }
    }
</script>