new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    data : function(){
        return{
            ischat:false,
            open1:0
        }
    },
    methods:{
        chat(){
            const self = this;
            self.ischat = true;
            layui.use('layer', function(){
                self.open1 = layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 0,
                    shadeClose: true,
                    end : function(){
                        self.ischat = false;
                        $('#chat').style.display="none";
                    },
                    content: $('#chat')
                });
            })
        }
    }
});
