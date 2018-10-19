<style lang="sass" scoped>
    @import '../../css/global.scss';
    /*@import "../../vendor/all-animation.min.css";*/
    .lock-screen{
        z-index: 300;
        margin : 0 auto;
        height: 100%;
        position: fixed;
        .anm-bg{
            margin: 0 auto;
            background-color: rgba(100, 100, 100, .7);
            text-align: center;
            div{
                display: inline-block;
                vertical-align: middle;
                width: 90%;
                height: 90%;
                @include contain("../../images/running.gif");
                background-position: center;
            }
        }
        .anm-bg:after{
            display: inline-block;
            vertical-align: middle;
            content: '';
            width: 0;
            height: 100%;
        }
    }
</style>
<template>
    <div v-show="lock" class="lock-screen img-size" data-width="750">
        <div class="anm-bg img-size" data-marginTop="440" data-width="400" data-height="300" data-borderRadius="30">
            <div></div>
        </div>
    </div>
</template>
<script>
    export default {
        props : {
            lock : Boolean
        },
        mounted : function () {
            T.setImgSize();
        }
    };
</script>