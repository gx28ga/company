<style scope>
    .question1{
        background: #fff;
        border-top:1px solid #ddd;
        border-bottom:1px solid #ddd;
    }
    .rightIcon{
        float: right;
        background:url("../../images/angular.png") no-repeat;
        background-size: contain;
    }
      .name{
         text-align: center; 
        color:#0aa1e3;
        background: #fff; 
    }
</style>
<template>
    <section class='quest'>
         <div class='name img-size' data-fontSize='32' data-height='150' data-lineHeight='150'>账户相关</div>
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan1' data-fontSize='30'>
            为何要进行实名认证？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan2' data-fontSize='30'>
           忘记密码怎么办？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan3' data-fontSize='30'>
           为何要进行实名认证？ 实名认证无法通过的原因？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>   
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan4' data-fontSize='30'>
           用户使用有年龄限制？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
         <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan5' data-fontSize='30'>
          同一个身份证可以绑定两个帐号吗？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>
    </section>
</template>
<script>
    import requirePop from "../../pop/requirePop.js";
    export default{
        methods:{
        anquan1(){
            requirePop('question',{
                props: {
                    title:'为何要进行实名认证？',
                    content : '<div style="padding:10px;">实名认证的目的是验证您所绑定的账户是否属于您本人，并且相关操作由您本人发起。用于认证的手机号码应为您现在的常用号码，以方便您进行投资操作接受验证信息。 为了确保您的资金安全，您需要在首次投资前进行实名认证，您提现时只能提现至与您实名认证个人姓名（个人用户）或企业名称（企业用户）相一致的银行卡账户，以确保资金的安全。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan2(){
            requirePop('question1',{
                props: {
                    title:'忘记密码怎么办？',
                    content : '<div style="padding:10px;">1) 点击登录页面的忘记密码。<br />2) 填写您注册时使用的手机号码，并点击【获取验证码】按钮。<br /> 3) 输入发送到您手机上的验证码及您新设的密码，完成密码重置。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan3(){
            requirePop('question2',{
                props: {
                    title:'为何要进行实名认证？ 实名认证无法通过的原因？',
                    content : '<div style="padding:10px;">实名认证的目的是验证您所绑定的账户是否属于您本人，并且相关操作由您本人发起。用于认证的手机号码应为您现在的常用号码，以方便您进行投资操作接受验证信息。 为了确保您的资金安全，您需要在首次投资前进行实名认证，您提现时只能提现至与您实名认证个人姓名（个人用户）或企业名称（企业用户）相一致的银行卡账户，以确保资金的安全。<br>实名认证与公安系统联网，姓名与身份证号码不一致会导致认证无法通过。以下几种情况导致的实名认证不通过，建议更换投资人：<br>1、名字中带有繁体字<br>2、曾经改过名<br>3、军人专业、复员换的身份证<br>4、做过户籍变动</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan4(){
            requirePop('question2',{
                props: {
                    title:'用户使用有年龄限制？',
                    content : '<div style="padding:10px;">用户必须持有有效身份证件的18周岁以上</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan5(){
            requirePop('question2',{
                props: {
                    title:'同一个身份证可以绑定两个帐号吗？',
                    content : '<div style="padding:10px;">不可以</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            }
        }
    }
</script>
