window.inviteFriend = function ($scope, $http,$state, $rootscope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript) {
  $rootscope.title = '邀请好友';
  $scope.login = false;
  if (!$filter('isRegister')().register) {
    $scope.login = false; //灭有
  } else {
    $scope.login = true; //登录 
  }
  $scope.loginReturn = function () {
    if ($scope.login) {
      $state.go("main.myAccount.myFriend");
       $rootscope.biaozhi=1;
    } else {
      $filter("跳转页面")('denLu', 'main.myAccount.myFriend', 'dl');
       $rootscope.biaozhi=1;
    }
  };
  $scope.goMonth=function(){
    if($scope.login){
      $state.go("main.myAccount.myFriend",{isActive:4});
        $rootscope.biaozhi=4;
    }else{
      $filter("跳转页面")('denLu', 'main.myAccount.myFriend', 'dl');
      $rootscope.biaozhi=4;
    }
    console.log($scope.isActive);
  };
  $scope.goTask=function(){
    console.log("跳转");
      if($scope.login){
      $state.go("main.myAccount.myFriend" ,{isActive:3});
        $rootscope.biaozhi=3;
    }else{
      $filter("跳转页面")('denLu', 'main.myAccount.myFriend', 'dl');
      $rootscope.biaozhi=3;
    }
  }
  }
