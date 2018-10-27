/**
*
* created by wangcuiqing
*
*/
<style scoped>
    .question {
        font-family: "PingFangSC-Light";
        color: #333;

    }

    .answer {
        background: #fff;

    .answerCon {
        border-bottom: 1px solid #d2d2d2;
        position: relative;

    .optionRadio {
        width: 0px;
        height: 0px;
        background: #000;
        margin-right: 30px;
        border-radius: 50%;

    }

    .optionRadio:before {
        content: "";
        display: block;
        position: absolute;
        border-radius: 50%;
        transition: 0.3s ease;

    }

    .optionRadio:before {
        top: 12px;
        right: 10px;
        width: 16px;
        height: 16px;
        background: url("./images/Oval.png");
        /*border:1px solid #000;*/
    }

    .optionRadio:checked:before {
        /*  border-color:red;*/
        width: 16px;
        height: 16px;
        background: url("./images/Group-4.png");
        top: 12px;
        right: 10px;
    }

    }
    }
    .returnNext {
        color: #FF8246;
        font-family: PingFangSC-Light;
    }

    .submitBtn {
        color: #fff;
        background: #FE7634;
        text-align: center;
        border-radius: 5px;
        margin: 100px auto 0;

    }

    .disBtn {
        color: #fff;
        background: #999;
        text-align: center;
        border-radius: 5px;
        margin: 100px auto 0;
    }

    .returnRisk {
        background: #FE7634;
        color: #fff;
        font-family: "PingFangSC-Semibold";
        text-align: center;
        margin: 100px auto;
        border-radius: 5px;

    }
</style>
<template>
    <div class='transition'>
        <div class='module-scroll img-size' data-paddingTop='20'>
            <progressbar :current='current' v-show=' result !=2 && result !=3'></progressbar>
            <question1 v-show="current == 1" v-on:changeValue="change" v-bind:riskShow='show'></question1>
            <question2 v-show="current == 2" v-on:changeValue="change" v-bind:riskShow='show2'></question2>
            <question3 v-show="current == 3" v-on:changeValue="change" v-bind:riskShow='show3'></question3>
            <question4 v-show="current == 4" v-on:changeValue="change" v-bind:riskShow='show4'></question4>
            <question5 v-show="current == 5" v-on:changeValue="change" v-bind:riskShow='show5'></question5>
            <question6 v-show="current == 6" v-on:changeValue="change" v-bind:riskShow='show6'></question6>
            <question7 v-show="current == 7" v-on:changeValue="change" v-bind:riskShow='show7'></question7>
            <question8 v-show="current == 8" v-on:changeValue="change" v-bind:riskShow='show8'></question8>
            <question9 v-show="current == 9" v-on:changeValue="change" v-bind:riskShow='show9'></question9>

            <question10 v-show="current == 10 && result !=2" v-on:changeValue="change"></question10>
            <result v-show='result==2' v-bind:riskType='type' v-bind:riskContent='content'></result>
            <resultabc v-show='result==3  ' v-bind:riskType='type' v-bind:riskContent='content'></resultabc>
            <div class='returnNext img-size' data-fontSize='32' data-paddingLeft='40' data-marginTop='30'
                 @click='goback' v-show='current !==1 && result !=2 && result !=3' data-width='200'>
                &lt; 返回上一题
            </div>
            <div class='disBtn  img-size' data-width='490' data-height='90' data-lineHeight='90' data-fontSize='36'
                 v-show='current ==10 && btn ==5 && result !=2'>提交
            </div>
            <div class='submitBtn img-size' data-width='490' data-height='90' data-lineHeight='90' data-fontSize='36'
                 v-show='current ==10  && result !=2 && btn==3' @click='submitBtn'>提交
            </div>
            <div class='returnRisk img-size' data-width='490' data-height='90' data-fontSize='28' data-lineHeight='90'
                 @click='returnRisk' v-show='result ==3'>重新测评
            </div>
            <div class='returnRisk img-size' data-width='490' data-height='90' data-fontSize='28' data-lineHeight='90'
                 @click='returnMyAccount' v-show='result ==2'>返回
            </div>
        </div>
    </div>
