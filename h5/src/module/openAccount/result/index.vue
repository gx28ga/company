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
            onlyOpen(){//开户没有授权
                importSys({
                    src : "./onlyOpen",
                    name : "onlyOpen",
                    data : {
                        props : {

                        }
                    }
                });
            },
            openSuccess(){//开户成功
                importSys({
                    src : "./openSuccess",
                    name : "openSuccess",
                    data : {
                        props : {

                        }
                    }
                });
            },
            openFaile(){//开户失败()
                importSys({
                    src : "./openFaile",
                    name : "openFaile",
                    data : {
                        props : {

                        }
                    }
                });
            },
            powerFaile(){//授权失败
                importSys({
                    src : "./powerFaile",
                    name : "powerFaile",
                    data : {
                        props : {

                        }
                    }
                });
            },
            powerSuccess(){//授权成功
                importSys({
                    src : "./powerSuccess",
                    name : "powerSuccess",
                    data : {
                        props : {

                        }
                    }
                });
            }
        }
    }
</script>
