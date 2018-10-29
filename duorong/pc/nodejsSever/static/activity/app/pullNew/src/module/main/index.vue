<style scoped>
	@import '../../css/global.css';
	@import '../../css/index.css';
</style>
<script>
	import requirePop from '../../pop/requirePop.js';
	import floatdd from './../html/float.vue';
	import {investRank,regAndInvestCount} from '../../common/URL.js';
	export default {
	    data(){
	    	return{
	    		peonum: 0,
	    		strs: '',
	    		regUser : null
	    	}
	  	},
	  	components : {
            floatdd
        },
	  	mounted(){
	  		T.setImgSize();
	  		var self = this;
	  		function init(){
		  		T.ajax({ 
	                url : investRank , 
	                data : {},
	                callback:true,
	                success : function( _data ){
	                    self.regUser = _data.map.listDrMessage;
	                }
	            });
		  		T.ajax({ 
	                url : regAndInvestCount , 
	                data : {},
	                callback:true,
	                success : function( _data ){
	                	if(_data.success){
		                    self.peonum = _data.map.regCount;
		                    self.strs = self.peonum.split('');
	                	}
	                }
	            });
	  		}
	  		init();
	  	},
	  	filters: {
			data:function (input) {
			    var d = new Date(input);
			    var year = d.getFullYear();
			    var month = d.getMonth() + 1;
			    var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
			    return year+ '-' + month + '-' + day;
			}
		},
		methods : {
			ruletan : function(){
				requirePop('rule')
			}
		}
	}
