/*lee 我的优惠券*/
mainModule.controller('myCouPonCtrl', ['$rootScope','$scope', '$http', '$state', '$stateParams', '$localStorage','$sessionStorage', 'resourceService','$filter','communicationService',function($rootScope,$scope, $http, $state, $stateParams, $localStorage,$sessionStorage,resourceService,$filter,communicationService) {
	$rootScope.$broadcast('myEvent.WHDR_Ctrl',{name:'优惠券',url:'main.myAccount.myCoupon'});
	$rootScope.title="优惠券-多融财富";
	resourceService.queryPost($scope,$filter('交互接口对照表')('我的优惠券'),{},'我的优惠券');
	$rootScope.activeNav = 'account';
	$scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
		switch(type){
			case '我的优惠券':
				if (data.success) {
					$scope.HBList=[];
					$scope.QList=[];
					$scope.ZSQList=[];
					$scope.FBQList=[];
					$scope.CJList=[];
					$scope.TYJ={};
					$scope.NTLIST=[];//n天加息
					for (var i = 0; i < data.map.list.length; i++) {
						switch(data.map.list[i].type){
							case 1:
								data.map.list[i].sel=false;
								$scope.HBList.push(data.map.list[i]);
							break;
							case 2:
								data.map.list[i].sel=false;
								if(data.map.list[i].source!=4){
									if(data.map.list[i].maxProductDeadline==0){
										$scope.QList.push(data.map.list[i]);
									}
									if(data.map.list[i].maxProductDeadline!=0){
										$scope.ZSQList.push(data.map.list[i]);
									}
								}
							break;
							case 3:
								data.map.list[i].sel=false;
								$scope.HBList.push(data.map.list[i]);
							break;
							case 4:
								data.map.list[i].sel=false;
								$scope.FBQList.push(data.map.list[i]);
							break;
							case 8://n天加息
								data.map.list[i].sel=false;
								$scope.NTLIST.push(data.map.list[i]);
							break;
						};
					}
					$scope.ZScouponLength = 0;
					$scope.ZScouponUsedLength = 0;
					$scope.ZScouponDisabledLength = 0;
					for (var i = 0; i < $scope.ZSQList.length; i++) {
						if ($scope.ZSQList[i].status == 0) {
							$scope.ZScouponLength ++;
						} else if ($scope.ZSQList[i].status == 1) {
							$scope.ZScouponUsedLength ++;
						} else if ($scope.ZSQList[i].status == 2) {
							$scope.ZScouponDisabledLength ++;
						}
					}
					$scope.couponLength = 0;
					$scope.couponUsedLength = 0;
					$scope.couponDisabledLength = 0;
					for (var i = 0; i < $scope.QList.length; i++) {
						if ($scope.QList[i].status == 0) {
							$scope.couponLength ++;
						} else if ($scope.QList[i].status == 1) {
							$scope.couponUsedLength ++;
						} else if ($scope.QList[i].status == 2) {
							$scope.couponDisabledLength ++;
						}
					}
					$scope.tipsLength = 0;
					$scope.tipsUsedLength = 0;
					$scope.tipsDisabledLength = 0;
					for (var i = 0; i < $scope.HBList.length; i++) {
						if ($scope.HBList[i].status == 0) {
							$scope.tipsLength ++;
						} else if ($scope.HBList[i].status == 1) {
							$scope.tipsUsedLength ++;
						} else if ($scope.HBList[i].status == 2) {
							$scope.tipsDisabledLength ++;
						}
					}
					$scope.fbqLength = 0;
					$scope.fbqUsedLength = 0;
					$scope.fbqDisabledLength = 0;
					for (var i = 0; i < $scope.FBQList.length; i++) {
						if ($scope.FBQList[i].status == 0) {
							$scope.fbqLength ++;
						} else if ($scope.FBQList[i].status == 1) {
							$scope.fbqUsedLength ++;
						} else if ($scope.FBQList[i].status == 2) {
							$scope.fbqDisabledLength ++;
						}
					}
                    //超级加息券
                    $scope.CJList=data.map.superList;//超级加息券列表
                    $scope.CJcounpLength=0;//未使用
                    $scope.CJusedcounpLength=0;//已使用
                    $scope.CJdisablecounpLength=0;//已过期
                    for(var j=0;j<$scope.CJList.length;j++){
                        if($scope.CJList[j].status==0){
                            $scope.CJcounpLength++;
                        }else if($scope.CJList[j].status==1){
                            $scope.CJusedcounpLength++;
                        }else if($scope.CJList[j].status==2){
                            $scope.CJdisablecounpLength++;
                        }
                    }
                    //n天加息券
                    $scope.NDAYLength = 0;
                    $scope.NDAYUsedLength = 0;
                    $scope.NDAYDisabledLength = 0;
                    for (var i = 0; i < $scope.NTLIST.length; i++) {
                        if ($scope.NTLIST[i].status == 0) {
                            $scope.NDAYLength ++;
                        } else if ($scope.NTLIST[i].status == 1) {
                            $scope.NDAYUsedLength ++;
                        } else if ($scope.NTLIST[i].status == 2) {
                            $scope.NDAYDisabledLength ++;
                        }
                    }

				}
			break;
		}
	});
	 /*所有的点击事件*/
    $scope.onClick=function(name){
         switch(name){
            case '立即使用':
                $state.go('main.bankBillList');
            break;
        };
    };
}])