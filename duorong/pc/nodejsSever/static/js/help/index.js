new Vue({
	el : '#APP',
	delimiters: ['${', '}'],
	data : function(){
        return{
            tag : {
                CJWT : false,
                LCKT : false,
                XSZY : false,
                MZSM : false,
				YLKT : false
            }
		}
    },
	mounted : function(){
		this.setTab();
		this.setRightTab();
		this.getdz();
	},
	methods : {
		getdz : function(){
            var url=document.location.href;
            var name = url.substr(url.length-9);
            var name2 = name.substr(0,4);
            this.setTag(name2);
            if(name2=="XSZY"){
                T.setNavCurrent('xs');
			}
		},
        setTag:function(name){
            var self = this;
            $.each(this.tag,function( key , val ){
                self.tag[key] = false;
            });
            self.tag[name] = true;
        },
        setRightTab(){
			let tit = $('.wqq-helpBox-titel');
			tit.each(function(){
				let cnt = $(this).next();
				$(this).find('.wqq-help-sanjiao').click(function(){
					if(this.checked == undefined){
                        this.checked = false;
					}

                    this.checked = !this.checked;
					if(this.checked){
                        cnt.slideDown('fast');
					}else{
                        cnt.slideUp('fast');
					}

				})
			})

		},
		setTab : function(){
			var right = $('.help .right') ,
				tag = $('.left ul li');

			tag.each(function( i , li ){
				li.tabClick = 0;
				if(i==0){
					li.tabs = [0,0];
				}
				if(i==1){
					li.tabs = [1,2];
				}
				if(i==2){
					li.tabs = [2,3];
				}
				if(i==3){
					li.tabs = [3,4];
				}
				li.onclick = function(){
					var selfLi = this;
					if(selfLi.className.indexOf('hover')>-1 && i==0) return;
					tag.removeClass("hover");
					$(this).addClass("hover"); 
					right.each(function( j , ele ){
						if($(ele).css("display") == "block"){
							setTimeout(function(){ 
								$(ele).css({display:'none'});
							},350);
						}
						if(j == selfLi.tabs[selfLi.tabClick]){
							setTimeout(function(){
								$(ele).css({display:'block'}).addClass('hover');
								setTimeout(function(){
									$(ele).addClass("hover");
									setTimeout(function(){
										$(ele).removeClass('hover');
									},350);
								},50);
							},100);
						}
					});
				}
			});
		}
	}
});
