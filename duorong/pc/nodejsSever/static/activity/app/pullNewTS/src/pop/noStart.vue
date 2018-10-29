<style scoped>
    @import '../css/vue-pop.css';
	.modal-header{
        .title-bg{
            .bg1{ 
                /*background: url('../images/txt2.png') no-repeat; */
            background-size: contain;}
        }
    }
    .modal-body{
        .notStart{ text-align:center; 
            p{ @include font-size(14px);}
        }
    }
    .modal-footer{
        .btn.home{ 
             /*background: url('../images/btn1.png') no-repeat; */
             background-size: contain;
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    <div slot="header" class='title-bg img-size' data-marginTop='25' data-width='391' data-height='79'>
        <i class='bg1 img-size' data-width='121' data-height='49'></i>
    </div>
    <div slot='body' class='notStart'>
        <p>请输入正确格式的手机号</p>
    </div>
    <div slot='footer' class='submit img-size' data-paddingTop='40'>
        <div class='btn home img-size' data-width='328' data-height='60' @click='goHome'></div>
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
            closeCallback : Function,
            status : Number,
        },
        methods : {
            goHome :function(){
                this.$refs.pop.closePop();
            }
        }
    }
</script>