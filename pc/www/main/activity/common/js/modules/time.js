(function(win){
    win.countTime = function( obj ){
        this.config = {
            startTime : null,
            endTime : new Date(),
            updateTime : false,
            callback : function(){}
        }
        $.extend(this.config,obj);
        this.init();
    }
    countTime.prototype = {
        init : function(){
            var self = this;
            if(!this.config.startTime) return;
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
                nowTime = new Date().getTime() , 
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
    }
    win.timeInit = function(initObject){
        var time1=0,time2=0,time3=0;
        function getRTime( time ,callback ){
            var EndTime= new Date(time), //截止时间
                NowTime = new Date(),
                t =EndTime.getTime() - NowTime.getTime();
            if(t<=0){
                callback();
            }else{
                var d=Math.floor(t/1000/60/60/24),
                    h=Math.floor(t/1000/60/60%24),
                    m=Math.floor(t/1000/60%60),
                    s=Math.floor(t/1000%60);

                d = d<10?('0'+d):d;
                h = h<10?('0'+h):h;
                m = m<10?('0'+m):m;
                s = s<10?('0'+s):s;

                if(initObject.timeElem){
                    var eles = initObject.timeElem
                    d = String(d, 2);
                    h = String(h, 2);
                    m = String(m, 2);
                    s = String(s, 2);

                    eles.eq(0).text(h[0]);
                    eles.eq(1).text(h[1]);

                    eles.eq(3).text(m[0]);
                    eles.eq(4).text(m[1]);

                    eles.eq(6).text(s[0]);
                    eles.eq(7).text(s[1]);
                }
            }
        }
        function prev(){
            getRTime(initObject.prev,function(){
                initObject.prevCallback();
                clearInterval(time1);
                start();
                if(initObject.getTime){
                    time2 = setInterval(start,1000);
                }
            });
        }
        function start(){
            getRTime(initObject.start,function(){
                initObject.startCallback();
                clearInterval(time2);
                end();
                if(initObject.getTime){
                    time3 = setInterval(end,1000);
                }
            })
        }
        function end(){
            getRTime(initObject.end,function(){
                initObject.endCallback();
                clearInterval(time3);
            });
        }
        prev();
        if(initObject.getTime){
            time1 = setInterval(prev,1000);
        }
    }
})(window)