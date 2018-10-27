/**
* 其他信息
* created by bo.peng 2018/4/2
* email:spion@qq.com
*/
<style scoped>
    .icon1 {
        background: url("../../../images/account/ico_duizhang.png");
        background-size: contain;
    }

    .icon2 {
        background: url("../../../images/account/ico_help.png");
        background-size: contain;
    }
    .borderWarp{
        border-radius:0px;
    }
</style>
<style>
    .pop{
        .borderWarp{
            border-radius:0px;
            padding-bottom: 0px;
        }
    }
</style>
<template>
    <section v-if="account" class="img-size" data-marginTop="20" data-marginBottom="20" data-paddingLeft="30">
        <ul>
            <li class="box img-size" data-height="90" data-paddingRight="30" @click='riskEvaluation'>
                <div class="icon">
                    <i class="img-size icon1" data-width="32" data-height="36"></i>
                </div>
                <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                    风险评测
                </div>
                <aside>
                    <div class="text img-size" data-fontSize="24">{{account.isRiskCn}}</div>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
            <li class="box img-size" data-height="90" data-paddingRight="30" @click="help">
                <div class="icon">
                    <i class="img-size icon2" data-width="32" data-height="36"></i>
                </div>
                <div class="title flex img-size" data-fontSize="28" data-paddingLeft="30">
                    帮助中心
                </div>
                <aside>
                    <!--<div class="text img-size" data-fontSize="24"></div>-->
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </aside>
            </li>
        </ul>
    </section>
</template>

<script>
	import arrow from "../../components/arrow";
	//import riskPop from "../../pop/myAccount/riskPop.vue";

	export default {
		components: {
			arrow,
//			riskPop
		},
		props: {
			user: Object,
			account: Object,
		},
        watch : {
            account( obj ){
                 // this.setPop();
            }
        },
		mounted() {
            this.setPop();
		},
		methods: {
			riskEvaluation() {//风险测评
				this.go().myAccount.riskEvaluation();
			},
            setPop(){
                let self = this;
                if (self.account && self.account.isRisk == 0) {
                    require.ensure([],(require)=> {
                        self.$requirePop(require('../../pop/myAccount/riskPop'), {
                                props : {} //弹窗内容相关属性
                            },
                            {
                                props: {//弹窗相关属性 同上面的 this.$Pop
                                    obj: {
                                        title: "",
                                        close:false ,//是否显示关闭按钮
                                        wrapper : "borderWarp",
                                        //superClass:"borderWarp"
                                    },
                                }
                            });
                    });
                }
            },
            help(){//帮助中心
              /*  this.go().all({
                    returnUrl:"/help/home"
                });*/
                this.go().myAccount.feedBack();
            }
		}
	}
</script>
