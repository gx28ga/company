/**
* 相关说明页，结果页，成功页，错误页等；
* created by bo.peng 2018/3/30
* email:spion@qq.com
*/
<style scoped>

</style>
<template>
    <article>
        <div class="openAccount-result"></div>
    </article>
</template>

<script>
    import importSys from "./importSys";
    import {mapGetters} from "vuex";
    export default {
        computed:{
            ...mapGetters({
                user : "getUserInfo"
            })
        },
        mounted(){
            this[this.$route.query.url]();
        },
        methods : {
            rechargeFaile(){//充值失败
                importSys({
                    src : "./rechargeFaile",
                    data : {
                        props : {
                            user : this.user
                        }
                    }
                });
            },
            rechargeSuccess(){//充值成功
                importSys({
                    src : "./rechargeSuccess"
                });
            },
            changePhoneFaile(){//修改电话号码失败
                importSys({
                    src : "./changePhoneFaile"
                });
            },
            changePhoneSuccess(){//修改电话号码成功
                importSys({
                    src : "./changePhoneSuccess"
                });
            },
            changePasswordSuccess(){//修改密码成功
                importSys({
                    src : "./changePasswordSuccess"
                });
            },
            changePasswordFaile(){//修改密码失败
                importSys({
                    src : "./changePasswordFaile"
                });
            },
            bindCardSuccess(){//绑卡成功
                importSys({
                    src : "./bindCardSuccess"
                });
            },
            bindCardFaile(){//绑卡失败
                importSys({
                    src : "./bindCardFaile"
                });
            },
            openBindFaile(){//解绑失败
                importSys({
                    src : "./openBindFaile"
                });
            },
            openBindSuccess(){//解绑失败
                importSys({
                    src : "./openBindSuccess"
                });
            },
            withdrawFaile(){//提现失败
                importSys({
                    src : "./withdrawFaile"
                });
            },
            withdrawSuccess(){//提现成功
                importSys({
                    src : "./withdrawSuccess"
                });
            }
        }
    }
</script>
