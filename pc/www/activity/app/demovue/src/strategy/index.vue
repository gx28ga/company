<style lang='sass'>
   @import '../style/global.scss'; 
    .strategy-box{
        background:#f0f0f0;
        font-family:"PingFangSC Medium";
       .banner{
        @include contain("../images/banner.jpg");
        position:relative;
        .inviteBth{
            @include contain("../images/inviteBth.png");
            position: absolute;
            .btn{
                display:block;
                width:100%;
                height:100%;
            }
        }
        .everyDay{
            @include contain("../images/every.png");
            position:absolute;
            text-align:center;
            color:#fb9d00;
            @include font-size(13px);
        }
        .first{
            text-align:center;
            position:absolute;
            @include font-size(13px);
            color:#fff868;
            @include contain("../images/first.png")
        }
       }
       .whatPrize{
        background:#f0f0f0;
        .prizeTitle{
            @include contain("../images/what.png");
            margin:0 auto;
        }
        .everyContent{
            @include font-size(11px);
            color:#333;
        }
         .everyTishi{
                @include font-size(9px);
                color:#666;
                .everyIcon{
                    display:inline-block;
                    @include contain("../images/littleIcon.png");
                }
            }
       }
       .everyDayTitle{
        @include contain("../images/hao.png");
        margin:0 auto;
       }
       .contentStrategy{
        .gongshi{
            @include contain("../images/gongshi1.png");
            margin:0 auto;
        }
        .example{
            color:#fa2535;
            text-align:center;
            font-family:"PingFangSC Thin";
            @include font-size(16px);
        }
        .exampleImg{
            @include contain("../images/gongshiexamlple.png");
            margin:0 auto;
        }
        .gongshiContent{
            border:$s1 dotted #fa2435;
            border-radius:$s20;
            text-align:center;
            margin:0 auto;
            color:#333;
             font-family:"PingFangSC Thin";
             @include font-size(9px);
        }
        .zhang{
            border:1px solid #dddddd;
            margin:0 auto;
             font-family:"PingFangSC Light";
             @include font-size(10px);
            color:#333;
            .fontColor{
                color:#f93746;
                @include font-size(9px);
                font-family:"PingFangSC Thin";
            }
        }
        .howInvite{
            background:#f0f0f0;
            .howInviteTitle{
                @include contain("../images/new.png");
                margin:0 auto;
            }
        }
        .progress{
            .progressList{
                position: relative;
                @include font-size(9px);
                color:#333;
                margin:0 auto;
                border:$s3 solid #fa2435;
                border-radius:$s15;
                .square{
                    position: absolute;
                    @include contain("../images/square.png");
                    @include font-size(15px);
                    color:#fa2435;
                    text-align:center;
                }
                .squareC{
                    position:absolute;
                    background:#fa2435;
                    color:#ffffff;
                    text-align:center;
                    border-radius:$s5;
                    @include font-size(12px);
                }
            }
            .tish{
               @include font-size(9px);
               text-align:center;
               color:#333;
                font-family:"PingFangSC Light";
            }
            .jian{
                @include contain("../images/jian.png");
                margin:0 auto;
            }
        }
           .title{
            color:#fa2c3d;
            @include font-size(16px);
            .titleIcon{
                @include contain("../images/bigIcon.png");
                display:inline-block;
            }
           }
           .invited{
            @include contain("../images/new2.png");
            margin:0 auto;
           }
           .gift{
            background:#fa2132;
            color:#fff;
            float: left;
            border-radius:$s10;
            @include font-size(12px);
            font-family:"PingFangSC Light";
            text-align:center;
            position: relative;
            .number{
                background:#fff;
                color:#fa2132;
                border-radius:50%;
                position: absolute;
                top:$s5;
                left:$s5;
            }
           }
           .titleContent{
                @include font-size(9px);
                color:#333333;

                .lillteIcon{
                    display:inline-block;
                    @include contain("../images/littleIcon.png");
                }
           }
           .inviteBtn{
            @include contain("../images/inviteBth.png");
            margin:0 auto;

           }
           .rateList{
            .rateTitle{
                 text-align:center;
            display:inline-block;
            }
            .rateContent{
                .rate{
                    background:#fdbfc4;
                    text-align:center;
                    display:inline-block;
                }
            }
            font-family:"PingFangSC Light";
            color:#333;
            @include font-size(9px);
           }


       }

    }
