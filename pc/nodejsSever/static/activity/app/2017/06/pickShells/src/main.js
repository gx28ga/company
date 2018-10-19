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
    mounted(){
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