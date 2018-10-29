/**
* describe 银行存管上线
* Created by wangCuiqing
* Date: 2018/5/30
*/
<style scoped>
   /* .bankBox{
       background: #fff;
    }
    .banner{
        background:url("../../images/about/bankDepositManagement/topbar.jpg") no-repeat;
        background-size:contain;
    }
    .mainTitle{
        color:#E8A22B;
        text-align: center;
    }*/
   .bankBox{
       background:#fff;
   }
   .bg{
       width: 100%;
       background:url("../../images/about/bankDepositManagement/topbar.jpg")  no-repeat;
       background-size: contain;
       /*position: relative;*/
   }
   .main-title{
       width: 100%;
       padding: 2rem 0 .8rem;
       text-align: center;
       color: #E8A22B;
       font-size: 1rem;
       line-height: 1rem;
   }
   .sub-title{
       margin: 0 auto;
       border: 1px dashed #000;
       border-radius: .8rem;
       color: rgb(33, 48, 71);
       text-align: center;
   }
   .main-title span{
       position: relative;
       top: -0.15rem;
       font-size: .5rem;
   }
   .part-1{
       padding: .5rem .5rem 1.5rem .2rem;
   }
    .part-1 .img-box{
       display: inline-block;
       background: url("../../images/about/bankDepositManagement/treasure-box.jpg") no-repeat;
       background-size: contain;
   }
   .part-1 .detail{
       display: inline-block;
   }
    .part-1 .detail .btn1{
       border: 1px solid #000;
        text-align: center;
   }
    .radian{
       width: 100%;
       height: .9rem;
       background: url("../../images/about/bankDepositManagement/radian.png") center no-repeat;
       background-size: cover;
   }
    .part-2{
       background: rgb(233, 236, 241);
       width: 100%;
       height: 33rem;
   }
    .part-2 .wrapper-1{
       margin: 1rem auto 0;
       width: 83.2%;
       height: 10rem;
   }
   .left{
       float: left;
   }
   .right{
       float: right;
   }
   .card{
       background: #FFF;
       border-radius: .5rem;
       box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
       text-align: center;
       padding-bottom: .4rem;
   }
    .part-2 .wrapper-1 > div{
       width: 47%;
   }
    .part-2 .wrapper-1 p.icon {
       margin-top: 1rem;
   }
    .part-2 .wrapper-1 p.point{
       margin: .8rem 0 1rem;
       font-size: .9rem;
   }
    .part-2 .wrapper-1 p.detail{
       font-size: .52rem;
       line-height: .6rem;
       margin: .4rem 0;
   }
   .part-2 .wrapper-2{
       clear: both;
       width: 62%;
       margin: 1rem auto .6rem;
       padding: .4rem .25rem;
   }
    .part-2 .wrapper-2 .btn{
       border: 1px solid #000;
       width: 52%;
       height: .75rem;
       margin: .3rem auto .4rem;
       font-size: .5rem;
       line-height: .72rem;
       padding: .1rem .2rem 0;
   }
   .part-2 .wrapper-2 .btn .sign{
       display: inline-block;
       font-size: 200%;
       margin: -.1rem 0 .1rem .3rem;
       vertical-align: top;
   }
    .part-3{
       padding: .001rem 0 1.5rem;
       background: url("../../images/about/bankDepositManagement/bg-rpt.png") repeat;
   }
    .part-3 .process-title{
       margin: 1.8rem auto 1.2rem;
       width: 64%;
       color: #FFF;
       font-size: .7rem;
       text-align: center;
   }
   .part-3 .process-title .line{
       display: inline-block;
       width: 26%;
       border-top: 1px solid #FFF;
       height: 0;
       position: relative;
       top: .47rem;
   }
    .part-3 .mobile{
       margin: 0 auto;
       background: url("../../images/about/bankDepositManagement/moblie.png") center no-repeat;
       background-size: contain;
   }
    .part-3 .mobile .nav-box{
       display: inline-block;
       position: relative;
       top: -16rem;
       height: 1.3rem;
       width: 1.3rem;
       cursor: pointer;
   }
   .part-3 .mobile .nav-box.left{
       background: url("../../images/about/bankDepositManagement/icon-nav-l.png") center no-repeat;
       background-size: contain;
   }
    .part-3 .mobile .nav-box.right{
       /*left: 3rem;*/
       background: url("../../images/about/bankDepositManagement/icon-nav-r.png") center no-repeat;
       background-size: contain;
   }
    .part-qa {
       width: 100%;
       background: #FFF;
   }
    .part-qa .tab-row{
       margin-top: 1.5rem;
       width: 100%;
       border-bottom: 1px solid #999;
   }
   .part-qa .tab-row .tab-item{
       display: inline-block;
       border-right: 1px solid #CCC;
       color: #999;
   }
   .part-qa .tab-row .active{
       color:rgb(232, 162, 43);
   }
    .part-qa .tab-row .tab-item:last-child{
       border-right: none;
   }
    .part-qa .qa-item{
       margin: 1.5rem 0;
   }
    .part-qa .qa-item .q{
       color: #E8A22B;
       font-size: .72rem;
       margin-bottom: .3rem;
   }
    .part-qa .qa-item .q span{
       display: inline-block;
       padding: 0 .3rem;
       line-height: 1.1rem;
       font-size: .5rem;
       vertical-align: top;
   }
    .part-qa .qa-item p{
       margin-left: 1rem;
       color: #000;
       font-size: .6rem;
       line-height: 1.2rem;
   }
    .foot{
       width: 84.5%;
       background: #000;
       padding: 1.5rem 2% 1.3rem 13.5%;
       color: #FFF;
   }
    .foot .qrcd{
       display: inline-block;
       width: 3.5rem;
       font-size: .45rem;
       text-align: center;
   }
    .foot .qrcd p{
       margin: .1rem auto;
   }
    .foot .hotline{
       display: inline-block;
       margin: .1rem 0 .8rem 13.5%;
       font-size: .8rem;
       vertical-align: top;
   }
  .foot .hotline p{
       margin: .2rem 0;
   }
   .dialog-bg{
       position: fixed;
       top: 0;
       background: rgba(0, 0, 0, 0.6);
       height: 100%;
       width: 100%;
       overflow: hidden;
       z-index: 5;
       display: none;
   }
   .dialog-bg.process .content{
       width: 93.4%;
       height: 17.5rem;
       margin: 0 auto;
       position: relative;
       top: 15%;
       background: url("../../images/about/bankDepositManagement/trade-process.jpg") center no-repeat;
       background-size: cover;
       border-radius: .4rem;
   }
   .dialog-bg.huarui-bank .content{
       width: 93.4%;
       height: 20.3rem;
       margin: 0 auto;
       position: relative;
       top: 10%;
       background: url("../../images/about/bankDepositManagement/why-huaruibank.jpg") center no-repeat;
       background-size: cover;
       border-radius: .4rem;
   }
   .mobileBox{
       overflow: hidden;
       margin:0 auto;
       /*background: red;*/
   }
   .bannerSider{
       position: relative;
       width: 100%;
       z-index: 1;
       display:flex;
       flex-direction:row;
       -webkit-perspective: 1500px;

       li{
           flex-shrink: 0;
           text-align: center;
           font-size: 18px;
           background: #fff;
           display: flex;
           overflow:hidden;
           justify-content: center;
           align-items: center;
       }
       img{
           display:block;
           width:100%;
       }
   }
