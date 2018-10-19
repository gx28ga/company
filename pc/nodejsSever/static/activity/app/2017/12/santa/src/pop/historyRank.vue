<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.history-rank{
        .modal-container.pop-cnt{
            position: relative;
            @include contain("../images/history-pop.png");
            .nav-btn,
            .nav-on-area,
            .date,
            .rank-wrapper,
            .no-data{
                position: absolute;
            }
            .nav-btn{
                @include contain("../images/nav-btn.png");
            }
            .nav-btn.right{
                -webkit-transform: rotate(180deg);
                -moz-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                -o-transform: rotate(180deg);
                transform: rotate(180deg);
            }
            .date{
                color: #E1222B;
                text-align: center;
            }
            .rank-wrapper{
                color: #251957;
                .row > div{
                    display: inline-block;
                    text-align: center;
                }
                .row .amount{
                    text-align: right;
                }
            }
            .no-data{
                color: #E1222B;
                text-align: center;
            }
        }
        .close{
            color: #FFF;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask history-rank">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='709' data-height='946' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='200' data-right='4' @click='closePop'></div>
                </slot>
                <div v-show="showIndex > 0" class="nav-btn img-size" data-top="380" data-left="185" data-width="15" data-height="20"></div>
                <div v-show="showIndex + 1 < data.length" class="nav-btn right img-size" data-top="380" data-left="510" data-width="15" data-height="20"></div>
                <div v-show="showIndex > 0" class="nav-on-area img-size" data-top="360" data-left="155" data-width="75" data-height="65" @click="onNav(-1)"></div>
                <div v-show="showIndex + 1 < data.length" class="nav-on-area right img-size" data-top="360" data-left="480" data-width="75" data-height="65" @click="onNav(1)"></div>
                <!--<div v-if="data.length > 0" class="date img-size" data-top="375" data-left="270" data-fontSize="30" data-lineHeight="30">{{showData.date | replaceMulti}}</div>-->
                <div v-if="data.length > 0" class="date img-size" data-top="360" data-left="240" data-width="230" data-height="65" data-fontSize="36" data-lineHeight="65">{{showData.date | replaceMulti}}</div>
                <div v-if="showData.rankList && showData.rankList.length > 0" class="rank-wrapper img-size" data-top="550" data-left="20">
                    <div v-for="record in showData.rankList" class="row img-size" data-fontSize="26" data-lineHeight="60">
                        <div class="img-size" data-width="105">{{record.rowNum}}</div><!--
                     --><div class="img-size" data-width="160" data-marginRight="35">{{record.mobilePhone}}</div><!--
                     --><div class="amount img-size" data-width="120">{{record.amount | formatDecimal}}</div><!--
                     --><div class="img-size" data-width="240">{{record.gift}}</div>
                    </div>
                </div>
                <div v-if="data.length > 0" class="nav-on-area img-size" data-top="424" data-width="709" data-height="520" @touchstart="onTouchStart" @touchend="onTouchEnd"></div>
                <div v-show="data.length <= 0" class="no-data img-size" data-top="686" data-width="709" data-fontSize="30" data-lineHeight="30">暂无数据</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            data : Array
        },
        data(){
            return{
                showModal : true,
                showIndex : 0
            }
        },
        computed : {
            showData : function () {
                let i = this.showIndex;
                if (i <= this.data.length - 1) {
                    return this.data[i];
                } else {
                    return [];
                }

            }
        },
        filters: {
            replaceMulti : function (input) {
                if (input.length <= 0) return '';
                let temp = input.replace(/(年|月)/g, '-');
                return temp.replace(/日/g, '');
            },
            formatDecimal : function (input) {
                if (Number(input)) {
                    input += '';
                    let dotPos = input.indexOf('.');
                    if (dotPos == -1) {
                        return input + '.00';
                    } else {
                        input += '00';
                        return input.slice(0, dotPos + 3);
                    }
                } else {
                    return input;
                }
            }
        },
        mounted(){
            if (this.data.length > 1) {
                this.showIndex = this.data.length - 1;
            }
            setTimeout(() => {T.setImgSize();}, 20);
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
            onNav : function (offset) {
                let newIndex = this.showIndex + offset;
                if (newIndex < 0 || newIndex >= this.data.length) return;
                this.showIndex = newIndex;
                setTimeout(() =>{T.setImgSize();}, 20);
            },
            onTouchStart : function(evt) {
                this.stPosX = evt.changedTouches[0].clientX;
                this.stPosY = evt.changedTouches[0].clientY;
            },
            onTouchEnd : function(evt) {
                let last = evt.changedTouches.length - 1;
                this.edPosX = evt.changedTouches[last].clientX;
                this.edPosY = evt.changedTouches[last].clientY;
                let lenX = Math.abs(this.edPosX - this.stPosX);
                if(lenX < 20 || Math.abs(this.edPosY - this.stPosY) > lenX) return;
                if (this.edPosX > this.stPosX ) {
                    this.onNav(-1);
                } else {
                    this.onNav(1);
                }
            }
        }
    }
</script>