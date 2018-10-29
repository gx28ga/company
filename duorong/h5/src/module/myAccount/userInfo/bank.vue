/**
* 我的银行卡
* created by bo.peng 2018/4/13
* email:spion@qq.com
*/
<style scoped>
    @import "../style/base.css";
    .img{
        img{
            max-height: 100%;
            display:block;
        }
    }
</style>
<template>
    <div class="my-account" v-if="member">
        <article>
            <section class="img-size" data-paddingLeft="30">
                <ul>
                    <li class="box img-size" data-height="90" data-paddingRight="30">
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            <img :src="member.logo"/>
                        </div>
                        <aside>
                            <div class="text img img-size" data-fontSize="24">
                                尾号：{{String(member.bankNum).substr(-4)}}
                            </div>
                        </aside>
                    </li>
                    <li class="box img-size" data-height="90" data-paddingRight="30">
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            姓名
                        </div>
                        <aside>
                            <div class="text img-size" data-fontSize="24">{{member.realName}}</div>
                        </aside>
                    </li>
                    <li class="box img-size" data-height="90" data-paddingRight="30">
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            身份证号
                        </div>
                        <aside>
                            <div class="text img-size" data-fontSize="24">{{member.idCards}}</div>
                        </aside>
                    </li>
                    <li class="box img-size" data-height="90" data-paddingRight="30">
                        <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                            开户行所在地
                        </div>
                        <aside>
                            <div class="text img-size" data-fontSize="24">{{member.province}}</div>
                        </aside>
                    </li>
                </ul>
            </section>
        </article>
    </div>
</template>
<script>
    import {mapState} from "vuex";
    export default {
        computed:{
            ...mapState({
                member : state => state.user.memberInfo
            })
        },
        mounted(){
            this.setTitle({
                title : "我的银行卡",
                show : true,
                back:true,
                gap : true,
            });
            this.setNav({
                show : false
            });
        }
    }
</script>
