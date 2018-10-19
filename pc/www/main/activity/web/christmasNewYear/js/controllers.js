window.christmasNewYear = function ($scope, $rootscope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript) {

  // getScript(['../../../../vendor/pagination.min.js'],function(){
  // });
  $rootscope.title = '摇金币，换豪礼  双旦狂欢季';
  $scope.activityStatus = null;
  $scope.onOff = 0;
  $scope.warmtips = false;
  $scope.login = 0;
  $scope.coinsDetails = false;
  $scope.channelUser = false;
  $scope.exchangeRecord = false;
  $scope.coinsExchangeConfirm = false;
  $scope.exchangeSuccessGoAddress = false;
  $scope.fillInAddress = false;
  $scope.coinsNotEnough = false;
  $scope.notObjectSuccess = false;
  $scope.lotterychanceNotEnough = false;
  $scope.lotteryType = '';
  $scope.tenTimesCoinsDrop = false;
  $scope.userError = false;
  $scope.phoneError = false;
  $scope.addressError = false;
  $scope.page = 1;
  $scope.pageState = 'income';
  $scope.chance = 1;
  $scope.showChance = 0;
  $scope.aaaaaaa = 1;
  $scope.goLogin = false;
  $scope.pageCurrent = [1, 2, 3];
  if ($location.$$search.toFrom != undefined || $location.$$search.recommCode != undefined) {
    $localStorage.webFormPath = $location.$$search;
  }

  //判断是否登录
  if (!$filter('isRegister')().register) {
    $scope.login = 0;
  } else {
    $scope.login = 1;
  }


  var tool = {
    init: function () {
      tool.getData.prizeList();
      $(document).mouseenter(function () {
        tool.getData.prizeList();
        $scope.$apply();
      });
      //获取所有活动奖品列表
      // tool.getData.userLottery();  //用户抽奖
      // tool.getData.userExchangeLottery();//获取用户兑奖信息
      // tool.getData.addAddress();   //添加地址
      // tool.getData.goldCoinsDetails($scope.page);  //获取金币明细
      tool.regData();
      tool.tab();
      tool.hash();
    },
    //获取接口
    getData: {
      prizeList: function () {
        resourceService.queryPost($scope, $filter('交互接口对照表')('双旦活动奖品列表'), {
          activityId: 18
        }, '双旦活动奖品列表');
      },
      goldCoinsDetails: function (page, state) {
        if (!state) state = $scope.pageState;
        resourceService.queryPost($scope, $filter('交互接口对照表')('双旦活动金币获取支出明细'), {
          pageOn: page,
          pageSize: 10,
          activityId: 18,
          incomeOrExpenses: state
        }, '双旦活动金币获取支出明细');
      },
      userLottery: function () {
        resourceService.queryPost($scope, $filter('交互接口对照表')('双旦活动用户抽奖信息'), {
          activityId: 18,
          raffleTimes: $scope.chance
        }, '双旦活动用户抽奖信息');
      },
      userExchangeLottery: function () {
        resourceService.queryPost($scope, $filter('交互接口对照表')('双旦活动用户兑奖信息'), {
          activityId: 18,
          prizeId: $scope.prizeid
        }, '双旦活动用户兑奖信息');
      },
      addAddress: function (val1, val2, val3) {
        resourceService.queryPost($scope, $filter('交互接口对照表')('双旦活动实物添加地址'), {
          activityId: 18,
          name: val1,
          phoneNumber: val2,
          address: val3
        }, '双旦活动实物添加地址');
      },
    },
    //接收数据
    regData: function () {
      $scope.$on('resourceService.QUERY_POST_MYEVENT', function (event, data, eObj) {
        switch (eObj) {
          case '双旦活动奖品列表':
            if (data.success) {
              $scope.prizeList = data.map.prizes;  //全部奖品列表
              // $scope.chance = data.map.raffleChance;
              $scope.remainCoins = data.map.goldCoinCount;  //用户剩余金币
              $scope.addCouponsList = data.map.prizes.addInerestCouponList;  //加息券兑换区
              $scope.redBagList = data.map.prizes.cashCouponList;  //红包兑换区
              $scope.realPrizeList = data.map.prizes.realPrizeList;  //实物兑换区
              $scope.showChance = data.map.raffleChance;   //用户剩余抽奖机会
              tool.exchange(data);
              setTimeout(function () {
                tool.tab1(0);
                tool.tab2(0);
              }, 100)
            } else if (data.errorCode == '1010') {     //判断是否渠道用户
              $scope.popStatus('打开渠道弹窗');
            }

            break;
          case '双旦活动金币获取支出明细':
            if (data.success) {
              $scope.detailList = data.map.page.rows;
              $scope.bill = data.map.page;
              $scope.bill.pages = [];

              $scope.pageOn = data.map.page.pageOn;
              $scope.pageSize = data.map.page.pageSize;
              $scope.total = data.map.page.total;
              $scope.totalPage = data.map.page.totalPage;

              $scope.rows = data.map.page.rows;
              //  = $scope.calculateIndexes($scope.page,$scope.totalPage,5);
              /*
               pageOn:1     当前页数
               pageSize:10  一页多少条
               rows:[{Opt: "摇摇乐抽奖", count: 10, updateTime: "2016-12-16 23:50:59"},…]  // 当前页数据
               total:47     总条数
               totalPage:5  总页数
               */
              /*for(var i=0;i<parseInt($scope.bill.totalPage);i++){
               $scope.bill.pages[i]=i+1;
               };*/
              // $('#demo').pagination({
              //     dataSource: [{a :1}, {a :2}, {a :3}, {a :4}, {a :4} , {a :50}],
              //     pageSize: 10,
              //     totalNumber  : total,
              //     formatResult: function(data) {
              //         for (var i = 0, len = data.length; i < len; i++) {
              //             data[i].a = data[i].a + ' - bad guys';
              //         }
              //     },
              //     callback: function(data, pagination) {
              //         // template method of yourself
              //         var html = template(data);
              //         dataContainer.html(html);
              //     }
              // })
            }
            break;
          case '双旦活动用户抽奖信息':
            if (data.success) {
              var data = data.map.raffleResult.icons;
              var price = 0;
              for (var key in data) {
                if (data[key].goldCoin) {
                  price += parseFloat(data[key].goldCoin);
                }
              }
              $scope.prizeId = data[0].id;
              $scope.addcoin = price;
            }
            break;
          case '双旦活动用户兑奖信息':
            if (data.success) {
              // $scope.popStatus('关闭金币兑换弹窗并打开兑换成功提示去填写收货地址')
            }
            break;
          case '双旦活动实物添加地址':
            if (data.success) {
              $scope.popStatus('关闭收货地址弹窗');
              $timeout(function () {
                alert('收货地址预留成功');
              }, 300);
            }
            break;
        }
      })
    },
    //兑换金币
    exchange: function (data) {
    },
    //选项卡切换
    tab: function () {
      $('.introdution-mode .title-mode .tab').hover(function () {
        tool.tab1($(this).index());
      });
      $('.coinsdetails-pop .title-mode .tab').click(function () {
        tool.tab2($(this).index());
      });
    },
    tab1: function (iNow) {
      $('.introdution-mode .title-mode .tab').eq(iNow).addClass('active').siblings('.tab').removeClass('active');
      $('.introdution-mode .list-box').eq(iNow).addClass('openTab').show().siblings('.list-box').hide();

    },
    tab2: function (iNow) {
      $('.coinsdetails-pop .title-mode .tab').eq(iNow).addClass('active').siblings('.tab').removeClass('active');
      $('.coinsdetails-pop .tab-body .tab').eq(iNow).addClass('openTab').show().siblings('.tab').hide();


    },
    //详细规则锚点
    hash: function () {
      $scope.ruleHash = function () {
        $('body').animate({
          scrollTop: $('.rule-mode').offset().top - 200
        })
      }
    }
  }

  tool.init();

  $scope.getNum = function (num) {
    var a = new Array(num);
    return a;
  }

  $scope.changePageState = function (state) {
    $scope.state = state;
    // console.log('tab', state);
    $scope.aaaaaaa = 1;
    $scope.pageCurrent = [1, 2, 3];
    tool.getData.goldCoinsDetails($scope.page, state);
    tool.regData();
  }

  $scope.calculateIndexes = function (current, length, displayLength) {
    var indexes = [];
    var start = Math.round(current - displayLength / 2);
    var end = Math.round(current + displayLength / 2);
    if (start <= 1) {
      start = 1;
      end = start + displayLength - 1;
      if (end >= length - 1) {
        end = length - 1;
      }
    }
    if (end >= length - 1) {
      end = length;
      start = end - displayLength + 1;
      if (start <= 1) {
        start = 1;
      }
    }
    for (var i = start; i <= end; i++) {
      indexes.push(i);
    }
    return indexes;
  };

  $scope.onClickPage = function (type, pageNum, state) {
    if (!state) state = 'expenses';
    // console.log('onclick', state);
    switch (type) {
      case "prevPage":
        $scope.aaaaaaa--;
        if ($scope.aaaaaaa < 1) {
          $scope.aaaaaaa = 1;
        }
        var bbb = $scope.calculateIndexes($scope.aaaaaaa, $scope.totalPage, 3);
        if (bbb.length > 3) {
          bbb.pop();
        }
        $scope.pageCurrent = bbb;
        tool.getData.goldCoinsDetails($scope.aaaaaaa, state);
        break;
      case "currentPage":
        $scope.aaaaaaa = pageNum;
        var bbb = $scope.calculateIndexes($scope.aaaaaaa, $scope.totalPage, 3);
        if (bbb.length > 3) {
          bbb.pop();
        }
        $scope.pageCurrent = bbb;

        tool.getData.goldCoinsDetails($scope.aaaaaaa, state);
        break;
      case "nextPage":
        $scope.aaaaaaa++;
        if ($scope.aaaaaaa > $scope.totalPage) {
          $scope.aaaaaaa = $scope.totalPage;
        }

        var bbb = $scope.calculateIndexes($scope.aaaaaaa, $scope.totalPage, 3);
        if (bbb.length > 3) {
          bbb.pop();
        }
        $scope.pageCurrent = bbb;

        tool.getData.goldCoinsDetails($scope.aaaaaaa, state);
        break;
    }
    ;
  }
  function goPage(pageOn) {
    // 翻页
    resourceService.queryPost($scope, $filter('交互接口对照表')('双旦活动金币获取支出明细'), {
      pageOn: pageOn,
      pageSize: 10,
      activityId: 18,
      incomeOrExpenses: 'income'
    }, '双旦活动金币获取支出明细');
  };


  //弹窗状态       type:  弹窗类型  info :弹窗里绑定的字符串   count: 奖品剩余数量  name: 奖品名字  needcoins: 需要消耗的金币数量 priid:奖品id:priid
  $scope.popStatus = function (type, info, count, name, object, needcoins, priid) {
    switch (type) {
      case "关闭活动还没开始":
        $('.noready-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.activityStatus = null;
          $('.noready-pop').removeClass('closeMode');
        }, 600)
        break;
      case "关闭首次点击温馨提示":
        $('.warmtip-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.warmtips = false;
          $('.warmtip-pop').removeClass('closeMode');
        }, 600)
        $scope.onOff = 1;
        tool.getData.prizeList();
        break;
      case '首次点击投资':
        $scope.warmtips = true;
        $('.warmtip-pop').addClass('openMode');
        break;
      case '打开金币明细':
        if (!$filter('isRegister')().register) {
          $scope.goLogin = true;
          $('.goLogin-pop').addClass('openMode');
          return;
        } else {
          $scope.state = 'income';
          tool.getData.goldCoinsDetails($scope.page);
          $scope.coinsDetails = true;
          $('.coinsdetails-pop').addClass('openMode');
        }
        break;
      case '关闭金币明细':
        $('.coinsdetails-pop').removeClass('openMode').addClass('closeMode');
        $scope.aaaaaaa = 1;
        $scope.pageCurrent = [1, 2, 3];
        $timeout(function () {
          $scope.coinsDetails = false;
          $('.coinsdetails-pop').removeClass('closeMode');
        }, 600)
        break;
      case "打开抽奖机会不足":
        $scope.lotterychanceNotEnough = true;
        $('.lotterychanceNotEnough-pop').addClass('openMode');
        break;
      case '打开十次掉落金币':
        $scope.tenTimesCoinsDrop = true;
        $('.tenTimesCoinsDrop-pop').addClass('openMode');
        break;
      case '关闭十次金币掉落弹窗':
        tool.getData.prizeList();
        // tool.getData.userLottery();
        // tool.regData();
        $('.tenTimesCoinsDrop-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.tenTimesCoinsDrop = false;
          $('.tenTimesCoinsDrop-pop').removeClass('closeMode');
        }, 600)
        break;
      case '打开一次掉落金币':
        $scope.oneTimesCoinsDrop = true;
        $('.oneTimesCoinsDrop-pop').addClass('openMode');
        break;
      case '关闭一次金币掉落弹窗':
        tool.getData.prizeList();
        // tool.getData.userLottery();
        // tool.regData();
        $('.oneTimesCoinsDrop-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.oneTimesCoinsDrop = false;
          $('.oneTimesCoinsDrop-pop').removeClass('closeMode');
        }, 600)
        break;

      case "关闭抽奖机会不足":

        $('.lotterychanceNotEnough-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.lotterychanceNotEnough = false;
          $('.lotterychanceNotEnough-pop').removeClass('closeMode');
        }, 600)
        tool.getData.prizeList();
        tool.regData();
        break;
      case '打开渠道弹窗':
        $scope.channelUser = true;
        $('.channel-pop').addClass('openMode');
        break;
      case '关闭渠道弹窗':
        $('.channel-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.channelUser = false;
          $('.channel-pop').removeClass('closeMode');
        }, 600)
        break;
      case '关闭登录弹窗':
        $('.goLogin-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.goLogin = false;
          $('.goLogin-pop').removeClass('closeMode');
        }, 600)
        break;
      case '打开兑换记录':
        if (!$filter('isRegister')().register) {
          $scope.goLogin = true;
          $('.goLogin-pop').addClass('openMode');
          return;
        } else {
          tool.getData.goldCoinsDetails($scope.page, 'expenses');
          tool.regData();
          $scope.exchangeRecord = true;
          $('.exchangerecord-pop').addClass('openMode');
        }
        break;
      case '关闭兑换记录':
        $('.exchangerecord-pop').removeClass('openMode').addClass('closeMode');
        $scope.aaaaaaa = 1;
        $scope.pageCurrent = [1, 2, 3];
        $timeout(function () {
          $scope.exchangeRecord = false;
          $('.exchangerecord-pop').removeClass('closeMode');
        }, 600)
        break;
      case '打开金币兑换弹窗':
        if ($scope.hui==true) {
          return;
        } else {
          if (!$filter('isRegister')().register) {
            $scope.goLogin = true;
            $('.goLogin-pop').addClass('openMode');
            return;
          } else {
            $scope.prizeName = name;
            var prizeRemainCounts = count;
            var exchangePopValue = info;
            $scope.exchangePopValue = exchangePopValue;
            var prizeType = object;
            $scope.prizeType = prizeType;
            var exchangePrizeNeedCoins = needcoins;
            $scope.prizeid = priid;
            //如果没有金币或者用户金币小于兑换奖品所需金币
            if ($scope.remainCoins == 0 || $scope.remainCoins < exchangePrizeNeedCoins) {
              $scope.coinsNotEnough = true;
              $('.notenough-pop').addClass('openMode');
            } else if (prizeRemainCounts == 0) {

              //如果奖品数量兑换完了
              $scope.popStatus('打开商品已经兑换完了补货', $scope.prizeName);
            } else {

              $scope.coinsExchangeConfirm = true;
              $('.confirm-pop').addClass('openMode');
            }
          }

        }
        break;
      case '关闭非实物兑换成功弹窗':
        $('.notobject-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.notObjectSuccess = false;
          $('.notobject-pop').removeClass('closeMode');
        }, 600)
        tool.getData.prizeList();
        // $scope.$apply();
        tool.regData();
        break;
      case '打开商品已经兑换完了补货':
        $scope.exchangedOver = true;
        $('.exchanged-pop').addClass('openMode');
        break;

      case '关闭金币兑换弹窗':
        $('.confirm-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.coinsExchangeConfirm = false;
          $('.confirm-pop').removeClass('closeMode');
        }, 600)
        break;
      case '关闭金币兑换弹窗是实物就提示兑换成功':   // 第一步  confirm : 确认兑换  第二步： exchangeSuccess：兑换成功（实物）
        // tool.regData();
        if ($scope.prizeType == 5) {//  现在京东卡走的是这个判断
          $('.confirm-pop').removeClass('openMode').addClass('closeMode');
          $timeout(function () {
            $scope.coinsExchangeConfirm = false;
            $('.confirm-pop').removeClass('closeMode');
          }, 300)
          $timeout(function () {
            tool.getData.userExchangeLottery();
            $scope.exchangeSuccessGoAddress = true;
            $('.exchangeSuccessGoAddress-pop').addClass('openMode');
          }, 600)
        } else if ($scope.prizeType == 1 || $scope.prizeType == 2) {
          $('.confirm-pop').removeClass('openMode').addClass('closeMode');
          $timeout(function () {
            $scope.coinsExchangeConfirm = false;
            $('.confirm-pop').removeClass('closeMode');
          }, 300)
          $timeout(function () {
            tool.getData.userExchangeLottery();
            $scope.notObjectSuccess = true;
            $('.notobject-pop').addClass('openMode');
          }, 600)

        }
        break;
      case '关闭兑换成功打开填写收货地址':
        $('.exchangeSuccessGoAddress-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.exchangeSuccessGoAddress = false;
          $('.exchangeSuccessGoAddress-pop').removeClass('closeMode')
        }, 300);
        $timeout(function () {
          $scope.fillInAddress = true;
          $('.fillinaddress-pop').addClass('openMode');
        }, 600)
        break;
      case '向后台传数据'://第4部 ： fillInAddress (表单验证)
        var input = $('#form').find('input[type="text"]');
        var val1 = input.eq(0).val().trim();
        var val2 = input.eq(1).val().trim();
        var val3 = input.eq(2).val().trim();
        if (val1.length < 2) {
          $scope.userError = true;
          return;
        }
        $scope.userError = false;
        if (!(/^1[34578]\d{9}$/.test(val2))) {
          $scope.phoneError = true;
          return;
        }
        $scope.phoneError = false;
        if (val3.length < 5) {
          $scope.addressError = true;
          return;
        }
        $scope.addressError = false;
        tool.getData.addAddress(val1, val2, val3);
        tool.regData();

        // if(val1.length<2){
        // 	$scope.userError=true;
        // 	return;
        // }else if(!(/^1[34578]\d{9}$/.test(val2))){
        // 	$scope.phoneError=true;
        // 	return;
        // }else if(val3.length<5){
        // 	$scope.addressError=true;
        // 	return;
        // }else{
        //   tool.getData.addAddress();
        //   tool.regData();
        //      $scope.$apply();
        //  	}

        //把姓名，电话，地址  传给后台
        break;
      case "关闭收货地址弹窗":
        $('.fillinaddress-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.fillInAddress = false;
          $('.fillinaddress-pop').removeClass('closeMode');
        }, 600)

        break;
      case '关闭金币不足弹窗':
        $('.notenough-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.coinsNotEnough = false;
          $('.notenough-pop').removeClass('closeMode');
        }, 600)
        break;
      case '关闭奖品兑换完了弹窗':
        $('.exchanged-pop').removeClass('openMode').addClass('closeMode');
        $timeout(function () {
          $scope.exchangedOver = false;
          $('.exchanged-pop').removeClass('closeMode');
        }, 600)
        break;
      case '登录':
        $filter("跳转页面")('denLu', 'online-activity.christmasNewYear', 'dl');
        break;
    }
  };


  timeInit(null, {prev: '2016/12/01', start: '2016/12/20', end: '2017/01/03', getTime: false},
      function () {
        $scope.activityStatus = 1;
        $('.pop').removeClass('closeMode').addClass('openMode');
      }, function () {
        $scope.activityStatus = 2;
      }, function () {
        $scope.activityStatus = 3;

            $scope.hui = false;
            var date = Date.parse('Jan 14,2017') - Date.parse(new Date());
            if(date < 0){
              $scope.hui = true;
              console.log('hui')
              $('.bag .exchange-btn').css({background: '#999'});
            }else{
              $scope.hui = false;
              console.log('n')
             $('.bag .exchange-btn').css({'background': '#f78b01', 'box-shadow': '0px 2px 0px 0px #f78b01'});
        }
    }
  )


  getScript(['activity/app/newYear/src/js/draw.js'], function () {
    var d = new draw({
      element: $('.rockHappy-mode .rock-box .rock-list-wrap'), //元素
      ul: $('.rockHappy-mode .rock-box .rock-list-wrap ul'),
      child: $('.rockHappy-mode .rock-box .rock-list-wrap ul li'),
      length: 3,
      musciSrc: "",
      oneBtn: $('.rockHappy-mode .once'), //玩一次按钮
      musciSrc: '../../../../images/christmas/money/money.wav',
      oneBtnPrvCallback: function (fn) {
        if ($scope.activityStatus == 3) {
          return;
        }

        if (!$filter('isRegister')().register) {
          $scope.login = 0;
          $scope.goLogin = true;
          $('.goLogin-pop').addClass('openMode');
          $scope.$apply();
          return;
        } else {
          $scope.login = 1;
          if ($scope.showChance < 1) {
            $scope.popStatus('打开抽奖机会不足');
            $scope.$apply();
            return;
          } else {
            fn();
          }
        }

      },
      oneBtnCallback: function () { // 回掉
        $scope.chance = 1;
        tool.getData.prizeList();
        tool.getData.userLottery();
        tool.regData();
        setTimeout(function () {
          d.getDraw($scope.prizeId); //5为最后一次的中奖 ， 第二个为10次抽奖
        }, 500);
        $scope.$apply();
      },
      tenBtnPrvCallback: function (fn) {
        if ($scope.activityStatus == 3) {
          return;
        }
        if (!$filter('isRegister')().register) {
          $scope.login = 0;
          $scope.goLogin = true;
          $('.goLogin-pop').addClass('openMode');
          $scope.$apply();
          return;
        } else {
          $scope.login = 1;
          if ($scope.showChance < 10) {
            $scope.popStatus('打开抽奖机会不足');
            $scope.$apply();
            return;
          } else {
            fn();
          }
        }
      },
      tenBtn: $('.rockHappy-mode .ten-times'),  //玩十次按钮
      tenBtnCallback: function () {// 回掉
        $scope.chance = 10;
        tool.getData.prizeList();
        tool.getData.userLottery();
        tool.regData();
        setTimeout(function () {

          d.getDraw($scope.prizeId, true); //5为最后一次的中奖 ， 第二个为10次抽奖
        }, 500);
        $scope.$apply();
      },
      callback: function () { //中奖弹窗
        if (d.btnStatus == 'ten') {
          $scope.popStatus('打开十次掉落金币');
        } else {
          $scope.popStatus('打开一次掉落金币');
        }
        $scope.$apply();
      }
    });
  })
  $scope.$apply();
}



