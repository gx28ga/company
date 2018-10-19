window.secWave = function ($scope, $rootscope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript) {
  $rootscope.title = '迎春节 7天7夜红包雨';
  $scope.$apply();

  var URL = {
    'isChannel': 'activity/thxg-second/participate.do',
    'redBag': 'activity/thxg-second/cash-package-list.do',
    'activityStatus': 'activity/thxg-second/status.do',
    'ifGain': 'activity/thxg-second/if-gain.do'
  };
  var app = {
    init: function () {
      this.timer1 = null;
      this.timer2 = null;
      this.timer = null;
      this.renderUI();
      this.bindUI();
      this.count = null;
    },
    renderUI: function () { //渲染
      app.logic.activityStatus();
      app.logic.tabInit();
    },
    bindUI: function () {  //元素绑定事件
      $('.activity-box .tab-head .tab').mouseover(app.logic.tab);
      $('.now-gain').bind('click', app.logic.isGoLogin);
      $('.pop-bg .close').bind('click', app.logic.closePop);
      $('.big-surprise-pop .sureBtn').bind('click', app.logic.closeOpenPop);
    },
    packageFn: {},//封装函数
    logic: { //逻辑函数
      loginReturn: function () {
        $filter("跳转页面")('denLu', 'activitys.secWave', 'dl');
      },
      countDown: function (obj, timer, hour) {
        var NowTime = new Date();
        if (NowTime.getHours() < hour) {
          var NowTimeY = NowTime.getFullYear();
          var NowTimeM = NowTime.getMonth() + 1;
          var NowTimeD = NowTime.getDate();
          var end = NowTimeY + "/" + NowTimeM + "/" + NowTimeD + "/" + " " + "0"+hour+":00:00";
          var EndTime = new Date(end);
          var t = EndTime.getTime() - NowTime.getTime();
          var h = 0;
          var m = 0;
          var s = 0;
          if (t > 0) {
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
          }
          if (h < 10) {
            h = '0' + h;
          }
          if (m < 10) {
            m = '0' + m;
          }
          if (s < 10) {
            s = '0' + s;
          }
          $(obj).find('.now-gain').hide().siblings('.count-down').show();
          $(obj).find('.hours').html(h);
          $(obj).find('.minutes').html(m);
          $(obj).find('.seconds').html(s);
        } else {
          clearInterval(timer);
          $(obj).find('.count-down').hide().siblings('.now-gain').show();
          // app.logic.isGain();
        }
      },
      tabInit: function () {
        var date=new Date();
        if(date.getHours() >= 0 && date.getHours()<10){
          $('.now-gain').attr('round', '1');
          $('.activity-box .tab-head .tab-head-eight').css('width', '615px').addClass('eight').siblings('.tab').css('width', '585px').removeClass('ten');
          $('.activity-box .tab-body .tab-body-eight').fadeIn('slow').siblings('.tab').fadeOut('slow');
          app.timer = setInterval(function () {
            app.logic.countDown('.tab-body-eight',app.timer1,8);
          },1000);

        }


        if(date.getHours() >= 10){
          $('.now-gain').attr('round', '2');
          $('.activity-box .tab-head .tab-head-ten').css('width', '615px').addClass('ten').siblings('.tab').css('width', '585px').removeClass('eight');
          $('.activity-box .tab-body .tab-body-ten').siblings('.tab').fadeOut('slow');


          $.ajax({
            url: URL.ifGain,
            type: "post",
            dataType: "json",
            async: false,
            data: JSON.stringify({}),
            contentType: "application/json;charset=UTF-8",
            success: function (data) {
              if (data.success) {
                if (data.map.firstRound == 0) {
                  $('.tab-head-eight .no-gain').show();
                }
              }
            }
          });

          app.timer3 = setInterval(function () {
            app.logic.countDown('.tab-body-ten',app.timer2,8);
          },1000);

        }


      },
      tab: function () {
        clearInterval(app.timer);
        clearInterval(app.timer3);
        app.logic.tab1($(this).index());
      },
      tab1: function (iNow) {
        if (iNow == 0) {
          $('.activity-box .tab-head .tab').eq(iNow).css('width', '615px').addClass('eight').siblings('.tab').css('width', '585px').removeClass('ten');
          $('.now-gain').attr('round', '1');
          $('.tab-head-eight .no-gain').hide();
          clearInterval(app.timer1);
          app.timer2 = setInterval(function(){
            app.logic.countDown('.tab-body-eight',app.timer1,8);
          },1000);

          $.ajax({
            url: URL.ifGain,
            type: "post",
            dataType: "json",
            async: false,
            data: JSON.stringify({}),
            contentType: "application/json;charset=UTF-8",
            success: function (data) {
              if (data.success) {
                if (data.map.secondRound == 0) {
                  $('.tab-head-ten .no-gain').show();
                }
              }
            }
          });
        } else {
          $('.activity-box .tab-head .tab').eq(iNow).css('width', '615px').addClass('ten').siblings('.tab').css('width', '585px').removeClass('eight');
          $('.now-gain').attr('round', '2');
          $('.tab-head-ten .no-gain').hide();

          $.ajax({
            url: URL.ifGain,
            type: "post",
            dataType: "json",
            async: false,
            data: JSON.stringify({}),
            contentType: "application/json;charset=UTF-8",
            success: function (data) {
              if (data.success) {
                if (data.map.firstRound == 0) {
                  $('.tab-head-eight .no-gain').show();
                }
              }
            }
          });
          // app.logic.ifCountDown('.tab-body-eight', 8);
          clearInterval(app.timer2);
          // app.logic.ifCountDown('.tab-body-ten', 10);
          app.timer1 = setInterval(function () {
            app.logic.countDown('.tab-body-ten',app.timer2,10);
          },1000)
        }
        $('.activity-box .tab-body .tab').eq(iNow).fadeIn('slow').siblings('.tab').fadeOut('slow');
      },
      closeOpenPop: function () {
        app.logic.closePopArgs('.big-surprise-pop');
        var obj = $('.now-gain').parent();
        app.logic.openPop('.redbag-list-popbg');
          app.logic.isGain();

      },
      login: function () {
        if (!$filter('isRegister')().register) {
          $scope.login = 0;
        } else {
          $scope.login = 1;
          app.logic.channel();
        }
        app.logic.isGain();
      },
      isGoLogin: function () {
        var _self = $(this);
        if ($scope.login == 0) {
          app.logic.loginReturn();
        } else {
          if (_self.hasClass('already')) {
            return;
          }
          app.count = $('.now-gain').attr('round');
          var num=0;
          $.ajax({
            url: URL.redBag,
            type: "post",
            dataType: "json",
            async: false,
            data: JSON.stringify({'round': parseInt(app.count)}),
            contentType: "application/json;charset=UTF-8",
            success: function (data) {
              if (data.success) {
                num=parseInt(data.map.amount+288);
                $('.red-bag-last').html(data.map.amount);
                $('.big-surprise-pop .info').html(num+'元');
              }
            }
          });
          app.logic.openPop('.big-surprise-pop');
          app.logic.isGain();

        }
      },
      isGain:function(){
        if ($('.now-gain').attr('round') == 1) {
          $('.tip2').html('使用条件：≥90天产品 有效期 1天');
        }
        if ($('.now-gain').attr('round') == 2) {
          $('.tip2').html('使用条件：≥150天产品 有效期 1天');
        }
        $.ajax({
          url: URL.ifGain,
          type: "post",
          dataType: "json",
          async: false,
          data: JSON.stringify({}),
          contentType: "application/json;charset=UTF-8",
          success: function (data) {
            if (data.success) {
                if (data.map.firstRound == 1) {
                  $('.tab-body-eight .now-gain').addClass('already').html('您今日已领取').next().show();

                  $('.tab-head-eight .no-gain').hide();
                }
                if (data.map.secondRound == 1) {
                  $('.tab-body-ten .now-gain').addClass('already').html('您今日已领取').next().show();

                  $('.tab-head-ten .no-gain').hide();
                }
                return;
            }
          }
        });
      },
      openPop: function (obj) {
        $(obj).show().find('.pop').removeClass('close-pop');
      }
      ,
      channel: function () {
        $.ajax({
          url: URL.isChannel,
          type: "post",
          dataType: "json",
          async: false,
          data: JSON.stringify({}),
          contentType: "application/json;charset=UTF-8",
          success: function (data) {
              if (data.errorCode=='1010') {
                if (!data.flag) {
                  app.logic.openPop('.channel-popbg');
                  return;
                }
            }
          }
        });
      }
      ,
      closePop: function () {
        var _self = $(this);
        _self.parents('.pop').addClass('close-pop');
        setTimeout(function () {
          _self.parents('.pop-bg').hide();
        }, 500)
      },
      closePopArgs: function (obj) {
        $(obj).find('.pop').addClass('close-pop');
        setTimeout(function () {
          $(obj).hide();
        }, 500)
      },
      activityStatus: function () {
        $.ajax({
          url: URL.activityStatus,
          type: "post",
          dataType: "json",
          async: false,
          data: JSON.stringify({}),
          contentType: "application/json;charset=UTF-8",
          success: function (data) {
            if (data.success) {
              var endTime = data.map.endTime;
              var startTime = data.map.startTime;
              var date = Date.parse(new Date());
              if (date > startTime && date < endTime) { //活动进行中
                app.logic.login();
              } else if (date < startTime) {   //活动未开始
                app.logic.openPop('.noready-popbg');
              } else if (date > endTime) {   //活动已结束
                app.logic.openPop('.over-popbg');

              }

            }
          }
        });
      }
    }
  };
  app.init();


  /*$.ajax({
   url: $filter('交互接口对照表')('prizeList'),
   type: "post",
   dataType: "json",
   async:false,
   contentType: "application/json;charset=UTF-8",
   data: JSON.stringify({"channel": "pc"}),
   success: function (e) {
   console.log(e);
   }
   });*/
}