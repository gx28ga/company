<style lang='sass' scoped>
  @import '../../css/global.scss';
  @import '../../vendor/all-animation.min.css';
  .main-section {
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/play-cultivate.jpg');
      color: #003333;
      .back-btn,
      .back-link,
      .greet,
      .played-times,
      .grass,
      .shovel,
      .weeding-anm,
      .watering-anm,
      .drought,
      .kettle,
      .chance,
      .play-btn,
      .play-ten {
        position: absolute;
      }
      .greet{
        color: #ff6b17;
      }
      .played-times{
        color: #005549;
        text-align: right;
      }
      .grass {
        @include contain("../../images/grass.png");
      }
      .drought {
        @include contain("../../images/drought.png");
      }
      .shovel{
        @include contain("../../images/shovel.png");
      }
      .kettle{
        @include contain("../../images/kettle.png");
      }
      .for-copy-gif1{
        @include contain("../../images/anm-weeding.gif");
      }
      .for-copy-gif2{
        @include contain("../../images/anm-watering.gif");
      }
      .chance {
        text-align: center;
        color: #FFF;
        span {
          color: #fffc00;
        }
      }
      .play-btn.weeding{
        @include contain("../../images/weeding-btn.png");
      }
      .play-btn.watering{
        @include contain("../../images/watering-btn.png");
      }
      .play-ten {
        @include contain("../../images/play-ten.png");
      }
    }
  }
</style>
<template>
  <div class="main-section">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="img-size content-wrapper" data-width="750" data-height="1334">
      <div class="img-size back-btn" data-top="13" data-left="20" data-width="59" data-height="57" @click="onBack"></div>
      <div class="img-size greet" data-top="26" data-left="102" data-fontSize="30" data-lineHeight="30">hi，{{jobName}}达人</div>
      <div class="img-size played-times" data-top="28" data-right="48" data-fontSize="26" data-lineHeight="30">已玩 <span class="img-size" data-fontSize="30">{{playedTimes}}</span> 次</div>
      <div v-show="workingState <= 1 && jobClass == 'weeding'">
        <div class="img-size grass" data-top="353" data-left="41" data-width="639" data-height="280"></div>
        <div class="img-size shovel pulse-slow" data-top="320" data-left="190" data-width="82" data-height="140" @click="onPlay($event, false)"></div>
      </div>
      <div v-show="workingState <= 1 && jobClass == 'watering'">
        <div class="img-size drought" data-top="409" data-left="27" data-width="638" data-height="338"></div>
        <div class="img-size kettle pulse-slow" data-top="412" data-left="157" data-width="129" data-height="103" @click="onPlay($event, false)"></div>
      </div>
      <div v-show="workingState >= 1 && jobClass == 'weeding'" class="img-size weeding-anm" data-top="300" data-width="750" data-height="482"></div>
      <div v-show="workingState >= 1 && jobClass == 'watering'" class="img-size watering-anm" data-top="300" data-width="750" data-height="482"></div>
      <div class="img-size chance" data-top="880" data-left="300" data-fontSize="30" data-lineHeight="55">剩余次数：<span class="img-size" data-fontSize="36" data-lineHeight="60">{{chance}}</span></div>
      <div class="img-size play-btn" :class="jobClass" data-top="988" data-left="39" data-width="305" data-height="90" @click="onPlay($event, false)"></div>
      <div class="img-size play-ten" data-top="988" data-left="405" data-width="305" data-height="90" @click="onPlay($event, true)"></div>
      <div class="img-size back-link" data-top="1133" data-left="327" data-width="96" data-height="27" @click="onBack"></div>
    </div>
  </div>
