/*lee 定期理财列表*/
mainModule.controller('bankCtrl', ['$scope', '$rootScope', '$http', '$state', '$stateParams', '$localStorage', '$sessionStorage', 'resourceService', '$filter', 'communicationService', 'MAIN_MENU', function ($scope, $rootScope, $http, $state, $stateParams, $localStorage, $sessionStorage, resourceService, $filter, communicationService, MAINMENU) {
  $filter('isLogin')($scope);
  $scope.order = 0;
  $scope.show = 'all';
  $scope.name = '全部产品';
  var pageSize = 100;
  var productType, k = 0;
  $scope.bill = {};
  $scope.bill.pageOn = 1;
  $scope.bill.statuses = [5];
  $scope.path = $localStorage.pathObj;
   $rootScope.title = "定期理财_多融线上理财,金融理财投资产品_如何投资理财_p2p融资平台-多融财富";
  $rootScope.keywords='定期理财,多融理财,线上理财,金融理财投资,如何投资理财,p2p融资平台,投资理财产品';
  $rootScope.description='如何投资理财？多融理财为了满足广大新用户的投资需求，推出了多种金融理财投资产品，不仅有新手专享，还有商票、保理专享，用户可根据实际情况，选择适合自己的理财产品。多融理财产品收益高、风险低，能满足不同的投资者需求。';
  $scope.title = "定期理财";
  $rootScope.activeNav = 'bill2';
  // MAINMENU.menuname('bill', 'menu');
  // goPage($scope.order, $scope.bill.pageOn, [5], 0);
  goPage($scope.order,$scope.bill.pageOn, [5], 6);
  goPage($scope.order, $scope.bill.pageOn, [6, 8, 9], 6);

  $scope.$on('resourceService.QUERY_POST_MYEVENT', function (event, data, type) {
    switch (type) {
      case '用户信息':
        if (data.success) {
          $localStorage.user = data.map;
        }
        break;
      case "全部产品":
        $scope.listDatas = data.map.page.rows;
        $scope.listDatas.total = data.map.page.total;
        break;
      case "往期产品":
        $scope.listDatasPast = data.map.page.rows;
        $scope.listDatasPast.total = data.map.page.total;
        $scope.bill = data.map.page;
        $scope.bill.pages = [];
        for (var i = 0; i < parseInt($scope.bill.totalPage); i++) {
          $scope.bill.pages[i] = i + 1;
        };
        break;
    };

  });
  //增加筛选框
  //显示全部
  $scope.showBox = false;
  if ($localStorage.user != undefined) {
    resourceService.queryPost($scope, $filter('交互接口对照表')('Home主数据'), {}, '用户信息');
  }
  $scope.onClickToBillDetail = function (item) {
    $filter('跳转页面')('票据安选', 'main.bankBillList', 'main.billDetail', item, { pathName: '票据理财', url: '/main/bankBillList' });
  }
  $scope.an = {
    lv: 1,
    qx: 3,
    order: 0
  };
  $scope.past = {
    lv: 1,
    qx: 3,
    order: 0
  };
  $scope.onClickPage = function (type, pageNum, listtype) {
    switch (type) {
      case "beforPage":
        if ($scope.bill.pageOn > 1) {
          $scope.bill.pageOn -= 1;
          select($scope.order, $scope.bill.pageOn, [6, 8, 9]);
        };
        break;
      case "currentPage":
        $scope.bill.pageOn = pageNum;
        select($scope.order, $scope.bill.pageOn, [6, 8, 9]);
        break;
      case "nextPage":
        if ($scope.bill.pageOn < $scope.bill.pages.length) {
          $scope.bill.pageOn += 1;
          select($scope.order, $scope.bill.pageOn, [6, 8, 9]);
        };
        break;
      case "期限":
        switch (listtype) {
          case 2:
            if ($scope.an.qx == 3) {
              $scope.an.qx = $scope.an.order = 4;
            } else {
              $scope.an.qx = $scope.an.order = 3;
            }
            $scope.an.lv = 1;
            select($scope.an.order, 1, [5]);
            break;
          case undefined:
            if ($scope.past.qx == 3) {
              $scope.past.qx = $scope.past.order = 4;
            } else {
              $scope.past.qx = $scope.past.order = 3;
            }
            $scope.past.lv = 1;
            $scope.bill.pageOn = 1;
            $scope.order = $scope.past.order;
            select($scope.past.order, $scope.bill.pageOn, [6, 8, 9]);
            break;
        }
        break;
      case "利率":
        switch (listtype) {
          case 2:
            if ($scope.an.lv == 1) {
              $scope.an.lv = $scope.an.order = 2;             
            } else {
              $scope.an.lv = $scope.an.order = 1;              
            }
            $scope.an.qx = 3;
             select($scope.an.order, 1, [5]);
            break;
          case undefined:
            if ($scope.past.lv == 1) {
              $scope.past.lv = $scope.past.order = 2;             
            } else {
              $scope.past.lv = $scope.past.order = 1;   
            }
            $scope.past.qx = 3;
            $scope.bill.pageOn = 1;
            $scope.order = $scope.past.order;
             select($scope.past.order, $scope.bill.pageOn, [6, 8, 9]);
            break;
        }
        break;
      case "默认":
        switch (listtype) {
          case 2:
            $scope.an.lv = 1;
            $scope.an.qx = 3;
            $scope.an.order = 0;
            // $scope.bill.pageOn = 0;
            select($scope.an.order, 1, [5]);
            break;
          case undefined:
            $scope.past.lv = 1;
            $scope.past.qx = 3;
            $scope.past.order = 0;
            $scope.bill.pageOn = 1;
            $scope.order = $scope.past.order;
       
             select($scope.past.order, $scope.bill.pageOn, [6, 8, 9]);
            break;
        }
        break;
    };
  }

  function goPage(order, pageOn, statuses, paramType) {
    // 翻页
    var obj = {},
      str = '';
    obj.order = order;
    obj.pageOn = pageOn;
    obj.pageSize = 100;
    obj.paramType = paramType; //增加传递type类型过去，用来判断产品类型
    obj.statuses = statuses;
    if (paramType == 6) {
      if (statuses == 5) {
        str = '全部产品';
      } else {
        str = '往期产品';
        obj.pageSize = 5;
      }
    } 
    resourceService.queryPost($scope, $filter('交互接口对照表')('票据列表'), obj, str);
  };
//封装产品选择
  function select(order,pageOn,status) {
    if ($scope.name == '全部产品') {
      goPage(order, pageOn,status, 6);
    }  
  };
  $.tips({ //提示文字
    scope: $scope,
    left: -130,
    top: 15,
    element: '.bill-content-wrapper'
  })
}])
