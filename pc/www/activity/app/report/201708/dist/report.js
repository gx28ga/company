var routerApp = angular.module('someApp', [
  'ngResource'
]);
routerApp.factory(
  'resourceService', ['$resource', '$http', '$filter', function ($resource, $http, $filter) {
    return new resourceService($resource, $http, $filter);
  }]);
routerApp.factory(
  'communicationService', ['$resource', '$http', '$filter', function ($resource, $http, $filter) {
    return new function () {
      var tag = {};
      /*路径*/
      this.setTagPage = function (name, url) {
        tag.name = name;
        tag.url = url;
      };
      this.getTagPage = function () {
        return tag;
      };
      /*产品*/
      this.setProduct = function (item) { tag.product = item; }
      this.getProduct = function () {
        return tag.product;
      }
    };
  }]);
//设置图片自适应手机大小
function setImgSize() {
  var originWidth = 375,
    ratio = $(window).width() / originWidth;
  $('.img-size').each(function () {
    var self = $(this);
    $.each(['height', 'width', 'left', 'right', 'bottom', 'top', 'paddingTop', 'lineHeight', 'paddingLeft', 'paddingRight', 'paddingBottom', 'marginTop', 'marginLeft', 'marginRight', 'marginBottom'], function (i, str) {
      var num = self.attr('data-' + str);
      if (num) {
        num = num * ratio / 2 + 'px';
        self.css(str, num)
      }
    });
  });
}
routerApp.directive('repeatFinish', function () {
  return {
    link: function (scope, element, attr) {
      setImgSize();
    }
  }
})

