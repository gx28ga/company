<style>
    .telpop.modal-mask{
        .modal-body{
            width: 100%;
            text-align: center;
            .con{
            background: url("../images/limoney/tan.jpg") no-repeat;
            background-size: contain;
            box-sizing: border-box;
            margin:0 auto;
            position: relative;
                .clo{
                    position: absolute;
                    top:0;
                    right:0;
                }
                .dores{
                    position: absolute;
                    bottom:0;
                }

            }
            .tel-cnt{
                h2{ margin-bottom:10px; color: #000000; }
                p{color: #333333; }
            }

        }
        .modal-footer{
            height:0px;
            border: none;
            .submit{
                .btn a{ color:#0076FF}
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' superClass='telpop' :closeCallback='closeCallback' head='true' close='true'>
    <div slot="header"></div>
    <div slot='body' class='tel-cnt img-size'  data-width='500' data-height='300' data-marginLeft='250'>
        <div class='con img-size' data-width='500' data-height='300'>
            <div class='clo img-size' data-width='60' data-height='60' @click='close'></div>
            <div class='dores img-size' data-width='500' data-height='100' @click='xiazai'></div>
        </div>
    </div>
    <div slot='footer' class='submit img-size'>   
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
            xiazai(){
                T.btnEvent();
            }
        }
    }
</script>
