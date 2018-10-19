/**
 * Created by Dell on 2017/5/27.
 */
mainModule.directive('createEscrowAccount', ['$localStorage', '$location', '$filter', '$resource', '$state', 'myAccountDataService', 'formatIdcardnoFilter', 'formatBankcardnoFilter', function ($localStorage, $location, $filter, $resource, $state, myAccountDataService, formatIdcardnoFilter, formatBankcardnoFilter) {
    return {
        templateUrl : '../../main/html/createEscrowAccount.html',
        scope : {},
        controller : function ($scope, $element, $attrs) {
            if ($localStorage.user == undefined) {
                $state.go('dl');
                return false;
            } else if ($localStorage.hasOwnProperty('uid') && $localStorage.hasOwnProperty('isRas') && $localStorage.isRas == true) {
                $state.go('main.myAccount.accountHome');
                return false;
            }
            var ctrl = this;
            $filter('isLogin')(ctrl);
            ctrl.bankInfo = [];
            ctrl.saves = [];
            ctrl.investList = [];
            ctrl.truename = '';
            ctrl.idcardno = '';
            ctrl.editIdcardno = true;
            ctrl.bankcardno = '';
            ctrl.editBankcardno = true;
            ctrl.password = '';
            ctrl.confirmpass = '';
            ctrl.hasUnSelect = true;
            ctrl.oldinfo = undefined;
            ctrl.submitting = false;
            $resource('/main/data/bank.json', {}, {get: {isArray: true}}).get({}, function (resp) {
                ctrl.bankInfo = resp;
                if ($localStorage.hasOwnProperty('uid')) {
                    //获取用户已绑卡信息
                    myAccountDataService.getOldUserBankInfo().then(function (resp) {
                        ctrl.oldinfo = resp.map.requestData;
                        if (ctrl.oldinfo.hasOwnProperty('idCard')) {
                            ctrl.idcardno = ctrl.oldinfo.idCard;
                        }
                        if (ctrl.oldinfo.hasOwnProperty(('name'))) {
                            ctrl.truename = ctrl.oldinfo.name;
                        }
                        if (ctrl.oldinfo.hasOwnProperty(('bankCard'))) {
                            ctrl.bankcardno = ctrl.oldinfo.bankCard;
                        }
                        if (ctrl.oldinfo.hasOwnProperty(('parentBankId'))) {
                            bankCode = ctrl.oldinfo.parentBankId;
                            for (var i = 0; i < ctrl.bankInfo.length; i++) {
                                if (bankCode == ctrl.bankInfo[i].bankId) {
                                    $(".bankname dt span").html(ctrl.bankInfo[i].parentBankId);
                                    $(".bankname dt").addClass("frozen");
                                    $(".bankname dt").css("background", "rgb(235, 235, 228");
                                    break;
                                }
                            }
                        }
                    }, function (err) {

                    });
                }
            });
            var bankCode, save , savecode ,citycode ,text;
            if ($localStorage.uid == undefined) {
                ctrl.skipOk = true;
            } else {
                ctrl.skipOk = false;
            }
            ctrl.onClickBank = function(event,item){
                var e = event || window.event;
                var text = $(this).html();
                bankCode = item.bankId;
                $(".bankname dt span").html(item.parentBankId);
                $(".bankname dd ul").hide();
                if (savecode != undefined) {
                    ctrl.hasUnSelect = false;
                }
            };
            $resource('/main/data/citys.json', {}, {get: {isArray: true}}).get({}, function (resp) {
                ctrl.saves = resp;
            });
            ctrl.showlala = false;
            ctrl.onClickMenuItem = function (event,item) {
                var e = event || window.event;
                ctrl.showlala = true;
                ctrl.investList = item.citys;
                var $this = $(event.currentTarget);
                save = $this.context.textContent;
                savecode = item.provinceCode;
                $('.city').css("top",$this.context.offsetTop+36+'px');
                $('.city').css("left",$this.context.offsetLeft+'px');
            };
            ctrl.cityClick = function (event,item) {
                var e = event || window.event;
                var $this = $(event.currentTarget);
                text = save +'--'+ $this.html();
                citycode = item.cityCode;
                ctrl.showlala = false;
                $(".userdropdown2 dt span").html(text);
                $(".userdropdown2 dd .areabox").hide();
                if (bankCode != undefined) {
                    ctrl.hasUnSelect = false;
                }
            };
            ctrl.submit = function () {
                this.submitting = true;
                var smtTimer = setTimeout(function () {
                    ctrl.submitting = false;
                }, 3000);
                var params = {
                    cust_nm: ctrl.truename,
                    certif_id: ctrl.idcardno,
                    capAcntNo: ctrl.bankcardno,
                    city_id: citycode,
                    parent_bank_id: bankCode,
                    password: ctrl.password
                };
                myAccountDataService.createEscrowAccount(params).then(function(resp){
                    if (ctrl.submitting) {
                        ctrl.submitting = false;
                        clearTimeout(smtTimer);
                    }
                    if (resp.hasOwnProperty('success')) {
                        if (resp.success) {
                            $localStorage.isRas = true;    //设置存管账户状态
                            var isLogin = $localStorage.hasOwnProperty('uid') ? true : false;
                            var result = {
                                success: true,
                                title: isLogin ? '激活成功' : '注册成功',
                                detail: '',
                                mainBtnName: isLogin ? '回账户中心' : '现在去登录',
                                onMainBtnClick : function () {
                                    if (isLogin) {
                                        $state.go('main.newZeroDetail');
                                    } else {
                                        $state.go('dl');
                                    }
                                },
                                onClose : function () {
                                    if (isLogin) {
                                        $state.go('main.newZeroDetail');
                                    } else {
                                        $state.go('dl');
                                    }
                                }
                            }
                            $scope.result = result;
                            $filter('存管账户操作结果弹窗')($scope);
                        } else {
                            var reason = '请联系客服。';
                            if (resp.hasOwnProperty('errorMsg')) {
                                reason = resp.errorMsg;
                            }
                            var result = {
                                success: false,
                                title: '注册失败',
                                detail: '失败原因：' + reason,
                                mainBtnName: '关 闭',
                                onMainBtnClick : function () {
                                    //do nothing
                                },
                                onClose : function () {
                                    //do nothing
                                }
                            }
                            $scope.result = result;
                            $filter('存管账户操作结果弹窗')($scope);
                        }
                    } else {
                        var result = {
                            success: false,
                            title: '注册失败',
                            detail: '失败原因：系统错误。',
                            mainBtnName: '关 闭',
                            onMainBtnClick : function () {
                                //do nothing
                            },
                            onClose : function () {
                                //do nothing
                            }
                        }
                        $scope.result = result;
                        $filter('存管账户操作结果弹窗')($scope);
                    }
                });
            };
            ctrl.skip = function () {
                $state.go('main.myAccount.accountHome');
                return true;
            };
            /*ctrl.onClickAccord = function () {
                $state.go("fw");
            };*/
            /*var result = {
                success: false,
                title: '注册失败',
                detail: '失败原因：系统错误。',
                mainBtnName: '关 闭',
                onMainBtnClick : function () {
                    //do nothing
                },
                onClose : function () {
                    //do nothing
                }
            }
            $scope.result = result;
            $filter('存管账户操作结果弹窗')($scope);*/
            /*$scope.$watch('idcardno', function (newOne, oldOne) {
                ctrl.fmtIdcardno = newOne;
            });*/
            /*var idcardnoTimer;
            ctrl.onIdcardnoKeyup = function () {
                clearTimeout(idcardnoTimer);
                idcardnoTimer = setTimeout(function () {
                    document.getElementById('idcardno').blur();
                }, 900);
            };*/
            ctrl.onIdcardnoBlur = function () {
                ctrl.editIdcardno = false;
                document.getElementById('format-idcardno').setAttribute('value', formatIdcardnoFilter(document.getElementById('idcardno').value));
            };
            ctrl.onFmtIdcardnoClick = function () {
                ctrl.editIdcardno = true;
                document.getElementById('format-idcardno').setAttribute('value', '');
                setTimeout(function () {
                    document.getElementById('idcardno').focus();
                }, 20);
            };

            /*var bankcardnoTimer;
            ctrl.onBankcardnoKeyup = function () {
                clearTimeout(bankcardnoTimer);
                bankcardnoTimer = setTimeout(function () {
                    document.getElementById('bankcardno').blur();
                }, 900);
            };*/
            ctrl.onBankcardnoBlur = function () {
                ctrl.editBankcardno = false;
                document.getElementById('format-bankcardno').setAttribute('value', formatBankcardnoFilter(document.getElementById('bankcardno').value));
            };
            ctrl.onFmtBankcardnoClick = function () {
                ctrl.editBankcardno = true;
                document.getElementById('format-bankcardno').setAttribute('value', '');
                setTimeout(function () {
                    document.getElementById('bankcardno').focus();
                });
            };
        },
        bindToController : true,
        controllerAs : 'ctrl'
    };
}]);
mainModule.filter('secureMask', function () {
    return function (input, type) {
        if (typeof input != 'string') return input;
        var output = input.replace(' ', '');
        if (output == '') return '';
        if (type == 'idcard' && output.length > 7) {
            var arr = output.split('');
            output = '';
            for (var i = 0; i < arr.length; i++) {
                if (i < 3 || i >= arr.length - 4 ) {
                    output += arr[i];
                } else {
                    output += '*';
                }
            }
        }
        return output;
    }
});
mainModule.filter('formatIdcardno', function () {
   return function (input) {
       input = input.replace(' ', '');
       var inputArr = input.split('');
       var output = '';
       for (var i = 0; i < inputArr.length; i++) {
           output += inputArr[i];
           if (i == 5 || i == 13) {
               output += '  ';
           }
       }
       return output;
   };
});
mainModule.filter('formatBankcardno', function () {
   return function (input) {
       input = input.replace(' ', '');
       var inputArr = input.split('');
       var output = '';
       for (var i = 0; i < inputArr.length; i++) {
           output += inputArr[i];
           if (i % 4 == 3) {
               output += '  ';
           }
       }
       return output;
   };
});