</style>

<template>
    <div class='strategy-box img-size'>
        <div class='banner img-size' data-height='629' data-width='750'>
            <div class="inviteBth img-size" data-width='369' data-height='103' data-left='200' data-bottom='140'><a class='btn' @click='go'></a></div>
            <div  class='everyDay img-size' data-width='214' data-height='64' data-left='25' data-bottom='0' data-paddingTop='12' @click='go'>每日佣金奖励</div>
            <div  class='first img-size' data-width='212' data-height='57' data-lineHeight='57' data-left='270' data-bottom='22' @click='goFirstMonth'>首月返现奖励</div>
            <div  class='first img-size' data-width='212' data-height='57' data-lineHeight='57' data-right='25'  data-bottom='22' @click='goTask'>邀请任务奖励</div>
        </div>
       <!--  什么是每日佣金奖励 -->
        <div class='whatPrize img-size' data-paddingTop='30' data-paddingLeft='65' data-paddingRight='65' data-paddingBottom='30'>
            <div class='prizeTitle img-size' data-width='383' data-height='51'  data-marginBottom='30'></div>
            <div class='everyContent img-size' data-lineHeight='38'>即日起，每成功邀请一位新用户注册并投资平台任意产品（除新手宝），即可获得佣金奖励。佣金奖励的多少，与邀请人投资待收、被邀请人投资待收、被邀请人数量有关。邀请的用户越多，投资待收金额越大，可获得的佣金就越多。佣金每日发放，无上限。</div>
            <div class='everyTishi img-size' data-><span class='everyIcon img-size' data-width='16' data-height='16' data-marginRight='10'></span>2017-08-31之前的邀请的好友，不享受任何邀请佣金奖励。</div> 
            <div class='everyTishi img-size'><span class='everyIcon img-size' data-width='16' data-height='16' data-marginRight='10'></span>待收指待回款的产品的本金，可至【账户】→【我的资产】查看</div>
        </div>
     <!--    每日佣金的计算方法 -->
     <div class='everyDayTitle img-size' data-width='381' data-height='51' data-marginTop='30' data-marginBottom='40'></div>
    
        <div class="contentStrategy img-size" data-paddingLeft='15' data-paddingRight='15' data-paddingBottom='50'>
         <!-- 佣金奖励计算公式 -->
            <div class="title img-size" data-marginTop='25' data-marginBottom='25'>
                <span class='titleIcon img-size' data-width='36' data-height='31' data-marginRight='15'></span>佣金奖励计算公式
            </div>
            <div class='gongshi img-size' data-width='554' data-height='134'></div>
            <div class='zhang img-size' data-width='640' data-paddingLeft='20' data-marginTop='20' style='border:none;'data-lineHeight='36'>* 每日佣金的实际发放，按每位好友待收所产生的佣金之和进行发放，与上述使用好友总待收公式计算所得，可能存在极小的误差，属于正常现象。
