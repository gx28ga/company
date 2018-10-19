<style lang='sass'>
    @import '../css/global.scss';
    @import "../vendor/all-animation.min.css";
    /*$sjianwidth : $s17;*/
    .modal-mask.explain{
        .modal-container.pop-cnt{
            max-width:none;
            @include contain('../images/rule-bg.png');
            position: relative;
            .content{
                position: absolute;
                left: 4.98489425981873%;
                top: 15.73875802997859%;
                width: 92%;
                height: 82.33404710920771%;
                padding: 0;
                font-size: .68rem;
                line-height: 1.1rem;
                text-align: left;
                color: #A24500;
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
                    width: 92%;
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
<!--<transition :name="transition">-->
<transition>
    <div v-show='showModal' class="modal-mask explain flip-top" @click='closePop'>
        <div class="modal-wrapper">
            <div class="modal-container pop-cnt img-size" data-paddingTop='126' data-paddingLeft='50' data-width='662' data-height='790' @click='closePropagtion($event)'>
                <slot name="close">
                    <div class="close img-size" data-width='80' data-height='80' data-top='5' data-right='5' @click='closePop'></div>
                </slot>
                <div class="content">
                    <div class="li-num">1、</div><div class="li-content">活动时间：{{startTime | convertTimestampToDatetime}} ~ {{endTime | convertTimestampToDatetime}}</div>
                    <div class="li-num">2、</div><div class="li-content">活动期间，单笔购买20≤x<80天产品每满10000元获得1张随机拼图碎片，单笔购买≥80天产品每满10000元获得2张随机拼图碎片。完成不同的拼图内容可获得拼图对应的不同奖品</div>
                    <div class="li-num">3、</div><div class="li-content">单笔购买≥140天产品每满10万元，额外获得1张万能碎片。万能碎片可转换成任意拼图碎片，用于增加完成拼图获得拼图对应奖品的成功率</div>
                    <div class="li-num">4、</div><div class="li-content">【拼图奖】：完成拼图即可获得该对应奖品，详情参见【活动页面】→【我的拼图】</div>
                    <div class="li-num">5、</div><div class="li-content">【排名奖】：活动结束时，按累计获得拼图碎片总数进行排名，排名前10依次获得奖品。详情参见【活动页面】→【我的拼图】→【查看排名】</div>
                    <div class="li-num">6、</div><div class="li-content">如发现活动中有作弊行为，多融财富有权取消其所有活动奖品获赠资格</div>
                    <div class="li-num">7、</div><div class="li-content">活动奖品将在活动结束后的15个工作日内完成礼品的发放</div>
                    <div class="li-num">8、</div><div class="li-content">活动最终解释权权归多融财富所有</div>
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