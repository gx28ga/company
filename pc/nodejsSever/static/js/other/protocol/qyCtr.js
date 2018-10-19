new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    data : function(){
        return {
            map : {}, //所有数据
            btnName : '立即投资',
            bankName:"",
            pid:"",
            uid:"",
            investId:'',
            rule:"",
            data:""
        }
    },
    mounted : function(){
         this.getDetail();
        document.title="权益转让及受让协议";
    },
    watch : {
    },
    filters : {
        isNumber2(n){
            return T.isNumber2(n);
        }
    },
    methods : {
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
                url:"/agreement/product.do",
                data:obj,
                success : function(data) {
                    self.map = data.map;
                }
            });
        }
    }
});

