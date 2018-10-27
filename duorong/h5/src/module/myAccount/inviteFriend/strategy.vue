/**
* describe
* Created by wangCuiqing
* Date: 2018/4/14
*/
<style scoped>
    .strategy{
        .strategyBanner{
            background:url("../../../images/account/inviteFriend/banner.jpg") no-repeat;
            background-size:contain;
            position: relative;
            .inviteBtn{
                background:url("../../../images/account/inviteFriend/inviteBth.png") no-repeat;
                background-size:contain;
                margin:0 auto;
                position: absolute;
            }
            .every{
                background:url("../../../images/account/inviteFriend/every.png") no-repeat;
                background-size:contain;
                text-align: center;
                color:#fb9d00;
            }
            .btnLink{
                background:url("../../../images/account/inviteFriend/first.png") no-repeat;
                background-size:contain;
                text-align: center;
                color:#fffb67;
            }
            .btnList{
                display:flex;
                position: absolute;
                bottom:0;
                .btn{
                    flex:1;
                }
            }
        }
        .strategyCon1{
            background:#f0f0f0;
            color:#333;
            text-align: justify;
            .title1{
                background:url("../../../images/account/inviteFriend/what.png") no-repeat;
                background-size:contain;
                margin:0 auto;
            }
            .title3{
                background:url("../../../images/account/inviteFriend/new.png") no-repeat;
                background-size:contain;
                margin:0 auto;
            }
        }
        .strategyCon2{
            background:#ffffff;
            .title2{
                background:url("../../../images/account/inviteFriend/hao.png") no-repeat;
                background-size:contain;
                margin:0 auto;
            }
        }
        .littleIcon{
            background:url("../../../images/account/inviteFriend/littleIcon.png") no-repeat;
            background-size:contain;
            display:inline-block;
        }
        .bigIcon{
            background:url("../../../images/account/inviteFriend/bigIcon.png") no-repeat;
            background-size:contain;
            display:inline-block;
        }
        .littleFont{
            color:#666;
        }
        .gongshi{
            color:#fa2c3d;
        }
        .gongshibg{
            background:url("../../../images/account/inviteFriend/gongshi1.png") no-repeat;
            background-size:contain;
            margin:0 auto;
        }
        .example{
            text-align: center;
            color:#fa2535;
        }
        .user{
            background:url("../../../images/account/inviteFriend/gongshiexamlple.png") no-repeat;
            background-size:contain;
            margin:0 auto;
        }
        .jisuan{
            border:1px dotted #fa2535;
            text-align: center;
            border-radius:25px;
            color:#333;
            margin:0 auto;
        }
        .explain{
            color:#333;
        }
        .zhang{
            border:0.5px solid #dddddd;
            margin:0 auto;
            color:#333;
            .fontColor{
                color:#f93746;
            }
        }
        .rateList{
            color:#333;
            .rateTitle{
                text-align: center;
                display:inline-block;
            }
            .rateContent{
                .rate{
                    background:#fdbfc4;
                    text-align:center;
                    display:inline-block;
                }
            }
        }
        .progress{
            .progressList{
                position: relative;
                color:#333;
                margin:0 auto;
                border:3px solid #fa2435;
                border-radius:15px;
                .square{
                    position:absolute;
                    background:url("../../../images/account/inviteFriend/square.png") no-repeat;
                    background-size:contain;
                    color:#fa2435;
                    text-align: center;
                }
                .squareC{
                    position:absolute;
                    background:#fa2435;
                    color:#ffffff;
                    text-align:center;
                    border-radius:5px;
                }

            }
            .tishi{
                text-align:center;
                color:#333;
            }
            .jian{
                background:url("../../../images/account/inviteFriend/jian.png") no-repeat;
                background-size:contain;
                margin:0 auto;
            }
        }
        .inviteBottomBtn{
            background:url("../../../images/account/inviteFriend/inviteBth.png") no-repeat;
            background-size:contain;
            margin:0 auto;
        }
    }

