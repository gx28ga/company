new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    data : function(){
        return{
          map:{},
          isLogin:false,
          bankName:"lalla ",
          islogin:true
        }
    },
    mounted : function(){
        /* this.getInfo();
        T.getUserInfo();*/
        this.getInfo();
        this.userInfo();
        if(location.href.search("zhuceProtocol")>-1){
            document.title="多融财富注册协议";
        }
        if(location.href.search("termsProtocol")>-1){
            document.title="定向委托投资协议";
        }
        if(location.href.search("currentProtocol")>-1){
            document.title="定向委托投资协议";
        }
        if(location.href.search("qyProtocol")>-1){
            document.title="权益转让及受让协议";
        }
        if(location.href.search("entrustProtocol")>-1){
            document.title="委托协议";
            this.getDetail();
        }
        if(location.href.search("transferProtocol")>-1){
            document.title="债权转让协议";
        }
        if(location.href.search("fwProtocol")>-1){
            document.title="多融财富投资服务协议";
        }
    },
    methods:{
        getInfo:function(){
        },
        getNumber:function(){
        },
        userInfo:function(){
            this.isLogin = T.getLocalInfo();
            if(this.isLogin){
                
            }
        },
        getDetail(){
            var self=this;
            var p=T.getidx();
            var index=T.getUrl("idx");
            var obj;
            if(index){
                obj={
                    pid:p.page.rows[index].pid,
                    uid:p.page.rows[index].uid,
                    investId:p.page.rows[index].id,
                }
            }else{
                obj={
                    pid:T.getUrl("pid"),
                    uid:T.getUrl("uid"),
                    investId:T.getUrl("investId")
                }
            }
            T.ajax({
                url:"/http_entrust",
                data:obj,
                success : function(data) {
                    self.map = data.map;
                }
            });
        }
    }
});
