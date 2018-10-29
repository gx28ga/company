import './style/main';
//import info from './common/info'; //获取项目信息
//import {participate} from './common/URL';
 // import requirePop from './pop/requirePop.js';
import './pop/index.js';

Vue.use(VueRouter);
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
            component : function(resolve){
                require(['./earn/index'],resolve)
            }
        }

    ]
});
/*router.beforeEach((to, from, next) => {
    $('#pop').html('<div class="child"></div>')
    next(vm => {});
});*/


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
       /* '$route' (to, from) {
            this.home = to.path!='/';
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
              if(!T.uid && to.path!='/strategy'){
                requirePop('explain',{
                    props: {
                        content : '对不起，请登录后再操作。',
                        transition : 'rotate3d',
                        okTxt : '马上去登录',
                        okCallback : function(){
                            T.login();
                        },
                        closeCallback : function(){
                            router.push('/level')
                        }
                    }
                },'publicTips');
            }
        }*/
    },
    mounted(){
        const http = T.imgsrc+"/activity/src/images/"
        T.init({
            loadding : {
                imgs : [
                ],
                callback : function(){
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
