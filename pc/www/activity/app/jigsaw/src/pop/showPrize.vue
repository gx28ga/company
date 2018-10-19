<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.show-prize{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/prize-bg.png');
            position: relative;
            .prize-name{
                position: relative;
                color: #EAFF00;
                font-size: .8rem;
                text-align: center;
            }
            .my-link{
                position: absolute;
            }
        }   
        .close{ width:$s40; height:$s40; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <!--<div v-show='showModal' class="modal-mask show-prize" @click='closePop'>-->
    <div v-show='showModal' class="modal-mask show-prize">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='552' data-height='584' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="img-size prize-name" data-top="390" data-width="100%">{{prizeName}}</div>
                <div class="img-size my-link" data-top="527" data-left="74" data-width="117" data-height="26" @click="onGoMy"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            prizeName : String,
            isWap : Boolean,
            uid : String,
            parent : Object
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
                this.parent.isOnPop = false;
            },
            onGoMy : function () {
                this.closePop(() => {
                    window.location.replace(window.location.pathname + "#/my/?" + (this.isWap == true ? 'wap=true&' : '') + "uid=" + this.uid + '&from=shake');
                    window.location.reload();
                });
            }
        }
    }
</script>