/**
* 投资购买
* created by bo.peng 2018/5/9
* email:spion@qq.com
*/
<style scoped>
    .pay {
        em {
            color: #FE7634;
        }
        section {
            margin-bottom: 10px;
            background: #fff;
        }
        h1 {
            font-size: 18px;
            color: #102542;
        }
        .tag {
            display: inline-block;
            padding:0 5px;
            color: #fff;
            text-align: center;
            background:url("../../../images/product/jiaxi.png") no-repeat;
            background-size:contain;
        }
        .flex {
            li {
                display: flex;
                flex-direction: row;
            }
        }
        ul {
            padding-left: 15px;
            li {
                line-height: 20px;
                padding: 10px 0;
                padding-right: 15px;
                border-bottom: .5px solid #D2D2D2;
                overflow:hidden;
                .label {
                    display: flex;
                    align-items: center;
                    flex: 1;
                    color: #102542;
                }
            }
            aside {
                display:flex;
                align-items:center;
                color: #A0A0A0;
                em {
                    color: #FE7634;
                }
            }
        }
        .text {
            font-size: 12px;
            color: #A0A0A0;
        }
        .expain {
            padding:15px;
            color: #A0A0A0;
            time {
                color: #FE7634;;
            }
        }
        .balance {
            position: absolute;
            width: 100%;
            left: 0;
            right: 0;
            bottom: 50px;
            padding: 20px 15px;
            color: #A0A0A0;
            text-align: center;
            box-sizing: border-box;
        }
        .icon {
            display: flex;
            align-items: start;
            justify-content: center;
            width: 22px;
            height: 22px;
            margin-right: 5px;
            border: 1px solid #D2D2D2;
            border-radius: 100%;
            box-sizing: border-box;
            background: #fff;
            &.current {
                background: #FF8246;
                border-color: #FF8246;
                span {
                    display: block;
                    width: 12px;
                    height: 5px;
                    margin-top: 5px;
                    border-top: 2px solid #fff;
                    border-right: 2px solid #fff;
                    transform: rotate(145deg);
                }
            }
            &.check {
                border-radius: 0;
            }
        }
        .profit {
            display: flex;
            padding: 10px 15px;
            line-height: 28px;
            .name {
                flex: 1;
            }
            del {
                text-decoration: line-through;
                color: #A0A0A0;
            }
            em {
                font-size: 18px;
                color: #FE7634;
            }
        }
        .read {
            font-size: 15px;
            color: #666666;
            align-items: center;
            padding: 0 15px;
            .tit{
                display:flex;
                flex-direction: row;
                align-items: center;
                overflow:hidden;
            }
            .txt{
                padding-left:30px;
                padding-top:5px;
                display:flex;
                flex-direction: column;
            }
            em {
                color: #FE7634;
            }
        }
        .btn {
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 999;
            width: 100%;
            background: #FE7634;
            border-radius: 0;
        }
        @media screen and (min-height: 300px) and (max-height: 500px) {
            .balance {
                position: relative;
                left: auto;
                right: auto;
                bottom: auto;
            }
        }
    }
