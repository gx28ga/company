new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    data : function(){
        return{
            isimgL : false,
            isimgR : false
        }
    },
    methods : {
        imgL : function () {
            var self = this;
            self.isimgL = true;
            layui.use('layer', function(){
                self.open1 = layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 1,
                    shadeClose: true,
                    end : function(){
                        self.isimgL = false;
                    },
                    content: $('.img-l')
                });
            })
        },
        imgR : function () {
            var self = this;
            self.isimgR = true;
            layui.use('layer', function(){
                self.open1 = layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 1,
                    shadeClose: true,
                    end : function(){
                        self.isimgR = false;
                    },
                    content: $('.img-r')
                });
            })
        }
    }
});