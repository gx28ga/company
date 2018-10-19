<style scoped>
    @import '../../css/global.css';
    @import '../../css/index.css';
    .abouta{  width:100%; background: url('../../images/yebg.png');
        .bhtitle{ background: url('../../images/newfl.png') no-repeat; background-size: contain; margin: 0 auto; }
    }
    .bai{ position: relative; background: #fff; margin:0 auto; }
    .hq{ color: #ea3c28; background: url('../../images/hq.png') no-repeat; background-size: contain; position: absolute;top:0;text-align: center; }
    .newtitle{ border-bottom: 1px solid #102542; margin:0 auto; position: relative;
        span{ background: #fff; position: absolute; left:0 ; right:0; margin:auto; text-align: center; color: #102542;}
     }
     p{ color: #102542; text-align: center; 
        &.hong{color: #ea3c28; }
    }
    .lv{color: #43a047;text-align: center; }
    .bz{ display: inline-block;background: url('../../images/bz.png') no-repeat; background-size: contain; float: left; }
     .xztz{ background: #ea3c28; color: #fff; margin:0 auto;text-align: center;box-shadow:  0px 2px #c02917;a{ color: #fff;} }
    .bag{ background: url('../../images/bag2.png') no-repeat; background-size: contain; margin: 0 auto; }
    .bottom{ letter-spacing: -0.5px; text-align: center; color: #666666; p:nth-child(1){ color:#d6a16e; border-bottom: 1px dashed #666666; } }
</style>
<script>
    export default {
        mounted(){
            T.setImgSize();
        }
    }
</script>
<template>
<!-- 关于多融 -->
<div class="abouta img-size" data-paddingTop="50" data-paddingBottom="60">
    <div class="bhtitle img-size" data-height='47' data-width='522'></div>
    <div class="bai img-size" data-width='636' data-height='415' data-borderRadius='16' data-marginTop='62' data-paddingBottom='26'>
        <div class="hq img-size" data-width='87' data-height='70' data-lineHeight='50' data-fontSize='24' data-left='29'>活期</div>
        <div class="newtitle img-size" data-width='240' data-height='34'><span class="img-size" data-width='118' data-fontSize='30' data-top='12'>新手宝</span></div>
        <p class="hong img-size" data-fontSize='36' data-marginTop='44'><span class="img-size" data-fontSize='99'>5</span>%+<span class="img-size" data-fontSize='99'>5</span>%</p>
        <p class="img-size" data-fontSize='24'>投资期限：可随时退出</p>
        <div class="xztz img-size" data-marginTop='36' data-borderRadius='10' data-fontSize='24' data-width='255' data-height='60' data-lineHeight='60'><a href="http://app.duorongcf.com/html/2weima.html">下载立即投资</a></div>
        <div class="lv img-size" data-paddingLeft='80' data-fontSize='18' data-marginTop='30'><span class="bz img-size" data-width='26' data-height='34' data-marginRight='12'></span><span style="float: left;">平台所有投资由上海华瑞银行全程资金监管</span></div>
    </div>
    <div class="bai img-size" data-width='636' data-height='446' data-borderRadius='16' data-marginTop='62' data-paddingBottom='26'>
        <div class="newtitle img-size" data-width='260' data-height='34'><span class="img-size" data-width='152' data-fontSize='30' data-top='12'>新手福利</span></div>
        <p class="hong img-size" data-fontSize='36' data-marginTop='44'><span class="img-size" data-fontSize='99'>12</span>%</p>
        <p class="img-size" data-fontSize='24'>投资期限：28天起</p>
        <p class="img-size" data-fontSize='24'>投资期限：100元起</p>
        <div class="xztz img-size" data-marginTop='36' data-borderRadius='10' data-fontSize='24' data-width='255' data-height='60' data-lineHeight='60'><a href="http://app.duorongcf.com/html/2weima.html">下载立即投资</a></div>
        <div class="lv img-size" data-paddingLeft='80' data-fontSize='18' data-marginTop='30'><span class="bz img-size" data-width='26' data-height='34' data-marginRight='12'></span><span style="float: left;">平台所有投资由上海华瑞银行全程资金监管</span></div>
    </div>
    <div class="bai img-size" data-width='636' data-height='446' data-borderRadius='16' data-marginTop='62' data-paddingBottom='26'>
        <div class="newtitle img-size" data-width='260' data-height='34'><span class="img-size" data-width='152' data-fontSize='30' data-top='12'>新手红包</span></div>
        <div class="bag img-size" data-width='210' data-height='252' data-marginTop='40'></div>
        <div class="xztz img-size" data-marginTop='36' data-borderRadius='10' data-fontSize='24' data-width='255' data-height='60' data-lineHeight='60'><a href="http://app.duorongcf.com/html/2weima.html">下载立即使用</a></div>
    </div>
    <div class="bottom img-size" data-paddingTop='20' data-paddingLeft='45' data-paddingRight='45' data-fontSize='18'>
        <!--<p class="img-size" data-paddingBottom='20' data-marginBottom='20'>市场有风险 投资需谨慎<br>平台建议的预期年化收益率仅供参考，不代表未来实际收益</p>-->
        <p class="img-size" data-paddingBottom='20' data-marginBottom='20'>市场有风险 投资需谨慎<br>平台建议的历史年化收益率仅供参考，不代表未来实际收益</p>
        <p>icp备案：沪ICP备15011207号<br>公司名称：上海银砖金融信息服务有限公司</p>
    </div>
</div>
</template>