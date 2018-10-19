<style scoped>
    .experience{
        background: #ffffff;
        .banner{
            background: url("../../images/banner.png") no-repeat;
            background-size: contain;
            box-sizing: border-box;
            position: relative;
            .one{
                position: absolute;
            }
        }
        .number1{
            background:url("../../images/number1.png") no-repeat;
            background-size: contain;
            position: relative;
            margin:0 auto;
            .miaoshu{
                position: absolute;
                color:#1f1f29;
                .dian{
                    list-style:circle;
                    .fontC{
                        color:#ff7200;
                    } 
                }
            }

        }
        .content{
            .title2{
                background:url("../../images/title2.png") no-repeat;
                background-size: contain;
                margin:0 auto;
            } 
             .title3{
                background:url("../../images/title3.png") no-repeat;
                background-size: contain;
                margin:0 auto;
            }   
             .title6{
                background:url("../../images/title6.png") no-repeat;
                background-size: contain;
                margin:0 auto;
            }

            .titlecon{
                color:#aeb3be;
                text-align: center;
            }
            .con{
                color:#1f1f29;
                margin:0 auto;
                dt{
                    background:url("../../images/icon.png") no-repeat;
                    background-size:contain;
                }
            }
            .ticket{
                margin:0 auto;
                .ticketImg{
                    background: url("../../images/bank.png") no-repeat;
                    background-size:contain;
                }
                .ticketImg2{
                    background: url("../../images/shang.png") no-repeat;
                    background-size:contain;
                }
                .ticketCon{
                    color:#74747f;
                    .piao{
                        color:#ff7200;
                    }
                }
            }
            .number2{
                background: url("../../images/icon2.png") no-repeat;
                background-size: contain;
                box-sizing: border-box;
            }
             .number3{
                background: url("../../images/number3.png") no-repeat;
                background-size: contain;
                box-sizing: border-box;
            } 
             .number6{
                background: url("../../images/number6.png") no-repeat;
                background-size: contain;
                box-sizing: border-box;
            }
        }
        .number4{
            background: url("../../images/number4.png") no-repeat;
            background-size: contain;
            box-sizing: border-box;
        }
          .number5{
            background: url("../../images/number5.png") no-repeat;
            background-size: contain;
            box-sizing: border-box;
        }
    }
