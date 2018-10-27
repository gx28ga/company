/**
* 滚动功能
* created by bo.peng 2018/4/16
* email:spion@qq.com
*/
<style scoped>
    #ScrollContent{
        position: relative;
        z-index: 2;
    }
    .scroll-box{
        position: absolute;
        z-index: 1;
        left:0;
        top:0;
        bottom: 0;
        width:100%;
        .top-arrow-size{
            .top-arrow{
                display:flex;
                justify-content:center;
                align-items:center;
                width:100%; height:50px;
                margin-top: -50px;
                overflow:hidden;
                .text {
                    text-align:center;
                    p{
                        padding-left:10px;
                        font-size:.75rem;
                    }
                    time{
                        font-size:10px;
                        color:#7b7d9a;
                    }
                }
            }
        }
        i{
            &.i-icon{
                display:block;
                width:32px;
                height:32px;
                background-position:center center;
                background-repeat:no-repeat;
                background-size:22px auto;
                transition-duration:.3s;
            }
            &.i-arrow{
                background-image:url("../../images/common/jian.png");
                &.hover{
                    -webkit-transform:rotate(180deg);
                }
            }
            &.i-loading{ background-image:url("../../images/common/loading.gif"); }
        }
        .scroll{
            position:absolute;
            z-index:9;
            width:100%;
        }
    }
    .footer-arrow-size{
        position:absolute;
        left:0;
        bottom:-55px;
        width:100%;
        height:55px;
        text-align:center;
        z-index:9;
        display:none;
        i{
            &.i-loading {
                width:35px; height:35px; margin:5px auto;
                background-size:35px auto;
            }
        }
    }
</style>
<template>
    <div id="ScrollContent">
        <article class="scroll-box">
            <div class="scroll">
                <div class="top-arrow-size">
                    <div class="top-arrow">
                        <i class="i-icon i-arrow"></i>
                        <div class="text">
                            <p>松开刷新数据</p>
                            <time>{{updateTime}}</time>
                        </div>
                    </div>
                </div>
                <slot></slot>
                <div class="footer-arrow-size">
                    <i class="i-loading i-icon"></i>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    import ScrollLoad from "../../middle/scrollLoading";
    import {PRODUCT_UPDATE_TIME} from "../../contant/SESSIONSTORAGE";
	export default {
	    name : "scrolling",
        data(){
	        return{
	            updateTime : ""
            }
        },
        deactivated(){
	        if(this.$route.name==="scrolling"){
	           //
            }else{
                this.$destroy()
            }
        },
	    mounted(){
	        this.getUpdateTime();
	        this.init();
        },
        methods:{
            init() {
                let self = this;
                let myScroll = new ScrollLoad($('.scroll-box'));
                myScroll.loadFooterData = function () {
                    self.$emit("load",()=>{
                        setTimeout(function () {
                            myScroll.refresh();
                            self.getUpdateTime(true);
                        }, 1000);
                    });
                };
                myScroll.loadTopData = function () {
                    self.$emit("update",()=>{
                        setTimeout(function () {
                            myScroll.refresh();
                            myScroll.start();
                            myScroll.restart();
                            self.getUpdateTime(true);
                        }, 1000)
                    });
                };
            },
            getUpdateTime(bool){
                let time = T.getSession(PRODUCT_UPDATE_TIME);
                if(!time || bool===true){
                    time = new Date().getTime();
                    T.setSession(PRODUCT_UPDATE_TIME,time);
                }
                let nowTime = new Date(),
                    year = nowTime.getFullYear(),
                    month = nowTime.getMonth()+1,
                    day = nowTime.getDate(),
                    updateTime = new Date(time).Format("yyyy-MM-dd hh:mm");
                month = month>9?month:("0"+month);
                if((year+"-"+month+"-"+day) === updateTime.substr(0,10)){
                    this.updateTime = "今日"+updateTime.substr(5,5);
                }else{
                    this.updateTime = updateTime.substr(5,5);
                }
            }
        }
	}
</script>
