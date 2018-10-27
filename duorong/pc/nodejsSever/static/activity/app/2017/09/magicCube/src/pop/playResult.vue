<style lang='sass'>
    @import '../css/global.scss';
    .modal-mask.play-result{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
        }
        .title, .center-area, .msg-wrapper{
            width: 100%;
        }
        .title{
            color: #666;
            text-align: center;
        }
        .center-area{
            background: #F2F2F2;
            .icon-info{
                @include contain('../images/icon-warning.png');
                background-position: center;
                margin: 0 auto;
            }
            .icon-ok{
                @include contain('../images/icon-success.png');
                background-position: center;
                margin: 0 auto;
            }
            .icon-cube{
                display: inline-block;
                height: 100%;
                vertical-align: middle;
            }
            .icon-cube.red{
                @include contain('../images/cube-red.png');
                background-position: center;
            }
            .icon-cube.green{
                @include contain('../images/cube-green.png');
                background-position: center;
            }
            .icon-cube.yellow{
                @include contain('../images/cube-yellow.png');
                background-position: center;
            }
            .icon-cube.blue{
                @include contain('../images/cube-blue.png');
                background-position: center;
            }
            .icon-cube.white{
                @include contain('../images/cube-white.png');
                background-position: center;
            }
            .icon-cube.orange{
                @include contain('../images/cube-orange.png');
                background-position: center;
            }
            .icon-cube.multi{
                @include contain('../images/cube-multi.png');
                background-position: center;
            }
            .cube-name{
                display: inline-block;
                vertical-align: middle;
            }
            .red{
                color: #E13421;
            }
            .green{
                color: #009644;
            }
            .yellow{
                color: #FFC700;
            }
            .blue{
                color: #2A6FFA;
            }
            .white{
                color: #000;
            }
            .orange{
                color: #EC6100;
            }
        }
        .msg-wrapper{
            .msg{
                display: inline-block;
                color: #666;
                vertical-align: middle;
            }
            .msg.center{
                text-align: center;
            }
        }
        .msg-wrapper::after{
            content: '';
            height: 100%;
            width: 0;
            display: inline-block;
            vertical-align: middle;
        }
        .sole-btn{
            margin: 0 auto;
            color: #FFF;
            background: #F6852F;
            text-align: center;
        }
        .close{
            color: #333;
            text-align: center;
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask play-result">
        <div class="modal-container pop-cnt img-size" data-width='500' data-height='380' data-borderRadius="15" @click='closePropagtion($event)'>
            <slot name="close">
                <div class="close img-size" data-width='50' data-height='50' data-top='5' data-right='5' data-lineHeight="50" @click='closePop'>&otimes;</div>
            </slot>
            <div class="title img-size" data-height="70" data-fontSize="20" data-lineHeight="70">{{popState == 0 ? '恭喜你转到了' : ''}}</div>
            <div class="center-area img-size" data-height="125">
                <div v-show="popState == 2 || popState == 3 || popState == 9" class="icon-info img-size" data-marginTop="20" data-width="74" data-height="84"></div>
                <div v-show="popState == 1" class="icon-ok img-size" data-marginTop="20" data-width="84" data-height="84"></div>
                <div v-show="popState == 0" class="icon-cube img-size" :class="{1: 'red', 2: 'green', 3: 'yellow', 4: 'blue', 5: 'white', 6: 'orange', 7: 'multi'}[giftType]" data-marginLeft="160" data-marginRight="35" data-width="84"></div>
                <div v-show="popState == 0 && giftType != 7" class="cube-name img-size" :class="{1: 'red', 2: 'green', 3: 'yellow', 4: 'blue', 5: 'white', 6: 'orange'}[giftType]" data-fontSize="24">{{giftName}}</div>
                <div v-show="popState == 0 && giftType == 7" class="cube-name img-size" data-fontSize="24"><span class="red">彩</span><span class="green">色</span><span class="yellow">魔</span><span class="blue">方</span></div>
            </div>
            <div class="msg-wrapper img-size" data-height="115">
                <div class="msg img-size" :class="[msg.length > 18 ? '' : 'center']" data-width="450" data-marginLeft="25" data-fontSize="24">{{msg}}</div>
            </div>
            <div class="sole-btn img-size" data-width="150" data-height="50" data-fontSize="26" data-lineHeight="50" data-borderRadius="10" @click="onMainBtn">{{{0: '确 定', 1: '查看奖品', 2: '立即投资', 3: '立即投资', 9: '我知道了'}[popState]}}</div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
            popState : Number,  //0: 转1次成功、1: 转10次成功、2：机会已用完、9: 发生其他错误
            giftType: Number,
            error: String,
            parent: Object
        },
        data(){
            return{
                showModal : true
            }
        },
        computed : {
            giftName : function () {
                switch (this.giftType) {
                    case 1 : return '红色魔方';
                    case 2 : return '10积分';
                    case 3 : return '2%加息券';
                    case 4 : return '10元京东卡';
                    case 5 : return '30元京东卡';
                    case 6 : return '星享卡';
                    case 7 : return '彩色魔方';
                }
            },
            msg : function () {
                if (this.popState == 0) {
                    switch (this.giftType) {
                        case 1 : return '红色魔方收集的数量最多的前10名可获得6666元JD卡等超值大奖';
                        case 2 : return '积分已发放到您的账户，可用来前往【积分商城】兑换各种奖品';
                        case 3 : return '加息券已发放到您的账户，请注意查收并在有效期内使用';
                        case 7 : return '每5个彩色魔方，可兑换1张50元JD卡';
                        default : return '实物奖品将于活动结束后15个工作日内发放';
                    }
                } else if (this.popState == 1) {
                    return '恭喜您，获得10个奖品（魔方）';
                } else if (this.popState == 2) {
                    return '您的魔方机会用完了，请投资获取';
                } else if (this.popState == 3) {
                    return '您的魔方机会已不足10次，请投资获取';
                } else if (this.popState == 9) {
                    return this.error;
                }
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
                if (this.parent) {
                    this.parent.isOnBusy = false;
                }
                T.getPop(callback);
                bus.$emit('closePopEvent');
            },
            onMainBtn : function () {
                this.closePop(() => {
                    if (this.popState == 1) {
                        window.location.replace(window.location.pathname + "#/my/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid);
                    } else if (this.popState == 2 || this.popState == 3) {
                        T.callApp.investment();
                    }
                });
            }
        }
    }
</script>