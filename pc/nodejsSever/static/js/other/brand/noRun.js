/**
 * describe
 * Created by wangCuiqing
 * Date: 2018/6/27
 */
new Vue({
    el : '#APP',
    delimiters: ['${', '}'],
    mounted : function(){
        this.carouselChange();
    },
    methods: {
        carouselChange:function(){
            $(".xinshengBox").slide({
                mainCell:".xinshengContent ul",
                autoPlay:true,
                effect: "left",
                interTime: 2000,
                prevCell: '.leftBtn',
                nextCell: '.rightBtn',
                vis: 1,
            });
        }
    }
});