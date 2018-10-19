/**
 * 输入匡过滤
 * created by bo.peng
 * email:spion@qq.com
 */
export default {
    methods:{
	    _toNumber : function( num ){ //把所有非数字的删除
		    let val = String(num).match(/[\d]*\.{0,1}\d{0,2}/);
		    if(!val){
			    num = num.replace(val[0],'');
		    }else{
			    return val[0];
		    }
		    return num;
	    },
	    _justNumber : function( value ){ //只能是数字
		    let val = String(value).match(/[^\d]/);
		    if(val){
                value = value.replace(val[0],'');
		    }
		    return value;
	    },
		_toNumberAndLetter(value){ //删除包含数字字母
            let val = String(value).match(/[^a-z|A-Z|0-9]/);
            if(val ){
                value = value.replace(val[0],'');
            }
            return value;
		},
	    _maxfilter( max , num ){//把较大的数额转为 万
	        if(num===undefined){
	            num = max;
	            max = 100000;
            }
		    let text;
		    if(num>=max){
			    text = this._toFixed(num/10000);
			    text += '万'
		    }else{
			    text = num;
		    }
		    return text;
	    },
        _localeString(val , fixed) { //数字转逗号
            let num = parseFloat(val).toLocaleString();
            if(!fixed){
                return num;
            }
            if(num.indexOf(".")!==-1){
                if(num.split(".")[1].length==2){
                  return num;
                }else if(num.split(".")[1].length==1){
                   return  num+"0"
                }else{
                    return num+"."+val.substr(-1);
                }
            }
            return num+"."+val.substr(-2);
        },
        _toFixed(num){//数字转小数点2位
            return Number(num).toFixed(3).toString().match(/^\d+\.\d{2}/)[0];
        },
        _numercial(val){//将较大的数值转化为万或者亿
	        if(val>=100000000){
	            return (parseFloat(val/100000000)).toFixed(3).toString().match(/^\d+\.\d{2}/)[0]+"亿";
            }else if(val>=10000){
	            return (parseFloat(val/10000)).toFixed(3).toString().match(/^\d+\.\d{2}/)[0]+"万";
            }else{
	            return val;
            }
        },
        _formatDate( val ){ //格示化时间 年月日
	        return new Date(parseInt(val)).Format("yyyy-MM-dd")
        },
        _formatDateAndMinute(val){ //格示化时间 年月日 时分
            return new Date(parseInt(val)).Format("yyyy-MM-dd hh:mm:ss")
        }
    }
};
