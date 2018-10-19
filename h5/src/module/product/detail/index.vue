/**
*
* created by bo.peng
* email:spion@qq.com
*/
<style scoped>
.else{
    background:#fff;
    ul{
    }
    li{
        display:flex;
        align-items:center;
        &:not(:last-child){
            border-bottom:.5px solid #d2d2d2;
        }
        .title{
            flex:1;
        }
        aside{
            display:flex;
            flex-direction: row;
            align-items:center;
        }
        .arrow-parent{
            padding-left:10px;
        }
    }
}
.btn{
    position:fixed;
    left:0;
    bottom:0;
    z-index: 999;
    width:100%;
    background: #FE7634;
    border-radius:0;
}
</style>
<template>
	<article class="img-size detail" v-if="data" data-paddingBottom="110">
        <header-bar :data="data"></header-bar>
        <progress-bar :data="data"></progress-bar>
        <product-list :data="data"></product-list>
        <prodct-pic :user="user" :data="data.picList"></prodct-pic>
        <security></security>
        <section class="else img-size" data-marginTop="20" data-paddingLeft="30">
            <ul>
                <li class="box img-size" data-height="90" data-paddingRight="30" @click="go().product.investList()">
                    <div class="title flex img-size" data-fontSize="28">
                        投资记录({{data.investList.length}})
                    </div>
                    <aside>
                        <div class="arrow-parent">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
                <li class="box img-size" data-height="90" data-paddingRight="30" @click="go().all({returnUrl:'/help/question'})">
                    <div class="title flex img-size" data-fontSize="28">
                        常见问题
                    </div>
                    <aside>
                        <div class="arrow-parent">
                            <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                        </div>
                    </aside>
                </li>
            </ul>
        </section>
        <div class="btn img-size" :class="{gray:!btnEvent}" @click="submit" data-fontSize="36"
             data-height="90" data-lineHeight="90">{{btnText}}</div>
    </article>
</template>

