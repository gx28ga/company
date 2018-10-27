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
            <div class="littleTitle img-size" data-fontSize="30">充值步骤</div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">1</span>步&nbsp;:&nbsp;在充值页面输入您希望充值的金额，<br>点击“下一步”</div>
            <div class="img-size">
                <img src="../../images/help/recharge/chongzhi1.jpg" alt="" class="img-size" data-width="600" data-height="1066">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90"  data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">2</span>步&nbsp;:&nbsp;在确认充值页面确认您的信息，<br>确认预留手机号无误后点击“发送验证码”</div>
            <div class='nthTitle img-size' data-fontSize='24' data-lineHeight='45' data-marginBottom='50'>（若预留手机号码错误可自行进行修改）</div>
            <div class="img-size">
                <img src="../../images/help/recharge/chongzhi2.png" alt="" class="img-size" data-width="613" data-height="925">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">3</span>步&nbsp;:&nbsp;输入短信验证码，<br>确认无误点击“确认充值”</div>
            <div class="img-size">
                <img src="../../images/help/recharge/chongzhi3.png" alt="" class="img-size" data-width="613" data-height="939">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">4</span>步&nbsp;:&nbsp;充值成功，<br>可以开始理财赚取收益啦</div>
            <div class="img-size">
                <img src="../../images/help/recharge/chongzhi4.png" alt="" class="img-size" data-width="612" data-height="1087">
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
