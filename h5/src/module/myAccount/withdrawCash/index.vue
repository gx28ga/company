/**
* 提现
* created by bo.peng 2018/4/11
* email:spion@qq.com
*/
<style scoped>
@import "../style/rechargeAndWithdrawCash.css";
.withdraw{
    .bank{
        float:right;
    }
    .account{
        float:left;
    }
    .input-text{
        .text{
            height:35px;
            line-height: 35px;
        }
        .input{
            flex:1;
        }
        .input-number{
            color: #FF8246;
        }
    }
    .extract-btn{
        float:right;
        color: #FF8246;
        border:1px solid #FF8246;
        border-radius:20px;
        text-align:center;
    }
}
</style>
<template>
<article v-if="data" class="recharnge withdraw">
    <!--银行信息-->
    <section class="bank-logo img-size"
             data-paddingTop="50"
             data-paddingLeft="30" data-paddingRight="30"
             data-height="180" data-marginBottom="40">
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
        <div class="logo-info account center">
            <div class="img account-logo img-size"
                 data-marginRight="30"
                 data-width="84" data-height="84"></div>
            <div class="name">
                <h4 class="img-size" data-fontSize="36">存管银行</h4>
                <p class="img-size" data-fontSize="28">资金存管账户</p>
            </div>
        </div>
        <div class="to center img-size" data-marginTop="30" data-width="100">
            <div class="img img-size"
                 data-width="42" data-height="32"></div>
        </div>
    </section>
    <!-- end 银行信息 -->
    <div class="limit img-size"
         data-paddingLeft="30"
         data-fontSize="28" data-marginBottom="20" v-if="data.carryQuota">
        单笔限额{{data.carryQuota|numercials}}元
    </div>
    <!--帐户余额-->
    <div class="input-text img-size" data-marginBottom="30" data-height="100" data-fontSize="32" data-paddingLeft="30" data-paddingRight="30">
        <div class="text img-size" data-paddingRight="30">账户余额</div>
        <div class="input img-size" data-lineHeight="70">
            {{data.balance}}
        </div>
        <div class="extract-btn img-size" @click="getAll" data-width="170" data-height="48" data-lineHeight="48" data-fontSize="32">全部提现</div>
    </div>
    <!-- end 帐户余额-->
    <!--输入金额-->
    <div class="input-text img-size" data-marginBottom="30" data-height="100" data-fontSize="32" data-paddingLeft="30" data-paddingRight="30">
        <div class="text img-size" data-paddingRight="30">金额</div>
        <div class="input-number">
            <input v-model="num" class="img-size" data-fontSize="36"
                   type="tel" @blur="leaveEvent"
                   maxlength="9" placeholder="请输入提现金额"/>
        </div>
        <div class="text">元</div>
    </div>
    <!-- end 输入金额-->
    <div class="balance img-size" data-marginBottom="24"
         data-paddingLeft="30" data-paddingRight="30"
         data-fontSize="28" data-lineHeight="50">
        <ul>
            <li>提现费用<em>{{data.serviceCharge}}</em>元</li>
            <li class="result">预估到账金额<em>{{countNum}}</em>元</li>
        </ul>
    </div>
    <div class="error" :class="{current:error}">{{errMsg}}</div>
    <div class="submit img-size" data-marginBottom="80" data-marginTop="24" data-paddingLeft="80" data-paddingRight="80">
        <div class="btn img-size"
             @click="submit" :class="{gray:!btnEvent}"
             data-fontSize="36" data-height="90" data-lineHeight="90">
            申请提现
        </div>
    </div>
    <div class="tips img-size" data-paddingLeft="30" data-paddingRight="30">
        <div class="title img-size" data-height="100">
            <i class="icon img-size" data-width="58" data-height="60"></i>
            <h2 class=" img-size" data-paddingTop="8" data-paddingLeft="20" data-fontSize="36">友情提示</h2>
        </div>
        <div class="content img-size" data-paddingLeft="30">
            <ul>
                <li style="color:red"><i></i>未投资过的用户每次提现将收取3元手续费</li>
                <li><i></i>每日可以免费提现1次</li>
                <li><i></i>预计1-2个工作日内到账(如遇节假日顺延)</li>
                <li><i></i>如有疑问请联系客服电话：<a @click="mobilePhone" href="tel:4006908896">{{PHONE}}</a> </li>
            </ul>
        </div>
    </div>
    <send-form ref="form" :data="formData"></send-form>
    <copyright className="rechargetInfofooter"></copyright>
</article>
</template>

<script>
	import {mapGetters} from "vuex";
	import filters from "../../../mixin/filters";
    import sendForm from "../../components/sendForm";
    import {WITHDRAWALS,WITHDRAW_CASH} from "../../../contant/urls/MYACCOUNT";
    import copyright from "../../components/copyright";
    import GLOBAL from "../../../contant/GLOBAL";
	export default {
        components : {
            sendForm,
            copyright
        },
		mixins : [filters],
		computed:{
			...mapGetters({
				user: "getUserInfo",
				account : "getUserAccount"
			}),
            countNum(){
                return this.resultNum.toFixed(2);
            }
		},
        filters:{
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
        },
		data(){
			return{
				data : null,
				num : "",//金额
				resultNum : 0,//充值后余额
                formData : null,
				//错误提示
				errMsg: "",
				error: false,
                btnEvent : false,
                PHONE:GLOBAL.sever.contactPhone
			}
		},
		watch:{
			num(val){
				let num;
				if(!val || val=="" || parseInt(val)===0){
                    this.setResultNum(0);
                    this.btnEvent = false;
                    this.hideError();
                    this.num = "";
				}else if(val>this.data.balance){
				    this.showError("超出帐户余额！");
				    this.btnEvent = false;
                }else{
                    this.num = this._toNumber(val);
                    num = (parseFloat(val||0)).toFixed(2);
                    this.setResultNum(num);
                    this.btnEvent = true;
                    this.hideError();
                }
			}
		},
		mounted(){
            let self = this;
			if(!this.loginJudge()) return;
			this.setTitle({
				title : "提现",
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
            getAll(){
                this.num = this.data.balance;
            },
            changeStatus(){//改变状态
                this.$store.commit("setCatch",{
                    changeTradType : {
                        type : 2
                    }
                });
                this.go().myAccount.transaction();
            },
			getIndex(){
				let self = this;
				this.ajax({
					url : WITHDRAWALS,
					data : {
						uid : this.user.member.uid
					}
				}).then(data=>{
					self.data = data.map;
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
			submit(){
			    if(!this.btnEvent) return;
			    this.btnEvent = false;
				let self = this,
                    num = this.num;
				if(num=="" || num<3){
					this.showError("金额必需大于3.00元且不能为空");
					return;
				}
                this.ajax({
                    url : WITHDRAW_CASH,
                    data:{
                        uid : this.user.member.uid,
                        amount : num
                    },
                    callback : true,
                }).then(data=>{
                    let map = data.map;
                    if(data.success){
                        self.formData = {
                            url : map.requestUrl,
                            type : "POST",
                            list : map.requestData,
                            callBack(){
                                this.submit();
                                self.$store.commit("updateHomeIndex",{update:true});
                                self.$store.dispatch("updateUserAccount",{update:true});
                                self.$pops.loadding();
                            }
                        };
                    }else{
                        if(data.errorCode=="20001"||data.errorCode=="20002"||data.errorCode=="20003"){
                            self.go().openAccount.authorization({
                                errorMsg : data.errorMsg
                            });
                        }else{
                            self.showError(data.errorMsg);
                            self.btnEvent = true;
                        }
                    }
                })
			}
		}
	}
</script>
