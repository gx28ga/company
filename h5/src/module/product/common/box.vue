/**
* 产品信息
* created by bo.peng 2018/4/14
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
        &:last-child{
            .line{
                border-bottom: none;
            }
        }
        > .tag {
            position: absolute;
            right: 0;
            top: 0;
            background: url("../../../images/product/tuijian.png") no-repeat;
            background-size: contain;
        }
        .title {
            overflow: hidden;
            .name {
                float: left;
            }
            .tags {
                float: left;
                padding-left: 10px;
                span {
                    display: inline-block;
                    color: #0084D7;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 5px;
                    text-align: center;
                    border: .5px solid #0084D7;
                    font-size: 9px;
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
            }
            .tag {
                float: left;
                background: url("../../../images/product/jiaxi.png") no-repeat;
                background-size: contain;
                box-sizing: border-box;
                color: #fff;
                text-align:center;
            }
        }
        .gap {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1px;
        }
        .h-line {
            height: 80%;
            width: .5px;
            background: #ddd;
        }
        p {
            color: #A0A0A0;
        }
        ul {
            display: flex;
        }
        time {
            color: #001300;
        }
        .circle {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            color: #D2D2D2;
            text-align: center;
            border-radius:100%;
            box-sizing: border-box;
            .percent,.percent-gray{
                position: absolute;
                z-index: 1;
                left: 0;
                top: 0;
                transform:rotate(-90deg);
            }
            .text{
                position: relative;
                z-index: 2;
            }
        }
        .explain{
            color: #102542;
            padding-top:10px;
            i{
                background:url("../../../images/product/tag.png") no-repeat;
                background-size:contain;
            }
        }
        &.gray{
            > .tag{
                background-image: url("../../../images/product/tuijian_grey.png");
            }
            .title{
                color:#A0A0A0;
                .tags{
                    span{
                        color:#A0A0A0;
                        border-color:#A0A0A0;
                    }
                }
            }
            .price{
                em{
                    color:#A0A0A0;
                }
                .tag{
                    background-image: url("../../../images/product/jiaxigray.png");
                }
            }
            .explain i{
                background-image: url("../../../images/product/tag-4-grey.png");
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
            <div class="tag img-size" v-if="data.isHot==1" data-width="66" data-height="66"></div>
            <div class="title img-size"
                 data-lineHeight="50" data-paddingBottom="20">
                <div class="name">{{data.fullName}}</div>
                <div class="tags">
                    <span v-if="data.isCash==1">红包</span>
                    <span v-if="data.isInterest==1">加息券</span>
                    <span v-if="data.isDouble==1">翻陪券</span>
                    <span v-if="data.isExclusive==1">专属加息券</span>
                    <span v-if="data.activityRate!=0">活动</span>
                    <span v-if="data.drProductTags && data.drProductTags.length"
                          v-for="item in data.drProductTags" :key="item.id">
                        {{item.name}}
                    </span>
                </div>
            </div>
            <div class="content">
                <ul>
                    <li class="img-size" data-width="300">
                        <div class="price img-size" data-height="85" data-lineHeight="85">
                            <em class="img-size" data-fontSize="56">{{data.rate}}<span class="img-size" data-fontSize="28">%</span></em>
                            <div class="tag img-size" v-if="data.activityRate && data.activityRate!=0"
                                 data-paddingLeft="10"
                                 data-width="100" data-height="28" data-lineHeight="28">
                                +{{data.activityRate}}%
                            </div>
                        </div>
                        <p>历史年化收益率</p>
                    </li>
                    <li class="gap">
                        <div class="h-line"></div>
                    </li>
                    <li class="img-size center" data-width="200">
                        <div class="item">
                            <div class="time img-size" data-height="85" data-lineHeight="85">
                                <time class="img-size" data-fontSize="56">{{data.deadline}}</time>
                                天
                            </div>
                            <p>投资期限</p>
                        </div>
                    </li>
                    <li class="img-size right" data-width="100">
                        <div class="circle img-size" data-padding="5"
                             data-width="85" data-height="85" data-lineHeight="22">
                            <canvas class="percent-gray"></canvas>
                            <canvas class="percent"></canvas>
                            <div v-if="parseInt(data.pert)===100" class="text center img-size" data-fontSize="25"
                                 data-width="90" data-height="95" data-paddingTop="5" data-lineHeight="22">
                                募集结束
                            </div>
                            <div v-else class="text center img-size" data-fontSize="25"
                                 data-width="90" data-height="95" data-paddingTop="5" data-lineHeight="22">
                                {{parseInt(data.pert)}}<span class="img-size" data-fontSize="18">%</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="explain" v-if="data.marketingContent">
                    <i class="img-size" data-width="24" data-height="24"></i>
                    {{data.marketingContent}}
                </div>
            </div>
            <div class="line"></div>
        </section>
    </article>
</template>

<script>
    import filter from "../../../mixin/filters";
    /*filter.filters = {
        _toFixed : filter.methods._toFixed
    };*/
    export default {
        mixins:[filter],
        props:{
            list : Array,
        },
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
                setTimeout(()=>{
                    self.list.forEach((data,index)=>{
                        self.setPercent(data,index);
                    })
                },500);
            });
        },
        methods: {
            boxClass: function (data) {
                return parseInt(data.pert)===100
            },
            detail(item){
                /*item.id = 6938;
                item.type = 6;*/
                this.$store.commit("setCatch",{
                    productInfo : item
                });
                this.go().product.detail();
            },
            grayBorder( num , index ){
                let can = $(".circle .percent-gray").eq(index),
                    size = can.parent().width(),
                    half = size/2,
                    radio = half,
                    x = half+1,
                    y = half+1,
                    ctx = can[0].getContext("2d");
                can[0].width = size+2;
                can[0].height = size+2;
                ctx.clearRect(0, 0, size, size);
                ctx.strokeStyle = "#D2D2D2";
                ctx.beginPath();
                ctx.translate(-0.5,-0.5);
                ctx.arc(x, y, radio, num, Math.PI * 2);
                ctx.stroke();
                ctx.closePath();
            },
            setPercent(data,_index) {
                if(parseInt(data.pert) === 100){
                    this.grayBorder(0,_index);
                    return;
                }
                let pert = data.pert,
                    can = $(".circle .percent").eq(_index),
                    PI = Math.PI,
                    size = can.parent().width(),
                    half = size/2,
                    radio = half,
                    x = half+1,
                    y = half+1,
                    percent = parseFloat(pert||0)/100,
                    num = percent*2*PI,
                    ctx = can[0].getContext("2d");
                can[0].width = size+2;
                can[0].height = size+2;
                ctx.clearRect(0, 0, size, size);
                ctx.strokeStyle = "#FE7634";
                ctx.beginPath();
                ctx.translate(-0.5,-0.5);
                ctx.arc(x, y, radio, 0, num);
                ctx.stroke();
                ctx.closePath();
                this.grayBorder(num,_index);
            }
        }
    }
</script>
