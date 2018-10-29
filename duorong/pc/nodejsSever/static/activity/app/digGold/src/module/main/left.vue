<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
	.left{ float: left; }
</style>
<script>
	import requirePop from '../../pop/requirePop.js';
	import {index,gold_gift,gold_rank} from '../../common/URL.js';
	export default {
	    data(){
	    	return{
	    		islogin: false,
	    		DSinfo:{
	    			eastTodayVisit : false,
	    			eastAlreadyVisit : 0,
	    			eastSurplusVisit : 0,
	    			eastFlag : false,
	    			southFlag :false,
	    			southChance : 0,
	    			southAlreadyChance :0,
	    			southSurplusChance: 0,
	    			westFlag : false,
	    			westAlreadyMoney :0,
	    			westSurplusChance : 0,
	    			northFlag : false,
					northAlreadyMoney : 0,
					northSurplusChance : 0,
					bigMammonNum :0,
					bigMammonInfo : null,
	    		},
				arr : null,
				bigMammonInfo:{
					east : false,
					south : false,
					west: false,
					north:false,
				}
	    	}
	  	},
	  	components : {
        },
	  	mounted(){
	  		T.setImgSize();
	  		this.islogin = T.isLogin;

	  		if(this.islogin){
	  			var self = this;
	  			T.ajax({
                    url : index , 
                    data : { uid : T.uid },
                    callback : true,
                    success : function( _data ){
                        if(_data.success){
                        	self.DSinfo = _data.map.data;
                        	/*東*/
							self.DSinfo.eastTodayVisit = _data.map.data.eastTodayVisit;
                        	if(self.DSinfo.eastTodayVisit){
								$('#cbbtn').removeClass('cbbtn').addClass('btn');
							}
							self.DSinfo.eastAlreadyVisit = _data.map.data.eastAlreadyVisit;
							self.DSinfo.eastSurplusVisit = _data.map.data.eastSurplusVisit;
							/*南*/
                        	if(self.DSinfo.southChance==0){
								$('.btnyes').addClass('nochange');
							}else{$('.btnyes').removeClass('nochange');}
							self.DSinfo.southChance = _data.map.data.southChance;
							self.DSinfo.southAlreadyChance = _data.map.data.southAlreadyChance;
							self.DSinfo.southSurplusChance = _data.map.data.southSurplusChance;
							/*西*/
							self.DSinfo.westAlreadyMoney = _data.map.data.westAlreadyMoney;
							self.DSinfo.westSurplusChance = _data.map.data.westSurplusChance;
							if(self.DSinfo.westAlreadyMoney==0){
								$('.barn').eq(0).css({"width":"0"});
							}else{
								var num = ((self.DSinfo.westAlreadyMoney/500000)*100);
								if(num>100){
									$('.barn').eq(0).css({"width":"100%"});
								}else{
									$('.barn').eq(0).css({"width":""+num+"%"});
								}
							}
							/*北*/
							self.DSinfo.northAlreadyMoney = _data.map.data.northAlreadyMoney;
							self.DSinfo.northSurplusChance = _data.map.data.northSurplusChance;
							if(self.DSinfo.northAlreadyMoney==0){
								$('.barn').eq(1).css({"width":"0"});
							}else{
								var num2 = ((self.DSinfo.northAlreadyMoney/1000000)*100);
								if(num2>100){
									$('.barn').eq(1).css({"width":"100%"});
								}else{
									$('.barn').eq(1).css({"width":""+num2+"%"});
								}
							}
							self.DSinfo.bigMammonNum = _data.map.data.bigMammonNum;
							self.DSinfo.bigMammonInfo = _data.map.data.bigMammonInfo;
							if(self.DSinfo.bigMammonInfo!=null){
								self.arr = self.DSinfo.bigMammonInfo.split(",");
								$.each(self.arr,function( i , val){
									if (val == "south") {self.bigMammonInfo.south = true;}
									if (val == "east") {self.bigMammonInfo.east = true;}
									if (val == "west") {self.bigMammonInfo.west = true;}
									if (val == "north") {self.bigMammonInfo.north = true;}
								});
							}
                        }else{
                        	require();
                        }
                    }
                });
	  		}
	  	},
		methods : {
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
				var self = this;
				if(self.DSinfo.southChance>0){
					window.onpopstate = null;
					router.push(
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
				}else{
				}
			},
			tzbtn:function(){
				T.callApp.investment();
			}
		}
	}
