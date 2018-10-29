<style scoped>
	@import '../../css/global.css';
	.gamebg{ background: url('../../images/game.jpg') no-repeat; background-size: contain; color: #e59537;  }
	.all{ float: right; color: #ff5407; }
	.gread{margin: 0 auto; color: #ff5407; text-align: right; }
	.box{ position: relative;left:0;right:0; margin:auto;}
	.ken{ position: absolute;}
	.img{background: url('../../images/jin.png') no-repeat; background-size: contain;  }
	img{ width: 100%;height:100%; }
	#content {
		margin:0 auto;
		text-align:center;
		position: fixed;
		top:50px; left: 0; right: 0;
		input{ width:50px; height: 30px; }
	}
	#form1 {
		margin:20px 0;
	}
	.notice{
		width: 100%; position: absolute;
		background:url('../../images/notice1.png') no-repeat; background-size:cover;z-index: 22;
		.ikonow{ position: absolute; left: 0; right: 0; margin: auto; }
	}
	.modal-mask{
		position: fixed;
		z-index: 998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .5);
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		    -ms-flex-pack: center;
		        justify-content: center;
		-webkit-box-align: center;
		    -ms-flex-align: center;
		        align-items: center;
		-webkit-transition-duration: .5s;
		        transition-duration: .5s;
		-webkit-perspective: 37.5rem;
		        perspective: 37.5rem;
	}
</style>
<script>
	import requirePop from '../../pop/requirePop.js';
	import { update_gold,gold_gift } from '../../common/URL.js';
	export default {
	    data(){
	    	return {
				td : [],  //保存每个格子的金矿
				playing : false,  //游戏是否开始
				knock : 0, //鼠标点中金矿的次数
				seconds : 15, //倒计时
				interId : null, //指定 setInterval()的变量
				timeId : null, //指定 setTimeout()的变量
				timeDJS : true,                //no
				timeD : 3,
				timer : '00',
				notice : false,
				chance : 0,
				score : 0, //分数      //no
				goldTotal : 0,
				back : false,
				startTime : 0,
				timer1 : 0,
				gameIN : true

			}
	  	},
	  	beforeRouteLeave(to, from, next) {
	  		this.gameIN = false;
	  		next();
	  	},
	  	mounted(){
	  		var self = this;
	  		T.setImgSize();
	  		this.reStart();

	  		/*history.pushState({status:'digGold'},'');
  			self.back=true
            window.onpopstate = function(e){
                if(self.back){
                    self.back = false;
                    self.stop();
                 //    router.push(
	                //     { 
	                //         path: '/', 
	                //         query: { uid: T.uid , wap : T.wap}
	                //     }
	                // )
                    history.back();
                }
            }*/
	  	},
		methods : {
			setDefault(){
				$.extend(this,{
					td : [],  //保存每个格子的金矿
					playing : false,  //游戏是否开始
					knock : 0, //鼠标点中金矿的次数
					seconds : 15, //倒计时
					interId : null, //指定 setInterval()的变量
					timeId : null, //指定 setTimeout()的变量
					timeDJS : true,
					timeD : 3,
					timer : '00',
					notice : false,
					chance : 0,
					score : 0, //分数
					goldTotal : 0,
					back : false,
					startTime : 0,
					timer1 : 0,
					gameIN : true
				})
			},
			stop(){
				var self = this;
				this.setDefault();
				clearInterval(this.startTime);
				clearInterval(this.interId);
				clearInterval(self.timerD);
				clearTimeout(self.timer1);

				setTimeout(function(){
					clearInterval(self.timerD);
				}, 55);
			},
			reStart(){
				this.setDefault();
				this.start();
			},
			start(){
				var firstGame = T.localStorage.getItem('digGold');
				var self = this;
				T.ajax({
	                url : gold_gift , 
	                data : {
	                    uid : T.uid ,
	                },
	                success : function( _data ){
	                    if(_data.success){
	                    	self.goldTotal = _data.map.goldTotal;
	                    }
	                }
	            });
				if(firstGame=='true'){
					if(self.notice == false){
			        	setTimeout(self.timerD, 50);
					}
				}else{
					T.localStorage.setItem('digGold','true');
					self.notice = true;
					self.timeDJS = false;
				}
	  		},
			setTime(){
				var self = this , 
					date1 = new Date(),
					timer = 0,
					oldseconds = date1.getSeconds();

				function go(){
					if(!self.gameIN) return self.stop();
					var date = new Date() , 
						seconds = date.getSeconds() ,
						millise = date.getMilliseconds();

					if(seconds < oldseconds){
						seconds = seconds+60;
					}

					millise = millise>9?millise:'0'+millise;
					self.seconds = 15 - (seconds - oldseconds);
					self.seconds = self.seconds>9?self.seconds:'0'+self.seconds;
					self.timer = String(millise).substr(0,2);
					if(self.seconds<=0){
						clearTimeout(self.timer1);
						self.GameOver()
						self.seconds = '00';
						self.timer = '00';
						self.score = self.score >= 100? 100 : self.score;   //最大100限制
						T.ajax({  //提交挖矿次数
			                url : update_gold , 
			                data : {
			                    uid : T.uid ,
			                    goldNum : self.score ,
			                },
			                success : function( _data ){
			                    if(_data.success){
			                    	self.chance = _data.map.chance;
									requirePop('num',{
				                        props: {
				                        	title: '本次成绩',
				                            count : self.score,
				                            chance : self.chance,
				                            reStart : self.reStart
				                        }
				                    },'gameover');
			                    }else{
									requirePop('cuowu',{
				                        props: {
				                        	content : _data.errorMsg
				                        }
				                    },'publicTips');
			                    }
			                }
			            });
					}else{
						self.timer1 = setTimeout(go,1000/60);
					}
				}
				go();
			},

			timerD(){ 
				var self = this;
				if(!self.gameIN) return self.stop();
				self.startTime = setInterval(function(){countsub()},1000);
				function countsub(){
					if(!self.gameIN) return self.stop();
					if(self.timeD<=0){
						self.timeDJS = false;
						self.playing = true;
						clearInterval(self.startTime);
						self.GameStart();
					}
					else{
						self.timeD --;
						self.playing = false;
					}
				}
			},
			iknow(){ //提示页面按钮
				var self = this;
				self.notice = false;
				self.timeDJS = true;
				setTimeout(self.timerD, 50);
			},
			//游戏结束
			GameOver : function (){
			    clearInterval(this.interId);
			    this.playing = false;
			    this.clearMouse();
			    this.knock = 0;
			    this.seconds = 15;
			},
			//游戏开始
			GameStart : function (){
				this.setTime();
			    this.playing = true;
			    this.timeDJS = false;
			    this.interId = setInterval(this.show,300); 
			},
			 //点击事件函数，判断是否点中
			hit : function (id , event){
				T.getEvent(event);
			    if(this.playing == true){
			        if(document.getElementById("td["+id+"]").innerHTML != ""){

			            this.score += 1;
			            this.knock += 1;
			            document.getElementById("td["+id+"]").innerHTML = "";
			        }
			    }
			},
			 //随机循环显示金矿图片
			show : function (){
				if(!this.gameIN) return this.stop();
			    if(this.playing == true){
			        var current = Math.floor(Math.random()*6);
			        document.getElementById("td["+current+"]").innerHTML = '<img src="images/jin.png" style="width: 100%;height:100%;">';
			        //setTimeout("document.getElementById('td["+current+"]').innerHtml=''",1000);
			    }
			},
			 //清除所有金矿图片
			clearMouse : function (){
			    for(var i=0;i<6;i++){
			        document.getElementById("td["+i+"]").innerHTML="";
			    }
			}
		}
	}
