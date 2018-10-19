window.invite = function ($scope, $http,$state, $rootscope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript) {
  $rootscope.title = '邀请好友';
  $scope.login = false;
  if (!$filter('isRegister')().register) {
    $scope.login = false; //灭有
  } else {
    $scope.login = true; //登录 
  }
  $scope.loginReturn = function () {
    if ($scope.login) {
      $state.go("main.myAccount.myFriend")
    } else {
      $filter("跳转页面")('denLu', 'main.myAccount.myFriend', 'dl');
    }
  }
}
