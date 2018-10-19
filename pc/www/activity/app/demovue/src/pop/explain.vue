<style lang='sass'>
    @import '../style/global.scss';
    @import "../style/vue-pop.scss";
    .explain{
        /*@mixin contain '../images/explain.png';*/
        width:20rem; height:20rem;
        background:#fff;
        @include font-size(14px);
        font-family:"PingFangSC-Light";
        position:relative; z-index:999;
        .close{ position:absolute; top:0; right:0; text-align:center}
        display:flex;
    }
    .contentExplain{
        // margin:0 20px;
        flex:1;
        overflow-y:scroll;
        color:#333;
        dt{
           float: left;
        }
        dd{
            float: left;
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition'>
    <div slot="main" class='explain img-size' data-width='610' data-height='750' data-paddingLeft='20'>
        <div class='close img-size' data-width='84' data-height='84' data-lineHeight='84' @click='close'>x</div>
        <div class='contentExplain img-size' data-marginTop='84' data-marginBottom='50'>
            <dl class='img-size' data-width='600'>
                <dt class='img-size' data-width='30'>①</dt>
                <dd class='img-size' data-width='540' data-paddingLeft='10' data-paddingBottom='20'>佣金奖励为现金奖励，直接发放到账户余额。佣金奖励每日发放，无上限。</dd>
            </dl>
             <dl class='img-size' data-width='600' >
                <dt class='img-size' data-width='30'>②</dt>
                <dd class='img-size' data-width='540' data-paddingLeft='10' data-paddingBottom='20'>佣金奖励获取条件: <br>
                ·邀请人自身账户待收≥5000元<br>
                ·被邀请人账户待收不为0<br>
                ·待收指待回款的产品的本金，可至【账户】→【我的资产】查看</dd>
            </dl>
             <dl class='img-size' data-width='600'>
                <dt class='img-size' data-width='30'>③</dt>
                <dd class='img-size' data-width='540' data-paddingLeft='10' data-paddingBottom='20'>佣金奖励计算公式:<br>
                每日佣金=佣金利率*好友总待收/365</dd>
            </dl>
             <dl class='img-size' data-width='600'>
                <dt class='img-size' data-width='30'>④</dt>
                <dd class='img-size' data-width='540' data-paddingLeft='10' data-paddingBottom='20'>
                佣金发放:<br>每日发放上一日佣金，直接发放至账户余额<br> ·如上一日不满足获取佣金奖励的条件（详见邀请规则攻略）,则当日佣金为0
                </dd>
                 <dd style='clear:both'></dd>
            </dl>
        </div>
    </div>
</pop>
</template>
<script>
    export default {
        mounted(){
            T.setImgSize();
        },
        props : {
            transition : String
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
                this.okCallback && this.okCallback.call(this);
            }
        }
    }
</script>
