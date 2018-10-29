/**
* 新手宝
* created by bo.peng 2018/4/25
* email:spion@qq.com
*/
<style scoped>
    .box {
        background: #fff;
        padding-top: 13px;
        -webkit-tap-highlight-color : rgba(0,0,0);
        .line {
            width: 98.5%;
            height: 15px;
            font: 0/0 Arial;
            border-bottom: .5px solid #ccc;
            &.no{
                border-bottom:none;
            }
        }
        .title {
            overflow: hidden;
            .icon{
                float:left;
                background: url("../../../images/home/database.png") no-repeat;
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
                    border: .5px solid #A0A0A0;
                    font-size: 8px;
                    border-radius: 8px;
                    vertical-align: top;
                    margin-top:2px;
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
    }
</style>
<template>
    <article>
        <section v-if="data" class="box img-size" data-fontSize="24"
                 @click="detail(data)"
                 data-paddingLeft="30" data-paddingRight="60">
            <div class="title img-size"
                 data-height="50" data-lineHeight="50" data-paddingBottom="20">
                <div class="icon img-size" data-width="20" data-height="22" data-marginTop="11" data-marginRight="10"></div>
                <div class="name img-size" data-fontSize="28">{{data.currentProdName}}</div>
                <div class="tags">
                    <span>仅限一次</span>
                    <span>限投5万</span>
                    <span>次日计息</span>
                </div>
            </div>
            <div class="content img-size" data-paddingLeft="30">
                <ul>
                    <li class="img-size" data-width="250">
                        <div class="price img-size" data-height="85" data-lineHeight="85">
                            <em class="img-size" data-fontSize="56">{{data.rate}}<span>%</span></em>
                            <em class="img-size" data-fontSize="56"><span>+</span>{{data.extraRate}}<span>%</span></em>
                        </div>
                        <p>历史年化收益率</p>
                    </li>
                    <li class="img-size center" data-width="250">
                        <div class="item">
                            <div class="time img-size" data-height="85" data-lineHeight="85" data-fontSize="28">
                                随时退出
                            </div>
                            <p>投资期限</p>
                        </div>
                    </li>
                    <li class="img-size right" data-width="220">
                        <div class="btn img-size" data-width="200" data-fontSize="32" data-height="74" data-lineHeight="74">立即加入</div>
                    </li>
                </ul>
                <div :class="{no:!rookie || !rookie.length}" class="line"></div>
            </div>
        </section>
    </article>
</template>

<script>
    export default {
        props:{
            data : Object,
            rookie : Array
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
