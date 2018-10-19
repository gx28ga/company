<style lang='sass'>
  @import '../../css/global.scss';

  .home-box {
    @include contain('../../images/home.png');
    position: relative;
    color: #FFF;
    .record-link,
    .rule-link,
    .chance,
    .game-link,
    .how-get
    {
      position: absolute;
    }
    .chance{
      width: 100%;
      text-align: center;
      span{
        color: #FD0;
        font-weight: bold;
        vertical-align: top;
      }
    }
  }
</style>
<template>
  <div class="home-box img-size" data-width="750" data-height="1334">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="record-link img-size" data-top="700" data-left="112" data-width="136" data-height="40" @click="onRecords"></div>
    <div class="rule-link img-size" data-top="700" data-left="500" data-width="136" data-height="40" @click="onRule"></div>
    <div class="chance img-size" data-top="828" data-left="0" data-fontSize="30" data-lineHeight="30">抽奖机会：<span>{{isLogin ? chanceNum : '--'}}</span> 次</div>
    <div class="how-get img-size" data-top="1116" data-left="272" data-width="216" data-height="48" @click="onHowGet"></div>
    <div class="game-link img-size" data-top="884" data-left="225" data-width="300" data-height="65" @click="onDraw"></div>
    <div class="game-link img-size" data-top="1004" data-left="225" data-width="300" data-height="65" @click="onDrawTen"></div>
  </div>
</template>
<script>
//    const cSubmitItv = 1001;
    const cSubmitItv = 2500;
    import {requestService, httpStatus, httpParticipate, httpChance, httpDraw, httpMyGift} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                isAjaxing: false,
                chanceNum: 0,
                generalCard: 0,
                point: 0,
                records: []
            };
        },
        components : {
            'lockScreen' : function (resolve) {
                require(['./lockScreen'], resolve);
            }
        },
        mounted(){
            T.setImgSize();
            this.isLogin = T.isLogin;
            if (this.isLogin) {
                this.isAjaxing = true;
                this.getActivityStatus();
            }
        },
        methods: {
            onRule : function () {
//                this.$router.push("/rule");
                this.$router.replace({path: 'rule', query: ''});
            },
            onHowGet : function () {
                requirePop("howGetChance", {
                    props : {
                        transition : 'fadeIn'
                    }
                });
            },
            getActivityStatus: function () {
                requestService(httpStatus, {}, _data => {
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    this.status = _data.map.status;
                    this.startTime = _data.map.startTime;
                    this.endTime = _data.map.endTime;
                    let sts = this.status;
                    if (sts != 0) {  //活动未开始
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : sts < 0 ? '敬请期待' : '温馨提示',
                                detail: sts < 0 ? '活动即将开始, 期待您的热情参与!' : '此活动已结束，您可以参加其他活动',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    if (this.isLogin){  //活动进行中或结束
                        this.checkParticipatable();
                    } else {
                        this.isAjaxing = false;
                    }
                });
            },
            checkParticipatable: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpParticipate, params, _data => {
                    const {flag, success, errorMsg} = _data;
                    if (!flag) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '感谢关注！',
                                detail: 'VIP渠道用户不能参加，敬请期待后续活动……',
                                btnBackHome: true
                            }
                        });
                    } else {
                        if (success == false) {
                            this.isAjaxing = false;
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                    btnBackHome: true
                                }
                            });
                            return false;
                        }
                        this.getMyChance();
                    }
                });
            },
            getMyChance: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                requestService(httpChance, params, _data => {
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    const {userChance, userCoin, isDeuce} = _data.map;
                    this.chanceNum = userChance.totalchance;
                    bus.$data.chanceNum = this.chanceNum;
                    bus.$data.point = userCoin.points;
                    bus.$data.knockout = isDeuce == 0;
                    bus.$data.generalCard = userChance.remainchance;
                    this.isAjaxing = false;
                    this.$nextTick(() => {T.setImgSize();});
                });
            },
            onDraw: function () {
                if (this.chanceNum <= 0) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : 1
                        }
                    });
                    return;
                }
                this.__submitGame(false);
            },
            __submitGame(isMany){
                this.isAjaxing = true;
                let timerOn = true;
                setTimeout(() => {timerOn = false;}, cSubmitItv);
                const params = {
                    uid: T.uid,
                    drawType: isMany ? 10 : 1
                };
                requestService(httpDraw, params, _data => {
                    let itv = setInterval(() => {
                        if (timerOn === false) {
                            clearInterval(itv);
                            this.isAjaxing = false;
                            const {success, errorCode, errorMsg} = _data;
                            if (success == false) {
                                let stCode = {'7002' : 1, '7003' : isMany ? 2 : undefined}[errorCode + ''];
                                if (stCode) {
                                    requirePop("notify", {
                                        props : {
                                            transition : 'bounceIn',
                                            popState : stCode
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
                            if (isMany) {
                                requirePop('notify', {
                                    props : {
                                        transition : 'rotate3d',
                                        popState : 3
                                    },
                                    on : {
                                        "go-my-event" : this.onRecords
                                    }
                                });
                                this.chanceNum -= 10;
                            } else {
//                                const {prizeType, prizeName, remark} = _data.map;
                                const {prizeType, prizeAmount, prizeName, remark} = _data.map.prizeList[0];
                                requirePop('showGift', {
                                    props : {
                                        ...{
                                              transition : 'rotate3d',
                                              popState : prizeType,
                                              giftName : (Number(prizeAmount) > 0 ? prizeAmount : '') + prizeName
                                           },
                                        ...(prizeType === 32 ? {teamCd : remark} : {})
                                    }
                                });
                                this.chanceNum--;
                            }
                        }
                    }, 1);
                });
            },
            onDrawTen: function () {
                if (this.chanceNum < 10) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : this.chanceNum > 0 ? 2 : 1
                        }
                    });
                    return;
                }
                this.__submitGame(true);
            },
            onRecords() {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                const params = {uid: T.uid};
                requestService(httpMyGift, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                btnBackHome: false
                            }
                        });
                        return false;
                    }
                    const {allPrize} = _data.map;
                    this.records = allPrize.slice(0);
                    requirePop("record", {
                        props : {
                            transition : 'mask',
                            records: this.records
                        }
                    });
                });
            }
        }
    }
</script>