</template>
<script>
	//import requirePop from '../pop/requirePop.js';
	import {mapGetters} from "vuex";
	import progressbar from './compontents/ProgressBar.vue';
	import question1 from "./compontents/question1.vue";
	import question2 from "./compontents/question2.vue";
	import question3 from "./compontents/question3.vue";
	import question4 from "./compontents/question4.vue";
	import question5 from "./compontents/question5.vue";
	import question6 from "./compontents/question6.vue";
	import question7 from "./compontents/question7.vue";
	import question8 from "./compontents/question8.vue";
	import question9 from "./compontents/question9.vue";
	import question10 from "./compontents/question10.vue";
	import result from './compontents/result.vue';
	import resultabc from './compontents/resultabc.vue';
	//import {riskEvaluation, riskUrl} from "../../../contant/urls/RISKEVALUATION.js";
    //const FIND = require("../../contant/urls/FIND");
    const RISKEVALUATION =require("../../../contant/urls/RISKEVALUATION");
	export default {
		components: {
			progressbar,
			question1,
			result,
			resultabc,
			//question1,
			question2,
			question3,
			question4,
			question5,
			question6,
			question7,
			question8,
			question9,
			question10
		},
		compontents: {
			question1,
			question2,
			question3,
			question4,
			question7,
			question8,
			question9,
			question10
		},
		computed: {
			...mapGetters({
				info: "getUserInfo",
			})
		},
		data() {
			return {
				current: 0,
				show: false,
				show2: false,
				show3: false,
				show4: false,
				show5: false,
				show6: false,
				show7: false,
				show8: false,
				show9: false,
				checked: [],
				allValue: {},
				result: 1,
				type: '',
				content: "",
				number: 5,
				btn: 3,
				isRisk: -1,
				resultABC: false,
			}
		},
		mounted() {
			VueParent.setHead({
				show: true,
				title: "风险测评",
				back: true,
				backUrl: "",
				share: true,
			});
			let isLogin = this.info;
			T.setImgSize();
			let self = this;
			if (!isLogin) {
				this.$pop({
					title: "登录",
					wrapper: "personalPop",
					close: true,
					content: "你还未登录，请登录后操作！",
					footer: {
						ok: "登录",//确定按钮
						okCallback: function () {
							this.close();
							this.go().login.home.call(self, {
								returnUrl: "/other/riskEvaluation"
							});
						},
					}

				});
			} else {
				let uid = this.info.member.uid;
				self.ajax({
					url: RISKEVALUATION.riskUrl,/*
					dataType: "json",
					type: "POST",
					headers: {
                        ContentType:"application/json; charset=utf-8"
					},*/
					data:JSON.stringify({uid:uid}),
				}).then(data => {
					this.isRisk = data.map.isRisk;
					if (this.isRisk == 0) {
						this.resultABC = false;
						this.current = 1;
					} else {
						if (this.isRisk == 1) {
							this.type = '保守型';
							this.content = '希望本金绝对安全，只能接受较小的市场波动';
						} else if (this.isRisk == 2) {
							this.type = '积极型';
							this.content = '希望投资增长并尽可能地获得最高回报，可以接受短期负面波动，愿意承担全部收益包括本金可能损失的风险。';
						} else if (this.isRisk == 3) {
							this.type = '稳健型';
							this.content = '倾向于平衡的方式，偏好投资于兼具成长性及收益性的产品，能接受一定的负面波动。';
						}
						this.resultABC = true;
						this.result = 3;
					}
				})
			}
		},
		methods: {
			goback() {
				// router.push("/number2");
				this.current--;

			},

			change(data) {
				let key = data.split(',')[0];
				let value = data.split(',')[1];
				this.allValue[key] = value;
				if (this.current < 10) {
					setTimeout(() => {
						this.current++;
						this.show = true;
						if (this.current == 3) {
							this.show2 = true;
						} else if (this.current == 4) {
							this.show3 = true;
						} else if (this.current == 5) {
							this.show4 = true;
						} else if (this.current == 6) {
							this.show5 = true;
						} else if (this.current == 7) {
							this.show6 = true;
						} else if (this.current == 8) {
							this.show7 = true;
						} else if (this.current == 9) {
							this.show8 = true;
						} else if (this.current == 10) {
							this.show9 = true;
						} else {

						}
					}, 500)
				} else {

				}
				if (this.allValue[key] != undefined) {

				}
				if (this.allValue['question10'] != undefined) {
					this.btn = 3;
				} else {
					this.btn = 5;
				}

			},
			returnRisk() {
				this.current = 1;
				this.result = 10;//使自身隐藏，类型隐藏
			},
			returnMyAccount() {
				this.go().myAccount.home();
			},
			submitBtn() {
				if (this.allValue['question10'] != undefined) {
					// let uid=this.info.map.uid;
					this.result = 2;
					var A = [], D = [];
					var riskResult = this.allValue;
					for (var item in riskResult) {
						if (riskResult[item] == 'A') {
							A.push(riskResult[item]);
						} else if (riskResult[item] == 'D') {
							D.push(riskResult[item]);
						}
					}
					if (A.length > 7 || A.length == 7) {
						this.type = '保守型';
						this.content = '希望本金绝对安全，只能接受较小的市场波动';
						this.number = 1;
					} else if (D.length > 5 || D.length == 5) {
						this.type = '积极型';
						this.content = '希望投资增长并尽可能地获得最高回报，可以接受短期负面波动，愿意承担全部收益包括本金可能损失的风险。';
						this.number = 2;
					} else {
						this.type = '稳健型';
						this.content = '倾向于平衡的方式，偏好投资于兼具成长性及收益性的产品，能接受一定的负面波动。';
						this.number = 3;
					}
					var self = this;
					let uid = this.info.member.uid;
					self.ajax({
						dataType: "jsonp",
						type: "GET",
						url: RISKEVALUATION.riskEvaluation,
						callback: true,
						data: {uid: uid, isRisk: self.number},
					}).then(data => {
						if (data.success) {
							this.resultABC = true;
							this.result = 2;
							self.$store.dispatch('updateUserAccount',{update:true});
						}
					})
				} else {
					this.$pop({
						title: "登录",
						wrapper: "personalPop",
						close: true,
						content: "您的测评还没做完，请做完后提交！",
						footer: {
							ok: "确定",//确定按钮
							okCallback: function () {
								/*this.close();*/
								router.push('/other/riskEvaluation');
							}, //确定按钮事件
						}
					});
				}
			}
		},
		watch: {
			current() {
			}
		}
	}
</script>
