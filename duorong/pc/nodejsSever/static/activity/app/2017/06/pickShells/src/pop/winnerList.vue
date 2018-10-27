<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.winner-list{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/self/winner-list.png');
            position: relative;
            .desc{
                position: absolute;
                left: 7.085346215781%;
                top: 28.90932982917214% * 0.9360393603936039;    /* 199px */
                width: 88.08373590982287%;
                font-size: .62rem;
                text-align: center;
                color: #FF4A00;
                overflow-y: scroll;
            }
            .winner-list-wrapper{
                position: absolute;
                top: 50% * 0.9360393603936039;
                left: 7%;
                width: 87.11755233494364%;
                height: 28.25229960578187%;
                overflow-y: scroll;
                color: #000;
                font-size: .6rem;
                line-height: 1.1rem;
                table {
                    width: 100%;
                    tr {
                        td{
                            text-align: center;
                        }
                    }
                }
            }
            .back-home-btn{
                position: absolute;
                /*top: 85.6%;*/
                top: 87.57687576875769%;
                left: 24.63768115942029%;
                width: 52.65700483091787%;
                height: 7.75295663600526%;
            }
        }   
        .close{ width:$s50; height:$s50; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask winner-list" @click='closePop'>
        <div class="modal-wrapper">
            <!--<div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='621' data-height='761' @click='closePropagtion($event)'>-->
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='620' data-height='813' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="desc">活动期间累计贝壳数（含已兑换）排名前6名依次可获得奖品+2.3%加息券</div>
                <div class="winner-list-wrapper">
                    <table>
                        <tr v-for="item in winnerList">
                            <td width="13%">{{item.index}}</td>
                            <td width="32%">{{item.mobilePhone}}</td>
                            <td width="20%">{{item.fortune}}</td>
                            <td width="35%">{{item.prize}}</td>
                        </tr>
                    </table>
                </div>
                <div class="back-home-btn" @click='onBackHome'></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            winnerList : {
                type : Array,
                default : []
            }
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
            },
            onBackHome : function() {
                this.closePop();
                T.callApp.home();
            }
        }
    }
</script>