</style>
<style>
    .pop .content-wrapper{
        max-width: 100%;
        border-radius: 0px;
    }
</style>
<template>
   <article class="bankBox">
        <!--<div class="banner img-size" data-height="545"></div>-->
        <!--<div class="mainTitle img-size" data-fontSize="40" data-paddingTop="40" data-paddingBottom="32">●&nbsp;&nbsp;监管合规&nbsp;&nbsp;资金安全&nbsp;&nbsp;●</div>-->

    <div class="bg img-size" data-width="750" data-height="545"></div>
        <div class="main-title"><span>●</span>&nbsp;&nbsp;监管合规&nbsp;&nbsp;资金安全 &nbsp;&nbsp;<span>●</span></div>
        <div class="part-1">
            <div class="img-box img-size" data-width="240" data-height="220"></div>
            <div class="detail img-size" data-fontSize="24" data-width="413" data-marginLeft="30" data-lineHeight="40">&nbsp;&nbsp;&nbsp;&nbsp;2017年7月19日，多融财富的银行存管系统正式上线。<br>&nbsp;&nbsp;&nbsp;&nbsp;通过银行存管系统，确保用户资金与平台隔离。
                <div class="btn1 img-size" data-marginTop="30" data-width="400" data-fontSize="18" data-height="45" data-lineHeight="45" @click="onShowTradeProcess">点击了解“银行存管模式下的资金交易流程”&gt;&gt;
                </div>
            </div>
        </div>
        <div class="radian"></div>
        <div class="part-2">
            <div class="main-title"><span>●</span>&nbsp;&nbsp;银行存管&nbsp;&nbsp;保障资金安全&nbsp;&nbsp;<span>●</span></div>
            <div class="sub-title img-size" data-width="225" data-height="50" data-lineHeight="50" data-fontSize="30">响应监管合规</div>
            <div class="wrapper-1">
                <div class="card left">
                    <p class="icon"><img src="../../images/about/bankDepositManagement/icon-safe.png" width="26%"></p>
                    <p class="point">资金隔离</p>
                    <p class="detail">用户资金与平台隔离，</p>
                    <p class="detail">平台无权限触碰</p>
                    <p class="detail">用户资金。</p>
                </div>
                <div class="card right">
                    <p class="icon"><img src="../../images/about/bankDepositManagement/icon-auth.png" width="31%"></p>
                    <p class="point">用户授权</p>
                    <p class="detail">用户下达资金交易指令后，</p>
                    <p class="detail">资金才能进行划转。</p>
                    <p class="detail">&nbsp;</p>
                </div>
            </div>
            <div class="wrapper-1">
                <div class="card left">
                    <p class="icon"><img src="../../images/about/bankDepositManagement/icon-acct.png" width="33%"></p>
                    <p class="point">专属账户</p>
                    <p class="detail">银行为每位用户单独</p>
                    <p class="detail">设立资金存管账户。</p>
                    <p class="detail">&nbsp;</p>
                </div>
                <div class="card right">
                    <p class="icon"><img src="../../images/about/bankDepositManagement/icon-bank.png" width="31%"></p>
                    <p class="point">银行监管</p>
                    <p class="detail">用户资金由银行统一管理，</p>
                    <p class="detail">避免挪用及设立资金池。</p>
                    <p class="detail">&nbsp;</p>
                </div>
            </div>
            <!-- <div class="wrapper-2 card">
              <img src="../../main/images/escrow-guide-h5/logo-joint.jpg" width="90%">
              <div class="btn" onclick="onShowWhyHuairuiBank();">为什么选择上海华瑞银行<div class="sign">&raquo;</div></div>
            </div> -->
        </div>
        <div class="part-3">
            <div class="main-title" style="padding-top: 1.3rem; color: #FFF;"><span>●</span>&nbsp;&nbsp;银行存管操作指南&nbsp;&nbsp;<span>●</span></div>
            <div class="sub-title img-size" data-width="265" data-height="50" data-lineHeight="50" style="color: #FFF; border-color: #FFF;">操作问题快速解决</div>
            <div class="process-title img-size" data-fontSize="26"><div class="line left"></div>新用户开户流程<div class="line right"></div></div>
            <div class="mobile img-size"  data-height="970" data-paddingLeft="34" data-paddingRight="34" data-paddingTop="140" data-paddingBottom="135">
                <div class="mobileBox mobile1 img-size" data-width="547" data-height="970">
                    <ul class="swiper-wrapper bannerSider img-size" data-height="970" >
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-height="970" data-width="547" src="../../images/about/bankDepositManagement/step-open/1.jpg">
                        </li>
                        <li class="swiper-slide img-size" data-height="970" >
                            <img class="img-size"  data-height="970" data-width="547"  src="../../images/about/bankDepositManagement/step-open/2.jpg">
                        </li>
                        <li class="swiper-slide img-size" data-height="970" >
                            <img class="img-size" data-width="547" data-height="970" src="../../images/about/bankDepositManagement/step-open/3.jpg">
                        </li>
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-width="547" data-height="970" src="../../images/about/bankDepositManagement/step-open/4.jpg">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="process-title img-size" data-fontSize="26"><div class="line left"></div>老用户激活流程<div class="line right"></div></div>
            <div class="mobile img-size" data-width="545" data-height="970" data-paddingLeft="34" data-paddingRight="34" data-paddingTop="140" data-paddingBottom="135">
                <div class="mobileBox mobile2 img-size" data-width="547" data-height="970">
                    <ul class="swiper-wrapper bannerSider img-size" data-height="970" >
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-height="970" data-width="547" src="../../images/about/bankDepositManagement/step-upgrade/1.jpg">
                        </li>
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-height="970" data-width="547" src="../../images/about/bankDepositManagement/step-upgrade/2.jpg">
                        </li>
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-height="970" data-width="547" src="../../images/about/bankDepositManagement/step-upgrade/3.jpg">
                        </li>
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-height="970" data-width="547" src="../../images/about/bankDepositManagement/step-upgrade/4.jpg">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="process-title img-size" data-fontSize="26"><div class="line left"></div>充值/提现流程<div class="line right"></div></div>
            <div class="mobile img-size" data-width="545" data-height="970" data-paddingLeft="34" data-paddingRight="34" data-paddingTop="140" data-paddingBottom="135">
                <div class="mobileBox mobile3 img-size" data-width="547" data-height="970">
                    <ul class="swiper-wrapper bannerSider img-size" data-height="970" >
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-height="970" data-width="547" src="../../images/about/bankDepositManagement/step-recharge/1.jpg">
                        </li>
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-height="970" data-width="547" src="../../images/about/bankDepositManagement/step-recharge/2.jpg">
                        </li>
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-height="970" data-width="547" src="../../images/about/bankDepositManagement/step-recharge/3.jpg">
                        </li>
                        <li class="swiper-slide img-size" data-height="970">
                            <img class="img-size" data-height="970" data-width="547" src="../../images/about/bankDepositManagement/step-recharge/4.jpg">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="part-qa">
            <div class="main-title"><span>●</span>&nbsp;&nbsp;更多关于银行存管&nbsp;&nbsp;<span>●</span></div>
            <div class="sub-title" style="width: 13%;">Q&A</div>
            <div class="tab-row">
                <div class="tab-item img-size" data-fontSize="24" data-paddingLeft="20" data-paddingRight="20" data-height="40" data-lineHeight="40" v-for="(item,index) in title" :class="{'active':num==index}"  v-bind:key="item.id" @click="toggle(index)">{{item}}</div>
            </div>
            <div class="qa img-size" data-paddingLeft="40" data-paddingRight="40" v-show="num==0">
                <div class="qa-item">
                    <div class="q img-size" data-fontSize="24"><span>●</span>银行存管模式</div>
                    <p class="img-size">银行存管模式下，实现资金与交易的分离、信息流与现金流的分离。借款人和投资人之间的交易发生在双方的银行账户之间，并由存管银行对用户资金进行监督管理。<br>平台的每一位用户都将在存管银行的系统内拥有一个专属的交易资金管理账户，实现分账管理，用户网贷交易过程资金通过银行存管系统进行结算，标的信息也会在存管银行进行登记。
                    </p>
                </div>
                <div class="qa-item">
                    <div class="q img-size" data-fontSize="24"><span>●</span>银行存管优势</div>
                    <p>1、	没有资金池<br>用户在资金存管银行有专门的独立资金存管帐户，由资金存管银行对资金进行管理与监督，平台无法触碰用户资金。<br>2、	不触碰用户资金<br>用户账户信息由资金存管银行进行管理，资金交易均由用户授权银行才可操作执行。<br>3、	交易信息报送银行<br>资金交易环节均在银行系统中进行，银行根据合同约定及用户发出的交易指令，对交易流程进行管理并记录用户资金流水。</p>
                </div>
                <div class="qa-item">
                    <div class="q img-size" data-fontSize="24"><span>●</span>银行存管意义</div>
                    <p>1、积极拥抱监管<br>《网络借贷信息中介机构业务活动管理暂定办法》以及《网络借贷资金存管业务指引》发布后，银行存管成为衡量网贷平台合规性的首要标准。<br>2、资金安全升级<br>接入存管实现了用户资金与平台隔离，进一步保证资金安全。<br>3、提升平台实力<br>多融财富成功上线银行存管，全方位保障了用户的资金安全，进一步提升了平台的实力。</p>
                </div>
            </div>
            <div class="qa t1 img-size" data-paddingLeft="40" data-paddingRight="40" v-show="num==1">
                <div class="qa-item">
                    <div class="q"><span>●</span>银行存管上线后，有哪些银行卡支持绑定？</div>
                    <p>可支持15家银行进行绑卡或网银充值。包含：工商银行、农业银行、中国银行、建设银行、邮储银行、招商银行、兴业银行、广发银行、平安银行、中信银行、华夏银行、光大银行、浦发银行、民生银行、交通银行。</p>
                </div>
                <div class="qa-item">
                    <div class="q"><span>●</span>我现在绑定的卡不是存管银行支持的银行，怎么办？</div>
                    <p>如您绑定的卡不是存管银行所支持的银行卡，则请您联系客服提供资料，为您审核后解绑银行卡，更改成功后您可以继续进行开户/激活操作。</p>
                </div>
                <div class="qa-item">
                    <div class="q"><span>●</span>为什么我开户不成功？</div>
                    <p>开户过程中，由于银行存管与公安系统联网，将需要您提供实名身份信息，如实名身份信息不一致会导致无法通过。可能的原因包含但不限于：<br>（1）曾经改过名字；<br>（2）名字中带有繁体字；<br>（3）做过户籍变动；<br>（4）军人转业、复员换的身份证；<br>（5）港澳台用户；<br>（6）18周岁以下用户；<br>如开户未通过，请在08:30—20:30联系在线客服或拨打客服热线4006-908-896由客服人员为您查询确认。</p>
                </div>
                <div class="qa-item">
                    <div class="q"><span>●</span>如果操作过程中提示信息有误怎么办？</div>
                    <p>对接银行存管之后，多融财富和存管银行会对接您的信息，信息正确才可正常开通存管账户，若您的个人信息存在填写有误或不完善的情况，系统会提示您进行信息完善。若您的问题得不到解决，请在08:30—20:30联系在线客服或拨打客服热线400-690-8896由客服人员为您查询确认。</p>
                </div>
            </div>
            <div class="qa t2 img-size" data-paddingLeft="40" data-paddingRight="40" v-show="num==2">
                <div class="qa-item">
                    <div class="q"><span>●</span>为什么充值失败？</div>
                    <p>以下情况将会造成充值失败：<br>（1）您输入的银行卡号或交易密码错误；<br>（2）您的银行卡的余额不足导致充值失败；<br>（3）您的银行卡或已过期、作废、挂失；<br>（4）您的银行卡未开通网上银行，请前往银行柜台或通过银行官网进行开通；<br>（5）您的账户状态异常也可能失败，建议您完善您的账户信息；<br>（6）银行数据传输异常，导致订单超时等情况，需要刷新页面重新操作；<br>（7）超过银行充值限额，请联系银行查询及更改支付额度；<br>如非以上情况，请在08:30—20:30联系客服为您核查具体原因。</p>
                </div>
                <div class="qa-item">
                    <div class="q"><span>●</span>为什么PC上点击充值提现跳转到了其他网站？</div>
                    <p>接入银行存管后，多融财富不触碰用户资金，充值、提现交易是在银行存管的体系中完成。</p>
                </div>
            </div>
            <div class="qa t3 img-size" data-paddingLeft="40" data-paddingRight="40" v-show="num==3">
                <div class="qa-item">
                    <div class="q"><span>●</span>投资后什么时候开始计息？</div>
                    <p>从投资成功后的第二天开始计息。</p>
                </div>
                <div class="qa-item">
                    <div class="q"><span>●</span>存管上线后，还能使用优惠券吗？</div>
                    <p>可以正常使用。</p>
                </div>
            </div>
            <div class="qa t4 img-size" data-paddingLeft="40" data-paddingRight="40" v-show="num==4">
                <div class="qa-item">
                    <div class="q"><span>●</span>银行存管上线后，提现会有什么影响？</div>
                    <p>存管银行会在收到申请的当日受理，次日到账。</p>
                </div>
                <div class="qa-item">
                    <div class="q"><span>●</span>我刚申请提现，可以撤销吗？</div>
                    <p>由于提现申请是交给银行处理的，您成功提交提现申请后，暂不支持撤销提现申请。</p>
                </div>
                <div class="qa-item">
                    <div class="q"><span>●</span>提现申请显示：提现待处理是什么意思？</div>
                    <p>提现待处理可能有2种情况：<br>（1）您的这笔提现已提交银行，正在为您处理中；<br>（2）您的这笔提现未提交银行，稍后解冻后您可以再次发起申请。</p>
                </div>
                <div class="qa-item">
                    <div class="q"><span>●</span>为什么提现申请失败？</div>
                    <p>造成您提现失败的原因可能有以下几种：<br>
                        （1）未通过实名认证；<br>（2）未完成银行开户；<br>（3）银行卡开户人姓名和实名认证姓名不一致；<br>（4）银行开户行信息错误；<br>（5）银行账号/户名错误，或是账号和户名不符；<br>（6）使用信用卡提现；<br>（7）银行账户冻结或正在办理挂失；<br>如果遇到以上情况，银行将直接反馈转账失败的原因，您可以登录账户查询并完善您的相应信息，同时也将解除您的资金冻结，请您不必担心资金安全，稍后重新提交提现申请即可。</p>
                </div>
                <div class="qa-item">
                    <div class="q"><span>●</span>提现密码是什么？</div>
                    <p>提现密码是在提现时需要用到的密码，提现密码默认同您在您开户、激活时设置的交易密码。</p>
                </div>
            </div>
        </div>
        <div class="foot">
            <div class="qrcd">
                <img src="../../images/about/bankDepositManagement/qrcd-wechat.jpg" width="95%">
                <p>扫一扫</p>
                <p>关注微信服务号</p>
            </div>
            <div class="hotline">
                <p>如有疑问，请咨询客服热线：</p>
                <p>{{contactPhone}}</p>
                <p>（工作日08:30 — 20:30）</p>
            </div>
        </div>
    <div class="dialog-bg process" onclick="this.style.display='none';">
        <div class="content"></div>
    </div>

    <div class="dialog-bg huarui-bank" onclick="this.style.display='none';">
        <div class="content"></div>
    </div>
   </article>
