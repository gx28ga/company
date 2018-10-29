/**
* 充值
* created by bo.peng 2018/4/11
* email:spion@qq.com
*/
<style scoped>
    @import url(../style/rechargeAndWithdrawCash.css);
</style>
<template>
    <article v-if="data" class="recharnge">
        <!--银行信息-->
        <section class="bank-logo img-size"
                 data-paddingTop="50"
                 data-paddingLeft="30" data-paddingRight="30"
                 data-height="180" data-marginBottom="40">
            <div class="logo-info account center">
                <div class="img account-logo img-size"
                     data-marginRight="30"
                     data-width="84" data-height="84" src="data.logo"></div>
                <div class="name">
                    <h4 class="img-size" data-fontSize="36">存管银行</h4>
                    <p class="img-size" data-fontSize="28">资金存管账户</p>
                </div>
            </div>
            <div class="logo-info bank center">
                <div class="img">
                    <img class="img-size"
                         data-marginRight="30"
                         data-width="84" data-height="84" :src="data.logo"/>
                </div>
                <div class="name">
                    <h4 class="img-size" data-fontSize="36">{{data.bankName}}</h4>
                    <p class="img-size" data-fontSize="28">尾号{{data.bankNum}}</p>
                </div>
            </div>
            <div class="to center img-size" data-marginTop="30" data-width="100">
                <div class="img img-size"
                     data-width="42" data-height="32"></div>
            </div>
        </section>
        <!-- end 银行信息 -->
        <div class="limit img-size"
             data-paddingLeft="30" data-lineHeight="40"
             data-fontSize="28" data-marginBottom="20">
            单笔限额{{data.quota|numercials}}元，单日限额{{(data.dayQuota)| numercials}}元，单月限额{{data.monthQuota|numercials}}元
        </div>
        <!--输入金额-->
        <div class="input-text img-size" @click="hideError" data-marginBottom="30" data-height="100"  data-fontSize="32" data-paddingLeft="30" data-paddingRight="30">
            <div class="text img-size" data-paddingRight="30">金额</div>
            <div class="input-number">
                <input v-model="num" class="img-size" data-fontSize="36"
                       type="tel" @blur="leaveEvent"
                       maxlength="9" placeholder="请输入金额"/>
            </div>
            <div class="text">元</div>
        </div>
        <!-- end 输入金额-->
        <div class="balance img-size" data-marginBottom="24"
             data-paddingLeft="30" data-paddingRight="30"
             data-fontSize="28" data-lineHeight="50">
            <ul>
                <li>可用余额<em>{{data.balance}}</em>元</li>
                <li class="result">充值后余额<em>{{countNum}}</em>元</li>
            </ul>
        </div>
        <div class="error" :class="{current:error}">{{errMsg}}</div>
        <div class="submit img-size" data-marginBottom="80" data-marginTop="24" data-paddingLeft="30" data-paddingRight="30">
            <div class="btn img-size"
                 @click="submit" :class="{gray:!btnEvent}"
                 data-fontSize="36" data-height="90" data-lineHeight="90">
                下一步
            </div>
        </div>
        <div class="tips img-size" data-paddingLeft="30" data-paddingRight="30">
            <div class="title img-size" data-height="100">
                <i class="icon img-size" data-width="58" data-height="60"></i>
                <h2 class=" img-size" data-paddingTop="8" data-paddingLeft="20" data-fontSize="36">友情提示</h2>
            </div>
            <div class="content img-size" data-paddingLeft="30">
                <ul>
                    <li><i></i>充值金额最少为<em>3</em>元</li>
                    <li><i></i>如有疑问请联系客服电话：<a @click="mobilePhone" href="tel:4006908896">{{PHONE}}</a> </li>
                </ul>
            </div>
        </div>
        <!--<send-form ref="form" :data="formData"></send-form>
        <copyright className="rechargetInfofooter"></copyright>-->
    </article>
</template>

