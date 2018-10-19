<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.tear-score{
        .modal-container{
            position: relative;
            /*@include contain("../images/tear-score.png");*/
            /*.title, */.score-date, .no-data, .gift-area, .gift-list, .my-link, .close{
                position: absolute;
            }
            .data-area{
                position: relative;
                width: 100%;
                div{
                    width: 100%;
                    text-align: center;
                }
                .ym{
                    color: #666;
                }
                .day{
                    color: #d5453b;
                    font-weight: bold;
                }
                .week{
                    color: #757575;
                }
            }
            /*.title{
                width: 100%;
                text-align: center;
                color: #BC8F8F;
                font-weight: bold;
            }*/
            .score-date{
                color: #333;
                span{
                    color: #d5453b;
                }
            }
            .no-data{
                width: 100%;
                color: #333;
                text-align: center;
            }
            .gift-area{
                width: 100%;
                text-align: center;
                .row div{
                    display: inline-block;
                    vertical-align: top;
                    background-color: #D5453B;
                    color: #FFF;
                }
                .row div:last-child{
                    margin-right: 0!important;
                }
            }
            .gift-list{
                width: 100%;
                overflow-y: scroll;
                .row div{
                    display: inline-block;
                    vertical-align: top;
                    text-align: center;
                    color: #333;
                }
                .left{
                    text-align: left!important;
                }
                .right{
                    text-align: right!important;
                }
            }
        }
        .get-event{
            @include contain("../images/get-event.png");
        }
        .no-event{
            @include contain("../images/no-event.png");
        }
        .close{
            z-index: 100;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask tear-score">
        <div class="modal-wrapper">
            <!--<div class="modal-container pop-cnt img-size" data-width='638' data-height='524' @click='closePropagtion($event)'>-->
            <div class="modal-container img-size" :class="['get-event', 'no-event'][bg]" data-width='638' :data-height="[572, 524][bg]" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='60' data-height='60' data-top='0' data-right='0' @click='onClose'></div>
                </slot>
                <!--<div class="title img-size" data-top="20" data-fontSize="36" data-lineHeight="32">本轮成绩</div>
                <div class="data-area img-size" data-top="211">
                    <div class="ym img-size" data-fontSize="32" data-lineHeight="32">{{yyyyMM}}</div>
                    <div class="day img-size" data-fontSize="120" data-lineHeight="140">{{d}}</div>
                    <div class="week img-size" data-fontSize="18" data-lineHeight="18">{{['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][w]}}</div>
                </div>-->
                <div class="score-date img-size" data-top="50" data-left="25" data-fontSize="22" data-lineHeight="22">本轮撕到的日期：<span>{{scoreDate}}</span></div>
                <div v-if="giftList.length > 0">
                    <div class="gift-area img-size" data-top="190">
                        <div class="row">
                            <div v-for="item in giftList" class="img-size" :data-width="giftBlockWidth" data-height="64" data-borderRadius="32" data-marginRight="15" data-fontSize="22" data-lineHeight="64">{{item | displayName}}</div>
                        </div>
                    </div>
                    <div class="gift-list img-size" data-top="370" data-height="100">
                        <div v-for="row in giftList" class="row img-size" data-fontSize="22" data-lineHeight="32">
                            <div class="right img-size" data-width="110" data-marginRight="50">{{row.date | showDate}}</div><!--
                         --><div class="img-size" data-width="318">{{row.event}}</div><!--
                         --><div class="left img-size" data-width="150" data-marginLeft="10">{{row | displayName}}</div>
                        </div>
                    </div>
                </div>
                <div v-show="giftList.length <= 0" class="no-data img-size" data-top="240" data-fontSize="20" data-lineHeight="130">这次没有大事记，越来越接近了，加油~</div>
                <div class="my-link img-size" :data-top="[505, 450][bg]" data-left="219" data-width="190" data-height="35" @click="onGoMy"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            /*yyyyMM : String,
            d : Number,
            w : Number,*/
            scoreDate : String,
            giftList : Array
        },
        data(){
            return{
                showModal : true
            }
        },
        computed : {
            bg : function () {
                return this.giftList.length > 0 ? 0 : 1;
            },
            giftBlockWidth : function () {
                let num = this.giftList.length;
                switch(num) {
                    case 1:
                    case 2: return 278;
                    case 3: return 160;
                    default: return 133;
                }
            }
        },
        filters: {
            showDate : function (input) {
                if (!Number(input)) return '';
                let dt = new Date(input);
                return dt.Format("M月d日");
            },
            displayName : function (input) {
                let type = Number(input.type);
                switch (type) {
                    case 0 : return input.gift;
                    case 1 : return input.gift + '%加息券';
                    case 2 : return input.gift + '积分';
                    case 3 : return input.gift + '+' + input.gift_2 + '%加息券';
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
            },/*
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onGoMy : function () {
                this.showModal = false;
                T.getPop();
                bus.$emit('closePopEvent', true);
            }*/
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
            },
            onClose : function () {
                this.closePop(() => {
                    this.$emit('reload-page');
                });
            },
            onGoMy : function () {
                this.closePop(() => {
                    this.$emit('on-go-my');
                });
            }
        }
    }
</script>