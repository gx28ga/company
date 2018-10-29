<style scoped>
	@import '../../css/global.css';
	@import '../../css/vue-pop.css';
	$red:#ad1e07;
	$huang:#f79910;
	.notice{
		width: 100%; position: absolute;
		background:url('../../images/notice.png') no-repeat; background-size:cover;z-index: 22;
		.ikonow{ position: absolute; left: 0; right: 0; margin: auto; }
		}
	.game{
		width: 100%; position: absolute;
		background:url('../../images/gamebg.png') no-repeat; background-size:cover;z-index: 1;
		.luo{ width: 100%; position: absolute; top: 0; }/*  background:url('../../images/luo.png') no-repeat; background-size:cover; */
		p{&.cj{ color: #fff; }}
		.gbtn{ text-align: center; color: #650f2c; background: #fff; font-size: 16px; box-shadow:0 2px 0 rgba(173,60,75,.5),0 1px 3px rgba(0,0,0,.1); margin: 0 auto; border-radius: 30px;}
		.tbtn{ text-align: center; color: #650f2c; background: #fff; font-size: 16px; box-shadow:0 2px 0 rgba(173,60,75,.5),0 1px 3px rgba(0,0,0,.1); margin: 0 auto; border-radius: 30px; span{ background: url('../../images/clock.png') no-repeat; background-size: contain; display: inline-block; } }
		.area{ position: absolute; left: 0; right: 0; bottom: 0; margin: auto;}

			.commg{ background: url('../../images/commg.png') no-repeat; background-size: contain; position: absolute; bottom: 0; }
			.commf{ background: url('../../images/commf.png') no-repeat; background-size: contain; position: absolute;bottom: -20px; }
			.silverg{ background: url('../../images/silverg.png') no-repeat; background-size: contain; position: absolute; bottom: 0; }
			.silverf{ background: url('../../images/silverf.png') no-repeat; background-size: contain; position: absolute;bottom: -20px; }
			.goldg{ background: url('../../images/goldg.png') no-repeat; background-size: contain; position: absolute; bottom: 0; }
			.goldf{ background: url('../../images/goldf.png') no-repeat; background-size: contain; position: absolute;bottom: -20px; }
		.btns{ position: absolute; left: 0; right: 0; margin: auto;
			.endmo{ background: url('../../images/endmo.png') no-repeat; background-size: contain; margin: 0 auto; }
			p{ color: #ad1e07; text-align: center; }
			.gcountbtn{ background: url('../../images/coubtn.png') no-repeat; background-size: contain; margin: 8px auto 0; color: #fff; text-align: center;
			}
			.gbillbtn{ background: url('../../images/billbtn.png') no-repeat; background-size: contain; margin: 0 auto; 
			}
		}
		.gray{-webkit-filter: grayscale(100%);}
		@keyframes mysnow{  
                0%{  
                    bottom:100%;  
                    opacity:0;  
                }  
                50%{  
                    opacity:1;  
                    transform: rotate(1080deg);  
                }  
                100%{  
                    transform: rotate(0deg);  
                    opacity: 0;  
                    bottom:0;  
                }  
            }  
            @-webkit-keyframes mysnow{  
                0%{  
                    bottom:100%;  
                    opacity:0;  
                }  
                50%{  
                    opacity:1;  
                    -webkit-transform: rotate(1080deg);  
                }  
                100%{  
                    -webkit-transform: rotate(0deg);  
                    opacity: 0;  
                    bottom:0;  
                }  
            }  
            @-moz-keyframes mysnow{  
                0%{  
                    bottom:100%;  
                    opacity:0;  
                }  
                50%{  
                    opacity:1;  
                    -moz-transform: rotate(1080deg);  
                }  
                100%{  
                    -moz-transform: rotate(0deg);  
                    opacity: 0;  
                    bottom:0;  
                }  
            }  
            @-ms-keyframes mysnow{  
                0%{  
                    bottom:100%;  
                    opacity:0;  
                }  
                50%{  
                    opacity:1;  
                    -ms-transform: rotate(1080deg);  
                }  
                100%{  
                    -ms-transform: rotate(0deg);  
                    opacity: 0;  
                    bottom:0;  
                }  
            }  
            @-o-keyframes mysnow{  
                0%{  
                    bottom:100%;  
                    opacity:0;  
                }  
                50%{  
                    opacity:1;  
                    -o-transform: rotate(1080deg);  
                }  
                100%{  
                    -o-transform: rotate(0deg);  
                    opacity: 0;  
                    bottom:0;  
                }  
            }  
            .roll{  
                position:absolute;  
                opacity:0;  
                animation: mysnow 5s ;  
                -webkit-animation: mysnow 5s ;  
                -moz-animation: mysnow 5s ;  
                -ms-animation: mysnow 5s ;  
                -o-animation: mysnow 5s ;  
                height:80px;  
            }  
            .div{  
                position:fixed;  
            } 
	}
</style>
<script>
	import requirePop from '../../pop/requirePop.js';
	import {prize,backprize} from '../../common/URL.js';
	export default {
		components : {
		},
		data(){
			return{
				type : 0,
				isLuo : false,
				timer : '00',
				seconds : 10,
				isPlay : true,
				notice : false,
				gameing : true,
				gameend : false,
				mainGradee : {},
				num : 0,
				infos : {},
				dan : 100,
				remain : 0,
				LJCJ : 0,
				again : false,
				chanceRemain : 0,
				timeDJS : true,
				timeD : 3
			}
		},
		props:{
			type : [Number,String]
		},
		computed: {
	        getClass: function (){
	        	var type = this.$route.query.type;
        		var className = '';
        		if(type=='0'){
        			className = 'commg';
        		}else if(type=='1'){
        			className = 'silverg';
        		}else{
        			className = 'goldg';
        		}
        		return className;
        	},
        	getClass2: function (){
        		var type = this.$route.query.type;
        		var className = '';
        		if(type=='0'){
        			className = 'commf';
        		}else if(type=='1'){
        			className = 'silverf';
        		}else{
        			className = 'goldf';
        		}
        		return className;
        	}
        },
		mounted(){	        
            var self = this;
	        self.gameing = true;
	        self.gameend = false;
	        T.getAppInfo();
			T.setImgSize();
	        T.mobile();
	        function pm(){
	        	$('.game').css({height:$('body').height()});
	        }
	        pm();
	        var body = document.querySelector("#body");
	        body.addEventListener("touchstart", function (e){
				//e.preventDefault();
			});
	        body.addEventListener("touchmove", function (e){
				e.preventDefault();
			});
	        body.addEventListener("touchend", function (e){
				// e.preventDefault();
			});
	        var type = self.$route.query.type;
	        function lala(){
				if(type == '0'){self.dan = 100;}
				else if(type == '1'){self.dan = 188;}
				else if(type == '2'){self.dan = 288;}
	        }
	        lala();
            this.islogin = T.isLogin;
            if(!this.islogin || !T.uid) return;
	        var firstGame = T.localStorage.getItem('countMoney');
			if(firstGame=='true'){
				if(!self.notice){
		        	setTimeout(self.timerD, 1000);
				}
	        	setTimeout(()=>{
	        		self.setTime();
			        self.touchUp();
			        self.touchUp2();
	        	}, 4500);
			}else{
				T.localStorage.setItem('countMoney','true');
				self.notice = true;
				self.timeDJS = false;
			}
            T.ajax({  //数得多
				url : prize , 
				data : {
					uid : T.uid				},
				success : function( _data ){
					self.mainGradee = _data.map.funtuneOfUser;
					self.LJCJ = self.mainGradee.fortune+self.num*self.dan;
				}
			});
		},
		methods : {
			timerD(){
				var self = this;
				function settime(val) { 
					if (self.timeD == 0) {
						clearTimeout(times);
						self.timeDJS = false;
					} else { 
						self.timeD --; 
					} 
					var times = setTimeout(function() { 
						settime(val) 
					},1000) 
				} 
				settime();
			},
			touchUp(){
				var el = document.querySelector("#float3");
				var el2 = document.querySelector("#float2");
				var moveY,touchY,startX,startY,endY,moveLength,width,heightB;
				width = $('window').width()/2;
				var self= this;
				el.addEventListener("touchstart", function (e){
					e.preventDefault();
					startX = e.touches[0].pageX;
					startY = e.touches[0].pageY;
				});
				el.addEventListener("touchmove", function(e){
					e.preventDefault();
					touchY=event.targetTouches[0].pageY;
					moveY= touchY - startY;
					// el.animate({bottom: "100px"},"slow");
					var transform = "translate(" + width + "px," + moveY + "px)";
		            el.style.transform = transform;
		            el.style.oTransform = transform;
		            el.style.msTransform = transform;
		            el.style.mozTransform = transform;
		            el.style.webkitTransform = transform;
				});

				function end(e){
					if(self.seconds <=0 ) return ;
					e.preventDefault();
					endY = e.changedTouches[0].pageY;
					moveLength = Math.abs(endY - startY); //移动结束时计算的移动距离。
	            	self.isLuo = true;
	            	if(moveLength > 10){
		            	el.style.zIndex = 0;
		            	el2.style.zIndex = 1;
		            	// self.luo();
		            	// el.animate({bottom:0},"slow");
		            	el.style.transform = "translate(" + width + "px,0px)";
		            	el.style.oTransform = "translate(" + width + "px,0px)";
		            	el.style.msTransform = "translate(" + width + "px,0px)";
		            	el.style.mozTransform = "translate(" + width + "px,0px)";
		            	el.style.webkitTransform = "translate(" + width + "px,0px)";
		            	self.num++;
	            	}
				}
				el.addEventListener("touchend", end)
			},
			touchUp2(){
				var el = document.querySelector("#float3");
				var el2 = document.querySelector("#float2");
				var moveY,touchY,startX,startY,endY,moveLength,width,heightB;
				width = $('window').width()/2;
				var self= this;
				el2.addEventListener("touchstart", function (e){
					e.preventDefault();
					startX = e.touches[0].pageX;
					startY = e.touches[0].pageY;
				});
				el2.addEventListener("touchmove", function(e){
					e.preventDefault();
					touchY=event.targetTouches[0].pageY;
					moveY= touchY - startY;
					// el2.animate({bottom:"100px"},"slow");
					var transform = "translate(" + width + "px," + moveY + "px)";
		            el2.style.transform = transform;
		            el2.style.oTransform = transform;
		            el2.style.msTransform = transform;
		            el2.style.mozTransform = transform;
		            el2.style.webkitTransform = transform;
				});

				function end(e){
					if(self.seconds <=0 ) return ;
					e.preventDefault();
					endY = e.changedTouches[0].pageY;
					moveLength = Math.abs(endY - startY); //移动结束时计算的移动距离。
	            	if(moveLength > 10){
		            	self.isLuo = true;
		            	el2.style.zIndex = 0;
		            	el.style.zIndex = 1;
		            	// self.luo();
		            	// el2.animate({bottom:0},"slow");
		            	el2.style.transform = "translate(" + width + "px,0px)";
		            	el2.style.oTransform = "translate(" + width + "px,0px)";
		            	el2.style.msTransform = "translate(" + width + "px,0px)";
		            	el2.style.mozTransform = "translate(" + width + "px,0px)";
		            	el2.style.webkitTransform = "translate(" + width + "px,0px)";
		            	self.num++;
	            	}
				}
				el2.addEventListener("touchend", end)
			},
			iknow(){
				var self = this;
				self.notice = false;
				self.timeDJS = true;
				setTimeout(self.timerD, 1000);
				setTimeout(()=>{
	        		self.setTime();
			        self.touchUp();
			        self.touchUp2();
	        	}, 4500);
			},
			change : function(){
				var self = this;
				if(self.chanceRemain == 0){ return; }
				// requirePop('change');
				router.replace(
                    { 
                        path: 'main', 
                        query: { uid: T.uid , wap : T.wap}
                    }
                )
			},
            investment : function(){
                T.callApp.investment();
            },
            luo : function(){ 
	            function snow(left,height,src){  
	                var div = document.createElement("div");  
	                var img = document.createElement("img");  
	                div.appendChild(img);  
	                img.className = "roll";  
	                img.src = src;  
	                div.style.left=left+"px";  
	                div.style.height=height+"px";  
	                div.className="div";  
	                document.getElementById("snowzone").appendChild(div);  
	                setTimeout(function(){  
	                    document.getElementById("snowzone").removeChild(div);
	            	},5000);  
	            }  
	            setInterval(function(){  
	                var left = Math.random()*window.innerWidth;  
	                var height = Math.random()*window.innerHeight;  
	                var src = "http://192.168.0.18/activity/app/countMoney/src/images/"+Math.floor(Math.random()*2+1)+".png";
	                snow(left,height,src);  
	            },500);  
            },
			setTime(){
				var self = this , 
					date1 = new Date(),
					timer = 0,
					oldseconds = date1.getSeconds();

				function go(){
					var date = new Date() , 
						seconds = date.getSeconds() ,
						millise = date.getMilliseconds();

					if(seconds < oldseconds){
						seconds = seconds+60;
					}

					millise = millise>9?millise:'0'+millise;
					self.seconds = 10 - (seconds - oldseconds);
					self.seconds = self.seconds>9?self.seconds:'0'+self.seconds;
					self.timer = String(millise).substr(0,2);
					if(self.seconds<=0){
						clearTimeout(timer);
						self.seconds = '00';
						self.timer = '00';
						var type = self.$route.query.type;
						// var $('#swl').text()
						T.ajax({  //返回随机奖品
			                url : backprize , 
			                data : {
			                    uid : T.uid ,
			                    countingType : type ,
			                    countingAmount : self.num*self.dan
			                },
			                success : function( _data ){
			                    self.infos = _data.map.userMsg;
								self.chanceRemain = self.infos.chanceRemain;
								if(self.chanceRemain > 0){
									self.again = true;
								}else{ $('.gcountbtn').addClass('gray');}
			                }
			            });
						self.gameing = false;
						self.gameend = true;
					}else{
						timer = setTimeout(go,1000/60);
					}
				}
				go();
			}
		}           
	}
</script>
<template>
<div id="body">
	<div v-show='notice==true' class="notice img-size" data-height="1334">
		<div class="ikonow img-size" data-width="320" data-height="80" data-bottom="280" @click='iknow'></div>
	</div>
	<div class="modal-mask img-size" data-height="1334" v-show='timeDJS==true' data-fontSize="100" style="color: #fff;">{{timeD}}</div>
	<div class="game img-size" data-height="1334">
		<div id="snowzone" v-show='isLuo' class="luo img-size" data-height="1334"></div>

		<p class="cj img-size" data-paddingTop="45" data-paddingLeft="35" data-fontSize="32">累计成绩：￥{{LJCJ+num*dan}}</p>

		<div class="gbtn img-size" data-marginTop="35" data-width="300" data-height="74" data-lineHeight="74">￥<span id="swl">{{num*dan}}</span>元</div>

		<div class="tbtn img-size" data-marginTop="33" data-width="300" data-height="74" data-lineHeight="74"><span class="img-size" data-width="30" data-height="30" data-marginRight="20"></span>00:{{seconds}}:{{timer}}</div>

		<div  v-show='gameing==true'>
			<div class="area img-size" data-width="484" data-height="671">
				<div id="gd" class="img-size" :class='getClass' data-width="484" data-height="671"></div>
				<div id="float1" class="img-size" :class='getClass2' data-width="477" data-height="786"></div>
				<div id="float2" class="img-size" :class='getClass2' data-width="477" data-height="786"></div>
				<div id="float3" class="img-size" :class='getClass2' data-width="477" data-height="786"></div>
			</div>
		</div>

		<div v-show='gameend==true'>
			<div class="btns img-size" data-width="522" data-height="671" data-bottom="150">
				<div class="endmo img-size" data-width="522" data-height="375"></div>
				<p class="img-size" data-paddingTop="70">您的剩余数钱次数：{{chanceRemain}}次</p>
				<div class="gcountbtn img-size" data-width="400" data-height="90" data-lineHeight="70" data-fontSize="34" @click='change'>再数一次</div>
				<div class="gbillbtn img-size" data-width="400" data-height="107" data-marginTop="15" data-marginBottom="80" @click="investment"></div>
			</div>
		</div>
	</div>
</div>
</template>