/**
 * 开户
 * created by bo.peng 2018/5/10
 * email:spion@qq.com
 */
import jump from "./index";
export default {
    home( bool ) {
        if(version=="1.0" && !bool){
            jump.go("/openAccount")
        }else{
            require.ensure([],(require)=> {
                VueParent.$requirePop(require('../../module/openAccount/indexPop'), {
                        props : {} //弹窗内容相关属性
                    },
                    {
                        props: {//弹窗相关属性 同上面的 this.$Pop
                            obj: {
                                width:300
                            }
                        }
                    }
                );
            });
        }
    },
    result(val) {//开户结果页
        jump.go("/myAccount/result",{query: {url: val}})
    },
    openBrank() { //开通银行存管提示
        jump.go("/openAccount/openBrank")
    },
    authorization( obj ){//授权
        require.ensure([],(require)=> {
            VueParent.$requirePop(require('../../module/openAccount/authorization'), {
                    props : {
                        obj : obj,
                    } //弹窗内容相关属性
                },
                {
                    props: {//弹窗相关属性 同上面的 this.$Pop
                        obj: {
                            width : 280,
                            showPop : obj.showPop
                        }
                    }
                }
            );
        });
    }
};