</style>
<template>
    <article v-if="data" class="pay img-size" data-paddingBottom="60">
        <section class="section">
            <ul>
                <li>
                    <h1 class="tit img-size" data-fontSize="36">{{data.fullName}}</h1>
                    <div class="text">
                            预期年化：
                            <span>
                                {{data.rate}}
                                <span class="img-size" data-fontSize="14">%</span>
                            </span>
                            <span v-if="data.activityRate || data.activityRate!=0">
                                +{{data.activityRate}}
                                <span class="img-size" data-fontSize="14">%</span>
                            </span>
                            <span class="tag img-size" v-if="activity"
                                  data-width="100" data-height="28" data-lineHeight="28" data-fontSize="20">活动加息</span>
                    </div>
                </li>
                <li>
                    <div class="text">
                        <p>投资金额</p>
                        <em class="img-size" data-fontSize="36">￥{{cath.productNum}}</em>
                    </div>
                </li>
            </ul>
            <div class="expain">
                投资成功次日计息，产品到期日
                <time>{{data.expireDate | formatDate}}</time>
            </div>
        </section>
        <section>
            <ul class="flex">
                <li v-if="data.couponAllList && data.couponAllList.length">
                    <div class="label img-size" data-fontSize="28">
                        <i class="icon" @click="couponCheck=!couponCheck"
                           :class="{current:couponCheck}"><span></span></i>
                        优惠券
                    </div>
                    <aside @click="coupon">
                        <span v-html="couponVal"></span>
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="10" :height="10" name="right"/>
                    </aside>
                </li>
                <li v-if="data.couponLevelList && data.couponLevelList.length">
                    <div class="label img-size" data-fontSize="28">
                        <i class="icon" :class="{current:vipCheck}" @click="vipCheck=!vipCheck"><span></span></i>
                        VIP特权
                    </div>
                    <aside  class="img-size" data-fontSize="24">
                        加息<em>{{data.couponLevelList[0].raisedRates}}<span class="img-size" data-fontSize="14">%</span></em>
                        &nbsp;&nbsp;
                        剩余<em>{{data.couponLevelList.length}}</em>次
                    </aside>
                </li>
            </ul>
            <div class="expain" v-if="data.couponLevelList && data.couponLevelList.length">
                红包与特权不可共享，且20天以下产品无法使用特权
            </div>
        </section>
        <section class="profit">
            <div class="name img-size" data-fontSize="28">预期收益</div>
            <aside>
                <del v-if="cath.priceNum!==profit">{{cath.priceNum}}元</del>
                <em class="img-size" data-fontSize="36">{{profit}}元</em>
            </aside>
        </section>
        <div class="read">
            <div class="tit">
                <i class="icon check" @click="checked=!checked" :class="{current:checked}"><span></span></i>
                已阅读并同意以下协议
            </div>
            <div class="txt">
                <p v-for="item in agreement" @click="goUrl(item)" :key="item.id"><em>《{{item.name}}》</em></p>
            </div>
        </div>
        <div class="balance img-size" data-fontSize="28">余额抵扣：<em>{{balance|fixed}}元</em></div>
        <div class="btn img-size" :class="{gray:!btnEvent}" @click="submit" data-fontSize="36"
             data-height="90" data-lineHeight="90">{{btnStatus?"确认投资":"充值"+productNumBalance+"元"}}
        </div>
    </article>
</template>