</style>
<template>
    <article class='experience img-size'>
        <div class='banner img-size' data-width='750' data-height='991'>
            <div class='one img-size' data-width='150' data-height='80' data-left='311' data-top='356' @click='number1'></div>
            <div class='one img-size' data-width='150' data-height='80' data-left='66' data-top='500' @click='number2'></div>
            <div class='one img-size' data-width='150' data-height='80' data-left='501' data-top='505' @click='number3'></div>
            <div class='one img-size' data-width='150' data-height='80' data-left='40' data-top='660' @click='number4'></div>
            <div class='one img-size' data-width='150' data-height='80' data-left='557' data-top='672' @click='number5'></div>
            <div class='one img-size' data-width='150' data-height='80' data-left='325' data-top='749' @click='number6'></div>
        </div>
        <div class='content img-size' id='number1'>
            <div class='number1 img-size' data-width='732' data-height='1075' data-marginTop='-160'>
                <div class='miaoshu img-size' data-top='720' data-width='670' data-left='40'>
                    <dl>
                        <dt>·</dt>
                        <dd class=' dian img-size' data-fontSize='24' data-marginTop='-30' data-marginLeft='20' data-lineHeight='40'>2016年9月, 中商沪深产业投资有限公司战略入股银砖金融，占股比例为<span class='fontC'>99%</span>。</dd>
                        <dt>·</dt>
                        <dd class=' dian img-size' data-fontSize='24' data-marginTop='-30' data-marginLeft='20'  data-lineHeight='40'>2017年12月，获<span style='font-weight:700'>南京银河生物技术有限公司</span>5000万元增资控股，占股比例为<span class='fontC'>33.33%</span>，中商沪深产业投资有限公司占股比例调整为<span class='fontC'>66.67%</span>。</dd>
                    </dl>
                </div>
            </div>
            <div class='content img-size' data-marginTop='70' id='number2'>
                <div class='title2 img-size' data-width='534' data-height='116'>   
                </div>
                <div class='titlecon img-size' data-fontSize='24' data-marginTop='-40'>优质票据资产 安全高效兑付</div>
                <dl class='con img-size' data-width='670' data-marginTop='70'>
                    <dt class='img-size' data-width='14' data-height='24'></dt>
                    <dd class='img-size' data-marginTop='-24' data-marginLeft='24' data-fontSize='26' data-lineHeight='40'>平台专注于安全系数极高的票据理财市场，依托于控股方的强大背景，拥有比同行更优质的项目来源。其项目均为银行承兑汇票或知名国企签发的商票，票据到期后，由银行或国企兑付的资金作为还款来源，确保资金兑付更加安全、高效。</dd>
                </dl>
                <dl class='ticket img-size' data-width='620' data-marginTop='50'>
                     <dt class='ticketImg img-size' data-width='106' data-height='165'></dt>
                     <dd class='ticketCon img-size' data-marginTop='-165' data-marginLeft='130' data-fontSize='20'>
                         <span class='piao img-size' data-fontSize='24'>银行承兑汇票</span>是由银行开具的到期兑付的书面凭证。根据《票据法》第四十三条、第四十四条规定：付款人承兑汇票，不得附有条件；付款人承兑汇票后，应当承担到期付款的责任。
                     </dd>
                </dl>  
                  <dl class='ticket img-size' data-width='620' data-marginTop='40'>
                     <dt class='ticketImg2 img-size' data-width='106' data-height='165'></dt>
                     <dd class='ticketCon img-size' data-marginTop='-165' data-marginLeft='130' data-fontSize='20'>
                         <span class='piao img-size' data-fontSize='24'>商业承兑汇票</span>是由企业签发，委托付款企业在到期日无条件支付给收款人或持票人的票据。根据《票据法》第四十三条、第四十四条、第四十五条规定：付款人承兑汇票，不得附有条件；付款人承兑汇票后，应当承担到期付款的责任；汇票的债务可以由保证人承担保证责任。
                     </dd>
                </dl>
                <div class='number2 img-size' data-width='750' data-height='260' data-marginTop='30'>  
                </div>
            </div>
            <div class='content img-size' data-marginTop='70' id='number3'>
             <div class='title3 img-size' data-width='534' data-height='116'>   
                </div>
                <div class='titlecon img-size' data-fontSize='24' data-marginTop='-40'>用户授权操作 资金专款专用</div>
                <dl class='con img-size' data-width='670' data-marginTop='70'>
                    <dt class='img-size' data-width='14' data-height='24'></dt>
                    <dd class='img-size' data-marginTop='-24' data-marginLeft='24' data-fontSize='26' data-lineHeight='40'>2017年7月,多融财富正式接入银行资金存管系统，资金交易环节均在银行系统中进行，资金交易均由用户授权银行操作执行，平台无法触碰用户资金，确保资金进、存、出全程安全。</dd>
                </dl>
                <div class='number3 img-size' data-width='750' data-height='506'></div>
            </div>
            <div class='number4 img-size' data-width='750' data-height='813' id='number4'></div>
            <div class='number5 img-size' data-width='750' data-height='741' data-marginTop='50' id='number5'></div>
            <div class='content img-size' data-marginTop='70' id='number6'>
                <div class='title6 img-size' data-width='534' data-height='116'>   
                </div>
                <div class='titlecon img-size' data-fontSize='24' data-marginTop='-40'>合规审查 健康发展</div>
                <dl class='con img-size' data-width='670' data-marginTop='70'>
                    <dt class='img-size' data-width='14' data-height='24'></dt>
                    <dd class='img-size' data-marginTop='-24' data-marginLeft='24' data-fontSize='26' data-lineHeight='40'>金茂律师事务所作为多融财富战略合作伙伴，将协助多融财富审核、起草、修改相关法律文件，对公司的业务模式进行合规性审查，为公司的合法发展提供法律服务支持，更好的保障借贷双方的合法权益，保障平台的持续健康发展。</dd>
                </dl>
                <div class='number6 img-size' data-width='750' data-height='404' data-marginTop='30'>  
                </div>
            </div>

        </div>
     
    </article>
</template>
<script>
    import requirePop from '../../pop/requirePop.js';
    import { mapState , mapGetters } from 'vuex';
    export default {
        data(){
            return {
                list : [],
            }
        },
        computed : {
        
        },
        mounted(){
            T.setImgSize();
        },
        methods : {
            detail(){
	            requirePop('tel')
            },
            number6(){
            var scrollTop=$("#number6").offset().top;
             document.body.scrollTop=scrollTop;
            }, 
             number5(){
            var scrollTop=$("#number5").offset().top;
             document.body.scrollTop=scrollTop;
            },   
             number4(){
            var scrollTop=$("#number4").offset().top;
             document.body.scrollTop=scrollTop;
            } ,
               number3(){
            var scrollTop=$("#number3").offset().top;
             document.body.scrollTop=scrollTop;
            } ,   number2(){
            var scrollTop=$("#number2").offset().top;
             document.body.scrollTop=scrollTop;
            }  ,  number1(){
            var scrollTop=$("#number1").offset().top;
             document.body.scrollTop=scrollTop;
            }
        }
    }
</script>
