<style scoped>
/* @import "../style/swiper.css"; */
.swiper-container {
    width: 100%;
    height: 100%;
    .swiper-slide{
        background:#161f34;
        position:relative;
        color:#fff;
        .number{
            background:url("../images/number1.jpg") no-repeat;
            background-size: contain;
            width: 100%;
           height: 100%;
        }
        img{
            width: 100%;
            height: 100%;
        }
        .alcenter{
            text-align:center;
        }
        .colorWhite{
            color:#fff;
        }
        .colorYellow{
            color:#ffe383;
        }
        .fongBlod{
            font-weight:700;
        }
        .numTitle{
            font-weight:700;
        }
        .title1Color{
            color:#ffa800;
        }
        .title2Color{
            color:#ff4200;
        }
        .title3Color{
            color:#00e4cc;
        }
        .title4Color{
            color:#00be6b;
        }
        .title5Color{
            color:#ffb55d;
        }
        .title6Color{
            color:#ffd800;
        }
         .title7Color{
            color:#ffe194;
        }
        .jiezhi{
            @include font-size(12px);
        }
        .totalIcon{
            margin:0 auto;
        }
        .totalFont{
            @include font-size(16px);
            color:#ea9b08;
        }
        .top10{
            margin:0 auto;
            .top10Img{
                background: url("../images/top10.png") no-repeat;
                background-size: contain;
                display:inline-block;
            }
            .ten{
                font-weight:700;
                @include font-size(22px);
                color:#ffe383;
            }
        }
        .map{
            background: url("../images/map.png") no-repeat;
            background-size: contain;
            position:absolute;
        }
        .chart{
            position:absolute;
            margin:0 auto;
        }
        .person{ 
            @include font-size(12px);
            color:#fff;
            .manImg{
                background: url("../images/bigman.png") no-repeat;
                background-size: contain;
                margin: 0 auto;
            }
            .womanImg{
                background: url("../images/bigwoman.png") no-repeat;
                background-size: contain;
                margin:0 auto;
            }
            .manFont{
                @include font-size(16px);
                color:#63bcff;
                text-align:center;
            }
            .womanFont{
                @include font-size(16px);
                color:#ff91b7;
                text-align:center;
            }
            .littlePerson{
                float: left;
                text-align:center;
                .littlewoman{
                    background: url("../images/littlewoman.png") no-repeat;
                    background-size: contain;
                    margin:0 auto;
                }
                .littleMan{
                    background: url("../images/littleman.png") no-repeat;
                    background-size: contain;
                    margin:0 auto;
                }
                .womanFontLittle{
                    @include font-size(12px);
                    color:#ff91b7;
                    text-align:center;
                    .spanColor{
                        color:#fff;
                    }
                }
                .manFontLittle{
                    @include font-size(12px);
                    color:#63bcff;
                    text-align:center;
                    .spanColor{
                        color:#fff;
                    }
                }
            }
        }
        .jiekuan{
            @include font-size(12px);
            text-align:center;
            color:#f2d87e;
        }
        .maxTen{
            @include font-size(12px);
            text-align:center;
            color:#0069c2;
        }
        .bank{
            @include font-size(12px);
            text-indent:2em;
        }
        .fuliFont{
            @include font-size(16px);
            text-align:center;
        }
        .fuliImg{
            margin:0 auto;
        }
    }
    .p1 {
      .month {
        position: absolute;
        top: 37%;
        left: 50%;
      }
      .logo{
          background: url("../images/logo.jpg") no-repeat;
          background-size: contain;
          margin:0 auto;
      }
      .year{
       /* background: url("../images/year.jpg") no-repeat;*/
       /*  background-size: contain; */
      /*   position: absolute; */
        
        /* margin:0 auto; */
      }
      .bg{
         background: -webkit-radial-gradient(circle, #1b3242 35%, #171f34 65%);
         margin:0 auto;
         position: relative;
      } 
      .angle{
        background: url("../images/angle.png") no-repeat;
        background-size: contain;
        position: absolute;
      }
      .fontb{
        background: url("../images/report.png") no-repeat;
        background-size: contain;
        margin:0 auto;
      }
    }
} 
    @-webkit-keyframes start {
      0%,
      30% {
        opacity: 0.2;
        -webkit-transform: translate(0, 10px);
      }
      60% {
        opacity: 1;
        -webkit-transform: translate(0, 0);
      }
      100% {
        opacity: 0.2;
        -webkit-transform: translate(0, -5px);
      }
    }
    
    @keyframes start {
      0%,
      30% {
        opacity: 0.2;
        transform: translate(0, 10px);
      }
      60% {
        opacity: 1;
        transform: translate(0, 0);
      }
      100% {
        opacity: 0.2;
        transform: translate(0, -5px);
      }
    } 
    .start {
      position: absolute;
      left: 50%;
      bottom: 10px;
      margin-left: -9px;
      width: 19px;
      height: 12px;
      background: url("../images/top.png") no-repeat;
      background-size: 100% 100%;
      -webkit-animation: start 1.5s infinite ease-in-out;
      animation: start 1.5s infinite ease-in-out;
    }
    

</style>
<template>
<div  class="swiper-container">
    <div class="swiper-wrapper">
      <!-- 第一张 -->
      <div class="swiper-slide p1  img-size">
       <div class='img-size' data-height='150'></div>
       <div class='logo img-size' data-width='293' data-height='106'></div>
        <!-- <div class='year img-size' data-width='429' data-height='175' data-marginTop='20'></div> -->
        <img :src="yearimgsrc"  class='year img-size' data-width='429' data-height='175' data-marginTop='20' data-marginLeft='170'>
        <div class='bg img-size' data-height='386' data-width='445'>
            <div class='angle img-size' data-width='445' data-height='386' data-top='100'></div>
        </div>
        <img class="month img-size" data-width='296' data-height='265' data-marginLeft='-148' :src='imgsrc'>
        <div class='fontb img-size' data-width='459' data-height='135' data-marginTop='150'></div>
        <span class="start"></span>
      </div>
      <!-- 平台数据总览 -->
      <div class="swiper-slide p2 img-size">
        <div class="numTitle title1Color alcenter img-size" data-paddingTop='70' data-fontSize='44'>平台整体数据总览</div>
        <div class="jiezhi alcenter colorWhite img-size" data-marginTop='20'>截止日期 <span class="colorYellow">{{new Date(result.deadline).Format("yyyy-MM-dd")}}</span></div>
        <!--  累计1 -->
        <div class="totalIcon img-size" data-width='235' data-height='202' data-marginTop='70'><img :src='total1pic' alt=""></div>
        <div class="alcenter totalFont img-size" data-marginTop='30'>累计交易总额：<span class="fongBlod colorYellow">{{numFormat(result.cumulativeTurnover)}}</span> 元</div>
        <div class="totalIcon img-size" data-width='341' data-height='161' data-marginTop='70'><img src="../images/total2.png" alt=""></div>
        <div class="alcenter totalFont img-size" data-marginTop='30'>累计赚取收益：<span class="fongBlod colorYellow">{{numFormat(result.cumulativeIncome )}}</span> 元</div>
        <div class="totalIcon img-size" data-width='206' data-height='133' data-marginTop='70'><img :src='total3pic' alt=""></div>
        <div class="alcenter totalFont img-size" data-marginTop='30'>累计注册用户：<span class="fongBlod colorYellow">{{numFormat(result.cumulativeRegisteredUser) }}</span>人</div>
        <span class="start"></span>
      </div>
      <!-- 业绩数据 -->
      <div class="swiper-slide p3">
        <div class="numTitle title2Color alcenter img-size" data-paddingTop='70' data-fontSize='44'>业绩数据</div>
        <div class="jiezhi alcenter colorWhite img-size" data-marginTop='20'><span class="colorYellow">{{result.year}}</span>年<span class="colorYellow">{{result.month}} </span> 月份累计交易额 <span class="colorYellow fongBlod">{{numFormat(result.cumulativeMonthlyTurnover)}}</span> 元</div>
        <div class="top10 jiezhi alcenter colorWhite img-size" data-marginTop='60'>
          <div class="top10Img img-size" data-width='53' data-height='53'></div>
          按区域分布排名前<span class="ten">10</span>名
        </div>
        <div class="map img-size" data-width='590' data-height='492' data-right='70' data-bottom='150'></div>
        <div class="chart img-size" data-height='800' data-width='550' id='yeji' data-marginLeft='100'></div>
        <span class="start"></span>
      </div>
      <!-- 注册数据 -->
      <div class="swiper-slide p4">
        <div class="numTitle title3Color alcenter img-size" data-paddingTop='70' data-fontSize='44'>注册数据</div>
        <div class="jiezhi alcenter colorWhite img-size" data-marginTop='20'> <span class="colorYellow">{{result.year}} </span>年<span class="colorYellow">{{result.month}} </span> 月份新增注册用户<span class="colorYellow fongBlod">{{numFormat(result.cumulativeMonthlyRegistered)}} </span>人</div>
        <div class="top10 jiezhi alcenter colorWhite img-size" data-marginTop='60'>
          <div class="top10Img img-size" data-width='53' data-height='53'></div>
          按区域分布排名前<span class="ten">10</span>名
        </div>
        <div class="map img-size" data-width='590' data-height='492' data-right='70' data-bottom='150'></div>
        <div class="chart img-size" data-height='800' data-width='550' id='zhuce' data-marginLeft='100'></div>
        <span class="start"></span>
      </div>
      <!-- 渠道数据 -->
      <div class="swiper-slide p5">
        <div class="numTitle title3Color alcenter img-size" data-paddingTop='70' data-fontSize='44'>渠道数据</div>
        <div class="jiezhi alcenter colorWhite img-size" data-marginTop='20'> <span class="colorYellow">{{result.year}}</span>年<span class="colorYellow">{{result.month}} </span> 月份投资终端分布</div>
        <div class="chart img-size" data-width='550' data-height='800' data-marginLeft='100' id='qudao'></div>
        <span class="start"></span>
      </div>
      <!-- 用户画像 -->
      <div class="swiper-slide p6">
        <div class="numTitle title4Color alcenter img-size" data-paddingTop='70' data-fontSize='44'>用户画像</div>
        <div class="jiezhi alcenter colorWhite img-size" data-marginTop='20'>截止日期 <span class="colorYellow">{{new Date(result.deadline).Format("yyyy-MM-dd")}}</span> </div>
        <div class="person img-size" data-marginTop='70'>
          <div class="manImg img-size" data-width='312' data-height='251'></div>
          <div class="manFont img-size" data-marginTop='35'>注册占比：{{result.registeredMaleRatio}}%
            <br>投资占比：{{result.investedMaleRatio}}%</div>
          <div class="womanImg img-size" data-marginTop='70' data-width='267' data-height='251'></div>
          <div class="womanFont img-size" data-marginTop='35'>
            注册占比：{{result.registeredFemaleRatio}}%
            <br>投资占比：{{result.investedFemaleRatio}}% </div>
        </div>
         <span class="start"></span>
      </div>
      <!-- 用户年龄分析 -->
    <div class="swiper-slide p7">
      <div class="numTitle title3Color alcenter img-size" data-paddingTop='70' data-fontSize='44'>用户年龄分析</div>
      <div class="jiezhi alcenter colorWhite img-size" data-marginTop='20'>截止日期 <span class="colorYellow">{{new Date(result.deadline).Format("yyyy-MM-dd")}}</span><br>
      多融注册用户年龄分布情况
      </div>
      <div class="chart img-size" data-width='550' data-height='600' data-marginLeft='100' id='ageUser'></div>
      <span class="start"></span>
    </div>
   <!--  最给力投资用户 -->
    <div class="swiper-slide p8">
      <div class="numTitle title5Color alcenter img-size" data-paddingTop='70' data-fontSize='44'>最给力投资用户</div>
      <div class="jiezhi alcenter colorWhite img-size" data-marginTop='20'> <span class="colorYellow">{{result.year}}</span>年<span class="colorYellow">{{result.month}} </span> 月</div>
      <div class="person img-size">
          <div class="littlePerson img-size" data-width='375' data-marginTop='80'>
              <div>累计投资额最多</div>
              <div class="littlewoman img-size" v-if='maxCumulativeInvest.sex==2'  data-width='158' data-height='148' data-marginTop='30'></div> 
              <div class="littleMan img-size" v-else  data-width='184' data-height='148' data-marginTop='30'></div>
              <div class="womanFontLittle img-size" data-marginTop='20' v-if='maxCumulativeInvest.sex==2'>
                  <span >{{maxCumulativeInvest.surname}}</span>女士 <br><span >{{maxCumulativeInvest.mobilePhone}}</span> <br>共计投资：<span class="spanColor" >{{numFormat(maxCumulativeInvest.maxCumulativeInvest)}}</span> 元
              </div>
              <div class="womanFontLittle img-size" data-marginTop='20' v-else>
                  <span >{{maxCumulativeInvest.surname}}</span>先生 <br> <span >{{maxCumulativeInvest.mobilePhone}}</span><br>共计投资：<span class="spanColor" >{{numFormat(maxCumulativeInvest.maxCumulativeInvest)}}</span> 元
              </div>
          </div>
              <div class="littlePerson img-size" data-width='375' data-marginTop='80'>
              <div>单笔投资额最大</div>
              <div class="littlewoman img-size" v-if='maxOnceInvest.sex==2'  data-width='158' data-height='148' data-marginTop='30'></div> 
              <div class="littleMan img-size" v-else  data-width='184' data-height='148' data-marginTop='30'></div>
              <div class="womanFontLittle img-size" data-marginTop='20' v-if='maxOnceInvest.sex==2'>
                  <span>{{maxOnceInvest.surname}}</span>女士 <br><span >{{maxOnceInvest.mobilePhone}}</span> <br>单笔投资：<span class="spanColor" >{{numFormat(maxOnceInvest.maxOnceInvest)}}</span> 元
              </div>
              <div class="womanFontLittle img-size" data-marginTop='20' v-else>
                  <span>{{maxOnceInvest.surname}}</span>先生 <br> <span>{{maxOnceInvest.mobilePhone}}</span><br>单笔投资：<span class="spanColor" >{{numFormat(maxOnceInvest.maxOnceInvest)}}</span> 元
              </div>
          </div>
              <div class="littlePerson img-size" data-width='375' data-marginTop='80'>
              <div>累计投资次数最多</div>
             <div class="littlewoman img-size" v-if='maxInvestFrequency.sex==2'  data-width='158' data-height='148' data-marginTop='30'></div> 
              <div class="littleMan img-size" v-else  data-width='184' data-height='148' data-marginTop='30'></div>
              <div class="womanFontLittle img-size" data-marginTop='20' v-if='maxInvestFrequency.sex==2'>
                  <span>{{maxInvestFrequency.surname}}</span>女士 <br><span>{{maxInvestFrequency.mobilePhone}}</span> <br>共计投资：<span class="spanColor" >{{numFormat(maxInvestFrequency.maxInvestFrequency)}}</span> 次
              </div>
              <div class="womanFontLittle img-size" data-marginTop='20' v-else>
                  <span >{{maxInvestFrequency.surname}}</span>先生 <br> <span>{{maxInvestFrequency.mobilePhone}}</span><br>共计投资：<span class="spanColor">{{numFormat(maxInvestFrequency.maxInvestFrequency)}}</span> 次
              </div>
          </div>
              <div class="littlePerson img-size" data-width='375' data-marginTop='80'>
              <div>邀请好友总数最多</div>
              <div class="littlewoman img-size" v-if='maxRecommendFrequency.sex==2'  data-width='158' data-height='148' data-marginTop='30'></div> 
              <div class="littleMan img-size" v-else data-width='184' data-height='148' data-marginTop='30'></div>
              <div class="womanFontLittle img-size" data-marginTop='20' v-if='maxRecommendFrequency.sex==2'>
                  <span >{{maxRecommendFrequency.surname}}</span>女士 <br><span>{{maxRecommendFrequency.mobilePhone}}</span> <br>共邀好友：<span class="spanColor">{{maxRecommendFrequency.maxRecommendFrequency}}</span> 位
              </div>
              <div class="womanFontLittle img-size" data-marginTop='20' v-else>
                  <span>{{maxRecommendFrequency.surname}}</span>先生 <br> <span>{{maxRecommendFrequency.mobilePhone}}</span><br>共邀好友：<span class="spanColor">{{maxRecommendFrequency.maxRecommendFrequency}}</span> 位
              </div>
          </div>
      </div>
      <span class="start"></span>
    </div>
    <!-- 逾期数据 -->
    <div class="swiper-slide p10">
    <img :src="yuqi" alt="" class='img-size'>
      <span class="start"></span>
    </div>
    <!-- 平台福利 -->
    <div class="swiper-slide p11">
     <img :src='pic1' alt="" class='img-size'>
    <span class="start"></span></div>
    <!--<div class="swiper-slide p12" >-->
     <!--<img :src='pic2' alt="" class='img-size'>-->
     <!--<span class="start"></span></div>-->
    <div class="swiper-slide p14" id="last">
      <img :src='erweima' alt="">
    </div>
  </div>
  </div>
</template>
<script>
import swiper from "../common/swiper.js";
import echarts from "../common/eahart.js";
    export default {
        data(){
            return {
                imgsrc:'',
                yearimgsrc:'',
                total1pic:"images/src/images/total1.png",
                total3pic:"images/src/images/total3.png",
                result: {},
                yuqi:"images/src/images/yuqi.jpg",
                erweima:"images/src/images/erweima.png",
                pic1 : "",
                pic2 : "",
                total: "",
                activity1:"",
                drOperationInvestClientVOList:[],
                maxCumulativeInvest: {},
                maxOnceInvest: {},
                maxInvestFrequency: {},
                maxRecommendFrequency: {},
                showBigEvent:true,
            }
        },
        mounted(){
            T.setImgSize();
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'vertical'
              });
            this.geturl();
        },
        methods : {
            numFormat: function(num) {
                var arr = (num + "").split("");
                arr.reverse();
                var tmp = ""
                for (var i = 1; i <= arr.length; i++) {
                    tmp += arr[i - 1]
                    if (i % 3 == 0 && i != arr.length) {
                        tmp += ","
                    }
                }
                return tmp.split("").reverse().join("")
            },  
            geturl:function(){
                var self=this;
                var URL=window.location.href.split("?");
                var year = URL[1].slice(0, 4); //获取年份
                var img=URL[1].slice(4, 6);//没有去0的月份
                var month = URL[1].slice(4, 6).replace(/^0+/, ""); //获取月份
                self.yearimgsrc='images/src/images/'+year+'.png';//获取第一页的年份图
               self.imgsrc='images/src/images/num'+month+'.png';//设置第一页显示图片
               self.pic1='images/src/images/'+year+img+'/pic1.jpg';//福利
               self.pic2='images/src/images/'+year+img+'/pic2.jpg';//大事记
               //self.number1pic='images/src/images/number1.jpg'
                var yeji = document.getElementById('yeji');
                var zhuce = document.getElementById('zhuce');
                var qudao = document.getElementById('qudao');
                var ageUser = document.getElementById('ageUser');
                var chartZhuce = echarts.init(zhuce);
                var chartYeji = echarts.init(yeji);
                var chartQudao = echarts.init(qudao);
                var chartAgeUser = echarts.init(ageUser);
                    //业绩数据
                  chartYeji.setOption({//业绩数据
                    title: {},
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        type: 'shadow'
                      },
                      show: false
                    },
                    textStyle: {
                      color: "#fff"
                    },
                    grid: {
                      top:'3%',
                      left: '3%',
                      right: '15%',
                      // bottom: '3%',
                      containLabel: true
                    },
                    xAxis: {
                      axisLine: {
                        lineStyle: {
                          color: '#ff4200',
                          width: 1
                        }
                      },

                      axisLabel: {
                        textStyle: {
                          fontSize: 8
                        },
                        formatter: "{value}%"
                      },

                      type: 'value',
                      splitLine: {
                        show: false
                      }
                    },
                    yAxis: {
                     
                       axisTick: {
                        show: false
                      },
                      axisLine: {
                        lineStyle: {
                          color: '#ff4200',
                          width: 1
                        }
                      },
                      axisLabel: {
                        interval: 0
                      },
                      type: 'category',
                      data: []
                    },
                    series: [{
                      type: 'bar',
                      barWidth: 10,
                      itemStyle: {
                        normal: {
                          color: function (params) {
                            var colorList = [ //设置颜色列表
                             "#247893","#918c3c","#328d83","#365d99","#2188a2",
                              "#af8c2e","#ad5a18","#8ee8ff","#ffa84b","#ff4200"
                               
                            ];
                            return colorList[params.dataIndex]
                          }
                        }
                      },
                      label: {
                        normal: {
                          show: true,
                          position:['100%','-30%'],
                          formatter: '{c}%'
                        }
                      },
                      data: []
                    }]
                  })
                  chartQudao.setOption({ //渠道用户
                    title: {
                      show: false
                    },
                    tooltip: {
                      trigger: 'item',
                      show: false,
                      formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                      orient: 'horizontal', //图例列表的朝向问题
                      bottom: 'left', //图例显示位置
                      icon: 'circle',
                      selectedMode:false,
                      textStyle: {
                        color: function (params) {
                          var colorList = [ //设置颜色列表
                            "#fe7634", "#ffea5d", "#0069cb", "#00be6b", "#af8c2e",
                            "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
                          ];
                          return colorList[params.dataIndex]
                        }
                      },
                      data: []
                    },
                    series: [{
                      type: 'pie',
                      radius: '55%',
                      animation:false,
                      minAngle:2,
                      data: [], //显示数据问题
                      itemStyle: {
                        emphasis: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                          color: function (params) {
                            var colorList = [ //设置颜色列表
                              "#fe7634", "#ffea5d", "#0069cb", "#00be6b", "#af8c2e",
                              "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
                            ];
                            return colorList[params.dataIndex]
                          },
                          label: {
                            show: true,
                            formatter: '{d}%'
                          },
                          labelLine: { show: true }
                        }
                      }
                    }]
                  })

                  chartZhuce.setOption({//注册数据
                    title: {},
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        type: 'shadow'
                      },
                      show: false
                    },
                    textStyle: {
                      color: "#fff"
                    },
                    grid: {
                      left: '3%',
                      right: '15%',
                      top: '3%',
                      containLabel: true
                    },
                    xAxis: {
                      axisLine: {
                        lineStyle: {
                          color: '#ff4200',
                          width: 1
                        }
                      },

                      axisLabel: {
                        textStyle: {
                          fontSize: 8
                        },
                        formatter: "{value}%"
                      },

                      type: 'value',
                      splitLine: {
                        show: false
                      }
                    },
                    yAxis: {
                        axisTick: {
                        show: false
                      },
                      splitLine:{
                        show:false
                      },
                      axisLine: {
                        onZero:true,
                        lineStyle: {
                          color: '#ff4200',
                          width: 1
                        }
                      },
                      axisLabel: {
                        interval: 0
                      },
                      type: 'category',
                      data: []
                    },
                    series: [{
                      type: 'bar',
                      barWidth: 10,
                      itemStyle: {
                        normal: {
                          color: function (params) {
                            var colorList = [ //设置颜色列表
                               "#247893","#918c3c","#328d83","#365d99","#2188a2",
                              "#af8c2e","#ad5a18","#8ee8ff","#ffa84b","#ff4200"
                            ];
                            return colorList[params.dataIndex]
                          }
                        }
                      },
                      label: {
                        normal: {
                          show: true,
                          // position: 'right',
                          position:['100%','-30%'],
                          formatter: '{c}%'
                        }
                      },
                      data: []
                    }]
                  })
                  chartAgeUser.setOption({ //用户年龄分析
                    title: {},
                    tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                        type: 'shadow'
                      },
                      show: false
                    },
                    textStyle: {
                      color: "#fff"
                    },
                    grid: {
                      left: '3%',
                      right: '15%',
                      bottom: '3%',
                      containLabel: true
                    },
                    xAxis: {
                      axisLine: {
                        lineStyle: {
                          color: '#ff4200',
                          width: 1
                        }
                      },

                      axisLabel: {
                        textStyle: {
                          fontSize: 8
                        },
                        formatter: "{value}%"
                      },

                      type: 'value',
                      splitLine: {
                        show: false
                      }
                    },
                    yAxis: {
                        axisTick: {
                        show: false
                      },
                      axisLine: {
                        lineStyle: {
                          color: '#ff4200',
                          width: 1
                        }
                      },
                      axisLabel: {
                        interval: 0
                      },
                      type: 'category',
                      data: []
                    },
                    series: [{
                      type: 'bar',
                      barWidth: 10,
                      itemStyle: {
                        normal: {
                          color: function (params) {
                            var colorList = [ //设置颜色列表
                              "#2188a2","#af8c2e","#ad5a18","#8ee8ff","#ffa84b","#ff4200"
                            ];
                            return colorList[params.dataIndex]
                          }
                        }
                      },
                      label: {
                        normal: {
                          show: true,
                          position:['100%','-30%'],
                          formatter: '{c}%'
                        }
                      },
                      data: []
                    }]
                  })
                   var provinceInvestRankList = []; //业绩数据累计交易额省份
                      var provinceNumber = []; //业绩数据累计交易额百分比
                      var provinceRegisterRankList = []; //注册省份排名
                      var provinceRegisterNumber = []; //注册数据百分比
                      var drOperationInvestClient = []; //渠道数据
                      var drOperationInvestClientNumber = []; //渠道数据百分比
                      var drOperationInvestAge = []; //用户年龄
                      var drOperationInvestAgeNumber = []; //用户年龄所占比
                    T.ajax({
                       url:"/operationReport/getOperationReport.do" ,
                       data:{
                        year:year,
                        month:month
                       },
                       callback:true,
                    }).then(data=>{
                        self.result = data.map.drOperationReport;
                        self.drOperationInvestClientVOList=data.map.drOperationInvestClientVOList;
                        self.total = data.map.drOperationReport.cumulativeTurnover * 100
                        self.maxCumulativeInvest = data.map.drOperationReport.drOperationAboutMaxList[0];
                        self.maxOnceInvest = data.map.drOperationReport.drOperationAboutMaxList[1];
                        self.maxInvestFrequency = data.map.drOperationReport.drOperationAboutMaxList[2];
                        self.maxRecommendFrequency = data.map.drOperationReport.drOperationAboutMaxList[3];
                    for (var i = 0; i < data.map.drOperationReport.drOperationProvinceInvestRankList.length; i++) { //业绩数据
                        provinceInvestRankList.push(data.map.drOperationReport.drOperationProvinceInvestRankList[i].region);
                        provinceNumber.push(data.map.drOperationReport.drOperationProvinceInvestRankList[i].proportion)
                    }
                    for (var j = 0; j < data.map.drOperationReport.drOperationProvinceRegisterRankList.length; j++) { //注册数据
                        provinceRegisterRankList.push(data.map.drOperationReport.drOperationProvinceRegisterRankList[j].region);
                        provinceRegisterNumber.push(data.map.drOperationReport.drOperationProvinceRegisterRankList[j].proportion);
                    }
                    for (var k = 0; k < data.map.drOperationInvestClientVOList.length; k++) { //渠道数据
                        drOperationInvestClient.push(data.map.drOperationInvestClientVOList[k].name);
                        drOperationInvestClientNumber.push(data.map.drOperationInvestClientVOList[k].proportion)
                    }
                    for (var w = 0; w < data.map.drOperationReport.drOperationInvestAgeList.length; w++) { //投资用户年龄分析
                        drOperationInvestAge.push(data.map.drOperationReport.drOperationInvestAgeList[w].age);
                        drOperationInvestAgeNumber.push(data.map.drOperationReport.drOperationInvestAgeList[w].proportion)
                    }
                    chartYeji.setOption({
                    yAxis: {
                      data: provinceInvestRankList
                    },
                    series: [{
                      data: provinceNumber
                    }]
                  })
                  chartZhuce.setOption({
                    yAxis: {
                      data: provinceRegisterRankList
                    },
                    series: [{
                      data: provinceRegisterNumber
                    }]
                  })
                  chartAgeUser.setOption({ //用户年龄分析
                    yAxis: {
                      data: drOperationInvestAge
                    },
                    series: [{
                      data: drOperationInvestAgeNumber
                    }]
                  })
                  chartQudao.setOption({ //渠道用户
                    legend: {
                      data: drOperationInvestClient
                    },
                    series: [{ data: data.map.drOperationInvestClientVOList}]
                  })
                    })
            }
        }
    }
</script>
