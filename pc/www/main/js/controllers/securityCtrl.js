/* si 安全认证 */
mainModule.controller('securityCtrl', ['$location','$timeout', '$rootScope', '$http', '$scope', '$filter', 'resourceService', '$interval', '$localStorage', '$state', 'myAccountDataService', function ($location, $timeout, $rootScope, $http, $scope, $filter, resourceService, $interval, $localStorage, $state, myAccountDataService) {
    $scope.user = {};
    $scope.bank = {};
    $scope.trade = {};
    $scope.passwd = {};
    // $scope.settruename = false;
    $scope.subForm = '';
    $scope.user.getCodeText = '获取验证码';
    $scope.bank.getCodeText = '获取验证码';
    $scope.trade.getCodeText = '获取验证码';
    $scope.isSubmit = false;
    $scope.isShow = false;
    $scope.isShowAddress=false;//显示收货地址弹框
    $rootScope.title = '安全认证-多融财富';
    $rootScope.activeNav = 'account';
    if ($location.$$search.nmb == 'pswd') {
        $('.set-tradecode').addClass('actived-set-wrap').find('.btn a').text('取消修改');
        $('#set-tradecode').show().find('.set-trade-box').hide();
        $('.set-before').show();
        $localStorage.product = '';
    }
/*start-------------   选择银行   ------------start*/
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: '/data/bank.json',
        type: 'GET',
        data: '',
        dataType: 'json',
        success: function (data) {
            $scope.bankInfo = data;
        }
    });
    var bankCode;
    $('.bankname').ready(function() {
        $(".bankname dt").click(function() {
            $(".bankname dd ul").toggle();
        });
        $scope.onClickBank = function(event,item){
            var e = event || window.event;
            var text = $(this).html();
            bankCode = item.bankId;
            $(".bankname dt span").html(item.parentBankId);
            $(".bankname dd ul").hide();
        }
        $('.bankname').bind('click', function(e) {
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("bankname"))
                $(".bankname dd ul").hide();
        });
    });
    $('.bankarea').ready(function() {
        $(".bankarea dt").click(function() {
            $(".bankarea dd ul").toggle();
        });
        $scope.onClickBank2 = function(event,item){
            var e = event || window.event;
            var text = $(this).html();
            bankCode = item.bankId;
            $(".bankarea dt span").html(item.parentBankId);
            $(".bankarea dd ul").hide();
        }
        $('.bankarea').bind('click', function(e) {
            var $clicked = $(e.target);
            if (! $clicked.parents().hasClass("bankarea"))
                $(".bankarea dd ul").hide();
        });
    });
