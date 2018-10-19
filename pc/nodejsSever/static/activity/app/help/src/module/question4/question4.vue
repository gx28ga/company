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
    <section class='quest img-size' data-paddingBottom='20'>
         <div class='name img-size' data-fontSize='32' data-height='150' data-lineHeight='150'>银行卡</div>
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan1' data-fontSize='30'>
            如何绑定银行卡？绑定银行卡支持哪些银行？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div>  
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30' @click='anquan2' data-fontSize='30'>
          如果绑定的所绑定的银行卡丢失如何处理？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32' ></div>
        </div> 
          <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan3' data-fontSize='30'>
          提现银行卡可以更换吗？如何操作？
            <div class='rightIcon img-size' data-width='12' data-height='24' data-marginRight='30' data-marginTop='32'></div>
        </div> 
        <div class='question1 img-size' data-height='90' data-lineHeight='90' data-paddingLeft='30'  @click='anquan4' data-fontSize='30'>
          如何修改提现手机号？
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
                    title:'如何绑定银行卡？绑定银行卡支持哪些银行？',
                    content : '<div style="padding:10px;">绑定银行卡需提供银行卡号，对应银行卡的预留手机号，身份证号。请注意，绑定的银行卡的持卡人需与之前认证的姓名相符，否则将不能进行银行卡绑定。<br>支持银行：工商-农业-建设-中国-邮储-招商-兴业-广发-平安-中信-华夏-光大-浦发-民生-交行</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan2(){
            requirePop('question1',{
                props: {
                    title:'如果绑定的所绑定的银行卡丢失如何处理？',
                    content : '<div style="padding:10px;">请拨打官方电话400-690-8896，联系客服人工处理。</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan3(){
            requirePop('question2',{
                props: {
                    title:'提现银行卡可以更换吗？如何操作？',
                    content : '<div style="padding:10px;">可以。请拨打官方电话400-690-8896，联系客服人工处理。<br><br>请准备提供以下材料：<br>1、手持身份证+新卡照片<br>2、手持身份证+旧卡（流水单或挂失证明）照片</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
            anquan4(){
            requirePop('question2',{
                props: {
                    title:'如何修改提现手机号？',
                    content : '<div style="padding:10px;">请拨打官方电话400-690-8896，联系客服人工处理。<br>如可接收旧手机验证码，请提供：<br>1、手持身份证+银行卡照片<br>2、根据客服指示及时提供旧手机短信验证码（发起修改提现手机号操作时银行会发送验证码短信到原手机上）<br>如无法接收旧手机验证码，请根据客服指导，填写或提供：<br>1、多融变更信息表（银行卡所在省、市、新接收号码、开户行、姓名、卡号、身份证、身份证号码），并签名、手印<br>2、多融变更号码申请书（姓名、原号码、原号码、新号码），并签字、手印<br>3、自愿更换提现手机号，并自行承担责任视频</div>',
                    transition : 'slideOutDown'
                }
                },'publicTips');
            },
        }
    }
</script>