<script>
    import arrow from "../../components/arrow";
    import {mapGetters} from "vuex";
    import filter from "../../../mixin/filters";
    import profit from "../common/profit";
    import his from "../../../middle/history";
    import {RESULT_RETURNURL} from "../../../contant/LOCALSTORAGE";
    export default {
        components: {
            arrow
        },
        computed:{
            ...mapGetters({
                cath : "getCatch",
                user : "getUserInfo"
            }),
            profit(){
                let num = this.profitNum,
                    arr = String(num).split("~");
                if(arr.length>1){
                    return filter.methods._toFixed(arr[0])+"~"+filter.methods._toFixed(arr[1]);
                }
                return filter.methods._toFixed(num);
            }
        },
        filters:{
            formatDate : filter.methods._formatDate,
            fixed : filter.methods._toFixed,
        },
        data() {
            return {
                checked: true,
                couponCheck: false,
                vipCheck: false,
                btnEvent: true,
                info : null,
                data : null,
                selectCoupon : null,
                selectCouponCatch : null, //当前页面存储
                couponVal : "",
                profitNum : 0,
                balance : 0, //可用金额，剩余金额
                productNum : 0, //投资金额
                btnStatus : true,
                productNumBalance : 0,//需要充值的金额
                agreement : [],//协议
                activity : false,//活动加息
            }
        },
        watch: {
            productNum(val){
                let balance = this.data.balance;
                if(balance >= val){ //如果剩余的钱可以达到了需要投资的金额
                    this.balance = val;
                    this.btnStatus = true;
                }else{
                    this.balance = balance;
                    this.productNumBalance = filter.methods._localeString(parseFloat(val)-parseFloat(balance));
                    this.btnStatus = false;
                }
            },
            checked() {
                this.verification();
            },
            couponCheck( val ){
                if(val){
                    this.vipCheck = false;
                    this.selectCoupon = this.selectCouponCatch;
                }else if(!this.vipCheck){
                    this.selectCoupon = null;
                }
            },
            vipCheck(val){
                if(val){
                    this.couponCheck = false;
                    this.selectCoupon = this.data.couponLevelList[0];
                }else if(!this.couponCheck){
                    this.selectCoupon = null;
                }
            },
            selectCoupon( obj ){
                let self = this;
                if(!obj){
                    self.getProfit(profit.getProfit(self));
                    return;
                }
                if (obj.type===2) {//加息券
                    if(obj.minRaisedRates){
                        let min , max;
                        min = profit.getProfit(this,{
                            raisedRates : obj.minRaisedRates
                        });
                        max = profit.getProfit(this,{
                            raisedRates : obj.maxRaisedRates
                        });
                        self.getProfit(min+"~"+max);
                    }else{
                        let raise = obj.raisedRates;
                        self.getProfit(profit.getProfit(self,{
                            raisedRates : raise
                        }));
                    }
                }else if (obj.type===1) { //红包
                    let redPacket = parseFloat(obj.amount);
                    self.getProfit(parseFloat(profit.getProfit(self))+redPacket);
                }
                self.$store.commit("setCatch",{
                    selectCoupon : obj
                });
            }
        },
        mounted() {
            if(!this.cath.productData){
                return this.go().product.home();
            }
            this.info = this.cath.productInfo;
            this.data = this.cath.productData;
            let data = this.data;
            this.productNum = this.cath.productNum;
            this.setTitle({
                show: true,
                title: "投资",
                back: true,
                gap: true,
            });
            this.setNav({show: false});
            his.goBackHistory({
                self : this
            });
            this.agreement = this.data.productContract.contractTemplateList;
            this.profitNum = this.cath.priceNum;
            this.activity = data.isCash===1 ||
                data.isInterest===1 ||
                data.isCash===1 ||
                data.isInterest===1 ||
                data.isDouble===1 ||
                data.isExclusive===1 ||
                data.activityRate!==0 ||
                (data.drProductTags && data.drProductTags.length);
            this.updateCoupon();
            //其他操作后要返回的页面
            T.setItem(RESULT_RETURNURL, {
                returnUrl: "/list/pay"
            });
        },
        methods: {
            verification() {
                this.btnEvent = this.checked;
            },
            submit() {
                let self = this;
                if(!this.btnEvent) return;
                if(this.btnStatus){
                    this.$pops.loadding();
                    self.data.profit = self.profit;
                    self.data.productNum = self.productNum;
                    self.data.selectCoupon = self.selectCoupon;
                    require.ensure([],(require)=> {
                        this.$requirePop(require('./pwd'), {
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
                }else{
                    this.$store.commit("setCatch",{
                        rechargeNum : String(this.productNumBalance).replace(/,/g,"")
                    });
                    this.go().myAccount.recharge();
                }
            },
            goUrl( obj ) {
                this.go().outside({
                    url : obj.url,
                    title : obj.name,
                    share : false,
                })
            },
            coupon(){
                this.go().product.coupon();
            },
            getProfit( num ){
                TweenLite.to(this.$data, 0.5, { profitNum: num });
            },
            updateCoupon(){//更新优惠券信息
                let self = this,
                    data = self.data,
                    vip,
                    selectCoupon = self.selectCoupon,
                    isSelectCoupon = false,//是否是从优惠券中选择过来的
                    maxVal = "",//是否是最高收益
                    superList = data.superList,
                    couponList = data.couponList,
                    couponLevelList = data.couponLevelList;
                if(couponLevelList && couponLevelList.length){
                    vip = couponLevelList[0].raisedRates;
                }
                if(this.cath.selectCoupon){//如果已选择优惠券
                    self.selectCoupon = self.cath.selectCoupon;
                    isSelectCoupon = true;
                }else{
                    if(superList&&superList.length){//如果是超级加息券，默认选择他
                        this.selectCoupon = superList[0];
                        this.couponCheck = true;
                    }else if(couponList && couponList.length){ //如果有加息券，则选择最大的
                        self.getMax();
                        maxVal = `<span class="max" style="
                                    display:inline-block;
                                    background:#FE7634;
                                    color:#fff;
                                    padding:0 5px;
                                    border-radius:5px;">收益最高</span>`;
                    }
                }
                if(self.selectCoupon && (selectCoupon = self.selectCoupon)){ //更新选择的优惠券信息
                    self.selectCouponCatch = self.selectCoupon;
                    self.$store.commit("setCatch",{
                        selectCoupon : self.selectCoupon
                    });
                    if (selectCoupon.type===2) {//加息券
                        if(selectCoupon.minRaisedRates){//如果有超级加息券，优先选择它
                            self.couponVal = `超级加息券<em style="color: #FE7634;">${selectCoupon.minRaisedRates}-${selectCoupon.maxRaisedRates}<span class="img-size" data-fontSize="14">%</span></em>`
                            self.couponCheck = true;
                        }else{
                            let raise = selectCoupon.raisedRates;
                            self.couponVal = `
                                加息券<em style="color: #FE7634;">${raise}<span class="img-size" data-fontSize="14">%</span></em>`+maxVal;
                            //isSelectCoupon 为用户选择行为，不需要对比 直接进else
                            if(!isSelectCoupon && vip && vip>raise){ //vip和优惠券对比
                                self.vipCheck = true;
                                self.couponCheck = false;
                            }else{
                                self.couponCheck = true;
                            }
                        }
                    }else if (selectCoupon.type===1) { //红包
                        let redPacket = selectCoupon.amount;
                        //isSelectCoupon 为用户选择行为，不需要对比 直接进else
                        if(!isSelectCoupon && vip && profit.getProfit(this,{
                            raisedRates : vip
                        })>redPacket) {
                            self.vipCheck = true;
                            self.couponCheck = false;
                        }else{
                            self.couponCheck = true;
                        }
                        self.couponVal = `
                            红包<em style="color: #FE7634;">${redPacket}元</em>`+maxVal;
                    }
                    //}
                }else if(vip && (!superList||!superList.length) && !isSelectCoupon){//选择vip 不能有超加息券 且用户选择优惠券的情况不需要判断了。
                    self.vipCheck = true;
                    self.couponCheck = false;
                    self.selectCoupon = vip;
                }
                if(self.cath.selectCouponBank && self.cath.selectCouponBank===true){
                    self.couponCheck = false;
                    self.vipCheck = false;
                    self.selectCoupon = null;
                    self.$store.commit("setCatch",{
                        selectCouponBank : false
                    });
                }
            },
            getMax(){//翻倍>返现>加息
                let self = this,
                    cath = self.cath,
                    data = self.data,
                    acount = cath.productNum ,//投资金额
                    type2 = [] ,
                    type1 = [];
                function max(val){
                    return function(a,b){
                        if(!a) return 0;
                        return parseFloat(b[val]) - parseFloat(a[val]);
                    }
                }
                data.couponList.forEach(obj=>{
                    if(parseInt(acount)>=obj.enableAmount){
                        if(obj.type===2){
                            obj.priceNum = profit.getProfit(self,{
                                raisedRates : obj.raisedRates
                            });
                            type2.push(obj);
                        }
                        if(obj.type===1){
                            type1.push(obj);
                        }
                    }
                });
                if(type1.length && type2.length){
                    type1.sort(max("amount"));
                    type2.sort(max("priceNum"));
                    let _type1 = parseFloat(type1[0].amount),
                        _type2 = parseFloat(type2[0].priceNum),
                        sum;
                    if(_type1===_type2||_type1>_type2){//翻倍>返现>加息
                        sum = type1[0];
                    }else{
                        sum = type2[0];
                    }
                    this.selectCoupon = sum;
                }else if(type1.length){
                    this.selectCoupon = type1.sort(max("amount"))[0];
                }else if(type2.length){
                    this.selectCoupon = type2.sort(max("priceNum"))[0];
                }else{
                    this.couponVal = "请选择优惠券";
                }
            }
        }
    }
</script>
