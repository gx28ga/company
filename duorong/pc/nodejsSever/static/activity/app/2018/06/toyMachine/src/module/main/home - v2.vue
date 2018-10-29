<style lang='sass'>
  @import '../../css/global.scss';

  .home-box {
    @include contain('../../images/home.png');
    position: relative;
    color: #a90094;
    .rule-link,
    .game-mode,
    .toy-area,
    .chance,
    .play-btn,
    .playten-btn,
    .boom-container,
    .target,
    .how-get
    {
      position: absolute;
    }
    .toy-area{
      overflow: hidden;
      .content{
        margin: 0 auto;
        .conbox {
          position: relative;
          overflow: hidden;
          ul {
            position: relative;
            list-style: none;
            li {
              position: relative;
              float: left;
              overflow: hidden;
            }
            li:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
    .cat{
      @include contain("../../images/cat.png");
      background-position: center;
    }
    .altman{
      @include contain("../../images/altman.png");
      background-position: center;
    }
    .gourd-boy{
      @include contain("../../images/gourd-boy.png");
      background-position: center;
    }
    .mcdull{
      @include contain("../../images/mcdull.png");
      background-position: center;
    }
    .grey-wolf{
      @include contain("../../images/grey-wolf.png");
      background-position: center;
    }
    .cat-officer{
      @include contain("../../images/cat-officer.png");
      background-position: center;
    }
    .boom-container{
      overflow-y: hidden;
      .boom{
        position: absolute;
        @include contain("../../images/boom.png");
      }
    }
    .chance{
      span{
        color: #ff0090;
        font-weight: bold;
        vertical-align: top;
      }
    }
  }
</style>
<template>
  <div class="home-box img-size" data-width="750" data-height="1450">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="rule-link img-size" data-top="10" data-right="50" data-width="150" data-height="50" @click="onRule"></div>
    <div class="img-size game-mode" data-top="395" data-left="63" data-fontSize="30" data-lineHeight="30">当前模式：{{modeName}}</div>
    <div class="how-get img-size" data-top="443" data-left="64" data-width="222" data-height="42" @click="onHowTo($event, 1)"></div>
    <div class="img-size boom-container" data-top="500" data-height="468" data-width="700">
      <div v-show="gameMode != undefined" class="img-size boom" data-top="-125" data-left="313" data-width="135" data-height="305"></div>
      <div v-show="gameMode == 1" class="img-size boom" data-top="-125" data-left="530" data-width="135" data-height="305"></div>
    </div>
    <div class="img-size toy-area" data-top="750" data-left="60" data-width="635" data-height="200">
      <div class="img-size content" data-width="1275">
        <div class="conbox enter-up-bounce" id="BoxUl" style="display: none;">
          <ul>
            <li class="img-size" data-width="215" data-height="200"><div class="img-size" data-width="200" data-height="200"></div></li>
            <li class="img-size" data-width="215" data-height="200"><div class="img-size" data-width="200" data-height="200"></div></li>
            <li class="img-size" data-width="215" data-height="200"><div class="img-size" data-width="200" data-height="200"></div></li>
            <li class="img-size" data-width="215" data-height="200"><div class="img-size" data-width="200" data-height="200"></div></li>
            <li class="img-size" data-width="215" data-height="200"><div class="img-size" data-width="200" data-height="200"></div></li>
            <li class="img-size" data-width="215" data-height="200"><div class="img-size" data-width="200" data-height="200"></div></li>
          </ul>
        </div>
      </div>
    </div>
    <div v-show="targetCount > 0" class="img-size target" :class="toyClass[targetIndice[0]]" data-top="750" data-left="275" data-width="215" data-height="200"></div>
    <div v-show="targetCount > 0 && gameMode == 1" class="img-size target" :class="toyClass[targetIndice[1]]" data-top="750" data-left="490" data-width="215" data-height="200"></div>
    <div class="img-size play-btn" data-top="1005" data-left="123" data-width="211" data-height="154" @click="onPlayOnce"></div>
    <div class="img-size playten-btn" data-top="1056" data-left="393" data-width="220" data-height="100" @click="onPlayTen"></div>
    <div class="chance img-size" data-top="412" data-left="472" data-fontSize="30" data-lineHeight="30">游戏机会：<span>{{isLogin ? chanceNum : '--'}}</span></div>
    <div class="how-get img-size" data-top="1242" data-left="266" data-width="228" data-height="36" @click="onHowTo($event, 0)"></div>
  </div>
</template>
<script>
    const cSubmitItv = 1001;
    const cMoveOffset = 100;
    const cMoveTime = 220;
    const cAnmSpeed = 320;
    const cWaitToSnatch = 1550;
    const cLiftTime = 800;
    const cMoveItv = 0;
    const cShowLen = 3;
    const cToyClass = ['cat', 'altman', 'gourd-boy', 'mcdull', 'grey-wolf', 'cat-officer'];
    const cSnachPos = 4;  //抓取公仔的位置
    const cptMinCd = (a, b) => {
        if (b == 0) return a;
        return cptMinCd(b, a % b);
    };
    const cptSum = arr => { return arr.reduce((total, item) => {return total + item;}, 0);}
    const createRandomOrder = (mode, odds, snatchPos) => {
        let intOdds = odds.map(item => {return Math.floor(item * 100);});
        const oddsMinCd = intOdds.slice(1).reduce((curMinCd, item) => {
            return cptMinCd(curMinCd, item);
        }, intOdds[0]);
        intOdds = intOdds.map(item => {return item / oddsMinCd;});
        //生成将被抓起的公仔
        let targetToyIndice = [];
        //第一个
        const firstRand = Math.floor(Math.random() * cptSum(intOdds));
        const cptTgtIndex = (rand, arr) => {
            for (let i = 0; i < arr.length; i++) {
                const sum = arr.slice(0, i + 1).reduce((total, item) => { return total + item;}, 0);
                if (rand < sum) {
                    return i;
                }
            }
        };
        targetToyIndice.push(cptTgtIndex(firstRand, intOdds));
        const origToyIndice = odds.map((item, index) => {return index;});
        //第二个
        if (mode == 1) {
            const leftToyIndice = [...origToyIndice.slice(0, targetToyIndice[0]), ...origToyIndice.slice(targetToyIndice[0] + 1)];
            const leftToyOdds = [...intOdds.slice(0, targetToyIndice[0]), ...intOdds.slice(targetToyIndice[0]+1)];
            const secondRand = Math.floor(Math.random() * cptSum(leftToyOdds));
            const secondRandIndex = cptTgtIndex(secondRand, leftToyOdds);
            targetToyIndice.push(leftToyIndice[secondRandIndex]);
        }
        //生成其他公仔的乱序
        let arr = [];
        let otherToyIndice = origToyIndice.filter(item => {return targetToyIndice.indexOf(item) === -1;});
        const len = otherToyIndice.length;
        for(let i = 0; i < len; i++) {
            const curLen = otherToyIndice.length;
            const idx = Math.floor(Math.random() * curLen);
            arr.push(otherToyIndice[idx]);
            otherToyIndice = otherToyIndice.filter((item, index) => {return index != idx});
        }
        return [...arr.slice(0, snatchPos), ...targetToyIndice, ...arr.slice(snatchPos)];
    };
    const coordinator = (() => {
        let stopMove = false;
        return {
            checkStop(){
                return stopMove;
            },
            setStop(){
                stopMove = true;
            },
            reset(){
                stopMove = false;
            }
        };
    })();
    import infiniteMove from '../../common/Lunbo';
    import {requestService, httpStatus, httpParticipate, httpChance, httpPlay} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                chanceNum: 0,
                investAmount: 0,
                gameMode: undefined,
                toyOdds: [19.6, 19.6, 2, 19.6, 19.6, 19.6],
                isAjaxing: false,
                isPlaying: false,
                toyIndice: [],
                conboxSeq: 0,
                moveCount: 0,
                targetCount: 0
            };
        },
        components : {
            'lockScreen' : function (resolve) {
                require(['./lockScreen'], resolve);
            }
        },
        computed : {
            toyClass(){
                return cToyClass;
            },
            targetClass(){
                let arr = [];
                let idx = (this.targetCount + 1) % cToyClass.length;
                idx = this.toyIndice[idx];
                arr.push(cToyClass[idx]);
                idx = (idx + 1) % cToyClass.length;
                idx = this.toyIndice[idx];
                arr.push(cToyClass[idx]);
                return arr.slice(0);
            },
            /*targetIndice(){
                let arr = [];
                let idx = (this.targetCount) % cToyClass.length;
                idx = this.toyIndice[idx];
                arr.push(idx);
                idx = (this.targetCount + 1) % cToyClass.length;
                idx = this.toyIndice[idx];
                arr.push(idx);
                return arr.slice(0);
            },*/
            targetIndice(){
                let arr = [];
                let idx = (this.targetCount + 1) % cToyClass.length;
                idx = this.toyIndice[idx];
                arr.push(idx);
                idx = (this.targetCount + 2) % cToyClass.length;
                idx = this.toyIndice[idx];
                arr.push(idx);
                return arr.slice(0);
            },
            modeName(){
                return this.gameMode === undefined ?
                    '----' : ['普通模式', '疯狂模式'][this.gameMode];
            }
        },
        mounted(){
            T.setImgSize();
            this.isLogin = T.isLogin;
            if (!this.isLogin) {
                return;
            }
            this.isAjaxing = true;
            this.getActivityStatus();
        },
        methods: {
            onRule : function () {
                window.location.replace(window.location.pathname + "#/rule/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            onHowTo(evt, type) {
                requirePop("howTo", {
                    props : {
                        transition : 'fadeIn',
                        contentType : type,
                        investAmount : this.investAmount
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
                    const {chance, pattern, investAmount, lottery} = _data.map;
                    this.chanceNum = chance;
                    this.gameMode = pattern;
                    this.investAmount = investAmount;
                    if (lottery && lottery.length === cToyClass.length) {
                        this.toyOdds = lottery.slice(0);
                    }
                    this.__prepareNewGame();
                    this.isAjaxing = false;
                    this.$nextTick(() => {T.setImgSize();});
                });
            },
            __prepareNewGame(){
                coordinator.reset();
                this.moveCount = 0;
                this.targetCount = 0;
                this.isPlaying = false;
                const conbox = document.querySelector("#BoxUl");
                const container = conbox.parentElement;
                document.querySelectorAll(".conbox:not(#BoxUl)").forEach(node => {container.removeChild(node);});
                let clone = conbox.cloneNode(true);
                clone.style.display = "block";
                this.toyIndice = createRandomOrder(this.gameMode, this.toyOdds, cSnachPos - 1);//console.log(this.toyIndice);
                [].forEach.call(clone.firstChild.children, (node, index) => {node.firstChild.classList.add(cToyClass[this.toyIndice[index]]);});
                clone.id = 'BoxUl-' + this.conboxSeq++;
                container.insertBefore(clone, conbox);
            },
            onPlayOnce: function () {
                if (this.chanceNum < 1) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : 1
                        }
                    });
                    return;
                }
                if (this.isPlaying) return;
                this.isPlaying = true;
                const conbox = document.querySelector(".conbox:not(#BoxUl)");
                infiniteMove(conbox.id,'btnl','btnr','BoxSwitch',true,'left',true,cMoveOffset,cMoveTime,cMoveItv,cShowLen, coordinator.checkStop, () => {this.moveCount++;}, () => {
                    this.targetCount = this.moveCount;
                    let container = conbox.parentElement;
                    let newOne = conbox.cloneNode(true);
                    newOne.id = 'BoxUl-' + this.conboxSeq++;
                    newOne.className = newOne.className.replace(" enter-up-bounce", "");
                    container.replaceChild(newOne, conbox);
                    jQuery(".boom").animate({top: "-50px"}, cLiftTime);
                    let tgtToy = document.querySelector(".img-size." + cToyClass[this.toyIndice[(this.targetCount + 1) % cToyClass.length]]);
                    tgtToy.style.visibility = "hidden";
                    if (this.gameMode == 1) {tgtToy.parentNode.nextElementSibling.firstChild.style.visibility = "hidden";}
                    jQuery(".target").animate({top: "-=50px"}, cLiftTime, this.__submitGame());
                });
                const startTime = Date.now();
                const waitItv = setInterval(() => {
                    const passTime = Date.now() - startTime;
                    if (passTime < cWaitToSnatch) return;
                    clearInterval(waitItv);
                    jQuery(".boom").animate({top: '0px'}, cAnmSpeed, (() => {
                        let runTimes = 0;
                        return () => {
                            if (runTimes++ > 0) return;
                            coordinator.setStop();
                            /*this.$nextTick(() => {
                                this.targetCount = this.moveCount;
                                let container = conbox.parentElement;
                                let newOne = conbox.cloneNode(true);
                                newOne.id = 'BoxUl-' + this.conboxSeq++;
                                newOne.className = newOne.className.replace(" enter-up-bounce", "");
                                container.replaceChild(newOne, conbox);
                                jQuery(".boom").animate({top: "-50px"}, cLiftTime);
                                let tgtToy = document.querySelector(".img-size." + cToyClass[this.toyIndice[(this.targetCount + 1) % cToyClass.length]]);
                                tgtToy.style.visibility = "hidden";
                                if (this.gameMode == 1) {tgtToy.parentNode.nextElementSibling.firstChild.style.visibility = "hidden";}
                                jQuery(".target").animate({top: "-=50px"}, cLiftTime, this.__submitGame());
                            });*/
                        }
                    })());
                }, 0);
            },
            __submitGame(){
                let runTimes = 0;
                return () => {
                    if (runTimes++ > 0) return;
                    this.isAjaxing = true;
                    let timerOn = true;
                    setTimeout(() => {timerOn = false;}, cSubmitItv);
                    const baseParam = {
                        uid: T.uid,
                        pattern: this.gameMode,
                        isMany: false,
                        cartoon1: this.targetIndice[0] + 1
                    };
                    let params = this.gameMode > 0 ?
                        {...baseParam, ...{cartoon2: this.targetIndice[1] + 1}} :
                        baseParam;
                    requestService(httpPlay, params, _data => {
                        let itv = setInterval(() => {
                            if (timerOn == false) {
                                clearInterval(itv);
                                this.isAjaxing = false;
                                const {success, errorCode, errorMsg} = _data;
                                if (success == false) {
                                    let stCode = {'10009' : 1}[errorCode + ''];
                                    if (stCode) {
                                        requirePop("notify", {
                                            props : {
                                                transition : 'bounceIn',
                                                popState : stCode
                                            },
                                            on : {
                                                "close-only-event" : this.__prepareNewGame
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
                                        bus.$on("closePopEvent", this.__prepareNewGame);
                                    }
                                    return false;
                                }
                                const {totalchance, prizeType} = _data.map;
                                this.chanceNum = totalchance;
                                requirePop("showGift", {
                                    props : {
                                        transition : "rotate3d",
                                        popState : [1, 2][this.gameMode],
                                        toy : this.targetIndice.slice(0),
                                        giftType : prizeType
                                    },
                                    on : {
                                        "close-only-event" : this.__prepareNewGame,
                                        "go-my-event" : () => {this.$emit("consult-records");},
                                    }
                                });
                            }
                        }, 1);
                    });
                }
            },
            onPlayTen: function () {
                if (this.chanceNum < 10) {
                    requirePop("notify", {
                        props : {
                            transition: 'bounceIn',
                            popState : this.chanceNum > 0 ? 2 : 1
                        }
                    });
                    return;
                }
                if (this.isPlaying) return;
                this.isAjaxing = true;
                let timerOn = true;
                setTimeout(() => {timerOn = false;}, cSubmitItv);
                let params = {
                    uid: T.uid,
                    pattern: this.gameMode,
                    isMany: true
                };
                requestService(httpPlay, params, _data => {
                    let itv = setInterval(() => {
                        if (timerOn == false) {
                            clearInterval(itv);
                            this.isAjaxing = false;
                            const {success, errorCode, errorMsg} = _data;
                            if (success == false) {
                                let stCode = {'10009' : 1, '10011' : 2}[errorCode + ''];
                                if (stCode) {
                                    requirePop("notify", {
                                        props : {
                                            transition : 'bounceIn',
                                            popState : stCode
                                        },
                                        on : {
                                            "close-only-event" : () => {}
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
                            const {totalchance} = _data.map;
                            this.chanceNum = totalchance;
                            requirePop("showGift", {
                                props : {
                                    transition : "rotate3d",
                                    popState : this.gameMode + 3
                                },
                                on : {
                                    "go-my-event" : () => {this.$emit("consult-records");}
                                }
                            });
                        }
                    }, 1);
                });
            }
        }
    }
</script>