<script>
    import copyright from "../../components/copyright";
    import {mapGetters} from "vuex";
    import filter from "../../../mixin/filters";
    import sendForm from "../../components/sendForm";
    import {RECHARGE,GET_RECHARGE_INFO} from "../../../contant/urls/MYACCOUNT";
    import GLOBAL from "../../../contant/GLOBAL";
    filter.filters = {
        numercial : filter.methods._numercial,
        numercials : function( num){
            let text = 0;
            if(num>=10000){
                text = parseInt(num/10000);
                text += '万'
            }else{
                text = num;
            }
            return text;
        }
    };
	export default {
        mixins : [filter],
        components : {
            sendForm,
            copyright
        },
		computed:{
            ...mapGetters({
	            user: "getUserInfo",
	            account : "getUserAccount",
                cath : "getCatch"
            }),
            countNum(){
                let num;
                try{
                    num = this.resultNum.toFixed(2);
                }catch(e){
                    num = "0.00";
                }
                return num;
            }
        },
        data(){
            return{
            	data : null,
                num : "",//金额
	            resultNum : 0,//充值后余额
                btnEvent : false,
                formData : null,
                //错误提示
	            errMsg: "",
	            error: false,
                PHONE:GLOBAL.sever.contactPhone
            }
        },
        watch:{
	        num(val){
	        	let num;
	        	if(!val || val=="" || parseFloat(val)===0){
	        		this.num = "";
                    this.setResultNum(this.data.balance);
	        		this.btnEvent = false;
	        		return;
                }
	        	this.num = this._toNumber(val);
	        	num = (parseFloat(val||0)+parseFloat(this.data.balance)).toFixed(2);
                this.setResultNum(num);
                this.btnEvent = true;
	        }
        },
        mounted(){
            let self = this;
			if(!this.loginJudge()) return;
	        this.setTitle({
		        title : "充值",
                show : true,
                back : true,
                gap : true,
                button : {
		            width : 60,
                    top : 25,
                    height:40,
		            text : "明细",
                    event(){
		                self.changeStatus();
                    }
                }
	        });
            this.setNav({
                show : false
            });
	        if(this.cath.rechargeNum){
	            this.data = this.cath;
	            this.num = this.cath.rechargeNum;
            }
	        this.getIndex();
        },
        methods:{
            mobilePhone(){
                T.callApp.call("callPhone",4006908896);
            },
	        showError(msg) {
		        this.errMsg = msg;
		        this.error = true;
		        return false;
	        },
	        hideError() {
		        this.error = false;
	        },
            setResultNum(num){
                TweenLite.to(this.$data, 0.5, { resultNum: num });
            },
			getIndex(){
				let self = this;
                this.ajax({
                    url : RECHARGE,
                    data : {
                    	uid : this.user.member.uid
                    }
                }).then(data=>{
	                self.data = data.map;
	                self.setResultNum(self.data.balance);
	                self.$nextTick(()=>{
		                self.setImgSize();
	                });
                })
            },
	        leaveEvent(){
				let num = this.num;
				if((/\.$/).test(String(num))){
					this.num = num.replace(".","")
                }
            },
            changeStatus(){//改变状态
                this.$store.commit("setCatch",{
                    changeTradType : {
                        type : 1
                    }
                });
                this.go().myAccount.transaction();
            },
            submit(){
				let num = this.num ,
                    self = this;
				if(num=="" || num<3){
                    this.showError("金额必需大于3.00元且不能为空");
                    this.btnEvent = false;
                }
                if(!this.btnEvent) return;
                this.btnEvent = false;
                if(version=="2.0"){
                    this.ajax({
                        url : GET_RECHARGE_INFO,
                        data:{
                            uid : this.user.member.uid,
                            amount : num
                        }
                    }).then(data=>{
                        let map = data.map;
                        self.formData = {
                            url : map.url,
                            type : "POST",
                            list : map.data,
                            callBack(){
                                self.$pops.loadding();
                                this.submit();
                            }
                        };
                        self.$store.commit("setCatch",{
                            rechargeNum : null
                        });
                    })
                }else{
                    self.data.rechargeNum = num;
                    this.$store.commit("setCatch",self.data);
                    this.go().myAccount.rechargeInfo();
                }
            }
        }
	}
</script>
