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
            component: resolve => require(['./module/login'], resolve),
        }, 
         {
            path: '/open',
            component: resolve => require(['./module/open'], resolve),
        }, 
         {
            path: '/drawals',
            component: resolve => require(['./module/drawals'], resolve),
        }, 
        {
            path: '/investment',
            component: resolve => require(['./module/investment'], resolve),
        }, 
         {
            path: '/register',
            component: resolve => require(['./module/register'], resolve),
        }, 
        {
            path: '/problem',
            component: resolve => require(['./module/problem'], resolve),
        },
          {
            path: '/explain',
            component: resolve => require(['./module/explain'], resolve),
        },
        {
            path: '/question',
            component: resolve => require(['./module/question'], resolve),
        },
         {
            path: '/question2',
            component: resolve => require(['./module/question2'], resolve),
        }, {
            path: '/question3',
            component: resolve => require(['./module/question3'], resolve),
        }, {
            path: '/question4',
            component: resolve => require(['./module/question4'], resolve),
        }, {
            path: '/question5',
            component: resolve => require(['./module/question5'], resolve),
        }, {
            path: '/question6',
            component: resolve => require(['./module/question6'], resolve),
        }, {
            path: '/question7',
            component: resolve => require(['./module/question7'], resolve),
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
