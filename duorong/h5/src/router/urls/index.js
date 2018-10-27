/**
 * 公共部分
 * created by bo.peng
 * email:spion@qq.com
 */
const URL = "";
let config = {
    query : "",
    param : "",
};
const jump = {
    URL : URL,
    self : null,
    user : null,
    catch : null,
    account : null,
    init( self ){
        jump.self = self;
        if(self.$store){
            let state = self.$store.state;
            Object.assign(jump,{
                user : state.user.info,
                catch : state.catch.data,
                account : state.user.account,
            })
        }
    },
    isLogin(obj){//登录 是否登录 jump.isLogin(obj) 去登录页 jump.isLogin().goLogin(obj)
        let isLogin = obj =>{
            if(obj){
                obj.callback(jump.user);
            }
            return jump.user;
        };
        if(obj){
            isLogin(obj);
        }
        return{
            goLogin(obj){//未登录则去登录页
                return isLogin({
                    callback(user){
                        user?obj.callback():jump.go("/login","home");
                    }
                });
            },
            goHome(obj){//未登录则去首页
                return isLogin({
                    callback(user){
                        user?obj.callback():jump.go("/","home");
                    }
                });
            },
        }
    },
    fn( arr , url ){//创建function //简单的操作可以直接调用该方法
        let obj = {};
        arr.forEach(name=>{
            obj[name] = function(obj){
                if(name === "home") name = "";
                jump.go(url+"/"+name,obj);
            }
        });
        return obj;
    },
    go( url  , obj ){ //所有请求跳转 url需要跳的栏目页面("/login")，name为该栏目页的二级页面("reg") obj为参
        Object.assign(config,obj);
        router.push({path:URL+url,query:config.query,param:config.param});
    }
};
export default jump;
