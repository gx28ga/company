<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";

  .main-box {
    @include contain('../../images/home-bg.jpg');
    position: relative;
    .opr-bar,
    .rule-link,
    .play-link,
    .left-chance,
    .invest-btn,
    .about-chance,
    .score-map,
    .rank-data,
    .tab-right,
    .tab-left,
    .stategy-btn,
    .my-score,
    .score-gift,
    .my-rank,
    .rank-gift,
    .no-data,
    .rank-list,
    .rank-comment,
    .about-invite,
    .invite-btn
    {
      position: absolute;
    }
    .opr-bar{
      @include contain("../../images/opr-bar.jpg");
      .play-link{
        @include contain("../../images/start-btn.png");
      }
      .left-chance{
        color: #FFF;
        text-align: center;
        width: 100%;
      }
      .invest-btn{
        @include contain("../../images/invest-btn.png");
      }
    }
    .about-chance{
      width: 100%;
      color: #FAC51F;
      text-align: center;
      span{
        font-weight: bold;
      }
    }
    .score-map{
      @include contain("../../images/my-score.png");
      color: #FFF;
    }
    .rank-data{
      @include contain("../../images/rank-bg.png");
      color: #FFF;
      .no-data{
        width: 100%;
        color: #FFF;
        text-align: center;
      }
      .td{
        display: inline-block;
        vertical-align: top;
        text-align: center;
      }
      .highlight{
        color: #FFCE00;
        font-weight: bold;
      }
      .rank-comment{
        width: 98%;
        text-align: center;
      }
    }
    .smile-face{
      display: inline-block;
      vertical-align: middle;
      @include contain("../../images/smile-face.png");
    }
    .friend-support{
      display: inline-block;
      vertical-align: middle;
    }
    .about-invite{
      color: #FFF;
    }
  }
