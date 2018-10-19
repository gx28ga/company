<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
	.left{ float: left; }
</style>
<script>
	import requirePop from '../../pop/requirePop.js';
	import {index,bigmanmon_convert,gold_gift,gold_rank} from '../../common/URL.js';
	import lefts from './left.vue';
	import rights from './right.vue';
	export default {
	  	components : {
	  		lefts,
	  		rights
        },
	    data(){
	    	return{
	    		islogin: false,
	    		tabs: [
	    			{
	    				type:'tab1',
	    				view:'lefts'
	    			},
	    			{
	    				type:'tab2',
	    				view:'rights'
	    			}
	    		],
	    		active: 0, 
				currentView: 'lefts',
	    	}
	  	},
	  	mounted(){
	  		T.setImgSize();
	  		this.islogin = T.isLogin;
	  	},
		methods : {
			toggle(i, v){ 
				this.active = i ;
				this.currentView = v ;
			},
			rule: function(){
				requirePop('rule');
			},
			bill: function(){
				if(this.islogin){
					T.callApp.investment();
				}else{ 
					T.login();
				}
			},
			login: function(){
				T.callApp.login();
			},
			eastBtn:function(){
				var self = this;
				if(!self.DSinfo.eastTodayVisit){
					router.replace(
	                    { 
	                        path: 'sign', 
	                        query: { uid: T.uid , wap : T.wap}
	                    }
	                )
				}
			},
			southBtn:function(){
				if(self.DSinfo.southChance>0){
					router.replace(
	                    { 
	                        path: 'game', 
	                        query: { uid: T.uid , wap : T.wap}
	                    }
	                )
				}
			},
			dhdsbtn: function(){
				if(this.DSinfo.bigMammonNum>0){
					requirePop('change');
				}
			}
		}
	}
</script>
<template>
<div class="body module-scroll">
	<div class="banner img-size" data-width='750' data-height='952'>
		<div class="rule img-size" data-width='130' data-height='100' @click='rule'></div>
		<div class="bill img-size" data-width='620' data-height='100' data-bottom='56' @click='bill'></div>
	</div>
	<div class="main img-size" data-width='710' data-paddingBottom='94' data-marginBottom='60' data-borderRadius='16'>
		<div class="nav img-size" data-height='142'>
			<ul>
				<li @click="toggle(0 ,tabs[0].view)" v-bind:class="{left:active==0}" class="left img-size" data-width='355' data-height='142'></li>
				<li @click="toggle(1 ,tabs[1].view)" v-bind:class="{right:active==1}" class="right img-size" data-width='355' data-height='142'></li>
			</ul>
		</div>
		<component :is="currentView"></component>
	</div>
</div>
</template>