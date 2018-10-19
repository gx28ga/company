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
            path: '/shake',
            component : function (resolve) {
                require(['./module/main/shake'], resolve)
            }
        },
        {
            path: '/my',
            component : function (resolve) {
                require(['./module/main/my'], resolve)
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
        const url = '/activity/app/jigsaw/src/images/';
        T.init({
            /*loadding : {
                timing : 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line'
                fillColor : 'rgba(150,213,0,1)',
                imgs : [
                    url+'convert-pop.png',
                    url+'end.png',
                    url+'home-bg.jpg',
                    url+'how-com.png',
                    url+'how-ord.png',
                    url+'invest.png',
                    url+'i-see-btn.png',
                    url+'login.png',
                    url+'msg-pop-bg.png',
                    url+'piece-bg.jpg',
                    url+'prize-bg.png',
                    url+'rank-bg.jpg',
                    url+'result-pop.png',
                    url+'rule-bg.png',
                    url+'shake-page.jpg',
                    url+'to-shake.png'
                ],
                callback:()=>{}
            }*/
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