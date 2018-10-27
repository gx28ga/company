<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.about-xchg{
        .modal-wrapper{
            border: 1px solid #a90094;
            background: #ffa4c8;
        }
        .modal-container.pop-cnt{
            position: relative;
            border: 1px solid #a90094;
            background: #ffeef5;
            .title{
                width: 100%;
                border-bottom: 1px solid #a90195;
                color: #a90195;
                font-weight: bold;
            }
            table{
                margin: 0 auto;
                width: 90%;
                border-collapse: collapse;
                border: 1px solid #a90195;
                text-align: center;
                color: #a90094;
            }
            td, th{
                border: 1px dotted #a90195;
            }
            .set{
                width: 25%;
            }
            .gift{
                width: 75%;
            }
            .note{
                width: 100%;
                text-align: center;
                color: #a90094;
            }
        }
        .close{
            color: #a90094;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask about-xchg">
        <div class="modal-wrapper img-size" data-borderRadius="16" data-padding="4">
            <div class="modal-container pop-cnt img-size" data-borderRadius="12" data-width='590' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='64' data-height='64' data-top='-10' data-right='-4' data-fontSize="64" data-lineHeight="64" @click='onClose'>&times;</div>
                </slot>
                <div class="title img-size" data-height="60">
                    <span class="img-size" data-marginLeft="20" data-fontSize="30" data-lineHeight="60">奖品介绍</span>
                </div>
                <table class="img-size" data-marginTop="35" data-fontSize="24" data-lineHeight="48">
                    <tr>
                        <th class="img-size set">集齐套数</th>
                        <th class="img-size gift">奖 品</th>
                    </tr>
                    <tr v-for="gift in gifts">
                        <td>{{gift.gradeSet}}套</td>
                        <td>{{gift.name}}</td>
                    </tr>
                </table>
                <div class="img-size note" data-marginTop="40" data-marginBottom="60" data-fontSize="24" data-lineHeight="36">奖励在满足条件后自动获得，无需兑换<br>以最高奖励为准，不重复获得</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cGifts = [
        {gradeSet: 1, name: "小米移动电源5000mah"},
        {gradeSet: 3, name: "欧乐B电动牙刷"},
        {gradeSet: 5, name: "Kindle入门款"},
        {gradeSet: 8, name: "富士instax拍立得"},
        {gradeSet: 10, name: "倍轻松眼部按摩仪"}
    ];
    export default {
        props : {
            transition : String
        },
        data(){
            return{
                showModal : true
            }
        },
        computed : {
            gifts(){
                return cGifts;
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
//                bus.$emit('closePopEvent');
            },
            onClose : function () {
                this.closePop(()=>{});
            }
        }
    }
</script>