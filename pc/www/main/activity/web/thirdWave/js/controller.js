window.thirdWave = function ($scope, $rootscope, $filter, resourceService, $timeout, $resource, $location, $localStorage, getScript) {
  $rootscope.title = '庆春节 迎新年 天天福利不停歇';
  $scope.prizeList=null;
  $scope.dayRank=null;
  $scope.$apply();
  thisIndex = 0;
  $scope.number=0;
  var URL = {
    'activityStatus': 'activity/thxg-third/status.do',
    'isChannel': 'activity/thxg-third/participate.do',
    'userInvestInfoAndRankList': 'activity/thxg-third/invest-rank.do',
    'prizeListDay': 'activity/thxg-third/rank-his.do'
  };
  getScript(['/activity/web/thirdWave/js/jquery.paging.js','/activity/web/thirdWave/js/template.js'],function(){
    thisIndex++;
    if(thisIndex==2){
      var web = {
        init: function () {
          this.renderUI();
          this.bindUI();
          this.clickTag=0;
          this.dateY=0;
          this.dateM=0;
          this.dateD=0;
          this.index=0;
          this.page=0;
        },
        renderUI: function () {
          web.logic.status();
          web.logic.updateTime();
        },
        bindUI: function () {
          $('.pop-bg .close').bind('click', web.logic.closePop);
          $('.login-btn').bind('click',web.logic.loginReturn);
          $('.invest-btn').bind('click',web.logic.reloadUserInfo);
          $('.prizelist-btn').bind('click',function () {
            web.logic.openPop('.prize-popbg');
            setTimeout(function () {
              web.logic.prizeListDay();
            },1000)
          });
          $('.rule-btn').bind('click',web.logic.hash);
          // $('.page-box .next').bind('click',function () {
          //  web.dateD++;
          //  console.log(web.dateD);
          //  web.logic.prizeListDay();
          // });
          $('.update').bind('click',function () {
            if(web.clickTag==0){
              var num=3;
              $('.update').addClass('active').html('正在刷新'+num+'..');//点击完的样式
              var timer=setInterval(function(){
                num--;
                web.clickTag=1;
                // console.log(web.clickTag);
                $('.update').html('正在刷新'+num+'..');
                if(num==0){
                  clearInterval(timer);
                  web.clickTag=0;
                  $('.update').removeClass('active').html('刷新');
                  web.logic.userInvestInfoAndRankList();
                  web.logic.updateTime();
                }
              },1000)
            }
          });
        },
        packageFn: function () {

        },
        logic: {
          loginReturn:function () {
            $filter("跳转页面")('denLu', 'activitys.thirdWave', 'dl');
          },
          updateTime:function () {
            var date=new Date();

            var dateY = date.getFullYear();
            var dateM = date.getMonth() + 1;
            var dateD = date.getDate();
            var dateH=date.getHours();
            var dateMin=date.getMinutes();
            var dateS=date.getSeconds();

            if (dateM < 10) {
              dateM = '0' + dateM;
            }
            if (dateD < 10) {
              dateD = '0' + dateD;
            }
            if (dateH < 10) {
              dateH = '0' + dateH;
            }
            if (dateMin < 10) {
              dateMin = '0' + dateMin;
            }
            if (dateS < 10) {
              dateS = '0' + dateS;
            }
            var date2=dateY+'-'+dateM+'-'+dateD+'&nbsp'+dateH+':'+dateMin+':'+dateS;
            $('.ranking-box .list-box p').html('更新时间:'+date2);


          },
          prizeListDay:function () {
            var date=new Date();
            web.dateY = date.getFullYear();
            web.dateM = date.getMonth() + 1;
            web.dateD = date.getDate()-1;
            $('.page-box .next').unbind('click').click(function () {
              $('.prize-pop .nodata').hide().prev().show();

              $('.page-box .prev').css('cursor','pointer');
              web.dateD ++;
              if(web.dateM.length<1){
                // console.log( web.dateM);
                web.dateM='0'+ web.dateM;
              }
              if(web.dateD<10){
                web.dateD='0'+ web.dateD;
              }
              var nowTime = web.dateY + "-" + web.dateM + "-" + web.dateD;
              // console.log(nowTime);
              $.ajax({
                url: URL.prizeListDay,
                type: "post",
                dataType: "json",
                async: false,
                data: JSON.stringify({}),
                contentType: "application/json;charset=UTF-8",
                success: function (data) {
                  if (data.success) {
                    for(var i=0;i<data.map.rankList.length;i++){
                      // console.log(data.map.rankList[i].date);
                      data.map.rankList[i].index=i;
                      if(nowTime==data.map.rankList[i].date){
                        var rankDate=data.map.rankList[i].date;
                        web.index=parseInt(i+1);
                        $scope.prizeList=data.map.rankList[i].thxgThird;
                        $scope.$apply();
                      }
                    }
                    if($scope.prizeList.length==0){
                      $('.prize-pop .list-box').hide().next().show();
                    }




                    $('.prize-pop h4').html(rankDate);


                    // var PRIZE_BD_LIST = template.render("PRIZE_BD_LIST_WP", {data: prizeList});
                    // $('#PRIZE_BD_LIST').html(PRIZE_BD_LIST);


                    $('.total-page').html('共'+data.map.rankList.length+'页');
                    $('.page-box .page').html(web.index);
                    if(web.index==data.map.rankList.length){
                        $('.page-box .next').css('cursor','no-drop');
                    }


                  }
                }
              });
            });

            $('.page-box .prev').unbind('click').click(function () {
              // console.log('点了上一页');
              $('.prize-pop .nodata').show().prev().show();
              $('.page-box .next').css('cursor','pointer');
              console.log(web.dateD );
              web.dateD =web.dateD-1;
              // console.log()
              if(web.dateM.length<1){
                web.dateM='0'+ web.dateM;
              }
              if(web.dateD<10){
                web.dateD='0'+ web.dateD;
              }
              var nowTime = web.dateY + "-" + web.dateM + "-" + web.dateD;
              // console.log(nowTime);
              $.ajax({
                url: URL.prizeListDay,
                type: "post",
                dataType: "json",
                async: false,
                data: JSON.stringify({}),
                contentType: "application/json;charset=UTF-8",
                success: function (data) {
                  if (data.success) {
                    for(var i=0;i<data.map.rankList.length;i++){
                      // console.log(data.map.rankList[i].date);
                      data.map.rankList[i].index=i;
                      if(nowTime==data.map.rankList[i].date){
                        var rankDate=data.map.rankList[i].date;
                        web.index=parseInt(i+1);
                        $scope.prizeList=data.map.rankList[i].thxgThird;
                        $scope.$apply();
                      }
                    }
                    if($scope.prizeList.length==0){
                      $('.prize-pop .list-box').hide().next().show();
                    }
                    $('.prize-pop h4').html(rankDate);
                    // var PRIZE_BD_LIST = template.render("PRIZE_BD_LIST_WP", {data: prizeList});
                    // $('#PRIZE_BD_LIST').html(PRIZE_BD_LIST);
                    $('.total-page').html('共'+data.map.rankList.length+'页');
                    $('.page-box .page').html(web.index);
                    if(web.index==1){
                      $('.page-box .prev').css('cursor','no-drop');
                    }
                  }
                }
              });
            });

            if(web.dateM<10){
              // console.log( web.dateM);
              web.dateM='0'+ web.dateM;
            }
            if(web.dateD<10){
              web.dateD='0'+ web.dateD;
            }
            var nowTime = web.dateY + "-" + web.dateM + "-" + web.dateD;
            // console.log(nowTime);
            $.ajax({
              url: URL.prizeListDay,
              type: "post",
              dataType: "json",
              async: false,
              data: JSON.stringify({}),
              contentType: "application/json;charset=UTF-8",
              success: function (data) {
                if (data.success) {
                  for(var i=0;i<data.map.rankList.length;i++){
                    // console.log(data.map.rankList[i].date);
                    data.map.rankList[i].index=i;
                    if(nowTime==data.map.rankList[i].date){
                      var rankDate=data.map.rankList[i].date;
                        web.index=parseInt(i+1);
                      $scope.prizeList=data.map.rankList[i].thxgThird;
                      $scope.$apply();
                    }
                  }

                  if($scope.prizeList.length==0){
                    $('.prize-pop .list-box').hide().next().show();
                  }

                  $('.prize-pop h4').html(rankDate);
                  // var PRIZE_BD_LIST = template.render("PRIZE_BD_LIST_WP", {data: prizeList});
                  // $('#PRIZE_BD_LIST').html(PRIZE_BD_LIST);
                  $('.total-page').html('共'+data.map.rankList.length+'页');
                  $('.page-box .page').html(web.index);

                }
              }
            });
          },
          reloadUserInfo:function () {
            $(document).mouseenter(function () {
              web.logic.userInvestInfoAndRankList();
            })
          },
          hash:function () {
            // $('.body').css()
            $('body').animate({scrollTop:$('.rule-mode').offset().top-300});
          },
          status:function () {
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
                    // console.log('进行中');
                    web.logic.islogin();
                  } else if (date < startTime) {   //活动未开始
                    web.logic.openPop('.noready-popbg');
                  } else if (date > endTime) {   //活动已结束
                    web.logic.openPop('.over-popbg');
                  }

                }
              }
            });
          },
          islogin:function () {
            if (!$filter('isRegister')().register) {    //
              // console.log('一上来未登录');
              $scope.login = 0;
              $('.user-box ul').css('padding-top','30px').siblings('a').show().siblings('h3').css('margin-top','85px');
            } else {
              $scope.login = 1;
              web.logic.channel();
            }
            web.logic.userInvestInfoAndRankList();
          },
          userInvestInfoAndRankList:function () {
            $.ajax({
              url: URL.userInvestInfoAndRankList,
              type: "post",
              dataType: "json",
              async: false,
              data: JSON.stringify({}),
              contentType: "application/json;charset=UTF-8",
              success: function (data) {  //绑定用户投资信息 和是否送加息券
                if (data.success) {

                  if(data.map.getInerest==true){
                    $('.up-to-par').addClass('active').show();
                  }
                  if($scope.login==0){
                    if(data.map.getInerest==false){
                      $('.up-to-par').hide();
                    }
                  }else{
                    if(data.map.getInerest==false){
                      $('.up-to-par').show();
                    }
                  }
                  if(data.map.dayRank.length==0){  //当天排名榜为空
                    $('.ranking-wrapper .list-box .taber-box').hide();
                    $('.ranking-wrapper .nodata').show();
                  }
                  $scope.dayRank=data.map.dayRank;
                  $scope.$apply();
                  // var TAB_BD_LIST = template.render("TAB_BD_LIST_WP", {data: data.map.dayRank});
                  // $('#TAB_BD_LIST').html(TAB_BD_LIST);
                  if(data.map.funtuneOfUser==undefined){//没登录
                    $('.ranking-wrapper .user-box').find('li:first').html('您的当日财富值为: ******').next().html('排名: ******').next().html('预计获得：******');
                    return;
                  }


                  var number=data.map.funtuneOfUser.fortune;
                  var index=data.map.funtuneOfUser.index;
                  var prize=data.map.funtuneOfUser.prize;
                  $scope.number=number;
                  if(number==0){//登录了没投资
                    // console.log('走这了')
                    $('.ranking-wrapper .user-box').find('li:first').html('您的当日财富值为: 0.00').next().html('排名: 无').next().html('预计获得：无');
                    return;
                  }else{
                    if(index ==999){// 登录了排名大于100

                      // console.log('还是走这了')

                      // $('.user-box').find('li').eq(0).html('您的当日财富值为: '+$scope.number);
                      $('.ranking-wrapper .user-box').find('li').eq(1).html('排名:>100').next().html('预计获得：无');
                      // console.log($scope.number);
                      $scope.$apply();
                    }else if(index >6){ //如果投资大于第7名
                      // $('.user-box').find('li').eq(0).html('您的当日财富值为: '+$scope.number);
                      $('.user-box').find('li').eq(1).html('排名: '+index);
                      $('.ranking-wrapper .user-box').find('li').eq(2).html('预计获得：无');
                      // console.log($scope.number);
                      $scope.$apply();
                    }else {
                      // console.log('还是走最后这了')
                      // $('.user-box').find('li').eq(0).html('您的当日财富值为: '+$scope.number);
                      $('.user-box').find('li').eq(1).html('排名: 第'+index+'名');
                      $('.user-box').find('li').eq(2).html('预计获得: '+prize);
                      // console.log($scope.number);
                      $scope.$apply();
                    }
                  }



                }
              }
            });
          },
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
                  console.log(typeof (data.errorCode));
                  console.log('渠道用户');
                  web.logic.openPop('.channel-popbg');
                  return;
                }
              }
            });
          },
          openPop: function (obj) {
            $(obj).show().find('.pop').removeClass('close-pop');
          },
          closePop: function () {
            var _self = $(this);
            _self.parents('.pop').addClass('close-pop');
            setTimeout(function () {
              _self.parents('.pop-bg').hide();
            }, 500)
          }

        }
      }
      web.init();
    }
  });
}