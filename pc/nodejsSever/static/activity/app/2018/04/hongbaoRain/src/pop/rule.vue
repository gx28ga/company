<style lang='sass' scoped>
    @import '../css/global.scss';
    .modal-mask.cp376-rule{
        .modal-container.pop-cnt{
            position: relative;
            background: #FFF;
            text-align: center;
            .rule-title{
                @include contain("../images/rule-title.png");
                background-position: center;
                width: 100%;
            }
            .content-area{
                overflow-x: hidden;
                overflow-y: scroll;
                position: relative;
                color: #333;
                text-align: left;
                .item{
                    margin-bottom: .4rem;
                }
                .inner-item{
                    margin-top: .25rem;
                }
                .inner-item.comment{
                    color: #9cfff2;
                }
                .part{
                    display: inline-block;
                    vertical-align: top;
                }
                table, td{
                    border: 1px solid #333;
                    border-collapse: collapse;
                }
                table .center{
                    text-align: center;
                }
            }
            .ok{
                position: absolute;
                @include contain("../images/rule-ok.png");
                .label{
                    color: #FFF;
                    position: absolute;
                }
            }
            .close-sign{
                position: absolute;
                z-index: 100;
                color: #000;
            }
        }
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask cp376-rule">
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='670' data-height='1160' data-borderRadius="20" @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close-sign img-size" data-top='0' data-right='20' data-fontSize="48" data-lineHeight="48" @click='onClose'>&times;</div>
                </slot>
                <div class="img-size rule-title" data-marginTop="36" data-height="36"></div>
                <div class="img-size content-area" data-marginTop="25" data-marginLeft="15" data-marginRight="15" data-width="640"data-height="970" data-fontSize="22" data-lineHeight="30">
                    <div class="item"><div class="part img-size" data-width="20">1、</div>
                        <div class="part img-size" data-width="610">活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
                    </div>
                    <div class="item"><div class="part img-size" data-width="20">2、</div>
                        <div class="part img-size" data-width="610">活动期间，单笔投资≥20天产品，每满10000元，可获得1次游戏机会。单笔投资≥120天产品，每满50000元，额外获得3次机会。
                            <div class="inner-item">举例：投资143天产品7万，可获得10次机会，以此类推。</div>
                        </div>
                    </div>
                    <div class="item"><div class="part img-size" data-width="20">3、</div>
                        <div class="part img-size" data-width="610">【红包雨来袭】<br>每回游戏时间5秒，屏幕中会随机下起“红包雨”，手指点击打开红包，可获得红包中的奖励</div>
                    </div>
                    <div class="item"><div class="part img-size" data-width="20">4、</div>
                        <div class="part img-size" data-width="610">【让红包雨下得更猛烈一些吧】<br>活动期间，累计投资金额越大，红包雨就越大，可获得的奖励也越多</div>
                        <div class="img-size inner-item" data-marginLeft="30" data-fontSize="20">
                            <table>
                                <tr class="img-size" data-height="50">
                                    <td class="img-size" data-width="130">累计投资≥120天产品</td>
                                    <td class="img-size center" data-width="210" data-lineHeight="50">红包雨大小</td>
                                    <td class="img-size center" data-width="260" data-lineHeight="50">奖 励</td>
                                </tr>
                                <tr class="img-size" data-height="60">
                                    <td class="img-size" data-width="130" data-lineHeight="60">　≥0</td>
                                    <td class="img-size" data-width="210">小雨，雨量较小，掉落的红包数量较少</td>
                                    <td class="img-size" data-width="260">1~5积分、0.5%加息券</td>
                                </tr>
                                <tr class="img-size" data-height="70">
                                    <td class="img-size" data-width="130" data-lineHeight="70">　≥5万</td>
                                    <td class="img-size" data-width="210">小雨转中雨，雨量中等，掉落的红包数量较多</td>
                                    <td class="img-size" data-width="260">5~20积分、加息券（1.0%~1.2%）、京东卡（5-20元）</td>
                                </tr>
                                <tr class="img-size" data-height="70">
                                    <td class="img-size" data-width="130" data-lineHeight="80">　≥30万</td>
                                    <td class="img-size" data-width="210">中雨转大雨，雨量较大，掉落的红包数量很多</td>
                                    <td class="img-size" data-width="260">20-50积分，加息券（1.2%~1.5%），京东卡（20-100元），倍轻松颈部按摩仪，松下护眼台灯</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="item"><div class="part img-size" data-width="20">5、</div>
                        <div class="part img-size" data-width="610">【开启“红包雨”暴雨模式】<br>即日起至4.26（活动结束前1日），单日投资年化金额（年化金额=投资金额*产品期限/360）排名前3的用户，可于次日额外获得1次开启“红包雨”暴雨模式的机会。</div>
                        <div class="img-size inner-item" data-marginLeft="30" data-fontSize="20">
                            <table>
                                <tr class="img-size" data-height="50">
                                    <td class="img-size" data-width="130"></td>
                                    <td class="img-size center" data-width="210" data-lineHeight="50">红包雨大小</td>
                                    <td class="img-size center" data-width="260" data-lineHeight="50">奖 励</td>
                                </tr>
                                <tr class="img-size" data-height="70">
                                    <td class="img-size" data-width="130" data-lineHeight="80">暴雨模式</td>
                                    <td class="img-size" data-width="210">暴雨，雨量最大，每回掉落的红包数量最多</td>
                                    <td class="img-size" data-width="260">50-1000积分，加息券（1.5%~2.0%），京东卡（100-150元），倍轻松颈部按摩仪，松下护眼台灯，Kindle Paperwhite</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div class="item"><div class="part img-size" data-width="20">6、</div>
                        <div class="part img-size" data-width="610">【超级大奖是什么】<br>活动期间，根据最终获得的“红包雨”游戏机会的总次数进行排名，排名前10的用户，依次获得如下大奖：</div>
                        <div class="img-size inner-item" data-marginLeft="30" data-fontSize="20">
                            <table>
                                <tr class="img-size center" data-height="36">
                                    <td class="img-size" data-width="90">排 名</td>
                                    <td class="img-size" data-width="260" data-lineHeight="36">奖 品</td>
                                </tr>
                                <tr v-for="(item, i) in rankGifts" class="center">
                                    <td>{{i + 1}}</td>
                                    <td>{{item}}</td>
                                </tr>
                            </table>
                        </div>
                        <div class="img-size inner-item" data-marginLeft="30">* 以活动结束最终排名为准。如总数相同，按最先到达该数量的排名在前</div>
                    </div>
                    <div class="item"><div class="part img-size" data-width="20">7、</div>
                        <div class="part img-size" data-width="610">如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；活动结束后尚未使用的游戏机会将被清零，概不补发</div>
                    </div>
                    <div class="item"><div class="part img-size" data-width="20">8、</div>
                        <div class="part img-size" data-width="610">奖品以实物为准，平台将在活动结束后的15个工作日内完成礼品的发放；活动中获得的积分，即时发放到您的账户，积分可前往【积分商城】兑换红包、加息券、实物奖品等</div>
                    </div>
                    <div class="item"><div class="part img-size" data-width="20">9、</div>
                        <div class="part img-size" data-width="610">本活动最终解释权归多融财富所有</div>
                    </div>
                </div>
                <div class="img-size ok" data-top="1085" data-left="240" data-width="202" data-height="69" @click="onClose">
                    <div class="img-size label" data-top="12" data-left="70" data-fontSize="24" data-lineHeight="24">好 的</div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    const cRankGifts = [
        'Mac book air13.3',
        '索尼微单ILCE-5100L',
        'Bose SoundSport 无线耳机',
        '飞利浦眼部按摩仪',
        '糖猫儿童智能手表',
        '美的内旋遥控塔扇',
        '松下咖啡机',
        '小米手环',
        '星享卡',
        '50元JD卡'];
    export default {
        props : {
            transition : String,
            startTime : Number,
            endTime : Number
        },
        data(){
            return{
                showModal : true,
                waitTime: 500,
                curIndex: 0
            }
        },
        filters: {
            convertTimestampToDatetime : function (input) {
                let dateObj = new Date(input);
                if (!dateObj) return input;
                return dateObj.Format('yyyy.M.d');
            }
        },
        computed : {
            rankGifts(){
                return cRankGifts;
            }
        },
        mounted(){
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