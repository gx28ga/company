var app = new Vue({
    el: '#APP',
    delimiters: ['${', '}'],
    data: {
        // tag: {
        //     DRGK: false,
        //     AQBZ: false,
        //     YYBG: false,
        //     NEWS: false,
        //     GSDT: false,
        //     LXWM: false
        // },
        newsResult: [],
        page: 1,
        total:0,
        linkUrl:null,

    },
    mounted: function() {
        this.getNews();
         var self=this;
          T.getScript('/js/about/geturl.json.js',function(){
            try{
                self.linkUrl = result.url;
            }catch(e){}
        });
    },
    methods: {
        newsContent: function(obj) {
            const self = this;
            T.ajax({
                url: "/newsInformationList",
                data: obj,
                success: function(data) {
                    self.newsResult = data.map.page.rows;
                    self.total=data.map.page.total;
                    self.pageChange(obj);
                }
            })
        },
        getNews: function() {
             if(localStorage.getItem("url")==undefined){
            }else{
              this.page=localStorage.getItem("url");  
            }
            this.newsContent({
                "pageOn": this.page,
                "pageSize": "10",
                "proId": "1"
            })
        },
        pageChange: function(obj) {
            var self = this;
            layui.use(['laypage', 'layer'], function() {
                var laypage = layui.laypage;
                laypage.render({
                    elem: 'Page',
                    limit: 10,
                    curr: self.page,
                    count: self.total,
                    layout: ['prev', 'page', 'next', 'count'],
                    jump: function(_obj, first) {
                        //首次不执行
                        if (!first) {
                            self.page = _obj.curr;
                            obj.pageOn = self.page;
                            self.newsContent(obj);
                            localStorage.setItem("url",self.page);
                        }
                    }
                });
            });
        },
    }
})
