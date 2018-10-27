import requirePop from './pop/requirePop.js';
import info from './common/info'; //获取项目信息
import './css/main.css';
Vue.use(VueRouter,Vuex);
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
    {
        path: '/register',
        name: 'register',
        component : function(resolve){
            require(['./page/register'],resolve)
        }
    },
    {
        path: '/billDetail', 
        name: 'billDetail',
        component : function(resolve){
            require(['./page/bill-detail'],resolve)
        }
    },
    {
        path: '/authentication', 
        name: 'authentication',
        component : function(resolve){
            require(['./page/authentication'],resolve)
        }
    },
    {
        path: '/recharge', 
        name: 'recharge',
        component : function(resolve){
            require(['./page/recharge'],resolve)
        }
    },
    {
        path: '/invest', 
        name: 'invest',
        component : function(resolve){
            require(['./page/invest'],resolve)
        }
    },
    {
        path: '/login', 
        name: 'login',
        component : function(resolve){
            require(['./page/login'],resolve)
        }
    },
    {
        path: '/sorry', 
        name: 'sorry',
        component : function(resolve){
            require(['./page/sorry'],resolve)
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