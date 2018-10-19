/**
 * Created on 2017/4/20.
 */
mainModule.directive('pointMallHome', ['$rootScope', '$localStorage', '$resource', '$filter', '$location', '$state', 'isRegisterFilter', 'pointMallDataService', function($rootScope, $localStorage, $resource, $filter, $location, $state, isRegisterFilter, pointMallDataService){
    return {
        templateUrl : '../../main/html/pointMallHome.html',
        scope : {

        },
        controller : function ($scope, $element, $attrs) {
            /*this.path = $localStorage.pathObj;
            if (this.path == undefined) {
                this.path = [{url: '/main/home', pathName: '首页'}];
            }
            for (var i = 0; i < this.path.length; i++) {
                var cur = this.path[i];
                if (cur.pathName == '积分商城') {
                    this.path.splice(i, this.path.length - i);
                }
            }*/
            $rootScope.title = '积分商城-多融财富';
            this.path = [{url: '/main/home', pathName: '首页'}];
            this.title = "积分商城";
            this.isLogin = isRegisterFilter('a').register;
            var self = this;
            var showGoodsThumb = function() {
                var itvl = setInterval(function () {
                    if (self.hasOwnProperty('map')) {
                        clearInterval(itvl);
                        var goodsEle = document.getElementsByClassName('thumb');
                        var goods = self.map.result.interestProducts.concat(self.map.result.cashProducts, self.map.result.realProducts);
                        for( var i = 0; i < goodsEle.length; i++){
                            goodsEle[i].style.background = "url('" + goods[i].pcListPath + "') no-repeat center";
                        }
                    }
                }, 20);
            };
            if (this.isLogin) {
                pointMallDataService.getHomeData().then(function (resp) {
                    self.map = resp;
                    showGoodsThumb();
                }, function (errMsg) {

                });
            } else {
                pointMallDataService.getGoodsList().then(function (resp) {
                    self.map = resp;
                    showGoodsThumb();
                }, function (errMsg) {

                });
            }
            this.onPointDetail = function () {
                $state.go('main.pointMallPointRecords', {type: 'all'});
            };
            this.onRecords = function () {
                $location.path("/main/pointMallPointRecords/exchange");
            };
            this.onEarnPoint = function () {
                $location.path("/main/myAccount/myTask");
            };
            this.onRemark = function () {
                $location.path("/main/pointMallRemark");
            };
            this.onGoodsDetail = function (goods) {
                if (goods.surplusQty <= 0) return false;
                // $state.go('main.pointMallGoodsInfo', {type: goods.type, goodsId: goods.productId});
                $location.path("/main/pointMallGoodsInfo/" + goods.type + '/' + goods.productId);
            };
        },
        bindToController : true,
        controllerAs : 'ctrl',
    };
}]);

mainModule.filter('truncate', function () {
    return function (input, maxLen) {
        if (typeof input == 'string' && input.length > maxLen) {
            return (input.slice(0, maxLen - 3) + '...');
        }
        return input;
    };
});

