window.activityDirective = function( obj ){
    var App = routerApp;
    if(App){
        App.directive('selectDuorong',function(){//为什么选择多融
            return{
                scope : false,
                restrict : 'E',
                template : "<div><h1>下面的部分是我们创建指令时生成的</h1>"+
            "我的名字是:<span ng-bind='name'></span><br/>"+
            "我的年龄是:<span ng-bind='age'></span><br/>"+
            "输入你的"
            }
        })
        App.directive('duorongHonor',function(){//金融荣誉
            return{
                scope : false,
                restrict : 'E',
                template : "<div><h1>下面的部分是我们创建指令时生成的</h1>"+
            "我的名字是:<span ng-bind='name'></span><br/>"+
            "我的年龄是:<span ng-bind='age'></span><br/>"+
            "输入你的"
            }
        });
        
    }
}