<style lang='sass'>
    @import '../css/global.scss';
    /*$sjianwidth : $s17;*/
    .modal-mask.explain{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/pop-rule-bg.png');
            /*@include box-sizing;*/
            /*@include transition-duration(0s);*/
            position: relative;
            .content{
                position: absolute;
                left: 6.17647058823529%;
                top: 7.35163861824624%;    /* 199px */
                width: 84.85294117647059%;
                height: 85.65101860053144%;
                padding: 0;    /* 37px 39px */
                font-size: .65rem;
                line-height: 1.1rem;
                text-align: left;
                color: #633F2B;
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
                    width: 91%;
                    /*margin-bottom: .6rem;*/
                    .sub{
                        color: #FF4A00;
                        margin-top: .4rem;
                    }
                }
            }
            /*.i-see-btn{
                position: absolute;
                top: 88.84859474161378%;
                left: 24.15458937198068%;
                width: 53.14009661835749%;
                height: 5.62103354487761%;
            }*/
        }   
        .close{ width:$s40; height:$s40; background:none;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask explain" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='680' data-height='1129' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content">
                    <p>活动规则</p>
                    <p><span  class="bold-display">1、活动时间：2017.7.1~2017.7.16</span></p>
                    <!--<p><span class="bold-display">2、</span>活动期间，单笔投资≥20天产品每满10000元即可获得1个黑色宝箱；单笔投资≥80天产品每满30000元可获得1个银色宝箱；单笔投资≥300天产品每满50000元可获得1个金色宝箱；开启宝箱，可获得不同的奖品，100%有奖。</p>-->
                    <p><span class="bold-display">2、</span>活动期间，单笔投资≥20天产品每满10000元即可获得1个黑色宝箱；单笔投资≥80天产品每满30000元可额外获得1个银色宝箱；单笔投资≥300天产品每满50000元可额外获得1个金色宝箱；开启宝箱，可获得不同的奖品，100%有奖。<br>例如：投资30000元90天产品，可获得3个黑色宝箱，额外获得1个银色宝箱，以此类推</p>
                    <P><span class="bold-display">3、宝藏包括：</span></P>
                    <p><span class="bold-display">①失落的亚特兰蒂斯宝藏 · 黑色宝箱：</span>1000元京东卡、膳魔师保温杯、小米移动电源、50元京东卡、30元京东购物卡、10元京东购物卡、2%加息券、5积分、1积分</p>
                    <p><span class="bold-display">②消失的楼兰古国宝藏 · 银色宝箱：</span>佳能700d单反相机、飞利浦电动牙刷、Lg趣拍得、迪士尼限量邮票套装、50元京东购物卡、20元京东购物卡、2.3%加息券、50积分、10积分</p>
                    <p><span class="bold-display">③海贼王的宝藏 · 金色宝箱：</span>Mac book air、戴森吹风机、Kindle Paperwhite、小米电热水壶、迪士尼限量邮票套装、50元京东购物卡、2.5%加息券、2.3%加息券、100积分</p>
                    <p><span class="bold-display">4、礼物发放</span></p>
                    <p>①积分/优惠券，将即时发放到您的多融账户，可登录APP或官网查看并使用</p>
                    <p>②实物奖品，将在活动结束后的15个工作日内完成发放，礼品以收到的实物为准</p>
                    <p><span class="bold-display">5、</span>活动最终解释权归多融财富所有</p>
                </div>
                <!--<div class="i-see-btn" @click='closePop'></div>-->
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