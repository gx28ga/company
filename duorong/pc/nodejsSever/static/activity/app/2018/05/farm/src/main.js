import './css/main';
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'hash',
    base: __dirname,
    routes: [
        {
            path: '/', 
            component : function(resolve){
                require(['./module/main/index'],resolve)
            }
        },
        {
            path: '/rule',
            component : function (resolve) {
                require(['./module/main/rule'], resolve)
            }
        },
        {
            path: '/playCultivate',
            component : function (resolve) {
                require(['./module/main/playCultivate'], resolve)
            }
        },
        {
            path: '/playRaise',
            component : function (resolve) {
                require(['./module/main/playRaise'], resolve)
            }
        },
        {
            path: '/record',
            component : function (resolve) {
                require(['./module/main/record'], resolve)
            }
        },
        {
            path: '/rank',
            component : function (resolve) {
                require(['./module/main/rank'], resolve)
            }
        },
        {
            path: '/xchg',
            component : function (resolve) {
                require(['./module/main/xchg'], resolve)
            }
        }
    ]
});

window.router = router;
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
        // const url = '/activity/app/magicCube/src/images/';
        T.init({
            loadding : {
                timing : 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line'
                fillColor : 'rgba(150,213,0,1)',
                imgs : [

                ],
                callback:()=>{}
            }
        });
    },
    template: `
        <div id="app">
            <transition name="left">
            <!--<transition name="fade">-->
                <router-view class="child-view"></router-view>
            </transition>
            <div id='pop'><div class='child'></div></div>
        </div>
    `
}).$mount('#app')