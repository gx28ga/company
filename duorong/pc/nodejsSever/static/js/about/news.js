var app = new Vue({
    el: '#APP',
    delimiters: ['${', '}'],
    data: {
        tag: {
            DRGK: false,
            AQBZ: false,
            YYBG: false,
            NEWS: false,
            GSDT: false,
            LXWM: false
        },
        newsResult: [],
        page: 1,
        total:0,
        linkUrl:null,

    },
    mounted: function() {
        this.setDefault();
        this.setdz();
        this.getNews();
         var self=this;
         T.getScript('/js/about/geturl.json.js',function(){
            try{
                self.linkUrl = result.url;
            }catch(e){}
        });
    },
    methods: {
        setdz: function() {
            var url = document.location.href;
            var name = url.substr(url.length - 9);
            var name2 = name.substr(0, 4);
            this.setTag(name2);
        },
        setTag: function(name) {
            var self = this;
            $.each(this.tag, function(key, val) {
                self.tag[key] = false;
            });
            self.tag[name] = true;
        },
        setDefault: function() {
            var url = document.location.href;
            if (url.indexOf("about") > -1) {
                if (url.indexOf("guarantee") > -1) {
                    T.setNavCurrent("anqun")
                } else {
                    T.setNavCurrent('about');
                }
            }
        },
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
            if(localStorage.getItem("gsdt")==undefined){

            }else{
              this.page=localStorage.getItem("gsdt");  
            }
            this.newsContent({
                "pageOn": this.page,
                "pageSize": "10",
                "proId": "2"
            })
            localStorage.removeItem("gsdt");
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
                    layout: ['prev', 'page', 'next','count'],
                    jump: function(_obj, first) {
                        //首次不执行
                        if (!first) {
                            self.page = _obj.curr;
                            obj.pageOn = self.page;
                            self.newsContent(obj);
                            localStorage.setItem("gsdt",self.page);
                        }
                    }
                });

            });
        }
    }
})
