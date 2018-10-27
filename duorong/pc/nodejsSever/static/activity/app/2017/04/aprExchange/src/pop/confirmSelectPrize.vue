<style lang='sass'>
    @import '../css/global.scss';
    $sjianwidth : $s17;
    .modal-mask.select-prize{
        span{height:$sjianwidth; width:$sjianwidth; display:block; position:relative;}
        li{
            @include box;
            padding:$s1 0;
            .text{ @include box-flex; line-height:$s16;}
        }
        table{
            margin-top:$sjianwidth/1.8;
            margin-left:$sjianwidth/1.8;
            color: #FFFF99;
            td{
                height: $s20;
            }
        }

        .modal-container.pop-cnt{ max-width:none; @include contain('../images/new/pop/select_prize/select-pop.png');
             @include box-sizing;
             @include transition-duration(0s);
            .content{
                margin-top: 33%; margin-bottom:$s10; color:#FFF;
                @include align-items(flex-start);
                @include justify-content(flex-start);
                @include font-size(8px);
                @include size(padding-top, 10px);@include size(padding-bottom, 10px);
                @include size(padding-left, 5px);@include size(padding-bottom, 5px);
                overflow-y: scroll;
                .label-words{color: #FFF; @include font-size(15px);}
                .confirm{
                    @include display; @include justify-content(space-between); @include align-items;
                    margin-top: $s16;
                    padding: $s5 $s10;
                }
                .remark{
                    margin-top: $s10;
                    color: #FFF; @include font-size(7px);
                }
            }
        }   
        .close{ width:$s50; height:$s50; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask select-prize" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='619' data-height='1107' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content img-size" data-width='510' data-height='330'>
                    <p class="label-words">提示：选择后将无法更换奖品，您确定选择获取该奖品吗？</p>
                    <div class="confirm" data-height="70" data-width="470">
                        <img src="../images/new/pop/ok.png" width="40%" @click="onOK">
                        <img src="../images/new/pop/cancel.png" width="40%" @click="closePop">
                    </div>
                    <div class="remark">奖品将于活动结束后15个工作日内发放</div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import {realPrizes} from '../common/URL';
    export default {
        props : {
            transition : String,
            selectedIndex : Number
        },
        data(){
            return{
                showModal : true ,
                showOption: false,
                selected: -1
            }
        },
        computed : {
            selectedPrizeName : function () {
                let i = this.selected;
                return i == -1 ? '' : this.selectOptions[i].name;
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
            onOK : function () {
                let self = this;
                this.closePop(function () {
                    bus.$emit('submitSelectPrize', self.selectedIndex);
                });
            }
        }
    }
</script>