<style lang='sass' scoped>
  @import '../../css/global.scss';
  @import '../../vendor/all-animation.min.css';
  .main-section {
    overflow-y: scroll;
    overflow-x: hidden;
    .content-wrapper {
      position: relative;
      @include contain('../../images/play-raise.jpg');
      color: #003333;
      .back-btn,
      .back-link,
      .greet,
      .played-times,
      .feed-box,
      .feed-bag,
      .feeding-anm,
      .cleaning-anm,
      .faeces,
      .broom,
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
      .feed-box {
        @include contain("../../images/empty-box.png");
      }
      .faeces {
        @include contain("../../images/faeces.png");
      }
      .feed-bag{
        @include contain("../../images/feed-bag.png");
      }
      .broom{
        @include contain("../../images/broom.png");
      }
      .for-load-gif1{
        @include contain("../../images/anm-feeding.gif");
      }
      .for-load-gif2{
        @include contain("../../images/anm-cleaning.gif");
      }
      .chance {
        text-align: center;
        color: #FFF;
        span {
          color: #fffc00;
        }
      }
      .play-btn.feeding{
        @include contain("../../images/feeding-btn.png");
      }
      .play-btn.cleaning{
        @include contain("../../images/cleaning-btn.png");
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
      <div v-show="workingState <= 1 && jobClass == 'feeding'">
        <div class="img-size feed-box" data-top="668" data-left="134" data-width="146" data-height="66"></div>
        <div class="img-size feed-bag pulse-slow" data-top="630" data-left="27" data-width="103" data-height="103" @click="onPlay($event, false)"></div>
      </div>
      <div v-show="workingState <= 1 && jobClass == 'cleaning'">
        <div class="img-size faeces" data-top="491" data-left="315" data-width="249" data-height="142"></div>
        <div class="img-size broom pulse-slow" data-top="445" data-left="416" data-width="150" data-height="157" @click="onPlay($event, false)"></div>
      </div>
      <div v-show="workingState >= 1 && jobClass == 'feeding'" class="img-size feeding-anm" data-top="220" data-width="750" data-height="530"></div>
      <div v-show="workingState >= 1 && jobClass == 'cleaning'" class="img-size cleaning-anm" data-top="220" data-width="750" data-height="530"></div>
      <div class="img-size chance" data-top="880" data-left="300" data-fontSize="30" data-lineHeight="55">剩余次数：<span class="img-size" data-fontSize="36" data-lineHeight="60">{{chance}}</span></div>
      <div class="img-size play-btn" :class="jobClass" data-top="988" data-left="39" data-width="305" data-height="90" @click="onPlay($event, false)"></div>
      <div class="img-size play-ten" data-top="988" data-left="405" data-width="305" data-height="90" @click="onPlay($event, true)"></div>
      <div class="img-size back-link" data-top="1133" data-left="327" data-width="96" data-height="27" @click="onBack"></div>
    </div>
  </div>
</template>
<script>
    const cAjaxTime = 3000;
    const cJobClass = ['feeding', 'cleaning'];
    const cJobName = ['喂食', '清扫'];
    const cImgBase = './src/images/';
    const cWorkingAnm = ['anm-feeding.gif', 'anm-cleaning.gif'];
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
                this.jobId = Number(T.getQueryString("cat")) % 2;
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
                    this.chance = [obj.tsChance, obj.qsChance][this.jobId];
                    this.playedTimes = [obj.tsChanceSY, obj.qsChanceSY][this.jobId];
                });
                /*const obj = bus.chanceData;
                if (obj) {
                    this.chance = [obj.feedingChance, obj.cleaningChance][this.jobId];
                    this.playedTimes = [obj.feedingTimes, obj.cleaningTimes][this.jobId];
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
                    pattern: this.jobId + 3,
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