</script>
<template>
	<div class="main2">
		<div class="first">
			<div class="notice img-size" data-lineHeight='52' data-paddingLeft='20' data-paddingRight='20' data-fontSize='24'>
				<div class="tiao img-size" data-height='48'><i class="img-size" data-height='43' data-width='43' data-marginRight='20'></i><span class="img-size" data-fontSize='30' data-left='62'>集齐四方财神，即可获得600元京东卡奖励</span></div>
				<div class="tiao img-size" data-height='48'><i class="img-size" data-height='43' data-width='43' data-marginRight='20'></i><span class="img-size" data-fontSize='30' data-left='62'>挖金子，挖得越多，奖品越多</span></div>
				<div class="img-size" data-paddingLeft='63' data-lineHeight='30' data-fontSize='24'>单笔购买≥20天产品，每满5000元，获得1次机会；单笔购买≥80天产品，每满30000元，获得10次机会</div>
			</div>
			<!-- 东 -->
			<div class="cf img-size" data-width='671' data-height='270' data-fontSize='24' data-lineHeight='48' data-marginTop='25'>
				<div style="display:block;float:left;" class="img-size" data-paddingLeft='26'>
					<p class="name img-size" data-paddingLeft='10' data-paddingTop='14'>东方财神</p>
					<p class="not">心诚则灵！免费领福利，每日限1次</p>
					<div v-show='islogin' id="cbbtn" class="cbbtn img-size" data-width='258' data-height='60' data-marginLeft='85' data-marginTop='10'  data-marginBottom='10' @click='eastBtn'></div>
					<div v-show='!islogin' class="todl img-size" data-width='258' data-height='60' data-marginLeft='85' data-marginTop='10' data-marginBottom='10' @click='login'></div>
					<p v-show='islogin' class="img-size" data-lineHeight='26'>{{bigMammonInfo.east?'已通过大财神兑换获得':'已参拜'+DSinfo.eastAlreadyVisit+'次，再有'+DSinfo.eastSurplusVisit+'次即可迎到【东方财神】'}}</p>

					<p v-show='!islogin' class="img-size" data-lineHeight='26'>参拜10次即可迎到【东方财神】</p>
				</div>
				<div class="img-size" v-bind:class="{ noen: islogin||DSinfo.eastFlag, yesey: (islogin&&DSinfo.eastFlag)||(islogin&&bigMammonInfo.east), yesel: !islogin, }"data-width='128' data-height='184' data-marginRight='35' data-marginTop='52'></div>
			</div>
			<!-- 南 -->
			<div class="cf img-size" data-width='671' data-height='270' data-fontSize='24' data-lineHeight='48' data-marginTop='25'>
				<div style="display:block;float:left;" class="img-size" data-paddingLeft='26' data-maxWidth='480'>
					<p class="name img-size" data-paddingLeft='10' data-paddingTop='14'>南方财神</p>
					<p class="not">能挖到多少金子，就看你的啦</p>
					<div v-show='islogin' class="btnyes img-size" data-width='258' data-height='60' data-marginLeft='85' data-marginTop='10'  data-marginBottom='10' @click='southBtn'></div>
					<div v-show='!islogin' class="todl img-size" data-width='258' data-height='60' data-marginLeft='85' data-marginTop='10' data-marginBottom='10' @click='login'></div>

					<p v-show="islogin&&DSinfo.southAlreadyChance<20" class="img-size" data-lineHeight='26'>你有{{DSinfo.southChance}}次挖金矿机会，已挖{{DSinfo.southAlreadyChance}}次，再有{{DSinfo.southSurplusChance}}次即可获得【南方财神】</p>

					<p v-show="islogin&&DSinfo.southAlreadyChance>=20" class="img-size" data-lineHeight='26'>你有{{DSinfo.southChance}}次挖金矿机会，已挖{{DSinfo.southAlreadyChance}}次，您已获得【南方财神】</p>

					<p v-show="!islogin" class="img-size" data-lineHeight='26'>挖金矿20次即可迎到【南方财神】</p>

				</div>
				<div class="img-size" v-bind:class="{ nosn: islogin||DSinfo.southFlag, yessy: islogin&&DSinfo.southFlag, yessl: !islogin }" data-width='128' data-height='184' data-marginRight='35' data-marginTop='52'></div>
			</div>
			<!-- 西 -->
			<div class="cf img-size" data-width='671' data-height='270' data-fontSize='24' data-lineHeight='48' data-marginTop='25'>
				<div style="display:block;float:left;" class="img-size" data-paddingLeft='26' data-maxWidth='480'>
					<p class="name img-size" data-paddingLeft='10' data-paddingTop='14'>西方财神</p>
					<p class="not">累计≥500000元(≥20天产品)，自动获得</p>
					<div class="bar img-size" data-width='418' data-height='14' data-paddingTop='2' data-paddingLeft='2' data-marginLeft='10' data-marginTop='28' data-marginBottom='28' data-borderRadius='20'>
						<div v-show='islogin' class="barn img-size" data-borderRadius='20' data-height='12'></div>
					</div>
					<p v-show='islogin&&!bigMammonInfo.west' class="img-size" data-lineHeight='26'>{{DSinfo.westAlreadyMoney < 500000?'你当前累计购买达'+DSinfo.westAlreadyMoney+'元，再有'+DSinfo.westSurplusChance+'元即可获得【西方财神】':'您已获得西方财神'}}</p>
					<p v-show='islogin&&bigMammonInfo.west' class="img-size" data-lineHeight='26'>已通过大财神兑换获得</p>
					<p v-show='!islogin' class="img-size" data-lineHeight='26'><span class="zi" @click='login'>登录</span>查看财神获取进度</p>
				</div> 
				<div class="img-size" v-bind:class="{ nown: islogin||DSinfo.westFlag, yeswy: islogin&&DSinfo.westFlag, yeswl: !islogin }" data-width='128' data-height='184' data-marginRight='35' data-marginTop='52'></div>
			</div>
			<!-- 北 -->
			<div class="cf img-size" data-width='671' data-height='270' data-fontSize='24' data-lineHeight='48' data-marginTop='25'>
				<div style="display:block;float:left;" class="img-size" data-paddingLeft='26' data-maxWidth='480'>
					<p class="name img-size" data-paddingLeft='10' data-paddingTop='14'>北方财神</p>
					<p class="not">累计≥1000000元(≥20天产品)，自动获得</p>
					<div class="bar img-size" data-width='418' data-height='14' data-paddingTop='2' data-paddingLeft='2' data-marginLeft='10' data-marginTop='28' data-marginBottom='28' data-borderRadius='20'>
						<div v-show='islogin' class="barn img-size" data-borderRadius='20' data-height='12'></div>
					</div>
					<p v-show='islogin&&!bigMammonInfo.north' class="img-size" data-lineHeight='26'>{{DSinfo.northAlreadyMoney < 1000000?'你当前累计购买达'+DSinfo.northAlreadyMoney+'元，再有'+DSinfo.northSurplusChance+'元即可获得【北方财神】':'您已获得北方财神'}}</p>
					<p v-show='islogin&&bigMammonInfo.north' class="img-size" data-lineHeight='26'>已通过大财神兑换获得</p>
					<p v-show='!islogin' class="img-size" data-lineHeight='26'><span class="zi" @click='login'>登录</span>查看财神获取进度</p>
				</div>
				<div class="img-size" v-bind:class="{ nonn: islogin||DSinfo.northFlag, yesny: islogin&&DSinfo.northFlag, yesnl: !islogin }" data-width='128' data-height='184' data-marginRight='35' data-marginTop='52'></div>
			</div>
		
			<div class="notice img-size" data-lineHeight='36' data-paddingLeft='20' data-paddingRight='20' data-fontSize='24' data-height='127' data-paddingTop='36'>
				<div class="tiao"><i class="img-size" data-height='43' data-width='43' data-marginRight='20'></i><span class="img-size" data-fontSize='30' data-left='62'>单笔购买≥300天产品，每满100000元，可获得1次大财神福佑，可兑换四方财神中的任意一位</span></div> 
			</div>
		
			<div v-show='islogin && (!DSinfo.northFlag || !DSinfo.westFlag || !DSinfo.southFlag || !DSinfo.eastFlag) && DSinfo.bigMammonNum>0' class="dhbtn img-size" data-width='268' data-height='90' data-marginBottom='50' @click='dhdsbtn'></div>

			<div v-show='islogin && DSinfo.bigMammonNum<=0' class="tzbtn img-size" data-width='268' data-height='90' data-marginBottom='50' @click='tzbtn'></div>

			<div v-show='!islogin' class="dlbtn img-size" data-width='268' data-height='90' data-marginBottom='50' @click='login'></div>

			<p class="dqdh">当前可兑换次数：<span v-show='islogin'>{{DSinfo.bigMammonNum}}次</span><a v-show='!islogin' class="cai" @click='login'>登录</a></p>
			<div v-show='islogin && arr' class="ydh img-size" data-width='278' data-height='64'data-marginTop='16' data-marginBottom='24'></div>
			<!-- 通过兑换所得的财神 -->
			<ul v-show='islogin && arr' class="img-size" data-height='184' style="display: table; margin:0 auto;">
				<li v-show='bigMammonInfo.south==true' class="yessy left img-size" data-width='128' data-height='184' data-marginLeft='3' data-marginRight='3'></li>
				<li v-show='bigMammonInfo.north==true' class="yesny left img-size" data-width='128' data-height='184' data-marginLeft='3' data-marginRight='3'></li>
				<li v-show='bigMammonInfo.west==true' class="yeswy left img-size" data-width='128' data-height='184' data-marginLeft='3' data-marginRight='3'></li>
				<li v-show='bigMammonInfo.east==true' class="yesey left img-size" data-width='128' data-height='184' data-marginLeft='3' data-marginRight='3'></li>
			</ul>
		</div>
	</div>
</template>