/*end--------   选择银行   ------------end*/
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: '/data/citys.json',
        type: 'GET',
        data: '',
        dataType: 'json',
        success: function (data) {
            $scope.save = data;
        }
    });
    $scope.showlala = false;
    var save , savecode ,citycode ,text;
    $scope.onClickMenuItem=function (event,item) {
        var e = event || window.event;
        $scope.showlala = true;
        $scope.investList = item.citys;
        var $this = $(event.currentTarget);
        save = $this.context.textContent;
        savecode = item.provinceCode;
        $('.city').css("top",$this.context.offsetTop+36+'px');
        $('.city').css("left",$this.context.offsetLeft+'px');
    }
    $scope.cityClick=function (event,item) {
        var e = event || window.event;
        var $this = $(event.currentTarget);
        text = save +'--'+ $this.html();
        citycode = item.cityCode;
        $scope.showlala = false;
        $(".userdropdown2 dt span").html(text);
        $(".userdropdown2 dd .areabox").hide();
    }
    $scope.cityClick2=function (event,item) {
        var e = event || window.event;
        var $this = $(event.currentTarget);
        text = save +'--'+ $this.html();
        citycode = item.cityCode;
        $scope.showlala = false;
        $(".bankdropdown2 dt span").html(text);
        $(".bankdropdown2 dd .areabox").hide();
    }
    $scope.cityClick3=function (event,item) {
        var e = event || window.event;
        var $this = $(event.currentTarget);
        text = save +'--'+ $this.html();
        citycode = item.cityCode;
        $scope.showlala = false;
        $(".userdropdown3 dt span").html(text);
        $(".userdropdown3 dd .areabox").hide();
    }
    $scope.subCityId = function(){
        $.ajax({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          url: '/memberSetting/supplementBankOfDeposit.do',
          type: 'POST',
          data: JSON.stringify({ cityId: citycode}),
          dataType: 'json',
          success: function (data) {
            if(data.success){
              $scope.text = text;
              $('.addCityId').hide();
              $timeout(function(){$('.addend').show();},20)
            }else{
              var errorMsg = $filter('身份认证添加城市Id')(data.errorCode);
              $.qTip({
                'type': false,
                'text': errorMsg
              });
            }
          }
        });
    }

  $scope.$on('resourceService.QUERY_POST_MYEVENT', function (event, data, type) {
    switch (type) {
      case "安全认证数据":
        if (data.success) {
          $scope.member = data.map;
          $scope.truenameset = data.map.realFlag;
          $scope.tpwdset = data.map.tpwFlag;
          // 增加地址
          $scope.isConsignee=data.map.isConsignee;//判断是否存在收货地址
          $('.addressBtn').text($scope.isConsignee?'修改' :'增加');//地址btn的内容
          $('.trade-code-btn').text($scope.tpwdset ? '修改' : '设置');
          if ($localStorage.product == 'bindBank') {
            $('.set-bankinfo').addClass('actived-set-wrap').find('.btn a').text('取消绑定');
            $('#set-bankinfo').show();
            $localStorage.product = '';
          } else if ($localStorage.product == 'setTruename') {
            $('.set-truename').addClass('actived-set-wrap').find('.btn a').text('取消认证');
            $('#set-truename').show();
            $localStorage.product = '';
          } else if ($localStorage.product == 'setTradeCode') {
            $('.set-tradecode').addClass('actived-set-wrap').find('.btn a').text('取消设置');
            $('#set-tradecode').show();
            $localStorage.product = '';
          } else if ($localStorage.product == 'forgetTradeCode') {
            $('.set-tradecode').addClass('actived-set-wrap').find('.btn a').text('取消修改');
            $('#set-tradecode').show().find('.set-trade-box').hide();
            $('.set-before').show();
            $localStorage.product = '';
          }
        } else {

        }
        // $scope.isSubmit = false;
        break;

        // 身份认证--银行信息
      case "身份认证":

        if (data.success) {
          switch ($scope.subForm) {
            case 'trueNameForm':
              $.qTip({
                'type': true,
                'text': '认证成功'
              });
               $scope.taskInfo = data.map.cmallResult;
              if(data.map.cmallResult.hasFinishedTasks){
              	$scope.isShow=true;
              }
              $('#set-truename').slideUp(500, function () {
                $scope.$apply(function () {
                  $scope.member.realName = data.map.realName;
                  $scope.member.idCards = data.map.idCards;
                  $scope.member.bankNum = data.map.bankNum;
                  $scope.member.bankCode = data.map.bankCode;
                  $timeout(function(){$('.addend').show();$scope.text = text;},20)
                  $scope.truenameset = true;
                });
                $scope.isSubmit = false;
              });
              //弹框关闭
              $scope.close = function () {
                $scope.isShow = false;
              }
              $scope.tiao = function () {
                $filter('跳转页面')("", "main.home", "main.pointMall"); //跳转到积分兑换
              }
              break;

            case 'bankInfoForm':
              $.qTip({
                'type': true,
                'text': '绑定成功'
              });
              $('#set-bankinfo').slideUp(500, function () {
                $scope.$apply(function () {
                  $scope.member.realName = data.map.realName;
                  $scope.member.idCards = data.map.idCards;
                  $scope.member.bankNum = data.map.bankNum;
                  $scope.member.bankCode = data.map.bankCode;
                  $scope.truenameset = true;
                });
                $scope.isSubmit = false;
              });
              break;
          }
        } else {
          var errorMsg = $filter('身份认证error信息')(data.errorCode);
          $.qTip({
            'type': false,
            'text': errorMsg
          });
          $scope.isSubmit = false;
          if (data.errorCode == '1013') {
            $state.go('main.myAccount.security', null, {
              reload: true
            });
          }
        }
        break;

        // 身份认证-获取短信验证码
        // case "身份认证获取短信验证码":
        // 	if (data.success) {
        // 		$.qTip({
        // 			'type': true,
        // 			'text': '短信发送成功'
        // 		});
        // 	} else {
        // 		var errorMsg = $filter('身份认证获取验证码error信息')(data.errorCode);
        // 		$.qTip({
        // 			'type': false,
        // 			'text': errorMsg
        // 		});
        // 	}
        // 	$scope.isSubmit = false;
        // 	break;


        // 安全认证修改登录密码
      case "安全认证修改登录密码":
        if (data.success) {
          $.qTip({
            'type': true,
            'text': '修改成功'
          });
          $('#set-passwd').slideUp(500, function () {
            $('.reset-passwd-btn').text('修改');
            $('.set-passwd').removeClass('actived-set-wrap');
            $scope.$apply(function () {
              $scope.isSubmit = false;
            });
            $state.go('main.myAccount.security', null, {
              reload: true
            });
          });
        } else {
          var errorMsg = $filter('安全认证修改登录密码error信息')(data.errorCode);
          $.qTip({
            'type': false,
            'text': errorMsg
          });
          $scope.isSubmit = false;
        }
        break;

        // 设置交易密码
      case "设置交易密码":
        if (data.success) {
          $.qTip({
            'type': true,
            'text': '交易密码设置成功'
          });
          $('#set-tradecode').slideUp(500, function () {
            $('.trade-code-btn').text('修改');
            $('.set-tradecode').removeClass('actived-set-wrap');
            $scope.$apply(function () {
              $scope.isSubmit = false;
              $scope.tpwdset = true;
            });
          });
          $state.go('dl');
        } else {
          var errorMsg = $filter('设置交易密码error信息')(data.errorCode);
          $.qTip({
            'type': false,
            'text': errorMsg
          });
          $scope.isSubmit = false;
        }
        break;

        // 修改交易密码
      case "修改交易密码":
        if (data.success) {
          $.qTip({
            'type': true,
            'text': '交易密码修改成功'
          });
          $('#set-tradecode').slideUp(500, function () {
            $('.trade-code-btn').text('修改');
            $('.set-tradecode').removeClass('actived-set-wrap');
            $scope.$apply(function () {
              $scope.isSubmit = false;
            });
            $state.go('main.myAccount.security', null, {
              reload: true
            });
          });
        } else {
          var errorMsg = $filter('修改交易密码error信息')(data.errorCode);
          $.qTip({
            'type': false,
            'text': errorMsg
          });
          $scope.isSubmit = false;
        }
        break;

        // 找回交易密码获取短信验证码
        // case "找回交易密码获取短信验证码":
        // 	if (data.success) {
        // 		$.qTip({
        // 			'type': true,
        // 			'text': '短信发送成功'
        // 		});
        // 	} else {
        // 		var errorMsg = $filter('找回交易密码获取短信验证码error信息')(data.errorCode);
        // 		$.qTip({
        // 			'type': false,
        // 			'text': errorMsg
        // 		});
        // 	}
        // 	$scope.isSubmit = false;
        // 	break;

        // 找回交易密码验证短信验证码
      case "找回交易密码验证短信验证码":
        if (data.success) {
          $('.set-before').slideUp(500, function () {
            $('.set-new').slideDown(500);
            $scope.$apply(function () {
              $scope.isSubmit = false;
            });
          });
        } else {
          $.qTip({
            'type': false,
            'text': '验证码输入不正确'
          });
          $scope.isSubmit = false;
        }
        break;

        // 找回交易密码设置新交易密码
      case "找回交易密码设置新交易密码":
        if (data.success) {
          $('.set-new').slideUp(500, function () {
            $('.change-trade-success').slideDown(500);
            setTimeout(function () {
              $('.change-trade-success').slideUp(500, function () {
                $('.trade-code-btn').text('修改');
                $('.set-tradecode').removeClass('actived-set-wrap').find('.set-mod').hide();
                $('.set-trade-box').css('display', 'block');
                $scope.$apply(function () {
                  $scope.isSubmit = false;
                });
                $state.go('main.myAccount.security', null, {
                  reload: true
                });
              });
            }, 3000);
          });
        } else {
          var errorMsg = $filter('找回交易密码设置新交易密码error信息')(data.errorCode);
          $.qTip({
            'type': false,
            'text': errorMsg
          });
          $scope.isSubmit = false;
        }
        break;

        //添加或者修改收货地址
        case "添加收货地址":
        if(data.success){
            $scope.isShowAddress=false;
             location.reload();
        }else{
           if(data.errorCode == '1001'){
             $scope.errormsg='收货人为空';
           }else if(data.errorCode == 1002){
            $scope.errormsg='收货手机号为空';
           }else if(data.errorCode == 1003){
            $scope.errormsg='所在区域为空';
           }else if(data.errorCode == 1004){
            $scope.errormsg='收货详细地址为空';
           }
           location.reload();
        }
        break;
        //修改收货地址
        case "修改收货地址":
        if(data.success){
            $scope.isShowAddress=false;
            location.reload();
        }else{
           if(data.errorCode == '1001'){
             $scope.errormsg='收货人为空';
           }else if(data.errorCode == 1002){
            $scope.errormsg='收货手机号为空';
           }else if(data.errorCode == 1003){
            $scope.errormsg='所在区域为空';
           }else if(data.errorCode == 1004){
            $scope.errormsg='收货详细地址为空';
           }
           location.reload();
        }
        
    }
  });

  // 显示下拉内容
  var isChange = false;
  $scope.showSetMod = function (event) {
    var $this = $(event.currentTarget),
      $mySetWrap = $this.parents('.set-wrap');

    if (!$mySetWrap.hasClass('actived-set-wrap')) {
      var $activeSetWrap = $('.actived-set-wrap'),
        $activeBtn = $activeSetWrap.find('.btn a');
      if (isChange) {
        return;
      }
      isChange = true;
      $activeSetWrap.find('.set-mod').slideUp(400, function () {
        $activeSetWrap.removeClass('actived-set-wrap');
        $activeBtn.text($activeBtn.text().replace('取消', ''));
      });
      $mySetWrap.find('.set-mod').slideDown(400, function () {
        $mySetWrap.addClass('actived-set-wrap');
        $this.text('取消' + $this.text());
        isChange = false;
      });
    } else {
      if (isChange) {
        return;
      }
      isChange = true;
      $mySetWrap.find('.set-mod').slideUp(400, function () {
        $mySetWrap.removeClass('actived-set-wrap');
        $this.text($this.text().replace('取消', ''));
        isChange = false;
      });
    }
  };
  $scope.submitForm = function (isvalid, event, formname) {

    if (!isvalid || $scope.isSubmit) {
      return;
    } else {
      if ($filter('isRegister')().register) {
        switch (formname) {

          // 身份认证
          case 'trueNameForm':
            $scope.subForm = 'trueNameForm';
            resourceService.queryPost($scope, $filter('交互接口对照表')('身份认证'), {
              realName: $scope.user.truename,
              idCards: $scope.user.idcard,
              bankNum: $scope.user.bankcardno,
              phone: $scope.user.bankphone,
              smsCode: $scope.user.phonecode,
              cityId: citycode,
              parentBankId: bankCode
            }, '身份认证');
            $scope.isSubmit = true;
            break;

            // 银行信息
          case 'bankInfoForm':
            $scope.subForm = 'bankInfoForm';
            resourceService.queryPost($scope, $filter('交互接口对照表')('身份认证'), {
              realName: $scope.bank.truename,
              idCards: $scope.bank.idcard,
              bankNum: $scope.bank.bankcardno,
              phone: $scope.bank.bankphone,
              smsCode: $scope.bank.phonecode,
              cityId: citycode,
              parentBankId: bankCode
            }, '身份认证');
            $scope.isSubmit = true;
            break;

            // 修改登录密码
          case 'passwdFrom':
            resourceService.queryPost($scope, $filter('交互接口对照表')('安全认证修改登录密码'), {
              oldPwd: $scope.passwd.usedpasswd,
              newPwd: $scope.passwd.newpasswd,
              confirmPwd: $scope.passwd.repasswd
            }, '安全认证修改登录密码');
            $scope.isSubmit = true;
            break;

            // 设置交易密码
          case 'tpwdSetForm':
            resourceService.queryPost($scope, $filter('交互接口对照表')('设置交易密码'), {
              tpwd: $scope.trade.tpasswd,
              confirm: $scope.trade.retpasswd
            }, '设置交易密码');
            $scope.isSubmit = true;
            break;

            // 修改交易密码
          case 'changetpwdForm':
            resourceService.queryPost($scope, $filter('交互接口对照表')('修改交易密码'), {
              oldPwd: $scope.trade.usedtpasswd,
              tpwd: $scope.trade.newtpasswd,
              confirmTpwd: $scope.trade.retradepasswd
            }, '修改交易密码');
            $scope.isSubmit = true;
            break;

            // 找回交易密码验证短信验证码
          case 'phonecodeForm':
            resourceService.queryPost($scope, $filter('交互接口对照表')('找回交易密码验证短信验证码'), { code: $scope.trade.phonecode }, '找回交易密码验证短信验证码');
            $scope.isSubmit = true;
            break;

            // 找回交易密码设置新交易密码
          case 'setnewtpwdForm':
            resourceService.queryPost($scope, $filter('交互接口对照表')('找回交易密码设置新交易密码'), {
              tpwd: $scope.trade.newtpwd,
              confirmTpwd: $scope.trade.retpwd,
              code: $scope.trade.phonecode
            }, '找回交易密码设置新交易密码');
            $scope.isSubmit = true;
            break;

          //添加收货地址
          case 'addressForm':
             $scope.address = $('#city')[0].value; 
             //$scope.address=$('#hcity').val()+$('#hproper').val()+$('#harea').val();
            resourceService.queryPost($scope, $filter('交互接口对照表')('添加或者修改收货地址'), {
              consignee: $scope.userName,//收货人
              phone: $scope.addressTelephone,//收货手机号
              region: $scope.address,//所在区域
              nowAddress:$scope.addressXiangxi//收货详细地址
            }, '添加收货地址');
            $scope.isSubmit = true;
            break;

            //修改收货地址
       /*     case 'resiveForm':
           //$scope.address=$('#hcity').val()+$('#hproper').val()+$('#harea').val();
            resourceService.queryPost($scope, $filter('交互接口对照表')('添加或者修改收货地址'), {
              consignee: $scope.userName,//收货人
              phone: $scope.addressTelephone,//收货手机号
              region: $scope.address,//所在区域
              nowAddress:$scope.addressXiangxi//收货详细地址
            }, '修改收货地址');
            $scope.isSubmit = true;
            break;*/
            
        }
      }
    }
  };
  $scope.isGetVoice = false;
  // 身份认证--获取短信验证码
  $scope.bank.times = 59;
  $scope.user.times = 59;
  $scope.trade.times = 59;
  $scope.getPhoneCode = function (bankphone, bankcardno, event, item, isvoice) {
    var $this = $(event.currentTarget),
      type = 1;
    $this.parents('.set-mod').find('.voice-box span').hide();
    if ($this.hasClass('getcode-disabled')) {
      return;
    }
    if (!$filter('isRegister')().register) {
      return;
    }

    $this.addClass('getcode-disabled');

    if (isvoice) {
      type = 2;
    } else {
      type = 1;
    }

    if (bankphone && bankcardno) {

      $.ajax({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        url: $filter('交互接口对照表')('身份认证获取短信验证码'),
        type: 'post',
        data: JSON.stringify({ mobilePhone: bankphone, bankNum: $filter('limitTo')(bankcardno, -4), type: type }),
        dataType: 'json',
        success: function (data) {
          if (data.success) {
            if (isvoice) {
              item.isGetVoice = true;
            } else {
              item.isGetVoice = false;
            }

            // item.times = 59;
            // item.isGetCode = true;
            if (!isvoice || (isvoice && !item.isGetCode)) {
              if (!isvoice) {
                item.isGetCode = true;
              }
              item.timer = $interval(function () {
                if (item.times == 0) {
                  $interval.cancel(item.timer);
                  // if (!isvoice) {
                  item.getCodeText = '获取验证码';
                  // } else {
                  item.isGetVoice = false;
                  // }
                  item.isGetCode = false;
                  item.times = 59;
                  return;
                }
                // if (!isvoice) {
                item.getCodeText = item.times + 's重新获取';
                // }
                item.times--;
              }, 1000);
            }
            $.qTip({
              'type': true,
              'text': '短信发送成功'
            });
          } else {
            var errorMsg = $filter('身份认证获取验证码error信息')(data.errorCode);
            if (data.errorCode == '8888') {
              $this.parents('.set-mod').find('.voice-box span').show();
            } else {
              $.qTip({
                'type': false,
                'text': errorMsg
              });
            }
            $this.removeClass('getcode-disabled');
          }
          // $scope.isSubmit = false;
        }
      });

      // resourceService.queryPost($scope, $filter('交互接口对照表')('身份认证获取短信验证码'),{
      // 	mobilePhone: bankphone,
      // 	bankNum: $filter('limitTo')(bankcardno, -4),
      // 	type: type
      // },'身份认证获取短信验证码');
    } else {
      $.ajax({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        url: $filter('交互接口对照表')('找回交易密码获取短信验证码'),
        type: 'post',
        data: JSON.stringify({ type: type }),
        dataType: 'json',
        success: function (data) {
          if (data.success) {
            if (isvoice) {
              item.isGetVoice = true;
            } else {
              item.isGetVoice = false;
            }

            // item.times = 59;
            // item.isGetCode = true;
            if (!isvoice || (isvoice && !item.isGetCode)) {
              if (!isvoice) {
                item.isGetCode = true;
              }
              item.timer = $interval(function () {
                if (item.times == 0) {
                  $interval.cancel(item.timer);
                  // if (!isvoice) {
                  item.getCodeText = '获取验证码';
                  // } else {
                  item.isGetVoice = false;
                  // }
                  item.isGetCode = false;
                  item.times = 59;
                  return;
                }
                // if (!isvoice) {
                item.getCodeText = item.times + 's重新获取';
                // }
                item.times--;
              }, 1000);
            }
            $.qTip({
              'type': true,
              'text': '短信发送成功'
            });
          } else {
            var errorMsg = $filter('找回交易密码获取短信验证码error信息')(data.errorCode);
            if (data.errorCode == '8888') {
              $this.parents('.set-mod').find('.voice-box span').show();
            } else {
              $.qTip({
                'type': false,
                'text': errorMsg
              });
            }
            $this.removeClass('getcode-disabled');
          }
          // $scope.isSubmit = false;
        }
      });
      // resourceService.queryPost($scope, $filter('交互接口对照表')('找回交易密码获取短信验证码'),{},'找回交易密码获取短信验证码');
    }
  };

  // 忘记交易密码
  $scope.getCodeByMsg = function (event) {
    var $this = $(event.currentTarget);
    $this.parents('.set-trade-box').slideUp(500, function () {
      $('.set-before').slideDown(500);
    });
  };

  //重置存管提现密码
  $scope.resetEscrowPassword = function () {
      var params = {};
      $.ajax({
          url: $filter('交互接口对照表')('重置存管提现密码'),
          method: 'post',
          beforeSend: function(request) {
              request.setRequestHeader("Content-Type", "application/json;charset=UTF8");
              request.setRequestHeader("Accept", "application/json, text/plain, */*");
          },
          dataType: 'json',
          data: JSON.stringify({}),
          async: false,
          success: function (resp) {
              if (!resp.success) {
                  var reason = '请联系客服。';
                  if (resp.hasOwnProperty('errorMsg')) {
                      reason = resp.errorMsg;
                  }
                  var result = {
                      success: false,
                      title: '操作失败',
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
              } else {
                  var $hiddenForm = $('#hiddenFormResetpwd')[0];
                  $('.mchnt_cd',$hiddenForm).val(resp.map.requestData.mchnt_cd);
                  $('.mchnt_txn_ssn',$hiddenForm).val(resp.map.requestData.mchnt_txn_ssn);
                  $('.login_id',$hiddenForm).val(resp.map.requestData.login_id);
                  $('.busi_tp',$hiddenForm).val(resp.map.requestData.busi_tp);
                  $('.signature',$hiddenForm).val(resp.map.requestData.signature);
                  $('.back_url',$hiddenForm).val(resp.map.requestData.back_url);
                  $hiddenForm.action = resp.map.requestUrl;
                  $hiddenForm.method = 'POST';
                  $hiddenForm.submit();
              }
          },
          error: function () {

          }
      });
  };

  if($scope.isConsignee == 0){
  
  }else {
    $('.addressBtn').click(function(){
       $http({
           method: 'POST',
            url: '/memberSetting/getMemberAddress.do',
            headers: {
              contentType: 'application/json;charset=UTF-8',
              // processData: false
            },
            data:{}
    }).success(function(data){
        $scope.userName=data.map.consignee;
        $scope.address=data.map.region;
        region=data.map.region;
        $scope.addressXiangxi=data.map.nowAddress;
        $scope.addressTelephone=data.map.phone;
    })
    })
   
  }

  resourceService.queryPost($scope, $filter('交互接口对照表')('安全认证数据'), {}, '安全认证数据');
// -------------------------收货地址start--------------------
// 三级联动
// 监听
var region;
$("#city").click(function(e){//插件所用点击事件
    SelCity(this,e,$scope,'address');
});
$scope.close=function(){
   $scope.isShowAddress=false;
}
$scope.showAddressBox=function(){
 $scope.isShowAddress=true;
   //$scope.isShow=true;
}

// -------------------------收货地址end--------------------
}])