</style>
<template>
  <div class="main-box img-size" data-width="750" data-height="2127">
    <div class="opr-bar img-size" data-top="377" data-left="30" data-width="691" data-height="312" data-borderRadius="12">
      <div class="rule-link img-size" data-top="33" data-left="555" data-width="100" data-height="30" @click="onRule"></div>
      <template v-if="isLogin">
        <div class="play-link img-size" data-top="53" data-left="195" data-width="303" data-height="64" @click="onGoPlay"></div>
      </template>
      <template v-if="!isLogin">
        <div v-show="chanceNum <= 0" class="play-link img-size" data-top="53" data-left="195" data-width="303" data-height="64" @click="login"></div>
      </template>
      <div class="left-chance img-size" data-top="130" data-fontSize="18" data-lineHeight="18">您剩余游戏机会：{{isLogin ? chanceNum : '--'}} 次</div>
      <div class="invest-btn img-size" data-top="183" data-left="195" data-width="303" data-height="64" @click="onInvest"></div>
    </div>
    <div class="about-chance img-size" data-top="700" data-fontSize="22" data-lineHeight="36">单笔投资<span>≥20天</span>产品每满<span>10000元</span>，可获得<span>1次</span>游戏机会<br>单笔投资<span>≥120天</span>产品，每满<span>50000元</span>，可获得<span>10次</span>游戏机会，<br>且额外获得【笑脸】<span>100个</span>，以此类推。</div>
    <div v-show="tab == 0" class="score-map img-size" data-top="830" data-left="30" data-width="691" data-height="934">
      <div class="tab-right img-size" data-top="10" data-left="255" data-width="240" data-height="55" @click="tab = 1"></div>
      <template v-if="!isLogin">
        <div class="my-score img-size" data-top="97" data-left="35" data-fontSize="24" data-lineHeight="50">我的成绩：--<br>预计可获得：--</div>
      </template>
      <template v-if="isLogin">
        <div class="my-score img-size" data-top="97" data-left="35" data-fontSize="24" data-lineHeight="40">我的成绩：
          <div class="smile-face img-size" data-marginLeft="10" data-width="40" data-height="40"></div>
          &times; {{myScore | showValue}}<!--
       --><div class="friend-support img-size" data-marginLeft="18" data-fontSize="18" data-height="40" data-lineHeight="45">（其中好友助力：{{friendSupport | showValue}}）</div>
        </div>
        <div class="score-gift img-size" data-top="167" data-left="35" data-fontSize="24" data-lineHeight="24">预计可获得：{{myScoreGift == '' ? '暂无' : myScoreGift}}</div>
      </template>
    </div>
    <div v-show="tab == 1" class="rank-data img-size" data-top="817" data-left="28" data-width="691" data-height="948">
      <div class="tab-left img-size" data-top="23" data-left="53" data-width="182" data-height="55" @click="tab = 0"></div>
      <div class="tab-right img-size" data-top="10" data-left="255" data-width="240" data-height="55" @click="tab = 1"></div>
      <template v-if="!isLogin">
        <div class="my-score img-size" data-top="107" data-left="35" data-fontSize="24" data-lineHeight="50">我的成绩：--<br>当前排名：--<br>预计可获得：--</div>
      </template>
      <template v-if="isLogin">
        <div class="my-score img-size" data-top="107" data-left="35" data-fontSize="24" data-lineHeight="40">我的成绩：
          <div class="smile-face img-size" data-marginLeft="10" data-width="40" data-height="40"></div>
          &times; {{myScore | showValue}}<!--
       --><div class="friend-support img-size" data-marginLeft="18" data-fontSize="18" data-height="40" data-lineHeight="45">（其中好友助力：{{friendSupport | showValue}}）</div>
        </div>
        <div class="my-rank img-size" data-top="170" data-left="35" data-fontSize="24" data-lineHeight="24">当前排名：{{myRank | showValue}}</div>
        <div class="rank-gift img-size" data-top="227" data-left="35" data-fontSize="24" data-lineHeight="24">预计可获得：{{myRankGift == '' ? '暂无' : myRankGift}}</div>
      </template>
      <div v-show="!isLogin || rankList.length <= 0" class="no-data img-size" data-top="340" data-fontSize="32" data-lineHeight="535">暂无数据</div>
      <div  v-show="isLogin && rankList.length > 0">
        <div class="rank-list img-size" data-top="320" data-left="0" data-fontSize="24" data-lineHeight="48">
          <div class="img-size" data-marginBottom="10"><!--
       --><div class="td img-size" data-width="138">排名</div><!--
       --><div class="td img-size" data-width="150">手机号码</div><!--
       --><div class="td img-size" data-width="117">成绩</div><!--
       --><div class="td img-size" data-width="280">奖品名称</div>
          </div>
          <div v-for="(item, index) in rankList" :key="item.rowNo" :class="item.rowNo == myRank ? 'highlight' : ''"><!--
       --><div class="td img-size" data-width="138">{{index + 1}}</div><!--
       --><div class="td img-size" data-width="150">{{item.mobilePhone}}</div><!--
       --><div class="td img-size" data-width="117">{{item.description}}</div><!--
       --><div class="td img-size" data-width="280">{{item.gift}}</div>
          </div>
        </div>
        <div class="rank-comment img-size" data-top="890" data-fontSize="24">* 以{{endTime | convertTimestampToDatetime}} 23:59:59最终名次为准，以上数据仅供参考</div>
      </div>
    </div>
    <div v-show="isLogin == false" class="stategy-btn img-size" data-top="965" data-left="570" data-width="113" data-height="45" @click="login"></div>
    <div v-show="isLogin == true" class="stategy-btn img-size" data-top="965" data-left="570" data-width="113" data-height="45" @click="onGoStrategy"></div>
    <div class="about-invite img-size" data-top="1825" data-left="200" data-fontSize="18" data-lineHeight="36">活动期间，邀请好友参加助力，好友每一笔≥5000元的<br>投资（除新手宝），邀请人都能获得【笑脸】奖励<br>X = (A*B/360)/100 计算(四舍五入取整)</div>
    <div v-show="isLogin == false" class="invite-btn img-size" data-top="1982" data-left="224" data-width="305" data-height="70" @click="login"></div>
    <div v-show="isLogin == true" class="invite-btn img-size" data-top="1982" data-left="224" data-width="305" data-height="70" @click="onInviteFriend"></div>
  </div>
</template>
<script>
    import {httpStatus, httpParticipate, httpChance, httpHomeData, httpUserInfo} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                status: 0,
                isLogin: false,
                chanceNum: 0,
                tab: 0,
                myScore: 0,
                friendSupport: 0,
