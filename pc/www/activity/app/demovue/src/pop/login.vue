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
        border-radius:$s4;
        .close1{ position:absolute; top:0; right:0; text-align:center;@include contain("../images/close.png")}
        .guanbi{
            position:absolute;top:0;
            right:0;
        }
        .btn{
            background:#fe7634;
            color:#fff;
            @include font-size(15px);
            text-align:center;
            position:absolute;
            bottom:0;
            left:0;
            border-radius:$s2;
        }
        display:flex;
    }
    .content{
        // margin:0 20px;
        flex:1;
        overflow-y:scroll;
        color:#333;
        text-align:center;
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
    <div slot="main" class='explain img-size' data-width='375' data-height='295' >
        <div class='guanbi img-size' data-width='60' data-height='60' @click='close'>
        <div class='close1 img-size' data-width='33' data-height='33' data-lineHeight='33' @click='close'></div>
        </div>
        <div class='content img-size' data-marginTop='70' data-height='170' >
            您还未登录<br>请登录后操作！
        </div>
        <div class='btn img-size' data-width='375' data-height='80'><a  class="img-size btn" data-height='80' data-lineHeight='80' data-width='375' style='display:block;' @click='goLogin'>确定</a></div>
    </div>
</pop>
</template>
<script>
import requirePop  from "./requirePop.js";
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
            },
            goLogin(){
               T.login(); 
            }
        }
    }
</script>