<script>
    import headerBar from "./home/header";
    import {mapGetters} from "vuex";
    import progressBar from "./home/progressBar";
    import productList from "./home/productList";
    import prodctPic from "./home/prodctPic";
    import security from "./home/security";
    import arrow from "../../components/arrow";
    import {RESULT_RETURNURL} from "../../../contant/LOCALSTORAGE";
    import {PRODUCT_INFO,PRODCUT_DETAIL,PRODCUT_DETAIL_V1} from "../../../contant/urls/PRODUCT";
	export default {
	    components:{
            progressBar,
            headerBar,
            productList,
            prodctPic,
            security,
            arrow
        },
		computed:{
            ...mapGetters({
                cath : "getCatch",
                user : "getUserInfo"
            })
        },
        data(){
	        return{
                data : null,
                detail : null,
                info : null,
                //按钮状态
                btnEvent : true,
                btnText:null,
            }
        },
        mounted(){
	        if(!this.cath.productInfo){
	            return this.go().product.home();
            }
            this.setTitle({
                title : this.cath.productInfo.fullName,
                show : true,
                back : true,
                background:"#FE7634",
                borderColor:"#FE7634",
                color:"#fff",
                arrowColor:"#fff"
            });
	        this.setNav({
                show : false
            });
	        this.getDetail();
        },
        methods:{
	        getDetail(){
	            let self = this,
                    productInfo = this.cath.productInfo;
                /*self.data = {
                    //投资金额满10,000元，送300积分等活动说明
                    activitiesTitle : detail.activitiesTitle,
                    //历史年化收益率
                    rate : detail.rate,
                    //活动利率
                    activityRate : detail.activityRate,
                    deadline = data.deadline , //天数
                    repair = data.repair , //翻陪
                    //各种活动标签
                    isCash : detail.isCash,
                    isInterest : detail.isInterest,
                    isDouble : detail.isDouble,
                    isExclusive : detail.isExclusive,
                    //活动期限
                    deadline : detail.deadline,
                    //剩余可投(元)
                    surplusAmount : detail.surplusAmount,
                    //总额(元)
                    amount : detail.amount,
                    //到期日期
                    expireDate : detail.expireDate,
                    //产品详情 产品类型，起投金额等
                    extendTableList : detail.extendTableList,
                    //产品资料
                    picList : detail.filePicList,
                    //投资记录
                    investTotal : detail.investTotal,
                    //公司信息
                    projectList ： projectList,
                    //项目文件
                    fileDocList : fileDocList,
                    //项目介绍
                    extendTextList ： extendTextList
                    //投资记录
                    investList : investList
                };*/
	            if(productInfo.type==6 || productInfo.type==7){
                    this.ajax({
                        url : PRODCUT_DETAIL_V1,
                        data:{
                            pid : productInfo.id,
                        },
                        load : true
                    }).then(data=>{
                        let detail = data.map.detail;
                        self.data = detail;
                        let arr = [];
                        arr = arr.concat(detail.superList);
                        arr = arr.concat(detail.couponList);
                        Object.assign(self.data,{
                            picList : detail.filePicList,
                            projectList : detail.claimNames,
                            couponLevelList : detail.couponLevelList,
                            superList : detail.superList,
                            couponList : detail.couponList,
                            couponAllList : arr,
                        });
                        self.btnEvent = self.data.surplusAmount>=100;
                        if(self.data.status==6){
                            self.btnText="募集结束";
                            self.btnEvent=false;
                        }else if(self.data.status==8){
                            self.btnText="已计息";
                            self.btnEvent=false;
                        }else if(self.data.status==9){
                            self.btnText="已回款"
                            self.btnEvent=false;
                        }else {
                            self.btnText="立即投资";
                            self.btnEvent=true;
                        }
                        self.$store.commit("setCatch",{
                            productData : self.data
                        })
                    });
                }else{
	                let loadIndex = 0;
	                let removeLoad = function(){
                        loadIndex++;
                        if(loadIndex>1){
                            self.$pops.removeLoadding();
                        }
                    }
	                self.$pops.loadding();
                    this.ajax({
                        url:PRODCUT_DETAIL,
                        data:{
                            pid : productInfo.id,
                        },
                    }).then(data=>{
                        self.detail = data.map;
                        self.addDate();
                        removeLoad();
                    });
                    self.ajax({
                        url : PRODUCT_INFO,
                        data:{
                            pid : productInfo.id,
                            type : productInfo.type,
                        },
                    }).then(data=>{
                        self.info = data.map;
                        self.addDate();
                        removeLoad();
                    });
                }
            },
            addDate(){
	            let self = this , obj = [];
	            if(this.detail && this.info){
                    let title = ["借款人信息","承兑方概况","还款来源","风险控制"];
                    ["borrower","introduce","repaySource","windMeasure"].forEach((name,index)=>{
                        if(self.detail.info[name]){
                            obj.push({
                                title : title[index],
                                content : self.detail.info[name]
                            });
                        }
                    });
                    self.detail.superList = self.detail.superList || [];
                    self.detail.couponList = self.detail.couponList || [];
                    let arr = [...self.detail.superList,...self.detail.couponList];
                    self.data = {
                        extendTextList : obj,
                        picList : self.info.picList,
                        projectList : self.info.projectList,
                        investList : self.info.investList,
                        investTotal : self.detail.investTotal,
                        balance : self.detail.balance,
                        couponLevelList : self.detail.couponLevelList,
                        superList : self.detail.superList,
                        couponList : self.detail.couponList,
                        couponAllList : arr,
                        detail : self.detail.detail,
                        productContract : self.detail.productContract,
                        ...self.detail.info,
                    };
                    self.btnEvent = self.data.surplusAmount>=100;
                    if(self.data.status==6){
                        self.btnText="募集结束";
                        self.btnEvent=false;
                    }else if(self.data.status==8){
                        self.btnText="已计息";
                        self.btnEvent=false;
                    }else if(self.data.status==9){
                        self.btnText="已回款"
                        self.btnEvent=false;
                    }else {
                        self.btnText="立即投资";
                        self.btnEvent=true;
                    }
                    /*if(self.data.isRookie==1){
                        self.btnEvent = false;
                    }*/
                    self.$store.commit("setCatch",{
                        productData : self.data
                    })
                }
            },
            submit(){
	            if(!this.btnEvent) return;
	            let self = this;
                //其他操作后要返回的页面
                T.setItem(RESULT_RETURNURL, {
                    returnUrl: "/list/detail"
                });
                if(this.user){
                    let isOpenBank = this.openBank();
                    if(isOpenBank){//已开户
                        this.$pops.loadding();
                        require.ensure([],(require)=> {
                            this.$requirePop(require('./pay'), {
                                    props : {
                                        data : self.data
                                    }, //弹窗内容相关属性
                                },
                                {
                                    props: {//弹窗相关属性 同上面的 this.$Pop
                                        obj: {
                                            superClass : "downPop",
                                            width:'100%'
                                        },
                                        transition : "up"
                                    }
                                });
                        });
                    }else{//未开户
                        //请开始你的表演
                        console.log(123);
                    }
                }else{
                    this.go().login.home();
                }
            }
        }
	}
</script>
