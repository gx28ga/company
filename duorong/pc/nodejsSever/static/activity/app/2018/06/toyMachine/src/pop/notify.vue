<style lang='sass' scoped>
    @import "../css/pop-transition.scss";
    @import '../css/global.scss';
    .modal-mask.notify{
        .modal-container.pop-cnt{
            position: relative;
            background: #96007E;
            color: #fff449;
            .title{
                margin: 0 auto;
                width: 94%;
                border-bottom: 1px dotted #FFF;
                padding: 0 2%;
                /*text-align: center;*/
                font-weight: bold;
            }
            .msg-wrapper{
                width: 100%;
                text-align: center;
                /*color: #333;*/
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
            .opr-btn{
                @include contain("../images/nfy-btn.png");
                color: #a90094;
            }
            .close-sign{
                position: absolute;
                color: #FFF;
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask notify">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='550' data-height='350' data-borderRadius="12" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close-sign img-size" data-top='0' data-right='6' data-fontSize="64" data-lineHeight="48" @click='onClose'>&times;</div>
                </slot>
                <div class="img-size title" data-fontSize="30" data-lineHeight="72">提 示</div>
                <div class="msg-wrapper img-size" data-marginTop="0" data-height="182">
                    <div class="msg-block">
                        <div v-for="sub in msg" class="img-size" data-fontSize="28" data-lineHeight="48">{{sub}}</div>
                    </div>
                </div>
                <div class="btn-wrapper">
                    <div v-show="popState == 0" class="opr-btn img-size" data-width="223" data-height="72" data-fontSize="30" data-lineHeight="72" @click="onLogin">立即登录</div>
                    <div v-show="popState == 1 || popState == 2" class="opr-btn img-size" data-width="223" data-height="72" data-fontSize="30" data-lineHeight="72" @click="onInvest">去投资</div>
                    <div v-show="popState == 3" class="opr-btn img-size" data-width="180" data-height="45" data-fontSize="24" data-lineHeight="45" @click="onClose">我知道了</div>
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
            }
        }
    }
</script>