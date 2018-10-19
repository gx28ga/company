window.marchInvest = function ($scope, $http, $rootscope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript) {
  $rootscope.title = '三月兑换奖';
  $scope.prizeList = null;
  $scope.$apply();
  thisIndex = 0;
  $scope.loginReturn = function () {
      $filter("跳转页面")('denLu', 'activitys.marchInvest', 'dl');
    }
    //判断是否登录

      if (!$filter('isRegister')().register) {
        $scope.login = 0;
      } else {
        $scope.login = 1;
      }

    //弹框一开始隐藏
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
      $scope.showBox('earlyBox'); //活动开始的弹框
    } else if (date > endTime) {
     $scope.isGameOver=true ;
         if ($scope.login == 1) {
        $http({
          method: 'POST',
          url: '/activity/marchInvestActivity/isparticipate.do',
          headers: {
            contentType: 'application/json;charset=UTF-8',
            processData: false
          },
          data: { uid: $scope.uid }
        }).success(function (info) {
          if (info.flag == false) {
            $scope.showBox('vipBox'); //是渠道用户
          } else {
            $http({
              method: 'POST',
              url: '/activity/marchInvestActivity/marchInvestActivity.do',
              headers: {
                contentType: 'application/json;charset=UTF-8',
                processData: false
              },
              data: { uid: $scope.uid }
            }).success(function (msg) {
              $scope.coin = msg.map.coin; //财富值
              $scope.expectGet = msg.map.expectGet; //获得的奖品
              $scope.need = msg.map.need; //缺少财富值
              $scope.superiorGift = msg.map.superiorGift; //下一级奖品
              $scope.isHeigh = msg.map.full; //是否是最高
              $scope.status = msg.map.status; //活动是否结束
            })
          }
        })
      }    
    } else { //活动当中
        $scope.isGameOver=false;

      if ($scope.login == 1) {
        $http({
          method: 'POST',
          url: '/activity/marchInvestActivity/isparticipate.do',
          headers: {
            contentType: 'application/json;charset=UTF-8',
            processData: false
          },
          data: { uid: $scope.uid }
        }).success(function (info) {
          if (info.flag == false) {
            $scope.showBox('vipBox'); //是渠道用户
          } else {
            $http({
              method: 'POST',
              url: '/activity/marchInvestActivity/marchInvestActivity.do',
              headers: {
                contentType: 'application/json;charset=UTF-8',
                processData: false
              },
              data: { uid: $scope.uid }
            }).success(function (msg) {
              $scope.coin = msg.map.coin; //财富值
              $scope.expectGet = msg.map.expectGet; //获得的奖品
              $scope.need = msg.map.need; //缺少财富值
              $scope.superiorGift = msg.map.superiorGift; //下一级奖品
              $scope.isHeigh = msg.map.full; //是否是最高
              $scope.status = msg.map.status; //活动是否结束
          
            
            })
          }
        })
      }
    }

  })
$scope.$watch(function(){
  return $scope.coin
},function(){
})
}
