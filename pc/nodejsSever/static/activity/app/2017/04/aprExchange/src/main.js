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
    mounted(){/*
        const http = T.imgsrc+"/activity/app/aprExchange/src/images/"
        T.init({
            loadding : {
                imgs : [
                    http+'new/head/head-bg2.jpg',
                    http+'new/head/rule-pop.png',
                    http+'new/main/main-bg.jpg',
                    http+'new/main/func-btn.jpg',
                    http+'new/main/over.png',
                    http+'new/main/select-btn.png',
                    http+'new/pop/confirm.jpg',
                    http+'new/pop/ok.png',
                    http+'/new/pop/cancel.png',
                    http+'new/bottom/btm-bg.jpg',
                    http+'new/bottom/locked.png',
                    http+'new/bottom/portrait.png',
                    http+'new/pop/select_prize/select-pop.png',
                    http+'new/pop/select_prize/select.png',
                    http+'new/pop/home-btn.png',
                    http+'new/pop/contact-pop.png',
                    http+'new/pop/set_contact/confirm.png',
                ],
                callback : function(){
                }
            }
        })*/
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