new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    mounted : function(){
        jQuery(".photo-box").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",trigger:"click"});
        this.setRightTab()
    },
    methods : {
        setRightTab(){
            let li = $('.gallery-thumbs ul li');
            li.each(function(){
                $('.next').click(function(){
                    if(li[0].className=='on'){
                        $('.gallery-thumbs ul').animate({
                            left: 0
                        }, 300, 'swing');
                    }
                    if(li[5].className=='on'){
                        $('.gallery-thumbs ul').animate({
                            left: -180
                        }, 100, 'swing');
                    }
                    if(li[6].className=='on'){
                        $('.gallery-thumbs ul').animate({
                            left: -370
                        }, 100, 'swing');
                    }
                })
            })

        }
    }
});