</style>
<template>
    <article class="strategy img-size">
        <div class="strategyBanner img-size" data-width="750" data-height="629">
            <div class="inviteBtn img-size" data-width="369" data-height="103" data-top="387" data-left="191"  @click="goInviteFriend"></div>
            <div class="btnList" data-height="80" data-width="750">
                 <div class="btn every img-size" data-width="214" data-height="60" data-paddingTop="14" data-marginLeft="27" data-marginRight="32">每日佣金奖励</div>
                 <div class="btn btnLink img-size" data-width="212" data-height="57" data-lineHeight="57" data-marginRight="32" @click="goFirstMonthReturn">首月返现奖励</div>
                 <div class="btn btnLink img-size" data-width="212" data-height="57" data-lineHeight="57" @click="goInviteTask">邀请任务奖励</div>
            </div>
        </div>
        <div class="strategyCon1 img-size" data-fontSize="24" data-paddingLeft="65" data-paddingRight="65" data-paddingBottom="30">
            <div class="title1 img-size" data-width="383" data-height="51" data-marginTop="30" data-marginBottom="30"></div>
            <div class="everyContent img-size" data-lineHeight="38">即日起，每成功邀请一位新用户注册并投资平台任意产品（除新手宝），即可获得佣金奖励。佣金奖励的多少，与邀请人投资待收、被邀请人投资待收、被邀请人数量有关。邀请的用户越多，投资待收金额越大，可获得的佣金就越多。佣金每日发放，无上限。            </div>
            <div class="img-size littleFont" data-fontSize="18" data-lineHeight="32">
                <span class="littleIcon img-size" data-width="16" data-height="16" data-marginRight="10"></span>
                2017-08-31之前的邀请的好友，不享受任何邀请佣金奖励。
            </div>
            <div class="img-size littleFont" data-fontSize="18" data-lineHeight="32">
                <span class="littleIcon img-size" data-width="16" data-height="16" data-marginRight="10"></span>
                待收指待回款的产品的本金，可至【账户】→【我的资产】查看
            </div>
        </div>
        <div class="strategyCon2 img-size" data-paddingTop="34">
            <div class="title2 img-size" data-width="383" data-height="51" data-marginBOTTOM="55"></div>
            <div class="gongshi img-size" data-fontSize="24" data-paddingLeft="18">
                <span class="bigIcon img-size" data-width="36" data-height="31"></span>
                佣金奖励计算公式
            </div>
            <div class="gongshibg img-size" data-width="554" data-height="134" data-marginTop="55" data-marginBottom="35"></div>
            <div class="explain img-size" data-paddingLeft="20" data-lineHeight="36" data-fontSize="20" data-width="640" data-marginLeft="20">* 每日佣金的实际发放，按每位好友待收所产生的佣金之和进行发放，与上述使用好友总待收公式计算所得，可能存在极小的误差，属于正常现象。</div>
            <div class="example img-size" data-fontSize="32">举个栗子</div>
            <div class="user img-size" data-width="666" data-height="201" data-marginTop="35" data-marginBottom="35"></div>
            <div class="jisuan img-size" data-fontSize="20" data-width="485" data-height="50" data-lineHeight="50">每日佣金=0.7%x100,000/365=1.92元</div>
            <div class="zhang img-size" data-fontSize="20" data-width="640" data-height="155" data-paddingLeft="20" data-paddingTop="20" data-marginTop="50" data-marginBottom="50">
                <p class="fontColor img-size" data-fontSize="18">算一笔帐：</p>
                <p class="img-size" data-lineHeight="36">用户B持有期间（即30天），用户A可获得<span class='fontColor img-size'>1.92*30=57.6元</span></p>
                <p class=' img-size' data-lineHeight='36'>假如用户A邀请了N个类似用户B的好友，那么每日佣金……</p>
                <p class=' img-size' data-lineHeight='36'>假如用户A的待收≥500000，佣金利率1.0%，那么每日佣金……</p>
            </div>
            <div class="gongshi img-size" data-fontSize="24" data-paddingLeft="18" data-marginBottom="25">
                <span class="bigIcon img-size" data-width="36" data-height="31"></span>
                佣金奖励利率
            </div>
            <div class="rateList img-size" data-paddingLeft="85" data-paddingRight="85" data-paddingBottom="65">
                <div class='rateTitle img-size' data-width='310' data-height='40' data-lineHeight='40' data-marginRight='20'>
                    我的待收</div>
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
        </div>
        <div class="strategyCon1 img-size" data-paddingTop="40" data-paddingBottom="60">
            <div class="title3 img-size" data-width="423" data-height="51" data-marginBottom="45"></div>
            <div class="gongshi img-size" data-fontSize="24" data-paddingLeft="18" data-marginBottom="50">
                <span class="bigIcon img-size" data-width="36" data-height="31"></span>
                邀请流程
            </div>
            <div class='progress img-size'>
                <div class='progressList img-size' data-paddingLeft='125' data-width='400' data-height='90'>
                    <div class='square img-size'  data-fontSize="30" data-width='54' data-height='54' data-lineHeight='54' data-top='-29' data-left='-29'>1</div>
                    <div class='squareC img-size' data-fontSize="24" data-width='73' data-height='45' data-lineHeight='45' data-top='25' data-left='25'>邀请</div>
                    <p class='img-size'  data-lineHeight='35' data-marginTop='10' data-marginLeft='-15' data-fontSize="18">通过邀请人分享出来的邀请链接/微信等完成<br>注册或注册时填写邀请人手机号完成注册</p>
                </div>
                <div class='jian img-size' data-width='41' data-height='26' data-marginTop='15' data-marginBottom='10'></div>
                <div class='progressList img-size' data-paddingLeft='125' data-width='400' data-height='90'>
                    <div class='square img-size' data-fontSize="30" data-width='58' data-height='54' data-lineHeight='54' data-top='-29' data-left='-29'>2</div>
                    <div class='squareC img-size' data-fontSize="24" data-width='73' data-height='45' data-lineHeight='45' data-top='25' data-left='25'>投资</div>
                    <p class='img-size' data-height='35' data-lineHeight='35' data-marginTop='10' data-marginLeft='-15' data-fontSize="18">被邀请人在注册后完成任意一笔投资<br>（除新手宝）</p>
                </div>
                <div class='jian img-size' data-width='41' data-height='26' data-marginTop='15' data-marginBottom='10'></div>
                <div class='progressList img-size' data-paddingLeft='125' data-width='400' data-height='90'>
                    <div class='square img-size' data-fontSize="30" data-width='54' data-height='54' data-lineHeight='54' data-top='-29' data-left='-29'>3</div>
                    <div class='squareC img-size'  data-fontSize="24" data-width='73' data-height='45' data-lineHeight='45' data-top='25' data-left='25'>发放</div>
                    <p class='img-size' data-height='35' data-lineHeight='35' data-marginTop='10' data-marginLeft='-15' data-fontSize="18">投资生效后，按佣金计算公式，每日发放<br>上一日佣金，直接发放至账户余额</p>
                </div>
                <div class="img-size tishi" data-marginTop='30' data-marginBottom='40' data-fontSize="18">*如上一日不满足获取佣金奖励的条件，（见上述规则），则当日佣金为0</div>
            </div>
            <div class="inviteBottomBtn img-size" data-width="369" data-height="103" @click="goInviteFriend"></div>
        </div>
    </article>
</template>

<script>
    export default {
        data(){
            return{}
        },
        mounted(){
            this.setTitle({
                show: true,
                title: "邀请好友攻略",
                back: true,
            });
            this.setNav({
                show : false
            });
            this.setImgSize();
        },
        methods:{
            goInviteFriend(){//跳转每日佣金
                this.go().myAccount.inviteFriend.dailyCommission();
            },
            goInviteTask(){
                this.go().myAccount.inviteFriend.task();
            },
            goFirstMonthReturn() {//邀请好友首月投资返现
                this.go().myAccount.inviteFriend.firstMonthReturn();
            },
        }
    }
</script>
