<style scoped>
@import '../style/global';
    .main{
        .banner{
            @mixin contain '../images/banner.jpg';
            position:relative; z-index:1;
            >div{ position:absolute;}
            .text1{ 
                @mixin contain '../images/text1.png'; 
                animation:text1 infinite 2s linear;
                @at-root{
                    @keyframes text1{
                        50%{ transform:scale(1.1);}
                    }
                }
            }
            .text2{ 
                @mixin contain '../images/text2.png'; 
                animation:text2 infinite 2s linear;
                animation-delay:.5s;
                @at-root{
                    @keyframes text2{
                        50%{ transform:translate(-10px,2px);}
                    }
                }
                
            }
            .text3{ 
                @mixin contain '../images/text3.png'; 
                animation:text3 infinite 2s linear;
                animation-delay:1s;
                @at-root{
                    @keyframes text3{
                        50%{ transform:translate(-10px,2px);}
                    }
                }
            }
        }
        .img1{ margin:0 auto; @mixin contain '../images/img1.jpg'}
        .img2{ margin:20px auto 0; @mixin contain '../images/img2.jpg'}
        .tit1{ margin:0 auto; @mixin contain '../images/tit2.jpg'}

        .content{
            padding:20px;
            p{ padding:5px 0; text-indent:2em; }
        }
    }
    .footer{
        position:fixed; left:0; bottom:0; width:100%; box-sizing:border-box;
        @mixin contain '../images/footer.jpg';
        .text{ 
            position:absolute; width:100%; height:100%; display:block; border:none; background:none;
            text-align:center;
         }
        .btn{
            position:absolute; border-radius:5px;
            background:#f79b15; padding:0 10px; color:#fff;
            text-align:center;
            box-sizing:border-box;
        }
    }
</style>
<template>
<div class='module-scroll'>
    <div class='main'>
        <div class='banner img-size' data-height='337'>
            <div class='text1 img-size' data-right='104' data-top='71' data-width='557' data-height='180'></div>
            <div class='text2 img-size' data-right='125' data-top='10' data-width='330' data-height='121'></div>
            <div class='text3 img-size' data-left='111' data-top='196' data-width='346' data-height='122'></div>
        </div>
        <div class='img1 img-size' data-height='651'></div>
        <div class='content img-size' data-fontSize='24' data-lineHeight='40' data-paddingBottom='200'>
            <div class='tit1'></div>
            <p>上海银砖金融信息服务有限公司（简称“银砖金融”）成立于2015年1月，注册资金1亿，总部位于上海。</p>
            <p>2016年9月, 中商沪深产业投资有限公司战略入股银砖金融，占股比例为99%。</p>
            <p>旗下互联网金融理财平台—多融财富（duorongcf.com），在国际金融中心上海设立总部。平台专注“互联网+资产管理”的模式，解决银行、国企、上市公司等企业机构的资产管理问题。</p>
            <p>多融财富风控团队由国内领先的互联网金融企业创始人以及顶尖的金融服务机构管理层组成，具有丰富的互联网金融产品研发与运营经验，执行银行标准的风控体系。</p>
            <div class='img2 img-size' data-height='618' data-width='549'></div>
        </div>
    </div>
    <div class='footer img-size' data-height='135'>
        <input class='text img-size' type='tel' data-left='40' data-top='25' data-width='448' data-height='90' data-fontSize='40' v-model='tel' maxlength='11' placeholder='请输入您的手机号码'/>
        <div class='btn img-size' :class='{gray:!isTel}' data-left='511' data-top='30' data-height='90' data-lineHeight='40' data-paddingTop='5' data-fontSize='32' @click='submit'>立即领取<br>大礼包</div>
    </div>
</div>
</template>
<script>
import requirePop from '../pop/requirePop.js';
    export default {
        data(){
            return {
                tel : '',
                isTel : false
            }
        },
        mounted(){
            T.init();
            
        },
        watch:{
            tel : function(newNum,old){
                this.isTel = /^1[3|4|5|7|8][0-9]\d{8}$/.test(newNum);
            }
        },
        methods : {
            submit(){
                var self = this;
                if(this.isTel){
                    self.isTel = false;
                    T.ajax({
                        url : '/saleDepartment/saleDepartmentActivity.do',
                        callback:true,
                        data : {
                            mobilePhone : this.tel
                        }
                    }).then(data=>{
                        if(data.errorCode == 9998){ //已领取
                            self.isTel = true;
                            requirePop('publicTips',{
                                props:{
                                    content:'<div style="text-align:center; padding:20px;">您已经领取过！</div>',
                                    okTxt : '登录APP',
                                    okCallback:function(){
                                        var url = 'http://app.duorongcf.com/html/2weima.html' , 
                                            weixin = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.yz.dr_app';
                                        if(T.wap) {
                                            if (T.weixin == true) {
                                                window.location.href = weixin;
                                            } else if (T.ios_weixin == true) {
                                                window.location.href = weixin;
                                            } else if (T.qq) {
                                                window.location.href = weixin;
                                            } else if (T.Iphone && T.weibo) {
                                                window.location.href = url;
                                            } else if (T.Iphone) {

                                                var iFrame = document.createElement('iframe');
                                                iFrame.style.display = "none";
                                                iFrame.src = 'duorong://';

                                                document.body.appendChild(iFrame);

                                                setTimeout(function () {
                                                    if (!document.webkitHidden) {
                                                        window.location.href = url;
                                                    }

                                                }, 25);

                                            } else if (T.Android) {
                                                location.href = 'duorongcf://duorong/';
                                                setTimeout(function(){
                                                    window.location.href = url;
                                                },20);
                                            }
                                            
                                        }else {
                                            T.login();
                                        }
                                    }
                                }
                            })
                            return;
                        }
                        if(data.success){ //成功
                            return requirePop('login');
                        }else{//失败
                            requirePop('publicTips',{
                                props:{
                                    content:'<div style="text-align:center; padding:20px;">对不起，该号码不能参加此活动！</div>',
                                    okTxt : '确定'
                                }
                            })
                        }
                    })
                }
            }
        }
    }
</script>