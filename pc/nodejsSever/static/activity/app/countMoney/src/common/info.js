import {status} from './URL';
import requirePop from '../pop/requirePop.js';
var info = {
    name : '多融财富数钞票',
	version : '1.0' , 
    startTime : null,
    endTime : null,
    status : -1 ,
    init : function(){
        info.getTime(()=>{});
    },
    click : function( callback ){
        info.getTime(()=>{
            var status = info.status;
            if(status == 0 ){ //进行中
                return callback();
            }else{
                setTimeout(()=>{
                    requirePop('noStart');
                },500);
            }
        })
    },
    getTimes : [],
    getTime : function(callback){
        if(info.startTime){
            return callback && callback()
        }
        T.getAppInfo();
        info.getTimes.push(callback);
        if(info.getTimes.length<=1){
            T.ajax({
                url : status , 
                callback : true,
                data : {
                    channel : 'H5',
                    uid : T.uid
                },
                success : function( _data ){
                    info.startTime = new Date(_data.map.startTime).Format('yy/MM/dd hh:mm:ss')
                    info.endTime = new Date(_data.map.endTime).Format('yy/MM/dd hh:mm:ss');
                    info.status = _data.map.status;
                     info.getTimes.map(( callback )=>{
                        callback && callback();
                    })
                }
            })
        }
    },
    getDices : [],
    /*getDice : function( callback ){
        if(!T.uid) return;
        if(info.diceChance !=void 0 ) return callback && callback();
        info.getDices.push(callback);
        if(info.getDices.length<=1){
            info.getTime(()=>{
                if(info.status!=0) return;
                T.ajax({//掷骰机会
                    url : welcome , 
                    callback : true,
                    data : {
                        uid : T.uid
                    },
                    success : function( _data ){
                        //normalChance - 普通骰子机会, controllableChance - 遥控骰子 机会
                        info.diceChance = _data.map.diceChance;
                        info.controllableChance = _data.map.controllableChance; //遥控
                        info.normalChance = _data.map.normalChance; //普通
                        info.getDices.map(( callback )=>{
                            callback && callback();
                        })
                    }
                });
            })
        }
    },*/
    map : {},
    onmaps : [],
	author : '',
	http : 'http://www.duorongcf.com'
}
module.exports = info;