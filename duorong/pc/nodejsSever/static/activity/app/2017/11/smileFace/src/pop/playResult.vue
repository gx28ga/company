<style lang='sass'>
    @import "../css/pop-transition.scss";
    @import '../css/global.scss';
    .modal-mask.play-result{
        .modal-container.pop-cnt{
            position: relative;
            background: #5C0399;
            color: #FFF;
        }
        .section{
            width: 100%;
            text-align: center;
            position: relative;
            .col{
                display: inline-block;
                vertical-align: middle;
            }
            .col.bigFace{
                @include contain("../images/f0.png");
            }
            .col.goldFace{
                @include contain("../images/f0-gold.png");
            }
            .col.smallFace{
                @include contain("../images/smile-face.png");
                background-position: center;
            }
            .btn{
                @extend .col;
            }
            .btn.play-again, .btn.invest{
                background-color: #F44180;
            }
            .btn.end-game{
                background-color: #7535AD;
                border: 2px solid rgb(122, 15, 148);
            }
        }
        .section.msg{
            color: #FAC51F;
        }
        .msg-wrapper{
            .msg{
                display: inline-block;
                color: #666;
                vertical-align: middle;
            }
            .msg.center{
                text-align: center;
            }
        }
        .msg-wrapper::after{
            content: '';
            height: 100%;
            width: 0;
            display: inline-block;
            vertical-align: middle;
        }
        .close{
            color: #FFF;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask play-result">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='490' data-height='390' data-borderRadius="15" @click='closePropagtion($event)'>
                <slot name="close">
                    <div v-show="popState == 1" class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'>&otimes;</div>
                </slot>
                <template v-if="popState == 0">
                    <!--<div class="section img-size" data-height="104" data-fontSize="30" data-lineHeight="100">本轮成绩</div>-->
                    <div class="section img-size" data-top="10" data-height="64" data-fontSize="30" data-lineHeight="60">本轮成绩</div>
                    <div class="section img-size" data-height="64" data-fontSize="24" data-lineHeight="60">{{overComment}}</div>
                    <div class="section img-size" data-height="87"><!--
                   --><div class="col img-size" :class="{true: 'goldFace', false: 'bigFace'}[investEnough]" data-width="87" data-height="87"></div><!--
                   --><span class="img-size" data-marginLeft="36" data-fontSize="60" data-lineHeight="87">&times; {{roundScore}}</span><!--
                 --></div>
                    <div class="section img-size" data-height="80"><!--
                   --><span class="img-size" data-fontSize="24" data-lineHeight="80">已累计获得</span>
                      <div class="col smallFace img-size" data-width="40" data-height="80"></div>
                      <span class="img-size" data-fontSize="24" data-lineHeight="80">&times; {{score}}</span><!--
                 --></div>
                    <div class="section"><!--
                   --><div class="btn play-again img-size" data-borderRadius="10" data-width="170" data-height="50" data-fontSize="24" data-lineHeight="50" @click="onPlayAgain">再来一次</div><!--
                   --><div class="btn end-game img-size" data-borderRadius="10" data-marginLeft="40" data-width="170" data-height="46" data-fontSize="24" data-lineHeight="50" @click="closePop">不玩了</div><!--
                 --></div>
                </template>
                <template v-if="popState == 1">
                    <div class="section msg img-size" data-top="50" data-height="270" data-fontSize="30" data-lineHeight="200">{{msg}}</div>
                    <div class="section img-size">
                        <div class="btn invest img-size" data-borderRadius="10" data-width="250" data-height="50" data-fontSize="24" data-lineHeight="50" @click="onInvest">立即投资</div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popState : Number,
            chanceNum : Number,  //剩余机会
            investEnough : Boolean,
            score: Number,
            roundScore: Number,
            overType: Number
        },
        data(){
            return{
                showModal : true,
                waitTime: 500
            }
        },
        computed : {
            msg : function () {
                if (this.popState == 1) {
                    return '您的机会用完了，请投资获取';
                }
            },
            overComment : function () {
                let tp = this.overType;
                let cmt = '';
                if (tp === 0) {cmt = '您已经通关了，真是神一般的手速！';}
                else if (tp === 1) {cmt = '点错了哟，游戏结束！';}
                else if (tp === 2) {cmt = '漏掉了一个哟，游戏结束！';}
                return cmt;
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
                if (this.parent) {
                    this.parent.isOnBusy = false;
                }
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onPlayAgain: function () {
                if (this.waitTime > 0 ) return;
                if (this.chanceNum <= 0) {
                    this.popState = 1;
                    setTimeout(() => {T.setImgSize();}, 10);
                } else {
                    window.location.reload();
                }
            },
            onInvest : function () {
                T.callApp.investment();
            }
        }
    }
</script>