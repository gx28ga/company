window.shakeCoinsTree = function ($scope, $rootscope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript) {
  $rootscope.title = '幸运摇钱树 每天摇一摇 大奖往下掉';
  $scope.$apply();
  $scope.pageCurrent = [1, 2, 3];
  $scope.aaaaaaa = 1;
  $scope.userError = false;
  $scope.phoneError = false;
  $scope.addressError = false;

  var app = {
        init: function () {
          this.isZuanshi = true;
          this.isJiangPin = true;
          this.isDuiHuan = true;
          this.id = null;
          this.imgs = null;
          this.renderUI();
          this.bindUI();
        },
        renderUI: function () { //渲染
          app.logic.activityStatus();
          // app.logic.login();


        },
        bindUI: function () {  //元素绑定事件
          $('.exchange-box .tab-thead .tab').hover(app.logic.tab);
          $('.shake-btn').bind('click', app.logic.shake);
          $('.pop-bg .close').bind('click', app.logic.closePop);
          $('.pop-bg .sureBtn').bind('click', app.logic.closePop);
          $('.pop-bg .again').bind('click', app.logic.closePop);
          $('#TAB_BD_LIST .exchange-btn').bind('click', app.logic.exchangePrize);
          $('.nextBtn').bind('click', app.logic.closeOpenPop);
          $('#send').bind('click', app.logic.form);
          $(document).bind('mouseenter', app.logic.reload);
          $('.exchange-record').bind('click', app.logic.exchangeRecord);
          $('.my-prizes').bind('click', app.logic.myprize);
          $('.details').bind('click', app.logic.diamondsDetails);
          $('.login').bind('click', app.logic.loginReturn);
          $('.dlBtn').bind('click', app.logic.loginReturn);
          $('.contact').bind('click', app.logic.closeOpenPop2);
        },
        packageFn: {
          ifLogin: function () {
            if ($scope.login == 0) {
              app.logic.openPop('.login-popbg');
              return false;
            } else if ($scope.login == 1) {
              return true;
            }
          }
        },//封装函数
        logic: { //逻辑函数
          exchangeRecord: function () {
            var ifLogin = app.packageFn.ifLogin();
            if (ifLogin) {
              app.logic.openPop('.record-details');
                $.ajax({
                  url: $filter('交互接口对照表')('diamondDetails'),
                  type: "post",
                  dataType: "json",
                  async: false,
                  contentType: "application/json;charset=UTF-8",
                  data: JSON.stringify({"pageOn": 1, "pageSize": 5, "incomeOrExpenses": "Expenses"}),
                  success: function (data) {
                    if (data.success) {
                      if (data.map.page.rows == '') {
                        $('.notip').show();
                        $('.exchange2-pop .total-pages').hide();
                        return;
                      }
                      $('.notip').hide();
                      $.ajax({
                        url: $filter('交互接口对照表')('diamondDetails'),
                        type: "post",
                        dataType: "json",
                        async: false,
                        contentType: "application/json;charset=UTF-8",
                        data: JSON.stringify({"pageOn": 1, "pageSize": 5, "incomeOrExpenses": "Expenses"}),
                        success: function (data) {
                          if (data.success) {
                            $.ajax({
                              url: $filter('交互接口对照表')('diamondDetails'),
                              type: "post",
                              dataType: "json",
                              async: false,
                              contentType: "application/json;charset=UTF-8",
                              data: JSON.stringify({"pageOn": 1, "pageSize": 5, "incomeOrExpenses": "Expenses"}),
                              success: function (data) {
                                var page = data.map.page;
                                var EXCHANGE_LIST = template.render("EXCHANGE_LIST_WP", {data: page.rows});
                                $('.exchange2-pop .total-pages').html('共' + page.totalPage + '页');
                                $('#EXCHANGE_LIST').html(EXCHANGE_LIST);
                                if (data.success) {
                                  $('#EXCHANGE_LIST').next().html('');
                                  $(".pages13").paging({
                                    total: page.totalPage,
                                    cormer: 2,
                                    showPage: 3,
                                    currentBgColor: "#c77b5f",
                                    currentFontColor: "#360000",
                                    centerBorder: "1px solid #c77b5f",
                                    otherBorder: "1px solid #c77b5f",
                                    centerBgColor: "",
                                    beforeBtnString: "上一页",
                                    nextBtnString: "下一页",
                                    firstBtnString: "",   //首页按钮内显示的内容
                                    lastBtnString: "",   //尾页按钮内显示的内容
                                    gapWidth: 3,
                                    otherFontColor: "#000",   //两边字体颜色
                                    centerFontHoverColor: "red",  //中间鼠标悬浮的字体颜色
                                    otherFontHoverColor: "red",  //两边鼠标悬浮的字体颜色
                                    otherBgColor: "rgb(199, 123, 95);",    //两边按钮的底色
                                    otherHoverBgColor: "",     //两边鼠标悬浮的背景颜色
                                    idParameter: "pageOn",
                                    url: $filter('交互接口对照表')('diamondDetails'),
                                    ajaxData: {"pageSize": 5, "incomeOrExpenses": "Expenses"},
                                    dataOperate: function (e) {
                                      var EXCHANGE_LIST = template.render("EXCHANGE_LIST_WP", {data: e.map.page.rows});
                                      $('#EXCHANGE_LIST').html(EXCHANGE_LIST);
                                    }
                                  });
                                }
                              }
                            });
                          }
                        }
                      });
                    }
                  }
                });

            }
          },
          myprize: function () {
            var ifLogin = app.packageFn.ifLogin();
            if (ifLogin) {
              app.logic.openPop('.myprize');
              $.ajax({
                url: $filter('交互接口对照表')('diamondDetails'),
                type: "post",
                dataType: "json",
                async: false,
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({"pageOn": 1, "pageSize": 5, "incomeOrExpenses": "gotPrize"}),
                success: function (data) {
                  if (data.success) {
                    if (data.map.page.rows == '') {
                      $('.notip').show();
                      $('.myprize-pop .total-pages').hide();
                      return;
                    }
                    $('.notip').hide();
                    $.ajax({
                      url: $filter('交互接口对照表')('diamondDetails'),
                      type: "post",
                      dataType: "json",
                      async: false,
                      contentType: "application/json;charset=UTF-8",
                      data: JSON.stringify({"pageOn": 1, "pageSize": 5, "incomeOrExpenses": "gotPrize"}),
                      success: function (data) {
                        var page = data.map.page;
                        var MYPRIZE_LIST = template.render("MYPRIZE_LIST_WP", {data: page.rows});
                        $('.myprize-pop .total-pages').html('共' + page.totalPage + '页');
                        $('#MYPRIZE_LIST').html(MYPRIZE_LIST);
                        if (data.success) {
                          $('#MYPRIZE_LIST').next().html('');
                          $(".pages12").paging({
                            total: page.totalPage,
                            cormer: 2,
                            showPage: 3,
                            currentBgColor: "#c77b5f",
                            currentFontColor: "#360000",
                            centerBorder: "1px solid #c77b5f",
                            otherBorder: "1px solid #c77b5f",
                            centerBgColor: "",
                            beforeBtnString: "上一页",
                            nextBtnString: "下一页",
                            firstBtnString: "",   //首页按钮内显示的内容
                            lastBtnString: "",   //尾页按钮内显示的内容
                            gapWidth: 3,
                            otherFontColor: "#000",   //两边字体颜色
                            centerFontHoverColor: "red",  //中间鼠标悬浮的字体颜色
                            otherFontHoverColor: "red",  //两边鼠标悬浮的字体颜色
                            otherBgColor: "rgb(199, 123, 95);",    //两边按钮的底色
                            otherHoverBgColor: "",     //两边鼠标悬浮的背景颜色
                            idParameter: "pageOn",
                            url: $filter('交互接口对照表')('diamondDetails'),
                            ajaxData: {"pageSize": 5, "incomeOrExpenses": "gotPrize"},
                            dataOperate: function (e) {
                              var MYPRIZE_LIST = template.render("MYPRIZE_LIST_WP", {data: e.map.page.rows});
                              $('#MYPRIZE_LIST').html(MYPRIZE_LIST);
                            }
                          });
                        }
                      }
                    });
                  }
                }
              });

            }
          },
          loginReturn: function () {
            $filter("跳转页面")('denLu', 'online-activity.shakeCoinsTree', 'dl');
          },
          // 钻石明细
          diamondsDetails: function () {
            var ifLogin = app.packageFn.ifLogin();
            if (ifLogin) {
              app.logic.openPop('.diamonds');
              $.ajax({
                url: $filter('交互接口对照表')('remainDiamonds'),
                type: "post",
                dataType: "json",
                async: false,
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({}),
                success: function (data) {
                  if (data.success) {
                    $('.diamonds-count').html('我的钻石余量:' + data.map.goldCoinCount + '个');
                  }
                }
              });
                $.ajax({
                  url: $filter('交互接口对照表')('diamondDetails'),
                  type: "post",
                  dataType: "json",
                  async: false,
                  contentType: "application/json;charset=UTF-8",
                  data: JSON.stringify({"pageOn": 1, "pageSize": 5, "incomeOrExpenses": ""}),
                  success: function (data) {
                    var page = data.map.page;
                    var DIAMONDS_LIST = template.render("DIAMONDS_LIST_WP", {data: page.rows});
                    $('.diamodsdetails-pop .total-pages').html('共' + page.totalPage + '页');
                    $('#DIAMONDS_LIST').html(DIAMONDS_LIST);
                    if (data.success) {
                      $('#DIAMONDS_LIST').next().html('');
                      if (data.map.page.rows == '') {
                        $('.notip').show();
                        $('.diamodsdetails-pop .total-pages').hide();
                        return;
                      }
                      $('.notip').hide();
                      $(".pages11").paging({
                        total: page.totalPage,
                        cormer: 2,
                        showPage: 3,
                        currentBgColor: "#c77b5f",
                        currentFontColor: "#360000",
                        centerBorder: "1px solid #c77b5f",
                        otherBorder: "1px solid #c77b5f",
                        centerBgColor: "",
                        beforeBtnString: "上一页",
                        nextBtnString: "下一页",
                        firstBtnString: "",   //首页按钮内显示的内容
                        lastBtnString: "",   //尾页按钮内显示的内容
                        gapWidth: 3,
                        otherFontColor: "#000",   //两边字体颜色
                        centerFontHoverColor: "red",  //中间鼠标悬浮的字体颜色
                        otherFontHoverColor: "red",  //两边鼠标悬浮的字体颜色
                        otherBgColor: "rgb(199, 123, 95);",    //两边按钮的底色
                        otherHoverBgColor: "",     //两边鼠标悬浮的背景颜色
                        idParameter: "pageOn",
                        url: $filter('交互接口对照表')('diamondDetails'),
                        ajaxData: {"pageSize": 5, "incomeOrExpenses": ""},
                        dataOperate: function (e) {
                          var DIAMONDS_LIST = template.render("DIAMONDS_LIST_WP", {data: e.map.page.rows});
                          $('#DIAMONDS_LIST').html(DIAMONDS_LIST);
                        }
                      });
                    }
                  }
                });
            }
          },
          tab: function () {
            app.logic.tab1($(this).index());
          },
          tab1: function (iNow) {
            $('.exchange-box .tab-thead .tab').eq(iNow).addClass('active').siblings('.tab').removeClass('active');
            $('.exchange-box .tab-body .tab').eq(iNow).addClass('openTab').show().siblings('.tab').hide();
          },
          shake: function () { //摇一摇
            var ifLogin = app.packageFn.ifLogin();
            if (ifLogin) {
              //摇一摇动
              $.ajax({
                url: $filter('交互接口对照表')('lotteryDraw'),
                type: "post",
                dataType: "json",
                async: false,
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify({"channel": "pc"}),
                success: function (data) {
                  if (data.success) {
                    var prizeType = data.map.raffleResult.icons['0'].type;
                    if (prizeType == 2) {// 奖品是加息券，红包
                      $('.congradutions .gain').html('摇一摇获得' + data.map.raffleResult.icons['0'].amount + '元' + data.map.raffleResult.icons['0'].comments);
                      $('.prize-pop .noplay').show();
                      $('.congradutions .tips').html(data.map.raffleResult.icons['0'].comments + '已发放到你的账户，请注意使用');
                    } else if (prizeType == 3) {
                      $('.congradutions .gain').html('摇一摇获得' + data.map.raffleResult.icons['0'].amount + '%' + data.map.raffleResult.icons['0'].comments);
                      $('.prize-pop .noplay').show();
                      $('.congradutions .tips').html(data.map.raffleResult.icons['0'].comments + '已发放到你的账户，请注意使用');
                    } else if (prizeType == 1) { //奖品是钻石
                      $('.congradutions .gain').html('摇一摇获得' + data.map.raffleResult.icons['0'].amount + '个' + data.map.raffleResult.icons['0'].comments);
                      $('.prize-pop .noplay').hide();
                      $('.prize-pop .again').addClass('zuan');
                      $('.congradutions .tips').html('*' + data.map.raffleResult.icons['0'].comments + '可到活动页兑换专区兑换超值大礼，请注意兑换截至时间');
                    }
                    $('.congradutions img').attr('src', data.map.raffleResult.icons['0'].imagePath);
                    $('.tree').addClass('animated tada');
                    var audio = document.createElement("audio");
                    audio.src = "/activity/web/shakeCoinsTree/5292.mp3";
                    audio.play();
                    setTimeout(function () {
                      $('.tree').removeClass('animated tada');
                      app.logic.openPop('.congradutions');
                    }, 2500)
                    $.ajax({
                      url: $filter('交互接口对照表')('prizeList'),
                      type: "post",
                      dataType: "json",
                      contentType: "application/json;charset=UTF-8",
                      data: JSON.stringify({"channel": "pc"}),
                      success: function (data) {
                        console.log(data)
                        if (data.success) {
                          $('.my-diamonds .numbers').html(data.map.goldCoinCount);
                          $('.remain-chance .counts').html(data.map.raffleChance);
                        }
                      }
                    });
                  } else if (data.errorCode == '9998' || data.errorCode == '9997') {
                    app.logic.openPop('.chance-pop');
                    return;
                  }
                }
              });

            }
          },
          form: function () {
            var input = $('#form').find('input[type="text"]');
            var val1 = input.eq(0).val().trim();
            var val2 = input.eq(1).val().trim();
            var val3 = input.eq(2).val().trim();
            var _self = $(this);
            app.id = _self.attr('prizeid');
            if (val1.length < 2) {
              $('#username').next('span').show();
              return;
            }
            $('#username').next('span').hide();
            if (!(/^1[34578]\d{9}$/.test(val2))) {
              $('#telephone').next('span').show();
              return;
            }
            $('#telephone').next('span').hide();
            if (app.id != 1968) {
              console.log(app.id);
              if (val3.length < 5) {
                $('#address').next('span').show();
                return;
              }
              $('#address').next('span').hide();
            }

            $.ajax({
              url: $filter('交互接口对照表')('address'),
              type: "post",
              dataType: "json",
              async: false,
              contentType: "application/json;charset=UTF-8",
              data: JSON.stringify({"name": val1, "phoneNumber": val2, "address": val3}),
              success: function (data) {
                if (data.success) {
                  $('.alert').show();
                  setTimeout(function () {
                    $('.alert').hide();
                    setTimeout(function () {
                      app.logic.closePopArgs('.address-pop');
                    }, 500)
                  }, 1000);
                }
              }
            });
          },
          congradutions: function () {
            $.ajax({
              url: $filter('交互接口对照表')('lotteryDraw'),
              type: "post",
              dataType: "json",
              async: false,
              contentType: "application/json;charset=UTF-8",
              data: JSON.stringify({"channel": "pc"}),
              success: function (data) {
                if (data.success) {
                  var prizeType = data.map.raffleResult.icons['0'].type;
                  if (prizeType == 2) {// 奖品是加息券，红包
                    $('.congradutions .gain').html('摇一摇获得' + data.map.raffleResult.icons['0'].amount + '元' + data.map.raffleResult.icons['0'].comments);
                    $('.prize-pop .noplay').show();
                    $('.congradutions .tips').html(data.map.raffleResult.icons['0'].comments + '已发放到你的账户，请注意使用');
                  } else if (prizeType == 3) {
                    $('.congradutions .gain').html('摇一摇获得' + data.map.raffleResult.icons['0'].amount + '%' + data.map.raffleResult.icons['0'].comments);
                    $('.prize-pop .noplay').show();
                    $('.congradutions .tips').html(data.map.raffleResult.icons['0'].comments + '已发放到你的账户，请注意使用');
                  } else if (prizeType == 1) { //奖品是钻石
                    $('.congradutions .gain').html('摇一摇获得' + data.map.raffleResult.icons['0'].amount + '个' + data.map.raffleResult.icons['0'].comments);
                    $('.prize-pop .noplay').hide();
                    $('.prize-pop .again').addClass('zuan');
                    $('.congradutions .tips').html('*' + data.map.raffleResult.icons['0'].comments + '可到活动页兑换专区兑换超值大礼，请注意兑换截至时间');
                  }
                  $('.congradutions img').attr('src', data.map.raffleResult.icons['0'].imagePath);
                  app.logic.openPop('.congradutions');
                  $.ajax({
                    url: $filter('交互接口对照表')('prizeList'),
                    type: "post",
                    dataType: "json",
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify({"channel": "pc"}),
                    success: function (data) {
                      if (data.success) {
                        $('.my-diamonds .numbers').html(data.map.goldCoinCount);
                        $('.remain-chance .counts').html(data.map.raffleChance);
                      }
                    }
                  });
                } else if (data.errorCode == '9998' || data.errorCode == '9997') {
                  app.logic.openPop('.chance-pop');
                }
              }
            });
          },
          closeOpenPop2: function () {
            app.logic.closePop('.check-popbg');
            setTimeout(function () {
              app.logic.openPop('.address-pop');
            }, 1000)
          },
          closeOpenPop: function () {
            app.logic.closePop('.exchange-popbg');
            var _self = $(this);
            $.ajax({
              url: $filter('交互接口对照表')('exchange'),
              type: "post",
              dataType: "json",
              async: false,
              contentType: "application/json;charset=UTF-8",
              data: JSON.stringify({"prizeId": _self.attr('id')}),
              success: function (data) {
                if (data.success) {
                  var imgSrc = data.map.popImagePath;
                  $('.check-pop .tip1').html('兑换获得' + _self.attr('name'));
                  $('.check-pop img').attr('src', imgSrc);
                  $('#send').attr('prizeid', _self.attr('id'));
                  setTimeout(app.logic.openPop('.check-popbg'), 1000);
                  $.ajax({
                    url: $filter('交互接口对照表')('prizeList'),
                    type: "post",
                    dataType: "json",
                    contentType: "application/json;charset=UTF-8",
                    data: JSON.stringify({"channel": "pc"}),
                    success: function (data) {
                      if (data.success) {
                        $('.my-diamonds .numbers').html(data.map.goldCoinCount);
                      }
                    }
                  });
                } else if (data.errorCode == '9997') {
                  app.logic.openPop('.addPrize');
                  return;
                } else if (data.errorCode == '9996') {
                  app.logic.openPop('.nodiamonds');
                  return;
                }
              }
            })
          },
          exchangePrize: function () {
            if ($scope.login == 0) {
              app.logic.openPop('.login-popbg');
              return;
            }
            var _self = $(this);
            var _data = JSON.parse(_self.prev('input').val());
            $('.exchange-pop .no-counts').html(_data.name);
            $('.exchange-pop .cost').html('需消耗' + _data.nums + '个钻石');
            $('.exchange-pop .nextBtn').attr({'name': _data.name, 'imgs': _data.imgs, 'id': _data.id});

            // $.ajax({
            //   url: $filter('交互接口对照表')('exchange'),
            //   type: "post",
            //   dataType: "json",
            //   async: false,
            //   contentType: "application/json;charset=UTF-8",
            //   data: JSON.stringify({"prizeId": app.id}),
            //   success: function (data) {
            //     if (data.success) {
            //       $.ajax({
            //         url: $filter('交互接口对照表')('prizeList'),
            //         type: "post",
            //         dataType: "json",
            //         contentType: "application/json;charset=UTF-8",
            //         data: JSON.stringify({"channel": "pc"}),
            //         success: function (data) {
            //           console.log(data)
            //           if (data.success) {
            //             $('.my-diamonds .numbers').html(data.map.goldCoinCount);
            //           }
            //         }
            //       });
            //
            //     } else if (data.errorCode == '9997') {
            //       app.logic.openPop('.addPrize');
            //     } else if (data.errorCode == '9996') {
            //       app.logic.openPop('.nodiamonds');
            //     }
            //   }
            // })
            app.logic.openPop('.exchange-popbg');

          },
          login: function () {  //登录
            if (!$filter('isRegister')().register) {
              $scope.login = 0;
              $('.remain-chance').find('.counts').hide().next().show();
              $('.my-diamonds').children().hide();
              $('.my-diamonds').find('.login').show();
            } else {
              $scope.login = 1;
              app.logic.channel();
            }

            $.ajax({
              url: $filter('交互接口对照表')('prizeList'),
              type: "post",
              dataType: "json",
              async: false,
              contentType: "application/json;charset=UTF-8",
              data: JSON.stringify({"channel": "pc"}),
              success: function (data) {
                if (data.success) {
                  var TAB_BD_LIST = template.render("TAB_BD_LIST_WP", {data: data.map.prizes});
                  $('#TAB_BD_LIST').html(TAB_BD_LIST);
                }

              }
            });
          }
          ,
          openPop: function (obj) {
            $(obj).show().find('.pop').removeClass('close-pop');
          }
          ,
          channel: function () {
            $.ajax({
              url: $filter('交互接口对照表')('isChannel'),
              type: "post",
              dataType: "json",
              async: false,
              data: JSON.stringify({}),
              contentType: "application/json;charset=UTF-8",
              success: function (data) {
                if (!data.flag) {
                  app.logic.openPop('.channel-pop');
                }
                $.ajax({
                  url: $filter('交互接口对照表')('prizeList'),
                  type: "post",
                  dataType: "json",
                  async: false,
                  contentType: "application/json;charset=UTF-8",
                  data: JSON.stringify({"channel": "pc"}),
                  success: function (data) {
                    if (data.success) {
                      $('.my-diamonds .numbers').html(data.map.goldCoinCount);
                      $('.remain-chance .counts').html(data.map.raffleChance);
                      var TAB_BD_LIST = template.render("TAB_BD_LIST_WP", {data: data.map.prizes});
                      $('#TAB_BD_LIST').html(TAB_BD_LIST);
                    }

                  }
                });
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
              url: $filter('交互接口对照表')('activityStatus'),
              type: "post",
              dataType: "json",
              async: false,
              data: JSON.stringify({}),
              contentType: "application/json;charset=UTF-8",
              success: function (data) {
                if (data.success) {
                  var endTime = data.map.endTime;
                  var startTime = data.map.startTime;
                  var exchangeEndTime = data.map.exchangeExpireTime;
                  var date = Date.parse(new Date());
                  if (date > startTime && date < endTime) { //活动进行中
                    app.logic.login();  //判断登录
                  } else if (date < startTime) {   //活动未开始
                    app.logic.openPop('.noready');
                  } else if (date > endTime && date < exchangeEndTime) {//活动已结束可以兑奖

                    $('h2').html('破十亿第二波活动正在进行中，<a href="/online-activity/secWave">去看看</a>');
                    $('.shake-btn').css('background', 'url(../images/over-btn.png) center 0 no-repeat');
                    $('.invest').html('第二波活动').attr({href: '/online-activity/secWave', target: '_self'});      //去第二波活动的连接;
                    $('.chance-box').find('.remain-chance').hide().siblings('i').hide();
                    $('.chance-box').find('div').show();
                    // $('.my-diamonds').html("我的钻石" + '<span class="numbers" style="margin-left:30px;">请</span>' + '<a class="details" href="/main/dl" style="margin-left:0;"target="_self" >登录</a>');
                    app.logic.login();
                  } else if (date > exchangeEndTime) {   //兑换已结束
                    app.logic.openPop('.gameover');
                    $('.gameover .close').attr('href', '/main/home');

                  }

                }
              }
            });
          },
          reload: function () {
            $.ajax({
              url: $filter('交互接口对照表')('prizeList'),
              type: "post",
              dataType: "json",
              async: false,
              contentType: "application/json;charset=UTF-8",
              data: JSON.stringify({"channel": "pc"}),
              success: function (data) {
                if (data.success) {
                  $('.remain-chance .counts').html(data.map.raffleChance);
                }
              }
            });
          }
        }
      }
      ;
  app.init();
  return;


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
;