</template>
<script>
    import COMPANYINFORMATION from "../../contant/GLOBAL";
    import Swiper from "../../../static/plug/swiper-3.4.2.jquery.min";
    export default {
        name: "bank-deposit-management",
        mounted(){
            this.setImgSize();
            this.setTitle({
                title:"存管操作指南",
                show:true,
                back:true,
                share:true,
                shareConfig:{
                    title:"存管操作指南",
                    link:window.location.href,
                    desc:"存管操作指南",
                    imgUrl:'',
                    type:'',
                    dataUrl:''
                }
            })
            this.setNav({
                show:false
            })
            new Swiper('.mobile1', {
                slidesPerView: 1,
                loop:true,
            });
            new Swiper('.mobile2', {
                slidesPerView: 1,
                loop:true,
            });
            new Swiper('.mobile3', {
                slidesPerView: 1,
                loop:true,
            });

        },
        data(){
            return{
                title:["存管攻略","常见问题","充值问题","投资问题","提现问题"],
                num:0,
                contactPhone:COMPANYINFORMATION.sever.contactPhone,
            }
        },
        methods:{
            onShowTradeProcess(){
                let self = this;
                require.ensure([], (require) => {
                    self.$requirePop(require('./pop/bankDepositManagementPop'), {
                            props: {} //弹窗内容相关属性
                        },
                        {
                            props: {//弹窗相关属性 同上面的 this.$Pop
                                obj: {
                                    title: "",
                                    close: false,//是否显示关闭按钮
                                    wrapper: "content-wrapper",
                                }
                            }
                        });
                });
            },
            toggle(item){
                this.num=item;
            }
        }
    }
</script>
