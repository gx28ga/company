/*
 * @description: qTip v1.0
 * @author: Tony
 * @update: 2013-07-22 by Tony
 */
 
// define(function(require, exports, module) {

// 	var $ = require('$'),
	var	$win = $(window);
		
	var COLOR_NORMAL = '#5dad52';
	var COLOR_ERROR = '#f84a4a';
	
	var defaults = {
		text: '',
		type: true,
		top: 0,
		delayTime: 10000,
		fadeTime: 500
	};
		
	var Tips = {
		init: function(opts) {
			opts = $.extend({}, defaults, opts);
			
			!this.DOM && (this.DOM = this.__getDOM());
			
			this.wrap = this.DOM['wrap'];
			this.main = this.DOM['main'];
			this.clear();
			this.setText(opts.text);
			this.setType(opts.type);
			this.setDelay(opts.delayTime, opts.fadeTime);
			this.setTop(opts.top);
			return this.wrap.show();
		},
		
		__getDOM: function() {
			var _wrap = $('<div id="qTip" style="position:absolute;z-index:9999;width:100%;text-align:center;" />').prependTo(document.body),
				_main = $('<span style="display:inline-block;color:#fff;padding:3px 30px 6px;" />').appendTo(_wrap);
			this._bindFixed();	
			return {"wrap": _wrap, "main": _main};
		},
		
		_bindFixed: function() {
			$win.scroll(function() {
				$win.trigger('fixed-wrap');
			});
		},
		
		setText: function(text) {
			this.main.html(text);
		},
		
		setType: function(isNormal) {
			var className = isNormal ? 'qtip-ok': 'qtip-error',
				bgColor = isNormal ? COLOR_NORMAL: COLOR_ERROR;
				
			this.main.removeClass().addClass(className);
			this.main.css('background-color', bgColor);
		},
		
		setTop: function(top) {
			var that = this,
				top = parseInt(top, 10);
			$win.off('fixed-wrap').on('fixed-wrap', function() {
				that.wrap.css('top', ($win.scrollTop() + top) + 'px');
			}).trigger('scroll');
		},
		
		setDelay: function(delayTime, fadeTime) {
			var that = this;
			this.delay = setTimeout(function() {
				that.animate = that.wrap.fadeOut(fadeTime);
			},
			delayTime);
		},
		
		clear: function() {
			this.delay && clearTimeout(this.delay);
			this.animate && this.animate.stop(true, true);
		}
	};
	
	$.qTip = $.qtip = function (opts) {
		return Tips.init(opts);
	};

// });

//bo.peng 2016/12/23
$.tips = function( obj ){
	var config = {
		scope : null,
		left: 0, //向左移动多少
		top:0,  //向上移动多少
		element : null  //从哪个元素里找到需要显示的 tips
	}
	$.extend(config,obj);
	var scope = config.scope;
	if(!scope) return;
	scope.$watch('$viewContentLoaded',function(){
		setTimeout(function(){
			if(!obj && !config.element){ if(console) console.log('请指定元素')};
			$(config.element).find('*').each(function(){
				var elem = $(this) , 
					attr = elem.attr('data-tips') , 
					timer , timer1 ;
				if(attr){
					var elemAttr = $(attr) , 
						top , left;
					function mouseenter(){
						timer = setTimeout(function(){
							clearTimeout(timer1);
							elemAttr.css({top:top+100+'px',opacity:0});
							timer1 = setTimeout(function(){
								elemAttr.css({display:'none'});
							},510)
						}, 200);
					}
					elem.mouseenter(function(){
						clearTimeout(timer1);
						left = elem.offset().left+config.left+elem.width();
						top = elem.offset().top+config.top+elem.height()-$(window).scrollTop();
						elemAttr.css({position:'fixed',zIndex:9999,top:top+100+'px',display:'block'});
						timer1 = setTimeout(function(){
							elemAttr.css({left:left+'px',top:top+'px',opacity:1})
						},20)
					}).mouseleave(mouseenter);

					elemAttr.mouseenter(function(){
						clearTimeout(timer);
					}).mouseleave(mouseenter);
				}
			})
		},500);
	});
}