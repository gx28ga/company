<style scoped>
	@import '../../css/global.css';
	$red:#ad1e07;
	$huang:#f79910;
	.banner{
		width: 100%;
		background:url('../../images/bann.png') no-repeat; background-size:contain;
		position: relative;
		.rulebtn{ position: absolute; }
		.free{ position: absolute; left:0; right:0; margin: auto; background: $huang; color: #fff; text-align: center; border-radius: 5px;}
	}
	a{ color:#3385ff; }
	.body{background: #fceee5; width: 100%; height: auto; position: relative;
		p{text-align: center; color: $red;&.billno{color: $huang;}}
		.mon{ background:url('../../images/mon.png') no-repeat; background-size:contain; margin: 0 auto; }
		.countbtn{ background: url('../../images/coubtn.png') no-repeat; background-size: contain; margin: 8px auto 0; color: #fff; text-align: center;
			/*&.gray{ filter: grayscale(100%); -webkit-filter: grayscale(100%); }*/
		}
		.billbtn{ background: url('../../images/billbtn.png') no-repeat; background-size: contain; margin: 0 auto; 
		}
		.notice{ position: relative; margin-top: 15px;
			.title{ display: inline-block; background: #fff;
				box-shadow:0 0 5px 1px #fbe2d7; border-radius: 5px;
				&.conmore{ padding: 15px 7px; color: $red; font-size: 14px;}
				&.qiang{ padding: 10px 7px; color: #f8a642; font-size: 12px; }
			}
		}
		.prize{ position: relative; background: #fff;box-shadow:0 0 5px 1px #fbe2d7; border-radius: 5px; margin: 0 auto;
			.kuai{ background: #fdf5ef; border-radius: 5px; margin: 0 auto; 
				.top{ color: $red;span{ color: $huang; &:nth-child(2){ text-decoration: underline; }} }
				.left{ background: url('../../images/ta.png') no-repeat; background-size: contain; display: block; }
				.right{ color: $red;
				ul{ li{ line-height: 31px; } } }
			}
			.table{ text-align: center; margin: 0 auto;
				.tabletitle{ color: #333; }
				.tablebody{ margin: 0 auto; color: #cb3d27; background: #fff; margin-top: 7px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; line-height: 21px; padding-bottom: 9px;}
			}
			.con{ color: #666666; }
		}
		.gray{ -webkit-filter: grayscale(100%);}
	}
</style>
<script>
	import requirePop from '../../pop/requirePop.js';
	import { prizelist,prize,getlucky } from '../../common/URL';
	export default {
		components : {
		},
		data() {
			return{
		        listT: false,
				listO: true,
				mainGrade : {},
				mainGrade2 : {},
				islogin : false,
				allChance : {}
			}
		},
		mounted(){
			var self = this;
			T.setImgSize();
	        T.mobile();
	        T.getAppInfo();
	        this.islogin = T.isLogin;
	        if(!this.islogin || !T.uid) return;
			T.ajax({  //数钱机会
				url : getlucky , 
				data : {
					uid : T.uid
				},
				success : function( _data ){
					self.allChance = _data.map.userChance;
					if(self.allChance.chanceRemain == 0){
						$('.countbtn').addClass('gray');
					}
				}
			});
			T.ajax({  //抢排名
				url : prizelist , 
				data : {
					uid : T.uid
				},
				success : function( _data ){
					self.indexprize = _data.map.prizeAndRank;
					self.mainGrade2 = _data.map.funtuneOfUser;
				}
			});
			T.ajax({  //数得多
				url : prize , 
				data : {
					uid : T.uid
				},
				success : function( _data ){
					self.mainGrade = _data.map.funtuneOfUser;
				}
			});
		},
		filters: {  
		    filterFun: function (num,type,flag) {  
		    	num = num/10000;
		    	num = Math.floor(num * 100) / 100 ;
		    	  var s = num.toString(); 
			      var rs = s.indexOf('.'); 
			      if (rs < 0) { 
			        rs = s.length; 
			        s += '.'; 
			      } 
			      while (s.length <= rs + 2) { 
			        s += '0'; 
			      } 
		    	return s; 
			}
		},
		methods : {
			rule : function(){
				requirePop('rule')
			},
			change : function(){
				if(this.allChance.chanceRemain > 0){
					requirePop('change');
				}
			},
			login : function( callback ){
                T.login(callback);
            },
            investment : function(){
                T.callApp.investment();
            },
			tabChange1 : function(event){
				this.listT = false;
				this.listO = true;
			},
			tabChange2 : function(event){
				this.listO = false;
				this.listT = true;
			}
		}
	}
</script>
<template>
<div class='module-scroll'>
	<div class="home">
		<div class="banner img-size" data-height="583">
			<div class="rulebtn img-size" data-width="132" data-height="40" data-top="39" data-right="26" @click='rule'></div>
			<div class="free img-size" data-width="215" data-fontSize="28" data-height="54" data-lineHeight="54" data-bottom="16">每天1次免费机会</div>
		</div>
		<div class="body img-size" data-paddingBottom="158" data-paddingTop="37">
			<div class="mon img-size" data-width="750" data-height="289" ></div>
			<p class="img-size" data-fontSize="28" data-lineHeight="36" data-marginTop="28">您剩余数钱次数：<span v-if='islogin'>{{allChance.chanceRemain}}次</span><span v-else>请<a @click="login">登录</a>后查看</span></p>
			<div class="countbtn img-size" data-width="400" data-height="90" data-lineHeight="70" data-fontSize="34" @click='change'>开始数钱</div>
			<div class="billbtn img-size" data-width="400" data-height="107" @click="investment"></div>
			<p class="billno img-size" data-fontSize="28" data-lineHeight="36">单笔投资≥20天产品每满5000元可获得1次数钱机会</p>
			
			<div class="notice">
				<div id="tab1" class="title img-size" :class="{'conmore':listO,'qiang':listT}" data-marginLeft="62" @click="tabChange1">数得多，拿得多</div>
				<div id="tab2" class="title img-size" :class="{'conmore':listT,'qiang':listO}" @click="tabChange2">抢排名，赢MacBook</div>
			</div>
			<div v-show='listO' class="prize img-size" data-width="698" data-marginTop="-15" data-paddingTop="42">
				<div class="kuai img-size" data-width="570">
					<div v-if="islogin" class="top img-size" data-lineHeight="64" data-paddingLeft="54" data-paddingTop="30" data-paddingBottom="30" data-fontSize="28">
						您当前成绩：<span v-if='mainGrade.index == -1'>{{mainGrade.fortune}}（暂无名次）</span><span v-else>{{mainGrade.fortune}}（第{{mainGrade.index}}名）</span><br>
						预计可获得：<span>{{mainGrade.prize}}</span>
					</div>
					<div v-else class="top img-size" data-lineHeight="64" data-paddingLeft="54" data-paddingTop="30" data-paddingBottom="30" data-fontSize="28">
						请<a @click="login">登录</a>后查看
					</div>
				</div>
				<div class="kuai img-size" data-width="570" data-marginTop="42" data-paddingTop="25" data-paddingBottom="25">
					<div class="left img-size" data-width="571" data-height="422" data-marginLeft="16" data-marginRight="25"></div>
				</div>
				<div class="con img-size" data-paddingTop="32" data-paddingBottom="32" data-paddingLeft="68" data-fontSize="24">*数据实时更新，仅供参考，<br>实际奖品以活动结束后的最终数据为准</div>
			</div>
			<div v-show='listT' class="prize img-size" data-width="698" data-marginTop="-15" data-paddingTop="42">
				<div class="kuai img-size" data-width="570">
					<div v-if="islogin" class="top img-size" data-lineHeight="64" data-paddingLeft="54" data-paddingTop="30" data-paddingBottom="30" data-fontSize="28">
						您当前成绩：<span v-if='mainGrade2.index == -1'>{{mainGrade2.fortune}}（暂无名次）</span><span v-else>{{mainGrade2.fortune}}（第{{mainGrade2.index}}名）</span><br>
						预计可获得：<span>{{mainGrade2.prize}}</span>
					</div>
					<div v-else class="top img-size" data-lineHeight="64" data-paddingLeft="54" data-paddingTop="30" data-paddingBottom="30" data-fontSize="28">
						请<a @click="login">登录</a>后查看
					</div>
				</div>
				<div class="kuai img-size" data-width="677" data-marginTop="42" data-paddingTop="25" data-paddingBottom="5">
					<div class="table">
						<div class="tabletitle"><table class="img-size" data-fontSize="28" data-width="677"><tr><td width="13%">排名</td><td width="28%">手机号</td><td width="23%">成绩（万）</td><td width="39%">奖品</td></tr></table></div>
						<div class="tablebody img-size" data-width="669">
							<table class="img-size" data-fontSize="24" data-width="669">
								<tr v-for='item in indexprize'><td width="13%">{{item.index}}</td><td width="28%">{{item.mobilePhone}}</td><td width="20%">{{item.fortune | filterFun}}</td><td width="39%">{{item.prize}}</td></tr>
							</table>
						</div>
					</div>
				</div>
				<div class="con img-size" data-paddingTop="32" data-paddingBottom="32" data-paddingLeft="68" data-fontSize="24">*数据实时更新，仅供参考，<br>实际奖品以活动结束后的最终数据为准</div>
			</div>
		</div>
	</div>
</div>
</template>