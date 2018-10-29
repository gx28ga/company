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
        return tag.product;
      }
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
routerApp.controller('marchInvestCtrl', ['$scope', '$location', '$filter', 'resourceService', '$timeout', '$http',
  function ($scope, $location, $filter, resourceService, $timeout, $http) {
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
    $('.touzibtn').click(function () { //
      if (getUrlParam('wap') == 'true') { //h5已登录
        window.location.href = 'http://192.168.1.248/main/bankBillList';
      } else {
        window.location.href = 'jump://page=2?';
      }
    })
    // $scope.linkTo = function () {
    //   var haha = document.getElementById('rule').scrollIntoView(true);
    // }
    // $scope.scroll = function () {
    //     var index = this.title;
    //     $('html,body').animate({ scrollTop: $('#rule').offset().top }, 3000)
    //     console.log($('#rule').offset());
    //   }
      //跳转登录页面
      // $scope.loginReturn = function () {
      //     $filter("跳转页面")('denLu', 'activitys.marchInvest', 'dl');
      //   }
      // 弹框所用视图模型
      //var date=new Date();//获取本地时间

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

    // 检查活动时间
    /*   var now=new Date();
        var time=new Date('2017/02/01 00:00:00');
        if(now<time){
         $scope.IsgameOver=false; 
        }else{
           $scope.IsgameOver=true;
        }*/
    $http({
      method: 'POST',
      url: '/activity/marchInvestActivity/getActivityStatus.do',
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
      } else if (date > endTime) {
        // $scope.showBox('endBox');
        $scope.gameOver = true;
        if ($scope.login) {
          $http({
            method: 'POST',
            url: '/activity/marchInvestActivity/isparticipate.do', //判断是否是渠道用户
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
                url: '/activity/marchInvestActivity/marchInvestActivity.do', //用户登录之后查看值
                headers: {
                  contentType: 'application/json;charset=UTF-8',
                  processData: false
                },
                data: { uid: $scope.uid }
              }).success(function (info) {
                $scope.coin = info.map.coin; //财富值
                $scope.expectGet = info.map.expectGet; //获得的奖品
                $scope.need = info.map.need; //缺少财富值
                $scope.superiorGift = info.map.superiorGift; //下一级奖品
                $scope.isHeigh = info.map.full; //是否是最高
                $scope.status = info.map.status; //活动是否结束 
              })
            }
          })
        }
      } else {
        if ($scope.login) {
          $scope.gameOver=false;
          $http({
            method: 'POST',
            url: '/activity/marchInvestActivity/isparticipate.do', //判断是否是渠道用户
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
                url: '/activity/marchInvestActivity/marchInvestActivity.do', //用户登录之后查看值
                headers: {
                  contentType: 'application/json;charset=UTF-8',
                  processData: false
                },
                data: { uid: $scope.uid }
              }).success(function (info) {
                $scope.coin = info.map.coin; //财富值
                $scope.expectGet = info.map.expectGet; //获得的奖品
                $scope.need = info.map.need; //缺少财富值
                $scope.superiorGift = info.map.superiorGift; //下一级奖品
                $scope.isHeigh = info.map.full; //是否是最高
                $scope.status = info.map.status; //活动是否结束

              })
            }
          })
        }
      }
    })
  }
]);
