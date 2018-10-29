/**
 * 历史记录操作 请谨慎操作
 * created by bo.peng 2018/5/17
 * email:spion@qq.com
 */
export default{
    setBackHistory( obj ){ //用于后退返回功能  主要用于弹窗
        history.pushState({page: "back"}, 'title');
    },
    goBackHistory(obj){//取消弹窗并返回  主要用于弹窗
        window.addEventListener('popstate', function(event) {
            let state = event.state;
            if(obj && obj.callback){
                obj.callback(state);
            }else{
                setTimeout(function(){
                    if(state && state.page){
                        window.history.length > 1
                            ? obj.self.$router.go(-1)
                            : obj.self.$router.push('/');
                        delete state.page;
                    }
                },300);
            }
        });
    }
}
