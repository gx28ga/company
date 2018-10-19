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
                .select-ctrl{
                    position: relative; margin: $s8 $s2;
                    @include box; @include boxCenter;
                    .option-list{
                        position: absolute; @include size(top, 30px); @include size(left, 0px);
                        background: rgb(255, 231, 231); @include size(border-radius, 6px);
                        width: 86.6%; min-height: $s30; max-height: $s90; overflow-y: scroll;
                        .option-item{
                            color: #000000;
                            border-bottom: dashed 1px rgb(255,181,158);
                        }
                        .option-item:last-child{
                            border-bottom: none;
                        }
                    }
                }
                .sel-result{
                    position: absolute; top: $s1; background: rgb(255, 231, 231);
                    @include size(border-top-left-radius, 6px);
                    @include size(border-bottom-left-radius, 6px);
                    width: 82.6%; padding-left: 3.0%;
                    @include font-size(12px); @include size(line-height, 25px);
                }
                .ok{
                    @include box; @include boxCenter; @include boxMiddle;
                    margin-top: $s16;
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
                    <p class="label-words">请从当前您已解锁的奖品中选择</p>
                    <div class="select-ctrl" @click="optionDown">
                        <img src="../images/new/pop/select_prize/select.png" width="100%">
                        <input type="text" class="sel-result" data-width="460" data-height="50" placeholder="请选择" :value="selectedPrizeName">
                        <div v-show="showOption" class="option-list">
                            <table width="90%">
                                <tr v-for="(item, index) in selectOptions" class="option-item" @click="setSelectedIndex(index)">
                                    <td>{{item.name}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="ok" data-height="70" data-width="470">
                        <img src="../images/new/pop/confirm.jpg" width="100%" @click="submit">
                    </div>
                    <div class="remark">温馨提示 : 奖品一经选定，无法变更，每人限兑换一次</div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    import requirePop from './requirePop.js';
    export default {
        props : {
            transition : String,
            selectOptions : {
                type : Array,
                default : []
            }
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
            optionDown : function () {
                this.showOption = !this.showOption;
            },
            setSelectedIndex : function (idx) {
                this.selected = idx;
            },
            submit : function () {
                let self = this;
                if (self.selected < 0) return false;
                this.closePop(function(){
                    requirePop('confirmSelectPrize', {props: {
                        transition : 'bounceIn',
                        selectedIndex : self.selected
                    }});
                });
            }
        }
    }
</script>