</script>
<template>
<div class="pullnewbody module-scroll">
    <div id="home">
	    <!-- banner -->
		<div class="bannbox img-size" id="bannbox" data-height="660">
			<div class="bga"></div>
			<div class="bgb"></div>
			<div class="bgc"></div>
		</div>
		<!-- banner  end-->
	    <!-- 第一重 -->
		<div class="hl hl1 img-size" data-paddingTop="32" data-paddingBottom="32">
			<div class="title img-size" data-width="475" data-height="61">
				<p class="prti"><span class="titlebga img-size" data-width="246" data-height="30" data-marginTop="10"></span></p>
			</div>
			<div class="title2 img-size" data-width="412" data-height="40" data-marginTop="20"></div>
			<div class="bag img-size" data-height="154" data-marginTop="30" data-marginBottom="18"></div>
		</div>
		<!-- 第二重 -->
		<div class="hl hl2 img-size" data-paddingTop="32" data-paddingBottom="32">
			<div class="title img-size" data-width="475" data-height="61">
				<p class="prti"><span class="titlebgb img-size" data-width="246" data-height="30" data-marginTop="10"></span></p>
			</div>
			<div class="title1 img-size" data-width="330" data-height="89" data-marginTop="20"></div>
			<div class="box">
				<div class="register img-size" data-width="570" data-marginTop="30" data-borderTopLeftRadius='30' data-borderTopRightRadius='30' data-fontSize='30'>
			        <p class="name img-size" data-fontSize='32' data-lineHeight='90'>新手体验标</p>
			        <div class="bodd img-size" data-width='526' ></div>
			        <div class="bodc img-size" data-width='526' data-marginTop='40' data-marginLeft='22'>
				        <!--<div class="kuai img-size" data-paddingRight='16' ><span class="img-size" data-fontSize='60'>12.0%</span><br>预期年化</div>-->
				        <!--<div class="kuai img-size" data-paddingLeft='16' data-paddingRight='16' ><span class="img-size" data-fontSize='60'>0</span><span class="img-size" data-fontSize='36'>元</span><br>起投金额</div>-->
				        <!--<div class="kuain img-size" data-paddingLeft='16' data-paddingTop='34'><span class="img-size" data-fontSize='36'>立即到账</span><br>投资期限</div>-->
						<div class="kuai img-size" data-paddingRight='16' data-fontSize="24"><span class="img-size" data-fontSize='60'>12.0%</span><br>历史年化收益率</div>
						<div class="kuai img-size" data-paddingLeft='16' data-paddingRight='16' data-fontSize="24"><span class="img-size" data-fontSize='60'>0</span><span class="img-size" data-fontSize='36'>元</span><br>起投金额</div>
						<div class="kuain img-size" data-paddingLeft='16' data-paddingTop='34' data-fontSize="24"><span class="img-size" data-fontSize='36'>立即到账</span><br>投资期限</div>
			        </div>
			    </div>
			    <div class="bottbg img-size" data-width="594" data-height="100"></div>
			</div>
		</div>
		<!-- 第三重 -->
		<div class="hl hl3 img-size" data-paddingTop="32" data-paddingBottom="32">
			<div class="title img-size" data-width="475" data-height="61">
				<p class="prti"><span class="titlebgc img-size" data-width="246" data-height="30" data-marginTop="10"></span></p>
			</div>
			<div class="box img-size" data-marginTop='50'>
				<div class="register img-size" data-width="570" data-marginTop="30" data-paddingBottom="25" data-borderTopLeftRadius='30' data-borderTopRightRadius='30' data-fontSize='30'>
			        <p class="name img-size" data-fontSize='32' data-lineHeight='90'>新手专享</p>
			        <div class="newicon img-size" data-top='28' data-right='100' data-fontSize='18' data-paddingLeft='10' data-paddingRight='10' data-borderRadius='20'>仅限新手</div>
			        <p class="red img-size" data-fontSize='80' data-lineHeight='82'>12<span class="img-size" data-fontSize='60'>.0%</span></p>
			        <!--<p class="img-size" data-fontSize='30'>预期年化</p>-->
					<p class="img-size" data-fontSize='30'>历史年化收益率</p>
			        <div class="info img-size" data-width='533' data-fontSize='30' data-paddingTop='30' data-marginTop='32'><p>投资期限：<span style="color:#ac1c1c; letter-spacing: 0px;">31</span>天</p></div>
			    </div>
			    <div class="bottbgg img-size" data-width="594" data-height="130" data-fontSize='30' data-marginTop='-20'>
			        <p class="img-size" data-paddingTop='18'>投资金额：<span style="color:#ac1c1c; letter-spacing: 0px;">100</span>元起</p>
			    </div>
			</div>
		</div>
		<!-- 已领取列表 -->
		<div class="hl list img-size" data-height="500">
			<div class="btn rulebtn img-size" data-width="200" data-lineHeight="60" data-right="75" data-top="30" data-borderRadius='30' data-fontSize='28' @click="ruletan">活动规则>></div>
			<div class="write img-size" data-width="576" data-top="120" data-paddingTop="70" data-paddingLeft="20" data-paddingBottom="20">
				<div id="registerlist" class="wrap img-size" data-width="560" data-height="207" style="overflow: hidden;">
					<ul id="list" class="img-size" data-width="560" data-fontSize='20' data-lineHeight='40'>
						<li v-for='item in regUser'>
							<span style="width:34%;display: inline-block;">{{item.mobilePhone}}</span>
							<span style="width:40%;display: inline-block;">{{item.registTime | data}}</span>
							<span style="width:19%;display: inline-block;">已领取</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="yetitle img-size" data-width="640" data-height="56" data-lineHeight="64" data-top="120" data-fontSize='20'><ul><li>手机号</li><li>领取时间</li><li>新手三重礼包</li></ul></div>
			<div class="all img-size" data-bottom="32" data-paddingLeft="80" data-fontSize='28' data-lineHeight='38'>
				已有
				<span class="textbg img-size" data-width="27" data-height="35" v-show="strs.length>=1">{{strs[0]}}</span>
				<span class="textbg img-size" data-width="27" data-height="35" v-show="strs.length>=2">{{strs[1]}}</span>
				<span class="textbg img-size" data-width="27" data-height="35" v-show="strs.length>=3">{{strs[2]}}</span>
				<span class="textbg img-size" data-width="27" data-height="35" v-show="strs.length>=4">{{strs[3]}}</span>
				<span class="textbg img-size" data-width="27" data-height="35" v-show="strs.length>=5">{{strs[4]}}</span>
				<span class="textbg img-size" data-width="27" data-height="35" v-show="strs.length>=6">{{strs[5]}}</span>
				<span class="textbg img-size" data-width="27" data-height="35" v-show="strs.length>=7">{{strs[6]}}</span>
				<span class="textbg img-size" data-width="27" data-height="35" v-show="strs.length>=8">{{strs[7]}}</span>
				位用户领取了新手礼包
			</div>
		</div>
		<!-- 提示语 -->
		<!--<div class="notice img-size" data-fontSize='20' data-lineHeight="42" data-paddingTop="10" data-paddingBottom="170"><p>市场有风险 投资需谨慎</p><p>平台建议的预期年化收益率仅供参考，不代表未来实际收益</p><p style="display: block;background: #eee;">icp备案：沪ICP备15011207号</p><p style="display: block;background: #eee;">公司名称：上海银砖金融信息服务有限公司</p></div>-->
		<div class="notice img-size" data-fontSize='20' data-lineHeight="42" data-paddingTop="10" data-paddingBottom="170"><p>市场有风险 投资需谨慎</p><p>平台建议的历史年化收益率仅供参考，不代表未来实际收益</p><p style="display: block;background: #eee;">icp备案：沪ICP备15011207号</p><p style="display: block;background: #eee;">公司名称：上海银砖金融信息服务有限公司</p></div>
		<!-- 浮层 -->
		<floatdd></floatdd>
    </div>
</div>
</template>