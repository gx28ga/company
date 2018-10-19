/**
* describe 注册帮助
* Created by wangCuiqing
* Date: 2018/5/6
*/
<style scoped>
    @import url("./style/help.css");
</style>
<template>
    <article class="help">
        <helptitle></helptitle>
        <div class="helpContent img-size">
            <div class="littleTitle img-size" data-fontSize="30">开户步骤</div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">1</span>步&nbsp;:&nbsp;输入您的真实姓名、身份证号</div>
            <div class="img-size">
                <img src="../../images/help/open/open1.png" alt="" class="img-size" data-width="614" data-height="1079">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">2</span>步&nbsp;:&nbsp;根据限额选择您的开户银行</div>
            <div class="img-size">
                <img src="../../images/help/open/open2.png" alt="" class="img-size" data-width="612" data-height="1077">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">3</span>步&nbsp;:&nbsp;输入您所选银行的银行卡号</div>
            <div class="img-size">
                <img src="../../images/help/open/open3.png" alt="" class="img-size" data-width="612" data-height="1077">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90"  data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">4</span>步&nbsp;:&nbsp;选择您的开户行城市信息</div>
            <div class='nthTitle img-size' data-fontSize='24' data-lineHeight='45' data-marginBottom='50'>（若无您开卡所在城市可选择省会城市）</div>
            <div class="img-size">
                <img src="../../images/help/open/open4.png" alt="" class="img-size" data-width="612" data-height="771">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90"  data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">5</span>步&nbsp;:&nbsp;设置您的交易/提现密码</div>
            <div class='nthTitle img-size' data-fontSize='24' data-lineHeight='45' data-marginBottom='50'>（用于交易以及提现，须为6位数字）</div>
            <div class="img-size">
                <img src="../../images/help/open/open5.png" alt="" class="img-size" data-width="612" data-height="1077">
            </div>
        </div>
        <navtab></navtab>
    </article>
</template>
<script>
    import helptitle from "./common/helpTitle";
    import navtab from "./common/navTab";
    export default {
        components : {
            helptitle,
            navtab
        },
        mounted(){
            this.setImgSize();
            this.setNav({
                show:false
            })
            this.setTitle({
                show:true,
                title:"帮助中心",
                back:true,
            })
        }
    }
</script>
