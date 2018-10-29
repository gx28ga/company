/**
 * 所有跳转页
 * created by bo.peng
 * email:spion@qq.com
 */
import LOCALSTOR from "../contant/LOCALSTORAGE";
import jump from "./urls";
import product from "./urls/product";
import find from "./urls/find";
import shopping from "./urls/shopping";
import login from "./urls/login";
import openAccount from "./urls/openAccount";
import myAccount from "./urls/myAccount";
import messageLog from "./urls/messageLog";
let jumpPage = function(){
};
jumpPage.install = function (Vue, options) {
    Object.assign(Vue.prototype,{
        go(){
            jump.init(this);
            return {
                all(obj) {
                    jump.go(obj.returnUrl);
                },
                resultUrl( callback ) { //结果页单独处理;
                    let resultInfo = T.getItem(LOCALSTOR.RESULT_RETURNURL);
                    if(!resultInfo){
                        if(callback){
                            callback();
                        }else{
                            jump.go("/main");
                        }
                        return;
                    }
                    jump.go(resultInfo.returnUrl);
                    T.delItem(LOCALSTOR.RESULT_RETURNURL);
                },
                home() {
                    jump.go('/main');
                },
                find,//发现
                product,//产品
                shopping, //积分商城
                messageLog,//消息记录
                login, //登录页,
                myAccount, //我的优惠券
                openAccount,//开户
                protocol: {//跳转到协议
                    home(val) {
                        jump.go('/protocol/' + val);
                    }
                },
                error404() {
                    jump.go("/404");
                },
                outside(obj) {
                    /*obj.url = encodeURIComponent(obj.url);
                    jump.go("/outside",{query:obj});*/
                    if(obj.url.indexOf("mp.weixin.qq")>-1){
                        T.callApp.webview({
                            title : obj.title,
                            href : obj.url,
                        })
                    }else{
                        obj.url = encodeURIComponent(obj.url);
                        jump.go("/outside",{query:obj});
                    }
                }
            }
        },
        outside(){//站外跳站内相关操作
            let self = this;
            return{
                in(){//进入记录
                    let query = self.$route.query;
                    if(query.returnUrl){
                        T.setItem(LOCALSTOR.OUTSIDE_URL,query);
                    }
                },
                out(){//退出
                    let query = T.getItem(LOCALSTOR.OUTSIDE_URL) ,
                        url,
                        path,
                        invert,
                        obj = {};
                    if(query && query.returnUrl){
                        url = query.returnUrl;
                        path = self.$route.path;
                        invert = query.invert;
                    }
                    if(self.$store){
                        let state = self.$store.state;
                        Object.assign(obj,{
                            user : state.user.info,
                            catch : state.catch.data,
                            account : state.user.account,
                        })
                    }
                    if(url && (!invert || (invert && path.indexOf("login")<0) )){
                        url = decodeURIComponent(url);
                        url += "?uid="+obj.user.member.uid;
                        window.location = url;
                        T.delItem(LOCALSTOR.OUTSIDE_URL);
                    }
                }
            }
        }
    })
};
export default jumpPage;
