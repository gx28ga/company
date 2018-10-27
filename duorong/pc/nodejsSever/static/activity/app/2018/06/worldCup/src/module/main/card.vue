<style lang='sass' scoped>
  @import '../../css/global.scss';
  .main-section.card {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .mid-align{
      text-align: center;
    }
    .top-bar{
      @include contain("../../images/top-bar.png");
      position: relative;
    }
    .content-wrapper{
      position: relative;
      background: #073190;
      .title{
        width: 100%;
        div {
          display: inline-block;
          border-bottom: 3px solid #bf0008;
          color: #FFF;
        }
      }
      .general-card-section{
        width: 100%;
        background: #014099;
        .card-img{
          height: 100%;
          @include contain("../../images/general-card.png");
          background-position: center;
        }
        .counter{
          color: #efe432;
        }
        .xchg-btn{
          font-weight: bold;
          margin: 0 auto;
        }
        .xchg-btn-active{
          @extend .xchg-btn;
          background: #efe432;
          color: #bf0008;
        }
        .xchg-btn-inactive{
          @extend .xchg-btn;
          background: #666;
          color: #DDD;
        }
      }
      .general-card-section > div{
        display: inline-block;
        vertical-align: middle;
      }
      .team-cards-section{
        width: 100%;
        .wrapper{
          margin: 0 auto;
        }
        .wrapper > div{
          display: inline-block;
          vertical-align: top;
          p {
            width: 100%;
            color: #efe432;
          }
          position: relative;
          .rank{
            position: absolute;
            border: 2px solid #c40000;
            color: #c40000;
            font-weight: bold;
            transform: rotate(-25deg);
          }
        }
        .argentina{
            @include contain("../../images/card/argentina.png");
        }
        .australia{
            @include contain("../../images/card/australia.png");
        }
        .belgium{
            @include contain("../../images/card/belgium.png");
        }
        .brazil{
            @include contain("../../images/card/brazil.png");
        }
        .columbia{
            @include contain("../../images/card/columbia.png");
        }
        .costa-rica{
            @include contain("../../images/card/costa-rica.png");
        }
        .croatia{
            @include contain("../../images/card/croatia.png");
        }
        .denmark{
            @include contain("../../images/card/denmark.png");
        }
        .egypt{
            @include contain("../../images/card/egypt.png");
        }
        .england{
            @include contain("../../images/card/england.png");
        }
        .france{
            @include contain("../../images/card/france.png");
        }
        .germany{
            @include contain("../../images/card/germany.png");
        }
        .iceland{
            @include contain("../../images/card/iceland.png");
        }
        .iran{
            @include contain("../../images/card/iran.png");
        }
        .japan{
            @include contain("../../images/card/japan.png");
        }
        .korea{
            @include contain("../../images/card/korea.png");
        }
        .mexico{
            @include contain("../../images/card/mexico.png");
        }
        .morocco{
            @include contain("../../images/card/morocco.png");
        }
        .nigeria{
            @include contain("../../images/card/nigeria.png");
        }
        .panama{
            @include contain("../../images/card/panama.png");
        }
        .peru{
            @include contain("../../images/card/peru.png");
        }
        .poland{
            @include contain("../../images/card/poland.png");
        }
        .portugal{
            @include contain("../../images/card/portugal.png");
        }
        .russia{
            @include contain("../../images/card/russia.png");
        }
        .saudi-arabia{
            @include contain("../../images/card/saudi-arabia.png");
        }
        .senegal{
            @include contain("../../images/card/senegal.png");
        }
        .serbia{
            @include contain("../../images/card/serbia.png");
        }
        .spain{
            @include contain("../../images/card/spain.png");
        }
        .sweden{
            @include contain("../../images/card/sweden.png");
        }
        .switzerland{
            @include contain("../../images/card/switzerland.png");
        }
        .tunisia{
            @include contain("../../images/card/tunisia.png");
        }
        .uruguay{
            @include contain("../../images/card/uruguay.png");
        }
      }
      table{
        margin: 0 auto;
        border-collapse: collapse;
        color: #FFF;
      }
      th, td{
        border: 1px solid #073190;
      }
      th {
        background: #1A70C0;
      }
      td {
        background: #014099;
      }
      .note{
        margin: 0 auto;
        color: #FFF;
      }
    }
  }
