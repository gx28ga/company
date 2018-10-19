new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    mounted : function(){
        this.carouselChange();
    },
    methods: {
        carouselChange:function(){
            $(".slideBox").slide({
                mainCell:".bd ul",
                autoPlay:true,
                prevCell: '.left-btn',
                nextCell: '.right-btn'
            });
            $(".zoufangcon").slide({
                mainCell:".bg ul",
                autoPlay:true,
                prevCell: '.zouleft',
                nextCell: '.zouright',
                titCell:".hb li"
            });
            $(".sevenright").slide({
                mainCell:".sevenimg ul",
                autoPlay:true,
                prevCell: '.sevenleftbtn',
                nextCell: '.sevenrightbtn'
            });
        }
    }
});


