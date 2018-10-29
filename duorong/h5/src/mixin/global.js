/**
 * 常用功能
 * created by bo.peng 2018/4/19
 * email:spion@qq.com
 */
import Vue from "vue";
Vue.mixin({
    beforeRouteLeave(to,from,next){
        VueParent.setNav({
            show:true
        });
        next();
    },
    methods:{
        setTitle( obj ){ //头部设置
            VueParent.setHead(obj);
        },
        setNav( obj ){ //底部栏目信息
            VueParent.setNav(obj);
        },
        setJumpTop(obj){//隐藏 回到顶部功能
            VueParent.setJumpTop(obj);
        }
    }
});
