var app = new Vue({
    el: '#APP',
    delimiters: ['${', '}'],
    data: {
        linkUrl:null
    },
    mounted: function() {
        var self = this;
        this.honorLink();
        this.animateCilck();
         T.getScript('/js/about/geturl.json.js',function(){
            try{
                self.linkUrl = result.url;
            }catch(e){}
        });
    },
    methods: {
        honorLink: function() { //公司荣誉合作单位
            $(".staff-box").slide({
                mainCell: ".staffimg ul",
                autoPage: true,
                effect: "left",
                autoPlay: true,
                vis: 3,
                prevCell: '.left-btn',
                nextCell: '.right-btn'
            });
            $(".honor").slide({
                mainCell: ".honorimg ul",
                autoPage: true,
                effect: "left",
                autoPlay: true,
                vis: 3,
                prevCell: '.left-btn',
                nextCell: '.right-btn'
            });
            $(".partner").slide({
                mainCell: ".partnerimg ul",
                autoPage: true,
                effect: "left",
                autoPlay: true,
                vis: 5,
                prevCell: '.left-btn',
                nextCell: '.right-btn'
            });
        },
        animateCilck: function() { //添加动画
            $("#beijing").click(function() {
                $("html,body").animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            })
            $("#beijing2").click(function() {
                $("html,body").animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            })
            $("#beijing3").click(function() {
                $("html,body").animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            })
            $("#beijing4").click(function() {
                $("html,body").animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            })
            $("#beijing5").click(function() {
                $("html,body").animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            })
            $("#beijing6").click(function() {
                $("html,body").animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            })
            $("#beijing7").click(function() {
                $("html,body").animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            })
           /*  $(".xy").hide();
            $('#xy').click(function() {
                $(".xy").show();
            })
            $('.xy').click(function() {
                $(".xy").hide();
            })*/
        }
    }
})