function resourceService(resource, http, $filter) {
  var actions = {
    'query': {
      method: 'GET'
    },
    'queryPost': {
      method: 'POST'
    },
    'formGet': {
      method: 'GET',
      async: false
    }
  };
  //加载json模板页面
  this.getJsonServer = function (scope, url, data, type) {
    var queryResource = resource(url, {}, actions);
    queryResource.query(data, function (data) {
      scope.$broadcast('resourceService_GET_JSON.MYEVENT', data, type);
    }, function (error) {});
  };
  //查找
  this.queryPost = function (scope, url, data, type) {
    /*临时改变时间*/
    if ($filter('isOnLine')()) {
      var queryResource = resource(url, {}, actions);
      queryResource.queryPost(data, function (data) {
        if (data.success) {
          scope.$broadcast('resourceService.QUERY_POST_MYEVENT', data, type);
        } else {
          if (data.errorCode == '9999') {} else {
            scope.$broadcast('resourceService.QUERY_POST_MYEVENT', data, type);
          }
        }
      }, function (error) {
        // $filter('服务器信息')(type, scope,'y');
      });
    } else {
      test(scope, url, data, type);
    };
  };
}
routerApp.controller('report', ['$scope', '$location', '$filter', 'resourceService', '$timeout', '$http',
  function ($scope, $location, $filter, resourceService, $timeout, $http) {
    $(document).ready(function () {
      var URL = window.location.href.split('/');
      var year = URL[6].slice(0, 4); //获取年份
      var month = URL[6].slice(-2).replace(/^0+/, ""); //获取月份
      var yeji = document.getElementById('yeji');
      var zhuce = document.getElementById('zhuce');
      var qudao = document.getElementById('qudao');
      var ageUser = document.getElementById('ageUser');
      var danhu = document.getElementById('danhu');
      var maxTen = document.getElementById('maxTen');
      var chartZhuce = echarts.init(zhuce);
      var chartYeji = echarts.init(yeji);
      var chartQudao = echarts.init(qudao);
      var chartAgeUser = echarts.init(ageUser);
      var chartDanhu = echarts.init(danhu);
      var chartMaxTen = echarts.init(maxTen);
    
      //业绩数据
      chartYeji.setOption({//业绩数据
        title: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          show: false
        },
        textStyle: {
          color: "#fff"
        },
        grid: {
          top:'3%',
          left: '3%',
          right: '15%',
          // bottom: '3%',
          containLabel: true
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#ff4200',
              width: 1
            }
          },

          axisLabel: {
            textStyle: {
              fontSize: 8
            },
            formatter: "{value}%"
          },

          type: 'value',
          splitLine: {
            show: false
          }
        },
        yAxis: {
         
           axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ff4200',
              width: 1
            }
          },
          axisLabel: {
            interval: 0
          },
          type: 'category',
          data: []
        },
        series: [{
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [ //设置颜色列表
                 "#247893","#918c3c","#328d83","#365d99","#2188a2",
                  "#af8c2e","#ad5a18","#8ee8ff","#ffa84b","#ff4200"
                   
                ];
                return colorList[params.dataIndex]
              }
            }
          },
          label: {
            normal: {
              show: true,
              position:['100%','-30%'],
              formatter: '{c}%'
            }
          },
          data: []
        }]
      })
      chartQudao.setOption({ //渠道用户
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item',
          show: false,
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'horizontal', //图例列表的朝向问题
          bottom: 'left', //图例显示位置
          icon: 'circle',
          selectedMode:false,
          textStyle: {
            color: function (params) {
              var colorList = [ //设置颜色列表
                "#fe7634", "#ffea5d", "#0069cb", "#00be6b", "#af8c2e",
                "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
              ];
              return colorList[params.dataIndex]
            }
          },
          data: []
        },
        series: [{
          type: 'pie',
          radius: '55%',
          animation:false,
          minAngle:2,
          data: [], //显示数据问题
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            normal: {
              color: function (params) {
                var colorList = [ //设置颜色列表
                  "#fe7634", "#ffea5d", "#0069cb", "#00be6b", "#af8c2e",
                  "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
                ];
                return colorList[params.dataIndex]
              },
              label: {
                show: true,
                formatter: '{d}%'
              },
              labelLine: { show: true }
            }
          }
        }]
      })

      chartZhuce.setOption({//注册数据
        title: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          show: false
        },
        textStyle: {
          color: "#fff"
        },
        grid: {
          left: '3%',
          right: '15%',
          top: '3%',
          containLabel: true
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#ff4200',
              width: 1
            }
          },

          axisLabel: {
            textStyle: {
              fontSize: 8
            },
            formatter: "{value}%"
          },

          type: 'value',
          splitLine: {
            show: false
          }
        },
        yAxis: {
            axisTick: {
            show: false
          },
          splitLine:{
            show:false
          },
          axisLine: {
            onZero:true,
            lineStyle: {
              color: '#ff4200',
              width: 1
            }
          },
          axisLabel: {
            interval: 0
          },
          type: 'category',
          data: []
        },
        series: [{
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [ //设置颜色列表
                   "#247893","#918c3c","#328d83","#365d99","#2188a2",
                  "#af8c2e","#ad5a18","#8ee8ff","#ffa84b","#ff4200"
                ];
                return colorList[params.dataIndex]
              }
            }
          },
          label: {
            normal: {
              show: true,
              // position: 'right',
              position:['100%','-30%'],
              formatter: '{c}%'
            }
          },
          data: []
        }]
      })
      chartAgeUser.setOption({ //用户年龄分析
        title: {},
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
          show: false
        },
        textStyle: {
          color: "#fff"
        },
        grid: {
          left: '3%',
          right: '15%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#ff4200',
              width: 1
            }
          },

          axisLabel: {
            textStyle: {
              fontSize: 8
            },
            formatter: "{value}%"
          },

          type: 'value',
          splitLine: {
            show: false
          }
        },
        yAxis: {
            axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#ff4200',
              width: 1
            }
          },
          axisLabel: {
            interval: 0
          },
          type: 'category',
          data: []
        },
        series: [{
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [ //设置颜色列表
                  "#2188a2","#af8c2e","#ad5a18","#8ee8ff","#ffa84b","#ff4200"
                ];
                return colorList[params.dataIndex]
              }
            }
          },
          label: {
            normal: {
              show: true,
              position:['100%','-30%'],
              formatter: '{c}%'
            }
          },
          data: []
        }]
      })



      // chartYeji.setOption(option);
      // chartZhuce.setOption(option);
      // chartAgeUser.setOption(option);
      // chartQudao.setOption(optionpie);
      // chartDanhu.setOption(optioninner);
      // chartMaxTen.setOption(optioninner);
      //发送请求数据
      var provinceInvestRankList = []; //业绩数据累计交易额省份
      var provinceNumber = []; //业绩数据累计交易额百分比
      var provinceRegisterRankList = []; //注册省份排名
      var provinceRegisterNumber = []; //注册数据百分比
      var drOperationInvestClient = []; //渠道数据
      var drOperationInvestClientNumber = []; //渠道数据百分比
      var drOperationInvestAge = []; //用户年龄
      var drOperationInvestAgeNumber = []; //用户年龄所占比
      //发送ajax请求
      $http({
          method: 'POST',
          url: '/operationReport/getOperationReport.do', //运营报告请求
          //url:"activity/scratchcard/status.do",
          headers: {
            contentType: 'application/json;charset=UTF-8',
            // processData: false
          },
          data: { month: month, year: year }
        })
        .success(function (result) {
          var data = result.map.drOperationReport;
          var number = result.map.drOperationInvestClientVOList //渠道用户
           var rote=result.map.drOperationReportVOList[0].value;//最大单户借款比例
        var roter=100-rote;//剩余单户借款比例
          $scope.year = data.year; //获取年
          $scope.month = data.month;
          $scope.deadline = data.deadline; //截止日期
          $scope.cumulativeTurnover = data.cumulativeTurnover; //累计交易额
          $scope.cumulativeIncome = data.cumulativeIncome; //累计赚取收益
          $scope.cumulativeRegisteredUser = data.cumulativeRegisteredUser; //累计注册用户
          $scope.cumulativeMonthlyTurnover = data.cumulativeMonthlyTurnover; //当月累计交易额
          $scope.cumulativeMonthlyRegistered = data.cumulativeMonthlyRegistered; //当月新增注册人数
          $scope.registeredMaleRatio = data.registeredMaleRatio; //累计注册男性占比
          $scope.registeredFemaleRatio = data.registeredFemaleRatio; //累计注册女性占比
          $scope.investedMaleRatio = data.investedMaleRatio; //累计投资男性占比
          $scope.investedFemaleRatio = data.investedFemaleRatio; //累计投资女性占比
          // 最给力用户
        $scope.maxCumulativeInvest = data.drOperationAboutMaxList[0];//累计投资额最多
        $scope.maxCumulativeInvestCount=data.drOperationAboutMaxList[0].maxCumulativeInvest;
        $scope.maxOnceInvest = data.drOperationAboutMaxList[1]; //当月单笔投资最大
        $scope.maxOnceInvestCount=data.drOperationAboutMaxList[1].maxOnceInvest;
        $scope.maxInvestFrequency = data.drOperationAboutMaxList[2]; //最多累计投资次数
        $scope.maxInvestFrequencyCount=data.drOperationAboutMaxList[2].maxInvestFrequency;
        $scope.maxRecommendFrequency = data.drOperationAboutMaxList[3]; //最多邀请数
        $scope.maxRecommendFrequencyCount=data.drOperationAboutMaxList[3].maxRecommendFrequency;
          //业绩数据
          $scope.drOperationProvinceInvestRankList = data.drOperationProvinceInvestRankList; //业绩数据
          $scope.drOperationProvinceRegisterRankList = data.drOperationProvinceRegisterRankList; //注册数据
          var imgSrc=document.getElementById('number');
          imgSrc.src='images/num'+month+'.png';//设置图片路径问题
          for (var i = data.drOperationProvinceInvestRankList.length-1; i > 0 || i==0; i--) { //业绩数据
            provinceInvestRankList.push(data.drOperationProvinceInvestRankList[i].region);
            provinceNumber.push(data.drOperationProvinceInvestRankList[i].proportion)
          }
          for (var j = data.drOperationProvinceRegisterRankList.length-1; j >0 || j==0; j--) { //注册数据
            provinceRegisterRankList.push(data.drOperationProvinceRegisterRankList[j].region);
            provinceRegisterNumber.push(data.drOperationProvinceRegisterRankList[j].proportion);

          }
          for (var k = 0; k < number.length; k++) { //渠道数据
            drOperationInvestClient.push(number[k].name);
            drOperationInvestClientNumber.push(number[k].proportion)
          }
          for (var w = data.drOperationInvestAgeList.length-1; w >0 || w==0; w--) { //投资用户年龄分析
            drOperationInvestAge.push(data.drOperationInvestAgeList[w].age);
            drOperationInvestAgeNumber.push(data.drOperationInvestAgeList[w].proportion)
          }
          chartYeji.setOption({
            yAxis: {
              data: provinceInvestRankList
            },
            series: [{
              data: provinceNumber
            }]
          })
          chartZhuce.setOption({
            yAxis: {
              data: provinceRegisterRankList
            },
            series: [{
              data: provinceRegisterNumber
            }]
          })
          chartAgeUser.setOption({ //用户年龄分析
            yAxis: {
              data: drOperationInvestAge
            },
            series: [{
              data: drOperationInvestAgeNumber
            }]
          })
          chartQudao.setOption({ //渠道用户
            legend: {
              data: drOperationInvestClient
            },
            series: [{ data: number }]
          })
          chartDanhu.setOption({ //单户所占比
           title: {
            show: false
          },
          tooltip: {
            trigger: 'item',
            show: false,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          textStyle:{
            fontSize:8
          },
          legend: {
            orient: 'horizontal', //图例列表的朝向问题
            bottom: 'bottom', //图例显示位置
            icon: 'circle',
            selectedMode:false,
            textStyle: {
              color: function (params) {
                var colorList = [ //设置颜色列表
                  "#fe7634", "#ffea5d", "#0069cb", "#00be6b", "#af8c2e",
                  "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
                ];
                return colorList[params.dataIndex]
              }
            },
            data: ['借款金额最大的用户剩余未还金额占比', '邮件营销']
          },
          series: [{
            type: 'pie',
            radius: '55%',
            animation:false,
             center: ['50%', '40%'],
            data: [
              { value: rote, name: '借款金额最大的用户剩余未还金额占比' }, { value: roter, name: "" }
            ], //显示数据问题
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal: {
                color: function (params) {
                  var colorList = [ //设置颜色列表
                    "#ffea5d", "#00a172", "#0069cb", "#00be6b", "#af8c2e",
                    "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
                  ];
                  return colorList[params.dataIndex]
                },
                label: {
                  show: true,
                  position: "inner",
                  textStyle:{
                    color:"#d44600"
                  },
                  formatter: '{d}%'
                },
                labelLine: { show: false }
              }
            }
          }]

          })
            chartMaxTen.setOption({ //最大10户
            title: {
            show: false
          },
          tooltip: {
            trigger: 'item',
            show: false,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'horizontal', //图例列表的朝向问题
            bottom: 'bottom', //图例显示位置
            icon: 'circle',
            selectedMode:false,
            textStyle: {
              color: function (params) {
                var colorList = [ //设置颜色列表
                  "#fe7634", "#ffea5d", "#0069cb", "#00be6b", "#af8c2e",
                  "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
                ];
                return colorList[params.dataIndex]
              }
            },
            data: ['借款金额最大的10个用户剩余未还金额占比']
          },
          series: [{
            type: 'pie',
            radius: '55%',
            animation:false,
            center: ['50%', '40%'],
            data: [
              { value: data.maxSingleLoanRatio, name: '借款金额最大的10个用户剩余未还金额占比' }
            ], //显示数据问题
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              },
              normal: {
                  textStyle:{
                      color:"#fff"
                    },
                color: function (params) {
                  var colorList = [ //设置颜色列表
                    "#0069c2", "#ffea5d", "#0069cb", "#00be6b", "#af8c2e",
                    "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
                  ];
                  return colorList[params.dataIndex]
                },
                label: {
                  show: true,
                  position: "center",
                  textStyle:{
                    color:"#fff"
                  },
                  formatter: '{d}%'
                },
                labelLine: { show: false }
              }
            }
          }]

          })

        })








    })

  }
]);
