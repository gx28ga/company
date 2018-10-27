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
                    requirePop('noStart',{
                        props: {
                            status : status,
                        }
                    });
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
                    // uid : T.uid
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
    map : {},
    onmaps : [],
	author : '',
	http : 'http://www.duorongcf.com'
}
module.exports = info;