<style>
    .telpop.modal-mask{
        .modal-body{
            padding-top:15px;
            text-align: center;
            .tel-cnt{
                h2{ margin-bottom:10px; color: #000000; }
                p{color: #333333; }
            }
        }
        .modal-footer{
            .submit{
                .btn a{ color:#0076FF}
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' superClass='telpop' :closeCallback='closeCallback' head='true' close='true'>
    <div slot="header"></div>
    <div slot='body' class='tel-cnt'>
        <h2 class='img-size' data-fontSize='40'>提示</h2>
        <p class='img-size' data-fontSize='26'>请登录后操作</p>
    </div>
    <div slot='footer' class='submit img-size' data-fontSize='32'>
        <div class='btn' @click='login'>登录</div>  
    </div>
</pop>
</template>
<script>
    import pop from './pop.vue';
    export default {
        components : {
            pop
        },
        mounted(){
            T.setImgSize();
        },
        props : {
            transition : String
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
            },
            login(){
                T.login();
            }
        }
    }
</script>
