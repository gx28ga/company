/*lee 我的消息*/
mainModule.controller('accountMytaskWrapCtrl', ['$rootScope', '$scope', '$filter', '$localStorage', 'resourceService', '$http', function ($rootScope, $scope, $filter, $localStorage, resourceService, $http) {
      $rootScope.$broadcast('myEvent.WHDR_Ctrl', { name: '我的任务', url: 'main.myAccount.myTask' });
      $scope.isActive = 1;
      $rootScope.title = '我的任务-多融财富';
      $rootScope.activeNav = 'account';
      render($localStorage.uid);
      // $http({
      //     method: 'get',
      //     url: '/cmall/member/task-list.do',//修改url
      //     headers: {
      //       contentType: 'application/json;charset=UTF-8',
      //       processData: false
      //     },
      //     data:{uid:$localStorage.uid}
      //   }).success(function (data) {
      //     if(data.success){
      //         $scope.taskGrop = data.map.result.taskGroupList;
      //         $scope.taskFinish = data.map.result.finishedTaskList;
      //     }

      //   })
      /*$.ajax({
        url: '/cmall/member/task-list.do',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        processData: false,
        data: JSON.stringify({ uid: $localStorage.uid }),
        success: function (data) {
          if (data.success) {
            $scope.taskGrop = data.map.result.taskGroupList;
            $scope.taskFinish = data.map.result.finishedTaskList;
          }
        }
      });*/
      $scope.$on('resourceService.QUERY_POST_MYEVENT', function (event, data, type) {
          switch (type) {
            case '任务':
              if (data.success) {
                $scope.taskGrop = data.map.result.taskGroupList;
                $scope.taskFinish = data.map.result.finishedTaskList;
                for(var i=0;i<$scope.taskGrop.length;i++){
                  for(var j=0;j<$scope.taskGrop[i].tasks.length;j++){ 
                    $scope.taskGrop[i].tasks[j].taskDesc = $scope.taskGrop[i].tasks[j].taskDesc.split('^');
                  }
                }
          
              }
              break;
          }
        })
        function render(number) {
          var obj = {},
            str = '任务';
          obj.uid = number;
          resourceService.queryPost($scope, $filter('交互接口对照表')('我的任务'), obj, '任务');
        }

      }])

