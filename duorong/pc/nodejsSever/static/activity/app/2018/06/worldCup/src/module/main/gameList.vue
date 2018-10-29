<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section.game-list {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .mid-align{
      text-align: center;
    }
    .top-bar{
      @include contain("../../images/top-bar.png");
      position: relative;
      .my-betting-link{
        position: absolute;
        background: #DA1623;
        color: #FFF;
        font-weight: bold;
      }
    }
    .content-wrapper {
      position: relative;
      background: #073190;
      .head{
        div{
          display: inline-block;
          vertical-align: middle;
          color: #FFF;
        }
        .date-label{
          border: 1px solid #FFF;
          background: #166DB1;
        }
        span{
          color: #F00;
        }
      }
      .game-card{
        @include contain("../../images/game-card.png");
        position: relative;
        .intro{
          border-bottom: 1px solid #BCB18B;
          color: #FFF;
          position: relative;
          p{
            position: absolute;
            span{
              color: #FFD700;
            }
          }
        }
        .engaged-mark{
          position: absolute;
          border: 1.5px solid #e60012;
          color: #e60012;
          font-weight: bold;
          transform: rotate(-30deg);
        }
        .layer{
          margin: 0 auto;
          color: #FFF;
        }
        .layer > div{
            display: inline-block;
            vertical-align: middle;
        }
        .top-align{
          vertical-align: top!important;
        }
        .argentina{
            @include contain("../../images/flag/argentina.png");
        }
        .australia{
            @include contain("../../images/flag/australia.png");
        }
        .belgium{
            @include contain("../../images/flag/belgium.png");
        }
        .brazil{
            @include contain("../../images/flag/brazil.png");
        }
        .columbia{
            @include contain("../../images/flag/columbia.png");
        }
        .costa-rica{
            @include contain("../../images/flag/costa-rica.png");
        }
        .croatia{
            @include contain("../../images/flag/croatia.png");
        }
        .denmark{
            @include contain("../../images/flag/denmark.png");
        }
        .egypt{
            @include contain("../../images/flag/egypt.png");
        }
        .england{
            @include contain("../../images/flag/england.png");
        }
        .france{
            @include contain("../../images/flag/france.png");
        }
        .germany{
            @include contain("../../images/flag/germany.png");
        }
        .iceland{
            @include contain("../../images/flag/iceland.png");
        }
        .iran{
            @include contain("../../images/flag/iran.png");
        }
        .japan{
            @include contain("../../images/flag/japan.png");
        }
        .korea{
            @include contain("../../images/flag/korea.png");
        }
        .mexico{
            @include contain("../../images/flag/mexico.png");
        }
        .morocco{
            @include contain("../../images/flag/morocco.png");
        }
        .nigeria{
            @include contain("../../images/flag/nigeria.png");
        }
        .panama{
            @include contain("../../images/flag/panama.png");
        }
        .peru{
            @include contain("../../images/flag/peru.png");
        }
        .poland{
            @include contain("../../images/flag/poland.png");
        }
        .portugal{
            @include contain("../../images/flag/portugal.png");
        }
        .russia{
            @include contain("../../images/flag/russia.png");
        }
        .saudi-arabia{
            @include contain("../../images/flag/saudi-arabia.png");
        }
        .senegal{
            @include contain("../../images/flag/senegal.png");
        }
        .serbia{
            @include contain("../../images/flag/serbia.png");
        }
        .spain{
            @include contain("../../images/flag/spain.png");
        }
        .sweden{
            @include contain("../../images/flag/sweden.png");
        }
        .switzerland{
            @include contain("../../images/flag/switzerland.png");
        }
        .tunisia{
            @include contain("../../images/flag/tunisia.png");
        }
        .uruguay{
            @include contain("../../images/flag/uruguay.png");
        }
        .bet-btn{
          display: inline-block;
        }
        .betting{
          background: #DA1622;
          color: #FFF;
        }
        .unbet{
          background: #EDDC63;
          color: #073190;
        }
      }
      .no-game{
        color: #FFF;
      }
    }
  }
