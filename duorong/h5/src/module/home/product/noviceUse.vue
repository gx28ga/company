/**
* 新手专享
* created by bo.peng 2018/4/25
* email:spion@qq.com
*/
<style scoped>
    .box {
        position: relative;
        background: #fff;
        padding-top: 13px;
        -webkit-tap-highlight-color : rgba(0,0,0);
        .line {
            width: 98.5%;
            height: 15px;
            font: 0/0 Arial;
            border-bottom: .5px solid #ccc;
        }
        .title {
            overflow: hidden;
            .icon{
                float:left;
                background: url("../../../images/home/personl.png") no-repeat;
                background-size:contain;
            }
            .name {
                float: left;
            }
            .tags {
                float: left;
                padding-left: 10px;
                span {
                    display: inline-block;
                    color: #A0A0A0;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 5px;
                    text-align: center;
                    border: .5px solid #A0A0A0;;
                    font-size: 8px;
                    border-radius: 8px;
                }
            }
        }
        .content{
            &:last-child{
                .line{
                    border-bottom: none;
                }
            }
        }
        .center {
            display: flex;
            justify-content: center;
            align-items: center;
            .item {
                text-align: left;
            }
        }
        .right {
            display: flex;
            justify-content: flex-end;
            align-items:center;
        }
        .price {
            overflow: hidden;
            em {
                float: left;
                color: #FE7634;
                span{
                    font-size:15px;
                }
            }
            .tag{
                float: left;
                color: #FE7634;
            }
            .add{
                float:left;
            }
        }
        p {
            color: #A0A0A0;
        }
        ul {
            display: flex;
        }
        .btn{
            border-radius:50px;
            background:-webkit-linear-gradient(left,#fc622e,#fd912f);
            box-shadow:0 4px 6px rgba(253,126,47,.5);
        }
        .mark{
            //padding-left: 10px;
            span {
                display: inline-block;
                color: #333;
                height: 14px;
                line-height: 14px;
                padding: 0 5px;
                text-align: center;
                border: .5px solid #333;;
                font-size: 8px;
                /*border-radius: 8px;*/
            }
        }
    }
</style>
<template>
    <article>
        <section v-if="list" class="box img-size" data-fontSize="24"
                 v-for="data in list" v-bind:key="data.id"
                 @click="detail(data)"
                 data-paddingLeft="30" data-paddingRight="60">
            <div class="title img-size"
                 data-height="50" data-lineHeight="50" data-paddingBottom="20">
                <div class="icon img-size" data-width="22" data-height="22" data-marginTop="11" data-marginRight="10"></div>
                <div class="name img-size" data-fontSize="28">{{data.fullName}}</div>
                <div class="tags">
                    <span>仅限一次</span>
                    <span v-if="data.isCash==1">红包</span>
                    <span v-if="data.isInterest==1">加息券</span>
                    <span v-if="data.isDouble==1">翻陪券</span>
                    <span v-if="data.isExclusive==1">专属加息券</span>
                    <span v-if="data.activityRate==1">活动</span>
                </div>
            </div>
            <div class="content img-size" data-paddingLeft="30">
                <ul>
                    <li class="img-size" data-width="250">
                        <div class="price img-size" data-height="85" data-lineHeight="85">
                            <em class="img-size" data-fontSize="56">{{data.rate}}<span>%</span></em>
                            <div class="tag img-size" v-if="data.activityRate || data.activityRate!=0"
                                 data-paddingLeft="10"
                                 data-width="86" data-fontSize="56">
                                <em><span>+</span>{{data.activityRate}}<span>%</span></em>
                            </div>
                        </div>
                        <!--<p>历史年化收益率</p>-->
                    </li>
                    <li class="img-size center" data-width="250">
                        <div class="item">
                            <div class="time img-size" data-height="85" data-lineHeight="85">
                                <time class="img-size" data-fontSize="56">{{data.deadline}}</time>
                                天
                            </div>
                            <!--<p>投资期限</p>-->
                        </div>
                    </li>
                    <li class="img-size right" data-width="220">
                        <div class="btn img-size" data-width="200" data-fontSize="32" data-height="74" data-lineHeight="74">立即加入</div>
                    </li>
                </ul>
                <div class="mark img-size" data-marginTop="20">
                    <span>次日计息</span>
                    <span>{{data.leastaAmount}}元起投</span>
                    <span>限投{{data.maxAmount}}元</span>
                </div>
                <div class="line"></div>
            </div>
        </section>
    </article>
</template>

<script>
    export default {
        props:{
            list : Array,
        },
        mounted() {
            let self = this;
            this.$nextTick(() => {
                self.setImgSize();
            });
        },
        methods: {
            detail(item){
                this.$store.commit("setCatch",{
                    productInfo : item
                });
                this.go().product.detail();
            }
        }
    }
</script>
