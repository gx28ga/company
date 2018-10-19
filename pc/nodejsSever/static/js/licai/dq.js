new Vue({
	el : '#APP',
	delimiters: ['${', '}'],
	data : function(){
		return {
			product : null ,
			hislist : [],
			page : 1,
			total : 0,
			hislist1 : []
		}
	},
	mounted : function(){
		T.setNavCurrent('dq');
		this.tips();
		this.setTab();
		this.setHisTab();
		this.getHistory();
		new Vue({
			el: '#example'
		});
		new Vue({
			el: '#ProductStatus'
		});
	},
	methods : {
		goTop : function(){
			T.goTop();
		},
		detail : function( item ){
			window.location.href = '/billDetail/billDetal_html_'+item.id+'.html';
		},
		getList : function( obj ){
			var self = this;
			T.ajax({
				url:"/productList",
				data : obj,
				success : function( data) {
					self.hislist1 = data.map.page.rows;
					self.hislist = data.map.page.rows;
					$.each(self.hislist,function( i , ele){
						let id = $("#"+ele.id);
						if(id.length){
							id.remove();
						}
					});
					self.total = data.map.page.total;
					self.$nextTick(function(){
						let effect = $('.history-list .effect'),
							option = $('.history-list .option');
						option.each(function( i , ele ){
							if($(ele).css("display") == "block"){ //
								effect.height($(ele).height());
								$(ele).removeClass('cur').addClass('hover');
								setTimeout(function(){
									$(ele).css({display:'none'});
								},350);
							}else{
								$(ele).css({display:'block',position:'relative'});
								effect.height($(ele).height());
								$(ele).removeAttr('style');
								setTimeout(function(){
									$(ele).css({display:'block'}).addClass('hover');
									setTimeout(function(){
										$(ele).addClass("cur");
										setTimeout(function(){
											$(ele).removeClass('hover');
											effect.height('auto');
										},350);
									},50);
								},100);
							}
						});
					});
					self.pageChange(obj);
				}
			});
		},
		getHistory : function(){ //往期产品
			this.getList({//2=利率降序
				"order":0,
				"pageOn":this.page,
				"pageSize":5,
				"paramType":6,
				"statuses":[6,8,9]
			});
		},
		pageChange : function(obj){
			var self = this;
			layui.use(['laypage', 'layer'], function(){
				var laypage = layui.laypage;
				laypage.render({
					elem: 'Page'
					,limit: 5
					,curr : self.page
					,count: self.total
					,layout: ['prev','page', 'next', 'count']
					,jump: function(_obj, first){
						//首次不执行
						if(!first){
							self.page = _obj.curr;
							obj.pageOn = self.page;
							self.getList(obj);
						}
					}
				});

			});
		},
		setHisTab : function(){ //往期产品
			var self = this ,
				tag = $(".history-list .sort li");
			tag.each(function( i , li ) {
				li.tabClick = 0;
				if (i == 0) {
					li.tabs = [0, 0];
				}
				if (i == 1) {
					li.tabs = [1, 2]
				}
				if (i == 2) {
					li.tabs = [3, 4]
				}
				li.onclick = function () {
					var selfLi = this;
					if (selfLi.className.indexOf('cur') > -1 && i == 0) return;
					tag.removeClass("cur up down");
					$(this).addClass("cur");
					if (selfLi.tabClick == 0) {
						selfLi.tabClick = 1;
						$(this).addClass("up");
					} else {
						selfLi.tabClick = 0;
						$(this).addClass("down");
					}
					self.getList({//2=利率降序
						"order":selfLi.tabs[selfLi.tabClick],
						"pageOn":self.page,
						"pageSize":5,
						"paramType":6,
						"statuses":[6,8,9]
					});
				}
			});
		},
		setTab : function(){
			var effect = $('.allProduct'),
				option = $('.allProduct .option') ,
				tag = $('.top .screen .sort li');

			tag.each(function( i , li ){
				li.tabClick = 0;
				if(i==0){
					li.tabs = [0,0];
				}
				if(i==1){
					li.tabs = [1,2]
				}
				if(i==2){
					li.tabs = [3,4]
				}
				li.onclick = function(){
					var selfLi = this;
					if(selfLi.className.indexOf('cur')>-1 && i==0) return;
					tag.removeClass("cur up down");
					$(this).addClass("cur");
					if(selfLi.tabClick == 0){
						selfLi.tabClick = 1;
						$(this).addClass("up");
					}else{
						selfLi.tabClick = 0;
						$(this).addClass("down");
					}
					option.each(function( j , ele ){
						if($(ele).css("display") == "block"){ //
							effect.height($(ele).height());
							$(ele).removeClass('cur').addClass('hover');
							setTimeout(function(){
								$(ele).css({display:'none'});
							},350);
						}
						if(j == selfLi.tabs[selfLi.tabClick]){
							setTimeout(function(){
								$(ele).css({display:'block'}).addClass('hover');
								setTimeout(function(){
									$(ele).addClass("cur");
									setTimeout(function(){
										$(ele).removeClass('hover');
										effect.height('auto');
									},350);
								},50);
							},100);
						}
					});
				}
			});
		},
		tips : function(){
			layui.use('layer', function(){
				var layer = layui.layer ,
					index;
				$('.allProduct .tag-tips').each(function(){
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
		}
	}
});