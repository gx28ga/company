import './style/main.css';
import store from './store';
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
        }
    ]
});
window.router = router;



new Vue({
    router,
    store,
    data() {
        return {
            transitionName: 'left',
            showNav: true ,
            paddingBottom : 0
        }
    },
    components: {
        
    },
    mounted(){
        // this.$store.commit('getUserInfo');
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
	        const navName = ['/main'];
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
                arr = ['/mdule'];

            for(let i=0;i<arr.length;i++){
                if(to.path===(HTTP+arr[i])){
                    text = 'right';
                    break;
                }else if(from.path===(HTTP+arr[i])){
                    text = 'left';
                    break;
                }else{
                    text = 'left';
                }
            }
            return text;
        },
        setBottom(val){
            this.paddingBottom = val;
        }
    },
    template: `
        <div id="app" class='cur' :style="{paddingBottom:paddingBottom+'px'}">
            <div class='container'>
            <transition :name="transitionName">
                <router-view class="child-view"></router-view>
            </transition>
            </div>
        </div>
       
    `
}).$mount('#app');
