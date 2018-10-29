<style scoped>
    .downapp{
        .modal-header{
            h1{ color: #00C6A8; }
        }
        .modal-body{
            .ad{ 
                img{ display:block; margin:0 auto; } 
            }
            p{
                padding:10px 0; text-align: center; color:#333;
            }
        }
        .modal-footer{
            .submit{
                flex-direction:column;
                box-sizing: border-box;
                .btn{ 
                    display:flex;
                    justify-content: center;
                    align-items: center;
                    color: #0076FF;
                    box-sizing: border-box;
                    &:first-child{
                        border-bottom:.5px solid #ddd;
                    };
                }
            }
        }
    }
</style>
<template>
<pop ref='pop' :transition='transition' :closeCallback='closeCallback' superClass='downapp'>
    <div slot="header">
        <h1 class='img-size' data-fontSize='40' data-paddingTop='30'>恭喜您注册成功</h1>
    </div>
    <div slot='body' class='img-size' data-fontSize='26'>
        <p>获得</p>
        <div class='ad'>
            <img class='img-size' data-width='370' src="../../images/login/licj.png">
        </div>
        <p>响应国家法律规定，保障您的资金安全，<br>请尽快进行投资人认证</p>
    </div>
    <div slot='footer' class='submit img-size' data-height='176'>
        <div class='btn' @click="tiyan">立享理财金收益</div>
        <div class='btn' @click='openAccount'>开通存管账户</div>
    </div>
</pop>
</template>
<script>
    import pop from '../../pop/pop.vue';
    export default {
        components : {
            pop
        },
        props : {
            transition : String,
            user : Object
        },
        mounted(){
            debugger;
        },
        methods : {
            close(){
                this.$refs.pop.closePop();
            },
            closeCallback(){
                //T.go.home();
            },
            tiyan(){
                this.close();
               /* T.go.tiyan({
                    customerId : this.user.customerId
                });*/

            },
            openAccount(){
                this.close();
                //T.go.openAccount();
            }
        }
    }
</script>