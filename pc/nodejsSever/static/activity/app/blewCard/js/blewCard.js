var routerApp = angular.module('someApp', [
  'ngResource'
]);
routerApp.factory(
  'resourceService', ['$resource', '$http', '$filter', function ($resource, $http, $filter) {
    return new resourceService($resource, $http, $filter);
  }]);
routerApp.factory(
  'communicationService', ['$resource', '$http', '$filter', function ($resource, $http, $filter) {
    return new function () {
      var tag = {};
      /*路径*/
      this.setTagPage = function (name, url) {
        tag.name = name;
        tag.url = url;
      };
      this.getTagPage = function () {
        return tag;
      };
      /*产品*/
      this.setProduct = function (item) { tag.product = item; }
      this.getProduct = function () {
        return tag.product; }
    };
  }]);
//设置图片自适应手机大小
function setImgSize() {
  var originWidth = 375,
    ratio = $(window).width() / originWidth;
  $('.img-size').each(function () {
    var self = $(this);
    $.each(['height', 'width', 'left', 'right', 'bottom', 'top', 'paddingTop', 'lineHeight', 'paddingLeft', 'paddingRight', 'paddingBottom', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom'], function (i, str) {
      var num = self.attr('data-' + str);
      if (num) {
        num = num * ratio / 2 + 'px';
        self.css(str, num)
      }
    });
  });
}
routerApp.directive('repeatFinish', function () {
  return {
    link: function (scope, element, attr) {
      setImgSize();
    }
  }
})

