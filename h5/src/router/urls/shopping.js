/**
 * 积分商城
 * created by bo.peng 2018/5/9
 * email:spion@qq.com
 */
import jump from "./index";
let obj = {};
[
    "home", //首页
    "detail",//详情
    "changeRecord",//兑换记录
    "mingXi",//积分明细
    "taskList",//任务中心
    "taskFinish",//任务中心result
    "pointExplanation",//积分规则
].forEach(name=>{
    obj[name] = function(obj){
        jump.isLogin().goLogin({
            callback : ()=> {
                if (name === "home") name = "";
                jump.go("/shopping/" + name, obj);
            }
        });
    }
});
export default obj;
