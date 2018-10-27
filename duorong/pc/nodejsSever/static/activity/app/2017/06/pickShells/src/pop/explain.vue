<style lang='sass'>
    @import '../css/global.scss';
    /*$sjianwidth : $s17;*/
    .modal-mask.explain{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/self/act-rule-pop-bg.png');
            /*@include box-sizing;*/
            /*@include transition-duration(0s);*/
            position: relative;
            .content{
                position: absolute;
                left: 0;
                top: 18.04170444242974%;    /* 199px */
                width: 87.43961352657004%;
                height: 61.22904898063557%;
                padding: 4.74358974358974% 6.28019323671498%;    /* 37px 39px */
                font-size: .65rem;
                text-align: left;
                color: #000;
                overflow-y: scroll;
                .li-num{
                    clear: both;
                    float: left;
                }
                .li-content{
                    float: left;
                    width: 91%;
                    margin-bottom: .6rem;
                    .sub{
                        color: #FF4A00;
                        margin-top: .4rem;
                    }
                }
            }
            .i-see-btn{
                position: absolute;
                top: 88.84859474161378%;
                left: 24.15458937198068%;
                width: 53.14009661835749%;
                height: 5.62103354487761%;
            }
        }   
        .close{ width:$s50; height:$s50; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask explain" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='621' data-height='1103' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content">
                    <div class="li-num">1、</div>
                    <div class="li-content">活动时间：2017.6.19~2017.6.30</div>
                    <div class="li-num">2、</div>
                    <div class="li-content">活动期间，单笔投资≥20天产品每满3万元可获得1个贝壳；单笔投资≥80天产品贝壳数量翻倍；单笔投资≥300天产品，贝壳数量翻3倍。贝壳可以用来兑换奖品以及参与排行榜活动。
                        <div class="sub">例如：单笔投资 7万，≥20天产品可获得贝壳2个，≥80天产品可获得贝壳4个，≥300天产品可获得贝壳6个，以此类推。</div>
                    </div>
                    <div class="li-num">3、</div>
                    <div class="li-content">贝壳兑奖区：根据已获得的贝壳兑换相应奖品，只要贝壳足够可以多次兑换。</div>
                    <div class="li-num">4、</div>
                    <div class="li-content">贝壳排行榜：根据活动期间累计获得的贝壳总数（包含已兑换）进行排名，排名前6可获得如下奖品:
                        <div class="sub">
                            <table style="text-align: center; width: 98%">
                                <tr>
                                    <td width="13%">名次</td>
                                    <td width="52%">奖品1</td>
                                    <td width="35%">奖品2</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>5000元JD卡</td>
                                    <td>2.3%加息券</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>戴森吹风机</td>
                                    <td>2.3%加息券</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Foreo洁面仪</td>
                                    <td>2.3%加息券</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Kindlepaperwhite</td>
                                    <td>2.3%加息券</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>小米电饭煲</td>
                                    <td>2.3%加息券</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>100元JD卡</td>
                                    <td>2.3%加息券</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="li-num">5、</div>
                    <div class="li-content">活动最终解释权归多融财富所有</div>
                </div>
                <div class="i-see-btn" @click='closePop'></div>
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