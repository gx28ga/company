<style lang='sass' scoped>
    @import '../css/global.scss';
    @import '../vendor/all-animation.min.css';
    .modal-mask.mode-detail{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
            text-align: center;
            .mode-invest,
            .mode-label,
            .current-bar,
            .mode-state-bar,
            .mode-icon,
            .rain-mode-icon,
            .mode-desc,
            .gift-label,
            .gift-container{
                position: absolute;
            }
            .mode-invest{
                color: #e8320d;
            }
            .l-align{text-align: left;}
            .mode-label, .gift-label{
                color: #999;
            }
            .current-bar{
                .mode-icon.small{
                    @include contain("../images/small-white.png");
                }
                .mode-icon.mid{
                    @include contain("../images/mid-white.png");
                }
                .mode-icon.big{
                    @include contain("../images/big-white.png");
                }
                .mode-icon.storm{
                    @include contain("../images/storm-white.png");
                }
                .mode-state-bar.current{
                    background: #FFF;
                    color: #0A0;
                }
                .mode-state-bar.unopened{
                    background: #999;
                    color: #FFF;
                }
            }
            .current-bar.small{
                background: rgb(0, 160, 233);
            }
            .current-bar.mid{
                background: rgb(251, 209, 14);
            }
            .current-bar.big{
                background: rgb(243, 152, 0);
            }
            .current-bar.storm{
                background: rgb(232, 50, 13);
            }
            .rain-mode-icon.small, .rain.small{
            @include contain("../images/small.png");
            }
            .rain-mode-icon.mid, .rain.mid{
            @include contain("../images/mid.png");
            }
            .rain-mode-icon.big, .rain.big{
            @include contain("../images/big.png");
            }
            .rain-mode-icon.storm, .rain.storm{
            @include contain("../images/storm.png");
            }
            .mode-desc{
                color: #333;
            }
            .gift-container{
                text-align: left;
            }
            .gift-box{
                display: inline-block;
                vertical-align: middle;
                border: 1px solid #e8320d;
                color: #e8320d;
                text-align: center;
                div{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .gift-box::after{
                display: inline-block;
                vertical-align: middle;
                content: '';
                height: 100%;
                width: 0;
            }
            .close-sign{
                position: absolute;
                color: #333;
                z-index: 100;
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask mode-detail">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='640' :data-height="bgHeight" data-borderRadius="24" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close-sign img-size" data-top='0' data-right='16' data-fontSize="48" data-lineHeight="48" @click='onClose'>&times;</div>
                </slot>
                <div v-show="mode < 3" class="img-size mode-invest" data-top="35" data-left="35" data-fontSize="24" data-lineHeight="24">累计投资≥120天产品≥{{modeInvest}}元可开启</div>
                <div v-show="mode == 3" class="img-size mode-invest l-align" data-top="35" data-left="35" data-width="550" data-fontSize="24" data-lineHeight="30">即日起至4.26（活动结束前1日），单日投资年化金额（投资金额*产品期限/360）排名前3的用户，可于次日额外获得1次暴雨模式的机会</div>
                <div v-show="mode < 3" class="img-size mode-label" data-top="119" data-left="33" data-fontSize="24" data-lineHeight="24">红包雨模式：</div>
                <div class="img-size current-bar" :class="modeClass[mode]" data-top="176" data-left="54" data-width="328" data-height="64" data-borderRadius="32">
                    <div class="img-size mode-icon" :class="modeClass[mode]" data-top="20" data-left="90" data-width="103" data-height="28"></div>
                    <div class="img-size mode-state-bar unopened" data-top="20" data-left="210" data-width="94" data-height="26" data-borderRadius="5" data-fontSize="18" data-lineHeight="26">未开启</div>
                </div>
                <div class="img-size rain-mode-icon" :class="modeClass[mode]" data-top="177" data-left="35" data-width="100" data-height="116"></div>
                <div class="img-size mode-desc" data-top="257" data-left="125" data-fontSize="24" data-lineHeight="24">{{modeDesc}}</div>
                <div class="img-size gift-label" data-top="354" data-left="33" data-fontSize="24" data-lineHeight="24">红包内包含奖品：</div>
                <div class="img-size gift-container search" data-top="408" data-left="30" data-width="608" data-height="306">
                    <div v-for="(item, i) in modeGifts" class="img-size gift-box" data-width="250" data-height="76" :data-marginRight="i % 2 ? 0 : 50" data-marginBottom="20" data-fontSize="24" data-lineHeight="30">
                        <div>{{item}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cBgHgt = [540, 715, 715, 715];
    const cModeInvest = [0, 50000, 300000];
    const cModeClass = [
        'small',
        'mid',
        'big',
        'storm'
    ];
    const cModeDesc = [
        '雨量较小，每回掉落的红包数量较少',
        '雨量中等，每回掉落的红包数量较多',
        '雨量较大，每回掉落的红包数量很多',
        '雨量最大，每回掉落的红包数量最多'
    ];
    const cModeGifts = [
        ['1~5积分', '0.5%加息券'],
        ['5~20积分', '加息券%%（1.0%~1.2%）', '京东卡%%（5-20元）'],
        ['20-50积分', '加息券%%（1.2%~1.5%）', '京东卡%%（20-100元）', '倍轻松颈部按摩仪', '松下护眼台灯'],
        ['50-1000积分', '加息券%%（1.5%~2.0%）', '京东卡%%（100-150元）', '倍轻松颈部按摩仪', '松下护眼台灯', 'Kindle Paperwhite']
    ];
    export default {
        props : {
            transition : String,
            mode : Number
        },
        data(){
            return{
                showModal : true,
                waitTime: 500
            }
        },
        computed : {
            bgHeight(){
                return cBgHgt[this.mode];
            },
            modeClass(){
                return cModeClass;
            },
            modeDesc(){
                return cModeDesc[this.mode];
            },
            modeGifts(){
                return cModeGifts[this.mode];
            },
            modeInvest(){
                return cModeInvest[this.mode];
            }
        },
        mounted(){
            let el = document.querySelector(".gift-container.search");
            el.innerHTML = el.innerHTML.replace(/%%/g, "<br>");
            T.setImgSize();
            setTimeout(() => {this.waitTime = 0;}, this.waitTime);
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
                if (this.waitTime > 0) return;
                this.showModal = false;
                T.getPop(callback);
            },
            onClose : function () {
                this.closePop(() => {
                    this.$emit("close-only-event");
                });
            }
        }
    }
</script>