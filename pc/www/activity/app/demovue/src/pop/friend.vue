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
    <div slot="main" class='explain img-size' data-width='610' data-height='500' data-paddingLeft='20'>
        <div class='close img-size' data-width='84' data-height='84' data-lineHeight='84' @click='close'>x</div>
        <div class='contentExplain img-size' data-marginTop='84' data-marginBottom='50'>
            <dl class='img-size' data-width='600'>
                <dt class='img-size' data-width='30'>①</dt>
                <dd class='img-size' data-width='540' data-paddingLeft='10' data-paddingBottom='20'>活动期间，被邀请人在注册成功当天起首月内（30天内，含第30天），成功投资任意产品（除新手宝外），邀请人就能获得一定比例的返现奖励：</dd>
            </dl>
             <dl class='img-size' data-width='600' >
                <dt class='img-size' data-width='30'>②</dt>
                <dd class='img-size' data-width='540' data-paddingLeft='10' data-paddingBottom='20'>计算公式： <br>
                首月返现奖励=被邀请人投资产品基本收益金额（不含任何加息/红包等福利收益）*15%</dd>
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
