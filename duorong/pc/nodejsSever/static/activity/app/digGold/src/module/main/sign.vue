<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
</style>
<script>
	import requirePop from '../../pop/requirePop.js';
	import {sign} from '../../common/URL.js';
	export default {
	    data(){
	    	return{
	    		prizeInfo : null,
	    	}
	  	},
	  	components : {
        },
	  	mounted(){
	  		T.setImgSize();
	  	},
		methods : {
			tobody : function(){
				var self = this;
				if(T.isLogin){
					T.ajax({
                        url : sign , 
                        data : { uid : T.uid },
                        callback : true,
                        success : function( _data ){
                            if(_data.success){
                            	self.prizeInfo = _data.map;
			                	requirePop('lingquguo',{
			                        props: {
			                            type : self.prizeInfo.prizeType,
			                            count : self.prizeInfo.prizeAmount
			                        }
			                    },'prize');
                            }
                        }
                    });
				}else{
					T.callApp.login();
				}
			},
			leave : function(){
				router.replace(
                    { 
                        path: 'main', 
                        query: { uid: T.uid , wap : T.wap}
                    }
                )
			}
		}
	}
</script>
<template>
<div class="diggoldbody module-scroll img-size" data-height='1334' data-width='750'>
	<div class="ask img-size" data-width='620' data-height='100' data-bottom='132' @click='tobody'></div>
	<div class="ask img-size"  data-width='112' data-height='50' data-bottom='62' @click='leave'></div>
</div>
</template>