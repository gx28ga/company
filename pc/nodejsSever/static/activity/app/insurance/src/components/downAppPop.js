import requirePop from '../pop/requirePop.js';
export default function(){
    requirePop('downAPP',{
        props : {
            transition : 'rotate3d',//rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
            title : '温馨提示',
            content : '目前暂不支持查看已还款和计息中的标的详情，请下载APP查看',
            okTxt : '取消',
            cancelTxt : '立即下载',
            cancelCallback : function(){
                window.location.href=T.downApp;
            }
        }
    },"publicTips")
}