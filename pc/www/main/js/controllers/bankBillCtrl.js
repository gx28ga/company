/*lee 票据列表*/
mainModule.controller('bankBillCtrl', ['$scope', '$rootScope', '$http', '$state', '$stateParams', '$localStorage', '$sessionStorage', 'resourceService', '$filter', 'communicationService', 'MAIN_MENU', function ($scope, $rootScope, $http, $state, $stateParams, $localStorage, $sessionStorage, resourceService, $filter, communicationService, MAINMENU) {
  $filter('isLogin')($scope);
  $scope.order = 0;
  $scope.show = 'all';
  $scope.name = '全部产品';
  var pageSize = 10;
  var productType, k = 0;
  $scope.bill = {};
  $scope.bill.pageOn = 1;
  $scope.bill.statuses = [5];
  $scope.path = $localStorage.pathObj;
  $rootScope.title = "票据理财_多融财富理财产品怎么样,收益如何,好不好,商票安选_银砖金融好吗-多融财富";
  $rootScope.keywords='票据理财,多融财富理财产品怎么样,银砖金融理财产品好吗,多融财富理财收益如何,多融财富理财好不好,多融财富商票安选';
  $rootScope.description='多融财富理财产品怎么样？银砖金融理财产品好吗？多融财富理财收益如何？这些都是投资者比较关注的话题，那么多融财富理财好不好？多融财富主要为投资者提供多种投资产品，主要以商票安选的形式来投资，投资者可根据自己中意的商票安选期进行选择。';
  $scope.title = "定期理财";
  MAINMENU.menuname('bill', 'menu');
  // goPage($scope.order, $scope.bill.pageOn, [5], 0);
  goPage($scope.order,$scope.bill.pageOn, [5], 0);
  goPage($scope.order, $scope.bill.pageOn, [6, 8, 9], 0);

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
      case "票据产品":
        $scope.listDatas = data.map.page.rows;
        $scope.listDatas.total = data.map.page.total;
        break;
      case "保理产品":
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
  $scope.showAll = function () {
    $scope.show = "all";
    $scope.showingType = {};
    $scope.name = '全部产品';
    $scope.showBox = 'all';
    $scope.an.order=0;
    $scope.an.qx=3;
    $scope.an.lv=1;
    goPage($scope.order, 1, [5], 0);
    goPage($scope.order, $scope.bill.pageOn, [6, 8, 9], 0);
  }

  //显示保理
  $scope.showBaoli = function () {
      $scope.show = "baoli";
      $scope.showBox = 'baoli';
      $scope.an.order=0;
      $scope.an.qx=3;
      $scope.an.lv=1;
      $scope.name = '保理产品';
      goPage($scope.order, 1, [5], 5);
      goPage($scope.order, $scope.bill.pageOn, [6, 8, 9], 5);
    }
    //显示票据
  $scope.showPiaoju = function () {
      $scope.show = "piaoju";
      $scope.showingType = { productType: 2 };
      $scope.name = '票据产品';
      $scope.an.order=0;
      $scope.an.qx=3;
      $scope.an.lv=1;
      goPage($scope.order, 1, [5], 2);
      goPage($scope.order, $scope.bill.pageOn, [6, 8, 9], 2);
    }
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
  // $scope.you = {
  //    lv: 1,
  //    qx: 3,
  //    order: 0
  // };
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
         /*   if ($scope.name == '全部产品') {
              goPage($scope.past.order, $scope.bill.pageOn, [6, 8, 9], 0);
            } else if ($scope.name == '票据产品') {
              goPage($scope.past.order, $scope.bill.pageOn, [6, 8, 9], 2);
            } else if ($scope.name == '保理产品') {
              goPage($scope.past.order, $scope.bill.pageOn, [6, 8, 9], 5);
            }*/
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
    obj.pageSize = 10;
    obj.paramType = paramType; //增加传递type类型过去，用来判断产品类型
    obj.statuses = statuses;
    // if (type != undefined) {
    //   obj.type = type; // 不传type过去并且在页面中把type为1的隐藏
    // }
    if (paramType == 0) {
      if (statuses == 5) {
        str = '全部产品';
      } else {
        str = '往期产品';
        obj.pageSize = 5;
      }
    } else if (paramType == 2) {
      if (statuses == 5) {
        str = '票据产品';
      } else {
        str = '往期产品';
        obj.pageSize = 5;
      }
    } else if (paramType == 5) {
      if (statuses == 5) {
        str = '保理产品';
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
      goPage(order, pageOn,status, 0);
    } else if ($scope.name == '票据产品') {
      goPage(order, pageOn,status, 2);
    } else if ($scope.name == '保理产品') {
      goPage(order, pageOn,status, 5);
    }
  };
  $.tips({ //提示文字
    scope: $scope,
    left: -130,
    top: 15,
    element: '.bill-content-wrapper'
  })
}])
