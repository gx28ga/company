 var app = new Vue({
    el: '#APP',
    delimiters: ['${', '}'],
    data: function() {
        return {
            // tag: {
            //     DRGK: false,
            //     AQBZ: false,
            //     YYBG: false,
            //     NEWS: false,
            //     GSDT: false,
            //     LXWM: false
            // },
            result: {},
	        pic1 : "",
	        pic2 : "",
            total: "",
            activity1:"",
            maxCumulativeInvest: {},
            maxOnceInvest: {},
            maxInvestFrequency: {},
            maxRecommendFrequency: {},
            monthpc:"",
            yearpc:"",
            showyear:true,
            showyear1:true,
            linkUrl:null,
            showBigEvent:true,
            showActivity:true,
        }
    },
    mounted: function() {
        var self = this;
        this.getUrl();
        T.getScript('/js/about/geturl.json.js',function(){
            try{
            self.linkUrl = result.url;
            }catch(e){}
        });

    },
    methods: {
        getUrl: function() {
            var self = this;
            var URL = window.location.href.split("?");
            var year = URL[URL.length - 1].slice(0, 4); //获取年份
            var img=URL[URL.length - 1].slice(4, 6);//没有去0的月份
            var month = URL[URL.length - 1].slice(4, 6).replace(/^0+/, ""); //获取月份
            var imgSrc = document.getElementById('number');

	        let fileName = year+month;
            self.pic1 = "/images/about/report/"+fileName+"/img1.jpg";
            self.pic2 = "/images/about/report/"+fileName+"/img2.jpg";
            self.mobthpc='/images/about/report/month.png';
            self.yearpc='/images/about/report/'+year+".png";
            imgSrc.src = '/images/about/report/number' + month + '.png';
            if(year==2015){
                self.showyear=false;
                self.showyear1=false;
                self.yearpc='/images/about/report/2017.png';
            }
            if(year==2018&&month==5){
                self.showActivity=false;
                self.showyear1=false;
                console.log(self.showActivity);
                console.log(self.showyear1);
            }
            if(fileName==20182){
                self.showBigEvent=false;
            }
            var figure = document.getElementById('figure'); //业绩数据
            var chartData = echarts.init(figure);
            var zhuce = echarts.init(document.getElementById('figu')); //注册数据
            var userAge = document.getElementById('userAge'); //用户年龄
            var chartAge = echarts.init(userAge);
            var channel = echarts.init(document.getElementById('channel')); //渠道用户
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
                        formatter: function(value) {
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
                            color: function(params) {
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
                        formatter: function(value) {
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
                            color: function(params) {
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
                            color: function(params) {
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
                    selectedMode: false,
                    icon: 'circle',
                    textStyle: {
                        color: function(params) {
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
                    animation: false,
                    minAngle: 2,
                    data: [], //显示数据问题
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        normal: {
                            color: function(params) {
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
            T.ajax({
                url: "/operationReport/getOperationReport.do",
                data: {
                    year: year,
                    month: month
                },
                success: function(data) {
                    self.result = data.map.drOperationReport;
                    self.total = data.map.drOperationReport.cumulativeTurnover * 100
                    self.maxCumulativeInvest = data.map.drOperationReport.drOperationAboutMaxList[0];
                    self.maxOnceInvest = data.map.drOperationReport.drOperationAboutMaxList[1];
                    self.maxInvestFrequency = data.map.drOperationReport.drOperationAboutMaxList[2];
                    self.maxRecommendFrequency = data.map.drOperationReport.drOperationAboutMaxList[3];
                    for (var i = 0; i < data.map.drOperationReport.drOperationProvinceInvestRankList.length; i++) { //业绩数据
                        provinceInvestRankList.push(data.map.drOperationReport.drOperationProvinceInvestRankList[i].region);
                        provinceNumber.push(data.map.drOperationReport.drOperationProvinceInvestRankList[i].proportion)
                    }
                    for (var j = 0; j < data.map.drOperationReport.drOperationProvinceRegisterRankList.length; j++) { //注册数据
                        provinceRegisterRankList.push(data.map.drOperationReport.drOperationProvinceRegisterRankList[j].region);
                        provinceRegisterNumber.push(data.map.drOperationReport.drOperationProvinceRegisterRankList[j].proportion);

                    }
                    for (var k = 0; k < data.map.drOperationInvestClientVOList.length; k++) { //渠道数据
                        drOperationInvestClient.push(data.map.drOperationInvestClientVOList[k].name);
                        drOperationInvestClientNumber.push(data.map.drOperationInvestClientVOList[k].proportion)
                    }
                    for (var w = 0; w < data.map.drOperationReport.drOperationInvestAgeList.length; w++) { //投资用户年龄分析
                        drOperationInvestAge.push(data.map.drOperationReport.drOperationInvestAgeList[w].age);
                        drOperationInvestAgeNumber.push(data.map.drOperationReport.drOperationInvestAgeList[w].proportion)
                    }
                    chartData.setOption({ //业绩数据
                        xAxis: {
                            data: provinceInvestRankList
                        },
                        series: [{
                            data: provinceNumber
                        }]
                    })
                    zhuce.setOption({ //注册数据
                        xAxis: {
                            data: provinceRegisterRankList
                        },
                        series: [{
                            data: provinceRegisterNumber
                        }]
                    })
                    chartAge.setOption({ //用户年龄
                        xAxis: {
                            data: drOperationInvestAge
                        },
                        series: [{
                            data: drOperationInvestAgeNumber
                        }]
                    })
                    channel.setOption({ //渠道用户
                        legend: {
                            data: drOperationInvestClient
                        },
                        series: [{ data: data.map.drOperationInvestClientVOList }]
                    })
                }
            })
        },
        numFormat: function(num) {
            var arr = (num + "").split("");
            arr.reverse();
            var tmp = ""
            for (var i = 1; i <= arr.length; i++) {
                tmp += arr[i - 1]
                if (i % 3 == 0 && i != arr.length) {
                    tmp += ","
                }
            }
            return tmp.split("").reverse().join("")
        }
    }
})
