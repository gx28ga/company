<style scoped>
@import '../css/vue-pop.css';
	.modal-mask.explain{
        li{
            @include box;
            margin-top: 5px;
        }
        .modal-container.pop-cnt{
             @include box-sizing;
             @include transition-duration(0s);
             background: #fff;
             border-radius: 5px;
            .content{ 
                margin-bottom:10px;margin-top:10px; color:#333;
                @include align-items(flex-start);
                @include justify-content(flex-start);
                overflow-y: scroll;
            }
        }   
        .ruletitle{ color: #650f2c; text-align: center; }
        .close{ border: 2px solid #650f2c; border-radius: 50%; color: #650f2c; text-align: center; font-weight: bold; }
        table{ margin: 0 auto; tr{ td{ text-align: center; border: 1px solid #000; line-height: 22px; } } }
        .surebtn{ background: url('../images/surebtn.png') no-repeat; background-size: contain; color: #fff; line-height: 35px; text-align: center; margin: 0 auto;}
    }
</style>
<template>
<transition :name="transition">
    <div v-show='showModal' class="modal-mask explain" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='35' data-paddingLeft='33' data-paddingRight='33' data-width='630' data-height='929' @click='closePropagtion($event)'>
                <div class="ruletitle">活动规则</div>
                <div class="close img-size" data-width='31' data-height='31' data-lineHeight='31' data-fontSize="40" data-top='15' data-right='15' @click='closePop'>×</div>
                <div class="content img-size" data-width='626' data-height='740' data-fontSize="22">
                    <ul>
                        <li>
                            1.	活动时间为2017年05月05日-2017年05月24日；
                        </li>
                        <li>
                            2.	活动期间用户每天登录即可获赠一次免费数普通钞票机会；
                        </li>
                        <li>
                            3.	钞票分为普通钞票、银钞和金钞，普通钞票面值为100元;银钞面值为188元；金钞面值288元
                        </li>
                        <li>
                            4.	单笔投资≥20天产品，每满5000元即可获赠1次数钞票，如买50000元，即可获赠10次数钞票次数，以此类推；
                        </li>
                        <li>
							5.	单笔投资≥80天产品，满30000元即可额外赠送1次数银钞机会；单笔投资≥300天产品，满30000即可额外获得1次数金钞机会（银钞与金钞不同时获得）；
                        </li>
                        <li>
							6.  数钞票活动结束后，可按照最终面值总额获赠对应奖品，如下表所示：
                        </li>
                        <li>
                            <table class="img-size" data-width="480" data-fontSize="18">
                                <tr class="img-size" data-width="480"><td width="50%">到达总额/元</td><td width="50%">礼品名称</td></tr>
                                <tr><td>20万≤金额＜28万</td><td>30元京东购物卡</td></tr>
                                <tr><td>28万≤金额＜48万</td><td>50元京东购物卡</td></tr>
                                <tr><td>48万≤金额＜68万</td><td>100元京东购物卡</td></tr>
                                <tr><td>68万≤金额＜98万</td><td>150元京东购物卡</td></tr>
                                <tr><td>98万≤金额＜188万</td><td>400元京东购物卡</td></tr>
                                <tr><td>188万≤金额</td><td>800元京东购物卡</td></tr>
                            </table>
                        </li>
                        <li>
                            7.  活动结束后，钞票数到金额最高者按照排名还可依次获赠Macbook Pro、百利金M800限量手工金尖钢笔、Muji无印良品净化器等奢华大奖，以最终名次为准；数钱成绩相同者，按最先到达者排名在前；
                        </li>
                        <li>
							8.	如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格；
                        </li>
                        <li> 
							9.	奖品以活动奖品以实物为准，平台将在活动结束后的15个 工作日内完成礼品的发放；
                        </li>
                        <li>
							10. 本活动最终解释权归多融财富所有。
                        </li>
                    </ul>
                </div>
                <div class="surebtn img-size" data-width="308" data-height="114" @click='closePop'>确定</div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
    export default {
        props : {
            transition : String,
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
            /*closePop : function(callback){
                this.showModal = false;
                if($.type(callback) == 'function'){
                    setTimeout(callback,550)
                }
            },*/
            closePop : function(callback){
                this.showModal = false;
                T.getPop(callback);
                bus.$emit('closePopEvent');
            }
        }
    }
</script>