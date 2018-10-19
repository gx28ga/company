<style scoped>
    @import '../css/vue-pop.css';
    /*@import '../css/main.css';*/
    .modal-body{
        .notStart{ 
            text-align:center; 
            background:#fff; color: #333;
        }
    }
    .save{ 
    	background: #fff;
		height: 100%; overflow-y:scroll;float: left;width: 100%;position: fixed;transform: translate(0, 100%);transition: transform 0.3s; bottom: 0;left:0;
    	li{ border-bottom: 1px solid #ccc;width: 100%; } 
    	img {float: left; }
    }
    .city{ 
    	background: #fff;text-align: left;overflow: scroll;height: 100%;
    }
    .brouce-in{ transform: translate(0,0); }
    .tran{ float: left;}
</style>
<script>
	import pop from './pop2.vue';
	export default {
		data(){
			return{
				bankList:[
					{"parentBankId":"中国工商银行","bankId":"0102","once":"50000","oneDay":"50000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/ICBC.png"},
					{"parentBankId":"中国农业银行","bankId":"0103","once":"50000","oneDay":"100000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/ABC.png"},
					{"parentBankId":"中国银行","bankId":"0104","once":"50000","oneDay":"100000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/BOC.png"},
					{"parentBankId":"中国建设银行","bankId":"0105","once":"50000","oneDay":"100000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/CCB.png"},
					{"parentBankId":"交通银行","bankId":"0301","once":"50000","oneDay":"100000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/COMM.png"},
					{"parentBankId":"中信银行","bankId":"0302","once":"10000","oneDay":"10000","month":"20000","url":"http://www.duorongcf.com/upload/bankPic/CNCB.png"},
					{"parentBankId":"中国光大银行","bankId":"0303","once":"50000","oneDay":"200000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/CEB.png"},
					{"parentBankId":"华夏银行","bankId":"0304","once":"50000","oneDay":"200000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/HXB.png"},
					{"parentBankId":"中国民生银行","bankId":"0305","once":"50000","oneDay":"200000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/CMBC.png"},
					{"parentBankId":"广东发展银行","bankId":"0306","once":"50000","oneDay":"200000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/CGB.png"},
					{"parentBankId":"平安银行股份有限公司","bankId":"0307","once":"50000","oneDay":"200000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/SZPAB.png"},
					{"parentBankId":"招商银行","bankId":"0308","once":"50000","oneDay":"50000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/CMB.png"},
					{"parentBankId":"兴业银行","bankId":"0309","once":"50000","oneDay":"50000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/CIB.png"},
					{"parentBankId":"上海浦东发展银行","bankId":"0310","once":"50000","oneDay":"200000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/SPDB.png"},
					{"parentBankId":"中国邮政储蓄银行股份有限公司","bankId":"0403","once":"50000","oneDay":"200000","month":"200000","url":"http://www.duorongcf.com/upload/bankPic/PSBC.png"}
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
	  		T.setImgSize();
	  	},
	  	filters: {
	  		money: function(num){
				if(num >= 100000000){
				    num = num / 100000000;
				    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')+'亿';
				}else if(num >= 10000){
				    num = num / 10000 ;
					return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')+'万元';
				}else{
					return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
				}
	  		}
	  	},
	  	methods:{
	  		changebank: function(event,item){
	  			var self = this;
	  			self.$refs.pop.closePop()
	            self.callback(item);
	  		},
	  	}
	}
</script>
<template>
    <pop ref='pop' :transition='transition' :closeCallback='closeCallback' >
    	<div slot="header" class='title-bg img-size' data-width='550' data-height='90'>
            <div class="title img-size" data-fontSize='36'>提示</div>
            <i class='close img-size' data-width='31' data-height='31' data-right='11' data-top='11'></i>
        </div>
        <div slot='body' class='save img-size' data-height='1000' v-bind:class='superClass' >
	    	<ul>
	    		<li class="img-size" v-for='item in bankList' @click='changebank($event,item)' data-height='90' data-paddingTop='10' data-paddingBottom='10'>
		    		<img :src="item.url" class="img-size" data-width='88' data-height='88' data-marginLeft='10'>
		    		<div class="tran img-size" data-paddingLeft='20'>
			    		<p class="img-size" data-fontSize='30'>{{item.parentBankId}}</p>
			    		<p class="img-size" data-fontSize='24'>单笔限额：{{item.once | money}}，单日额度：{{item.oneDay | money}}，单月额度：{{item.month | money}}</p>
		    		</div>
	    		</li>
	    	</ul>
        </div>
        <div slot='footer' class='submit img-size' data-width='550' data-borderBottomLeftRadius='8' data-borderBottomRightRadius='8'>
            <div class='btn img-size' data-lineHeight='74'>我知道了</div>
        </div>
		<div slot='body' class='' style="overflow:hidden;height:80%">
        </div>
	</pop>
</template>