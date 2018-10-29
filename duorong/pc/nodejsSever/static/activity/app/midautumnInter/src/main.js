import requirePop from './pop/requirePop.js';
import info from './common/info'; //获取项目信息
import './css/main.css';
Vue.use(VueRouter,Vuex,iScroll);
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
            require(['./page/index'],resolve)
        }
    },
    ]
});

info.init();
window.router = router;
window.bus = new Vue();
window.info = info;
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
        
    },
    template: `
        <div id="app">
            <transition :name="transitionName">
                <router-view class="child-view"></router-view>
            </transition>
            <div id='pop'><div class='child'></div></div>
        </div>
    `
}).$mount('#app');