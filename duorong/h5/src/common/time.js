(function(win){
	win.CountTime = function( obj ){
		this.config = {
			startTime : null,
			endTime : new Date(),
			nowTime : new Date(),
			updateTime : false,
			callback : function(){}
		};
		$.extend(this.config,obj);
		this.init();
	}
	CountTime.prototype = {
		init : function(){
			var self = this;
			if(!this.config.startTime) return;
			this.config.nowTime = new Date(this.config.nowTime).getTime();
			this.difference = this.config.nowTime - new Date().getTime();
			if(this.config.updateTime){
				this.timer = setInterval(function(){
					self.getTime();
				},1000);
			}else{
				this.getTime();
			}
		},
		getTime : function(){
			var startTime = new Date(this.config.startTime).getTime(),
				endTime= new Date(this.config.endTime).getTime(), //截止时间
				nowTime = new Date().getTime()+this.difference ,
				t = endTime-nowTime,
				obj;

			if(startTime>nowTime){
				obj = {
					status : -1, //未开始
					statusName : '未开始'
				};
				t = startTime-nowTime;
			}else if(startTime<nowTime && nowTime<endTime){
				obj = {
					status : 0, //进行中
					statusName : '进行中'
				};
			}else if(nowTime>=endTime){
				obj = {
					status : 1, //已结束
					statusName : '已结束'
				};
				clearInterval(this.timer);
			}

			var d=Math.floor(t/1000/60/60/24),
				h=Math.floor(t/1000/60/60%24),
				m=Math.floor(t/1000/60%60),
				s=Math.floor(t/1000%60);

			d = d<=0?'00':d<10?('0'+d):d;
			h = h<=0?'00':h<10?('0'+h):h;
			m = m<=0?'00':m<10?('0'+m):m;
			s = s<=0?'00':s<10?('0'+s):s;
			d = String(d, 2);
			h = String(h, 2);
			m = String(m, 2);
			s = String(s, 2);
			obj.day = d;
			obj.hour = h;
			obj.minute = m;
			obj.second = s;
			this.config.callback(obj);
		}
	};
})(window);
