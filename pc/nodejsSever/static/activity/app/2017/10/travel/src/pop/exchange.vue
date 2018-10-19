<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.exchange{
        .modal-container{
            position: relative;
            @include contain("../images/confirm-xchg.png");
        }
        .content-box{
            position: relative;
            .ctrip-amount{
                width: 100%;
            }
            .ctrip-50{
                @extend .ctrip-amount;
                @include contain("../images/ctrip-50.png");
                background-position: center;
            }
            .ctrip-100{
                @extend .ctrip-amount;
                @include contain("../images/ctrip-100.png");
                background-position: center;
            }
            .ctrip-300{
                @extend .ctrip-amount;
                @include contain("../images/ctrip-300.png");
                background-position: center;
            }
            .ctrip-3000{
                @extend .ctrip-amount;
                @include contain("../images/ctrip-3000.png");
                background-position: center;
            }
            .msg-area{

            }
            .msg-area > div{
                width: 100%;
                display: inline-block;
                vertical-align: middle;
                text-align: center;
                color: #000;
            }
            .msg-area::after{
                display: inline-block;
                vertical-align: middle;
                content: '';
                width: 0;
                height: 100%;
            }
            .btn-area{
                div{
                    display: inline-block;
                }
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask exchange">
        <div class="modal-wrapper">
            <div class="modal-container img-size" data-width='500' data-height='597' data-borderRadius="15" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'></div>
                </slot>
                <div class="content-box img-size" data-top="180">
                    <div class="img-size" :class="{1:'ctrip-50', 2:'ctrip-100', 3:'ctrip-300', 4:'ctrip-3000'}[xchgType]" data-height="55"></div>
                    <div class="msg-area img-size" data-height="245">
                        <div>
                            <div v-for="sub in msg" class="img-size" data-fontSize="24" data-lineHeight="40">{{sub}}</div>
                        </div>
                    </div>
                    <div class="btn-area img-size" data-paddingLeft="40">
                        <div class="img-size" data-width="195" data-height="75" @click="onConfirm"></div><!--
                 --><div class="img-size" data-marginLeft="30" data-width="195" data-height="75" @click="closePop"></div>
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
            xchgType: Number
        },
        data(){
            return{
                showModal : true
            }
        },
        computed : {
            msg : function () {
                let arr = ["本次兑换将消耗"];
                switch (this.xchgType) {
                    case 1 : arr.push("三亚、西安、香港，卡片各10张，");
                        break;
                    case 2 : arr.push("北京、三亚、拉萨，卡片各1张，");
                        break;
                    case 3 : arr.push("北京、桂林、广州，卡片各1张，");
                        break;
                    case 4 : arr.push("所有12个城市卡片各1张，");
                        break;
                }
                arr.push("请确认是否兑换？");
                return arr.slice(0);
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
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onConfirm : function () {
                this.closePop(() => {
                    bus.$emit("xchg-confirmed", this.xchgType);
                });
            }
        }
    }
</script>