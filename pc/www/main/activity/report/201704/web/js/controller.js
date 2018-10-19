/*静态页面_帮助*/
window.PubDecReport = function ($scope, $rootscope, $filter, resourceService, $timeout, $http, $resource, $location, $localStorage, getScript) {
  $rootscope.title = '运营报告_银砖金融理财收益多少_p2p理财收益率,排名-多融财富';
  $rootscope.keywords = '运营报告,银砖金融理财收益多少,p2p理财收益率,p2p理财收益排名';
  $rootscope.description = '银砖金融理财收益多少？投资者要想知道银砖金融理财收益情况以及整个p2p平台的收益率和排名，还需要结合运营报告来看，截止2017年2月28日，累积教育金额达到140050640000元，累计赚取收益12861371元，累计注册用户242887人，其中男性占有投资比例63.2%，女性占有36.8%。';
  $(document).ready(function () {
    var figure = document.getElementById('figure'); //业绩数据
    var chartData = echarts.init(figure);
    var zhuce = echarts.init(document.getElementById('figu')); //注册数据
    var userAge = document.getElementById('userAge');
    var chartAge = echarts.init(userAge);
    var channel = echarts.init(document.getElementById('channel'));
    var ins = echarts.init(document.getElementById('ins'));
    var dataTen = echarts.init(document.getElementById('tenUse'));
    var URL = window.location.href.split('/');
    var year = URL[URL.length - 1].slice(0, 4);//获取年份
    var month = URL[URL.length - 1].slice(-2).replace(/^0+/, ""); //获取月份
    chartData.setOption({ //业绩数据
      title: {
        text: " "
      },
      tooltip: {
        show: false
      },
      legend: {
        data: ['']
      },
      grid: { //控制x轴类目高度
        x2: 140,
        y2: 80
      },
      textStyle: {
        color: "#fff"
      },
      xAxis: {
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: { //使文字竖着显示
          interval: 0,
          formatter: function (value) {
            return value.split("").join("\n")
          }
        },
        axisLine: {
          lineStyle: {
            color: '#ff4200',
            width: 1
          }
        },

        data: []
      },
      yAxis: {
        axisLabel: {
          formatter: "{value}%"
        },
        axisLine: {
          lineStyle: {
            color: '#ff4200',
            width: 1
          }
        },
        interval: 5,
        splitLine: {
          show: false
        }
      },
      series: [{
        name: "",
        type: "bar",
        barWidth: 15,
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = [ //设置颜色列表
                "#ff4200", "#ffa84b", "#8ee8ff", "#ad5a18", "#af8c2e",
                "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
              ];
              return colorList[params.dataIndex]
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}%'
          }
        },
        data: []
      }]
    })
    zhuce.setOption({ //注册数据
      title: {
        text: " "
      },
      tooltip: {
        show: false
      },
      legend: {
        data: ['']
      },
      grid: { //控制x轴类目高度
        x2: 140,
        y2: 80
      },
      textStyle: {
        color: "#fff"
      },
      xAxis: {
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: { //使文字竖着显示
          interval: 0,
          formatter: function (value) {
            return value.split("").join("\n")
          }
        },
        axisLine: {
          lineStyle: {
            color: '#ff4200',
            width: 1
          }
        },

        data: []
      },
      yAxis: {
        axisLabel: {
          formatter: "{value}%"
        },
        axisLine: {
          lineStyle: {
            color: '#ff4200',
            width: 1
          }
        },
        interval: 5,
        splitLine: {
          show: false
        }
      },
      series: [{
        name: "",
        type: "bar",
        barWidth: 15,
        itemStyle: {
          normal: {
            color: function (params) {
              var colorList = [ //设置颜色列表
                "#ff4200", "#ffa84b", "#8ee8ff", "#ad5a18", "#af8c2e",
                "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
              ];
              return colorList[params.dataIndex]
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            formatter: '{c}%'
          }
        },
        data: []
      }]
    })
    chartAge.setOption({ //投资用户年龄分析
        title: {
          text: " "
        },
        tooltip: {
          show: false
        },
        legend: {
          data: ['']
        },
        grid: { //控制x轴类目高度
          x2: 140,
          y2: 80
        },
        textStyle: {
          color: "#fff"
        },
        xAxis: {
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 0
          },
          axisLine: {
            lineStyle: {
              color: '#ff4200',
              width: 1
            }
          },

          data: []
        },
        yAxis: {
          axisLabel: {
            formatter: "{value}%"
          },
          axisLine: {
            lineStyle: {
              color: '#ff4200',
              width: 1
            }
          },
          interval: 5,
          splitLine: {
            show: false
          }
        },
        series: [{
          name: "",
          type: "bar",
          barWidth: 20,
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [ //设置颜色列表
                  "#ff4200", "#ffa84b", "#8ee8ff", "#ad5a18", "#af8c2e",
                  "#2188a2", "#365d99", "#328d83", "#918c3c", "#247893"
                ];
                return colorList[params.dataIndex]
              }
            }
          },
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: '{c}%'
            }
          },
          data: []
        }]
      })
      // 饼状图
    channel.setOption({ //渠道用户
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
          selectedMode:false,
          icon: 'circle',
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

    var provinceInvestRankList = []; //业绩数据累计交易额省份
    var provinceNumber = []; //业绩数据累计交易额百分比
    var provinceRegisterRankList = []; //注册省份排名
    var provinceRegisterNumber = []; //注册数据百分比
    var drOperationInvestClient = []; //渠道数据
    var drOperationInvestClientNumber = []; //渠道数据百分比
    var drOperationInvestAge = []; //用户年龄
    var drOperationInvestAgeNumber = []; //用户年龄所占比
    $http({
        method: 'POST',
        url: 'operationReport/getOperationReport.do', //运营报告请求
        //url:"activity/scratchcard/status.do",
        headers: {
          contentType: 'application/json;charset=UTF-8',
          // processData: false
        },
        data: { month: month, year: year }
      })
      .success(function (result) {
        var data = result.map.drOperationReport;
        var number=result.map.drOperationInvestClientVOList;//渠道用户
        var rote=result.map.drOperationReportVOList[0].value;//最大单户借款比例
        var roter=100-rote;//剩余单户借款比例
        $scope.year = data.year; //获取年
        $scope.month = data.month;
        var month=data.month;
        $scope.deadline = data.deadline; //截止日期
        $scope.cumulativeTurnover = data.cumulativeTurnover * 100; //累计交易额
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
        imgSrc.src='main/activity/report/201704/web/images/number'+month+'.png';//设置图片路径问题
        for (var i = 0; i < data.drOperationProvinceInvestRankList.length; i++) { //业绩数据
          provinceInvestRankList.push(data.drOperationProvinceInvestRankList[i].region);
          provinceNumber.push(data.drOperationProvinceInvestRankList[i].proportion)
        }
        for (var j = 0; j < data.drOperationProvinceRegisterRankList.length; j++) { //注册数据
          provinceRegisterRankList.push(data.drOperationProvinceRegisterRankList[j].region);
          provinceRegisterNumber.push(data.drOperationProvinceRegisterRankList[j].proportion);

        }
        for (var k = 0; k < number.length; k++) { //渠道数据
          drOperationInvestClient.push(number[k].name);
          drOperationInvestClientNumber.push(number[k].proportion)
        }
        for (var w = 0; w < data.drOperationInvestAgeList.length; w++) { //投资用户年龄分析
          drOperationInvestAge.push(data.drOperationInvestAgeList[w].age);
          drOperationInvestAgeNumber.push(data.drOperationInvestAgeList[w].proportion)
        }
        //将数据插入echarts
        chartData.setOption({ //业绩数据
            xAxis: {
              data: provinceInvestRankList
            },
            series: [{
              data: provinceNumber
            }]
          })
          //注册数据
        zhuce.setOption({
          xAxis: {
            data: provinceRegisterRankList
          },
          series: [{
            data: provinceRegisterNumber
          }]
        })
        chartAge.setOption({
            xAxis: {
              data: drOperationInvestAge
            },
            series: [{
              data: drOperationInvestAgeNumber
            }]
          })
          //借款企业left
        ins.setOption({
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
            bottom: '15%', //图例显示位置
            left:'35%',
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
             center: ['55%', '40%'],
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
        //借款企业right
        dataTen.setOption({
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
            bottom: '15%', //图例显示位置
            left:'35%',
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
            center: ['55%', '40%'],
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
        channel.setOption({//渠道用户
          legend: {
            data: drOperationInvestClient
          },
          series: [{data:number}]
        })

      })

    // channel.setOption({
    //     legend: {
    //       data: ['直接访问', '邮件营销']
    //     },
    //     series: [{
    //       data: [{ value: 200, name: '直接访问' }, { value: 300, name: "邮件营销" }]
    //     }]
    //   })
    //渠道数据
    //channel.setOption(option);
    //chartData.setOption(opt);
    // zhuce.setOption(opt);
    //chartAge.setOption(opt); //用户年龄
    //ins.setOption(optioninner); //单户占比
    //dataTen.setOption(optioninner); //最大10户借款占比
    //渠道饼图的制作
  })

  $scope.$apply();
  // console.log('123');
}