</style>
<template>
  <div class="main-section card">
    <lock-screen :lock="isAjaxing"></lock-screen>
    <div class="img-size top-bar" data-width="750" data-height="310"></div>
    <div class="img-size content-wrapper" data-width="750" data-minHeight="1004" data-paddingBottom="120">
      <div class="img-size title mid-align" data-marginBottom="15">
        <div class="img-size" data-padding="5" data-fontSize="24" data-lineHeight="30">我的球队卡片</div>
      </div>
      <div class="img-size general-card-section mid-align" data-marginTop="30" data-height="188">
        <div class="img-size card-img" data-width="90" data-marginRight="30"></div>
        <div class="img-size">
          <p class="img-size counter" data-fontSize="24" data-lineHeight="60">我的万能卡：{{myGeneral}}张</p>
          <div class="img-size mid-align" :class="myGeneral > 0 ? 'xchg-btn-active' : 'xchg-btn-inactive'" data-borderRadius="28" data-width="189" data-height="58" data-fontSize="24" data-lineHeight="58" @click="myGeneral < 1 || onShowXchg()">转换成球队卡</div>
        </div>
      </div>
      <div class="img-size team-cards-section" data-marginTop="50">
        <div class="img-size wrapper" data-width="650">
          <div v-for="(card, no) in teamCards" class="img-size" data-marginBottom="15" :data-marginRight="(no + 1) % 4 === 0 ? 0 : 56">
            <div class="img-size" :class="teamClass[card.giftId - 1]" data-width="120" data-height="180"></div>
            <p v-if="card.num < 1" class="img-size mid-align" data-fontSize="32" data-lineHeight="70">暂无</p>
            <p v-else class="img-size mid-align" data-fontSize="36" data-lineHeight="70">&times; {{card.num}}</p>
            <div v-if="card.teamRank < 32" class="img-size rank mid-align" data-borderRadius="15" data-top="50" data-left="0" data-width="80" data-fontSize="30" data-lineHeight="40">{{card.teamRank | rankName}}</div>
          </div>
        </div>
      </div>
      <div class="img-size title mid-align" data-marginBottom="15">
        <div class="img-size" data-padding="5" data-fontSize="24" data-lineHeight="30">卡片奖项</div>
      </div>
      <table>
        <tr>
          <th class="img-size" data-width="296" data-fontSize="24" data-lineHeight="50">球队卡片</th>
          <th class="img-size" data-width="296" data-fontSize="24" data-lineHeight="50">奖 项</th>
        </tr>
        <tr v-for="item in giftMap" class="img-size" data-fontSize="18" data-lineHeight="40">
          <td class="img-size" data-paddingLeft="20">{{item.card}}</td>
          <td class="mid-align">{{item.gift}}</td>
        </tr>
      </table>
      <p class="img-size note" data-width="585" data-fontSize="18" data-lineHeight="48">*奖项自动获得，无需兑换操作，以获得的最高奖项为准，不可累积获得。</p>
      <p class="img-size note" data-width="585" data-fontSize="18" data-lineHeight="48">*奖项对应的球队卡片，待比赛结束出比赛结果之后确定。</p>
    </div>
  </div>
</template>
<script>
    const cTeamClass = [
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
    const cGiftMap = [
        {card: '世界杯32支球队全部卡片 x 1', gift: 'BOSE真无线耳机'},
        {card: '16强球队卡片', gift: 'Kindle Paperwhite'},
        {card: '8强球队卡片', gift: '欧乐b电动牙刷'},
        {card: '4强球队卡片', gift: '星享卡'},
        {card: '冠军球队卡片 x 3', gift: '小米移动电源5000mah'}
    ]
    const cSubmitItv = 1001;
    import {requestService, httpMyCard, httpXchg} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isAjaxing: false,
                myGeneral: bus.$data.generalCard,
                teamCards: undefined
            };
        },
        components: {
            "lockScreen" : function (resolve) {
                require(["./lockScreen"], resolve);
            }
        },
        computed: {
            teamClass(){
                return cTeamClass;
            },
            giftMap(){
                return cGiftMap;
            }
        },
        filters : {
            rankName(rank){
                switch (rank) {
                    case 1 :
                        return "冠军";
                    case 4 :
                        return "四强";
                    case 8 :
                        return "八强";
                    case 16:
                        return "十六强";
                    default :
                        return ''
                }
            }
        },
        mounted(){
            T.setImgSize();
            if (T.isLogin) {
                this.__getMyCards();
            }
        },
        methods: {
            __getMyCards : function () {
                if (!T.isLogin) return false;
                this.isAjaxing = true;
                let params = {uid: T.uid};
                requestService(httpMyCard, params, _data => {
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
                    const {userCard} = _data.map;
                    this.teamCards = userCard.slice(0);
                    this.$nextTick(() => {T.setImgSize();});
                });
            },
            onShowXchg(){
                requirePop('xchg', {
                    props : {
//                        transition : 'mask'
                    },
                    on : {
                        'submit-xchg-event' : this.__submitXchg
                    }
                });
            },
            __submitXchg(teamCd){
                this.isAjaxing = true;
                let timerOn = true;
                setTimeout(() => {timerOn = false;}, cSubmitItv);
                const params = {
                    uid: T.uid,
                    prizeId: teamCd
                };
                requestService(httpXchg, params, _data => {
                    let itv = setInterval(() => {
                        if (timerOn === false) {
                            clearInterval(itv);
                            this.isAjaxing = false;
                            const {success, errorMsg} = _data;
                            if (success == false) {
                                requirePop('warning', {
                                    props : {
                                        transition : 'bounceIn',
                                        title : "系统提示",
                                        detail: errorMsg ? errorMsg : '系统错误，请联系客服。',
                                        btnBackHome : false
                                    }
                                });
                                return false;
                            }
                            requirePop('notify', {
                                props : {
                                    transition : 'rotate3d',
                                    popState : 6,
                                    xchgedTeam: cTeamName[teamCd - 1]
                                },
                                on : {
                                    "close-only-event" : this.__getMyCards
                                }
                            });
                            this.myGeneral--;
                            bus.$data.generalCard = this.myGeneral;
                        }
                    }, 1);
                });
            }
        }
    }
</script>