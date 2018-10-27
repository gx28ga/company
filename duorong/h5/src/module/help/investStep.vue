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
            <div class="littleTitle img-size" data-fontSize="30">投资步骤</div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">1</span>步&nbsp;:&nbsp;选择投资标的</div>
            <div class="img-size">
                <img src="../../images/help/investment/investment1.png" alt="" class="img-size" data-width="540" data-height="960">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">2</span>步&nbsp;:输入投资金额</div>
            <div class="img-size">
                <img src="../../images/help/investment/investment2.png" alt="" class="img-size" data-width="540" data-height="960">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">3</span>步&nbsp;:&nbsp;确认投资信息</div>
            <div class="img-size">
                <img src="../../images/help/investment/investment3.png" alt="" class="img-size" data-width="540" data-height="960">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">4</span>步&nbsp;:&nbsp;选择优惠券或特权</div>
            <div class="img-size">
                <img src="../../images/help/investment/investment4.png" alt="" class="img-size" data-width="540" data-height="960">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">5</span>步&nbsp;:&nbsp;确认投资</div>
            <div class="img-size">
                <img src="../../images/help/investment/investment5.png" alt="" class="img-size" data-width="540" data-height="960">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">6</span>步&nbsp;:&nbsp;输入交易密码</div>
            <div class="img-size">
                <img src="../../images/help/investment/investment6.png" alt="" class="img-size" data-width="540" data-height="960">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">7</span>步&nbsp;:&nbsp;投资成功</div>
            <div class="img-size">
                <img src="../../images/help/investment/investment7.png" alt="" class="img-size" data-width="540" data-height="795">
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
