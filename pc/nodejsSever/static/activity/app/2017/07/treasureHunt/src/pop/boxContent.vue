<style lang='sass'>
    @import '../css/global.scss';
    /*$sjianwidth : $s17;*/
    .modal-mask.box-content{
        .modal-container.pop-cnt{
            max-width:none;
            position: relative;
            .box-type-icon{
                position: absolute;
                top: 7.27272727272727%;
                left: 67.38131699846861%;
            }
            .black-box-icon{
                @extend .box-type-icon;
                @include contain('../images/opened-black.png');
            }
            .silver-box-icon{
                @extend .box-type-icon;
                @include contain('../images/opened-silver.png');
            }
            .gold-box-icon{
                @extend .box-type-icon;
                @include contain('../images/opened-gold.png');
            }
            .prize-img-wrapper{
                position: absolute;
                top: 23.58346094946401%;
                left: 37.21286370597243%;
            }
            .prize-name-wrapper{
                position: absolute;
                top: 54.87603305785124%;
                left: 12.5%;
                width: 75%;
                color: #633F2B;
                font-size: .85rem;
                font-weight: bold;
                line-height: .85rem;
                margin: 0 auto;
                text-align: center;
            }
            .pop-main-btn{
                position: absolute;
                left: 31.69984686064319%;
                top: 85%;
                width: 35.52833078101072%;
                height: 9%;
            }
        }
        .modal-container.pop-cnt.value-bg{
            @include contain('../images/value-pop.png');
        }
        .modal-container.pop-cnt.entity-bg{
            @include contain('../images/entity-pop.png');
        }
        /*.just-for-can-copy-box-content-img{
            .black-box-content{
                @include contain('../images/black/JXQ-20170619134354.png');
                @include contain('../images/black/SW-20170619133926.png');
                @include contain('../images/black/SW-20170619133958.png');
                @include contain('../images/black/SW-20170619134015.png');
                @include contain('../images/black/SW-20170619134033.png');
                @include contain('../images/black/SW-20170619134123.png');
                @include contain('../images/black/SW-20170619134156.png');
                @include contain('../images/black/SW-20170619134217.png');
                @include contain('../images/black/SW-20170619134440.png');
                @include contain('../images/black/SW-20170619134457.png');
            }
            .silver-box-content{
                @include contain('../images/silver/JXQ-20170619134735.png');
                @include contain('../images/silver/SW-20170619133958.png');
                @include contain('../images/silver/SW-20170619134033.png');
                @include contain('../images/silver/SW-20170619134535.png');
                @include contain('../images/silver/SW-20170619134601.png');
                @include contain('../images/silver/SW-20170619134645.png');
                @include contain('../images/silver/SW-20170619134848.png');
                @include contain('../images/silver/SW-20170619134912.png');
                @include contain('../images/silver/SW-20170619134924.png');
            }
            .gold-box-content{
                @include contain('../images/gold/JXQ-20170619134735.png');
                @include contain('../images/gold/JXQ-20170619135239.png');
                @include contain('../images/gold/SW-20170619134033.png');
                @include contain('../images/gold/SW-20170619134601.png');
                @include contain('../images/gold/SW-20170619135046.png');
                @include contain('../images/gold/SW-20170619135110.png');
                @include contain('../images/gold/SW-20170619135132.png');
                @include contain('../images/gold/SW-20170619135155.png');
                @include contain('../images/gold/SW-20170619135313.png');
            }
        }*/
    .just-for-can-copy-box-content-img{
        .black-box-content{
            @include contain('../images/black/SW-20170629175527.png');
            @include contain('../images/black/SW-20170629175550.png');
            @include contain('../images/black/JXQ-20170629175846.png');
            @include contain('../images/black/SW-20170629180110.png');
            @include contain('../images/black/SW-20170629180136.png');
            @include contain('../images/black/SW-20170629180210.png');
            @include contain('../images/black/SW-20170629180332.png');
            @include contain('../images/black/SW-20170629180344.png');
            @include contain('../images/black/SW-20170629180359.png');
            @include contain('../images/black/SW-20170629180419.png');
        }
        .silver-box-content{
            @include contain('../images/silver/JXQ-20170629175908.png');
            @include contain('../images/silver/SW-20170629180457.png');
            @include contain('../images/silver/SW-20170629180516.png');
            @include contain('../images/silver/SW-20170629180557.png');
            @include contain('../images/silver/SW-20170629180624.png');
            @include contain('../images/silver/SW-20170629180654.png');
            @include contain('../images/silver/SW-20170629180710.png');
            @include contain('../images/silver/SW-20170629180724.png');
            @include contain('../images/silver/SW-20170629180737.png');
        }
        .gold-box-content{
            @include contain('../images/gold/SW-20170629180752.png');
            @include contain('../images/gold/JXQ-20170629180836.png');
            @include contain('../images/gold/SW-20170629180924.png');
            @include contain('../images/gold/SW-20170629180940.png');
            @include contain('../images/gold/SW-20170629180956.png');
            @include contain('../images/gold/SW-20170629181011.png');
            @include contain('../images/gold/SW-20170629181023.png');
            @include contain('../images/gold/SW-20170629181039.png');
            @include contain('../images/gold/JXQ-20170629175930.png');
        }
    }
        /*.close{ width:$s40; height:$s40; background:none;}*/
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask box-content" @click='closePop'>
        <div class="modal-wrapper">
            <!--非实物奖品-->
            <div v-show="prizeType != 5" class="modal-container pop-cnt value-bg img-size" data-paddingTop='126' data-paddingLeft='50' data-width='653' data-height='605' @click='closePropagtion($event)'>
                <!--<slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>-->
                <div v-if="boxLevel == 0" class="black-box-icon img-size" data-width="87" data-height="73"></div>
                <div v-if="boxLevel == 1" class="silver-box-icon img-size" data-width="87" data-height="73"></div>
                <div v-if="boxLevel == 2" class="gold-box-icon img-size" data-width="87" data-height="73"></div>
                <div class="prize-img-wrapper img-size" data-height="160" data-width="160">
                    <img :src="'./src/images/' + boxImgPath + prizeCode + '.png'" width="100%">
                </div>
                <div class="prize-name-wrapper">{{prizeName}}</div>
                <div class="pop-main-btn" @click="closePop"></div>
            </div>
            <!--实物奖品-->
            <div v-show="prizeType == 5" class="modal-container pop-cnt entity-bg img-size" data-paddingTop='126' data-paddingLeft='50' data-width='653' data-height='605' @click='closePropagtion($event)'>
                <!--<slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>-->
                <div v-if="boxLevel == 0" class="black-box-icon img-size" data-width="87" data-height="73"></div>
                <div v-if="boxLevel == 1" class="silver-box-icon img-size" data-width="87" data-height="73"></div>
                <div v-if="boxLevel == 2" class="gold-box-icon img-size" data-width="87" data-height="73"></div>
                <div class="prize-img-wrapper img-size" data-height="160" data-width="160">
                    <!--<img :src="'../src/images/' + boxImgPath + prizeCode + '.png'" width="100%">-->
                    <img :src="'./src/images/' + boxImgPath + prizeCode + '.png'" width="100%">
                </div>
                <div class="prize-name-wrapper">{{prizeName}}</div>
                <div class="pop-main-btn" @click="closePop"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
//    import {httpPrizeList} from '../common/URL';
//    import requirePop from './requirePop.js';
    export default {
        props : {
            transition : String,
            boxLevel : Number,
            prizeCode : Number,
            prizeType : Number,
            prizeName : String
        },
        data(){
            return{
                showModal : true
            }
        },
        computed : {
            boxImgPath : function () {
                let subFolder = '';
                switch (this.boxLevel) {
                    case 0 :
                        subFolder = 'black/';
                        break;
                    case 1 :
                        subFolder = 'silver/';
                        break;
                    case 2 :
                        subFolder = 'gold/';
                        break;
                }
                return subFolder;
            }
        },
        mounted(){
            T.setImgSize();
        },
        /*filters: {
            convertTimestampToDatetime : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy.M.dd hh:mm:ss');
            }
        },*/
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
            /* onGoBox : function (level) {
                this.closePop();
                router.push({path : '/box/' + level, query: { wap: 'true', uid: T.uid }});
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
            }*/
        }
    }
</script>