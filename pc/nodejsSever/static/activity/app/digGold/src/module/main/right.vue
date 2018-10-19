<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
	.left{ float: left; }
	.title{ text-align: left; span{ display: block; float: left; } }
	.pm{ margin: 0 auto; text-align: center; span{ display: block; float: left; } }
</style>
<script>
	import requirePop from '../../pop/requirePop.js';
	import { gold_gift,gold_rank } from '../../common/URL.js';
	export default {
	    data(){
	    	return{
	    		islogin: false,
				jxqFlag :false,
				jdkFlag : false,
				goldTotal : 0,
				gift : null,
				myGift : null,
	        	myRank : 0,
	        	rankList : null,
	    	}
	  	},
	  	components : {
        },
	  	mounted(){
	  		T.setImgSize();
	  		this.islogin = T.isLogin;

  			var self = this; 
	  		if(this.islogin){
	  			T.ajax({
                    url : gold_gift , 
                    data : { uid : T.uid },
                    callback : true,
                    success : function( _data ){
                        if(_data.success){
                        	self.goldTotal = _data.map.goldTotal;
                        	self.gift = _data.map.gift;
                        	if(self.gift > 0){
	                        	if(self.gift == 1000){$("#six").addClass('bg');}
	                        	if(self.gift == 600){$("#five").addClass('bg');}
	                        	if(self.gift == 300){$("#four").addClass('bg');}
	                        	if(self.gift == 100){$("#three").addClass('bg');}
	                        	if(self.gift == 50){$("#two").addClass('bg');}
	                        	if(self.gift == 20){$("#one").addClass('bg');}
                        	}
                        }
                    }
                });
	  		}
  			T.ajax({
                url : gold_rank ,
                data : { uid : T.uid },
                callback : true,
                success : function( _data ){
                    if(_data.success){
                    	self.myGift = _data.map.myGift;
                    	self.myRank = _data.map.myRank;
                    	self.rankList = _data.map.rankList;
				  		self.$nextTick(function(){
						    T.setImgSize();
						})
                    	self.jxqFlag = _data.map.jxqFlag;
						self.jdkFlag = _data.map.jdkFlag;
                    }
                }
            });
	  	},
		methods : {
			login: function(){
				T.callApp.login();
			},
		}
	}