</script>
<template>
<div class="body module-scroll">
	<div v-show='notice==true' class="notice img-size" data-height="1334">
		<div class="ikonow img-size" data-width="274" data-height="90" data-bottom="215" @click='iknow'></div>
	</div>
	<div class="modal-mask img-size" data-height="1334" v-show='timeDJS==true' data-fontSize="100" style="color: #fff;">{{timeD}}</div>
	<div class="gamebg img-size" data-width='750' data-height='1334' data-fontSize='24'>
		<div class="img-size" data-paddingLeft='100' data-paddingTop='68'>倒计时  00:{{seconds}}:{{timer}}</div>
		<div class="all img-size" data-width='126' data-marginTop='-36'>{{goldTotal}}</div>
		<div class="gread img-size" data-width='182' data-fontSize='36' data-lineHeight='74' data-marginTop='80'>{{score}}</div>

		<div class="box img-size" data-width='424' data-height='723' data-top='125'>
			<div id="td[0]" @click="hit(0,$event)" class='ken img-size' data-width='124' data-height='60' data-left='48'></div>
			<div id="td[1]" @click="hit(1,$event)" class='ken img-size' data-width='124' data-height='60' data-right='24' data-top='110'></div>
			<div id="td[2]" @click="hit(2,$event)" class='ken img-size' data-width='124' data-height='60' data-left='32' data-top='270'></div>
			<div id="td[3]" @click="hit(3,$event)" class='ken img-size' data-width='124' data-height='60' data-top='526'></div>
			<div id="td[4]" @click="hit(4,$event)" class='ken img-size' data-width='124' data-height='60' data-right='4'data-top='396'></div>
			<div id="td[5]" @click="hit(5,$event)" class='ken img-size' data-width='124' data-height='60' data-right='30' data-bottom='14'></div>
		</div>
	</div>
</div>
</template>