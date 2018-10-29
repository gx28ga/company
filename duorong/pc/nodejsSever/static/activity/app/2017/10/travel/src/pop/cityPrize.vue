<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.city-prize{
        .modal-container.pop-cnt{
            position: relative;
            background: #4EC6C7;
        }
        .city-mark{
            margin: 0 auto;
        }
        .mark-1{
            @extend .city-mark;
            @include contain("../images/shanghai.png");
        }
        .mark-2{
            @extend .city-mark;
            @include contain("../images/chengdu.png");
        }
        .mark-3{
            @extend .city-mark;
            @include contain("../images/changbaishan.png");
        }
        .mark-4{
            @extend .city-mark;
            @include contain("../images/nanjing.png");
        }
        .mark-5{
            @extend .city-mark;
            @include contain("../images/qingdao.png");
        }
        .mark-6{
            @extend .city-mark;
            @include contain("../images/guilin.png");
        }
        .mark-7{
            @extend .city-mark;
            @include contain("../images/guangzhou.png");
        }
        .mark-8{
            @extend .city-mark;
            @include contain("../images/beijing.png");
        }
        .mark-9{
            @extend .city-mark;
            @include contain("../images/lasa.png");
        }
        .mark-10{
            @extend .city-mark;
            @include contain("../images/sanya.png");
        }
        .mark-11{
            @extend .city-mark;
            @include contain("../images/xian.png");
        }
        .mark-12{
            @extend .city-mark;
            @include contain("../images/hongkong.png");
        }
        .welcome{
            width: 100%;
            color: #FFF;
            text-align: center;
        }
        .prize-box{
            margin: 0 auto;
            .sign{
                @include contain("../images/prize.png");
            }
            .gift{
                color: red;
            }
        }
        .prize-box > div{
            display: inline-block;
            vertical-align: middle;
        }
        .sole-btn{
            margin: 0 auto;
            @include contain("../images/btn-isee.png");
        }
        .close{
            color: #FFF;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask city-prize">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='500' data-height='760' data-borderRadius="15" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'>&otimes;</div>
                </slot>
                <div :class="'mark-' + city" class="img-size" data-marginTop="25" data-width="340" data-height="425"></div>
                <div class="welcome img-size" data-marginTop="12" data-fontSize="24" data-lineHeight="30">{{cityTitle}}，欢迎您<br>送您一份“纪念品”</div>
                <div class="prize-box img-size" data-marginTop="40" data-height="75">
                    <div class="sign img-size" data-width="75" data-height="75"></div>
                    <div class="gift img-size" data-marginLeft="15" data-fontSize="30" data-lineHeight="36">{{gift}}</div>
                </div>
                <div class="sole-btn img-size" data-marginTop="30" data-width="309" data-height="75" @click="closePop"></div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            city: Number
        },
        data(){
            return{
                showModal : true
            }
        },
        computed : {
            cityTitle : function () {
                switch (this.city){
                    case 1 : return '金融魔都-上海';
                    case 2 : return '美食之地-成都';
                    case 3 : return '白雪皑皑-长白山';
                    case 4 : return '六朝古都-南京';
                    case 5 : return '美味海鲜-青岛';
                    case 6 : return '山水甲天下-桂林';
                    case 7 : return '岭南风情-广州';
                    case 8 : return '人文帝都-北京';
                    case 9 : return '朝圣之地-拉萨';
                    case 10 : return '海湾沙滩-三亚';
                    case 11 : return '历史名城-西安';
                    case 12 : return '购物天堂-香港';
                }
            },
            gift : function () {
                switch (this.city) {
                    case 1 : return '携程旅行卡^(价值￥1000）';
                    case 2 : return 'LG趣拍得';
                    case 3 : return '松下离子蒸汽美容器^(价值￥1000）';
                    case 4 : return '飞利浦电动刮胡刀';
                    case 5 : return '小米移动电源';
                    case 6 : return '10元京东购物卡';
                    case 7 : return '1.5%加息券';
                    case 8 : return '50元红包';
                    case 9 : return '50积分';
                    case 10 : return '5积分';
                    case 11 : return '10积分';
                    case 12 : return '2%加息券';
                }
            }
        },
        mounted(){
            T.setImgSize();
            setTimeout(() => {
                let gift = document.getElementsByClassName("gift")[0];
                let name = gift.innerHTML;
                gift.innerHTML = name.replace(/\^/g, '<br>');
            }, 20);
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
            }
        }
    }
</script>
