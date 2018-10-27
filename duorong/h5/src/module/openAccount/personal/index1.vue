/**
* 用户开户系统
* created by bo.peng 2018/3/27
*/
<style scoped>
	.article{
        background:#fff;
		h1{
			color:#fff;
			text-align:center;
		}
	}
	.form{
		background:#fff;
		border-radius:20px;
		ul{
			display:flex;
			flex-direction:column;
		}
		.text{
			display:block;
			text-indent:1em;
			border:1px solid #ddd;
			border-radius:50px;
			background:#fff;
			box-sizing:border-box;
		}
		li{
			display:flex;
			flex:1;
			padding-bottom:10px;
			justify-content:center;
			align-items:center;
			.flex{
				flex:1;
			}
		}
		.btn{
			background:#e09e2f;
			color:#fff;
			border-radius:100px;
			text-align:center;
		}
		.setcode{
			display:block;
			.input-text{
				float:left;
			}
			input{
				border-top-right-radius:0;
				border-bottom-right-radius:0;
			}
			.btn{
				float:right;
				border-top-left-radius:0;
				border-bottom-left-radius:0;
				text-align:center;
				transition-duration:0s;
			}
		}
		.select{
			flex:1;
			padding:5px;
			border-color:#ddd;
			/*-webkit-appearance: none;*/
			background:#fff;
		}
		.error{
			height:0;
			overflow:hidden;
			text-align:center;
			color:#e60012;
			transition-duration:.3s;
			&.current{
				height:32px;
				line-height:22px;
			}
		}
	}
</style>
<style>
	.personalPop{
		min-width:200px;
	}
</style>
<template>
	<article class="article">
		<h1 class="img-size" data-fontSize="60" data-paddingTop="80" data-paddingBottom="80">用户开户系统</h1>
		<div class="form img-size" data-margin="40" data-padding="40">
			<ul @click="hideError">
				<li>
					<input class="text flex img-size" v-model="name" maxlength="20" type="text" placeholder="姓名" data-height="60"/>
				</li>
				<li class="setcode">
					<div class="input-text">
						<input v-model="tel" class="text img-size" type="text" data-width="350"
							   placeholder="手机号" data-height="60" maxlength="11"/>
					</div>
					<div class="btn get-code img-size" data-width="150"
						 data-height="60" data-lineHeight="60"
						 :class='{gray:yzmclass}' @click='yzmEvent'
						 data-fontSize="28"
						 data-paddingRight="50" data-paddingLeft="30">
						{{yzmMsg}}
					</div>
				</li>
				<li>
					<input v-model="code" maxlength="6" class="text flex img-size" type="text" placeholder="验证码" data-height="60"/>
				</li>
				<li>
					<input class="text flex img-size" v-model="number" type="tel" placeholder="身份证" data-height="60" maxlength="20"/>
				</li>
				<li>
					<select class="select" v-model="selectBanks">
						<option value="-1">开户银行</option>
						<option v-for="item in banks" v-bind:key="item.id" v-bind:value="item" v-bind:id="item.id">{{item.name}}</option>
					</select>
				</li>
				<li>
					<select class="select" v-model="province">
						<option value="-1">开户行省</option>
						<option v-if="citys" v-for="item in citys" v-bind:key="item.id" v-bind:value="item" v-bind:id="item.id">{{item.province}}</option>
					</select>
				</li>
				<li>
					<select class="select" v-model="city">
						<option value="-1">开户行市</option>
						<option v-if="selectCitys && selectCitys.length"
								v-for="item in selectCitys" v-bind:key="item.id"
								v-bind:value="item" v-bind:id="item.id">
							{{item.city}}
						</option>
					</select>
				</li>
				<li>
					<input class="text flex img-size" v-model="bankcard" type="tel" placeholder="银行卡号" data-height="60" maxlength="20"/>
				</li>
			</ul>
			<div class="error" :class="{current:error}">{{errMsg}}</div>
			<div class="btn img-size" @click="submit" data-height="70" data-lineHeight="70" data-fontSize="30">提交</div>
		</div>
	</article>
