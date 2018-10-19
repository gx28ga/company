new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    data : function(){
        return{
            islogin : false,
            http : window.location.origin
        }
    },
    mounted : function(){
        this.islogin = T.getLocalInfo();
    },
    methods : {
        loginReturn(){
            const self = this;
            if (self.islogin) {
                window.location.href=self.http+"/main/myAccount/myFriend";
            } else {
                window.location.href=self.http+"/dl";
            }
        },
        goMonth(){
            const self = this;
            if (self.islogin) {
                localStorage.setItem('biaozhi',4);
                setTimeout(function(){
                    window.location.href=self.http+"/main/myAccount/myFriend";
                },1000)
            } else {
                window.location.href=self.http+"/dl";
            }
        },
        goTask(){
            const self = this;
            if (self.islogin) {
                localStorage.setItem('biaozhi',3);
                setTimeout(function(){
                    window.location.href=self.http+"/main/myAccount/myFriend";
                },1000)
            } else {
                window.location.href=self.http+"/dl";
            }
        }
    }
});