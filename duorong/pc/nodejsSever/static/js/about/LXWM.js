var app = new Vue({
    el: '#APP',
    delimiters: ['${', '}'],
    data: {
        linkUrl:null
    },
    mounted:function(){
        var self=this;
          T.getScript('/js/about/geturl.json.js',function(){
            try{
                self.linkUrl = result.url;
            }catch(e){}
        });
    },
    methods : {
    }
})