mainModule.directive('pointMallGoodsInfo', ['$rootScope', '$state', '$localStorage', '$css', '$uibModal', '$document', '$stateParams', '$location', '$resource', '$filter', 'isRegisterFilter', 'pointMallDataService', function ($rootScope, $state, $localStorage, $css, $uibModal, $document, $stateParams, $location, $resource, $filter, isRegisterFilter, pointMallDataService) {
    return {
        templateUrl : '../../main/html/pointMallGoodsInfo.html',
        scope : {},
        controller : function ($scope, $element, $attrs) {
            this.isLogin = isRegisterFilter('a').register;
            if (!this.isLogin){
                $state.go('dl');
                return false;
            }
            $css.add('/main/css/stylesheets/bootstrap-sass-3.3.7/pop.css');
            /*this.path = $localStorage.pathObj;
            if (this.path == undefined) {
                this.path = [{url: '/main/home', pathName: '首页'}];
            }
            for (var i = 0; i < this.path.length; i++) {
                var cur = this.path[i];
                if (cur.pathName == '积分商城') {
                    this.path.splice(i, this.path.length - i);
                }
            }*/
            $rootScope.title = '积分商城-多融财富';
            this.path = [{url: '/main/home', pathName: '首页'}];
            this.path.push({url: '/main/pointMall', pathName: '积分商城'});
            this.title = "商品明细";
            //商品信息
            var fetchGoodsInfo = function (params, pointMallData) {
                var goodsArr = [];
                switch (params.goodsType) {
                    case "1":
                        goodsArr = pointMallData.result.cashProducts;
                        break;
                    case "2":
                        goodsArr = pointMallData.result.interestProducts;
                        break;
                    case "5":
                        goodsArr = pointMallData.result.realProducts;
                        break;
                }
                for (var i = 0; i < goodsArr.length; i++) {
                    if (parseInt(goodsArr[i].productId) == parseInt(params.goodsId)) {
                        return goodsArr[i];
                    }
                }
                return [];
            }
            this.userPoints = 0;
            var self = this;
            pointMallDataService.getHomeData().then(function (resp) {
                self.userPoints = resp.result.points;
                self.goodsInfo = fetchGoodsInfo($stateParams, resp);
                //设置商品图片
                setTimeout(function () {
                    document.getElementsByClassName('goodsImg')[0].style.background = "url('" + self.goodsInfo.pcDetailPath + "') no-repeat center";
                }, 20);
            }, function (errMsg) {
                
            });
            this.quantity = 1;
            this.qtyHandling = false;
            this.onQuantity = function (upDown) {
                if (this.qtyHandling === true) return false;
                this.qtyHandling = true;
                setTimeout(function () {
                    self.qtyHandling = false;
                }, 200);
                if (upDown === true) {
                    if ((this.quantity + 1) * this.goodsInfo.realPoints > this.userPoints) {
                        createModal($uibModal, "myNotifyModal.html", "540px", "30%", function () {
                            this.title = "您的积分不足!";
                            this.detail = "";
                            this.btnName = "关 闭";
                            this.forward = function () {
                                document.body.firstElementChild.click();
                            }
                        });
                        return false;
                    }
                    this.quantity++;
                }
                if (upDown === false) {
                    if (this.quantity > 1) {
                        this.quantity--;
                    }
                }
            }
            //Modal Start
            function createModal (handler, tpl, width, top, controller) {
                var modalInstance = handler.open({
                    animation: false,
                    ariaLabelledBy: 'modal-title',
                    ariaDescribedBy: 'modal-body',
                    templateUrl: tpl,
                    controller: controller,
                    controllerAs: '$ctrl',
                });
                //重置modal样式
                setTimeout(function() {
                    document.getElementsByClassName('modal-dialog')[0].style.width = width;
                    document.getElementsByClassName('modal-dialog')[0].style.top = top;
                    document.getElementsByClassName('modal-dialog')[0].style.margin = "auto";
                    document.getElementsByClassName('modal-dialog')[0].style.padding = "0";
                }, 0);
            }
            this.popConfirm = function () {
                createModal($uibModal, "myConfirmModal.html", "880px", "20%", function () {
                    this.goods = {
                        name : self.goodsInfo.name,
                        price: self.goodsInfo.realPoints,
                        qty  : self.quantity,
                        total: self.goodsInfo.realPoints * self.quantity
                    };
                    this.onOk = function () {
                        //先关闭之前的弹窗
                        document.body.firstElementChild.click();
                        pointMallDataService.sendExchangeRequest($localStorage.uid, self.goodsInfo.productId, self.quantity).then(function (successMsg) {
                            pointMallDataService.resetHomeData();
                            createModal($uibModal, "myNotifyModal.html", "540px", "30%", function () {
                                this.title = successMsg;
                                this.detail = self.goodsInfo.name;
                                this.btnName = "查 看";
                                this.forward = function () {
                                    document.body.firstElementChild.click();
                                    $location.path("/main/pointMallPointRecords/exchange");
                                }
                            });
                        }, function (err) {
                            createModal($uibModal, "myNotifyModal.html", "540px", "30%", function () {
                                this.title = err.errorMsg;
                                this.detail = "";
                                this.btnName = err.errorCode == '1002' ? "获得积分" : "查看其他商品";
                                this.forward = function () {
                                    document.body.firstElementChild.click();
                                    if (err.errorCode == '1002') {
                                        $location.path("/main/myAccount/myTask");
                                    } else {
                                        $location.path("/main/pointMall");
                                    }
                                }
                            });
                        })
                    };
                });
            };
            //Modal End
        },
        bindToController : true,
        controllerAs : 'ctrl'
    };
}]);

