<style lang='sass'>
    @import '../css/global.scss';
    @import "../vendor/all-animation.min.css";
    .modal-mask.convert{
        .modal-container.pop-cnt{
            @include contain('../images/convert-pop.png');
            .note, .selected-type, .select-box, .option-box, .prize-box, .ok-btn, .cancel-btn{/*border: 1px solid red;*/
                position: absolute;
            }
            .note{
                color: #EAFF00;
            }
            .selected-type{
                color: #333;
            }
            .option-box{
                z-index: 2;
                background: #F9F9F9;
                color: #666;
                padding: 0.3rem .5rem;
                -webkit-border-radius: .2rem;
                -moz-border-radius: .2rem;
                border-radius: .2rem;
                div {
                    line-height: 1.1rem;
                }
            }
            .prize-box.type-1{
                @include contain("../images/prize/IPhone.png");
            }
            .prize-box.type-2{
                @include contain("../images/prize/iPad.png");
            }
            .prize-box.type-3{
                @include contain("../images/prize/Foreo.png");
            }
            .prize-box.type-4{
                @include contain("../images/prize/dior.png");
            }
            .prize-box.type-5{
                @include contain("../images/prize/m.png");
            }
            .prize-box.type-6{
                @include contain("../images/prize/c.png");
            }
            .prize-box.type-7{
                @include contain("../images/prize/JD-100.png");
            }
            .prize-box.type-8{
                @include contain("../images/prize/jd-30.png");
            }
            .prize-box.type-9{
                @include contain("../images/prize/jd-10.png");
            }
            .prize-box.type-10{
                @include contain("../images/prize/j-30.png");
            }
            .prize-box.type-11{
                @include contain("../images/prize/j-10.png");
            }
        }
        .close{ width:$s40; height:$s40; background:none;}
    }
</style>
<template>
<!--<transition :name="transition">-->
<transition>
    <!--<div v-show="showModal" class="modal-mask convert scale-bounce" @click='closePop'>-->
    <div v-show="showModal" class="modal-mask convert">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size scale-bounce" data-paddingTop='126' data-paddingLeft='50' data-width='551' data-height='666' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="img-size note" data-top="118" data-left="44" data-width="458" data-fontSize="24" data-lineHeight="36">您当前拥有{{myCom}}张万能拼图，可任意转换成您想要的普通拼图，请选择要转换成哪个拼图？</div>
                <div class="img-size select-box" data-top="261" data-left="82" data-width="386" data-height="50" @click="optionDown = !optionDown"></div>
                <div class="img-size selected-type" data-top="261" data-left="90" data-lineHeight="50" data-fontSize="24">{{selected}}</div>
                <div v-show="optionDown == true" class="img-size option-box" data-top="311" data-left="84" data-width="348" data-fontSize="20">
                    <div v-for="(opt, index) in pieceList" @click="onOptionSelect(opt, index + 1)">{{opt}}</div>
                </div>
                <div v-show="convertType == 1" class="prize-box type-1 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 2" class="prize-box type-2 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 3" class="prize-box type-3 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 4" class="prize-box type-4 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 5" class="prize-box type-5 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 6" class="prize-box type-6 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 7" class="prize-box type-7 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 8" class="prize-box type-8 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 9" class="prize-box type-9 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 10" class="prize-box type-10 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div v-show="convertType == 11" class="prize-box type-11 img-size enter-down-bounce" data-top="346" data-left="183" data-width="185" data-height="96"></div>
                <div class="img-size ok-btn" data-top="572" data-left="85" data-width="162" data-height="60" @click="onOk"></div>
                <div class="img-size cancel-btn" data-top="572" data-left="303" data-width="162" data-height="60" @click="closePop"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import {httpMyPrizeList} from '../common/URL';
    import requirePop from './requirePop.js';
    export default {
        props : {
            transition : String,
            myCom : Number,
            parent: Object
        },
        data(){
            return{
                showModal: true,
                optionDown : false,
                selected : '',
                convertType : 0,
                pieceList : ['iPhone7 128G拼图碎片', 'iPad 128G拼图碎片', 'Foreo洁面仪拼图碎片', '迪奥真我香水30ml拼图碎片', '摩飞便携榨汁料理机拼图碎片', '小狗手持除尘器拼图碎片',
                '100元京东卡拼图碎片', '30元京东卡拼图碎片', '10元京东卡拼图碎片', '30积分拼图碎片', '10积分拼图碎片'],
                isSubmitting : false
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
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
                        if (!_data.success && !_data.hasOwnProperty('errorMsg')) {
                            let Pop = require('./index.js');
                            let pop = new Pop({
                                title: '&nbsp;',
                                content: "操作失败，请联系客服！",
                                okBtn: true,
                                cancelBtn: false,
                                timing: 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt: '确定',
                            });
                            return false;
                        }
                        callAfter(_data);
                    }
                });
            },
            onOptionSelect : function (optName, convertType) {
                this.selected = optName;
                this.convertType = convertType;
                this.optionDown = false;
            },
            onOk : function () {
                if (this.isSubmitting || this.convertType <= 0) return;
                this.isSubmitting = true;
                this.closePop(() => {this.parent.submitConvert(this.convertType)});
            }
        }
    }
</script>