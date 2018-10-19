"use strict";new Vue({el:"#APP",delimiters:["${","}"],data:function data(){return{isLogin:false,id:"",map:null,num:"",addClass:false,delClass:false,info:null,funds:"",investList:null,hisList:null,check:true,profit:0,btnName:"立即投资",expireDate:0,isShowShouyi:false,error:false,errorMsg:"",btnClass:false,investmentTab:1,showExplain:true,protocols:""}},mounted:function mounted(){if(location.href.search("billDetal_html_")>-1){T.setNavCurrent("dq")}else if(location.href.search("newhand")>-1){T.setNavCurrent("aa")}else{T.setNavCurrent("pj")}this.userInfo();this.tips()},watch:{num:function num(val){var map=this.map;if(location.href.search("newhand")>-1){var funds=map.currentInfo,num=0;num=T.toInt(val);this.num=num;if(funds.balance<funds.leastPurchaseAmount||funds.balance-this.num<0||funds.maxPurchaseAmount-this.num<=0){this.addClass=true}else{this.addClass=false}if(num<=100){this.delClass=true}else{this.delClass=false}}else{var _funds=map.funds;var product=map.info,_num=0;_num=T.toInt(val);this.num=_num;if(!this.isShowShouyi){if(product.daysOfExtraActivityInterest<product.deadline){this.profit=T.isNumber2(product.rate/100/365*_num*product.deadline+product.activityRate/100/365*_num*product.daysOfExtraActivityInterest)}else{this.profit=T.isNumber2((product.rate+product.activityRate)/100/365*_num*product.deadline)}}else{if(product.daysOfExtraActivityInterest<product.deadline){this.profit=T.isNumber2(_num*(product.rate/100+repair.content/100)/365*product.deadline+_num*product.activityRate/100/365*product.daysOfExtraActivityInterest)}else{this.profit=T.isNumber2(_num*(product.rate/100+product.activityRate/100+repair.content/100)/365*product.deadline)}}if(_funds.balance<product.leastaAmount||_funds.balance-this.num<0){this.addClass=true}else{this.addClass=false}if(_num<=100){this.delClass=true}else{this.delClass=false}}this.getInvestment()},check:function check(val){if(location.href.search("newhand")>-1){if(val){if(!this.currentInfo){this.clearEvent()}}}else{if(val){if(this.info.isRookie!=1||!this.info){this.clearEvent()}}}}},filters:{isNumber2:function isNumber2(n){return T.isNumber2(n)},toLocaleString:function toLocaleString(val,num){var n=parseFloat(val).toLocaleString();if(num==2){n=n+".00"}return n}},methods:{goTop:function goTop(){T.goTop()},isShowNay:function isShowNay(){this.showExplain=!this.showExplain},clearEvent:function clearEvent(){this.error=false;this.btnClass=false},showError:function showError(val){this.error=true;this.errorMsg=val;this.btnClass=true},getInvestment:function getInvestment(callback){if(this.btnName=="已投资")return;if(location.href.search("newhand")>-1){var map=this.map,funds=map.currentInfo;if(!this.num||this.num<1){return this.showError("请输入投资金额")}else if(this.num%100!=0){return this.showError("投资金额为100倍数")}else if(funds.maxPurchaseAmount<this.num){return this.showError("理财产品金额不足")}else if(funds.isInvested==1&&funds.isPurchased==0){return this.showError("您已不是新手")}else if(funds.isPurchased==1){return this.showError("您已投资")}else if(funds.balance<funds.leastPurchaseAmount||funds.balance-this.num<0){return this.showError("用户余额不足")}else if(!this.check){return this.showError("请同意《活期投资协议》")}else{this.clearEvent()}}else{var _map=this.map,_funds2=_map.funds,product=this.map.info;if(!this.num||this.num<1){return this.showError("请输入投资金额")}else if(this.num%100!=0){return this.showError("投资金额为100倍数")}else if(product.surplusAmount<this.num){return this.showError("理财产品金额不足")}else if(_funds2.balance<product.leastaAmount||_funds2.balance-this.num<0){return this.showError("用户余额不足")}else if(!_map.newHands&&product.isRookie==1){return this.showError("您已投资")}else if(!this.check){return this.showError("请同意《定向委托投资协议》")}else{this.clearEvent()}}callback&&callback()},login:function login(){T.go.login()},userInfo:function userInfo(){this.isLogin=T.getLocalInfo();if(location.href.search("newhand")>-1){if(this.isLogin){this.getDetail();this.getPageList({pageOn:1,pageSize:10})}}else{this.id=T.getID();if(this.isLogin){this.getDetail();this.getPageList({pageOn:1,pageSize:10,pid:this.id})}}},getDetail:function getDetail(){var self=this;if(location.href.search("newhand")>-1){T.ajax({url:"/v1/current/product/info.do",data:{},success:function success(data){self.map=data.map;self.funds=data.map.currentInfo;if(self.funds.isInvested==1&&self.funds.isPurchased==0){self.btnClass=true;self.btnName="您已不是新手";self.delClass=true;self.addClass=true}if(self.funds.isPurchased==1){self.btnClass=true;self.btnName="您已投资";self.delClass=true;self.addClass=true}}})}else{T.ajax({url:"/detail",data:{id:this.id},success:function success(_data){if(_data.errorCode=="1001"){$('\n\t\t\t\t\t\t\t<div class="child">\n\t\t\t\t\t\t        <pop ref="img" :obj="win" :closeCallback="closeCallback">\n\t\t\t\t\t\t\t\t    <h2 slot="title">错误</h2>\n\t\t\t\t\t\t\t\t    <div slot="content" style="padding:20px; text-align:center;">\n\t\t\t\t\t\t\t\t        {{msg}}\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t    </pop>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t    ').appendTo("body");new Vue({el:".child",data:function data(){return{msg:_data.errorMsg,win:{title:true,close:true}}},mounted:function mounted(){this.$refs.img.show()},methods:{closeCallback:function closeCallback(){location.href="/"}}});return false}self.map=_data.map;self.funds=_data.map.funds;self.info=_data.map.info;self.product=_data.map.info;self.expireDate=self.info.expireDate-864e5;if(_data.map.productContract){self.protocols=_data.map.productContract.contractTemplateList}if(self.info.type==6){if(!self.map.newHands){if(self.info.isRookie==1){self.btnClass=true;self.btnName="已投资"}}else{}}else if(self.info.type==2||self.info.type==5){var nowTimer="";if(self.info.establish!=undefined){var date3=self.info.establish-Date.parse(new Date);var day=Math.floor(date3/(24*3600*1e3));var hh=Math.floor(date3/(3600*1e3));if(day>0){nowTimer=day+"天"}else if(day==0&&hh>1){nowTimer=hh+"小时"}else if(day==0&&hh<1){nowTimer="1小时内"}else if(hh<0){nowTimer="已结束"}}else{nowTimer="已结束"}self.info.nowTimer=nowTimer}if(_data.map.repair&&self.info.isRepair==1&&self.info.repair.type==1){self.isShowShouyi=true}self.$nextTick(function(){self.slide()})}})}},add:function add(){if(this.addClass)return;if(this.num==void 0||this.num==""){this.num=0}this.num=parseInt(this.num);if(location.href.search("newhand")>-1){var surplusAmount=parseInt(this.map.currentInfo.maxPurchaseAmount);if(this.num>=surplusAmount){this.num=surplusAmount;this.addClass=true}else{this.num+=this.map.currentInfo.increasedAmount}}else{var _surplusAmount=parseInt(this.map.info.surplusAmount);if(this.num>=_surplusAmount){this.num=_surplusAmount}else{this.num+=this.map.info.increasAmount}}},del:function del(){if(this.delClass)return;if(this.num==void 0||this.num==""){this.num=0}if(location.href.search("newhand")>-1){var leastaAmount=parseInt(this.map.currentInfo.leastPurchaseAmount);if(this.num<=leastaAmount){this.num=leastaAmount}else{this.num-=this.map.currentInfo.increasedAmount}}else{var _leastaAmount=parseInt(this.map.info.leastaAmount);if(this.num<=_leastaAmount){this.num=_leastaAmount}else{this.num-=this.map.info.increasAmount}}},recharge:function recharge(){T.go.recharge()},showPic:function showPic(item){$('\n\t\t\t\t<div class="child">\n\t\t\t        <pop ref="img" :obj="win">\n\t\t\t\t\t    <h2 slot="title">产品资料</h2>\n\t\t\t\t\t    <div slot="content">\n\t\t\t\t\t        <img :src="bigUrl">\n\t\t\t\t\t    </div>\n\t\t\t\t    </pop>\n\t\t\t    </div>\n\t\t    ').appendTo("body");new Vue({el:".child",data:function data(){return{bigUrl:item.pic,win:{title:true,close:true}}},mounted:function mounted(){this.$refs.img.show()}})},slide:function slide(){$(".img-detail").slide({mainCell:".swiper-container ul",effect:"left",trigger:"click",vis:3,prevCell:".bill-turn-left",nextCell:".bill-turn-right",pnLoop:false})},tips:function tips(){layui.use("layer",function(){var layer=layui.layer,index=void 0;$(".tag-tips").each(function(){$(this).mouseover(function(){$(this).addClass("currentTips");index=layer.tips($(this).attr("data-tips"),".currentTips",{tips:1,skin:"tips",time:0})}).mouseleave(function(){layer.close(index);$(this).removeClass("currentTips")})})})},setInvestmentTab:function setInvestmentTab(item){this.investmentTab=item},getPageList:function getPageList(obj){var self=this;if(location.href.search("newhand")>-1){T.ajax({url:"/v1/current/purchase-Record.do",data:obj,success:function success(data){if(data.errorCode=="9999")return;self.hisList=data.map.page;self.investList=data.map.page.rows;self.pageChange(obj,data.map.page)}})}else{T.ajax({url:"/depositsHistory",data:obj,success:function success(data){if(data.errorCode=="9999")return;self.hisList=data.map.page;self.investList=data.map.page.rows;self.pageChange(obj,data.map.page)}})}},pageChange:function pageChange(obj,data){var self=this;layui.use(["laypage","layer"],function(){var laypage=layui.laypage;laypage.render({elem:"Page",curr:data.pageOn,limit:10,count:data.total,layout:["prev","page","next","count"],jump:function jump(_obj,first){if(!first){obj.pageOn=_obj.curr;self.getPageList(obj)}}})})},submit:function submit(){var _this=this;var self=this;if(this.btnClass)return;this.btnClass=true;T.go.openEscrowAccount(function(){_this.getInvestment(function(){self.payPop()})})},payPop:function payPop(){var self=this,effect=void 0,product=void 0,profit=void 0,productnewhand=void 0;productnewhand='\n\t\t\t\t\t<div class="product-info form">\n\t\t\t\t\t\t<div class="item">\n\t\t\t\t\t\t\t<div class="txt">产品信息</div>\n\t\t\t\t\t\t\t<div class="cnt">\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt>产品名称：</dt>\n\t\t\t\t\t\t\t\t\t<dd>新手宝</dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt>还款方式：</dt>\n\t\t\t\t\t\t\t\t\t<dd>每日收益到账</dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt>投资总额：</dt>\n\t\t\t\t\t\t\t\t\t<dd><b>{{num|toNumber2}}</b> 元<div class="quan" v-html="quan"></div></dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t';product='\n\t\t\t\t\t<div class="product-info form">\n\t\t\t\t\t\t<div class="item">\n\t\t\t\t\t\t\t<div class="txt">产品信息</div>\n\t\t\t\t\t\t\t<div class="cnt">\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt>产品名称：</dt>\n\t\t\t\t\t\t\t\t\t<dd>{{product.fullName}}</dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt>项目期限：</dt>\n\t\t\t\t\t\t\t\t\t<dd><b>{{product.deadline}}</b>天</dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt>还款方式：</dt>\n\t\t\t\t\t\t\t\t\t<dd>{{product.refundType}}到期还本付息</dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t<dt>投资总额：</dt>\n\t\t\t\t\t\t\t\t\t<dd><b>{{num|toNumber2}}</b> 元<div class="quan" v-html="quan"></div></dd>\n\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t';effect='\n\t\t\t\t\t<div class="effect">\n\t\t\t\t\t\t<div class="option" :style="{display:selectCoupon.name==\'VIPList\'?\'block\':\'none\'}">\n\t\t\t\t\t\t\t<a class="aside" href="/main/myAccount/vipAbout" target="_blank">什么是特权？</a>\n\t\t\t\t\t\t\t<ul v-if="VIPList.length">\n\t\t\t\t\t\t\t\t<li v-for="item in VIPList"\n\t\t\t\t\t\t\t\t\t@click = setCoupon(item,\'VIPList\')\n\t\t\t\t\t\t\t\t\t:class="{hover:selectCoupon.name==\'VIPList\' && selectCoupon.obj.id == item.id}"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<em><b>{{item.raisedRates}}%</b>　<span>加息特权</span></em>\n\t\t\t\t\t\t\t\t\t<p>剩余特权次数：1</p>\n\t\t\t\t\t\t\t\t\t<p>作用描述：投资成功返现</p>\n\t\t\t\t\t\t\t\t\t<div class="select"><i></i></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div v-else class="no-data">暂无</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="option" :style="{display:selectCoupon.name==\'FXList\'?\'block\':\'none\'}">\n\t\t\t\t\t\t\t<ul v-if="FXList.length">\n\t\t\t\t\t\t\t\t<li \n\t\t\t\t\t\t\t\t\tv-for="item in FXList" \n\t\t\t\t\t\t\t\t\t@click = setCoupon(item,\'FXList\')\n\t\t\t\t\t\t\t\t\t:class="{hover:selectCoupon.name==\'FXList\' && selectCoupon.obj.id == item.id}"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<em><b>{{item.amount}}</b>元 <span>返现券</span></em>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t有效期：{{item.addtime|formateDate}}-{{item.expireDate|formateDate}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>作用描述：投资成功返现</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span v-if="item.maxAmount == 0">\n\t\t\t\t\t\t\t\t\t\t\t投资金额≥{{item.enableAmount|maxfilter}}元\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span v-else>\n\t\t\t\t\t\t\t\t\t\t\t{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount|maxfilter}}元\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<div class="select"><i></i></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div v-else class="no-data">暂无</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="option" :style="{display:selectCoupon.name==\'QList\'?\'block\':\'none\'}">\n\t\t\t\t\t\t\t<ul v-if="QList.length">\n\t\t\t\t\t\t\t\t<li v-for="item in QList"\n\t\t\t\t\t\t\t\t\t@click = setCoupon(item,\'QList\')\n\t\t\t\t\t\t\t\t\t:class="{hover:selectCoupon.name==\'QList\' && selectCoupon.obj.id == item.id}"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<em><b>{{item.raisedRates}}%</b> <span>加息券</span></em>\n\t\t\t\t\t\t\t\t\t<p>有效期：{{item.addtime|formateDate}}-{{item.expireDate|formateDate}}</p>\n\t\t\t\t\t\t\t\t\t<p>作用描述：增加投资利息</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span v-if="item.maxAmount == 0">\n\t\t\t\t\t\t\t\t\t\t\t投资金额≥{{item.enableAmount|maxfilter}}元\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span v-else>\n\t\t\t\t\t\t\t\t\t\t\t{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount}}元\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<div class="select"><i></i></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div v-else class="no-data">暂无</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="option" :style="{display:selectCoupon.name==\'ZSQList\'?\'block\':\'none\'}">\n\t\t\t\t\t\t\t<ul v-if="ZSQList.length">\n\t\t\t\t\t\t\t\t<li v-for="item in ZSQList"\n\t\t\t\t\t\t\t\t\t@click = setCoupon(item,\'ZSQList\')\n\t\t\t\t\t\t\t\t\t:class="{hover:selectCoupon.name==\'ZSQList\' && selectCoupon.obj.id == item.id}"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<em>\n\t\t\t\t\t\t\t\t\t\t<b>{{item.raisedRates}}%</b> <span>专属加息券</span>\n\t\t\t\t\t\t\t\t\t</em>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t有效期：{{item.addtime|formateDate}}-{{item.expireDate|formateDate}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>作用描述：增加投资利息</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span v-if="item.maxAmount == 0">\n\t\t\t\t\t\t\t\t\t\t\t投资金额≥{{item.enableAmount|maxfilter}}元\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span v-else>\n\t\t\t\t\t\t\t\t\t\t\t{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount|maxfilter}}元\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<div class="select"><i></i></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div v-else class="no-data">暂无</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="option" :style="{display:selectCoupon.name==\'CJQList\'?\'block\':\'none\'}">\n\t\t\t\t\t\t\t<ul v-if="CJQList.length">\n\t\t\t\t\t\t\t\t<li v-for="item in CJQList"\n\t\t\t\t\t\t\t\t\t@click = setCoupon(item,\'CJQList\')\n\t\t\t\t\t\t\t\t\t:class="{hover:selectCoupon.name==\'CJQList\' && selectCoupon.obj.id == item.id}"\n\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t<em>\n\t\t\t\t\t\t\t\t\t\t{{item.minRaisedRates}}%~{{item.maxRaisedRates}}%超级加息券\n\t\t\t\t\t\t\t\t\t</em>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t有效期：{{item.addtime|formateDate}}-{{item.expireDate|formateDate}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<p>作用描述：增加投资利息</p>\n\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t<span v-if="item.maxAmount == 0">\n\t\t\t\t\t\t\t\t\t\t\t投资金额≥{{item.enableAmount|maxfilter}}元\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t<span v-else>\n\t\t\t\t\t\t\t\t\t\t\t{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount|maxfilter}}元\n\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t\t<div class="select"><i></i></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div v-else class="no-data">暂无</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="option" :style="{display:selectCoupon.name==\'NDAYList\'?\'block\':\'none\'}">\n\t\t\t\t\t\t<ul v-if="NDAYList.length">\n\t\t\t\t\t\t\t<li v-for="item in NDAYList"\n\t\t\t\t\t\t\t\t@click = setCoupon(item,\'NDAYList\')\n\t\t\t\t\t\t\t\t:class="{hover:selectCoupon.name==\'NDAYList\' && selectCoupon.obj.id == item.id}"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<em>\n\t\t\t\t\t\t\t\t\t{{item.raisedRates}}% &nbsp;{{item.raisedDays}}天加息券\n\t\t\t\t\t\t\t\t</em>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t有效期：{{item.addTime|formateDate}}-{{item.expireDate|formateDate}}\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p>作用描述：增加投资利息</p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<span v-if="item.maxAmount == null">\n\t\t\t\t\t\t\t\t\t\t投资金额≥{{item.enableAmount|maxfilter}}元\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t<span v-else>\n\t\t\t\t\t\t\t\t\t\t{{item.enableAmount|maxfilter}}元≤投资金额≤{{item.maxAmount|maxfilter}}元\n\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<div class="select"><i></i></div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<div v-else class="no-data">暂无</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t';profit='\n\t\t\t\t\t<div class="profit-info">\n\t\t\t\t\t\t<div class="border">\n\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t<dt>年化收益：</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t<em v-if="parseFloat(product.activityRate)>0">\n\t\t\t\t\t\t\t\t\t\t{{parseFloat(product.realRate)}}\n\t\t\t\t\t\t\t\t\t</em>\n\t\t\t\t\t\t\t\t\t<em v-else>{{product.rate}}</em>%\n\t\t\t\t\t\t\t\t\t<sup v-if="parseInt(selectCoupon.obj.id)>-1 && selectCoupon.obj.type==2&& !selectCoupon.obj.maxRaisedRates">\n\t\t\t\t\t\t\t\t\t\t+{{selectCoupon.obj.raisedRates}}%\n\t\t\t\t\t\t\t\t\t</sup>\n\t\t\t\t\t\t\t\t\t<sup v-if="parseInt(selectCoupon.obj.id)>-1 && selectCoupon.obj.type==2 && selectCoupon.obj.maxRaisedRates">\n\t\t\t\t\t\t\t\t\t\t+{{selectCoupon.obj.minRaisedRates}}%~{{selectCoupon.obj.maxRaisedRates}}%\n\t\t\t\t\t\t\t\t\t</sup>\n\t\t\t\t\t\t\t\t\t<sup v-if="parseInt(selectCoupon.obj.id)>-1 && selectCoupon.obj.type==8">\n\t\t\t\t\t\t\t\t\t\t+{{selectCoupon.obj.raisedRates}}%\n\t\t\t\t\t\t\t\t\t</sup>\n\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t<dt>预期收益：</dt>\n\t\t\t\t\t\t\t\t<dd>\n\t\t\t\t\t\t\t\t\t<span v-if="selectCoupon.obj.type!=1" :class="{del:profitElse}"><em>{{profit}}</em> 元</span>\n\t\t\t\t\t\t\t\t\t<span v-if="profitElse" v-html="profitElse"></span>\n\t\t\t\t\t\t\t\t</dd>\n\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t<dt>实际付款金额：</dt>\n\t\t\t\t\t\t\t\t<dd><em>{{num|toNumber2}}</em>元</dd>\n\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t';if(location.href.search("newhand")>-1){$('\n\t\t\t\t<div class="child">\n\t\t\t\t\t<pop ref="pop" :obj="win" :close-callback="closePop" :closePop="closePop">\n\t\t\t\t\t\t<h2 slot="title">确认投资</h2>\n\t\t\t\t\t\t<div slot="content" style="width:900px">\n\t\t\t\t\t       '+productnewhand+'\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div slot=\'footer\'>\n\t\t\t\t\t    \t<div class="error" :class="{cur:error}">{{errorMsg}}</div>\n\t\t\t\t\t        <div class=\'input\' @click="clearError">\n\t\t\t\t\t            交易密码 : <input type=\'password\' v-model="password" maxlength="6">\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div @click="submit" class="btn" :class="{gray:!btnStatus}" >{{btnName}}</div>\n\t\t\t\t\t        <a class=\'forget\' href=\'/main/myAccount/security\'>忘记密码？</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</pop>\n\t\t\t\t</div>\n\t\t\t').appendTo("body")}else{$('\n\t\t\t\t<div class="child">\n\t\t\t\t\t<pop ref="pop" :obj="win" :close-callback="closePop" :closePop="closePop">\n\t\t\t\t\t\t<h2 slot="title">确认投资</h2>\n\t\t\t\t\t    <div slot="content" style="width:900px">\n\t\t\t\t\t       '+product+'\n\t\t\t\t\t\t\t<div class="coupon form">\n\t\t\t\t\t\t\t\t<div class="item">\n\t\t\t\t\t\t\t\t\t<div class="txt">使用优惠信息</div>\n\t\t\t\t\t\t\t\t\t<div class="cnt">\n\t\t\t\t\t\t\t\t\t\t<div class="menu">\n\t\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{cur:selectCoupon.name==\'VIPList\'}">VIP特权 {{VIPList.length}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{cur:selectCoupon.name==\'FXList\'}">返现券 {{FXList.length}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{cur:selectCoupon.name==\'QList\'}">加息券 {{QList.length}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{cur:selectCoupon.name==\'ZSQList\'}">专属加息券 {{ZSQList.length}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\x3c!--<li :class="{cur:selectCoupon.name==\'FBQList\'}" class="last">翻倍券 {{FBQList.length}}</li>--\x3e\n\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{cur:selectCoupon.name==\'CJQList\'}">超级加息券 {{CJQList.length}}</li>\n\t\t\t\t\t\t\t\t\t\t\t\t<li :class="{cur:selectCoupon.name==\'NDAYList\'}" class="last">N天加息券 {{NDAYList.length}}</li>\n\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t'+effect+"\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t"+profit+'\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div slot=\'footer\'>\n\t\t\t\t\t    \t<div class="error" :class="{cur:error}">{{errorMsg}}</div>\n\t\t\t\t\t        <div class=\'input\' @click="clearError">\n\t\t\t\t\t            交易密码 : <input type=\'password\' v-model="password" maxlength="6">\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div @click="submit" class="btn" :class="{gray:!btnStatus}" >{{btnName}}</div>\n\t\t\t\t\t        <a class=\'forget\' href=\'/main/myAccount/security\'>忘记密码？</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</pop>\n\t\t\t\t</div>\n\t\t\t').appendTo("body")}new Vue({el:".child",data:function data(){return{win:{title:true,close:true,footer:true},btnName:"确认投资",btnStatus:true,num:self.num,product:self.map.info,quan:"",errorMsg:"",error:false,selectCoupon:{name:"VIPList",num:-1,obj:{id:-1}},VIPList:[],FXList:[],QList:[],ZSQList:[],FBQList:[],CJQList:[],NDAYList:[],profit:self.profit,profitElse:null,password:"",cjrate:0,cjprofit:0}},watch:{selectCoupon:function selectCoupon(select){var tach=this,obj=select.obj,product=this.product,num=null;var cjqrate=obj.raisedRates;if(obj.id>-1){if(obj.type==1){if(product.daysOfExtraActivityInterest<product.deadline){num="<em>"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest)+"</em>"}else{num="<em>"+T.isNumber2((product.rate+product.activityRate)/100/365*tach.num*product.deadline)+"</em>"}num+="(投资生效后，返现收益将返回您资产账户 <span class='red'>"+T.isNumber2(obj.amount)+"</span>元)"}else if(obj.type==2){if(obj.maxRaisedRates){if(product.daysOfExtraActivityInterest<product.deadline){num="<em>"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest+obj.minRaisedRates/100/365*tach.num*product.deadline)+"~"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest+obj.maxRaisedRates/100/365*tach.num*product.deadline)+"</em>元"}else{num="<em>"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest+obj.minRaisedRates/100/365*tach.num*product.deadline)+"~"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest+obj.maxRaisedRates/100/365*tach.num*product.deadline)+"</em>元"}}else{num="<em>"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest+obj.raisedRates/100/365*tach.num*product.deadline)+"</em>元"}}else if(obj.type==3){num="<em>"+T.isNumber2((product.rate+obj.raisedRates)/100/365*tach.num*product.deadline)+"</em>元"}else if(obj.type==8){if(product.daysOfExtraActivityInterest<product.deadline){if(obj.raisedDays<product.deadline){num="<em>"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest+obj.raisedRates/100/365*tach.num*obj.raisedDays)+"</em>元"}else{num="<em>"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest+obj.raisedRates/100/365*tach.num*product.deadline)+"</em>元"}}else{if(obj.raisedDays<product.deadline){num="<em>"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.deadline+obj.raisedRates/100/365*tach.num*obj.raisedDays)+"</em>元"}else{num="<em>"+T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.deadline+obj.raisedRates/100/365*tach.num*product.deadline)+"</em>元"}}}else{num=null}}Vue.prototype.cjrate=obj.maxRaisedRates?cjqrate:null;Vue.prototype.cjprofit=obj.maxRaisedRates?T.isNumber2(product.rate/100/365*tach.num*product.deadline+product.activityRate/100/365*tach.num*product.daysOfExtraActivityInterest+obj.raisedRates/100/365*tach.num*product.deadline):null;tach.profitElse=num?num:null}},filters:{toNumber2:function toNumber2(n){return T.isNumber2(n)},maxfilter:function maxfilter(n){return T.maxfilter(1e4,n)},formateDate:function formateDate(val){return new Date(val).Format("yyyy.MM.dd")}},mounted:function mounted(){this.$refs.pop.show();if(location.href.search("newhand")>-1){}else{if(self.map.info.type!=1){this.getList()}this.setTab()}},methods:{clearError:function clearError(){this.error=false},showError:function showError(val){this.errorMsg=val;this.error=true},getList:function getList(){var tach=this;T.ajax({url:"/usable",data:{amount:self.num,pid:self.id},success:function success(data){if(!data.map.list)return;data.map.list.map(function(obj){if(obj.type==1){tach.FXList.push(obj);tach.getIntCoupon({num:obj.amount,name:"FXList",obj:obj})}else if(obj.type==2){var num=obj.raisedRates/100/365*tach.num*tach.product.deadline;if(obj.source==4){tach.VIPList.push(obj);tach.getIntCoupon({num:num,name:"VIPList",obj:obj})}else{if(obj.maxProductDeadline!=0){tach.ZSQList.push(obj);tach.getIntCoupon({num:num,name:"ZSQList",obj:obj})}if(obj.maxProductDeadline==0){tach.QList.push(obj);tach.getIntCoupon({num:num,name:"QList",obj:obj})}}}});data.map.superList.map(function(obj){var num=obj.raisedRates/100/365*tach.num*tach.product.deadline;tach.CJQList.push(obj);tach.getIntCoupon({num:num,name:"CJQList",obj:obj})});data.map.nDaylist.map(function(obj){var num=obj.raisedRates/100/365*tach.num*tach.product.deadline;tach.NDAYList.push(obj);tach.getIntCoupon({num:num,name:"NDAYList",obj:obj})})}})},clearSelectCoupon:function clearSelectCoupon(name){this.selectCoupon={name:name||null,num:-1,obj:{id:-1}}},setCoupon:function setCoupon(obj,name){if(obj.id==this.selectCoupon.obj.id){this.clearSelectCoupon(this.selectCoupon.name)}else{this.selectCoupon={obj:obj,name:name}}},getIntCoupon:function getIntCoupon(obj){if(obj.num>this.selectCoupon.num){this.selectCoupon=obj}},verification:function verification(){if(this.password==""){this.showError("请输入密码");return false}else if(this.password.length<4){this.showError("请输入正确的密码");return false}return true},submit:function submit(){var tach=this;if(!this.verification())return;this.btnStatus=false;this.btnName="投资中请勿操作";if(location.href.search("newhand")>-1){var obj={amount:self.num,password:this.password};T.ajax({url:"/v1/current/purchase.do",data:obj,success:function success(data){tach.$refs.pop.close();if(data.success){tach.$refs.pop.close();this.btnName="已投资";self.paySuccse(data)}else{this.btnStatus=true;self.payError(data)}}})}else{var _obj2={amount:self.num,pid:self.id,tpwd:this.password};if(tach.selectCoupon.obj.id>-1){_obj2.fid=tach.selectCoupon.obj.id}T.ajax({url:"/invest",data:_obj2,success:function success(data){tach.$refs.pop.close();if(data.success){tach.$refs.pop.close();this.btnName="已投资";self.paySuccse(data)}else{this.btnStatus=true;self.payError(data)}}})}},closePop:function closePop(){self.btnClass=false},setTab:function setTab(){var tab=$(this.$el).find(".coupon .menu li"),cnt=$(this.$el).find(".effect .option");tab.each(function(i){this.onclick=function(){tab.removeClass("cur");$(this).addClass("cur");cnt.slideUp();cnt.eq(i).slideDown()}})}}})},payError:function payError(_data2){var self=this,newhand=location.href.search("newhand")>-1,msg=newhand?_data2.errorMsg:T.errorMsg(_data2.errorCode),message=newhand?'<div >\n\t\t\t\t\t       \t\t<p>{{msg}}，请一小时后再试，</p>\n\t\t\t\t\t       \t\t<p>或 <a class="red" href="/main/myAccount/security">找回密码</a> 解锁</p>\n\t\t\t\t\t\t\t</div>':'<p v-if="data.errorCode!=\'2001\'">{{msg}}</p>\n\t\t\t\t\t       \t<div v-else>\n\t\t\t\t\t       \t\t<p>{{msg}}，请一小时后再试，</p>\n\t\t\t\t\t       \t\t<p>或 <a class="red" href="/main/myAccount/security">找回密码</a> 解锁</p>\n\t\t\t\t\t\t\t</div>';$('\n\t\t\t\t<div class="child1">\n\t\t\t\t\t<pop ref="pop" :obj="win">\n\t\t\t\t\t    <div slot="title">\n\t\t\t\t\t    \t<h2>投资信息</h2>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div slot="content" class="errorPop">\n\t\t\t\t\t    \t<h2>\n\t\t\t\t\t    \t\t<i></i>\n\t\t\t\t\t    \t\t投资错误\n\t\t\t\t\t    \t</h2>\n\t\t\t\t\t    \t'+message+'\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div slot=\'footer\'>\n\t\t\t\t\t        <div @click="close" class="btn" >确定</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</pop>\n\t\t\t\t</div>\n\t\t\t').appendTo("body");new Vue({el:".child1",data:function data(){return{win:{title:true,footer:true,close:true},data:_data2,msg:msg}},mounted:function mounted(){this.$refs.pop.show();if(_data2.errorCode=="2001"&&!newhand){self.btnClass=true;self.btnName="支付密码已锁定"}},methods:{close:function close(){this.$refs.pop.close()}}})},paySuccse:function paySuccse(_data3){var self=this,newhand=location.href.search("newhand")>-1,successMsg=newhand?'<li class="li_2">\n\t\t\t\t\t    \t\t\t\t<p class="name">计算收益</p>\n\t\t\t\t\t    \t\t\t\t<p class="time">{{nextInvestTime|formateDate}}</p>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class="li_3">\n\t\t\t\t\t    \t\t\t\t<p class="name">收益到账</p>\n\t\t\t\t\t    \t\t\t\t<p class="time">{{expireDate|formateDate}}</p>\n\t\t\t\t\t\t\t\t\t</li>':'<li class="li_2">\n\t\t\t\t\t    \t\t\t\t<p class="name">产品起息</p>\n\t\t\t\t\t    \t\t\t\t<p class="time">{{nextInvestTime|formateDate}}</p>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li class="li_3">\n\t\t\t\t\t    \t\t\t\t<p class="name">产品到期</p>\n\t\t\t\t\t    \t\t\t\t<p class="time">{{expireDate|formateDate}}</p>\n\t\t\t\t\t\t\t\t\t</li>',expireDate=newhand?_data3.map.investTime+864e5+864e5:self.expireDate;$('\n\t\t\t\t<div class="child2">\n\t\t\t\t\t<pop ref="pop" :obj="win" :close-callback="closeCallback">\n\t\t\t\t\t    <div slot="title">\n\t\t\t\t\t    \t<h2>投资信息</h2>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div slot="content" class="succsePop">\n\t\t\t\t\t    \t<h2>\n\t\t\t\t\t    \t\t<i></i>\n\t\t\t\t\t    \t\t恭喜您！投资成功！\n\t\t\t\t\t    \t</h2>\n\t\t\t\t\t    \t<div class=\'rate\' v-show=\'cjrate\'>恭喜!您的超级加息券产生了<span class=\'rateNumber\' style="font-size: 20px;">{{cjrate}}%</span>的加息,预计收益<span class=\'rateNumber\' style="font-size: 20px;">{{cjprofit}}元</span></div>\n\t\t\t\t\t    \t<div class="cnt">\n\t\t\t\t\t    \t\t<div class="img"></div>\n\t\t\t\t\t    \t\t<ul>\n\t\t\t\t\t    \t\t\t<li class="li_1">\n\t\t\t\t\t    \t\t\t\t<p class="name">投资成功</p>\n\t\t\t\t\t    \t\t\t\t<p class="time">{{investTime|formateDate}}</p>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t'+successMsg+"\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</pop>\n\t\t\t\t</div>\n\t\t\t").appendTo("body");new Vue({el:".child2",data:function data(){return{win:{title:true,close:true},investTime:_data3.map.investTime,nextInvestTime:_data3.map.investTime+864e5,expireDate:expireDate,cjrate:self.cjrate,cjprofit:self.cjprofit}},mounted:function mounted(){this.$refs.pop.show()},methods:{close:function close(){this.$refs.pop.close()},closeCallback:function closeCallback(){location.reload()}},filters:{
formateDate:function formateDate(val){return new Date(val).Format("yyyy.MM.dd")}}})}}});