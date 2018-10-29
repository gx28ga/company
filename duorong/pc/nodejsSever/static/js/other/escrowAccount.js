new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    data : function(){
        return{
            isLiucheng : false,
            isLiucheng2 : false,
            open1 : 0,
            open2 : 0
        }
    },
    mounted : function(){
        this.onGetFocus(0);
        jQuery(".slideBox").slide({
            mainCell:".bd ul",
            trigger:"click"
        });
        jQuery(".slideBox2").slide({
            mainCell:".bd ul",
            trigger:"click"
        });
        jQuery(".slideBox3").slide({
            mainCell:".bd ul",
            trigger:"click"
        });
    },
    methods : {
        onShowTradeProcess : function () {//了解存管下资金交易流程点击   弹框
            var self = this;
            self.isLiucheng = true;
            layui.use('layer', function(){
                self.open1 = layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 0,
                    shadeClose: true,
                    end : function(){
                        self.isLiucheng = false;
                    },
                    content: $('#isLiucheng')
                });
            })
        },
        onShowWhyHuairuiBank : function() {//为什么选择华瑞银行点击  弹框
            var self = this;
            self.isLiucheng2 = true;
            layui.use('layer', function(){
                self.open2 = layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 0,
                    shadeClose: true,
                    end : function(){
                        self.isLiucheng2 = false;
                    },
                    content: $('#isLiucheng2')
                });
            })
        },
        closeLC1 : function(){
            var self = this;
            layui.use('layer', function() {
                layer.close(self.open1);
            });
        },
        closeLC2 : function(){
            var self = this;
            layui.use('layer', function() {
                layer.close(self.open2);
            });
        },
        onGetFocus : function (index) {//更多关于银行存管   栏目切换
            var tabs = $(".tab-item");
            var contents = $(".qa");
            for (var i = 0; i < contents.length; i++){
                tabs[i].style.color = "#999";
                contents[i].style.display = "none";
            }
            document.getElementsByClassName("tab-item t" + index)[0].style.color = "#E8A22B";
            document.getElementsByClassName("qa t" + index)[0].style.display = "block";
        }
     }
});