new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    mounted : function(){
        this.carouselChange();
    },
    methods: {
        carouselChange:function(){
            $(".imgbox").slide({
                mainCell:".box ul",
                autoPlay:true,
                effect: "left",
                titCell: '.ceremony-title ul li',
                titOnClassName: 'current',
                interTime: 2000,
                prevCell: '.prev',
                nextCell: '.next',
                vis: 1,
            });
        }
    }
});


