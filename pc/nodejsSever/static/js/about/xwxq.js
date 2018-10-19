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
        newsTitle:"",
        newsContent:"",
        t:"",
        linkUrl:null
    },
    mounted: function() {
         var self=this;
        this.setDefault();
        this.setdz();
        this.geturlcon();
         T.getScript('/js/about/geturl.json.js',function(){
            try{
                self.linkUrl = result.url;
            }catch(e){}
        });
    },
    methods: {
        setdz: function() {
            var url = document.location.href;
            var name = url.substr(url.length - 16);
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
        geturlcon:function(){//获取路由
            var self=this;
            self.t=T.getUrl("t");
            if(self.t==0){
                self.tag.NEWS=true;
            }else if(self.t==1){
                self.tag.GSDT=true;
            }

        },
       /* goback:function(){
           var self=this;
            self.t=T.getUrl("t");
            if(self.t==0){
               window.location.href='/about/NEWS.html'
            }else if(self.t==1){
                window.location.href='/about/GSDT.html'
            }
        },*/
    }
})
