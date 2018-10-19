/**
* 产品信息
* created by bo.peng 2018/4/14
* email:spion@qq.com
*/
<style scoped>
    .center{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .box {
        position: relative;
        background: #fff;
        padding: 13px 0;
        border-top:.5px solid #ddd;
        -webkit-tap-highlight-color : rgba(0,0,0);
        .flex{ flex:1;}
        .title {
            overflow: hidden;
            .name {
                float: left;
                font-size:18px;
                color: #102542;
            }
            .status{
                float:right;
                font-size:14px;
                color: #FE7634;
            }
        }
        .content{
            ul{
                display:flex;
                justify-content:center;
                line-height: 20px;
            }
            p{
                font-size:12px;
                color: #A0A0A0;
            }
            em{
                font-size: 14px;
                color: #102542;
            }
        }
        &.gray{
            .status{
                font-size: 14px;
                color: #A0A0A0;
            }
        }
    }
</style>
<template>
    <article>
        <section class="box img-size" data-fontSize="24"
                 v-for="data in list" v-bind:key="data.id"
                 :class="{gray : boxClass(data)}" @click="detail(data)"
                 data-paddingLeft="30" data-paddingRight="30">
            <div class="title img-size"
                 data-height="50" data-lineHeight="50" data-paddingBottom="20">
                <div class="status img-size" data-fontSize="24" v-html="getStatusName(data.status)"></div>
                <div class="name img-size" data-fontSize="32">{{data.fullName}}</div>
            </div>
            <div class="content">
                <ul>
                    <li class="flex">
                        <p>投资金额(元)</p>
                        <em>{{data.amount}}</em>
                    </li>
                    <li class="flex">
                        <p>预计收益</p>
                        <em>{{data.interest}}</em>
                    </li>
                    <li class="flex">
                        <p>到期日期</p>
                        <em>{{data.expireDate|formatDate}}</em>
                    </li>
                    <li class="arrow center">
                        <arrow name="right"/>
                    </li>
                </ul>
            </div>
        </section>
    </article>
</template>

<script>
    import filter from "../../../../mixin/filters";
    import Arrow from "../../../components/arrow";
    export default {
        components: {Arrow},
        mixins:[filter],
        props:["list"],
        data(){
            return{}
        },
        computed: {
        },
        mounted() {
            let self = this;
            this.setImgSize();
            this.$nextTick(() => {
                self.setImgSize();
            });
        },
        filters:{
            formatDate : filter.methods._formatDate,
        },
        methods: {
            boxClass: function (data) {
                return parseInt(data.status) === 3 //已回款
            },
            detail(item) {
                this.$store.commit("setCatch", {
                    myInverst: item
                });
                this.go().myAccount.myInverst.detail();
            },
            getStatusName(status){
                return [
                    "<span style='color: #0084D7;'>募集中</span>",
                    "-",
                    "-",
                    "已回款",
                    "计息中",
                    "回款中",
                    "计息中"
                ][status];
            }
        }
    }
</script>
