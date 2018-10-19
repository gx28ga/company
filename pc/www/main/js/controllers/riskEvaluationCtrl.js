
// 我的好友
mainModule.controller('riskEvaluationCtrl', ['$rootScope','$scope','$http','$state','$location','$localStorage','$filter','resourceService', function($rootScope,$scope,$http,$state,$location,$localStorage,$filter,resourceService) {
	if ($('#invite-script').length) {
		window.location.reload();
	}
    $scope.submitBtn=false;
    $("disable-box").show();
    $(".submit-box").hide();
	$rootScope.title = '风险测评-多融财富';
  if (!$filter('isRegister')().register ) {
    $filter("跳转页面")('denLu', 'main.myAccount.riskEvaluation', 'dl');
    return;
  }
	
	$rootScope.activeNav = 'account';
  $scope.leixing='';
  $scope.mask=false;
  var result1=[],
   result2=[],result3=[],result4=[],result5=[],result6=[],result7=[],result8=[],result9=[],result10=[],
   result=[];
   $scope.rows=[];
  /* $('.submit-box').hide();
   $(".mask").hide(); */ 
  $("input[name='number2']").click(function(){
    if(result1.length==0){
      result1.push($(this).val());
      rowLength(); 
    }else{
    result1.length=0;
     result1.push($(this).val());
      rowLength();
    }
  })
  $("input[name='number1']").click(function(){
      if(result2.length==0){
      result2.push($(this).val());
       rowLength(); 
    }else{
      result2.length=0;
      result2.push($(this).val());
       rowLength();
    }
  }); 
   $("input[name='number3']").click(function(){
      if(result3.length==0){
      result3.push($(this).val());
       rowLength(); 
    }else{
      result3.length=0;
      result3.push($(this).val());
       rowLength();
    }
  });  
   $("input[name='number4']").click(function(){
      if(result4.length==0){
      result4.push($(this).val()); 
       rowLength();
    }else{
      result4.length=0;
      result4.push($(this).val());
       rowLength();
    }
  });
   $("input[name='number5']").click(function(){
      if(result5.length==0){
      result5.push($(this).val()); 
       rowLength();
    }else{
      result5.length=0;
      result5.push($(this).val());
       rowLength();
    }
  }); 
    $("input[name='number6']").click(function(){
      if(result6.length==0){
      result6.push($(this).val());
       rowLength(); 
    }else{
      result6.length=0;
      result6.push($(this).val());
       rowLength();
    }
  });   $("input[name='number7']").click(function(){
      if(result7.length==0){
      result7.push($(this).val());
       rowLength(); 
    }else{
      result7.length=0;
      result7.push($(this).val());
       rowLength();
    }
  }); 
    $("input[name='number8']").click(function(){
      if(result8.length==0){
      result8.push($(this).val());
       rowLength(); 
    }else{
      result8.length=0;
      result8.push($(this).val());
       rowLength();
    }
  }); 
   $("input[name='number9']").click(function(){
      if(result9.length==0){
      result9.push($(this).val());
       rowLength();  
    }else{
      result9.length=0;
      result9.push($(this).val());
       rowLength(); 
    }
  }); 
   $("input[name='number10']").click(function(){
      if(result10.length==0){
      result10.push($(this).val());
       rowLength(); 
    }else{
      result10.length=0;
      result10.push($(this).val());
       rowLength();
    }
  });
function rowLength(){
     if(result1.length==1&& result2.length==1&& result3.length==1&&result4.length==1&&result5.length==1&&
    result6.length==1&&result7.length==1&&result8.length==1&&result9.length==1&&result10.length==1){
      for (var j=1;j<=10;j++){
        var b=eval('result' + j);
        for (var i=0;i<b.length;i++){
            result.push(b[i]);
            $scope.rows.push(b[i]);
        }
    }
    $(".submit-box").show();
    $(".disable-box").hide();
    $scope.submitBtn=true;
  }
}
// 判断结果
var Type;
$scope.submit=function(){
  var A=[],D=[];
for(var k=0;k<result.length;k++){
    if(result[k]=="a"){
        A.push(result[k]);
    }else if(result[k]=="d"){
        D.push(result[k]);
    }
}
if(A.length>7 || A.length==7){
  $scope.leixing='保守型';
  $scope.Type=1;
  Type=1;
    // $("#leixing").innerText='保守型';
}else if(D.length>5||D.length==5){
    $scope.leixing='积极型';
      $scope.Type=2;
      Type=2;
}else{
     $scope.leixing='稳健型';
       $scope.Type=3;
       Type=3;
  }
  console.log($rootScope.Type);
 
  $scope.mask=true;
    $http({
            method: 'POST',
            url: '/memberSetting/riskEvaluation.do',
            headers: {
              contentType: 'application/json;charset=UTF-8',
              // processData: false
            },
            // data: {isRisk:},
            data: {isRisk:$scope.Type},
          })
          .success(function (records) {      

          })
}
$scope.Type=Type;
$scope.close=function(){
  $scope.mask=false;
}
}]);
