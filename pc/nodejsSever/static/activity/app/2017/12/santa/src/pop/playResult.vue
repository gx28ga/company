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
            .col{
                display: inline-block;
                vertical-align: middle;
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
            width: 100%;
            text-align: center;
            color: #FAC51F;
        }
        .msg-wrapper > div{
            display: inline-block;
            vertical-align: middle;
            width: 100%;
        }
        .msg-wrapper::after{
            content: '';
            height: 100%;
            width: 0;
            display: inline-block;
            vertical-align: middle;
        }
        .modal-container.success{
            @include contain("../images/round-result.png");
            position: relative;
            .gift-section, .link, .btn-area{
                position: absolute;
            }
            .gift-section{
                width: 100%;
                text-align: center;
                color: #E02023;
                div{
                    display: inline-block;
                    vertical-align: bottom;
                }
                .small-box{
                    @include contain("../images/small-box.png");
                }
            }
            .btn-area{
                width: 100%;
                div{
                    display: inline-block;
                    width: 50%;
                    height: 100%;
                }
            }
        }
        .modal-container.no-score{
            position: relative;
            @include contain("../images/no-score.png");
            .play-again, .reason{
                position: absolute;
            }
            .reason{
                width: 100%;
                text-align: center;
                div{
                    display: inline-block;
                }
                .timeout{
                    @include contain("../images/timeout.png");
                }
                .fault{
                    @include contain("../images/fault.png");
                }
            }
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
            <!--<div v-show="popState == 0" class="modal-container success img-size" data-width="500" data-height="395" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'></div>
                </slot>
                <div class="gift-section img-size" data-top="90">
                    <div class="small-box img-size" data-width="107" data-height="95" data-marginRight="25"></div>
                    <div class="img-size" data-fontSize="48" data-lineHeight="72">&times; {{roundScore}}</div>
                </div>
                <div class="link img-size" data-top="220" data-left="170" data-width="158" data-height="32" @click="onGoMy"></div>
                <div class="btn-area img-size" data-bottom="0" data-height="80">
                    <div @click="onPlayAgain"></div><div @click="onGoMy"></div>
                </div>
            </div>-->
            <div v-show="popState == 0">
                <template v-if="roundScore > 0">
                    <div class="modal-container success img-size" data-width="500" data-height="395" @click='closePropagtion($event)'>
                        <slot name="close">
                            <div class="close img-size" data-width='50' data-height='50' data-lineHeight="50" @click='closePop'></div>
                        </slot>
                        <div class="gift-section img-size" data-top="90">
                            <div class="small-box img-size" data-width="107" data-height="95" data-marginRight="25"></div>
                            <div class="img-size" data-fontSize="48" data-lineHeight="72">&times; {{roundScore}}</div>
                        </div>
                        <div class="link img-size" data-top="220" data-left="170" data-width="158" data-height="32" @click="onGoMy"></div>
                        <div class="btn-area img-size" data-bottom="0" data-height="80">
                            <div @click="onPlayAgain"></div><div @click="onGoMy"></div>
                        </div>
                    </div>
                </template>
                <template v-if="roundScore <= 0">
                    <div class="modal-container no-score img-size" data-width="539" data-height="457"  @click='closePropagtion($event)'>
                        <slot name="close">
                            <div class="close img-size" data-width='50' data-height='50' data-top='25' data-right='2' data-lineHeight="50" @click='closePop'></div>
                        </slot>
                        <div class="reason img-size" data-top="135">
                            <div v-show="isTimeout == true" class="timeout img-size" data-width="134" data-height="33"></div>
                            <div v-show="isTimeout == false" class="fault img-size" data-width="112" data-height="33"></div>
                        </div>
                        <div class="play-again img-size" data-top="376" data-left="120" data-width="265" data-height="84" @click="onPlayAgain"></div>
                    </div>
                </template>
            </div>
            <div v-show="popState > 0" class="modal-container pop-cnt img-size" data-width='490' data-height='390' data-borderRadius="15" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'>&otimes;</div>
                </slot>
                <!--<template v-if="popState == 0">
                    <div class="section img-size" data-height="104" data-fontSize="30" data-lineHeight="100">本轮成绩</div>
                    <div class="section img-size" data-height="87">&lt;!&ndash;
                   &ndash;&gt;<div class="col img-size" :class="{true: 'goldFace', false: 'bigFace'}[investEnough]" data-width="87" data-height="87"></div>&lt;!&ndash;
                   &ndash;&gt;<span class="img-size" data-marginLeft="36" data-fontSize="60" data-lineHeight="87">&times; {{this.roundScore}}</span>&lt;!&ndash;
                 &ndash;&gt;</div>
                    <div class="section img-size" data-height="109">&lt;!&ndash;
                   &ndash;&gt;<span class="img-size" data-fontSize="24" data-lineHeight="109">已累计获得</span>
                      <div class="col smallFace img-size" data-width="40" data-height="109"></div>
                      <span class="img-size" data-fontSize="24" data-lineHeight="109">&times; {{this.score}}</span>&lt;!&ndash;
                 &ndash;&gt;</div>
                    <div class="section">&lt;!&ndash;
                   &ndash;&gt;<div class="btn play-again img-size" data-borderRadius="10" data-width="170" data-height="50" data-fontSize="24" data-lineHeight="50" @click="onPlayAgain">再来一次</div>&lt;!&ndash;
                   &ndash;&gt;<div class="btn end-game img-size" data-borderRadius="10" data-marginLeft="40" data-width="170" data-height="46" data-fontSize="24" data-lineHeight="50" @click="closePop">不玩了</div>&lt;!&ndash;
                 &ndash;&gt;</div>
                </template>-->
                <template v-if="popState >= 1">
                    <!--<div class="section msg img-size" data-height="300" data-fontSize="30" data-lineHeight="300">{{msg}}</div>-->
                    <div class="msg-wrapper img-size" data-height="300">
                        <div>
                            <div v-for="sub in msg" class="img-size" data-fontSize="32" data-lineHeight="48">{{sub}}</div>
                        </div>
                    </div>
                    <div class="section img-size">
                        <div v-show="popState < 7" class="btn invest img-size" data-borderRadius="10" data-width="250" data-height="50" data-fontSize="24" data-lineHeight="50" @click="onInvest">立即投资</div>
                        <div v-show="popState == 7" class="btn invest img-size" data-borderRadius="10" data-width="250" data-height="50" data-fontSize="24" data-lineHeight="50" @click="closePop">我知道了</div>
                    </div>
                </template>
                <!--<div class="sole-btn img-size" data-width="150" data-height="50" data-fontSize="26" data-lineHeight="50" data-borderRadius="10" @click="onMainBtn">{{{0: '确 定', 1: '查看奖品', 2: '立即投资', 3: '立即投资', 9: '我知道了'}[popState]}}</div>-->
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
//            investEnough : Boolean,
//            score: Number,
            roundScore: Number,
            isTimeout : Boolean
        },
        data(){
            return{
                showModal : true,
                waitTime: 500
            }
        },
        computed : {
            msg : function () {
                switch (this.popState) {
                    case 1:
                        return ['您的机会用完了，请投资获取'];
                    case 2:
                        return ['没有未拆的小礼盒了', '请投资获取更多游戏机会'];
                    case 3:
                        return ['小礼盒不足，无法转换', '请投资获取更多游戏机会'];
                    case 4:
                        return ['没有未拆的大礼盒了', '请投资获取更多游戏机会'];
                    case 5:
                        return ['小礼盒不足10个', '请投资获取更多游戏机会'];
                    case 6:
                        return ['大礼盒不足10个', '请投资获取更多游戏机会'];
                    case 7:
                        return ['转换成功！'];
                }
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
            onGoMy: function () {
                this.closePop(() => {
                    window.location.replace(window.location.pathname + "#/my/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                });
            },
            onInvest : function () {
                T.callApp.investment();
            }
        }
    }
</script>