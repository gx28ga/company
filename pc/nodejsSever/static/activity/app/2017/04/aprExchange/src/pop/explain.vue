<style lang='sass'>
    @import '../css/global.scss';
    $sjianwidth : $s17;
    .modal-mask.explain{
        span{height:$sjianwidth; width:$sjianwidth; display:block; position:relative;}
        .demoSpan1{overflow:hidden; width:$sjianwidth/1.8; color:#FFF;}
        .demoSpan1:before{content:''; height:$sjianwidth/2.5; width:$sjianwidth/2; display:block; border:$s5/2 solid #FFF; border-left-width:0; border-top-width:0; transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg); position:absolute; top:$s5; right:$s7;}
        li{
            @include box;
            padding:$s1 0;
            line-height:$s16;
            .text{ @include box-flex; /*line-height:$s16;*/}
        }
        table{
            margin-top:$sjianwidth/1.8;
            margin-left:$sjianwidth/1.8;
            color: #FFFF99;
            td{
                height: $s20;
            }
        }

        .modal-container.pop-cnt{ max-width:none; @include contain('../images/new/head/rule-pop.png');
             @include box-sizing;
             @include transition-duration(0s);
            .content{ 
                margin-top: 33%; margin-bottom:$s10; color:#FFF;
                @include align-items(flex-start);
                @include justify-content(flex-start);
                @include font-size(8px);
                overflow-y: scroll;
            }
        }   
        .close{ width:$s50; height:$s50; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask explain" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='619' data-height='1107' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content img-size" data-width='537' data-height='750'>
                    <ul>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>活动时间为2017年5月17日至2017年5月31日</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>活动期间，投资≥20天产品产生财富值，小于20天产品不参与此活动</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>财富值计算方法：投资金额×产品期限/360</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>活动以最终财富值为准，根据最终财富值多少决定可挑选的奖品的范围。仅能挑选一次奖品，一旦选择，不可变更奖品</div>
                        </li>
                    </ul>
                    <table width="95%">
                        <tr><td width="33%">财富值数量</td><td>奖品</td></tr>
                        <tr><td>8000</td><td>10元京东购物卡</td></tr>
                        <tr><td>75000</td><td>小米手环</td></tr>
                        <tr><td>300000</td><td>Brita净水器</td></tr>
                        <tr><td>500000</td><td>Kindle Paperwhite</td></tr>
                        <tr><td>800000</td><td>博朗5050cc</td></tr>
                        <tr><td>1500000</td><td>iPad Air2</td></tr>
                        <tr><td>2200000</td><td>戴森空气净化风扇智能版TP02</td></tr>
                        <tr><td>2300000</td><td>佳能G3X</td></tr>
                        <tr><td>2400000</td><td>Rimowa20寸登机箱</td></tr>
                        <tr><td>3000000</td><td>iPhone7 Plus 256G</td></tr>
                        <tr><td>3500000</td><td>Mac book</td></tr>
                        <tr><td>4000000</td><td>Lv经典钱包</td></tr>
                        <tr><td>4800000</td><td>Prada女士经典单间背包</td></tr>
                        <tr><td>5000000</td><td>20000元京东电子购物卡</td></tr>
                    </table>
                    <ul>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>活动奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放</div>
                        </li>
                        <li>
                            <span class='demoSpan1'></span>
                            <div class='text'>本活动最终解释权归多融财富所有</div>
                        </li>
                    </ul>
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
            period : String
        },
        data(){
            return{
                showModal : true
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
            }
        }
    }
</script>