function resourceService(resource, http, $filter) {
  var actions = {
    'query': {
      method: 'GET'
    },
    'queryPost': {
      method: 'POST'
    },
    'formGet': {
      method: 'GET',
      async: false
    }
  };
  //加载json模板页面
  this.getJsonServer = function (scope, url, data, type) {
    var queryResource = resource(url, {}, actions);
    queryResource.query(data, function (data) {
      scope.$broadcast('resourceService_GET_JSON.MYEVENT', data, type);
    }, function (error) {});
  };
  //查找
  this.queryPost = function (scope, url, data, type) {
    /*临时改变时间*/
    if ($filter('isOnLine')()) {
      var queryResource = resource(url, {}, actions);
      queryResource.queryPost(data, function (data) {
        if (data.success) {
          scope.$broadcast('resourceService.QUERY_POST_MYEVENT', data, type);
        } else {
          if (data.errorCode == '9999') {} else {
            scope.$broadcast('resourceService.QUERY_POST_MYEVENT', data, type);
          }
        }
      }, function (error) {
        // $filter('服务器信息')(type, scope,'y');
      });
    } else {
      test(scope, url, data, type);
    };
  };
}
routerApp.controller('blewCardCtrl', ['$scope', '$location', '$filter', 'resourceService', '$timeout', '$http',
  function ($scope, $location, $filter, resourceService, $timeout, $http) {
    //login
    $scope.goLogin = function(){
        window.location.href = 'http://app.duorongcf.com/dl?'+encodeURIComponent('returnUrl='+window.location.href)
    }
    function getUrlParam(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
      var r = window.location.search.substr(1).match(reg); //匹配目标参数
      if (r != null) return unescape(r[2]);
      return null; //返回参数值
    }
    $scope.http = window.location.origin;
    $scope.wap = getUrlParam('wap') == 'true' ? true : false;
    if (getUrlParam('uid') == '' || getUrlParam('uid') == undefined || getUrlParam('uid') == null) {
      $scope.login = false;
    } else {
      $scope.login = true;
    }
    if (getUrlParam('uid') != '') {
      $scope.uid = getUrlParam('uid');
    }
    
    //投资
    var parem = "uid=" + $scope.uid + "&wap=true";
    $('.touzibtn').click(function () { //首页摇奖按钮
        if (getUrlParam('wap') == 'true') { //h5已登录
          window.location.href = 'http://192.168.1.248/main/bankBillList';
        } else {
          window.location.href = 'jump://page=2?';
        }
      })
    //自己判断时间
    var now=new Date();
    var time=new Date('2017/03/01 00:00:00');
    if(now<time){
     $scope.IsgameOver=false; 
    }else{
       $scope.IsgameOver=true;
    }
     // 弹框所用视图模型
    $scope.chanceCount = 0;
    $scope.mask = false;
    $scope.showingBox = null;
    //显示弹框
    $scope.showBox = function (box) {
        $scope.mask = true;
        $scope.showingBox = box;
      }
      //隐藏弹框
    $scope.hideBox = function () {
        $scope.mask = false;
      }
      //显示中奖纪录
    $scope.record = false;
    $scope.showingRecord = false;
    $scope.showRecord = function (record) {
        $scope.record = true;
        $scope.showingRecord = record;
        $http({
            method: 'POST',
            url: '/activity/scratchcard/records.do',
            headers: {
              contentType: 'application/json;charset=UTF-8',
              // processData: false
            },
            data: { uid: $scope.uid },
          })
          .success(function (records) {      
            $scope.items=records.map.result;

          })
      }
      //隐藏中奖纪录
    $scope.hideRecord = function () {
        $scope.showingRecord = false;
      }
      //刮奖图片
    $scope.scratch = false;
    $scope.showingScratch = false;
    //显示刮奖图层
    $scope.showScratch = function (scratch) {
        $scope.scratch = true;
        $scope.showingScratch = scratch;
      }
      //刮奖
    $scope.scrat = false;
    $scope.showScratched = function (card) {
        $scope.scrat = true;
        setTimeout(function () {
          LuckyCard.case({ ratio: 0.2, coverImg: './images/guajiangtuceng.jpg' },
            function () {
              this.clearCover();
              angular.element('#scratch').find('#cover').remove();
            })
        }, 1)
        $scope.showingScratch = card;
         //刮刮卡抽奖结果
        $timeout(function () {
        $('#cover').one("touchstart", function () {
            $http({
              method: 'POST',
              url: '/activity/scratchcard/scratch.do',
              headers: {
                contentType: 'application/json;charset=UTF-8',
                processData: false
              },
              data: { uid: $scope.uid },
            }).success(function (scratchContent) {   

              $scope.chanceCount = scratchContent.map.memberRaffleResult.chanceCount; //剩余刮刮卡数量
              $scope.prizeName = scratchContent.map.memberRaffleResult.prizeName; //获奖信息
              $scope.type=scratchContent.map.memberRaffleResult.type;//刮刮卡类型
            })
            // $scope.$apply();
          })
        }, 300);
      }
     
      //抽奖结果结束   
      //隐藏刮奖图层
    $scope.hideScratch = function () {
        $scope.showingScratch = false;
      }
      // 检查活动时间
    var date = new Date();
    $http({
      method: 'POST',
      url: '/activity/scratchcard/status.do',
      headers: {
        contentType: 'application/json;charset=UTF-8',
        processData: false
      },
      data: { uid: $scope.uid }
    }).success(function (data) {
        var endTime = data.map.endTime;
        var startTime = data.map.startTime;
        var date = Date.parse(new Date());
      if (date < startTime) {
        $scope.showBox('earlyBox');
      } else if (date >endTime) {
        $scope.showBox('endBox');
      } else {
        var stepPrice = 30000; //初始化金额阶段
        if ($scope.login) {
          $http({
            method: 'POST',
            url: '/activity/scratchcard/participate.do',
            headers: {
              contentType: 'application/json;charset=UTF-8',
              processData: false
            },
            data: { uid: $scope.uid }
          }).success(function (dataVIP) {
            // 这里从接口返回的数据中查看用户是否是渠道 vip
            if (dataVIP.flag === false) {
              $scope.showBox('vipBox'); // 是渠道 vip 的情况
            } else {
              // 用户已经登录且不是渠道 vip 的情况
              $http({
                  method: 'POST',
                  url: '/activity/scratchcard/invest-info.do',
                  headers: {
                    contentType: 'application/json;charset=UTF-8',
                    processData: false
                  },
                  data: { uid: $scope.uid }
                }).success(function (dataNum) {
                  $scope.investTotalPrice = dataNum.map.funtuneOfUser.fortune;
                  $scope.gameOver = dataNum.map.funtuneOfUser.gameOver;
                  $scope.gotCardCount=dataNum.map.funtuneOfUser.gotCardCount;
                  $scope.prize=dataNum.map.funtuneOfUser.prize;
                  $scope.scratchCardChance = dataNum.map.remainChance;
                  var progressingDiv = document.querySelector('.progressing');
                  if ($scope.investTotalPrice < 30000) { //判断金额
                    $scope.nowPrice = Math.ceil($scope.investTotalPrice / stepPrice) * stepPrice;
                    $scope.nowJdCardCount = Math.ceil($scope.investTotalPrice / stepPrice);
                    $scope.nextPrice = Math.ceil($scope.investTotalPrice / stepPrice) * stepPrice + stepPrice;
                    $scope.nextJdCardCount = Math.ceil($scope.investTotalPrice / stepPrice) + 1;
                    var progressingLength = ($scope.investTotalPrice) / stepPrice * 250;
                    // todo 小于 5w 的情况
                    var progressingWidth = progressingLength + 'px';
                    // setImgSize();
                    $('.progressingBefore').attr('data-width', progressingLength);
                    $timeout(function () {
                      setImgSize();
                      $scope.$apply();
                    }, 300)
                  } else {
                    $scope.nowPrice = Math.floor($scope.investTotalPrice / stepPrice) * stepPrice;
                    $scope.nowJdCardCount = Math.floor($scope.investTotalPrice / stepPrice);
                    $scope.nextPrice = Math.floor($scope.investTotalPrice / stepPrice) * stepPrice + stepPrice;
                    $scope.nextJdCardCount = Math.floor($scope.investTotalPrice / stepPrice) + 1;
                    var progressingLengthAfter = ($scope.nextPrice -$scope.nowPrice- $scope.prize) / stepPrice * 340;
                    $('.progressingBefore').attr('data-width', 280);
                    $('.progressingAfter').attr('data-width', progressingLengthAfter);
                    $timeout(function () {
                      setImgSize();
                      $scope.$apply();
                    }, 300)
                  }
                  progressingDiv.style.width = progressingWidth;
                  if ($scope.scratchCardChance > 0) { //判断刮刮卡数量
                    $scope.showScratch('scratchNumberNot0');
                  } else {
                    $scope.showScratch('scratchNumber0');
                  }
                })
                .error(function () {
                  //请求错误的情况
                  $location.href = '/404.html';
                })
                //刮刮卡抽奖结果
                /* $http({
                  method:'POST',
                  url:'/activity/scratchcard/scratch.do',
                  headers:{
                 contentType:'application/json;charset=UTF-8',
                 processData : false
                     },
                     data : {uid:$scope.uid}, 
                     }).success(function(scratchContent){
                         $scope.chanceCount=scratchContent.map.memberRaffleResult.chanceCount;//剩余刮刮卡数量
                         $scope.prizeName=scratchContent.map.memberRaffleResult.prizeName;//获奖信息
                     })*/
                //抽奖结果结束
                //查看中奖纪录
            }
          })
        }
      }
    }).error(function () {
      // 检查请求出错的情况
      // 这里简单的跳转到错误页面
      $location.href = '/404.html';
    })
  }
]);
