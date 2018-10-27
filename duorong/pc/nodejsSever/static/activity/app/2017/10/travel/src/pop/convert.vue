<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.convert{
        .modal-container.convert{
            position: relative;
            @include contain("../images/convert.png");
            .group{
                margin: 0 auto;
                width: 86%;
                .city{/*border: 1px solid red;*/
                    display: inline-block;
                    vertical-align: middle;
                    position: relative;
                    .check-mark{
                        position: absolute;
                        @include contain("../images/check.png");
                    }
                }
                .city:nth-of-type(3), .city:nth-of-type(6), .city:nth-of-type(9), .city:nth-of-type(12){
                    margin-right: 0!important;
                }
            }
        }
        .confirm-btn, .cancel-btn{
            position: absolute;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask convert">
        <div class="modal-wrapper">
            <div class="modal-container convert img-size" data-width='500' data-height='790' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='0' data-right='0' data-lineHeight="50" @click='closePop'></div>
                </slot>
                <div class="group img-size" data-marginTop="115" data-height="240">
                    <div v-for="num in 12" class="city img-size" data-marginRight="50" data-marginBottom="20" data-width="110" data-height="110" @click="onSelectCity(num)">
                        <div v-show="selectNum == num" class="check-mark img-size" data-top="39" data-left="30" data-width="70" data-height="64"></div>
                    </div>
                </div>
                <div class="confirm-btn img-size" data-bottom="46" data-left="40" data-width="195" data-height="77" @click="onConfirm"></div>
                <div class="cancel-btn img-size" data-bottom="46" data-left="266" data-width="195" data-height="77" @click="closePop"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popState: Boolean,
            error: String
        },
        data(){
            return{
                showModal : true,
                targetCity : 1,
                selectNum : 1
            }
        },
        computed : {
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
            onSelectCity : function (num) {
                switch (num) {
                    case 1 : this.targetCity = 1;break;
                    case 2 : this.targetCity = 6;break;
                    case 3 : this.targetCity = 10;break;
                    case 4 : this.targetCity = 8;break;
                    case 5 : this.targetCity = 5;break;
                    case 6 : this.targetCity = 4;break;
                    case 7 : this.targetCity = 2;break;
                    case 8 : this.targetCity = 11;break;
                    case 9 : this.targetCity = 12;break;
                    case 10 : this.targetCity = 7;break;
                    case 11 : this.targetCity = 9;break;
                    case 12 : this.targetCity = 3;break;
                }
                this.selectNum = num;
            },
            onConfirm : function () {
                this.closePop(() => {
                    bus.$emit("convert-confirm", this.targetCity);
                });
            }
        }
    }
</script>