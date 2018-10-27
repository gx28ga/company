<style lang='sass' scoped>
    @import "../css/pop-transition.scss";
    @import '../css/global.scss';
    .modal-mask.notify{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/notice-bg.png");
            .title{
                width: 100%;
            }
            .title.success{
                @include contain("../images/congratulation.png");
                background-position: center;
            }
            .title.notice{
                @include contain("../images/notice.png");
                background-position: center;
            }
            .msg-wrapper{
                width: 100%;
                text-align: center;
                color: #3c245e;
                .msg-block{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .msg-wrapper:after{
                display: inline-block;
                vertical-align: middle;
                content: '';
                width: 0;
                height: 100%;
            }
            .btn-wrapper{
                width: 100%;
                text-align: center;
                div{
                    display: inline-block;
                }
            }
            .invest{
                @include contain("../images/btn-invest.png");
            }
            .ok-close{
                @include contain("../images/btn-ok.png");
            }
            .go-draw{
                @include contain("../images/btn-draw.png");
            }
            .go-engage{
                @include contain("../images/btn-engage.png");
            }
            .i-see{
                @include contain("../images/btn-isee.png");
            }
            .cfm-yes{
                @include contain("../images/cfm-ok.png");
            }
            .cfm-no{
                @include contain("../images/cancel.png");
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask notify">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='688' data-height='523' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='75' data-height='75' data-top='56' data-right='0' @click='onClose'></div>
                </slot>
                <div class="title img-size" :class="titleCat" data-marginTop="20" data-marginBottom="25" data-height="86"></div>
                <div class="msg-wrapper img-size" data-height="225">
                    <div v-show="popState == 6" class="msg-block">
                        <div class="img-size" data-fontSize="36" data-lineHeight="36" data-marginBottom="24">恭喜您！获得10个奖品</div>
                        <div class="img-size" data-fontSize="24" data-lineHeight="24">请前往我的奖品页查看详情</div>
                    </div>
                    <div v-show="popState == 1 || popState == 2 || popState == 3 || popState == 8" class="msg-block">
                        <div v-for="sub in msg" class="img-size" data-fontSize="36" data-lineHeight="48">{{sub}}</div>
                    </div>
                    <div v-show="popState == 4" class="msg-block">
                        <div v-for="sub in msg" class="img-size" data-fontSize="30" data-lineHeight="40">{{sub}}</div>
                    </div>
                    <div v-show="popState == 5 || popState == 10" class="msg-block">
                        <div v-for="sub in msg" class="img-size" data-fontSize="30" data-lineHeight="40">{{sub}}</div>
                    </div>
                    <div v-show="popState == 9" class="msg-block">
                        <div v-for="(sub, idx) in msg" class="img-size" data-fontSize="30" data-lineHeight="40">{{sub}}<span v-show="idx == 0" style="color: red;">{{cost}}</span><i v-show="idx == 0">钞票，</i></div>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <div v-show="popState == 1 || popState == 2" class="invest img-size" data-width="246" data-height="86" @click="onInvest"></div>
                    <div v-show="popState == 3" class="go-draw img-size" data-width="246" data-height="86" @click="onGoDraw"></div>
                    <div v-show="popState == 4" class="go-engage img-size" data-width="246" data-height="86" @click="onGoCount"></div>
                    <div v-show="popState == 5" class="i-see img-size" data-width="246" data-height="86" @click="onClose"></div>
                    <div v-show="popState == 6 || popState == 8 || popState == 10" class="ok-close img-size" data-width="246" data-height="86" @click="onClose"></div>
                    <div v-show="popState == 9">
                        <div class="cfm-yes img-size" data-width="266" data-height="86" data-marginRight="50" @click="onConfirmOk"></div><!--
                     --><div class="cfm-no img-size" data-width="246" data-height="86" @click="onConfirmCancel"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popState : Number,  // 1：拆红包机会为0；
                                // 2：拆红包机会不足10次；
                                // 3：数钞票机会为0；
                                // 4：数钞票机会大于0；
                                // 5：钞票不足不能兑换
                                // 6：连拆10次奖品
                                // 7：如何获得机会
                                // 8: 数钞票没有成绩
                                // 9: 询问是否兑换奖品
                                // 10:兑换成功
            chance : {
                type : Number,
                default : 0
            },
            cost : {
                type : Number,
                default : 0
            }
        },
        data(){
            return{
                showModal : true,
                waitTime: 500
            }
        },
        computed : {
            titleCat : function () {
                let num = this.popState;
                switch (num) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 8:
                    case 9: return 'notice';
                    default: return 'success';
                }
            },
            msg : function () {
                switch (this.popState) {
                    case 1:
                        return ['您没有拆红包机会了', '请投资获取'];
                    case 2:
                        return ['您拆红包机会已不足10次，', '请投资获取'];
                    case 3:
                        return ['您没有数钞票机会了', '请拆红包获取'];
                    case 4:
                        return ['您数钞票机会为 ' + this.chance + '次，数到多少算多少', '快来参与游戏吧'];
                    case 5:
                        return ['抱歉！您的面值不足，无法兑换'];
                    case 8:
                        return ['很遗憾！本次没有成绩'];
                    case 9:
                        return ['兑换该奖品将消耗', '是否确认兑换？'];
                    case 10:
                        return ['兑换成功，请前往我的奖品页查看详情'];
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
//                bus.$emit('closePopEvent');
            },
            onClose : function () {
                this.closePop(() => {
                    this.$emit("close-only-event");
                });
            },
            onInvest : function () {
                T.callApp.investment();
            },
            onGoDraw : function () {
                this.closePop(() => {
                    this.$emit("go-draw-event");
                });
            },
            onGoCount : function () {
                this.closePop(() => {
                    this.$emit("go-count-event");
                });
            },
            onConfirmOk : function () {
                this.closePop(() => {
                    this.$emit("confirm-ok-event");
                });
            },
            onConfirmCancel : function () {
                this.closePop(() => {
                    this.$emit("confirm-cancel-event");
                });
            }
        }
    }
</script>