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
            <div class="littleTitle img-size" data-fontSize="30">注册步骤</div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">1</span>步&nbsp;:&nbsp;输入您的手机号</div>
            <div class="img-size">
                <img src="../../images/help/register/register1.png" alt="" class="img-size" data-width="611" data-height="650">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">2</span>步&nbsp;:&nbsp;输入图形验证码</div>
            <div class="img-size">
                <img src="../../images/help/register/register3.png" alt="" class="img-size" data-width="610" data-height="752">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90" data-marginBottom="50" data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">3</span>步&nbsp;:&nbsp;获取短信验证码</div>
            <div class="img-size">
                <img src="../../images/help/register/register3.png" alt="" class="img-size" data-width="610" data-height="752">
            </div>
            <div class="nthTitle img-size" data-fontSize="30" data-marginTop="90"  data-lineHeight="45">第<span class="img-size littleNum" data-width="30" data-height="30" data-lineHeight="30" data-marginTop="8">4</span>步&nbsp;:&nbsp;设置您的登录密码</div>
            <div class='nthTitle img-size' data-fontSize='24' data-lineHeight='45' data-marginBottom='50'>（登录密码为6-18位数字字母组合）</div>
            <div class="img-size">
                <img src="../../images/help/register/register4.png" alt="" class="img-size" data-width="610" data-height="752">
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
