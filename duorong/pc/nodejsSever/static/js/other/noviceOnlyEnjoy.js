new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    data : function() {
        return {
            isLogin :false,
            id : '',
            pid : '',
            canCurrent :false,
            canNewHand :false
        }
    },
    mounted : function(){
        if(localStorage.getItem('user')!=''&&localStorage.getItem('user')!=undefined){
            this.isLogin = true;
            this.userInfo();
            this.newHand();
        }else{
            this.isLogin = false;
            $('.current').addClass('on');
            $('.time').addClass('on');
        }
    },
    methods : {
        userInfo (){
            const self = this;
            T.ajax({
                url: "../v1/current/product/info.do",
                data:{},
                success: function ( data ) {
                    if(data.map.currentInfo.isInvested==0&&data.map.currentInfo.isPurchased==0){
                        self.canCurrent = true;
                        $('.current').addClass('on');
                    }else{
                        self.canCurrent = false;
                        $('.current').addClass('off');
                    }
                }
            });
        },
        newHand(){
            const self = this;
            T.ajax({
                url:"/indexProduct",
                data : {},
                success : function( data) {
                    self.pid = data.map.rookieList[0].id;
                    T.ajax({
                        url:"/detail",
                        data : {id : self.pid},
                        success : function( data) {
                            if(data.success==true){
                                if(data.map.newHands==true){
                                    self.canNewHand = true;
                                    $('.time').addClass('on');
                                }else{
                                    self.canNewHand = false;
                                    $('.time').addClass('off');
                                }
                            }
                        }
                    });
                }
            });
        },
        clickCurrent (){
            const self = this;
            if(self.isLogin==true&&self.canCurrent==true){
                window.location.href = "http://www.duorongcf.com/billDetail/newhand.html";
            }else{
                T.go.login();
            }
        },
        clickNewHand (){
            const self = this;
            if(self.isLogin==true&&self.canNewHand==true){
                window.location.href = "http://www.duorongcf.com/dq";
            }else{
                T.go.login();
            }
        }
    }
});