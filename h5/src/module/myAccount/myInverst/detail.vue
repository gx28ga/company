/**
* 投资详情
* created by bo.peng 2018/5/21
* email:spion@qq.com
*/
<style scoped>
.detail{
    .center,.progress,.item{
        display:flex;
        flex-direction: row;
        justify-content:center;
        align-items:center;
    }
    .flex{
        flex:1;
    }
    header{
        background:#fff;
        padding-bottom:50px;
    }
    .title{
        height:30px;
        line-height: 30px;
        padding:15px 15px 5px;
        h1{
            font-size: 16px;
            color: #102542;
            font-weight: normal;
        }
        .status{
            float:right;
            font-size: 12px;
            color: #FE7634;
        }
    }
    .progress{
        height:40px;
        .item{
            position:relative;
            width:33%;
            height:100%;
        }
        .dian{
            position:absolute;
            width:20px;
            height:20px;
            top:9.5px;
            left:50%;
            margin-left:-10px;
            border:1px solid #D2D2D2;
            background:#fff;
            border-radius:100%;
        }
        .line{
            flex:1;
            height:3px;
            background:#D2D2D2;
        }
        .clear{
            position:absolute;
            left: 0;
            width:50%;
            height:3px;
            margin-left: -10px;
            background:#fff;
        }
        .section-4{
            .clear{
                left:auto;
                right: 0;
                width:50%;
                height:3px;
                margin-right: -12px;
                background:#fff;
            }
        }
        .current{
            .dian{
                background: #FE7634;
                border-color:#FE7634;
            }
            .line{
                background:#FE7634;
            }
        }
        .text{
            position:absolute;
            top:40px;
            left:0;
            width:100%;
            line-height: 20px;
            text-align:center;
            font-size: 12px;
            p{
                color: #333333;
            }
            time{
                color: #A0A0A0;
            }
        }
    }
    .list,.aside{
        margin-top:10px;
        padding:15px;
        background:#fff;
        ul{
            display:flex;
            flex-direction:row;
            padding:7px 0;
        }
        .name{
            flex:1;
            font-size: 14px;
            color: #A0A0A0;
        }
        .cnt{
            font-size: 14px;
            color: #102542;
        }
    }
    .aside{
        padding:5px 15px;
    }
}
</style>
<template>
	<article class="detail" v-if="data">
        <header>
            <div class="title">
                <div class="status" v-html="getStatusName(data.status)"></div>
                <h1>{{data.fullName}}</h1>
            </div>
            <div class="progress">
                <div class="item section-1 current">
                    <div class="line"></div>
                    <div class="dian"></div>
                    <div class="clear"></div>
                    <div class="text">
                        <h3>投资日</h3>
                        <time>{{today.substr(5)}}</time>
                    </div>
                </div>
                <div class="item section-2">
                    <div class="line"></div>
                    <div class="dian"></div>
                    <div class="text">
                        <h3>计息日</h3>
                        <time>{{tomorrow.substr(5)}}</time>
                    </div>
                </div>
                <div class="item section-3">
                    <div class="line"></div>
                    <div class="dian"></div>
                    <div class="text">
                        <h3>到期日</h3>
                        <time>{{data.expireDate|formateDate}}</time>
                    </div>
                </div>
                <div class="item section-4">
                    <div class="line"></div>
                    <div class="dian"></div>
                    <div class="clear"></div>
                    <div class="text">
                        <h3>回款日</h3>
                        <time>{{data.expireDate|tomorrowDate}}</time>
                    </div>
                </div>
            </div>
        </header>
        <section class="list">
            <ul>
                <li class="name">预期年化</li>
                <li class="cnt">{{data.rate}}</li>
            </ul>
            <ul>
                <li class="name">投资金额</li>
                <li class="cnt">{{data.amount}}</li>
            </ul>
            <ul>
                <li class="name">预期收益</li>
                <li class="cnt">{{data.interest}}</li>
            </ul>
            <ul>
                <li class="name">回款方式</li>
                <li class="cnt">到期一次还本付息</li>
            </ul>
            <ul v-if="data.activityRate">
                <li class="name">活动加息</li>
                <li class="cnt">{{data.activityRate}}</li>
            </ul>
            <ul v-if="couponType.name">
                <li class="name">{{couponType.name}}</li>
                <li class="cnt">{{couponType.cnt}}</li>
            </ul>
        </section>
        <section class="aside" v-if="data.drYunQianContractList.length>0" v-for="item in data.drYunQianContractList" v-bind:key="item.id">
            <ul @click="goUrl(item.url)">
                <li class="name">{{item.fullName}}</li>
                <li class="cnt center">
                    <arrow name="right" :width="13" :height="13"/>
                </li>
            </ul>
        </section>
    </article>
</template>

<script>
	import Arrow from "../../components/arrow";
	import {mapGetters} from "vuex";
    export default {
        components: {Arrow},
        computed:{
            ...mapGetters({
                cath : "getCatch"
            })
        },
        data(){
            return{
                data : null,
                today : T.getDate.today(),
                tomorrow : T.getDate.tomorrow(),
                couponType : null,
            }
        },
        filters:{
            formateDate(val){
                return new Date(val).Format("MM-dd")
            },
            tomorrowDate(val){
                return T.getDate.tomorrow(new Date(val).getTime()).substr(5);
            }
        },
        mounted(){
		    this.setTitle({
                show : true,
                title : "投资详情",
                back : true,
                gap : true,
            });
		    this.data = this.cath.myInverst;
		    let data = this.data ,
                key = [
                    "couponAmount",
                    "couponRate",
                    "couponAmount",
                    "multiple"
                ][data.couponType-1];
		    this.couponType = {
		        name : ["返现","加息","体验金额","翻倍券","特权"][this.data.couponType-1],
                cnt : data[key] || "vip特权",
            }
        },
        methods: {
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
            },
            goUrl(url){
                window.location.href=url;
            }
        }
	}
</script>
