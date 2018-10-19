new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    mounted : function(){
        this.onGetFocus(0);
    },
    methods : {
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