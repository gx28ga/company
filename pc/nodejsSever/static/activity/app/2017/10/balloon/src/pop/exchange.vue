<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.exchange{
        .modal-container.simple-type{
            position: relative;
            @include contain("../images/simple-result.png");
        }
        .modal-container.not-enough{
            position: relative;
            @include contain("../images/not-enough.png");
        }
        .msg{
            color: #FFF;
        }
        .msg.center{
            width: 100%;
            text-align: center;
        }
        .invest-btn, .close-btn{
            margin: 0 auto;
        }
        .close-btn{
            @include contain("../images/btn-bg.png");
            color: #B44000;
            text-align: center;
        }
        .xchg-btn{
            display: inline-block;
            @include contain("../images/xchg-btn.png");
            color: #B44000;
            text-align: center;
        }
        .cancel-btn{
            display: inline-block;
            @include contain("../images/xchg-x.png");
            color: #8732DE;
            text-align: center;
        }
        .close{
            color: #333;
            text-align: center;
        }
    }
</style>
<template>
<!--<transition :name="transition">-->
<transition name="fadeIn">
    <div v-show='showModal' class="modal-mask exchange">
        <div class="modal-wrapper">
            <div v-show="popState == 0" class="modal-container not-enough img-size" data-width='500' data-height='480' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='70' data-height='70' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'></div>
                </slot>
                <div class="msg center img-size" data-marginTop="240" data-marginLeft="50" data-width="400" data-fontSize="24" data-lineHeight="24">{{msg}}</div>
                <div class="invest-btn img-size" data-marginTop="98" data-width="318" data-height="76" @click="onInvest"></div>
            </div>
            <div v-show="popState == 1 || popState == 2" class="modal-container simple-type img-size" data-width='501' data-height='479' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='70' data-height='70' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'></div>
                </slot>
                <div class="msg img-size" :class="popState == 2 ? 'center' : ''" data-marginTop="200" data-marginLeft="27" data-marginRight="30" data-fontSize="30" data-lineHeight="40">{{msg}}</div>
                <div v-show="popState == 1" class="xchg-btn img-size" data-marginTop="60" data-marginLeft="55" data-width="191" data-height="76" @click="onXchg"></div>
                <div v-show="popState == 1" class="cancel-btn img-size" data-marginTop="60" data-marginLeft="15" data-width="190" data-height="76" @click="closePop"></div>
                <div v-show="popState == 2" class="close-btn img-size" data-marginTop="98" data-width="316" data-height="75" data-fontSize="36" data-lineHeight="75" @click="closePop">{{btnName}}</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            parent : Object,
            popState: Boolean,
            targetNo: Number,
            error: String
        },
        data(){
            return{
                showModal : true,
                isClicked : false
            }
        },
        computed : {
            msg : function () {
                switch (this.popState) {
                    case 0 : return '您的国旗数量不足，无法兑换';
                    case 1 : {
                        let i = this.targetNo - 1;
                        let gift = ['30元JD卡', '小米手环', '派克钢笔', '科沃斯扫地机器人', '惠人原汁机', 'Surface Pro4'];
                        let payFlag = [12, 32, 58, 88, 188, 298];
                        return '兑换' + gift[i] + '，将消耗您' + payFlag[i] + '面国旗，确认兑换吗？';
                    }
                    case 2 : return '兑换成功！';
                }
            },
            btnName : function () {
                switch (this.popState) {
                    case 0 : return '我知道了';
                    case 2 : return '确 定';
                }
            }
        },
        mounted(){
            T.setImgSize();
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
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onXchg : function () {
                if (this.isClicked) return;
                this.isClicked = true;
                this.closePop(() => {
                    this.parent.onConfirmXchg.call(this.parent, this.targetNo);
                });
            },
            onInvest : function () {
                T.callApp.investment();
            }
        }
    }
</script>