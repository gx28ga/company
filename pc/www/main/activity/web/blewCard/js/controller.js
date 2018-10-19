window.blewCard = function ($scope, $rootscope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript) {
  $rootscope.title = '刮刮卡 赢大奖';
  $scope.prizeList = null;
  $scope.$apply();
  thisIndex = 0;
  var URL = {
    'activityStatus': 'activity/scratchcard/status.do',
    'isChannel': 'activity/scratchcard/participate.do',
    'userInvestInfo': 'activity/scratchcard/invest-info.do',
    'lotteryResult': 'activity/scratchcard/scratch.do',
    'lotteryRecord': 'activity/scratchcard/records.do'
  };
  getScript(['/activity/web/blewCard/js/jquery.paging.js', '/activity/web/blewCard/js/template.js', '/activity/web/blewCard/js/lucky-card.js'], function () {
    thisIndex++;
    if (thisIndex == 3) {
      var web = {
        init: function () {
          this.renderUI();
          this.bindUI();
          this.clickTag = 0;
          this.dateY = 0;
          this.dateM = 0;
          this.dateD = 0;
          this.index = 0;
          this.page = 0;
          this.remainChance = 0;
          this.onOff=true;
          this.count=0;
        },
        renderUI: function () {
          web.logic.status();
          // web.logic.userInvestInfo();
          // web.logic.islogin();
          // web.logic.luckyCard();
          web.logic.reloadUserInfo();
        },
        bindUI: function () {
          $('.pop-bg .close').bind('click', web.logic.closePop);
          $('.login-return').bind('click', web.logic.loginReturn);
          $('.go-login').bind('click', web.logic.loginReturn);
          $('.card-box .now-blew').bind('click', function () {
            $('.card-box .rt').hide();
            // web.onOff=true;
            web.logic.luckyCard();
          });
          $('.get-prize .invest3').bind('click', function(){
                web.logic.luckyCard();
                // web.onOff=true;
          });
          $('.refresh').bind('click',function () {
            window.location.reload();
          });
          $('.blew-card-mode .record').bind('click', function () {
            web.logic.openPop('.prize-popbg');
            setTimeout(function () {
              web.logic.lotteryRecord();
            }, 1000)
          });
        },
        packageFn: function () {
        },
        logic: {
          loginReturn: function () {
            $filter("跳转页面")('denLu', 'activitys.blewCard', 'dl');
          },
          reloadUserInfo: function () {
            if ($filter('isRegister')().register) {//
              $(document).mouseenter(function () {
                web.logic.userInvestInfo();
              })
            }
          },
          lotteryRecord: function () {
            $('.page-con .next').css('cursor', 'pointer');
            $('.page-con .prev').css('cursor', 'pointer');
            $.ajax({
              url: URL.lotteryRecord,
              type: "post",
              dataType: "json",
              async: false,
              data: JSON.stringify({}),
              contentType: "application/json;charset=UTF-8",
              success: function (data) {
                if (data.success) {
                  var last = 6;
                  var start = 0;
                  var index = 1;
                  $scope.prizeListTotal = data.map.result;
                  $scope.totalPage = Math.ceil($scope.prizeListTotal.length / 6);
                  $scope.prizeList = $scope.prizeListTotal.slice(start, last);
                  $('.page-con .active').html(index);
                  $scope.$apply();
                  if ($scope.prizeListTotal.length == 0) { //暂无数据;
                    // $('.prize-pop .list-box').show().next().show();
                    $('.nodata').show();
                  }else{
                    $('.nodata').hide();
                  }
                  $('.page-con .next').unbind().click(function () {

                    $('.page-con .prev').css('cursor', 'pointer');
                        $.ajax({
                          url: URL.lotteryRecord,
                          type: "post",
                          dataType: "json",
                          async: false,
                          data: JSON.stringify({}),
                          contentType: "application/json;charset=UTF-8",
                          success: function (data) {
                            if (data.success) {

                              if ($scope.totalPage ==index ) {
                                $('.page-con .next').css('cursor', 'no-drop');
                                return;
                              }
                              index++;
                              $('.page-con .active').html(index);
                              start = start + 6;
                              if ($scope.prizeListTotal.length - start < 6) { //下一页不够6条,也就是剩下的数组长度小于6
                                $scope.prizeList = $scope.prizeListTotal.slice(start, $scope.prizeListTotal.length);
                                $scope.$apply();
                              } else {
                                $scope.prizeList = $scope.prizeListTotal.slice(start, start + 6);
                                $scope.$apply();
                              }

                            }
                          }
                        })

                      })
                  $('.page-con .prev').unbind().click(function () {
                    $('.page-con .next').css('cursor', 'pointer');
                        $.ajax({
                          url: URL.lotteryRecord,
                          type: "post",
                          dataType: "json",
                          async: false,
                          data: JSON.stringify({}),
                          contentType: "application/json;charset=UTF-8",
                          success: function (data) {
                            if (data.success) {

                              if (index==1 ) {
                                $('.page-con .prev').css('cursor', 'no-drop');
                                return;
                              }
                              index--;
                              $('.page-con .active').html(index);
                              start = start -6;
                                $scope.prizeList = $scope.prizeListTotal.slice(start, start + 6);
                                $scope.$apply();
                            }
                          }
                        })

                      }
                  )
                }
              }

            })
          },
          status: function () {
            $.ajax({
              url: URL.activityStatus,
              type: "post",
              dataType: "json",
              async: false,
              data: JSON.stringify({}),
              contentType: "application/json;charset=UTF-8",
              success: function (data) {
                if (data.success) {
                  var endTime = data.map.endTime;
                  var startTime = data.map.startTime;
                  var date = Date.parse(new Date());
                  if (date > startTime && date < endTime) { //活动进行中
                    web.logic.islogin();
                  } else if (date < startTime) {   //活动未开始
                    web.logic.openPop('.noready-popbg');
                  } else if (date > endTime) {   //活动已结束
                    console.log('结束了');
                    web.logic.openPop('.over-popbg');
                  }

                }
              }
            });
          },
          islogin: function () {
            if (!$filter('isRegister')().register) {//
              $scope.login = 0;
              $('.progress-box p').eq(0).hide().next().show();
              $('.card-box .rt p').html('登录后查看刮奖机会');
              $('.card-box .rt .go-login').show();
              $('.blew-card-mode .record').hide();

              var date2 = Date.parse(new Date());
              // console.log(date2);
              if(date2 >= 1488297600000){
                $('.invest-btn').html('活动已结束').css({'color':'#666','background-image':'url(../activity/web/blewCard/images/investoverbg.png)','width':'241','height':'64','cursor':'no-drop'}).attr('href','javascript:void(0);');
              }
              // console.log('没登录');
              // $('.card-box .now-blew').css('display','none');
            } else {
              $scope.login = 1;
              web.logic.channel();
            }

          },
          userInvestInfo: function () {
            $.ajax({
              url: URL.userInvestInfo,
              type: "post",
              dataType: "json",
              async: false,
              data: JSON.stringify({}),
              contentType: "application/json;charset=UTF-8",
              success: function (data) {
                console.log(data);
                if (data.success) {
                  //用户投资进度条;
                  if(data.map.funtuneOfUser.gameOver==true){
                    //活动已结束（京东卡将于刮刮卡活动结束后统一发放）
                    // console.log('进来了吗');
                    var cardCount=data.map.funtuneOfUser.gotCardCount;
                    var userInvest = data.map.funtuneOfUser.fortune;
                    $('.progress-box p').first().hide();
                    $('.progress-box .nologin').show().html('活动期间，您累计投资金额：'+userInvest +'元，共获得'+cardCount+' 张京东卡').css({'margin-top':'78px','font-size':'30px','margin-left':'148px'});
                    $('.progress-box .over').show().css({'margin-top':'0px','margin-left':'150px'});
                    $('.progress-box .total').hide();
                    $('.progress-box .num-box').hide();
                    // $('.progress-box .nologin').remove();
                    // $('.progress-box p').html('活动期间，您累计投资金额：'+cardCount +'元，共获得'+userInvest+' 张京东卡');
                    // $('.progress-box').next().remove();
                    // $('.blew-card-mode').css('margin-top','37');
                    $('.invest-btn').html('活动已结束').css({'color':'#666','background-image':'url(../activity/web/blewCard/images/investoverbg.png)','width':'241','height':'64','cursor':'no-drop'}).attr('href','javascript:void(0);');
                 

                    var chance = data.map.remainChance;
                    if (chance == 0) {//没有刮奖机会
                      $('.card-box .rt p').html('亲，你当前没有刮刮卡');
                      $('.card-box .rt .invest').show();
                      return;
                    }else{
                      $('.card-box .rt .invest').hide();
                      $('.card-box .rt p').html('亲，你当前有' + chance + '张刮刮卡');
                      $('.card-box .rt .now-blew').show();
                    }

                    

                  }else{


                    var userInvest = data.map.funtuneOfUser.fortune;
                    var remainInvest = parseInt(data.map.funtuneOfUser.prize);
                    var total = userInvest + remainInvest;
                    var widthScale = parseInt(userInvest / total * 100) * 448 / 100;

                    var oneTip = total / 10000/2;
                    var numTip1 = total / 30000;
                    var secTip = total / 10000;
                    var numTip2 = total / 30000 + 1;
                    if(userInvest==0){
                      $('.total .now').css('width', 0);
                      $('.num-box .center i').eq(0).html('3万');
                      $('.num-box .rt i').eq(0).html('6万');
                      $('.num-box .center i').eq(1).html('<span></span>&nbspX1');
                      $('.num-box .rt i').eq(1).html('<span></span>&nbspX2');
                    }
                    if (userInvest / 30000 < 1) {  //判断条件有问题,
                      $('.num-box .center i').eq(0).html(total/10000 + '万');
                      $('.num-box .rt i').eq(0).html((total+30000)/10000 + '万');
                      $('.num-box .center i').eq(1).html('<span></span>&nbspX' + numTip1);
                      $('.num-box .rt i').eq(1).html('<span></span>&nbspX' + numTip2);
                      $('.total .now').css('width', widthScale);
                    }
                    if(userInvest / 30000==1){
                      $('.total .now').css('width', 448);

                      $('.num-box .center i').eq(0).html(userInvest/10000 + '万');
                      $('.num-box .rt i').eq(0).html(secTip + '万');
                      $('.num-box .center i').eq(1).html('<span></span>&nbspX' + userInvest/10000/3);
                      $('.num-box .rt i').eq(1).html('<span></span>&nbspX' + secTip/3);
                    }
                    if (userInvest /30000 > 1) {
                      var oneTip2 = (total / 10000 / 3) - 1;
                      $('.total .now').css('width', 448);
                      $('.total .add').css('width',(userInvest-(total - 30000))/30000*440);
                      $('.num-box .center i').eq(0).html((total - 30000) / 10000 + '万');
                      $('.num-box .rt i').eq(0).html(total / 10000 + '万');
                      $('.num-box .center i').eq(1).html('<span></span>&nbspX' + oneTip2);
                      $('.num-box .rt i').eq(1).html('<span></span>&nbspX' + total / 10000 / 3);
                    }

                    $('.progress-box p').eq(0).html('您当前的累计投资金额：' + userInvest + '元，继续投资' + remainInvest + '元，可以再获得1张京东卡');

                    var chance = data.map.remainChance;
                    if (chance == 0) {//没有刮奖机会
                      $('.card-box .rt p').html('亲，你当前没有刮刮卡');
                      $('.card-box .rt .invest').show();
                      return;
                    }else{
                      $('.card-box .rt .invest').hide();
                      $('.card-box .rt p').html('亲，你当前有' + chance + '张刮刮卡');
                      $('.card-box .rt .now-blew').show();
                    }

                  }
                }
              }
            });
          },

          luckyCard: function () {
            LuckyCard.case({ratio: 0.05, coverImg: '../activity/web/blewCard/images/cardbg2.png'}, function () {
              this.clearCover();
              $('canvas').remove();
              web.count=0;
            });
            $('#cover').bind('mousedown',function(){
              web.onOff=false;
              web.count++;
              if(web.count==1){
                $.ajax({
                  url: URL.lotteryResult,
                  type: "post",
                  dataType: "json",
                  async: false,
                  data: JSON.stringify({}),
                  contentType: "application/json;charset=UTF-8",
                  success: function (data) {
                    if (data.success) {
                      web.onOff=true;
                      $scope.remainChance = data.map.memberRaffleResult.chanceCount;
                      $scope.prizeName = data.map.memberRaffleResult.prizeName;
                      $scope.$apply();
                      web.remainChance = $scope.remainChance;

                      if (web.remainChance == 0) {  //还剩0张刮刮卡
                        $('.get-prize .invest4').show();
                        return;
                      } else {
                        $('.get-prize .invest3').show();
                      }

                      if(data.map.memberRaffleResult.type==5){
                        $('.game-over').show();
                        $('.check-tip').hide();
                      }
                    }
                  }
                })

              }
            })
          },
          channel: function () {
            $.ajax({
              url: URL.isChannel,
              type: "post",
              dataType: "json",
              async: false,
              data: JSON.stringify({}),
              contentType: "application/json;charset=UTF-8",
              success: function (data) {
                if (data.errorCode == '1010') {
                  web.logic.openPop('.channel-popbg');
                  return;
                }
                web.logic.userInvestInfo();
              }
            });
          },
          openPop: function (obj) {
            $(obj).show().find('.pop').removeClass('close-pop');
          },
          closePop: function () {
            var _self = $(this);
            _self.parents('.pop').addClass('close-pop');
            setTimeout(function () {
              _self.parents('.pop-bg').hide();
            }, 500)
          }

        }
      }
      web.init();
    }
  });
}
