<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.other-result{
        .instance{
            position: relative;
            .sole-btn{/*border: 1px solid red;*/
                margin: 0 auto;
            }
        }
        .modal-container.gift-ten{
            @extend .instance;
            @include contain("../images/gift-ten.png");
        }
        .modal-container.not-enough{
            @extend .instance;
            @include contain("../images/not-enough.png");
            color: #F6DC51;
            .msg{/*border: 1px solid red;*/
                text-align: center;
                padding: 0 4%;
                width: 92%;
            }
            .content-box{
                position: relative;
            }
        }
        .modal-container.about-cards{
            @extend .instance;
            @include contain("../images/cards-result.png");
            color: #F6DC51;
        }
        .result-msg{
            width: 100%;
            text-align: center;
        }
        .result-msg > div{
            display: inline-block;
            vertical-align: middle;
            width: 100%;
        }
        .result-msg::after{
            display: inline-block;
            content: '';
            width: 0;
            height: 100%;
            vertical-align: middle;
        }
        .close{
            color: #333;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask other-result">
        <div class="modal-wrapper">
            <div v-show="popState == 1" class="modal-container gift-ten img-size" data-width='500' data-height='375' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'></div>
                </slot>
                <div class="sole-btn img-size" data-marginTop="255" data-width="300" data-height="70" @click="onMainBtn"></div>
            </div>
            <div v-show="popState == 2 || popState == 3" class="modal-container not-enough img-size" data-width='500' data-height='376' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'></div>
                </slot>
                <div v-show="popState == 2">
                    <div class="msg img-size" data-marginTop="124" data-height="130" data-fontSize="32" data-lineHeight="48">{{msg}}</div>
                    <div class="sole-btn img-size" data-marginTop="0" data-width="300" data-height="70" @click="onMainBtn"></div>
                </div>
                <div v-show="popState == 3" class="content-box img-size" data-top="105">
                    <div class="result-msg img-size" data-top="105" data-height="150">
                        <div>
                            <div v-for="sub in msg" class="img-size" data-fontSize="32" data-lineHeight="48">{{sub}}</div>
                        </div>
                    </div>
                    <div class="sole-btn img-size" data-marginTop="0" data-width="300" data-height="70" @click="onMainBtn"></div>
                </div>
            </div>
            <div v-show="popState == 4 || popState == 5" class="modal-container about-cards img-size" data-width="500" data-height="376" @click="closePropagtion($event)">
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'></div>
                </slot>
                <div class="result-msg img-size" data-height="255">
                    <div class="img-size" data-fontSize="36" data-lineHeight="48">{{msg}}</div>
                </div>
                <div class="sole-btn img-size" data-width="304" data-height="75" @click="onMainBtn"></div>
            </div>
            <div v-show="popState == 6" class="modal-container about-cards img-size" data-width="500" data-height="376" @click="closePropagtion($event)">
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'></div>
                </slot>
                <div class="result-msg img-size" data-height="255">
                    <div>
                        <div v-for="sub in msg" class="img-size" data-fontSize="36" data-lineHeight="48">{{sub}}</div>
                    </div>
                </div>
                <div class="sole-btn img-size" data-width="304" data-height="75" @click="onMainBtn"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popState : Number,  //1: 抽10次成功、2：机会已用完、3：剩余机会不足10次、4：转换成功、5：兑换成功、6：卡片不足
            giftType: Number,
            error: String,
            parent : Object
        },
        data(){
            return{
                showModal : true
            }
        },
        computed : {
            msg : function () {
                if (this.popState == 2) {
                    return '您的机会用完了，请投资获取';
                } else if (this.popState == 3) {
                    return ["您的剩余机会已不足10次，","请投资获取"];
                } else if (this.popState == 4) {
                    return "转换成功";
                } else if (this.popState == 5) {
                    return "兑换成功";
                } else if (this.popState == 6) {
                    return ["抱歉！", "由于缺少兑换所需的卡片，", "您暂时无法进行兑换。"];
                } else if (this.popState == 9) {
                    return this.error;
                }
            }
        },
        mounted(){
            T.setImgSize();
            bus.$emit("pop-display-ok");
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
                this.showModal = false;
                if (this.parent) {this.parent.isOnBusy = false;}
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onMainBtn : function () {
                this.closePop(() => {
                    if (this.popState == 1) {
                        window.location.replace(window.location.pathname + "#/cards/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + "&from=draw");
                        window.location.reload();
                    } else if (this.popState == 2 || this.popState == 3) {
                        T.callApp.investment();
                    }
                });
            }
        }
    }
</script>