</div>
            <p class='example img-size' data-marginTop='50' data-height='60' data-lineHeight='60'>举个栗子</p> 
            <div class='exampleImg img-size' data-width='666' data-height='201'></div> 
            <div  class='gongshiContent img-size' data-width='485' data-height='50' data-lineHeight='50' data-marginTop='30'>每日佣金=0.7%x100,000/365=1.92元</div> 
            <div class='zhang img-size' data-width='640' data-height='155' data-paddingLeft='20' data-paddingTop='20' data-marginTop='50'>
                <p class='fontColor img-size' data-lineHeight='36'>算一笔帐：</p>
                <p class=' img-size' data-lineHeight='36'>用户B持有期间（即30天），用户A可获得<span class='fontColor img-size'>1.92*30=57.6元</span></p>
                <p class=' img-size' data-lineHeight='36'>假如用户A邀请了N个类似用户B的好友，那么每日佣金……</p>
                <p class=' img-size' data-lineHeight='36'>假如用户A的待收≥500000，佣金利率1.0%，那么每日佣金……</p>
            </div> 
            <div class="title img-size" data-marginTop='25' data-marginBottom='25'>
                <span class='titleIcon img-size' data-width='36' data-height='31' data-marginRight='15'></span>佣金奖励利率
            </div>
            <div class='rateList img-size'data-paddingLeft='85' data-paddingRight='85'>
                <div class='rateTitle img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'  >我的待收</div>
                <div class='rateTitle img-size' data-width='190' data-height='40' data-lineHeight='40'>佣金利率</div>
                <div class='rateContent img-size' data-marginBottom='5'>
                    <div class='rate img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'>待收＜5000</div>
                    <div class='rate img-size' data-width='190' data-height='40' data-lineHeight='40'>0.0%</div>
                </div>  
                 <div class='rateContent img-size' data-marginBottom='5'>
                    <div class='rate img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'>5000≤待收＜10000</div>
                    <div class='rate img-size' data-width='190' data-height='40' data-lineHeight='40'>0.4%</div>
                </div>
                <div class='rateContent img-size' data-marginBottom='5'>
                    <div class='rate img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'>10000≤待收＜20000</div>
                    <div class='rate img-size' data-width='190' data-height='40' data-lineHeight='40'>0.5%</div>
                </div>  
                 <div class='rateContent img-size' data-marginBottom='5'>
                    <div class='rate img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'>20000≤待收＜50000</div>
                    <div class='rate img-size' data-width='190' data-height='40' data-lineHeight='40'>0.6%</div>
                </div> 
                 <div class='rateContent img-size' data-marginBottom='5'>
                    <div class='rate img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'>50000≤待收＜100000</div>
                    <div class='rate img-size' data-width='190' data-height='40' data-lineHeight='40'>0.7%</div>
                </div>
                <div class='rateContent img-size' data-marginBottom='5'>
                    <div class='rate img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'>100000≤待收＜200000</div>
                    <div class='rate img-size' data-width='190' data-height='40' data-lineHeight='40'>0.8%</div>
                </div>  
                 <div class='rateContent img-size' data-marginBottom='5'>
                    <div class='rate img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'>200000≤待收＜500000</div>
                    <div class='rate img-size' data-width='190' data-height='40' data-lineHeight='40'>0.9%</div>
                </div> 
                <div class='rateContent img-size' data-marginBottom='5'>
                    <div class='rate img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'>待收≥500000</div>
                    <div class='rate img-size' data-width='190' data-height='40' data-lineHeight='40'>1.0%</div>
                </div>
            </div>
           <!--  如何邀请获取每日佣金 -->
            <div class='howInvite img-size' data-paddingTop='40'>
                <div class='howInviteTitle img-size' data-width='423' data-height='51' data-marginBottom='50'></div>
                   <div class="title img-size" data-marginTop='25' data-marginBottom='25'>
                <span class='titleIcon img-size' data-width='36' data-height='31' data-marginRight='15'></span>邀请流程
            </div>
            <div class='progress img-size'>
                <div class='progressList img-size' data-paddingLeft='125' data-width='400' data-height='90'>
                    <div class='square img-size' data-width='54' data-height='54' data-lineHeight='54' data-top='-29' data-left='-29'>1</div>
                    <div class='squareC img-size' data-width='73' data-height='45' data-lineHeight='45' data-top='25' data-left='25'>邀请</div>
                    <p class='img-size'  data-lineHeight='35' data-marginTop='10' data-marginLeft='-15'>通过邀请人分享出来的邀请链接/微信等完成<br>注册或注册时填写邀请人手机号完成注册</p>
                </div>
                <div class='jian img-size' data-width='41' data-height='26' data-marginTop='15' data-marginBottom='10'></div>
                  <div class='progressList img-size' data-paddingLeft='125' data-width='400' data-height='90'>
                    <div class='square img-size' data-width='58' data-height='54' data-lineHeight='54' data-top='-29' data-left='-29'>2</div>
                    <div class='squareC img-size' data-width='73' data-height='45' data-lineHeight='45' data-top='25' data-left='25'>投资</div>
                    <p class='img-size' data-height='35' data-lineHeight='35' data-marginTop='10' data-marginLeft='-15'>被邀请人在注册后完成任意一笔投资<br>（除新手宝）</p>
                </div>
                <div class='jian img-size' data-width='41' data-height='26' data-marginTop='15' data-marginBottom='10'></div>
                <div class='progressList img-size' data-paddingLeft='125' data-width='400' data-height='90'>
                    <div class='square img-size' data-width='54' data-height='54' data-lineHeight='54' data-top='-29' data-left='-29'>3</div>
                    <div class='squareC img-size' data-width='73' data-height='45' data-lineHeight='45' data-top='25' data-left='25'>发放</div>
                    <p class='img-size' data-height='35' data-lineHeight='35' data-marginTop='10' data-marginLeft='-15'>投资生效后，按佣金计算公式，每日发放<br>上一日佣金，直接发放至账户余额</p>
                </div>
                <div class="img-size tish" data-marginTop='30' data-marginBottom='40' >*如上一日不满足获取佣金奖励的条件，（见上述规则），则当日佣金为0</div>
            </div>
            </div>
           <!--  被邀请人有什么福利 -->
          <!--  <div class='invited img-size' data-width='383' data-height='51'></div>
              <div class="title img-size" data-marginTop='25' data-marginBottom='25'>
               <span class='titleIcon img-size' data-width='36' data-height='31' data-marginRight='15'></span>被邀请人奖励
           </div>
           <div class='titleContent img-size' data-paddingRight='15' data-paddingLeft='15' data-marginBottom='30'>
           </div>
           <div class="gift img-size" data-width='200' data-height='120' data-marginRight='150' data-marginLeft='50' data-marginBottom='65'>
               <div class='number img-size' data-width='25' data-height='25' data-lineHeight='25'>1</div>
               <p class='img-size' data-height='40' data-lineHeight='40' data-marginTop='20'>10,000元<br>理财金</p>
           </div> 
             <div class="gift img-size" data-width='200' data-height='120'  data-marginBottom='65'>
               <div class='number img-size' data-width='25' data-height='25' data-lineHeight='25'>2</div>
               <p class="img-size" data-height='120' data-lineHeight='120'>翻倍券</p>
           </div>   
           <div class="gift img-size" data-width='195' data-height='125' data-marginRight='150' data-marginLeft='150'  data-marginBottom='65'>
               <div class='number img-size' data-width='25' data-height='25' data-lineHeight='25'>3</div>
               <p class='img-size' data-height='40' data-lineHeight='40' data-marginTop='20'>2%<br>加息券</p>
           </div> 
           <div class="gift img-size" data-width='195' data-height='125'>
               <div class='number img-size' data-width='25' data-height='25' data-lineHeight='25'>4</div>
               <p class='img-size' data-height='40' data-lineHeight='40' data-marginTop='20'>1588 <br>红包</p>
           </div> -->
            <div style='clear:both'></div>
            <div class="inviteBtn img-size" data-width='369' data-height='103' ><a  class='btn img-size'data-width='369' data-height='103' @click='go' style='display:block;'></a></div>
        </div>

    </div>
</template>
<script>
import requirePop from "../pop/requirePop.js";
    export default{
        mounted(){
            T.setImgSize();
        },
        methods:{
            go(){
                if(!T.uid){
                    requirePop('login',{
                        props : {
                            transition : 'rotate3d'
                         }
                    })
                }else{
                    router.push("/main")
                }
            },
            goFirstMonth(){
                  if(!T.uid){
                    requirePop('login',{
                        props : {
                            transition : 'rotate3d'
                         }
                    })
                }else{
                    router.push("/hesitory")
                }
            },
            goTask(){
                 if(!T.uid){
                    requirePop('login',{
                        props : {
                            transition : 'rotate3d'
                         }
                    })
                }else{
                    router.push("/earn")
                } 
            }
        }
    }
</script>
