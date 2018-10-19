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
                titCell: '.page ul li',
                effect: "fold",
                titOnClassName: 'current',
                interTime: 3000,
            });
        }
    }
});


