<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.show-gift{
        .modal-container.pop-cnt{
            position: relative;
            background: #96007E;
            color: #fff449;
            .title{
                margin: 0 auto;
                width: 100%;
                border-bottom: 1px dotted #FFF;
                text-align: center;
                font-weight: bold;
            }
            .mid-align{
                text-align: center;
            }
            .cat{
                @include contain("../images/cat.png");
                background-position: center;
            }
            .altman{
                @include contain("../images/altman.png");
                background-position: center;
            }
            .gourd-boy{
                @include contain("../images/gourd-boy.png");
                background-position: center;
            }
            .mcdull{
                @include contain("../images/mcdull.png");
                background-position: center;
            }
            .grey-wolf{
                @include contain("../images/grey-wolf.png");
                background-position: center;
            }
            .cat-officer{
                @include contain("../images/cat-officer.png");
                background-position: center;
            }
            .section{
                div{
                    display: inline-block;
                    vertical-align: middle;
                }
            }
            .note span{
                color: #1E90FF;
                font-weight: bold;
            }
            .section.rt-shift{
                margin-left: 24%;
                width: 75%;
            }
            .opr-btn{
                margin: 0 auto;
                @include contain("../images/nfy-btn.png");
                color: #a90094;
                text-align: center;
            }
            .close-sign{
                position: absolute;
                color: #FFF;
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask show-gift">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='550' data-borderRadius="12" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close-sign img-size" data-top='0' data-right='6' data-fontSize="64" data-lineHeight="48" @click='onClose'>&times;</div>
                </slot>
                <div class="img-size title" data-fontSize="30" data-lineHeight="72">恭喜获得</div>
                <template v-if="popState == 1">
                    <div class="img-size section mid-align" data-marginTop="30" data-marginBottom="30">
                        <div class="img-size" :class="toyClass[toy[0]]" data-width="100" data-height="100"></div>
                        <div class="img-size" data-marginLeft="30" data-marginRight="30" data-fontSize="40">&plus;</div>
                        <div class="img-size" data-fontSize="30" data-lineHeight="120">{{giftName}}</div>
                    </div>
                    <div class="img-size section comment" data-width="540" data-marginBottom="30" data-marginLeft="100" data-fontSize="24" data-lineHeight="36">{{giftComment[realGift]}}</div>
                </template>
                <template v-else-if="popState == 2">
                    <div class="img-size section mid-align" data-marginTop="30" data-marginBottom="30">
                        <div class="img-size" :class="toyClass[toy[0]]" data-width="100" data-height="100"></div>
                        <div class="img-size" data-marginLeft="20" data-marginRight="20" data-fontSize="40">&plus;</div>
                        <div class="img-size" :class="toyClass[toy[1]]" data-width="100" data-height="100"></div>
                        <div class="img-size" data-marginLeft="20" data-marginRight="20" data-fontSize="40">&plus;</div>
                        <div class="img-size" data-fontSize="30" data-lineHeight="120">2个奖品</div>
                    </div>
                    <div class="img-size section note" data-width="540" data-marginBottom="30" data-marginLeft="90" data-fontSize="24" data-lineHeight="36">奖品详情请前往<span @click="onGoMy">我的奖品</span>页进行查看</div>
                </template>
                <template v-else>
                    <div class="img-size section mid-align" data-marginTop="80" data-marginBottom="80">
                        <div class="img-size note" data-fontSize="30" data-lineHeight="42">{{popState == 3 ? 10 : 20}}个公仔及奖品<br>请前往<span @click="onGoMy">我的奖品</span>页查看详情</div>
                    </div>
                </template>
                <div class="img-size opr-btn" data-marginBottom="30" data-width="223" data-height="72" data-fontSize="30" data-lineHeight="72" @click="onClose">好 的</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cToyClass = ['cat', 'altman', 'gourd-boy', 'mcdull', 'grey-wolf', 'cat-officer'];
    const cGiftName = ['', '1积分', '3积分', '5积分', '2.0%加息券', '5元JD卡', '30元JD卡', '星享卡', '摩飞榨汁机', 'BOSE蓝牙电子音箱'];
    const cGiftComment = ['积分/加息券将即时发放到您的账户，%%请注意查收', '实物奖品将于活动结束后15个工作%%日内发放，请知晓'];
    export default {
        props : {
            transition : String,
            popState : Number,
            toy: Array,
            giftType : Number
        },
        data(){
            return{
                showModal : true,
                waitTime: 500
            }
        },
        computed : {
            toyClass(){
                return cToyClass;
            },
            giftName(){
                return cGiftName[this.giftType];
            },
            giftComment(){
                return cGiftComment;
            },
            realGift(){
                return this.giftType > 0 && this.giftType < 5 ? 0 : 1;
            }
        },
        mounted(){
            T.setImgSize();
            this.$nextTick(()=>{
                let el = document.querySelector(".comment");
                if (el) {
                    el.innerHTML = el.innerHTML.replace(/%%/g, '<br>');
                }
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
            onGoMy : function () {
                this.closePop(() => {
                    this.$emit("go-my-event");
                });
            }
        }
    }
</script>