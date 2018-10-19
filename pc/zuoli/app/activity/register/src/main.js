import './style/main.css';
import store from './store';
import navtab from './module/nav.vue';
Vue.use(VueRouter);
window.HTTP = '';
const router = new VueRouter({
    mode: 'hash',
   //mode: 'history',
    base: __dirname,
    linkActiveClass: "active",
    //h5/site/web
    routes: [
        //{ path: '*', redirect: HTTP+'/main' },
        { path: '/', redirect: HTTP+'/main' },
        {
            path: '/main',
            component: () => import('./module')
        },
        {
            path: '/login',
            component: resolve => require(['./module/register'], resolve),
        },{
            path: '/download',
            component: resolve => require(['./module/registersuccess'], resolve),
        },    
    ]
});
window.router = router;



new Vue({
    router,
    store,
    data() {
        return {
            transitionName: 'left',
            showNav: false ,
            paddingBottom : 0
        }
    },
    components: {
        navtab
    },
    mounted(){
        if(T.Iphone){
            window.location.href="https://www.zuoli360.com/h5/webview/expect/qidai.html";
        }
        this.$store.commit('getUserInfo');
        T.init();
        setTimeout(function(){
           $('#app').removeClass('cur');
           T.setImgSize();
        },300);
    },
    watch: {
        '$route' (to, from) {
            let self = this;
            this.transitionName = this.getTransition(to,from);
	        //显示栏目
	        const navName = [];
	        for(let i=0;i<navName.length;i++){
		        if((HTTP+navName[i]) === to.path){
			        self.showNav = true;
			        break;
		        }
		        self.showNav = false;
	        }
        }   
    },
    methods : {
        getTransition(to,from){
            let text = 'left' ,
                arr = ['/main','/login','/open','/drawals','/investment','/register','/problem','/register'];

            for(let i=0;i<arr.length;i++){
                if(to.path===(HTTP+arr[i])){
                    text = 'right';
                     window.scrollTo(0,0);
                    break;
                }else if(from.path===(HTTP+arr[i])){
                    text = 'left';
                    window.scrollTo(0,0);
                    break;
                }else{
                    text = 'left';
                    window.scrollTo(0,0);
                }
            }
            return text;
        },
        setBottom(val){
            this.paddingBottom = val;
        }
    },
    template: `<article>
        <div id="app" class='cur' :style="{paddingBottom:paddingBottom+'px'}">
            <div class='container'>
            <transition :name="transitionName">
                <router-view class="child-view"></router-view>
            </transition>
            </div>
        </div>
        </article>
    `
}).$mount('#app');
