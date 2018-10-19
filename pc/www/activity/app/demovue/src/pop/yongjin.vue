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
                <dt class='img-size' data-width='30'></dt>
                <dd class='img-size' data-width='540' data-paddingLeft='10' data-paddingBottom='20'> 
不包含2017-08-31之前的邀请好友。
此部分好友不再享受任何佣金奖励</dd>
            </dl>
        </div>
    </div>
</pop>
</template>
<script>
    // import {hesitory} from '../common/URL.js';
    export default {
        data(){
            return{
                start:""
            }
        },
        mounted(){
            T.setImgSize();
            var self=this;
           /* T.ajax({
                url:'hesitory',
                data:{uid:T.uid}
            }).then(data=>{
                self.start=data.map.drRecommendTask.startTime;
            })*/
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