</template>
<script>
    const cAjaxTime = 3000;
    const cJobClass = ['weeding', 'watering'];
    const cJobName = ['锄草', '浇水'];
    const cImgBase = './src/images/';
    const cWorkingAnm = ['anm-weeding.gif', 'anm-watering.gif'];
    const cAnmDuration = 3000;
    import {requestService, httpChance, httpPlay, httpGetSign} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isAjaxing : false,
                jobId : undefined,
                chance: 0,
                playedTimes: 0,
                anmData: undefined,
                workingState: 0
            };
        },
        components : {
            'lock-screen' : function (resolve) {
                require(['./lockScreen'], resolve);
            }
        },
        computed: {
            jobClass(){
                return cJobClass[this.jobId];
            },
            jobName(){
                return cJobName[this.jobId];
            }
        },
        mounted(){
            T.setImgSize();
            if (!T.isLogin) {
                T.login();
            } else {
                this.jobId = Number(T.getQueryString("cat"));
                this.getInitData();
            }
        },
        methods: {
            getInitData: function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpChance, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : "系统错误，请联系客服。",
                                btnBackHome: false
                            }
                        });
                        bus.$once("closePopEvent", this.onBack);
                        return false;
                    }
                    const obj = _data.map;
                    this.chance = [obj.ccChance, obj.jsChance][this.jobId];
                    this.playedTimes = [obj.ccChanceSY, obj.jsChanceSY][this.jobId];
                });
                /*const obj = bus.chanceData;
                if (obj) {
                    this.chance = [obj.weedingChance, obj.wateringChance][this.jobId];
                    this.playedTimes = [obj.weedingTimes, obj.wateringTimes][this.jobId];
                }*/
            },
            onPlay(event, many){
                if (this.workingState > 0) return;
                const temp = this.chance;
                const popState = temp < 1 ?
                                1 : many && temp < 10 ?
                                2 : -1;
                if (popState > 0) {
                    requirePop("notify", {
                        props : {
                            transition : "bounceIn",
                            popState
                        }
                    });
                    return;
                }
                this.workingState = 1;
                let anm = document.querySelector("." + cJobClass[this.jobId] + "-anm");
                /*anm.style.background = "url('./src/images/" + cWorkingAnm[this.jobId] + "?" + Math.random() * 1000000 + "')";
                anm.style.backgroundSize = 'contain';
                setTimeout(() => {this.workingState = 2;}, 100);
                setTimeout(() => {
                    this.workingState = 0;
                    this.__submit(many);
                }, cAnmDuration);*/

                let bgImg = new Image();
                bgImg.onload = () => {
                    this.isAjaxing = false;
                    anm.style.background = "url('" + bgImg.src + "')";
                    anm.style.backgroundSize = 'contain';
                    setTimeout(() => {this.workingState = 2;}, 100);
                    const st = Date.now();
                    const itv = setInterval(() => {
                        const period = Date.now() - st;
                        if (period >= cAnmDuration) {
                            clearInterval(itv);
                            this.workingState = 0;
                            anm.style.background = "none";
                            this.__submit(many);
                        }
                    }, 1);
                }
                this.isAjaxing = true;
                bgImg.src =  cImgBase + cWorkingAnm[this.jobId] + "?" + Math.random() * 1000000;
            },
            __submit(many) {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let giftType, giftName, medal;
                const succeed = () => {
                    this.isAjaxing = false;
                    requirePop("showGift", {
                        props: {
                            transition : "rotate3d",
                            giftType : many ? 0 : giftType,
                            giftName,
//                            medal: many ? 0 : Math.max(medal, 0)
                            medal : Math.max(medal, 0)
                        },
                        on : {
                            "go-to-record" : () => {this.onBack('', "&tab=3");}
                        }
                    });
                };
                let altFlag = false;
                setTimeout(() => {
                    if (altFlag) {
                        succeed();
                    } else {
                        altFlag = true;
                    }
                }, cAjaxTime);
                let params = {
                    uid: T.uid,
                    pattern: this.jobId + 1,
                    isMany: many
                };
                requestService(httpPlay, params, _data => {
                    const {success, errorCode, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
                        const popState = errorCode == 10009 ?
                                        1 : many && errorCode == 10011 ?
                                        2 : -1;
                        if (popState > 0) {
                            requirePop("notify", {
                                props : {
                                    transition : "bounceIn",
                                    popState
                                }
                            });
                        } else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : "系统提示",
                                    detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                    btnBackHome : false
                                }
                            });
                        }
                        return false;
                    }
                    giftType  = _data.map.prizeType;
                    giftName = _data.map.prizeName;
                    medal = Number(_data.map.medal);
                    this.chance = _data.map.totalchance;
                    this.playedTimes += many ? 10 : 1;
                    if (altFlag) {
                        succeed();
                    } else {
                        altFlag = true;
                    }
                });
            },
            onBack : function (evt = '', query = '') {
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/?wap=true&uid=" + T.uid + query);
                } else {
                    window.location.replace(window.location.pathname + "#/?uid=" + T.uid + query);
                }
            }
        }
    }
</script>