//                myScoreGift: '',
                myRankGift: '',
                myRank: 0,
                possiblePrize: '',
                rankList: [],
                isFirst: false,
                userMobile: '',
                userName: '',
                recommCode: '',
                sharePage: 38,
                shareTitle: '送你1588元红包，快来帮我拿大奖！',
                shareContent: '您的好友username正在参加挑战iPhoneX Plus大奖活动，需要你的帮助，有1588红包＆12%高收益拿！',
                shareLogo: 'http://www.duorongcf.com/activity/app/huaruiBank/images/logo.png',
                shareLinkBase: 'http://www.duorongcf.com/activity/app/smileFace/#/empower'
            };
        },
        computed: {
            myScoreGift: function () {
                let score = Number(this.myScore);
                let gift = '暂无';
                if (score >= 23300) {
                    gift = '3000元京东卡';
                } else if (score >= 12888) {
                    gift = '1500元京东卡';
                } else if (score >= 10000) {
                    gift = '1000元京东卡';
                } else if (score >= 6200) {
                    gift = '500元京东卡';
                } else if (score >= 2700) {
                    gift = '150元京东卡';
                } else if (score >= 1788) {
                    gift = '80元京东卡';
                } else if (score >= 1000) {
                    gift = '30元京东卡';
                }
                return gift;
            }
        },
        filters: {
            convertTimestampToDatetime : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy-MM-dd');
            },
            showValue : function (input) {
                let val = Number(input);
                if (val) return val;
                return '暂无';
            }
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            this.getActivityStatus();
        },
        methods: {
            onRule : function () {
                let goUrl = window.location.pathname + "#/rule";
                if (T.wap) {
                    goUrl += "?wap=true";
                    if (T.isLogin){
                        goUrl += "&uid=" + T.uid;
                    }
                } else {
                    if (T.isLogin) {
                        goUrl += "?uid=" + T.uid;
                    }
                }
                window.location.replace(goUrl);
            },
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
                        if (!_data.hasOwnProperty("success")) {
                            callAfter(_data);
                            return;
                        }
                        if (!_data.success && !_data.errorMsg) {
                            let Pop = require('../../pop/index.js');
                            let pop = new Pop({
                                title: '&nbsp;',
                                content: "操作失败，请联系客服！",
                                okBtn: true,
                                cancelBtn: false,
                                timing: 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt: '确定',
                            });
                            return false;
                        }
                        callAfter(_data);
                    }
                });
            },
            getActivityStatus: function () {
                this.__requestService(httpStatus, {}, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                      requirePop('warning', {
                          props : {
                              transition : 'bounceIn',
                              title : '系统提示',
                              detail: _data.errorMsg,
                              btnBackHome: true
                          }
                      });
                      return false;
                    }
                    this.status = _data.map.status;
                    this.endTime = _data.map.endTime;
                    if (this.status < 0) {  //活动未开始
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '敬请期待',
                                detail: '活动即将开始, 期待您的热情参与!',
                                btnBackHome: true
                            }
                        });
                        return false;
                    }
                    if (this.status >= 0){  //活动进行中或结束
                        this.checkParticipatable();
                    }
                });
            },
            checkParticipatable: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpParticipate + '?uid=' + T.uid, params, _data => {
                    if (!_data.flag) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '感谢关注！',
                                detail: 'VIP渠道用户不能参加，敬请期待后续活动……',
                                btnBackHome: true
                            }
                        });
                    } else {
                        if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg,
                                    btnBackHome: false
                                }
                            });
                            return false;
                        }
//                        this.getHomeData();
                        this.getMyChance();
                    }
                });
            },
            getMyChance: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpChance + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg,
                                btnBackHome: _data.errorCode == 2001 ? true : false
                            }
                        });
                        return false;
                    }
                    this.chanceNum = parseInt(_data.map.totalchance) ? _data.map.totalchance : 0;
                    this.myScore = _data.map.smileTotal;
                    setTimeout(() => {T.setImgSize();}, 20);
                    this.getHomeData();
                });
            },
            getHomeData: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpHomeData + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                      requirePop('warning', {
                          props : {
                              transition : 'bounceIn',
                              title : '系统提示',
                              detail: _data.errorMsg,
                              btnBackHome: false
                          }
                      });
                      return false;
                    }
                    this.myRank = _data.map.myRank;
                    this.friendSupport = _data.map.smileHY;
