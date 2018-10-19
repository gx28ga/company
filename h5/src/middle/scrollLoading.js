/**
 * 滚动事件
 * created by bo.peng 2018/4/16
 * email:spion@qq.com
 */
import IScroll from "../../static/plug/iscroll-probe";
export default class ScrollLoad{
    constructor( warpper ){
        this.warpper = $(warpper);
        let top = this.warpper.find('.top-arrow-size') ,
            footer = this.warpper.find('.footer-arrow-size');
        footer.show();
        this.top = {
            el : top ,
            height : top.height() ,
            arrow : top.find('.i-arrow'),
            reftext : top.find('.text p'),
            time : top.find('.top-arrow .text time')
        };
        this.footer = {
            el : footer,
            height : footer.height(),
            hide(){
                footer.hide();
            },
            show(){
                footer.show();
            }
        };
        footer.hide();
        this.isRefresh  = false;
        this.init();
    }
    init(){
        let self = this ,
            ScrollContent = $("#ScrollContent");
        ScrollContent.height(ScrollContent.parent().height());
        let myScroll = new IScroll(this.warpper[0], {
            probeType : 2,
            flick : true,
            click : true,
            startY : 0,
            scrollbars: true,
            //startY: -this.top.height,
        },'.scroll-box');
        myScroll.on("scrollStart",function(){
            self.arrowLoading();
            self.maxY = null;
        });
        myScroll.on("scroll",function(){
            if (this.y > self.top.height) {  //头部加载
                self.showArrowUp();
                self.isRefresh = true;
                this.minScrollY = self.top.height;
                this.startY = self.top.height*2;
            } else {
                self.showArrowDown();
                self.isRefresh = false;
                this.minScrollY = 0;
            }
            if ((this.y - self.footer.height) < (this.maxScrollY - 5)) { //底部加载
                self.footer.show();
                self.loadingFooter = true;
                if(!self.maxY){
                    self.maxY = this.maxScrollY - self.footer.height;
                }
                this.maxScrollY = self.maxY;
            } else {
                self.footer.hide();
                self.loadingFooter = false;
            }
            VueParent.$emit("scroll",this);
        });
        myScroll.on("scrollEnd",function(){
            if (self.isRefresh) {
                self.isRefresh = false;
                self.start();
                self.loadTopData();
            } else if (self.loadingFooter) {
                self.maxY = null;
                self.loadFooterData();
            } else {
                //self.moveTop(0);
            }
            VueParent.$emit("scroll",this);
        });
        myScroll.on("refresh",function(){
            //
        });
        self.myScroll = myScroll;
        self.height = self.myScroll.wrapper.scrollHeight-self.myScroll.wrapper.offsetHeight;
    }
    restart(){
        this.myScroll.scrollBy(0,-this.top.height,500);
    }
    start(){ //更新加载时间
        this.top.arrow.removeClass('i-arrow').addClass('i-loading');
        this.top.reftext.text('正在加载数据');
        this.top.time.text("");
    }
    showArrowUp(){
        this.top.arrow.addClass('hover');
    }
    showArrowDown(){
        this.top.arrow.removeClass('hover');
    }
    arrowLoading(){
        this.top.arrow.removeClass('i-loading').addClass('i-arrow');
        this.top.reftext.text('松开刷新数据');
    }
    moveFooter( y ){
        let scroll = this;
        scroll.footer.css({transitionDuration:'.2s'});
        scroll.footer.css({transform:'translate(0px, '+y+'px) translateZ(0px)'});
        if(y<=1){
            setTimeout(function(){
                scroll.footer.css({transitionDuration:'0s'});
            },210)
        };
    }
    refresh(){
        this.myScroll.refresh();
    }
}
