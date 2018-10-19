var app = new Vue({
    el: '#APP',
    delimiters: ['${', '}'],
    data: {

        isLogin : T.isLogin,
        userInfo : T.userInfo,

        banner : [],
        summaryContents : null, //公告
        investList : null,//最新投资用户

        //咨询相关
        show_servertan : false, //咨询
        consultationIndex : 0,
        show_servertan_sucesse : false,//咨询成功
        contactName : '', //咨询人名称
        contactTel : '',//咨询 人电话
        contactMsg : '', //咨询提示
        //end 咨询相关

        //新闻相关
        isnew : false,//新闻栏目切换
        isnotice : true,//新闻栏目切换
        news : null,
        newsList : null,
        newsliderImg : null, //图片幻灯片
        notice : null,

        //end新闻相关
         linkUrl:null,//运营报告链接
    },
    mounted:function(){
        var self = this;
        T.setNavCurrent('home');
        bus.$on('userInfo',function(obj){
            self.isLogin = obj.isLogin;
            self.userInfo = obj.userInfo;
        })


        this.getUserInfo();
        //banner
        T.ajax({
            url : '/banner',
            callback : true,
            success : function( _data ){
                self.banner = _data.map.banner;
                self.$nextTick(function(){
                    $('#Slideshow').slide({
                        mainCell: "#Slideshow .swiper-img",
                        titCell: '#Slideshow .pagina ul li',
                        effect: "fold",
                        titOnClassName: 'current',
                        interTime: 3000,
                        autoPlay: true
                    });
                })
            }
        });
        //运营报告链接
         T.getScript('/js/about/geturl.json.js',function(){
            try{
                self.linkUrl = result.url;
            }catch(e){}
        });
        //公告等
        T.getScript('/js/home/news.json.js',function(){
            try{
                self.newsliderImg = result;
            }catch(e){}
        });
        T.ajax({
            url : '/indexArticle',
            callback : true,
            success : function( _data ){
                try{
                    self.summaryContents = _data.map.urgentNotice[0].summaryContents;
                    self.summaryTime = _data.map.urgentNotice[0].create_time;
                }catch(e){}
                self.newsList = _data.map.newsList;
                self.news = _data.map.news;
                self.notice = _data.map.notice;
                self.$nextTick(function(){
                    self.newsimg();
                    self.newsTab();
                });
            }
        });
        //最新投资用户
        T.ajax({
            url : '/indexInvestLogs',
            callback : true,
            success : function( _data ){
                var arr = [] , arr1 = [];
                $.each(_data.map.page.rows,function(i){
                    arr1.push(this);
                    if((i+1)%1==0){
                        arr.push(arr1);
                        arr1 = [];
                    }
                });
                self.investList = arr;
                self.$nextTick(function(){
                    $('.funds').slide({
                        mainCell:".options",
                        effect:"topLoop",
                        interTime : 3000,
                        autoPlay:true
                    });
                })
            }
        });

        this.linkEvent();
        this.highcharts();
        this.tips();
        this.rightMenu();
    },
    filters : {
        format_number : function(n){
            return T.format_number(n);
        },
        format_date : function( val ){
            return new Date(val).Format('yyyy-MM-dd hh:mm')
        }
    },
    methods : {
        login : T.go.login,
        reg : T.go.reg,
        goTop : function(){
            T.goTop();
        },
        getUserInfo : function(){
            T.getUserInfo();
        },
	    detail : function( item ){
		    window.location.href = '/billDetail/billDetal_html_'+item.id+'.html';
	    },
        pjdetail : function( item ){
            window.location.href = '/billDetail/pjDetal_html_'+item.id+'.html';
        },
        newsimg : function(){ //新闻左侧-图片轮播
            $(".newslider").slide({
                mainCell:".newsimg ul",
                titCell : '.imgspagina ul li',
                effect:"leftLoop",
                interTime : 3000,
                autoPlay:true
            });
        },
        newsTab : function(){//新闻和动态的切换
            var self = this;
            $("#newBox").slide({
                mainCell:".tablist .options",
                titCell : '.tabtitle li',
                titOnClassName : 'current',
                effect:"left",
                trigger:"click",
                endFun : function( i ){
                    if(i==0){
                        self.isnotice = true;
                        self.isnew = false;
                    }else{
                        self.isnotice = false;
                        self.isnew = true;
                    }
                },
                autoPlay:false
            });
        },
        rightMenu : function(){
            var $window = $(window),
                $up = $('.float-window .up');

            $up.hide();
            $window.on('scroll', function() {
                var winHeight = $window.height(),
                    scrollTop = $window.scrollTop();
                if(scrollTop > winHeight/2) {
                    $up.show();
                    // $timeout(function(){ //用户心声部分
                    //  $user.animate({width: 398}, 1000);
                    // },500)
                } else {
                    $up.hide();
                }
            });
        },
        exit : function(){
          T.exit();
        },
        consultation : function(){//咨询
            var self = this;
            this.show_servertan = true;
            layui.use('layer', function(){
                self.consultationIndex = layer.open({
                    type: 1,
                    title: false,
                    closeBtn : 0,
                    shadeClose : true,
                    end : function(){
                        self.show_servertan = false;
                    },
                    content: $('#servertan')
                });
            });
        },
        consultation_sucess : function(){
            var self = this;
            this.show_servertan_sucesse = true;
            layui.use('layer', function(){
                self.consultationIndex = layer.open({
                    type: 1,
                    title: false,
                    closeBtn : 0,
                    shadeClose : true,
                    end : function(){
                        self.show_servertan_sucesse = false;
                    },
                    content: $('#servertan_success')
                });
            });
        },
        servertanClose : function(){
            var self = this;
            layui.use('layer', function() {
                layer.close(self.consultationIndex);
            });
        },
        servertanEvent : function(){ //提交咨询
            var self = this ,
                contactName = this.contactName,
                contactTel = this.contactTel;
            if(contactName.search(/^([A-Za-z\u0391-\uFFE5]){2,20}$/)<0){
                return this.contactMsg = "请填写您的姓名";
            }
            if(contactTel.search(/^1[3|4|5|7|8][0-9]{9}$/)<0){
                return this.contactMsg = "请填写正确的手机号码";
            }
            if(!this.servertanEventClick){
                this.servertanEventClick = true;
                T.ajax({
                    url : '/index/customerInquiry.do',
                    callback : true,
                    data : {
                        realName : contactName,
                        mobilephone : contactTel,
                    },
                    success : function( _data ){
                        if(_data.success){
                            self.servertanClose();
                            self.consultation_sucess();
                        }
                        self.servertanEventClick = false;
                    }
                });
            }
        },
        linkEvent : function(){ //友情链接
            $(".cooperation").slide({
                mainCell:".coopimg ul",autoPage:true,effect:"left",autoPlay:true,vis:6,prevCell : '.left-btn',
                nextCell : '.right-btn'
            });
        },
        tips : function(){
            layui.use('layer', function(){
                var layer = layui.layer ,
                    index;
                $('.tag-tips').each(function(){
                    $(this).mouseover(function(){
                        $(this).addClass('currentTips');
                        index = layer.tips($(this).attr('data-tips'), '.currentTips', {
                            tips: 1,
                            skin: 'tips',
                            time : 0,
                        });
                    }).mouseleave(function(){
                        layer.close(index);
                        $(this).removeClass('currentTips');
                    })
                });
            });
        },
        setHeicharts : function( id , pert ){
            new Highcharts.chart(id, {
                colors: ['#fa9c21', '#edeeeb'],
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false,
                    spacingBottom: 5
                },
                title: {
                    text: ''
                },
                credits: {
                    text: ''
                },
                tooltip: {
                    enabled: false
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%']
                    }
                },
                series: [{
                    states: {
                        hover: {
                            halo: {
                                size: 0,
                                attributes: {
                                    'stroke-width': 0
                                }
                            }
                        }
                    },
                    type: 'pie',
                    innerSize: '88%',
                    data: [
                        ['已募集', pert],
                        ['剩余可投', 100 - pert], {
                            name: 'Proprietary or Undetectable',
                            y: 0.2,
                            dataLabels: {
                                enabled: false
                            }
                        }
                    ]
                }]
            });
        },
        newVip : function(){/*新手专享*/
            rookieList.length && this.setHeicharts(hcircle6,rookieList[0].pert)
        },
        fixedterm : function(){/*定期列表*/
            var self = this,
                fixedterm1 = document.getElementById('fixedterm1');
            if(fixedterm1&&termHot.length){
                this.setHeicharts(fixedterm1,termHot[0].pert)
            };
            $.each(termList,function( i , arr ){
                var fixedterms = document.getElementById('fixedterms'+(i+1));
                if(fixedterms){
                    self.setHeicharts('fixedterms'+(i+1),arr.pert)
                };
            });
        },
        p2pHoterr : function(){/*p2p热推*/
            var self = this,
                p2pHot1 = document.getElementById('p2pHot1');
            if(p2pHot1 && p2pHot.length){
                this.setHeicharts(p2pHot1,p2pHot[0].pert)
            };

            $.each(p2pList,function( i , arr ){
                var p2pList = document.getElementById('p2pList'+(i+1));
                if(p2pList){
                    self.setHeicharts('p2pList'+(i+1),arr.pert)
                };
            });
        },
        highcharts : function(){ //图表
            this.newVip();
            this.fixedterm();
            this.p2pHoterr();
        }
    }
})