</style>
<template>
  <div class="main-section game-list">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="img-size top-bar" data-width="750" data-height="310">
      <div class="img-size my-betting-link mid-align" data-top="21" data-left="518" data-borderRadius="28" data-width="190" data-height="48" data-fontSize="24" data-lineHeight="48" @click="onMyBetting">查看我的竞猜</div>
    </div>
    <div class="img-size content-wrapper" data-width="700" data-paddingTop="20" data-minHeight="904" data-paddingLeft="25" data-paddingRight="25" data-paddingBottom="100">
      <div v-if="gameList && gameList.length < 1" class="img-size no-game game-card mid-align" data-marginTop="100" data-width="700" data-height="370" data-fontSize="36" data-lineHeight="370">已没有更多赛程</div>
      <div v-if="gameList && gameList.length > 0">
        <div class="head">
          <div class="img-size date-label mid-align" data-borderRadius="28" data-width="142" data-height="48" data-fontSize="24" data-lineHeight="48">{{gameDate}} 比赛</div>
          <div class="img-size" data-marginLeft="20" data-fontSize="24" data-lineHeight="48">请在<span>{{deadline}}</span>之前选出您认为的比赛结果</div>
        </div>
        <template v-if="gameList.length > 0">
          <div v-for="(game, no) in gameList" class="img-size game-card" data-marginTop="20" data-marginBottom="50" data-width="700" data-height="370">
            <div class="img-size intro" data-marginLeft="20" data-marginRight="20" data-width="650" data-height="70">
              <p class="img-size" data-fontSize="24" data-lineHeight="70">第{{no + 1}}场</p>
              <p class="img-size" data-right="0" data-fontSize="24" data-lineHeight="70">总投注：<span>{{game.totleNum}}</span>积分</p>
            </div>
            <div v-show="game.isGuessDone === 1" class="img-size engaged-mark mid-align" data-top="130" data-left="305" data-borderRadius="42.5" data-width="82" data-height="82" data-fontSize="24" data-lineHeight="85">已参与</div>
            <div class="img-size layer mid-align" data-padding="25" data-paddingBottom="10" data-width="600">
              <div class="img-size" :class="game.teamA | flagClass" data-width="220" data-height="147"></div><!--
           --><div class="img-size" data-width="160" data-height="147" data-fontSize="36" data-lineHeight="147">vs</div><!--
           --><div class="img-size" :class="game.teamB | flagClass" data-width="220" data-height="147"></div>
            </div>
            <div class="img-size layer top-align mid-align" data-width="600">
              <div class="img-size" data-width="220">
                <p class="img-size" data-width="220" data-fontSize="18" data-lineHeight="20">{{game.isGuessDone === 1 && game.guess === game.teamA ? '已投' + game.betNum + '积分' : '　'}}</p>
                <div class="img-size bet-btn" :class="game.isGuessDone === 1 && game.guess === game.teamA ? 'betting' : 'unbet'" data-borderRadius="28" data-width="150" data-height="45" data-fontSize="24" data-lineHeight="45" @click="game.isGuessDone === 1 || onGoBet(game.id, game.teamA)">{{game.teamA | teamName}}胜</div><br>
                <p class="img-size" data-width="220" data-fontSize="18" data-lineHeight="30">{{game.teamANum}}%投注</p>
              </div><!--
           --><div class="img-size" data-width="160" :style="'visibility:' +(knockout ? 'hidden' : 'visible')">
                <p class="img-size" data-width="160" data-fontSize="18" data-lineHeight="20">{{game.isGuessDone === 1 && game.guess === 0 ? '已投' + game.betNum + '积分' : '　'}}</p>
                <div class="img-size bet-btn" :class="game.isGuessDone === 1 && game.guess === 0 ? 'betting' : 'unbet'" data-borderRadius="28" data-width="120" data-height="45" data-fontSize="24" data-lineHeight="45" @click="game.isGuessDone === 1 || onGoBet(game.id, 0)">平 局</div><br>
                <p class="img-size" data-width="160" data-fontSize="18" data-lineHeight="30">{{game.dogfallNum}}%投注</p>
              </div><!--
           --><div class="img-size" data-width="220">
                <p class="img-size" data-width="220" data-fontSize="18" data-lineHeight="20">{{game.isGuessDone === 1 && game.guess === game.teamB ? '已投' + game.betNum + '积分' : '　'}}</p>
                <div class="img-size bet-btn" :class="game.isGuessDone === 1 && game.guess === game.teamB ? 'betting' : 'unbet'" data-borderRadius="28" data-width="150" data-height="45" data-fontSize="24" data-lineHeight="45" @click="game.isGuessDone === 1 || onGoBet(game.id, game.teamB)">{{game.teamB | teamName}}胜</div><br>
                <p class="img-size" data-width="220" data-fontSize="18" data-lineHeight="30">{{game.teamBNum}}%投注</p>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
    const cFlagClass = [
        'russia', 'portugal', 'france', 'argentina', 'brazil', 'germany', 'belgium', 'poland',
        'saudi-arabia', 'spain', 'australia', 'iceland', 'switzerland', 'mexico', 'panama', 'senegal',
        'egypt', 'morocco', 'peru', 'croatia', 'costa-rica', 'sweden', 'tunisia', 'columbia',
        'uruguay', 'iran', 'denmark', 'nigeria', 'serbia', 'korea', 'england', 'japan'
    ];
    const cTeamName = [
        '俄罗斯', '葡萄牙', '法国', '阿根廷', '巴西', '德国', '比利时', '波兰',
        '沙特阿拉伯', '西班牙', '澳大利亚', '冰岛', '瑞士', '墨西哥', '巴拿马', '塞内加尔',
        '埃及', '摩洛哥', '秘鲁', '克罗地亚', '哥斯达黎加', '瑞典', '突尼斯', '哥伦比亚',
        '乌拉圭', '伊朗', '丹麦', '尼日利亚', '塞尔维亚', '韩国', '英格兰', '日本'
    ];
    const cSubmitItv = 1001;
    import {requestService, httpGame, httpBet, httpMyGuess} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isAjaxing: false,
                gameTime: undefined,
                gameList: undefined,
                knockout: bus.$data.knockout
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        computed: {
            gameDate(){
                const tobj = new Date(this.gameTime);
                return this.gameTime ? tobj.Format("M-d") : '----';
            },
            deadline(){
                const tobj = new Date(this.gameTime - 1000);
                return this.gameTime ? tobj.Format("M-d hh:mm") : '----';
            }
        },
        filters : {
            flagClass(cd){
                return cFlagClass[cd - 1];
            },
            teamName(cd){
                return cTeamName[cd - 1];
            }
        },
        mounted(){
            T.setImgSize();
            if (T.isLogin) {
                this.__getGames();
            }
        },
        methods: {
            __getGames : function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpGame, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                btnBackHome: false
                            },
                            on : {
                                "close-only-event" : () => {
                                    this.$emit("exception-thrown-event");
                                }
                            }
                        });
                        return false;
                    }
                    const {startTime, lifetime, worldCupVOS} = _data.map;
                    this.gameTime = startTime;
                    this.gameList = worldCupVOS.slice(0);
                    this.$nextTick(() => {T.setImgSize();});
                    if (lifetime > 0) {
                        setTimeout(() => {
                            this.__getGames();
                        }, lifetime);
                    }
                });
            },
            computeDrawPercent(l, r) {
                return Math.round(100 - Number(l) - Number(r));
            },
            onMyBetting(){
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpMyGuess, params, _data => {
                    this.isAjaxing = false;
                    const {success, errorMsg} = _data;
                    if (success == false) {
                        this.isAjaxing = false;
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
                    const {RightNum, allNum, totleNum, worldCupGuessVOS} = _data.map;
                    const [engagedGame, winnedGame, winnedSumPoint] = [allNum, RightNum, totleNum];
                    const myBetList = worldCupGuessVOS.map(game => {
                        const gameDate = (miliseconds => {
                            const dtObj = new Date(miliseconds);
                            return dtObj.Format("M-d");
                        })(game.startTime);
                        const teams = [cTeamName[game.teamA - 1], cTeamName[game.teamB - 1]];
                        const betPoint = game.betNum;
                        const betTeam = game.guess === 0 ? "平局" : cTeamName[game.guess - 1] + "胜";
                        const betResult = game.guessResult === 0 ? "错误" :
                                          game.guessResult === 1 ? "正确" : "尚未出结果";
                        const winnedPoint = game.earnings;
                        return {gameDate, teams, betPoint, betTeam, betResult, winnedPoint};
                    });
                    requirePop('myBetGains', {
                        props : {
                            transition : 'mask',
                            engagedGame,
                            myWinnedGame : winnedGame,
                            winnedSumPoint,
                            myBetList
                        }
                    });
                });
            },
            onGoBet(gameId, winner){
                if (bus.$data.point < 10) {
                    requirePop("notify", {
                        props : {
                            transition : "bounceIn",
                            popState : 4
                        }
                    });
                    return;
                }
                requirePop('bet', {
                    props : {
//                        transition : 'mask',
                        betResult : winner === 0 ? "打平" : cTeamName[winner - 1] + ' 胜'
                    },
                    on : {
                        'submit-bet-event' : betPoint => {this.__submitBet(gameId, winner, betPoint);}
                    }
                });
            },
            __submitBet(gameId, winner, betPoint){
                this.isAjaxing = true;
                let timerOn = true;
                setTimeout(() => {timerOn = false;}, cSubmitItv);
                const params = {
                    uid: T.uid,
                    gid: gameId,
                    guess: winner,
                    betNum: betPoint
                };
                requestService(httpBet, params, _data => {
                    let itv = setInterval(() => {
                        if (timerOn === false) {
                            clearInterval(itv);
                            this.isAjaxing = false;
                            const {success, errorCode, errorMsg} = _data;
                            if (success == false) {
//                                let stCode = {'7002' : 1, '7003' : isMany ? 2 : undefined}[errorCode + ''];
//                                if (stCode) {
//                                    requirePop("notify", {
//                                        props : {
//                                            transition : 'bounceIn',
//                                            popState : stCode
//                                        }
//                                    });
//                                } else {
                                    requirePop('warning', {
                                        props : {
                                            transition : 'bounceIn',
                                            title : "系统提示",
                                            detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                            btnBackHome : false
                                        }
                                    });
//                                }
                                return false;
                            }
                            requirePop('notify', {
                                props : {
                                    transition : 'rotate3d',
                                    popState : 5
                                },
                                on : {
                                    "close-only-event" : this.__getGames
                                }
                            });
                            bus.$data.point -= betPoint;
                        }
                    }, 1);
                });
            }
        }
    }
</script>