</script>
<template>
	<div class="main2">
		<div class="right">
			<div class="img-size" data-paddingLeft='45' data-paddingRight='45'>
				<p class="dqdh img-size" data-fontSize='36' data-paddingTop='35' data-lineHeight='70'>集齐四方财神</p>
				<div class="title img-size" data-fontSize='30' data-height='74' data-lineHeight='74'><span class='img-size' data-width='180' data-paddingLeft='20'>奖项</span><span class='img-size' data-width='200'>获取条件</span></div>

				<div class="title img-size" v-bind:class="{bg2:jxqFlag==true&&islogin}" data-fontSize='30' data-lineHeight='74' data-height='74'>
					<span class='jpbtn img-size' data-width='146' data-marginRight='34' data-height='57' data-lineHeight='57' data-fontSize='22' data-marginTop='8' data-marginLeft='20'>2%加息券</span>
					<span class='img-size' data-width='240'>{{jxqFlag==true&&islogin?'已达成':'集齐任意两方财神'}}</span>
					<span v-show='islogin' class='img-size' data-width='160' style="text-align:right;">{{jxqFlag==true?'':'尚未达成'}}</span>
					<span v-show='!islogin' class='img-size' data-width='160' style="text-align:right;"><a class="cai" @click='login'>登录</a>后查看</span>
				</div>

				<div class="title img-size" v-bind:class="{bg2:jdkFlag==true&&islogin}" data-fontSize='30' data-lineHeight='74' data-height='74' >
					<span class='jpbtn img-size' data-width='146' data-marginRight='34' data-height='57' data-lineHeight='57' data-fontSize='22' data-marginTop='8' data-marginLeft='20'>600元京东卡</span>
					<span class='img-size' data-width='240'>{{jdkFlag==true&&islogin?'已达成':'集齐四方财神'}}</span>
					<span v-show='islogin' class='img-size' data-width='160' style="text-align:right;">{{jdkFlag==true?'':'尚未达成'}}</span>
					<span v-show='!islogin' class='img-size' data-width='160' style="text-align:right;"><a class="cai" @click='login'>登录</a>后查看</span>
				</div>
			</div>
			<div class="wkbg img-size" data-width='710' data-height='226' data-marginTop='16'></div>
			<div class="all img-size" data-width='620' data-fontSize='30' data-paddingBottom="31">
				<p class="dqsd">我的当前挖矿所得：<i class="jyb img-size" data-width='65' data-height='47'></i><span v-show='islogin'>　{{goldTotal}}</span><span style="color:#7f3900;" v-show='!islogin'><a class="cai" @click='login'>　请登录</a>后查看</span></p>
				<div class="page img-size" data-height='721' data-marginTop='23'>
					<p class="dqdh img-size" data-fontSize='30' data-lineHeight='84'>已达到获奖条件</p>
					<table class="two img-size" data-fontSize='24'>
						<tr class="bg img-size" data-fontSize='30' data-paddingLeft='13' data-width='497' data-height='74' data-lineHeight='74'>
							<td class="img-size" data-paddingLeft='10'>奖项</td>
							<td class="img-size" data-paddingLeft='20'>获取条件</td>
						</tr>
						<tr id='one' class="img-size" data-paddingLeft='13' data-width='497' data-height='74'>
							<td><i class="img-size" data-width='146' data-height='57' data-lineHeight='57' data-fontSize='22' data-marginTop='8'>20元JD卡</i></td>
							<td><span class="jyb img-size" data-width='65' data-height='47' data-marginTop='13'></span><span>1000</span></td>
						</tr>
						<tr id='two' class="img-size" data-paddingLeft='13' data-width='497' data-height='74'>
							<td><i class="img-size" data-width='146' data-height='57' data-lineHeight='57' data-fontSize='22' data-marginTop='8'>50元JD卡</i></td>
							<td><i class="jyb img-size" data-width='65' data-height='47' data-marginTop='13'></i>2000</td>
						</tr>
						<tr id='three' class="img-size" data-paddingLeft='13' data-width='497' data-height='74'>
							<td><i class="img-size" data-width='146' data-height='57' data-lineHeight='57' data-fontSize='22' data-marginTop='8'>100元JD卡</i></td>
							<td><i class="jyb img-size" data-width='65' data-height='47' data-marginTop='13'></i>3880</td>
						</tr>
						<tr id='four' class="img-size" data-paddingLeft='13' data-width='497' data-height='74'>
							<td><i class="img-size" data-width='146' data-height='57' data-lineHeight='57' data-fontSize='22' data-marginTop='8'>300元JD卡</i></td>
							<td><i class="jyb img-size" data-width='65' data-height='47' data-marginTop='13'></i>12800</td>
						</tr>
						<tr id='five' class="img-size" data-paddingLeft='13' data-width='497' data-height='74'>
							<td><i class="img-size" data-width='146' data-height='57' data-lineHeight='57' data-fontSize='22' data-marginTop='8'>600元JD卡</i></td>
							<td><i class="jyb img-size" data-width='65' data-height='47' data-marginTop='13'></i>26800</td>
						</tr>
						<tr id='six' class="img-size" data-paddingLeft='13' data-width='497' data-height='74'>
							<td><i class="img-size" data-width='146' data-height='57' data-lineHeight='57' data-fontSize='22' data-marginTop='8'>1000元JD卡</i></td>
							<td><i class="jyb img-size" data-width='65' data-height='47' data-marginTop='13'></i>48800</td>
						</tr>
					</table>
					<p class="dqdh img-size" data-fontSize='22' data-paddingTop='66'>* 以获取最高奖项为准</p>
				</div>
			</div>
			<div class="img-size" data-paddingLeft='45' data-paddingRight='45' data-fontSize='30' data-marginTop='20'>
				<p class="dqsd">我的当前排名：<span v-show='islogin'>{{myRank}}</span><span style="color:#7f3900;" v-show='!islogin' ><a class="cai" @click='login'>请登录</a>后查看</span></p>
				<p class="dqsd">预计可获得：<span v-show='islogin'>{{myGift}}</span><span style="color:#7f3900;" v-show='!islogin'><a class="cai" @click='login'>请登录</a>后查看</span></p>
				<div class="page2 img-size" data-height='880' data-marginTop='23'>
					<div class="img-size" data-height='40'></div>
					<div class="pm img-size" data-height='764'>
						<div class="img-size" data-fontSize='24' data-height='74' data-lineHeight='74'><span class='img-size' data-paddingLeft='46'>排名</span><span class='img-size' data-width='220'>用户手机号</span><span class='img-size' >金子数</span><span class='img-size' data-width='206' >可获奖项</span></div>
						<div v-for='item in rankList' >
							<div class="img-size" data-fontSize='24' data-lineHeight='68' data-height='68'>
								<span class='img-size' data-width='40' data-paddingLeft='48'>{{item.rowNo}}</span>
								<span class='img-size' data-width='180' data-marginLeft="20">{{item.mobilePhone}}</span>
								<span class='img-size' data-width='126' >{{item.description}}</span>
								<span class='jpbtn2 img-size' data-width='162' data-height='57' data-lineHeight='54'>{{item.gift}}</span>
							</div>
						</div>
					</div>
					<p class="dqdh2 img-size" data-fontSize='22' data-paddingTop='4' data-paddingLeft='98'>* 数据实时更新，仅供参考，实际获奖用户<br>　以活动结束后的最终数据为准</p>
				</div>
			</div>
		</div>
	</div>
</template>