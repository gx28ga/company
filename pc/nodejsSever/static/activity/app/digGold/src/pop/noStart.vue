<style scoped>
    @import '../css/global.css';
    .modal-header{
        .title-bg{
            
        }
    }
    .modal-body{
        .notStart{ text-align:center; background: url('../images/tanbg.png') no-repeat; background-size: contain;
            p{ @mixin font-size 18px; color: #ff5407;}
        }
        .close{ background: url('../images/close.png') no-repeat; background-size: contain; float: right; }
        .btn{ background: url('../images/gohome.png') no-repeat; background-size: contain; margin: 0 auto; }
        .hui{ background: url('../images/hui.png') no-repeat; background-size: contain; margin: 0 auto; color: #ff5407; text-align: center; }
    }
    .publicTips{
        display:flex;
        flex-direction:row;
        .cancel{
            margin-left:5px;
            padding: 0 20px;
            border-radius: 13px;
            background: linear-gradient(to bottom, #eee, #eee 40% , #ccc 55% , #ccc);
            color:#666;
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header"></div><!--  v-html='content' -->
    <div slot='body' class='notStart img-size' data-width='662' data-height='624' data-fontSize='32'>
        <div class="title img-size" data-marginTop='196' data-marginLeft='100'>提示消息</div>
        <div class="hui img-size" data-width='453' data-height='139' data-marginTop='80' data-lineHeight='139'>{{status==-1?"本次活动尚未开始":"本次活动已结束"}}</div>
        <div class="btn img-size" data-width='357' data-height='73' data-marginTop='50' @click='home'></div>
    </div>
    <div slot='footer' class='submit publicTips img-size'>
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    export default {
        components : {
            pop
        },
        props : {
            transition : String,
            status : Number,
            cancelCallback : Function
        },
        methods : {
            home :function(){
                T.callApp.home();
            }
        }
    }
</script>
    <div slot='body' class='notStart'>
        <p></p>
    </div>