//                    this.myScoreGift =  _data.map.myScoreGift;
                    this.myRankGift = _data.map.myGift.trim();
                    this.myRankGift = this.myRankGift == '无' ? '暂无' : this.myRankGift;
                    this.rankList = _data.map.rankList;
                    this.isFirst = _data.map.isFirst;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            login: function () {
                if (!T.getQueryString('wap') || T.getQueryString('force') === 'force') {
                    T.login();
                } else {
                    this.__launchApp();
                }
            },
            __launchApp : function () {
                let iphoneSchema = 'duorongcf://';
                let iphoneDownUrl = 'itms-apps://itunes.apple.com/cn/app/duo-rong-li-cai/id1095192150?mt=8';
                let androidSchema = 'duorongcf://';
                let androidDownUrl = 'http://app.duorongcf.com/dr_app.apk';
                if (T.weixin) {
                    requirePop("warning", {
                        props: {
                            transition: 'bounceIn',
                            title: '温馨提示',
                            detail: '请点击右上角选择"在浏览器打开"',
                            btnBackHome: false
                        }
                    });
                } else {
                    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                        var loadDateTime = new Date();
                        window.setTimeout(function() {
                            var timeOutDateTime = new Date();
                            if (timeOutDateTime - loadDateTime < 2200) {
                                window.location.href = iphoneDownUrl;//ios下载地址
                            } else {
                                window.close();
                            }
                        },2000);
                        window.location.href = iphoneSchema;
                    }else if (navigator.userAgent.match(/android/i)) {
                        try {
                            window.location.href = androidSchema;
                            setTimeout(function(){
                                window.location.href = androidDownUrl; //android下载地址
                            },500);
                        } catch(e) {
                            window.location.href = androidDownUrl;
                        }
                    }
                }
            },
            onInvest: function () {
                T.callApp.investment();
            },
            onGoPlay: function () {
                if (this.chanceNum <= 0) {
                    requirePop("playResult", {
                        props : {
                            transition: 'bounceIn',
                            popState : 1
                        }
                    });
                    return;
                }
                if (this.isFirst) {
                    this.onGoStrategy(true);
                    return;
                }
                window.location.replace(window.location.pathname + "#/play/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            onGoStrategy(isFirst = false) {
                let pathUrl = window.location.pathname + "#/strategy/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid;
                if (isFirst === true) {
                    pathUrl += "&isFirst=true";
                }
                window.location.replace(pathUrl);
//                window.location.replace(window.location.pathname + "#/strategy/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
            },
            __markUserName : function(input) {
                if (typeof  input != 'string') return input;
                let arr = input.split('');
                arr = arr.map((chr, i) => {
                    return i === 0 ? chr : '*';
                });
                return arr.join('');
            },
            getUserInfo: function() {
                let params = {
                    uid: T.uid
                };
                this.__requestService(httpUserInfo, params, _data => {
                    /*if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg,
                                btnBackHome: false
                            }
                        });
                        return false;
                    }*/
                    this.recommCode = _data.recommCode;
//                    this.userMobile = this.__markMobileNum(_data.mobilePhone);
                    this.userName = this.__markUserName(_data.userName);
                    this.__launchShare();
                });
            },
            __launchShare: function () {
                let title = encodeURIComponent(this.shareTitle);
                let content = encodeURIComponent(this.shareContent.replace("username", this.userName));
                let pic = encodeURIComponent(this.shareLogo);
//                let src = encodeURIComponent(this.shareLinkBase + "?recommCode=" + this.recommCode + "&userName=" + this.userName + "&mobilePhone=" + this.userMobile);
                let src = encodeURIComponent(this.shareLinkBase + "?recommCode=" + this.recommCode);
                window.location.href = "jump://page=" + this.sharePage + "?title=" + title + "&content=" + content + "&pic=" + pic + "&src=" + src;
            },
            onInviteFriend: function () {
                if (!T.getQueryString("wap")) {
                    this.getUserInfo();
                } else {
                    this.__launchApp();
                }
            }
        }
    }
</script>