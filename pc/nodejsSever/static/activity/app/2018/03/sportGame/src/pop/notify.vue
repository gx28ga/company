<style lang='sass' scoped>
    @import "../css/pop-transition.scss";
    @import '../css/global.scss';
    .modal-mask.notify{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/notice-bg.png");
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
            .login{
                @include contain("../images/login.png");
            }
            .invest{
                @include contain("../images/invest.png");
            }
            .ok-close{
                @include contain("../images/ok-big.png");
            }
            .i-see{
                @include contain("../images/isee.png");
            }
            .cfm-yes{
                @include contain("../images/ok.png");
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
            <div class="modal-container pop-cnt img-size" data-width='701' data-height='485' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='75' data-height='75' data-top='0' data-right='14' @click='onClose'></div>
                </slot>
                <div class="msg-wrapper img-size" data-marginTop="153" data-height="192">
                    <div v-show="popState == 0 || popState == 1 || popState == 2 || popState == 3 || popState == 4 || popState == 6" class="msg-block">
                        <div v-for="sub in msg" class="img-size" data-fontSize="36" data-lineHeight="48">{{sub}}</div>
                    </div>
                    <div v-show="popState == 5" class="msg-block">
                        <div v-for="(sub, idx) in msg" class="img-size" data-fontSize="30" data-lineHeight="40">{{sub}}<span v-show="idx == 0" style="color: red;">{{cost}}</span><i v-show="idx == 0">能量值，</i></div>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <div v-show="popState == 0" class="login img-size" data-width="305" data-height="80" @click="onLogin"></div>
                    <div v-show="popState == 1 || popState == 2" class="invest img-size" data-width="305" data-height="80" @click="onInvest"></div>
                    <div v-show="popState == 3 || popState == 4" class="i-see img-size" data-width="305" data-height="80" @click="onClose"></div>
                    <div v-show="popState == 5">
                        <div class="cfm-yes img-size" data-width="226" data-height="82" data-marginRight="50" @click="onConfirmOk"></div><!--
                     --><div class="cfm-no img-size" data-width="226" data-height="82" @click="onConfirmCancel"></div>
                    </div>
                    <div v-show="popState == 6" class="ok-close img-size" data-width="305" data-height="80" @click="onClose"></div>
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
            popState : Number,  // 0: 未登录；
                                // 1：游戏机会为0；
                                // 2：游戏机会不足10次；
                                // 3: 游戏没有成绩
                                // 4：能量不足不能兑换
                                // 5: 询问是否兑换奖品
                                // 6:兑换成功
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
            msg : function () {
                switch (this.popState) {
                    case 0:
                        return ['您还未登录', '请先登录再参加活动'];
                    case 1:
                        return ['您的游戏次数为0', '请投资获取游戏机会'];
                    case 2:
                        return ['您的游戏机会不足10次，', '请投资获取游戏机会'];
                    case 3:
                        return ['很遗憾！本次没有成绩'];
                    case 4:
                        return ['抱歉！您的能量值不足，无法兑换'];
                    case 5:
                        return ['兑换该奖品将消耗', '是否确认兑换？'];
                    case 6:
                        return ['兑换成功', '请前往我的奖品页查看详情'];
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
            onLogin: function () {
                /*this.closePop(() => {
                    this.$emit("go-login-event");
                });*/
                this.$emit("go-login-event");
            },
            onInvest : function () {
                T.callApp.investment();
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