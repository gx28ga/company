<style lang='sass' scoped>
    @import "../css/pop-transition.scss";
    @import '../css/global.scss';
    .modal-mask.notify{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
            .title{
                color: #e8320d;
                width: 100%;
                text-align: center;
                font-weight: bold;
            }
            .msg-wrapper{
                width: 100%;
                text-align: center;
                color: #333;
                .msg-block{
                    display: inline-block;
                    vertical-align: middle;
                    span{
                        color: #00F;
                        font-weight: bold;
                    }
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
            .opr-btn{
                @include contain("../images/nfy-btn.png");
                color: #FFF;
            }
            .close-sign{
                position: absolute;
                color: #000;
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask notify">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='320' data-height='230' data-borderRadius="12" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close-sign img-size" data-top='-6' data-right='10' data-fontSize="48" data-lineHeight="48" @click='onClose'>&times;</div>
                </slot>
                <div class="img-size title" data-marginTop="10" data-fontSize="30" data-lineHeight="45">提 示</div>
                <div class="msg-wrapper img-size" data-marginTop="0" data-height="98">
                    <div class="msg-block">
                        <template v-if="popState != 3">
                            <div v-for="sub in msg" class="img-size" data-fontSize="24" data-lineHeight="32">{{sub}}</div>
                        </template>
                        <template v-else>
                            <div class="img-size" data-fontSize="24" data-lineHeight="32">{{msg[0]}}</div>
                            <div class="img-size" data-fontSize="24" data-lineHeight="32">请前往<span @click="onGoMy">我的奖品</span>页查看详情</div>
                        </template>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <div v-show="popState == 0" class="opr-btn img-size" data-width="180" data-height="45" data-borderRadius="18" data-fontSize="24" data-lineHeight="45" @click="onLogin">立即登录</div>
                    <div v-show="popState == 1 || popState == 2" class="opr-btn img-size" data-width="180" data-height="45" data-fontSize="24" data-lineHeight="45" @click="onInvest">去投资</div>
                    <div v-show="popState == 3 || popState == 5 || popState == 6" class="opr-btn img-size" data-width="180" data-height="45" data-fontSize="24" data-lineHeight="45" @click="onClose">好 的</div>
                    <div v-show="popState == 4" class="opr-btn img-size" data-width="180" data-height="45" data-fontSize="24" data-lineHeight="45" @click="onClose">我知道了</div>
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
                                // 3: 抽中10个奖品
                                // 4: 不够10积分
                                // 5: 投注成功
                                // 6: 转换卡片成功
            chance : {
                type : Number,
                default : 0
            },
            cost : {
                type : Number,
                default : 0
            },
            xchgedTeam : String
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
                        return ['恭喜您！获得10个奖品', '请前往我的奖品页查看详情'];
                    case 4:
                        return ['抱歉！您剩余不足10积分', '暂无法参与竞猜'];
                    case 5:
                        return ['恭喜！投注成功', '请及时关注比赛结果'];
                    case 6:
                        return ['恭喜您！成功转换', '1张 ' + this.xchgedTeam + "队 卡片"]
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
            },
            onClose : function () {
                this.closePop(() => {
                    this.$emit("close-only-event");
                });
            },
            onLogin: function () {
                this.$emit("go-login-event");
            },
            onInvest : function () {
                T.callApp.investment();
            },
            onGoMy() {
                this.closePop(() => {
                    this.$emit("go-my-event");
                });
            }
        }
    }
</script>