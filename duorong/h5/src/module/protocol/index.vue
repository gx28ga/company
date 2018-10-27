/**
* 相关说明页，结果页，成功页，错误页等；
* created by bo.peng 2018/3/30
* email:spion@qq.com
*/
<style scoped>

</style>
<template>
    <article>
        <div class="openAccount-result"></div>
    </article>
</template>

<script>
	import importSys from "./importSys";
	import {mapGetters} from "vuex";

	export default {
		computed: {
			...mapGetters({
				user: "getUserInfo"
			})
		},
		mounted() {
			this[this.$route.params.id]();
		},
		methods: {
			enroll() {//注册协议
				importSys({
					src: "./enroll",
					name: "enroll",
					data: {
						props: {}
					}
				});
			},
			invest() {//投资服务协议
				importSys({
					src: "./invest",
					name: "invest",
					data: {
						props: {}
					}
				});
			},
			loan() {//借款协议
				importSys({
					src: "./loan",
					name: "loan",
					data: {
						props: {}
					}
				});
			},
			terms() {//定向委托投资协议
				importSys({
					src: "./terms",
					name: "terms",
					data: {
						props: {}
					}
				});
			},
			transfer() {//权益转让及受让协议
				importSys({
					src: "./transfer",
					name: "transfer",
					data: {
						props: {}
					}
				});
			},
            income() {//应收账款收益权转让及回购协议
				importSys({
					src: "./income",
					name: "income",
					data: {
						props: {}
					}
				});
			},
			entrust() {//委托协议
				importSys({
					src: "./entrust",
					name: "entrust",
					data: {
						props: {}
					}
				});
			},
			assignment() {//债权转让协议
				importSys({
					src: "./assignment",
					name: "assignment",
					data: {
						props: {}
					}
				});
			},
			companyLoan() {//注册协议
				importSys({
					src: "./companyLoan",
					name: "companyLoan",
					data: {
						props: {}
					}
				});
			},
            openAccount(){//开户
			    importSys({
                    src:"./openAccount",
                    name: "openAccount",
                    data: {
                        props: {}
                    }
                })
            }
		}
	}
</script>
