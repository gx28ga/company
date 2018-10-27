<style lang='sass' scoped>
    @import '../css/global.scss';
    @import '../vendor/all-animation.min.css';
    .modal-mask.show-gift{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/hist.png");
            text-align: center;
            .title{
                width: 100%;
                color: #000;
                position: relative;
                .nav{
                    position: absolute;
                    font-weight: bold;
                }
            }
            .list-area{
                color: #7a1f1f;
                text-align: center;
                .row{}
                .row > div{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .touch-area{
                position: absolute;
                width: 100%;
                z-index: 90;
            }
            .close{
                position: absolute;
                z-index: 100;
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask show-gift">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='701' data-height='789' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='75' data-height='75' data-top='8' data-right='20' @click='onClose'></div>
                </slot>
                <div class="img-size title" data-height="138" data-fontSize="36" data-lineHeight="138">
                    <div v-show="curIndex + 1 < histData.length" class="img-size nav" data-top="0" data-left="167" data-fontSize="30" @click="onNav(1)">＜</div>{{curDate}}排行榜<div v-show="curIndex > 0" class="img-size nav" data-top="0" data-right="167" data-fontSize="30" @click="onNav(-1)">＞</div>
                </div>
                <div class="img-size list-area hist-data" data-marginTop="90" data-marginLeft="15">
                    <div v-for="record in curData.rankList" :key="record.rowNo" class="row img-size" data-fontSize="30" data-lineHeight="60">
                        <div class="img-size" data-width="80">{{record.rowNum}}</div><!--
                     --><div class="img-size" data-width="185">{{record.mobilePhone}}</div><!--
                     --><div class="img-size" data-width="200" data-marginRight="5">{{record.spare1}}</div><!--
                     --><div class="img-size" data-width="175">{{record.gift}}</div>
                    </div>
                </div>
                <div class="img-size touch-area" data-top="135" data-left="0" data-height="430" @touchstart="onTouchStart($event)" @touchend="onTouchEnd($event)"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            histData : Array
        },
        data(){
            return{
                showModal : true,
                waitTime: 500,
                curIndex: 0/*,
                isTransing: false*/
            }
        },
        computed : {
            curData : function () {
                const idx = this.curIndex;
                const len = this.histData.length;
                return len >= 1 && idx < len ? this.histData[idx] : [];
            },
            curDate : function () {
                if (this.curData.length < 1) return '';
                let dt = this.curData.date;
                dt = dt.replace(/^\d+年/, '');
                dt = dt.replace(/^0/, '');
                dt = dt.replace(/月0/,'月');
                return dt;
            }
        },
        mounted(){
            T.setImgSize();
            setTimeout(() => {this.waitTime = 0;}, this.waitTime);
        },
        methods : {
            closePropagtion : function( e ){
                e.stopPropagation();
            },
            showPop : function(callback){
                this.showModal = true;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },
            closePop : function(callback){
                if (this.waitTime > 0) return;
                this.showModal = false;
                T.getPop(callback);
            },
            onClose : function () {
                this.closePop(() => {
                    this.$emit("close-only-event");
                });
            },
            onNav : function (offset) {
//                if (this.isTransing) return;
//                this.isTransing = true;
//                setTimeout(() => {this.isTransing = false;}, 200);
                let idx = this.curIndex + offset;
                if (idx < 0 || idx >= this.histData.length) return;
                this.curIndex = idx;
//                let el = document.querySelector(".hist-data");
//                el.style.display = "none";
//                if (offset > 0) {
//                    el.className = el.className.replace(" flip-right", "");
//                    if (el.className.indexOf(" flip-left") == -1) {
//                        el.className += " flip-left";
//                    }
//                } else if (offset < 0) {
//                    el.className = el.className.replace(" flip-left", "");
//                    if (el.className.indexOf(" flip-right") == -1) {
//                        el.className += " flip-right";
//                    }
//                }
                this.$nextTick(() => {
//                    el.style.display = "block";
                    T.setImgSize();
                });
            },
            onTouchStart : function(evt) {
                this.stPosX = evt.changedTouches[0].clientX;
                this.stPosY = evt.changedTouches[0].clientY;
            },
            onTouchEnd : function(evt) {
                let last = evt.changedTouches.length - 1;
                this.edPosX = evt.changedTouches[last].clientX;
                this.edPosY = evt.changedTouches[last].clientY;
                let lenX = Math.abs(this.edPosX - this.stPosX);
                if(lenX < 10 || Math.abs(this.edPosY - this.stPosY) > lenX) return;
                if (this.edPosX > this.stPosX ) {
                    this.onNav(1);
                } else {
                    this.onNav(-1);
                }
            },
        }
    }
</script>