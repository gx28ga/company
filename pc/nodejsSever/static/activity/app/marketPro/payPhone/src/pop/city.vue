<style scoped>
    @import '../css/vue-pop.css';
    /*@import '../css/main.css';*/
    .modal-body{
        .notStart{ 
            text-align:center; 
            background:#fff; color: #333;
        }

    }
    .bodybox{background: #fff;width: 100%;float: left;position: fixed;transform: translate(0, 100%);transition: transform 0.3s; bottom: 0;left:0;right:0;margin:auto;scrollbar-highlight-color:#fff;}
    .save{ 
    	text-align: center;
		height: 100%;float: left; overflow-y:scroll;
    	li{ border-bottom: 1px solid #ccc; border-right: 1px solid #ccc; } 
    }
    .city{ 
    	background: #fff;text-align: left;overflow: scroll;height: 100%;float: left;
    }
    .brouce-in{ transform: translate(0,0); }
    .tran{ float: left;}
</style>
<script>
	import pop from './pop2.vue';
	import {mapActions} from 'vuex';
	export default {
		data(){
			return{
				area: null,
				investList: [
					{ "city":"上海"}
				],
			}
		},
		props : {
			superClass : String,
            transition : String,
            callback :Function,
            closeCallback : Function,
        },
	    components:{
	    	pop
		},
		mounted(){
	  		var self = this;
	  		T.setImgSize();
	  		$.getJSON('/data/citys.json', function(data){
			  self.area = data;
			})
	  	},
	  	methods:{
	  		changearea: function(event,item){
	  			var self = this;
	  			self.investList = item.citys;
	  			self.province = item.province;
	  		},
	  		changeCity: function(event,item){
	  			var self = this;
	  			var citys = {};
	  			citys.province = self.province;
	  			citys.cityName = item.city;
	  			citys.cityCode = item.cityCode;
	  			self.$refs.pop.closePop();
	  			self.callback(citys);
	  		}
	  	}
	}
</script>
<template>
    <pop ref='pop' :transition='transition' :closeCallback='closeCallback'>
    	<div slot="header" class='title-bg img-size' data-width='550' data-height='90'>
            <div class="title img-size" data-fontSize='36'>提示</div>
            <i class='close img-size' data-width='31' data-height='31' data-right='11' data-top='11'></i>
        </div>
        <div slot='body' class='bodybox img-size' v-bind:class='superClass' data-height='1000' >
	    	<div class="save img-size" data-width='300' data-marginTop='20'>
		    	<ul class="img-size" data-lineHeight='70' >
		    		<li class="img-size" v-for='item in area' @click='changearea($event,item)'>{{item.province}}</li>
		    	</ul>
		    </div>
		    <div class="city img-size" data-marginTop='20' data-paddingleft='40' data-width='400'>
		    	<ul class="img-size" data-lineHeight='72'>
		    		<li class="img-size" v-for='city in investList' @click="changeCity($event,city)">{{city.city}}</li>
		    	</ul>
		    </div>
        </div>
        <div slot='footer' class='submit img-size' data-width='550' data-borderBottomLeftRadius='8' data-borderBottomRightRadius='8'>
            <div class='btn img-size' data-lineHeight='74'>我知道了</div>
        </div>
		<div slot='body' style="overflow:hidden;height:80%">
        </div>
	</pop>
</template>