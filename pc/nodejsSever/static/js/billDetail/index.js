new Vue({
	el : '#APP',
	delimiters: ['${', '}'],
	data : function(){
		return {
			isLogin : false,
			id : '',
			map : null, //所有数据

			num : "", //充值
			addClass : false,
			delClass : false,


			info : null,//资产信息
			funds : '',//用户资金
			investList : null,//投资记录
			hisList : null,//投资记录所有信息
			check : true, //阅读协议
			profit : 0, //预计收益
			btnName : '立即投资',

			expireDate : 0, //产品到期时间

			isShowShouyi : false, //收益

			error : false,
			errorMsg : '',

			btnClass : false,
			investmentTab : 1,
			showExplain:true,//n天加息说明
			protocols:'',//协议查看
			//page : 1,//投资记录当前页
			//pageSize : 10//投资记录每页多少条
		}
	},
	mounted : function(){
		if(location.href.search("billDetal_html_")>-1){
			T.setNavCurrent('dq');
		}else if(location.href.search("newhand")>-1){
			T.setNavCurrent('aa');
		}else{
			T.setNavCurrent('pj');
		};
		this.userInfo();
		this.tips();
	},
	watch : {
		num : function( val ){
			let map = this.map;
				if(location.href.search("newhand")>-1){
				let	funds=map.currentInfo,num = 0;
					num = T.toInt(val);
					this.num = num;
					if((funds.balance < funds.leastPurchaseAmount)||(funds.balance - this.num < 0 )|| (funds.maxPurchaseAmount-this.num<=0)){
						this.addClass=true;
					}else{
						this.addClass=false;
					}
					if(num<=100){
						this.delClass=true;
					}else{
						this.delClass=false;
					}
				}else{
					let funds = map.funds;
					let product = map.info,
						num = 0;
					num = T.toInt(val);
					this.num = num;
					if(!this.isShowShouyi){//补标 加息
						if(product.daysOfExtraActivityInterest<product.deadline){
                            this.profit = T.isNumber2((product.rate/100 / 365 * num * product.deadline)+(product.activityRate/100 / 365 * num * product.daysOfExtraActivityInterest));
						}else{
                            this.profit = T.isNumber2((product.rate + product.activityRate)/100 / 365 * num * product.deadline);
						}
					}else{//投资本金 产品利率 翻n倍 活动利率 365 产品期限
						if(product.daysOfExtraActivityInterest<product.deadline){
                            this.profit = T.isNumber2(num * (product.rate/100 + repair.content/100) / 365 * product.deadline+(num*product.activityRate/100/365*product.daysOfExtraActivityInterest));
						}else{
                            this.profit = T.isNumber2(num * (product.rate/100 + product.activityRate/100 + repair.content/100) / 365 * product.deadline);
						}
					}
					if((funds.balance < product.leastaAmount)||(funds.balance - this.num < 0)){
						this.addClass=true;
					}else{
						this.addClass=false;
					}
					if(num<=100){
						this.delClass=true;
					}else{
						this.delClass=false;
					}
				}

			this.getInvestment();

		},
		check : function(val){
			if(location.href.search("newhand")>-1){
				if(val){
					if(!this.currentInfo){ //没有投资过
						this.clearEvent();
					}
				}
			}else{
				if(val){
					if(this.info.isRookie!=1 || !this.info){ //没有投资过
						this.clearEvent();
					}
				}
			}

		}
	},
	filters : {
		isNumber2(n){
			return T.isNumber2(n);
		},
		toLocaleString(val , num){
			let n = parseFloat(val).toLocaleString();
			if(num==2){
				n = n+'.00';
			}
			return n;
		}
	},
	methods : {
		goTop : function(){
			T.goTop();
		},
		isShowNay(){
			this.showExplain=!this.showExplain;
		},
		clearEvent(){
			this.error = false;
			this.btnClass = false;
		},
		showError( val ){
			this.error = true;
			this.errorMsg = val;
			this.btnClass = true;
		},
		getInvestment( callback ){ //判断投资金额够不够
			if(this.btnName == '已投资') return;
			if(location.href.search("newhand")>-1){//当是新手宝的时候
				let map=this.map,
					funds=map.currentInfo;
				if(!this.num || this.num<1){
					return this.showError("请输入投资金额");
				}else if(this.num%100!=0){
					return this.showError("投资金额为100倍数");
				}else if(funds.maxPurchaseAmount < this.num){
					return this.showError("理财产品金额不足");
				}else if(funds.isInvested==1 && funds.isPurchased==0){
					return this.showError("您已不是新手");
				}else if( funds.isPurchased==1){
					return this.showError("您已投资");
				}else if((funds.balance < funds.leastPurchaseAmount)||(funds.balance - this.num < 0)){
					return this.showError("用户余额不足");
				}else if(!this.check){
					return this.showError("请同意《活期投资协议》");
				}else{
					this.clearEvent();
				}
			}else{
				let map = this.map,
					funds = map.funds,
					product = this.map.info;
				if(!this.num || this.num<1){
					return this.showError("请输入投资金额");
				}else if(this.num%100!=0){
					return this.showError("投资金额为100倍数");
				}else if(product.surplusAmount < this.num){
					return this.showError("理财产品金额不足");
				}else if((funds.balance < product.leastaAmount)||(funds.balance - this.num < 0)){
					return this.showError("用户余额不足");
				}else if(!map.newHands && product.isRookie==1){ //非新手标
					return this.showError("您已投资");
				}else if(!this.check){
					return this.showError("请同意《定向委托投资协议》");
				}else{
					this.clearEvent();
				}
			}
			callback && callback();
		},
		login(){
			T.go.login();
		},
		userInfo(){
			this.isLogin = T.getLocalInfo();
			if(location.href.search("newhand")>-1){
				if(this.isLogin){
					this.getDetail();
					this.getPageList({
						pageOn:1,
						pageSize:10,
					});

				}
			}else{
				this.id = T.getID();
				if(this.isLogin){
					this.getDetail();
					this.getPageList({
						pageOn:1,
						pageSize:10,
						pid : this.id
					});

				}
			}

		},
		getDetail(){
			let self = this;
			if(location.href.search("newhand")>-1){
				T.ajax({
					url:"/v1/current/product/info.do",
					data:{},
					success:function(data){
						self.map=data.map;
						self.funds=data.map.currentInfo;
						if(self.funds.isInvested==1 && self.funds.isPurchased==0){
							self.btnClass = true;
							self.btnName = '您已不是新手';
							self.delClass=true;
							self.addClass=true;
						}
						if(self.funds.isPurchased==1){
							self.btnClass = true;
							self.btnName = '您已投资';
							self.delClass=true;
							self.addClass=true;
						}
					}
				})
			}else{
				T.ajax({
					url:"/detail",
					data : {id : this.id},
					success : function( data) {
						if(data.errorCode=="1001"){
							$(`
							<div class="child">
						        <pop ref="img" :obj="win" :closeCallback="closeCallback">
								    <h2 slot="title">错误</h2>
								    <div slot="content" style="padding:20px; text-align:center;">
								        {{msg}}
								    </div>
							    </pop>
						    </div>
					    `).appendTo('body');
							new Vue({
								el: '.child',
								data(){
									return {
										msg : data.errorMsg,
										win : {
											title:true,
											close:true,
										}
									}
								},
								mounted(){
									this.$refs.img.show();
								},
								methods : {
									closeCallback(){
										location.href='/';
									}
								}
							});

							return false;
						}
						self.map = data.map;
						self.funds = data.map.funds;//用户资金
						self.info = data.map.info;
						self.product = data.map.info;
						self.expireDate = self.info.expireDate-86400000; //产品到期时间
						if(data.map.productContract){
							self.protocols=data.map.productContract.contractTemplateList;//协议
						}
						if(self.info.type == 6){//'定期,新手标'
							if(!self.map.newHands){//定期
								if(self.info.isRookie==1){ //已投资过
									self.btnClass = true;
									self.btnName = '已投资';
								}
							}else{//新手标

							}

						}else if(self.info.type == 2 || self.info.type == 5){//'2票据 5保理'
							let nowTimer = "";
							if(self.info.establish != undefined){
								let date3 = self.info.establish - Date.parse(new Date());

								let day = Math.floor(date3/(24*3600*1000));
								let hh= Math.floor(date3/(3600*1000));
								if(day > 0){
									nowTimer = day+'天';
								}else
								if(day == 0&& hh > 1){
									nowTimer = hh+'小时';
								}else
								if(day == 0&& hh < 1){
									nowTimer = '1小时内'
								}else
								if(hh < 0){
									nowTimer ='已结束';
								}
							}else{
								nowTimer ='已结束';
							};
							self.info.nowTimer = nowTimer;
						}

						/*判断有没有收益 投资本金,产品利率,翻n倍, 活动利率,365,产品期限*/
						if(
							data.map.repair &&
							self.info.isRepair==1 &&
							self.info.repair.type == 1
						){
							self.isShowShouyi=true;
						}
						self.$nextTick(function(){
							self.slide();
						})
					}
				});
			}
		},
		add(){
			if(this.addClass) return;
			if(this.num==void 0 || this.num==""){
				this.num = 0;
			}
			this.num = parseInt(this.num);
			if(location.href.search("newhand")>-1){
				let surplusAmount=parseInt(this.map.currentInfo.maxPurchaseAmount);
				if(this.num >= surplusAmount){
					this.num = surplusAmount;
					this.addClass=true;
				}else{
					this.num += this.map.currentInfo.increasedAmount;
				}

			}else{
				let surplusAmount = parseInt(this.map.info.surplusAmount);
				if(this.num >= surplusAmount){
					this.num = surplusAmount;
				}else{
					this.num += this.map.info.increasAmount;
				}
			}


		},
		del(){
			if(this.delClass) return;
			if(this.num==void 0 || this.num==""){
				this.num = 0;
			}
			if(location.href.search("newhand")>-1){
				let leastaAmount = parseInt(this.map.currentInfo.leastPurchaseAmount);
				if(this.num <= leastaAmount){
					this.num = leastaAmount;
				}else{
					this.num -= this.map.currentInfo.increasedAmount;
				}
			}else{
				let leastaAmount = parseInt(this.map.info.leastaAmount);
				if(this.num <= leastaAmount){
					this.num = leastaAmount;
				}else{
					this.num -= this.map.info.increasAmount;
				}
			}


		},
		recharge(){
			T.go.recharge();
		},
		showPic( item ){
			$(`
				<div class="child">
			        <pop ref="img" :obj="win">
					    <h2 slot="title">产品资料</h2>
					    <div slot="content">
					        <img :src="bigUrl">
					    </div>
				    </pop>
			    </div>
		    `).appendTo('body');
			new Vue({
				el: '.child',
				data(){
					return {
						bigUrl : item.pic,
						win : {
							title:true,
							close:true,
						}
					}
				},
				mounted(){
					this.$refs.img.show();
				}
			});
		},
		slide(){
			$(".img-detail").slide({
				mainCell:".swiper-container ul",
				effect:"left",
				trigger:"click",
				vis:3,
				prevCell : '.bill-turn-left',
				nextCell : '.bill-turn-right',
				pnLoop:false,
				/*startFun : function( i, c, slider, titCell, mainCell, targetCell, prevCell, nextCel){
					if(c>3){
						if((i+1)/3 >=Math.floor(c/3)){
							setTimeout(function(){
								$('.bill-turn-right').addClass('nextStop')
							},10);
						}
					}
				}*/
			});
		},
		tips(){
			layui.use('layer', function(){
				let layer = layui.layer ,
					index;
				$('.tag-tips').each(function(){
					$(this).mouseover(function(){
						$(this).addClass('currentTips');
						index = layer.tips($(this).attr('data-tips'), '.currentTips', {
							tips: 1,
							skin: 'tips',
							time : 0,
						});
					}).mouseleave(function(){
						layer.close(index);
						$(this).removeClass('currentTips');
					})
				});
			});
		},
		setInvestmentTab(item){
			this.investmentTab = item;
		},
		getPageList( obj ){ //投资记录
			var self = this;
			if(location.href.search("newhand")>-1){
				T.ajax({
					url:"/v1/current/purchase-Record.do",
					data : obj,
					success : function( data) {
						if(data.errorCode=='9999') return;
						self.hisList = data.map.page;
						self.investList = data.map.page.rows;
						self.pageChange(obj,data.map.page);
					}
				});
			}else{
				T.ajax({
					url:"/depositsHistory",
					data : obj,
					success : function( data) {
						if(data.errorCode=='9999') return;
						self.hisList = data.map.page;
						self.investList = data.map.page.rows;
						self.pageChange(obj,data.map.page);
					}
				});
			}

		},
		pageChange : function(obj,data){
			var self = this;
			layui.use(['laypage', 'layer'], function(){
				var laypage = layui.laypage;
				laypage.render({
					elem: 'Page'
					,curr : data.pageOn
					,limit : 10 //每页条数
					,count: data.total //数据总数
					,layout: ['prev','page', 'next', 'count']
					,jump: function(_obj, first){
						//首次不执行
						if(!first){
							obj.pageOn = _obj.curr;
							self.getPageList(obj);
						}
					}
				});

			});
		},
		submit(){
			let self = this;
			if(this.btnClass) return;
			this.btnClass = true;
			T.go.openEscrowAccount(()=>{ //是否开通存管
				this.getInvestment(()=>{ //是否通过验证
					/*是否补标成立*/
					/*if($scope.product.surplusAmount == $scope.product.nowNum && $scope.repair != undefined){
						$scope.ischufa =true;
					}else{
						$scope.ischufa =false;
					}*/

					self.payPop();
				})
			});
		},
		payPop(){
			let self = this ,
				effect ,
				product ,
				profit,
				productnewhand;
				productnewhand = `
					<div class="product-info form">
						<div class="item">
							<div class="txt">产品信息</div>
							<div class="cnt">
								<dl>
									<dt>产品名称：</dt>
									<dd>新手宝</dd>
								</dl>
								<dl>
									<dt>还款方式：</dt>
									<dd>每日收益到账</dd>
								</dl>
								<dl>
									<dt>投资总额：</dt>
									<dd><b>{{num|toNumber2}}</b> 元<div class="quan" v-html="quan"></div></dd>
								</dl>
							</div>
						</div>
					</div>
				`;
				product = `
					<div class="product-info form">
						<div class="item">
							<div class="txt">产品信息</div>
							<div class="cnt">
								<dl>
									<dt>产品名称：</dt>
									<dd>{{product.fullName}}</dd>
								</dl>
								<dl>
									<dt>项目期限：</dt>
									<dd><b>{{product.deadline}}</b>天</dd>
								</dl>
								<dl>
									<dt>还款方式：</dt>
									<dd>{{product.refundType}}到期还本付息</dd>
								</dl>
								<dl>
									<dt>投资总额：</dt>
									<dd><b>{{num|toNumber2}}</b> 元<div class="quan" v-html="quan"></div></dd>
								</dl>
							</div>
						</div>
					</div>
				`;
				effect = `
					<div class="effect">
						<div class="option" :style="{display:selectCoupon.name=='VIPList'?'block':'none'}">
							<a class="aside" href="/main/myAccount/vipAbout" target="_blank">什么是特权？</a>
							<ul v-if="VIPList.length">
								<li v-for="item in VIPList"
									@click = setCoupon(item,'VIPList')
									:class="{hover:selectCoupon.name=='VIPList' && selectCoupon.obj.id == item.id}"
								>
									<em><b>{{item.raisedRates}}%</b>　<span>加息特权</span></em>
									<p>剩余特权次数：1</p>
									<p>作用描述：投资成功返现</p>
									<div class="select"><i></i></div>
								</li>
							</ul>
							<div v-else class="no-data">暂无</div>
						</div>
						<div class="option" :style="{display:selectCoupon.name=='FXList'?'block':'none'}">
							<ul v-if="FXList.length">
								<li 
									v-for="item in FXList" 
									@click = setCoupon(item,'FXList')
									:class="{hover:selectCoupon.name=='FXList' && selectCoupon.obj.id == item.id}"
								>
									<em><b>{{item.amount}}</b>元 <span>返现券</span></em>
									<p>
										有效期：{{item.addtime|formateDate}}-{{item.expireDate|formateDate}}
									</p>
									<p>作用描述：投资成功返现</p>
									<p>
										<span v-if="item.maxAmount == 0">
											投资金额≥{{item.enableAmount|maxfilter}}元
										</span>
										<span v-else>
											{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount|maxfilter}}元
										</span>
									</p>
									<div class="select"><i></i></div>
								</li>
							</ul>
							<div v-else class="no-data">暂无</div>
						</div>
						<div class="option" :style="{display:selectCoupon.name=='QList'?'block':'none'}">
							<ul v-if="QList.length">
								<li v-for="item in QList"
									@click = setCoupon(item,'QList')
									:class="{hover:selectCoupon.name=='QList' && selectCoupon.obj.id == item.id}"
								>
									<em><b>{{item.raisedRates}}%</b> <span>加息券</span></em>
									<p>有效期：{{item.addtime|formateDate}}-{{item.expireDate|formateDate}}</p>
									<p>作用描述：增加投资利息</p>
									<p>
										<span v-if="item.maxAmount == 0">
											投资金额≥{{item.enableAmount|maxfilter}}元
										</span>
										<span v-else>
											{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount}}元
										</span>
									</p>
									<div class="select"><i></i></div>
								</li>
							</ul>
							<div v-else class="no-data">暂无</div>
						</div>
						<div class="option" :style="{display:selectCoupon.name=='ZSQList'?'block':'none'}">
							<ul v-if="ZSQList.length">
								<li v-for="item in ZSQList"
									@click = setCoupon(item,'ZSQList')
									:class="{hover:selectCoupon.name=='ZSQList' && selectCoupon.obj.id == item.id}"
								>
									<em>
										<b>{{item.raisedRates}}%</b> <span>专属加息券</span>
									</em>
									<p>
										有效期：{{item.addtime|formateDate}}-{{item.expireDate|formateDate}}
									</p>
									<p>作用描述：增加投资利息</p>
									<p>
										<span v-if="item.maxAmount == 0">
											投资金额≥{{item.enableAmount|maxfilter}}元
										</span>
										<span v-else>
											{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount|maxfilter}}元
										</span>
									</p>
									<div class="select"><i></i></div>
								</li>
							</ul>
							<div v-else class="no-data">暂无</div>
						</div>
						<div class="option" :style="{display:selectCoupon.name=='CJQList'?'block':'none'}">
							<ul v-if="CJQList.length">
								<li v-for="item in CJQList"
									@click = setCoupon(item,'CJQList')
									:class="{hover:selectCoupon.name=='CJQList' && selectCoupon.obj.id == item.id}"
								>
									<em>
										{{item.minRaisedRates}}%~{{item.maxRaisedRates}}%超级加息券
									</em>
									<p>
										有效期：{{item.addtime|formateDate}}-{{item.expireDate|formateDate}}
									</p>
									<p>作用描述：增加投资利息</p>
									<p>
										<span v-if="item.maxAmount == 0">
											投资金额≥{{item.enableAmount|maxfilter}}元
										</span>
										<span v-else>
											{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount|maxfilter}}元
										</span>
									</p>
									<div class="select"><i></i></div>
								</li>
							</ul>
							<div v-else class="no-data">暂无</div>
						</div>
						<div class="option" :style="{display:selectCoupon.name=='NDAYList'?'block':'none'}">
						<ul v-if="NDAYList.length">
							<li v-for="item in NDAYList"
								@click = setCoupon(item,'NDAYList')
								:class="{hover:selectCoupon.name=='NDAYList' && selectCoupon.obj.id == item.id}"
							>
								<em>
									{{item.raisedRates}}% &nbsp;{{item.raisedDays}}天加息券
								</em>
								<p>
									有效期：{{item.addTime|formateDate}}-{{item.expireDate|formateDate}}
								</p>
								<p>作用描述：增加投资利息</p>
								<p>
									<span v-if="item.maxAmount == null">
										投资金额≥{{item.enableAmount|maxfilter}}元
									</span>
									<span v-else>
										{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount|maxfilter}}元
									</span>
								</p>
								<div class="select"><i></i></div>
							</li>
						</ul>
						<div v-else class="no-data">暂无</div>
						</div>
					</div>
				`;
				profit = `
					<div class="profit-info">
						<div class="border">
							<dl>
								<dt>年化收益：</dt>
								<dd>
									<em v-if="parseFloat(product.activityRate)>0">
										{{parseFloat(product.realRate)}}
									</em>
									<em v-else>{{product.rate}}</em>%
									<sup v-if="parseInt(selectCoupon.obj.id)>-1 && selectCoupon.obj.type==2&& !selectCoupon.obj.maxRaisedRates">
										+{{selectCoupon.obj.raisedRates}}%
									</sup>
									<sup v-if="parseInt(selectCoupon.obj.id)>-1 && selectCoupon.obj.type==2 && selectCoupon.obj.maxRaisedRates">
										+{{selectCoupon.obj.minRaisedRates}}%~{{selectCoupon.obj.maxRaisedRates}}%
									</sup>
									<sup v-if="parseInt(selectCoupon.obj.id)>-1 && selectCoupon.obj.type==8">
										+{{selectCoupon.obj.raisedRates}}%
									</sup>
								</dd>
							</dl>
							<dl>
								<dt>预期收益：</dt>
								<dd>
									<span v-if="selectCoupon.obj.type!=1" :class="{del:profitElse}"><em>{{profit}}</em> 元</span>
									<span v-if="profitElse" v-html="profitElse"></span>
								</dd>
							</dl>
							<dl>
								<dt>实际付款金额：</dt>
								<dd><em>{{num|toNumber2}}</em>元</dd>
							</dl>
						</div>
					</div>
				`;
			if(location.href.search("newhand")>-1){
				$(`
				<div class="child">
					<pop ref="pop" :obj="win" :close-callback="closePop" :closePop="closePop">
						<h2 slot="title">确认投资</h2>
						<div slot="content" style="width:900px">
					       `+productnewhand+`
					    </div>
					    <div slot='footer'>
					    	<div class="error" :class="{cur:error}">{{errorMsg}}</div>
					        <div class='input' @click="clearError">
					            交易密码 : <input type='password' v-model="password" maxlength="6">
					        </div>
					        <div @click="submit" class="btn" :class="{gray:!btnStatus}" >{{btnName}}</div>
					        <a class='forget' href='/main/myAccount/security'>忘记密码？</a>
						</div>
					</pop>
				</div>
			`).appendTo('body');
			}else{
				$(`
				<div class="child">
					<pop ref="pop" :obj="win" :close-callback="closePop" :closePop="closePop">
						<h2 slot="title">确认投资</h2>
					    <div slot="content" style="width:900px">
					       `+product+`
							<div class="coupon form">
								<div class="item">
									<div class="txt">使用优惠信息</div>
									<div class="cnt">
										<div class="menu">
											<ul>
												<li :class="{cur:selectCoupon.name=='VIPList'}">VIP特权 {{VIPList.length}}</li>
												<li :class="{cur:selectCoupon.name=='FXList'}">返现券 {{FXList.length}}</li>
												<li :class="{cur:selectCoupon.name=='QList'}">加息券 {{QList.length}}</li>
												<li :class="{cur:selectCoupon.name=='ZSQList'}">专属加息券 {{ZSQList.length}}</li>
												<!--<li :class="{cur:selectCoupon.name=='FBQList'}" class="last">翻倍券 {{FBQList.length}}</li>-->
												<li :class="{cur:selectCoupon.name=='CJQList'}">超级加息券 {{CJQList.length}}</li>
												<li :class="{cur:selectCoupon.name=='NDAYList'}" class="last">N天加息券 {{NDAYList.length}}</li>
											</ul>
										</div>
										`+effect+`
									</div>
								</div>
							</div>
							`+profit+`
					    </div>
					    <div slot='footer'>
					    	<div class="error" :class="{cur:error}">{{errorMsg}}</div>
					        <div class='input' @click="clearError">
					            交易密码 : <input type='password' v-model="password" maxlength="6">
					        </div>
					        <div @click="submit" class="btn" :class="{gray:!btnStatus}" >{{btnName}}</div>
					        <a class='forget' href='/main/myAccount/security'>忘记密码？</a>
						</div>
					</pop>
				</div>
			`).appendTo('body');
			}
			new Vue({
				el: '.child',
				data(){
					return {
						win : {
							title : true,
							close : true,
							footer: true,
						},
						btnName : "确认投资",
						btnStatus : true,
						num : self.num,
						product : self.map.info,
						quan : '',

						errorMsg : "",
						error : false,

						selectCoupon : {
							name : 'VIPList',
							num : -1,
							obj : {
								id : -1
							}
						},
						VIPList : [], //VIP特权
						FXList : [] , //返现券
						QList : [], //加息券
						ZSQList : [], //专属加息券
						FBQList : [],//翻倍券
                        CJQList:[],//超级加息券
						NDAYList:[],//n天加息券

						profit : self.profit, //预计收益
						profitElse : null, //返现，优惠券等

						password : '',//密码
                        cjrate:0,//超级加息券利率
						cjprofit:0,//超级加息券收益
					}
				},
				watch : {
					selectCoupon : function( select ){
						let tach = this,
							obj = select.obj ,
							product = this.product ,
							num = null;
                        var  cjqrate=obj.raisedRates;
						if(obj.id>-1){
							if(obj.type==1){
								if(product.daysOfExtraActivityInterest<product.deadline){
                                    num = "<em>"+T.isNumber2((product.rate)/100 / 365 * tach.num * product.deadline+ product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest)+"</em>";
								}else{
                                    num = "<em>"+T.isNumber2((product.rate + product.activityRate)/100 / 365 * tach.num * product.deadline)+"</em>";
								}
								num += "(投资生效后，返现收益将返回您资产账户 <span class='red'>"+T.isNumber2(obj.amount)+"</span>元)";
							}else if(obj.type==2){
                                if(obj.maxRaisedRates){//超级加息券
									if(product.daysOfExtraActivityInterest<product.deadline){
                                        num = "<em>"+T.isNumber2((product.rate)/100 / 365 * tach.num * product.deadline+ product.activityRate/100/365*tach.num * product.daysOfExtraActivityInterest + (obj.minRaisedRates/100 / 365 * tach.num * product.deadline))+"~"+T.isNumber2((product.rate )/100 / 365 * tach.num * product.deadline+product.activityRate/100/365*tach.num * product.daysOfExtraActivityInterest + (obj.maxRaisedRates/100 / 365 * tach.num * product.deadline))+"</em>元";
									}else{
                                        num = "<em>"+T.isNumber2((product.rate)/100 / 365 * tach.num * product.deadline+product.activityRate/100/365*tach.num * product.daysOfExtraActivityInterest + (obj.minRaisedRates/100 / 365 * tach.num * product.deadline))+"~"+T.isNumber2((product.rate)/100 / 365 * tach.num * product.deadline+product.activityRate/100/365*tach.num * product.daysOfExtraActivityInterest + (obj.maxRaisedRates/100 / 365 * tach.num * product.deadline))+"</em>元";
									}
                                }else{
                                    num = "<em>"+T.isNumber2((product.rate/100 / 365 * tach.num * product.deadline)+(product.activityRate/100/365*tach.num * product.daysOfExtraActivityInterest) + (obj.raisedRates/100 / 365 * tach.num * product.deadline))+"</em>元";
                                }
							}else if(obj.type==3){
								num = "<em>"+T.isNumber2((product.rate+obj.raisedRates)/100 / 365 * tach.num * product.deadline)+"</em>元";
							}else if (obj.type==8){//n天加息
								if(product.daysOfExtraActivityInterest<product.deadline){
									if(obj.raisedDays<product.deadline){
                                        num = "<em>"+T.isNumber2(product.rate/100 / 365 * tach.num * product.deadline +(product.activityRate/100 / 365 * tach.num * product.daysOfExtraActivityInterest)+ (obj.raisedRates/100 / 365 * tach.num * obj.raisedDays))+"</em>元"
									}else{
                                        num = "<em>"+T.isNumber2(product.rate/100 / 365 * tach.num * product.deadline +(product.activityRate/100 / 365 * tach.num * product.daysOfExtraActivityInterest)+ (obj.raisedRates/100 / 365 * tach.num * product.deadline))+"</em>元"
									}
								}else{
									if(obj.raisedDays<product.deadline){
                                        num = "<em>"+T.isNumber2(product.rate/100 / 365 * tach.num * product.deadline +(product.activityRate/100 / 365 * tach.num * product.deadline)+ (obj.raisedRates/100 / 365 * tach.num * obj.raisedDays))+"</em>元"
									}else{
                                        num = "<em>"+T.isNumber2(product.rate/100 / 365 * tach.num * product.deadline +(product.activityRate/100 / 365 * tach.num * product.deadline)+ (obj.raisedRates/100 / 365 * tach.num * product.deadline))+"</em>元"
									}
								}
							}
							/*else if(obj.type==4){
								num = "<em>"+T.isNumber2((product.rate/100 / 365 * tach.num * product.deadline) * obj.multiple + (product.activityRate/100 / 365 * tach.num * product.deadline))+'</em>元';
								num += "(已加翻倍金<span class='red'>收益</span>)"
							}*/
							else{
								num = null;
							}
						}
                        Vue.prototype.cjrate=obj.maxRaisedRates?cjqrate:null;//超级加息券利率
                        Vue.prototype.cjprofit=obj.maxRaisedRates?T.isNumber2((product.rate)/100 / 365 * tach.num * product.deadline +(product.activityRate/100/365*tach.num * product.daysOfExtraActivityInterest)+ (obj.raisedRates/100 / 365 * tach.num * product.deadline)):null;//超级加息券利率
						tach.profitElse = num?num:null;
					}
				},
				filters : {
					toNumber2(n){
						return T.isNumber2(n);
					},
					maxfilter(n){
						return T.maxfilter(10000,n);
					},
					formateDate(val){
						return new Date(val).Format("yyyy.MM.dd");
					}
				},
				mounted(){
					this.$refs.pop.show();
					if(location.href.search("newhand")>-1){//新手宝不显示优惠卷

					}else{
						if(self.map.info.type!=1){
							this.getList();
						};
						this.setTab();
					}
				},
				methods:{
					clearError(){
						this.error = false;
					},
					showError(val){
						this.errorMsg = val;
						this.error = true;
					},
					getList(){
						let tach = this;
						T.ajax({
							url:"/usable",
							data : {
								amount:self.num,
								pid:self.id
							},
							success : function( data) {
								if(!data.map.list) return;
								data.map.list.map(obj=>{
									if(obj.type==1){//返现券
										tach.FXList.push(obj);
										tach.getIntCoupon({
											num : obj.amount,
											name : 'FXList',
											obj : obj
										});
									}else if(obj.type==2){//加息
										let num = obj.raisedRates/100 / 365 * tach.num * tach.product.deadline;
										if(obj.source==4){
											tach.VIPList.push(obj);
											tach.getIntCoupon({
												num : num,
												name : 'VIPList',
												obj : obj
											});
										}else{
											if(obj.maxProductDeadline!=0){//专属加息券
												tach.ZSQList.push(obj);
												tach.getIntCoupon({
													num : num,
													name : 'ZSQList',
													obj : obj
												});
											}
											if(obj.maxProductDeadline==0){ //加息券
												tach.QList.push(obj);
												tach.getIntCoupon({
													num : num,
													name : 'QList',
													obj : obj
												});
											}
										}
									}
									/*else if(obj.type==8){//n天加息券
										tach.NDAYList.push(obj);
										tach.getIntCoupon({
											num : num,
											name : 'NDAYList',
											obj : obj
										});
									}*/
									// else if(obj.type==4){//翻倍券
									// 	if(obj.source==0){
									// 		tach.FBQList.unshift(obj);
									// 	}else{
									// 		tach.FBQList.push(obj);
									// 	}
									// 	tach.getIntCoupon({
									// 		num : (tach.product.rate/100 / 365 * tach.num * tach.product.deadline) * obj.multiple,
									// 		name : 'FBQList',
									// 		obj : obj
									// 	});
									// }
								});
                                data.map.superList.map(obj=>{
                                    let num = obj.raisedRates/100 / 365 * tach.num * tach.product.deadline
                                    tach.CJQList.push(obj);
                                tach.getIntCoupon({
                                    num:num,
                                    name:'CJQList',
                                    obj:obj
                                	})
                            	})
								data.map.nDaylist.map(obj=>{
                                    let num = obj.raisedRates/100 / 365 * tach.num * tach.product.deadline;
                                    tach.NDAYList.push(obj);
                                tach.getIntCoupon({
                                    num:num,
                                    name:'NDAYList',
                                    obj:obj
                                	})
                            	})
							}
						});
					},
					clearSelectCoupon( name ){
						this.selectCoupon = {
							name : name || null,
							num : -1,
							obj : {
								id : -1
							}
						}
					},
					setCoupon( obj , name ){
						if(obj.id==this.selectCoupon.obj.id){
							this.clearSelectCoupon(this.selectCoupon.name);
						}else{
							this.selectCoupon = {
								obj : obj,
								name : name
							};
						}

					},
					getIntCoupon( obj ){
						if(obj.num>this.selectCoupon.num){
							this.selectCoupon = obj;
						}
					},
					verification(){
						if(this.password==''){
							this.showError("请输入密码");
							return false;
						}else if(this.password.length<4){
							this.showError("请输入正确的密码");
							return false;
						}
						return true;
					},
					submit(){
						let tach = this;
						if(!this.verification()) return;
						this.btnStatus = false;
						this.btnName = "投资中请勿操作";
						if(location.href.search("newhand")>-1){
							let obj = {
								amount:self.num,
								password : this.password
							};
							T.ajax({
								url:"/v1/current/purchase.do",
								data : obj,
								success : function( data ) {
									tach.$refs.pop.close();
									if(data.success){
										tach.$refs.pop.close();
										this.btnName = "已投资";
										self.paySuccse(data);
									}else{
										this.btnStatus = true;
										self.payError(data);
									}
								}
							});
						}else{
							let obj = {
								amount:self.num,
								pid:self.id,
								tpwd : this.password
							};
							if(tach.selectCoupon.obj.id>-1){
								obj.fid = tach.selectCoupon.obj.id;
							}
							T.ajax({
								url:"/invest",
								data : obj,
								success : function( data ) {
									tach.$refs.pop.close();
									if(data.success){
										tach.$refs.pop.close();
										this.btnName = "已投资";
										self.paySuccse(data);
									}else{
										this.btnStatus = true;
										self.payError(data);
									}
								}
							});
						}

					},
					closePop(){
						self.btnClass = false;
					},
					setTab(){
						let tab = $(this.$el).find(".coupon .menu li") ,
							cnt = $(this.$el).find(".effect .option");
						tab.each(function( i ){
							this.onclick = function(){
								tab.removeClass("cur");
								$(this).addClass("cur");
								cnt.slideUp();
								cnt.eq(i).slideDown();
							}
						})
					}
				}
			});
		},
		payError(data){
			let self = this ,
				newhand = location.href.search("newhand")>-1,
				msg = newhand?data.errorMsg:T.errorMsg(data.errorCode),
				message=newhand?`<div >
					       		<p>{{msg}}，请一小时后再试，</p>
					       		<p>或 <a class="red" href="/main/myAccount/security">找回密码</a> 解锁</p>
							</div>`:`<p v-if="data.errorCode!='2001'">{{msg}}</p>
					       	<div v-else>
					       		<p>{{msg}}，请一小时后再试，</p>
					       		<p>或 <a class="red" href="/main/myAccount/security">找回密码</a> 解锁</p>
							</div>`;
				$(`
				<div class="child1">
					<pop ref="pop" :obj="win">
					    <div slot="title">
					    	<h2>投资信息</h2>
					    </div>
					    <div slot="content" class="errorPop">
					    	<h2>
					    		<i></i>
					    		投资错误
					    	</h2>
					    	`+message+`
					    </div>
					    <div slot='footer'>
					        <div @click="close" class="btn" >确定</div>
						</div>
					</pop>
				</div>
			`).appendTo('body');
				new Vue({
					el: '.child1',
					data(){
						return {
							win : {
								title : true,
								footer: true,
								close : true,
							},
							data : data,
							msg : msg
						}
					},
					mounted(){
						this.$refs.pop.show();
						if(data.errorCode=='2001' && !newhand){
							self.btnClass = true;
							self.btnName = "支付密码已锁定"
						}
					},
					methods : {
						close(){
							this.$refs.pop.close();
						}
					}
				});

		},
		paySuccse( data ){
			let self = this,
				newhand=location.href.search("newhand")>-1,
				successMsg=newhand?`<li class="li_2">
					    				<p class="name">计算收益</p>
					    				<p class="time">{{nextInvestTime|formateDate}}</p>
									</li>
									<li class="li_3">
					    				<p class="name">收益到账</p>
					    				<p class="time">{{expireDate|formateDate}}</p>
									</li>`:`<li class="li_2">
					    				<p class="name">产品起息</p>
					    				<p class="time">{{nextInvestTime|formateDate}}</p>
									</li>
									<li class="li_3">
					    				<p class="name">产品到期</p>
					    				<p class="time">{{expireDate|formateDate}}</p>
									</li>`,
				expireDate=newhand?data.map.investTime+86400000+86400000:self.expireDate;
				$(`
				<div class="child2">
					<pop ref="pop" :obj="win" :close-callback="closeCallback">
					    <div slot="title">
					    	<h2>投资信息</h2>
					    </div>
					    <div slot="content" class="succsePop">
					    	<h2>
					    		<i></i>
					    		恭喜您！投资成功！
					    	</h2>
					    	<div class='rate' v-show='cjrate'>恭喜!您的超级加息券产生了<span class='rateNumber' style="font-size: 20px;">{{cjrate}}%</span>的加息,预计收益<span class='rateNumber' style="font-size: 20px;">{{cjprofit}}元</span></div>
					    	<div class="cnt">
					    		<div class="img"></div>
					    		<ul>
					    			<li class="li_1">
					    				<p class="name">投资成功</p>
					    				<p class="time">{{investTime|formateDate}}</p>
									</li>
									`+successMsg+`
								</ul>
							</div>
					    </div>
					</pop>
				</div>
			`).appendTo('body');

				new Vue({
					el: '.child2',
					data(){
						return {
							win : {
								title : true,
								close : true,
							},
							investTime :data.map.investTime,
							nextInvestTime :data.map.investTime+86400000,
							expireDate : expireDate,
                            cjrate:self.cjrate,
                            cjprofit:self.cjprofit
						}
					},
					mounted(){
						this.$refs.pop.show();
					},
					methods : {
						close(){
							this.$refs.pop.close();
						},
						closeCallback(){
							location.reload();
						}
					},
					filters : {
						formateDate(val){
							return new Date(val).Format("yyyy.MM.dd")
						}
					}
				});
		}
	}
});

