/**
* 完成支付
* created by bo.peng 2018/5/16
* email:spion@qq.com
*/
<style scoped>
.success {
    padding: 15px;
    padding-top: 20px;
    background: #fff;
    .icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
            padding-top: 10px;
            line-height: 20px;
            font-size: 18px;
            color: #FE7634;
        }
    }
    i {
        background: url("../../../images/common/suc_icon.png") no-repeat;
        background-size: contain;
    }
    .profit {
        display: flex;
        align-items: center;
        justify-content: center;
        .text {
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
            font-size: 16px;
            color: #102542;
        }
        em {
            color: #FE7634;
        }
    }
    .progress {
        margin: 0 auto;
        padding: 15px 0;
        ul {
            display: flex;
        }
        .name {
            color: #333333;
        }
        .time {
            color: #A0A0A0;
        }
        .section-2 {
            text-align: center;
        }
        .section-3 {
            text-align: right;
        }
        .pro-icon {
            margin: 5px auto;
            background: url("../../../images/product/suc_time.png") no-repeat;
            background-size: contain;
        }
    }
}
aside{
    .title{
        padding:10px 0;
        padding-left:15px;
        font-size: 14px;
        color: #A0A0A0;
        background:#f2f2f2;
    }
    .content{
        h2{
            flex:1;
            font-size: 14px;
            padding:0 5px;
            color: #A0A0A0;
            font-weight: normal;
            text-overflow:ellipsis;
            white-space: nowrap;
            overflow:hidden;
        }
        li{
            display:flex;
            flex-direction: row;
            height:33px;
            padding:0 15px;
            background:#fff;
            align-items:center;
        }
        ul{
            li:not(:last-child){
                border-bottom:1px solid #D2D2D2;
            }
        }
        i{
            width:10px;
            height:10px;
            background:url("../../../images/product/star-filled.png") no-repeat;
            background-size: contain;
        }
        .get{
            span{
                padding-left:5px;
                font-size: 12px;
                color: #FF8246;
            }
        }
    }
    .bao{
        padding:20px 0;
        .bg{
            display:block;
            margin:0 auto;
            background:url("../../../images/product/hongbao.pic.png") no-repeat;
            background-size: contain;
        }
    }
    .button{
        margin:0 auto;
        font-size: 18px;
        color: #FF8246;
        border: 1px solid #FF8246;
        border-radius: 8px;
        background:none;
        text-align:center;
    }
}
</style>
<template>
	<article v-if="data">
        <section class="success">
            <div class="icon">
                <i class="img-size" data-width="106" data-height="106"></i>
                <p>投资成功</p>
            </div>
            <div class="profit" v-if="cath.selectCoupon && cath.selectCoupon.minRaisedRates">
                <div class="text">
                    恭喜！您的超级加息券产生了<em>{{cath.selectCoupon.raisedRates}}<span class="img-size" data-fontSize="20">%</span></em>的收益
                </div>
            </div>
            <div class="progress img-size" data-width="610">
                <ul class="name img-size" data-fontSize="28">
                    <li class="section-1 img-size" data-width="320">购买成功</li>
                    <li class="section-2 img-size" data-width="350">开始计息</li>
                    <li class="section-3 img-size" data-width="300">产品到期</li>
                </ul>
                <div class="pro-icon img-size" data-width="542" data-height="50"></div>
                <ul class="time img-size" data-fontSize="24">
                    <li class="section-1 img-size" data-width="320">{{today}}</li>
                    <li class="section-2 img-size" data-width="350">{{yestoday}}</li>
                    <li class="section-3 img-size" data-width="300">{{data.expireDate | formatDate}}</li>
                </ul>
            </div>
        </section>
        <aside>
            <div class="title" v-if="map.cmallResult && map.cmallResult.taskAwardList">恭喜您完成了以下任务</div>
            <div class="content" v-if="map.cmallResult">
                <ul v-if="map.cmallResult.taskAwardList">
                    <li v-for="item in map.cmallResult.taskAwardList" :key="item.taskName">
                        <i></i>
                        <h2>{{item.taskName}}</h2>
                        <div class="get">
                            <span v-show="item.gainedPoints>0">{{item.gainedPoints}}积分</span>
                            <span v-show="item.gainedEXP>0">+{{item.gainedEXP}}经验</span>
                        </div>
                    </li>
                </ul>
                <div class="bao" v-if="map.banner && map.banner.length">
                    <img class="bg img-size" :src="map.banner[0].imgUrl"
                         @click="goUrl(map.banner[0])"
                         data-width="490" data-height="270"/>
                </div>
                <div class="button img-size" v-if="map.cmallResult.taskAwardList"
                     @click="submit" data-width="490" data-height="90" data-lineHeight="90" data-marginTop="30" data-marginBottom="30" data-fontSize="36">去看看</div>
            </div>
        </aside>
    </article>
</template>
<script>
    import {mapGetters} from "vuex";
    import filer from "../../../mixin/filters";
	export default {
        computed:{
            ...mapGetters({
                cath : "getCatch",
            })
        },
        data(){
            return{
                data : null,
                map : null,
                today : null,
                yestoday : null
            }
        },
        filters:{
            formatDate : filer.methods._formatDate,
        },
		mounted(){
            /*if(!this.cath.productData){
                return this.go().product.home();
            }*/
            this.data = this.cath.productData;
            this.map = this.cath.payDone;
		    let self = this;
		    this.setImgSize();
		    this.setTitle({
                title : "投资成功",
                show : true,
                gap : true,
                button : {
                    width : 60,
                    top : 25,
                    height:40,
                    text : "关闭",
                    event(){
                        self.close();
                        self.outside().out();
                    }
                }
            });
		    this.setNav({show:false});
		    this.getDate();
            self.$store.dispatch("updateUserAccount",{update:true});
            this.$store.commit("updateHomeIndex",{update:true});
        },
        methods:{
            close(){
                this.go().product.home();
            },
            getDate(){
                this.today = T.getDate.today();
                this.yestoday = T.getDate.tomorrow();
            },
            submit(){
                this.go().myAccount.myCoupon.home();
            },
            goUrl(obj){
                this.go().outside({
                    url:obj.location,
                    title : obj.title,
                    share : false,
                })
            }
        }
	}
</script>
