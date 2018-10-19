<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.show-gift{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
            .mid-align{
                text-align: center;
            }
            .section{
                width: 100%;
                div{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .title{
                color: #e60012;
                text-align: center;
                .deco-line{
                    border-top: 1px solid #e60012;
                }
            }
            .gift-box::after, .gift-frame::after{
                content: '';
                width: 0;
                height: 100%;
                display: inline-block;
                vertical-align: middle;
            }
            .gift-frame{
                @include contain("../images/gift-frame.png");
            }
            .gift-name{
                color: #bf0008;
            }
            .section.rt-shift{
                margin-left: 24%;
                width: 75%;
            }
            .argentina{
                @include contain("../images/card/argentina.png");
            }
            .australia{
                @include contain("../images/card/australia.png");
            }
            .belgium{
                @include contain("../images/card/belgium.png");
            }
            .brazil{
                @include contain("../images/card/brazil.png");
            }
            .columbia{
                @include contain("../images/card/columbia.png");
            }
            .costa-rica{
                @include contain("../images/card/costa-rica.png");
            }
            .croatia{
                @include contain("../images/card/croatia.png");
            }
            .denmark{
                @include contain("../images/card/denmark.png");
            }
            .egypt{
                @include contain("../images/card/egypt.png");
            }
            .england{
                @include contain("../images/card/england.png");
            }
            .france{
                @include contain("../images/card/france.png");
            }
            .germany{
                @include contain("../images/card/germany.png");
            }
            .iceland{
                @include contain("../images/card/iceland.png");
            }
            .iran{
                @include contain("../images/card/iran.png");
            }
            .japan{
                @include contain("../images/card/japan.png");
            }
            .korea{
                @include contain("../images/card/korea.png");
            }
            .mexico{
                @include contain("../images/card/mexico.png");
            }
            .morocco{
                @include contain("../images/card/morocco.png");
            }
            .nigeria{
                @include contain("../images/card/nigeria.png");
            }
            .panama{
                @include contain("../images/card/panama.png");
            }
            .peru{
                @include contain("../images/card/peru.png");
            }
            .poland{
                @include contain("../images/card/poland.png");
            }
            .portugal{
                @include contain("../images/card/portugal.png");
            }
            .russia{
                @include contain("../images/card/russia.png");
            }
            .saudi-arabia{
                @include contain("../images/card/saudi-arabia.png");
            }
            .senegal{
                @include contain("../images/card/senegal.png");
            }
            .serbia{
                @include contain("../images/card/serbia.png");
            }
            .spain{
                @include contain("../images/card/spain.png");
            }
            .sweden{
                @include contain("../images/card/sweden.png");
            }
            .switzerland{
                @include contain("../images/card/switzerland.png");
            }
            .tunisia{
                @include contain("../images/card/tunisia.png");
            }
            .uruguay{
                @include contain("../images/card/uruguay.png");
            }
            .team-name{
                color: #00F;
                width: 100%;
                text-align: center;
            }
            .note{
                color: #6495ED;
                width: 85%;
                margin: 0 auto;
            }
            .ok{
                margin: 0 auto;
                @include contain("../images/main-btn.png");
                color: #FFF;
                text-align: center;
            }
        }
        .close{
            color: #222;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask show-gift">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='520' :data-height='popState === 32 ? 438 : 418' data-borderRadius="16" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='20' data-height='20' data-top='0' data-right='18' data-fontSize="40" data-lineHeight="40" @click='onClose'>&times;</div>
                </slot>
                <div class="img-size section title" data-marginTop="30" data-height="24">
                    <div class="img-size deco-line" data-width="50" data-height="0"></div><!--
                 --><div class="img-size" data-marginLeft="15" data-marginRight="15" data-fontSize="24" data-lineHeight="24">恭喜抽中</div><!--
                 --><div class="img-size deco-line" data-width="50" data-height="0"></div>
                </div>
                <template  v-if="popState != 32">
                    <div class="img-size section gift-box mid-align" data-height="190">
                        <div class="img-size gift-frame" data-width="231" data-height="94"><!--
                         --><div class="img-size gift-name mid-align" data-marginLeft="60" data-width="136" data-fontSize="24" data-lineHeight="32">{{giftName}}</div>
                        </div>
                    </div>
                    <div class="img-size note" data-marginBottom="20" data-fontSize="22" data-lineHeight="30">{{note}}</div>
                </template>
                <template v-else>
                    <div class="img-size section gift-box mid-align" data-marginTop="50" data-height="180">
                        <div class="img-size" :class="cardClass" data-width="120" data-height="180"></div>
                    </div>
                    <div class="img-size team-name" data-marginTop="10" data-marginBottom="30" data-fontSize="24" data-lineHeight="24">{{teamName}}</div>
                </template>
                <div class="img-size ok" data-width="260" data-height="65" data-borderRadius="28" data-fontSize="30" data-lineHeight="65" @click="onClose">确 定</div>
                <!--<div class="img-size continue" data-top="610" data-left="380" data-width="247" data-height="70" data-fontSize="34" data-lineHeight="70" @click="onContinue">{{continueLabel[popState]}}</div>-->
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cCardClass = [
        'russia', 'portugal', 'france', 'argentina', 'brazil', 'germany', 'belgium', 'poland',
        'saudi-arabia', 'spain', 'australia', 'iceland', 'switzerland', 'mexico', 'panama', 'senegal',
        'egypt', 'morocco', 'peru', 'croatia', 'costa-rica', 'sweden', 'tunisia', 'columbia',
        'uruguay', 'iran', 'denmark', 'nigeria', 'serbia', 'korea', 'england', 'japan'
    ];
    const cTeamName = [
        '俄罗斯', '葡萄牙', '法国', '阿根廷', '巴西', '德国', '比利时', '波兰',
        '沙特阿拉伯', '西班牙', '澳大利亚', '冰岛', '瑞士', '墨西哥', '巴拿马', '塞内加尔',
        '埃及', '摩洛哥', '秘鲁', '克罗地亚', '哥斯达黎加', '瑞典', '突尼斯', '哥伦比亚',
        '乌拉圭', '伊朗', '丹麦', '尼日利亚', '塞尔维亚', '韩国', '英格兰', '日本'
    ];
    const cGiftName = ['', '10积分', '50积分', '', '1.0%加息券', '2.0%加息券', '', '5元JD卡'];
    const cNote = ['积分/加息券将即时发放到您的账户，请注意查收', '实物奖品将于活动结束后15个工作内发放，请知晓'];
    const cContinueLabel = ['继续开启红包雨', '再连续10次'];
    export default {
        props : {
            transition : String,
            popState : Number,
            giftName : String,
            teamCd : Number
        },
        data(){
            return{
                showModal : true,
                waitTime: 500
            }
        },
        computed : {
            /*giftName(){
                return cGiftName[this.popState];
            },*/
            cardClass(){
                if (this.popState === 32) {
                    return cCardClass[this.teamCd - 1];
                }
            },
            teamName(){
                if (this.popState === 32) {
                    return cTeamName[this.teamCd - 1];
                }
            },
            note(){
                const gift = this.giftName;
                return gift.indexOf('券') === -1 && gift.indexOf('积分') === -1 ? cNote[1] : cNote[0];
            },
            /*note(){
                const index = this.popState;
                if (index === 1 || index === 2 || index === 4 || index === 5) {
                    return cNote[0];
                } else if (index === 7) {
                    return cNote[1];
                }
            },*/
            realGift(){
                const gift = this.giftEty;
                return gift.indexOf("积分") == -1 && gift.indexOf("加息") == -1 ? 1 : 0;
            },
            continueLabel(){
                return cContinueLabel;
            }
        },
        mounted(){
            T.setImgSize();
            this.$nextTick(()=>{
                let el = document.querySelector(".gift-box");
                el.innerHTML = el.innerHTML.replace(/%%/g, '<br>');
            });
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
//                bus.$emit('closePopEvent');
            },
            onClose : function () {
                this.closePop(() => {
                    this.$emit("close-only-event");
                });
            },
            /*onContinue(){
                this.closePop(()=>{
                    this.$emit("replay-event");
                });
            },*/
            onGoMy : function () {
                this.closePop(() => {
                    this.$emit("go-my-event");
                });
            }
        }
    }
</script>