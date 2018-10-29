<style scoped>
@import '../style/global';
.enrollBox{
    .banner{
    @mixin contain '../images/invite.jpg';
    background-color:#fff;
    position:relative; z-index:1;

    .inviteBtn{ 
        position:absolute;
        text-align:center; color:#fff;
        display: block;

    }
    .look{
        position: absolute;
        text-align: center;
        color:#9237dc;
        display: block;
    }
}
.Investment{
    background:-webkit-linear-gradient(top,#fede45 , #ee2c2c);
   /* display:flex;*/
   /* align-items:center;
    justify-content:center;*/
    .inviteCon{
        border:3px solid #a17afe;
        border-radius:20px; 
        position: relative;
        background: #fff9df;
        margin:0 auto;
        display: block;
        .inviteTitle{
            @mixin contain '../images/title.png';
            position: absolute;
            color:#ffffff;
            text-align: center;
            font-weight: bold;
            z-index:2;
        }
        .con{
           color:#ff495b;
        }
        .gongshi{
            color:#ff495b;
            font-weight: bold;
        }
        .rateTitle{
            color:#ff495b;
            font-weight: bold;
        }
        .daishou{
            margin:0 auto;
            color:#cf6100;
            .daishouTitleLeft{
                text-align: center;
                float: left;
            }
            .daishouC{
                text-align: center;
                background: #f7d6a2;
                float: left;

            }
        }
        .inviteContent{
            background: #fff;
            border-radius:5px;
            margin:0 auto;
            box-shadow: 0px 0px 10px #ffece9 ;
            color:#cf6100;
            position: relative;
            .example{
                color:#ff495b;
            }
            .exampleImg{
                @mixin contain "../images/exampleImg.png";
                margin:0 auto;
            }
            .gongshiCon{
                text-align: center;
                border: 1px dotted #ff5364;
                border-radius:25px;
                margin:30px auto;
                color:#ff5364;
            }
            .zhang{
                border:1px solid #dddddd;
            }

            .topCon{
                color:#cf6100;
                .zhong{
                    font-weight: bold;
                    color:#ff495b;
                }
            }
            .fanxian{
                @mixin contain "../images/fanxian.png";
                margin:0 auto;
            }
            .invest{
                text-align: center;
                color:#6d3c11;
                position: absolute;
            }
            .man{
                @mixin contain "../images/content.png";
            }
            .yaoqing{
               color:#6d3c11;
               text-align: center;
               position: absolute;
            }
            .yaoqingImg{
                @mixin contain "../images/hongbao.png";
                position: absolute;
                color:#fff;
                text-align: center;
            }
            .explain{
                color:#cf6100;
                margin:0 auto;
                position: absolute;
            }
        }
    } 
}
        .footer{
            position:fixed; z-index:2;
            background:-webkit-linear-gradient(top ,#c937d0,#954cd4);
            bottom:0;  
            color:#fff;
            font-family: "MFMingHei_Noncommercial Regular";
            text-align: center;
            opacity: 0.8;   

}
}

</style>
<template>
<div class='enrollBox index' >
    <div class='banner img-size' data-height='1036' data-width='750'>
        <a class='inviteBtn img-size' data-bottom='30' data-width='450' data-height='130' data-left='135'  @click='inviteFriend'></a>
         <!--  <vue-q-art :config="config" class='img-size' data-width='240' data-height='240' style='position:absolute;' data-top='440' data-left='175'></vue-q-art> -->
      <!-- <img src="http://pan.baidu.com/share/qrcode?w=150&h=150&url=http://lanyes.org 
     ">   -->
      <img :src="url" alt="" class='img-size' data-width='400' data-height='400' style='position:absolute;' data-top='440' data-left='175'>
        <a class='look img-size' style='text-align:center' data-bottom='-20' data-left='230' @click='gologin'>查看我的邀请奖励&gt;</a>
    </div>
    <div class='Investment img-size biao' data-paddingTop='80' data-paddingBottom='50'>
        <div class='inviteCon img-size' data-width='710' data-height='580'>
    <div class='inviteTitle img-size' data-fontSize='42' data-top='-45' data-width='625' data-height='135' data-lineHeight='135' data-left='42'>邀请奖励</div>
    <div class='img-size con' data-fontSize='32' data-marginTop='105' data-paddingLeft='20' data-height='80' data-lineHeight='80'>· 邀友越多，奖励越多</div>
    <div class='inviteContent img-size' data-width='620' data-height='380' data-paddingLeft='25' data-paddingRight='25'>
        <p class='img-size' data-fontSize='30' data-height='70' data-lineHeight='70'>好友首投≥5000</p>
        <div class='man img-size' data-width='621' data-height='70'></div>
        <div class='yaoqing img-size' data-width='112' data-height='40' data-lineHeight='40'  data-top='150' data-left='35' data-fontSize='20'>邀请1人</div>
        <div class='yaoqingImg img-size' data-width='112' data-height='58' data-lineHeight='58' data-top='200' data-left='35'>10元</div>
        <div class='yaoqing img-size' data-width='112' data-height='40' data-lineHeight='40'  data-top='150' data-left='195' data-fontSize='20'>邀请3人</div>
        <div class='yaoqingImg img-size' data-width='112' data-height='58' data-lineHeight='58' data-top='200' data-left='195'>50元</div>
        <div class='yaoqing img-size' data-width='112' data-height='40' data-lineHeight='40'  data-top='150' data-left='360' data-fontSize='20'>邀请6人</div>
        <div class='yaoqingImg img-size' data-width='112' data-height='58' data-lineHeight='58' data-top='200' data-left='360'>80元</div>
        <div class='yaoqing img-size' data-width='112' data-height='40' data-lineHeight='40'  data-top='150' data-left='525' data-fontSize='20'>邀请10+</div>
        <div class='yaoqingImg img-size' data-width='112' data-height='58' data-lineHeight='58' data-top='200' data-left='525'>100元</div>
        <div class='img-size explain' data-lineHeight='35' data-fontSize='24' data-width='620'  data-bottom='35'>* 可累计获得。例如：每月成功邀请10人，可获得10+50+80+100=240元</div>
    </div>
</div>
          <div class='inviteCon img-size' data-width='710' data-height='690' data-marginTop='80'>
    <div class='inviteTitle img-size' data-fontSize='42' data-top='-45' data-width='625' data-height='135' data-lineHeight='135' data-left='42'>首月返现</div>
    <div class='img-size con' data-fontSize='32' data-marginTop='105' data-paddingLeft='20' data-height='80' data-lineHeight='80'>· 好友投资越多，可获返现越多</div>
    <div class='inviteContent img-size' data-width='620' data-height='475' data-paddingLeft='25' data-paddingRight='25' data-paddingTop='25'>
        <p class='img-size topCon' data-fontSize='24'  data-lineHeight='34'>好友注册后<span class='zhong'>30天内</span>进行投资，您将获得每笔投资收益的<span class='zhong'>15%</span>的返现奖励</p>
        <div class='fanxian img-size' data-width='502' data-height='173'  data-marginTop='35'></div>
        <div class='invest img-size' data-fontSize='20' data-top='310' data-left='75' data-width='245' >投资10万365天产品<br>
（按12%计算收益）</div>
        <div class='invest img-size' data-top='310' data-left='340' data-lineHeight='25' data-fontSize='20' data-width='245'>15%的好友投资<br>
收益返现</div>
        <div class='invest img-size' data-fontSize='20'></div>
        <div class='img-size explain' data-lineHeight='35' data-fontSize='24' data-width='620'  data-bottom='35'>* 好友投资产品使用的红包，加息券等任何福利产生的收益，不计入投资收益之中，不享受投资收益返现</div>
          </div>
          </div>
        <!--   每日佣金 -->
    <div class='inviteCon img-size' data-width='710' data-marginTop='80' data-marginBottom='80' data-paddingBottom='30'>
    <div class='inviteTitle img-size' data-fontSize='42' data-top='-45' data-width='625' data-height='135' data-lineHeight='135' data-left='42'>每日佣金</div>
    <div class='img-size con' data-fontSize='32' data-marginTop='105' data-paddingLeft='20' data-height='80' data-lineHeight='80'>· 一次邀请，天天拿佣金</div>
    <div class='gongshi img-size' data-height='75' data-lineHeight='75'  data-fontSize='30' data-paddingLeft='25'>每日佣金= 佣金利率 * 好友总待收 / 365</div>
    <div class='gongshi img-size' data-fontSize='24' data-paddingLeft='20' data-paddingRight='20' data-paddingBottom='20' style='color:#333;font-weight:400'>* 每日佣金的实际发放，按每位好友待收所产生的佣金之和进行发放，与上述使用好友总待收公式计算所得，可能存在极小的误差，属于正常现象。</div>
    <div class='inviteContent img-size' data-width='620'  data-paddingLeft='25' data-paddingRight='25' data-paddingTop='25'>
        <div class='example img-size' data-fontSize='24'>举个栗子</div>
        <div class='exampleImg img-size' data-width='623' data-height='198' data-marginBottom='30' data-marginTop='20'></div>
        <div class='gongshiCon img-size' data-width='520' data-height='55' data-fontSize='24' data-lineHeight='55'>每日佣金=0.7%x100,000/365=1.92元</div>
        <div class='zhang img-size' data-width='580' data-paddingLeft='20' data-paddingRight='20' data-paddingBottom='20'>
            <div class='img-size' data-fontSize='24' data-lineHeight='40' style='color:#ff5364'>算一笔账：</div>
            <div class='zhangCon img-size' data-lineHeight='32' data-fontSize='20'>
                用户B持有期间（即30天），用户A可获得<span style='color:#ff5364'>1.92*30=57.6元</span><br>
                假如用户A邀请了N个类似用户B的好友，那么每日佣金……<br>
                假如用户A的待收≥500000，佣金利率1.0%，那么每日佣金……
            </div>
        </div>
    </div>
    <div class='rateTitle img-size' data-paddingLeft='45' data-paddingTop='30'>佣金奖励利率</div>
    <!-- 我的待收 -->
    <div class='daishou img-size' data-width='526'>
        <div>
            <div class='daishouTitleLeft img-size' data-fontSize='24'data-width='315' data-height='42' data-lineHeight='42' data-marginRight='18'>我的待收</div>
            <div class='daishouTitleLeft img-size' data-fontSize='24'data-width='190' data-height='42' data-lineHeight='42'>佣金利率</div>
            <div style='clear:both'></div>
        </div> 
         <div class='img-size' data-marginBottom='10'>
            <div class='daishouC img-size' data-fontSize='24' data-width='315' data-height='42' data-lineHeight='42' data-marginRight='18'>待收＜5000</div>
            <div class='daishouC img-size' data-fontSize='24' data-width='190' data-height='42' data-lineHeight='42'>0.0%</div>
            <div style='clear:both'></div>
        </div>
        <div class='img-size' data-marginBottom='10'>
            <div class='daishouC img-size' data-fontSize='24' data-width='315' data-height='42' data-lineHeight='42' data-marginRight='18'>5000≤待收＜10000</div>
            <div class='daishouC img-size' data-fontSize='24' data-width='190' data-height='42' data-lineHeight='42'>0.4%</div>
            <div style='clear:both'></div>
        </div>
        <div class='img-size' data-marginBottom='10'>
            <div class='daishouC img-size' data-fontSize='24' data-width='315' data-height='42' data-lineHeight='42' data-marginRight='18'>10000≤待收＜20000</div>
            <div class='daishouC img-size' data-fontSize='24' data-width='190' data-height='42' data-lineHeight='42'>0.5%</div>
            <div style='clear:both'></div>
        </div>
        <div class='img-size' data-marginBottom='10'>
            <div class='daishouC img-size' data-fontSize='24' data-width='315' data-height='42' data-lineHeight='42' data-marginRight='18'>20000≤待收＜50000</div>
            <div class='daishouC img-size' data-fontSize='24' data-width='190' data-height='42' data-lineHeight='42'>0.6%</div>
            <div style='clear:both'></div>
        </div> 
        <div class='img-size' data-marginBottom='10'>
            <div class='daishouC img-size' data-fontSize='24' data-width='315' data-height='42' data-lineHeight='42' data-marginRight='18'>50000≤待收＜100000</div>
            <div class='daishouC img-size' data-fontSize='24' data-width='190' data-height='42' data-lineHeight='42'>0.7%</div>
            <div style='clear:both'></div>
        </div>
        <div class='img-size' data-marginBottom='10'>
            <div class='daishouC img-size' data-fontSize='24' data-width='315' data-height='42' data-lineHeight='42' data-marginRight='18'>100000≤待收＜200000</div>
            <div class='daishouC img-size' data-fontSize='24' data-width='190' data-height='42' data-lineHeight='42'>0.8%</div>
            <div style='clear:both'></div>
        </div>
        <div class='img-size' data-marginBottom='10'>
            <div class='daishouC img-size' data-fontSize='24' data-width='315' data-height='42' data-lineHeight='42' data-marginRight='18'>200000≤待收＜500000</div>
            <div class='daishouC img-size' data-fontSize='24' data-width='190' data-height='42' data-lineHeight='42'>0.9%</div>
            <div style='clear:both'></div>
        </div>
        <div class='img-size' data-marginBottom='10'>
            <div class='daishouC img-size' data-fontSize='24' data-width='315' data-height='42' data-lineHeight='42' data-marginRight='18'>待收≥500000</div>
            <div class='daishouC img-size' data-fontSize='24' data-width='190' data-height='42' data-lineHeight='42'>1.0%</div>
            <div style='clear:both'></div>
        </div>
       
    </div>
    </div>
    </div>
  <div class='footer img-size' data-height='100' data-lineHeight='100' data-width='750' data-fontSize='64' @click='inviteFriend'>
    邀请好友
    </div>
</div>

</template>
<script>
import requirePop from '../pop/requirePop.js';
import {mapState} from 'vuex';
import {MyFriend} from "../common/URL.js";
import store from '../store';
    export default {
        store,
        computed:{
            ...mapState([
                'userCoin'
            ])
        },
              data(){
            return {
                tel : '',
                isTel : false,
                recommCode:"",
                url:''
            }
        },
        components:{
      
        },
        mounted(){
            T.init();
            if(!T.uid){
                 requirePop('tel',{
                props : {
                    transition : 'fadeIn'
                }
            })
            }else{
                T.ajax({
                    url:MyFriend,
                    data:{uid:T.uid,pageOn:1,pageSize:10},
                    callback:true
                }).then(data=>{
                    this.recommCode=data.map.recommCodes;
                    this.url="http://b.bshare.cn/barCode?site=weixin&url=http://www.duorongcf.com/activity/app/enroll?recommCode="+ this.recommCode;
                })
            }
            T.setImgSize();
         $(window).on('scroll', function() { 
            var scrollTop = $(window).scrollTop();  
            if(scrollTop > $('.biao').offset().top) {         
                $('.footer').show();
                scrollTop = 0;
            } else {
                $('.footer').hide();
            }
         });
        function show(){
            $('.footer').hide();
        }
        show(); 
        },
    
        methods : {
            gologin(){
                if(!T.uid){
                    T.login();
                }else{

                T.callApp.invite(); 
                }
            },
          /*  renderWidth(){
            var canWidth=$(" #can canvas");
            var can=$("#can").width();
             this.config.size=can;
                },*/
            inviteFriend(){
                 var urlCode = {
                 page: 38,
                title: '送你1588元红包和12%安全好收益，多融财富亲测靠谱！',
                content: '您的好友邀您领取1588元现金红包奖励，和Ta一起赚更多的钱！',
                pic: 'http://www.duorongcf.com/activity/app/huaruiBank/images/logo.png',
                src: 'http://www.duorongcf.com/activity/app/enroll?recommCode='+this.recommCode
                }
             var Title = encodeURIComponent(urlCode.title);
             var Content = encodeURIComponent(urlCode.content);
            var appUrl = "jump://page=38?title=" + encodeURIComponent(urlCode.title) + "&content=" + encodeURIComponent(urlCode.content) + "&pic=" + encodeURIComponent(urlCode.pic) + "&src=" + encodeURIComponent(urlCode.src);
                window.location.href = appUrl;
            }
           
        }
    }
</script>