mainModule.directive('pointMallPointRecords', ['$rootScope', '$state', '$stateParams', '$localStorage', '$location', '$css', '$filter', 'pointMallDataService', 'isRegisterFilter', function ($rootScope, $state, $stateParams, $localStorage, $location, $css, $filter, pointMallDataService, isRegisterFilter) {
    return {
        templateUrl : '../../main/html/pointMallPointRecords.html',
        scope : {},
        controller: function ($scope, $element, $attrs) {
            this.isLogin = isRegisterFilter('a').register;
            if (!this.isLogin){
                $state.go('dl');
                return false;
            }
            /*this.path = $localStorage.pathObj;
            if (this.path == undefined) {
                this.path = [{url: '/main/home', pathName: '首页'}];
            }
            for (var i = 0; i < this.path.length; i++) {
                var cur = this.path[i];
                if (cur.pathName == '积分商城') {
                    this.path.splice(i, this.path.length - i);
                }
            }*/
            $rootScope.title = '积分商城-多融财富';
            this.path = [{url: '/main/home', pathName: '首页'}];
            this.path.push({url: '/main/pointMall', pathName: '积分商城'});
            if ($stateParams.type == 'exchange') {
                this.title = "兑换记录";
            } else if ($stateParams.type == 'all') {
                this.title = "积分明细";
            }
            $css.add('/main/css/stylesheets/bootstrap-sass-3.3.7/calendar.css');
            //日期控件参数 Start
            this.format = 'yyyy/MM/dd';
            this.startDate = null;
            this.endDate = null;
            this.startPopup = {
                opened: false
            };
            this.endPopup = {
                opened: false
            };
            this.dateOptions = {
                // dateDisabled: disabled,
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(2015, 1, 1),
                startingDay: 1
            };
            this.openStartDate = function() {
                this.startPopup.opened = true;
            };

            this.openEndDate = function() {
                this.endPopup.opened = true;
            };
            // Disable weekend selection
            function disabled(data) {
                var date = data.date,
                    mode = data.mode;
                return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
            }
            //日期控件参数 End
            this.currentPoint = 0;
            this.records = [];
            var self = this;
            pointMallDataService.getHomeData().then(function (resp) {
                self.currentPoint = resp.result.points;
            }, function (err) {
                
            });
            if ($stateParams.type == 'exchange') {
                pointMallDataService.getExchangeRecords($localStorage.uid).then(function (resp) {
                    var rtnArr = resp.result;
                    for (var i = 0; i < rtnArr.length; i++) {
                        var record = {};
                        record.date = rtnArr[i].date;
                        record.desc = rtnArr[i].name;
                        record.count = rtnArr[i].exchangeCount;
                        record.change = '-' + rtnArr[i].expensedPoints;
                        self.records.push(record);
                    }
                }, function (err) {

                });
                this.contentType = 'exchange';
            } else if ($stateParams.type == 'all') {
                pointMallDataService.getAllPointChanges($localStorage.uid).then(function (resp) {
                    var rtnArr = resp.result;
                    for (var i = 0; i < rtnArr.length; i++) {
                        var record = {};
                        record.date = rtnArr[i].occurTime;
                        record.desc = rtnArr[i].desc;
                        record.change = rtnArr[i].points;
                        self.records.push(record);
                    }
                }, function (err) {

                });
                this.contentType = 'all';
            }

            this.getChangeTxtClass = function (changeValue) {
                if (changeValue == '') return '';
                if (changeValue[0] == '-') return 'decrease';
                return 'increase';
            };

            this.onEarnPoints = function () {
                $location.path('/main/myAccount/myTask');
                return true;
            }
        },
        bindToController : true,
        controllerAs : 'ctrl'
    };
}]);

mainModule.directive('pointMallRemark', ['$rootScope', '$state', '$localStorage', 'isRegisterFilter', function ($rootScope, $state, $localStorage, isRegisterFilter) {
    return {
        templateUrl : '../../main/html/pointMallRemark.html',
        scope : {},
        controller: function ($scope, $element, $attrs) {
            /*this.path = $localStorage.pathObj;
            if (this.path == undefined) {
                this.path = [{url: '/main/home', pathName: '首页'}];
            }
            for (var i = 0; i < this.path.length; i++) {
                var cur = this.path[i];
                if (cur.pathName == '积分商城') {
                    this.path.splice(i, this.path.length - i);
                }
            }*/
            $rootScope.title = '积分商城-多融财富';
            this.path = [{url: '/main/home', pathName: '首页'}];
            this.path.push({url: '/main/pointMall', pathName: '积分商城'});
            this.title = "积分说明";
        },
        bindToController : true,
        controllerAs : 'ctrl'
    };
}]);
