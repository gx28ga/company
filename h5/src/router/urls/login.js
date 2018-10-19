/**
 * 登录
 * created by bo.peng 2018/5/10
 * email:spion@qq.com
 */
import jump from "./index";
let obj = jump.fn(
    [
        "home", //首页
        "signin",//登录
        "reg",//注册
        "getPwd",//找回密码
    ],
    "/login"
);
obj.success=()=>{
    jump.go("/openAccount/openBrank",{query: {title: "注册"}});
};
export default obj;
