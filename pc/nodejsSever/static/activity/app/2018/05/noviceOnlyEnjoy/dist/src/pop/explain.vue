<style lang='sass'>
    @import '../css/global.scss';
    @import "../vendor/all-animation.min.css";
    /*$sjianwidth : $s17;*/
    .modal-mask.explain{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/rule-bg.png');
            position: relative;
            .content{
                position: absolute;
                left: 3%;
                top: 17.41654571843251%;
                width: 95.5%;
                height: 80.6966618287373%;
                padding: 0;
                font-size: .6rem;
                line-height: .83rem;
                text-align: left;
                color: #000;
                overflow-y: scroll;
                p span.bold-display{
                    font-weight: bolder;
                }
                .li-num{
                    clear: both;
                    float: left;
                }
                .li-content{
                    float: left;
                    width: 92%;
                    .number{
                        display: inline-block;
                        width: 30%;
                        padding-left: 4%;
                    }
                    .prize{
                        display: inline-block;
                        width: 60%;
                    }
                }
            }
        }   
        .close{ width:$s40; height:$s40; background:none;}
    }
</style>
<template>
<!--<transition :name="transition">-->
<transition>
    <div v-show='showModal' class="modal-mask explain flip-top" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='600' data-height='689' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content">
                    <div>1、活动时间：即日起</div>
                    <div>2、活动仅针对活动期间内新注册的用户</div>
                    <div>3、注册即送</div>
                    <div>①1588元红包：20元红包+268元红包+300元红包+1000元红包的组合奖励，红包将即时发放到您的账户，请在有效期内使用。红包可用于投资时使用，投资生效后将以现金的形式返到您的账户</div>
                    <div>②2%加息券：全场通用（除新手专享产品外），可用于投资时使用，可在原有收益的基础上额外获得2%的收益</div>
                    <div>4、新手专享产品</div>
                    <div>①新手宝：仅限新用户首笔投资的类活期产品，首周加息5%，每人最高可购买额度为50000元。可随时退出，但只能投资1次。假如注册成功后首笔投资了其他产品，则无法投资新手宝。</div>
                    <div>②12%新手专享产品：仅限新用户投资1次，每人最高可购买额度为50000元。</div>
                    <div>5、想获得更多福利，了解更多活动信息，请联系4006-908-896，同时您也可以等待您的专属理财师电话联系！</div>
                    <div>6、本次活动最终解释权归多融财富所有</div>
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
            startTime : Number,
            endTime : Number
        },
        data(){
            return{
                showModal : true
            }
        },
        filters: {
            convertTimestampToDatetime : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy.M.d');
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