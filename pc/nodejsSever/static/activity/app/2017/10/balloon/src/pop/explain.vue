<style lang='sass'>
    @import '../css/global.scss';
    @import "../vendor/all-animation.min.css";
    .modal-mask.explain{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/rule-pop.png');
            position: relative;
            .content-wrap{
                text-align: left;
                color: #FFF;
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
                    width: 92.5%;
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
<transition>
    <div v-show='showModal' class="modal-mask explain flip-top" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-width='670' data-height='1130' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content-wrap img-size" data-marginTop="129" data-marginRight="15" data-marginBottom="40" data-marginLeft="25" data-width="631" data-height="962" data-fontSize="24" data-lineHeight="30">
                    <div class="li-num">1、</div><div class="li-content">活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}<br><br></div>
                    <div class="li-num">2、</div><div class="li-content">神券秒杀<br><br>国庆期间每日10：00准时开始，限量抢券，先到先得，抢完为止。包括：2.3%，2.5%，3.0%加息券，666元红包<br><br></div>
                    <div class="li-num">3、</div><div class="li-content">戳气球<br><br>活动期间，单笔投资≥20天产品每满10000元，可获得1次戳气球的机会。单笔投资≥80天产品每满80000元，除戳气球机会外额外获得5枚“国旗”。单笔投资≥140天产品每满80000元除戳气球机会外额外获得5枚“国旗”+30枚“月亮”。<br><br>国庆中秋假期期间（10.1-10.8），戳气球戳中“月亮”，奖励翻倍，可获得2个月亮<br><br>① 戳爆气球，即有机会获得“国旗”/“月亮”徽章，或者获得一份小奖品，100%有奖，小礼品包括：<br>• 5元JD卡<br>• 30元JD<br>• 50元JD卡<br>• 100元JD卡<br>• 300元JD卡<br>• 10积分<br><br>② 获得“国旗”数量越多，可兑换的奖品越多<br><br>
                                                    <div class="number">国旗数量</div><div class="prize">奖品名称</div>
                                                    <div class="number">12</div><div class="prize">30元JD卡</div>
                                                    <div class="number">32</div><div class="prize">小米手环</div>
                                                    <div class="number">58</div><div class="prize">派克钢笔</div>
                                                    <div class="number">88</div><div class="prize">科沃斯扫地机器人</div>
                                                    <div class="number">188</div><div class="prize">惠人原汁机</div>
                                                    <div class="number">298</div><div class="prize">Surface Pro4</div><br><br>
                                                    ③ 按获得“月亮”数量进行排名，前10名可获得奖品<br><br>
                                                    <div class="number">排名</div><div class="prize">奖品名称</div>
                                                    <div class="number">1</div><div class="prize">卡西欧自拍相机</div>
                                                    <div class="number">2</div><div class="prize">Gopro hero5</div>
                                                    <div class="number">3</div><div class="prize">Irobot 扫地机器人</div>
                                                    <div class="number">4</div><div class="prize">Kindle paperwhite</div>
                                                    <div class="number">5</div><div class="prize">九阳空气炸锅</div>
                                                    <div class="number">6</div><div class="prize">小米电饭煲</div>
                                                    <div class="number">7</div><div class="prize">飞利浦刮胡刀</div>
                                                    <div class="number">8</div><div class="prize">星享卡</div>
                                                    <div class="number">9</div><div class="prize">50元京东卡</div>
                                                    <div class="number">10</div><div class="prize">30元京东卡</div><br><br>
                                                </div>
                    <div class="li-num">4、</div><div class="li-content">实体奖品将在活动结束后的15个工作日内联系您并发放，实物以收到为准<br><br></div>
                    <div class="li-num">5、</div><div class="li-content">活动最终解释权权归多融财富所有</div>
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