import './css/main';
import info from './common/info'; //获取项目信息
import {participate} from './common/URL';
import requirePop from './pop/requirePop.js';
import directive from './common/directive.js'; // v-touch
import VeeValidate, { Validator } from './plug/vee-validate.js'; 
import messages from './plug/zh_CN.js';
directive(Vue);
Validator.updateDictionary({
    zh_CN: {
        messages
    }
});
const config = {
    errorBagName: 'errors', // change if property conflicts.
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
};
Vue.use(VueRouter,VeeValidate,config);
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [
    {
        path: '/',
        redirect: '/main'
    },
    {
        path: '/main', 
        name: 'main',
        component : function(resolve){
            require(['./module/main/index'],resolve)
        }
    }
    ]
});

info.init();
window.router = router;
window.info = info;
window.bus = new Vue();
new Vue({
    router,
    data () {
        return {
            transitionName: 'slide-left' , 
            home : false
        }
    },
    watch: {
        '$route' (to, from) {
            this.home = to.path!='/';
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    },
    mounted(){
        T.init({
            loadding : {
                imgs : [
                    
                ],
                callback : function(){
                    info.click(()=>{
                        if( !T.uid ){
                            router.replace({ path: '/', query: {
                                wap:T.wap,uid:T.uid
                            }});
                            return;
                        };
                        T.ajax({
                            url : participate , 
                            data : { uid : T.uid },
                            callback : true,
                            success : function( _data ){
                                if(!_data.flag){
                                    requirePop('publicTips');
                                }else{ 
                                    var hash = window.location.hash;
                                    if(hash.search(/#\/\module\d/)>=0){
                                        info.onmap(function(){
                                            info.getDice(function(){
                                                bus.$emit('pointOnMap', info.map.pointOnMap);
                                            })
                                        })
                                    }else{
                                        console.log('多融欢迎您！')
                                    }
                                }
                            }
                        });
                    })
                }
            }
        })
    },
    template: `
        <div id="app">
            <transition name="left">
                <router-view class="child-view"></router-view>
            </transition>
            <div id='pop'><div class='child'></div></div>
        </div>
    `
}).$mount('#app')