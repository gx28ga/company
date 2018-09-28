<template>
    <article id="app">
        <component :is="tabElement"></component>
    </article>
</template>
<script lang="ts">
	import Container from './views/contrainer.vue'
	import Login from './views/login/index.vue'
	import {Component, Watch} from 'vue-property-decorator';
	import {Getter} from "vuex-class";
	import Vue from "vue";
	import {Tools} from "./utils/Tools";
	@Component({
        components:{
	        Container,
	        Login
        }
    })
	export default class app extends Vue{
		// @ts-ignore
		@Getter("currentUserInfo") userInfo;
		get tabElement(){
			return this.userInfo && Tools.isLong(this.userInfo.userId)?"Container":"Login";
        }
        @Watch("tabElement")
        onUserChanged(val:string){
	        // @ts-ignore
	        val === "Container" && this.$tips({
                time:500,//3秒
                content : "登录成功!"
            })
        }
	}
</script>
