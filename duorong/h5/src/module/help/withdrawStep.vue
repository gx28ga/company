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
            <div class="littleTitle img-size" data-fontSize="30">提现步骤</div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">1</span>步&nbsp;:&nbsp;点击提现按钮</div>
            <div class="img-size">
                <img src="../../images/help/tixian/tixian1.png" alt="" class="img-size" data-width="600" data-height="1067">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">2</span>步&nbsp;:&nbsp;输入提现金额，点击确认</div>
            <div class="img-size">
                <img src="../../images/help/tixian/tixian2.png" alt="" class="img-size" data-width="613" data-height="1079">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">3</span>步&nbsp;:&nbsp;在银行提现页面输入支付密码、<br> 获取验证码、点击确认。</div>
            <div class="img-size">
                <img src="../../images/help/tixian/tixian3.png" alt="" class="img-size" data-width="600" data-height="1188">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">4</span>步&nbsp;:&nbsp;确认提现</div>
            <div class="img-size">
                <img src="../../images/help/tixian/tixian4.png" alt="" class="img-size" data-width="600" data-height="1067">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">5</span>步&nbsp;:&nbsp;提现成功</div>
            <div class="img-size">
                <img src="../../images/help/tixian/tixian5.png" alt="" class="img-size" data-width="600" data-height="1067">
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
