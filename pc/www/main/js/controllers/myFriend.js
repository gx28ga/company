
// 我的好友
mainModule.controller('myFriend', ['$rootScope','$scope','$location','$localStorage','$filter','resourceService', function($rootScope,$scope,$location,$localStorage,$filter,resourceService) {
    if ($('#invite-script').length) {
        window.location.reload();
    }

    $scope.shareUrl = 'https://www.duorongcf.com/zhuce';
    $rootScope.title = '我的好友-多融财富';
    $scope.fon=true;
    if($rootScope.biaozhi==3 || localStorage.getItem('biaozhi')==3){
        $scope.isActive=3;
    }else if($rootScope.biaozhi==4 || localStorage.getItem('biaozhi')==4){
        $scope.isActive=4;
    }else{
      $scope.isActive=0;  
    }
    setTimeout(function(){ localStorage.removeItem('biaozhi')},2000)
    $scope.format = "yyyy-MM-dd";
    $('.bdsharebuttonbox a').on('mouseover click', function() {
        $scope.shareUrl = $(this).data('myurl');
    });
    $rootScope.activeNav = 'account';
    $scope.openhistoryBox=false;
    var date=new Date();
    if($scope.page == void 0){
        $scope.page = new Object();
        $scope.page.startDate=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
        $scope.page.endDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    }
    if($rootScope.page==void 0){
        $rootScope.page=new Object();
      $rootScope.page.startDate=$scope.page.startDate;
      $rootScope.page.endDate=$scope.page.endDate;
    }else{
        $rootScope.page.startDate=$scope.page.startDate;
        $rootScope.page.endDate=$scope.page.endDate;
    }
    $scope.$on('resourceService.QUERY_POST_MYEVENT', function(event,data,type) {
        switch(type) {
            case "我的好友":
                if (data.success) {
                    $scope.user = data.map;
                    $scope.mylist = data.map.page.rows;
                    $scope.mylistPage = data.map.page;
                    $scope.mylistPage.pages = [];

                    for(var i = 0; i < parseInt($scope.mylistPage.totalPage); i ++){
                        $scope.mylistPage.pages[i] = i+1;
                    };

                    function SetShareUrl(cmd, config) {                 
                        config.bdUrl = $scope.shareUrl + '?recommCode=' + $scope.user.recommCodes;                
                        return config;
                    }
                    delete window._bd_share_config;
                    window._bd_share_config = {
                        "common":{
                          onBeforeClick: SetShareUrl,
                            "bdSnsKey":{},
                            "bdText":"送你1588元红包和百分之十二安全好收益，多融财富亲测靠谱！https://www.duorongcf.com/zhuce?recommCode=" + $scope.user.recommCodes,
                            "bdMini":"2",
                            "bdMiniList":[],
                            "bdPic":"",
                            "bdStyle":"0",
                            "bdSize":"32"
                            // "bdUrl": $scope.shareUrl + '?recommCode=' + $scope.user.recommCodes
                        },
                        "share":{}
                    };
                 // with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
                   with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
                 ///with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='https://www.duorongcf.com/main/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
                   // with(document)0[$('<script id="share-script" src="/main/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)+'"></script>').appendTo('body')];
                } else {
                }
                break;
            case '我的待收等级':
                if(data.success){
                    $scope.commission=data.map;//我的待收金额
                    // 我的待收等级
                    $scope.MyGrade=data.map.MyGrade;
                    var myGrade=$scope.MyGrade;
                    //待收等级
                    $scope.level=data.map.drRecommendConfig.drRecommendConfigDetails;
                 for(var i=0;i<$scope.level.length;i++){
                    if($scope.MyGrade>$scope.level[i].grade){
                    }
                 }
                }
                break;
                case '首月返现好友':
                    if (data.success) {
                    $scope.hesuser = data.map;
                    $scope.myHeistory = data.map.page.rows;
                    $scope.myHeistoryPage = data.map.page;
                    $scope.myHeistoryPage.pages = [];
                    for(var i = 0; i < parseInt($scope.myHeistoryPage.totalPage); i ++){
                        $scope.myHeistoryPage.pages[i] = i+1;
                    };
                }             
                break;
                case '每月任务':
                    if(data.success){
                      $scope.task=data.map;//本月任务
                      $scope.Task=data.map.drRecommendTask;//每月任务
                      $scope.detail=data.map.drRecommendTask.drRecommendTaskDetails;
                      $scope.taskList=data.map.pageInfo.rows;//任务奖励列表
                      $scope.taskListPage =data.map.pageInfo;
                      $scope.taskListPage.pages=[]; 
                       for(var i = 0; i < parseInt($scope.taskListPage.totalPage); i ++){
                        $scope.taskListPage.pages[i] = i+1;
                        };              
                    }
                break;
                case '我的佣金':
                     if(data.success){
                        $scope.myCount=data.map;
                        $scope.myCountlist = data.map.page.rows;
                        $scope.myCountPage = data.map.page;
                        $scope.myCountPage.pages = [];
                    for(var i = 0; i < parseInt($scope.myCountPage.totalPage); i ++){
                        $scope.myCountPage.pages[i] = i+1;
                    };}}
        
    });
    var date=new Date();
    $scope.page.startDate=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
    $scope.page.endDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    
    resourceService.queryPost($scope, $filter('交互接口对照表')('我的好友'),{pageOn:1,pageSize:10},'我的好友');
    resourceService.queryPost($scope, $filter('交互接口对照表')('首月返现好友'),{pageOn:1,pageSize:10},'首月返现好友');
    resourceService.queryPost($scope, $filter('交互接口对照表')('我的佣金'),{pageOn:1,pageSize:10,startDate:$scope.page.startDate,endDate:$scope.page.endDate},'我的佣金');
    resourceService.queryPost($scope, $filter('交互接口对照表')('我的待收等级'),'{}','我的待收等级');
    resourceService.queryPost($scope, $filter('交互接口对照表')('每月任务'),{pageOn:1,pageSize:10},'每月任务');
    $scope.copy = function() {
        $('#mycopy').select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
        alert("已复制好，可贴粘。");
    };
    //显示历史数据弹框start================//
    $scope.openhistory=function(){
        $scope.openhistoryBox=true;
    }
    $scope.closehistoryBox=function(){
        $scope.openhistoryBox=false;
    }
    //显示历史数据弹框end================//

  $scope.onClick = function (type, item) {
    switch (type) {
      case "我的佣金查询":
        goP();
        break;
      case "beforePage":
        if ($scope.page.pageOn > 1) {
          $scope.page.pageOn -= 1;
          goP()
        };
        break;
      case "currentPage":
        $scope.page.pageOn = item;
        goP();
        break;
      case "nextPage":
        if ($scope.page.pageOn < $scope.pages.length) {
          $scope.page.pageOn += 1;
          goP()
        };
        break;
      case "closeDialog":
        ngDialog.closeAll();
        break;
    }
  };
      Date.prototype.format = function(format) {
       var date = {
              "M+": this.getMonth() + 1,
              "d+": this.getDate(),
              "h+": this.getHours(),
              "m+": this.getMinutes(),
              "s+": this.getSeconds(),
              "q+": Math.floor((this.getMonth() + 3) / 3),
              "S+": this.getMilliseconds()
       };
       if (/(y+)/i.test(format)) {
              format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
       }
       for (var k in date) {
              if (new RegExp("(" + k + ")").test(format)) {
                     format = format.replace(RegExp.$1, RegExp.$1.length == 1
                            ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
              }
       }
       return format;
}
  //监听事件变化
  $scope.$watch('page.startDate',function(newValue,oldValue){


 if($scope.page.startDate !=oldValue){
    $scope.fon=false;
        var time = new Date(newValue);
        time = new Date(time.getTime());
        $scope.page.startDate = time.format('yyyy-MM-dd');
        resourceService.queryPost($scope, $filter('交互接口对照表')('我的佣金'),{pageOn:1,pageSize:10,startDate:$scope.page.startDate,endDate:$scope.page.endDate},'我的佣金');
    }
  }) 
  $scope.$watch('page.endDate',function(newValue,oldValue){
    if($scope.page.endDate !=oldValue){
        $scope.fon=false;
        var time = new Date(newValue);
        time = new Date(time.getTime());
        $scope.page.endDate = time.format('yyyy-MM-dd');
         resourceService.queryPost($scope, $filter('交互接口对照表')('我的佣金'),{pageOn:1,pageSize:10,startDate:$scope.page.startDate,endDate:$scope.page.endDate},'我的佣金');
    }
  })
    $scope.goPage = function (scope) {
        var obj = {};
        obj.pageOn = scope.mylistPage.pageOn;
        obj.pageSize = 10;
        resourceService.queryPost($scope,$filter('交互接口对照表')('我的好友'),obj,'我的好友');
    };
    $scope.changePage = function (type,pageNum) {
        switch(type){
            case "beforPage":
                if($scope.mylistPage.pageOn > 1){$scope.mylistPage.pageOn -=1;$scope.goPage($scope);};
            break;
            case "currentPage":
                $scope.mylistPage.pageOn = pageNum;$scope.goPage($scope);
            break;
            case "nextPage":
                if($scope.mylistPage.pageOn < $scope.mylistPage.pages.length){$scope.mylistPage.pageOn +=1;$scope.goPage($scope);};
            break;
        };
    };
    //佣金记录页码
    $scope.changeP=function(type,pageNum){
        switch(type){
               case "beforPage":
                if($scope.myCountPage.pageOn > 1){$scope.myCountPage.pageOn -=1;$scope.goP($scope);};
            break;
            case "currentPage":
                $scope.myCountPage.pageOn = pageNum;$scope.goP($scope);
            break;
            case "nextPage":
                if($scope.myCountPage.pageOn < $scope.myCountPage.pages.length){$scope.myCountPage.pageOn +=1;$scope.goP($scope);};
            break;
        }
    }
    //我的任务分页
        $scope.changeTaskPage=function(type,pageNum){

        switch(type){
               case "beforPage":
                if($scope.taskListPage.pageOn > 1){$scope.taskListPage.pageOn -=1;$scope.goTaskPage($scope);};
            break;
            case "currentPage":
                $scope.taskListPage.pageOn = pageNum;$scope.goTaskPage($scope);
            break;
            case "nextPage":
                if($scope.taskListPage.pageOn < $scope.taskListPage.pages.length){$scope.taskListPage.pageOn +=1;$scope.goTaskPage($scope);};
            break;
        }
    }
    //首月返现好友记录页码
     $scope.changePP=function(type,pageNum){
        switch(type){
               case "beforPage":
                if($scope.myHeistoryPage.pageOn > 1){$scope.myHeistoryPage.pageOn -=1;$scope.goPP($scope);};
            break;
            case "currentPage":
                $scope.myHeistoryPage.pageOn = pageNum;$scope.goPP($scope);
            break;
            case "nextPage":
                if($scope.myHeistoryPage.pageOn < $scope.myHeistoryPage.pages.length){$scope.myHeistoryPage.pageOn +=1;$scope.goPP($scope);};
            break;
        }
    }
    $scope.goPP=function(scope){
        var obj={};
        obj.pageOn=scope.myHeistoryPage.pageOn;
        obj.pageSize=10;
        resourceService.queryPost($scope,$filter('交互接口对照表')('首月返现好友'),obj,'首月返现好友'); 
    }
       $scope.goP=function(scope){
        goP();
    }
    $scope.goTaskPage=function(scope){
        var obj={};
        obj.pageOn=scope.taskListPage.pageOn;
        obj.pageSize=10;
        resourceService.queryPost($scope.$filter("交互接口对照表")("每月任务"),obj,'每月任务');
    }
    $scope.month=function(){
        $scope.fon=true;
        resourceService.queryPost($scope, $filter('交互接口对照表')('我的佣金'),{pageOn:1,pageSize:10,startDate:$scope.page.startDate,endDate:$scope.page.endDate},'我的佣金');
        var date=new Date();   
        $scope.page.startDate=date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate();
        $scope.page.endDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();     
    }  
    function goP() {
    $scope.page.pageOn=$scope.myCountPage.pageOn;
    $scope.page.pageSize=10;
    resourceService.queryPost($scope, $filter('交互接口对照表')('我的佣金'), $scope.page, '我的佣金');
  };
  //跳转任务tab
  $scope.showTask=function(){
    $scope.isActive=3;
  }
  function goPP(){
    $scope.page.pageOn=$scope.myHeistoryPage.pageOn;
    $scope.page.pageSize=10;
    //$scope.page.status = $scope.isActive;
    resourceService.queryPost($scope, $filter('交互接口对照表')('首月返现好友'), $scope.page, '首月返现好友');
  }
    $('#explain').on("mouseover",function(){
        $(this).next("span").css("display",'inline-block');
    });
    $('#explain').on("mouseout",function(){
        $(this).next("span").css("display","none");
    })
    $scope.today = function() {
        $scope.startDate = new Date();
    };
    $scope.today();

    $scope.clear = function() {
       $scope.startDate = null;
    };
    $scope.open1 = function() {
        $scope.popup1.opened = true;
    };

    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };
       $.tips({ //提示文字
        scope : $scope,
        left : -160,
        top: 15,
        element : '.account-myfriend-wrap'
    })
}]);
