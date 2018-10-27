<style lang='sass'>
  @import '../../css/global.scss';
  @import "../../vendor/all-animation.min.css";
  .main-section {
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    .rank-wrapper {
      position: relative;
      color: #FFF;
      @include contain("../../images/rank-bg.jpg");
      .back-btn, .my-card, .top-area, .list-area, .no-data{
        position: absolute;
      }
      .back-btn{
        font-size: 2rem;
      }
      .top-area .item{
        .label{
          color: #151640;
          display: inline-block;
          text-align: right;
          width: 50%;
        }
        span{
          color: #FDE006;
        }
      }
      .list-area{
        text-align: center;
        color: #FFF;
        .row{}
        .row > div{
          display: inline-block;
        }
      }
      .no-data{
        text-align: center;
        color: #FFF;
      }
    }
  }
</style>
<template>
  <div class="main-section flip-left-bounce">
    <div class="img-size rank-wrapper" data-width="750" data-height="1484">
      <div class="back-btn img-size" data-left="20" data-top="-10" @click="onBack">&laquo;</div>
      <div class="my-card img-size" data-left="544" data-top="26" data-width="190" data-height="44" @click="onBack"></div>
      <div class="top-area img-size" data-top="780" data-width="750" data-fontSize="24" data-lineHeight="24">
        <div class="item img-size" data-marginBottom="12"><div class="label">已获得的卡片总数：</div> <span>{{myCard > 0 ? myCard : '暂无'}}</span></div>
        <div class="item img-size" data-marginBottom="12"><div class="label">当前排名：</div> <span>{{myRank > 0 ? myRank : '暂无'}}</span></div>
        <div class="item img-size" data-marginBottom="12"><div class="label">预计可获得：</div> <span>{{myGift ? myGift : '暂无'}}</span></div>
      </div>
      <div v-show="rankList.length > 0" class="list-area img-size" data-top="1020" data-left="25">
        <div v-for="(item, i) in rankList" class="row img-size" data-fontSize="24" data-lineHeight="54">
          <div class="img-size" data-width="105">{{i + 1}}</div><!--
       --><div class="img-size" data-width="250">{{item.mobilePhone}}</div><!--
       --><div class="img-size" data-width="125">{{item.description}}</div><!--
       --><div class="img-size" data-width="245">{{item.gift}}</div>
        </div>
      </div>
      <div v-show="rankList.length <= 0" class="no-data img-size" data-top="1135" data-width="750" data-fontSize="32">暂无数据</div>
    </div>
  </div>
</template>
<script>
    import {httpRank} from '../../common/URL';
    import requirePop from '../../pop/requirePop.js';
    export default {
        data: function() {
            return {
                isLogin: false,
                myCard: 0,
                myRank: 0,
                myGift: '',
                rankList: []
            };
        },
        computed: {
        },
        filters: {
            convertTimestampToYmdhhmmss : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy-MM-dd hh:mm:ss');
            }
        },
        mounted(){
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            if (!T.isLogin) {
                T.login();
            } else {
                this.getRank();
            }
        },
        methods: {
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
                        if (!_data.success && !_data.hasOwnProperty('errorMsg')) {
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
            getRank: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpRank + '?uid=' + T.uid, params, _data => {
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
                    this.myCard = (typeof _data.map.myCard == 'number') ? _data.map.myCard : 0;
                    this.myRank = (typeof _data.map.myRank == 'number') ?_data.map.myRank : 0;
                    this.myGift = (_data.map.myGift != '无') ? _data.map.myGift : '';
                    this.rankList = _data.map.rankList;
                    setTimeout(() => {T.setImgSize();}, 20);
                });
            },
            onBack : function () {
                let backFrom = T.getQueryString("backFrom");
                if (!backFrom) return;
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/cards/?wap=true&uid=" + T.uid + "&from=" + backFrom);
                } else {
                    window.location.replace(window.location.pathname + "#/cards/?uid=" + T.uid + "&from=" + backFrom);
                }
            }
        }
    }
</script>