</template>
<script>
	//API : https://shimo.im/sheet/DtqbcqaqYR8NkRHW
	import {mapGetters} from "vuex";
	import ERROR from "../../../contant/ERRORCODE";
	import mixin from '../../../mixin';
	import {PERSONAL_SEND_CODE,OPEN_PERSONAL} from "../../../contant/urls/OPENACCOUNT";
	export default {
	    mixins : [mixin],
		data() {
			return {
			    name : "",
                selectBanks:-1,
				tel : "",
				code : "",
                bankcard : "",
				number : "",
                province:-1,
                city:-1,
				selectCitys : null,
                errMsg : "",
				error : false,

				//验证码
				time : 60,
				yzmclass : true,
				yzmMsg : '获取验证码',
			}
		},
		computed : {
			...mapGetters({
				citys : "getCitys",
				banks : "getBanks"
			})
		},
		watch:{
            selectBanks( bank ){

			},
            province( obj ){
                this.city = -1;
                this.selectCitys = obj.citys;
			},
			tel : function(val){
				this.yzmclass = !this._tel(val);
			}
		},
		mounted() {
            this.setTitle({
                title : "用户开户系统"
            });
            this.setNav({
                show : false
            });
			this.setImgSize();
            this.$store.commit("setCitys",this);
		},
		methods:{
		    showError( msg ){
		        this.errMsg = msg;
		        this.error = true;
		        return false;
			},
			hideError(){
		        this.error = false;
			},
			successPop(){
				this.$pop({
					title : "开户",
					wrapper : "personalPop",
					close : true,
					content : "开户成功！",
					footer : {
						ok : "确定",//确定按钮
						okCallback : function(){
							this.close();
						}, //确定按钮事件
					}
				});
			},
			sendSmsId(){//发送短信
				let self = this;
				this.ajax({
					url : PERSONAL_SEND_CODE,
					dataType : "jsonp",
					data : {
						phone : self.tel
					},
					callback : true,
				}).then(data=>{
					if(data.success){
						self.reSendYzm();
					}else{
						self.showError(data.msg);
					}
				});
			},
			yzmEvent(){
				if(!this.yzmclass){
					this.sendSmsId();
				}
			},
			reSendYzm(){
				this.time = this.time - 1;
				if(this.time>0){
					this.yzmMsg = this.time+'s后重发';
					setTimeout(this.reSendYzm,1000);
					this.yzmclass = true;
				}else{
					this.yzmclass = false;
					this.yzmMsg = '获取验证码';
					this.time = 60;
				}
			},
            verification(){
		        let name = this.name,
					tel = this.tel,
					code = this.code ,
					number = this.number,
					bank = this.selectBanks,
                    province = this.province,
                    bankcard = this.bankcard,
                    city = this.city;

		        if(name.length<1){
		            return this.showError("姓名不能为空!");
				}else if(!/^[\u4e00-\u9fa5|\·|a-z|A-Z]{1,20}$/.test(name)){
                    return this.showError(ERROR.OPENACCOUNT_NAME_ERROR);
				}else if(tel.length<1) {
                    return this.showError("手机号不能为空!");
                }else if(!this._tel(tel)){
                    return this.showError(ERROR.PHONE);
				}else if(!code.length){
		            return this.showError("请填写短信验证码！")
				}else if(number.length<1){
                    return this.showError("请填写身份证！")
				}else if(!this._id(number)){
                    return this.showError(ERROR.ID);
				}else if(bank<0){
                    return this.showError(ERROR.BANK);
				}else if(province<0){
                    return this.showError(ERROR.PROVINCE);
                }else if(city<0){
                    return this.showError(ERROR.CITY);
                }else if(bankcard.length<1){
                    return this.showError("银行卡号不能为空！");
				}

		      	return true;
			},
            submit(){
				if(!this.verification()) return;
                let self = this,
					name = this.name,
                    tel = this.tel,
                    code = this.code ,
                    number = this.number,
                    bank = this.selectBanks,
                    //province = this.province,
                    bankcard = this.bankcard,
                    city = this.city;

				this.ajax({
					url : OPEN_PERSONAL,
					dataType : "jsonp",
					data : {
                        cust_nm:name,	//真实姓名
                        //证件类型
						certif_id:number,
						mobile_no:tel,//	手机号码
						coed_no:code,//	验证码
						capAcntNo:bankcard,//	银行卡号
						//开户行地区
						city_id:city.cityCode,//	选择市
						parent_bank_id:bank.parentBankId,//	选择银行
						customerRole:1, //借款方
						channel : this.getQueryString("channel")
                    },
					callback : true,
				}).then(data=>{
				    if(data.success){
						self.successPop();
					}else{
				        self.showError(data.errorMsg);
					}
				})
			}
		}
	}
</script>
