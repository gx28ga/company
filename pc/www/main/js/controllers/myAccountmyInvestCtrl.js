/*lee 我的投资*/
mainModule.controller('myAccountmyInvestCtrl', ['$rootScope', '$scope', '$filter', 'resourceService', '$state', '$localStorage', 'ngDialog', '$css', '$http', '$timeout', function ($rootScope, $scope, $filter, resourceService, $state, $localStorage, ngDialog, $css, $http, $timeout) {

  $css.add('/main/css/stylesheets/bootstrap-sass-3.3.7/calendar.css');

  /*$timeout(function () {
    $('.trigger p').eq(1).click();
  })*/

  $rootScope.$broadcast('myEvent.WHDR_Ctrl', { name: '我的资产', url: 'main.myAccount.myInvest' });

  if (!$filter('isRegister')().register) {
    $state.go('dl');
    return;
  } else {};
  // $rootScope.maskAutoTz=true;


  $scope.page = {};
  $scope.page.pageOn = 1;
  $scope.page.pageSize = 5;
  $scope.isActive = 1;
  $rootScope.title = '我的资产-多融财富';
  $scope.page.status = 1;
  $rootScope.activeNav = 'account';
  resourceService.queryPost($scope, $filter('交互接口对照表')('我的投资'), {}, '我的投资');
  $scope.types = $filter('isType')();
  $scope.$on('resourceService.QUERY_POST_MYEVENT', function (event, data, type) {
    switch (type) {
      case "我的投资":
        if (data.success) {
          $scope.userInvest = data.map;
        } else {}
        resourceService.queryPost($scope, $filter('交互接口对照表')('我的投资-收益中的产品'), $scope.page, '收益中的产品');
        break;
      case "收益中的产品":
        if (data.success) {
          var idx=data.map;
          localStorage.setItem("idxname",JSON.stringify(idx));
          $localStorage.inProfitProductList = $scope.inProfitProductList = data.map.page.rows;
          $scope.pages = [];
          $scope.page.pageOn = data.map.page.pageOn;
          $scope.total = data.map.page.total;
          $scope.page.totalPage = data.map.page.totalPage;
          for (var i = 0; i < parseInt(data.map.page.totalPage); i++) {
            $scope.pages[i] = i + 1;
          };
        } else {}
        break;
    };
  });
  $scope.lv = 1;
  $scope.qx = 3;
  $scope.onClick = function (type, item) {
    switch (type) {
      case "收益中查询":
        goPage();
        break;
      case "beforePage":
        if ($scope.page.pageOn > 1) {
          $scope.page.pageOn -= 1;
          goPage()
        };
        break;
      case "currentPage":
        $scope.page.pageOn = item;
        goPage();
        break;
      case "nextPage":
        if ($scope.page.pageOn < $scope.pages.length) {
          $scope.page.pageOn += 1;
          goPage()
        };
        break;
      case "closeDialog":
        ngDialog.closeAll();
        break;
    }
  };
  $scope.goPG = function () {
    $scope.page = {};
    $scope.page.pageOn = 1;
    $scope.page.pageSize = 5;
    goPage();
  };

  function goPage() {
    if ($scope.page.type == 'null') {
      delete $scope.page.type;
    }
    $scope.page.status = $scope.isActive;
    resourceService.queryPost($scope, $filter('交互接口对照表')('我的投资-收益中的产品'), $scope.page, '收益中的产品');
  };

  $scope.today = function () {
    $scope.startDate = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.startDate = null;
  };
  $scope.open1 = function () {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function () {
    $scope.popup2.opened = true;
  };

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };
  //跳转页面

  $scope.showTan = false;
  $scope.showTan2 = false;
  $scope.showTan2Box = function (name) {
    $scope.showTan = false;
    $scope.showTan2 = true;
    $scope.showingBox = name;
  } 
  $scope.showTan3Box = function (name) {
    $scope.showTan = false;
     $scope.showTan3 = true;
    $scope.showingBox = name;
  }
  var popUP = document.getElementById('popUP');
  $scope.close = function () {
      $scope.showTan = false;
      $scope.showTan2 = false;
       $scope.showTan3 = false;
    }
    //显示弹框
  var getIndex;
  $scope.show = function (ids, index, type, item, typeNumber) {
      getIndex = index;
      $scope.item = item;
      if (type) {
        $scope.type = 3;
      } else {
        $scope.type = 4;
      }
      $scope.showTan = true;
    }
    //跳转
  $scope.gotoPage = function (ids, index, type, item, typeNumber) {
    index = getIndex;
    $scope.item = item;
   var  isYunQianProtocol={
      investId:ids.investId,
      id:typeNumber
    }, noYunQian={
      investId:ids.investId,
      type:typeNumber
    };
    $scope.isProtocol=$scope.item.drYunQianContractList.length==0?noYunQian:isYunQianProtocol;
    $http({
        method: 'POST',
        url: '/yunqian/selectContractById.do',
        headers: {
          contentType: 'application/json;charset=UTF-8'
        },
        data: $scope.isProtocol
      }).success(function (info) {
        $scope.url=info.map.url;//查看云签url
        $scope.status = info.map.status;
        $("#appId").attr("value", info.map.appId);
        $("#time").attr("value", info.map.time);
        $("#sign").attr("value", info.map.sign);
        $("#signType").attr("value", info.map.signType);
        $("#userId").attr("value", info.map.userId);
        $("#orderId").attr("value", info.map.orderId);
        $("#yunqian").attr("action",info.map.downloadUrl);
        if ($scope.status == -1) { //history
          $scope.statuss = -1;
          if (type) {
            $scope.type = 3;
            $localStorage.protocolIds = ids;
            var url = '';
            if (item.prePid != undefined && item.sid != undefined) { //债权转让
              //url = $state.href('mytransfer', { idx: index });
              popUPOne.href = '/other/protocol/transferProtocol.html?idx=' + index;
            } else if (item.prePid == undefined && item.sid != undefined) { //安选
              if (item.type == 5) { //保理
                // url = $state.href('baoli', { idx: index });
                popUPOne.href = '/other/protocol/baoliProtocol.html?idx=' + index;
              } else { //借款协议
                //url = $state.href('loan', { idx: index });
                popUPOne.href = '/other/protocol/loanProtocol.html?idx=' + index;
              }
            } else if (item.prePid == undefined && item.sid == undefined) { //权益转让及受让协议
              //url = $state.href('qy', { idx: index });
              popUPOne.href = '/other/protocol/qyProtocol.html?idx=' + index;
            }
          } else {
            url = "/agreement/download.do?pid=" + ids.pid + "&uid=" + ids.uid + "&investId=" + ids.investId;
            popUPTwo.href = url;
            $scope.type = 4;
          }
        } else if ($scope.status == 0) {//云签 
          $scope.statuss = 0;
          if (type) {
            $scope.showTan2 = true;
            $scope.type = 3;
            $scope.name='查看合同';
            var url = $scope.url+'?appId=' + info.map.appId + '&time=' + info.map.time + '&sign=' + info.map.sign + '&signType=' + info.map.signType + '&userId=' + info.map.userId + '&orderId=' + info.map.orderId;
            popUPOne.href = url;
          } else {
            $scope.showTan3 = true;
            $scope.type = 4;
            $scope.name='下载合同';
            $('#popUPTwo').one('click', function () {
              $('#yunqian').submit();
            })
          }
        }else if ($scope.status == 1) {
          $scope.statuss = 0;
          if (type) {
            $scope.showTan2 = true;
            $scope.type = 3;
            $scope.name='查看合同';
            popUPOne.href = $scope.url;
          } else {
            $scope.showTan3 = true;
            $scope.type = 4;
            $scope.name='下载合同';
            url = $scope.url;
            popUPTwo.href = url;
          }
        } //云签
      })
      // })
  };
}])
