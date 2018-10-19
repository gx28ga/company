import './style/main';
//import info from './common/info'; //获取项目信息
//import {participate} from './common/URL';
 import requirePop from './pop/requirePop.js';
import './pop/index.js';

Vue.use(VueRouter);
const router = new VueRouter({
   mode:"hash",
    base: __dirname,
    routes: [
    {
        path: '/',
        redirect: '/main'
    },
        {
            path: '/main', 
            meta:{
                title:"赚佣金"
            },
            component : function(resolve){
                require(['./earn/index'],resolve)
            }
        }, {
            path: '/task',
            meta:{
                title:"邀请奖励记录"
            },
            component : function(resolve){
                require(['./module1/index'],resolve)
            }
        },
             {
            path: '/level',
            meta:{
                title:"我的待收等级"
            },
            component : function(resolve){
                require(['./level/index'],resolve)
            }
        },
             {
            path: '/earn',
            meta:{
                title:"每月任务"
            }, 
            component : function(resolve){
                /*return require.ensure([],(require)=>{
                    return require('./module/main/index');
                })*/
                require(['./module/index'],resolve)
            }
        }, 
          {
            path: '/hesitory',
            meta:{
                title:"历史数据"
            }, 
            component : function(resolve){
                /*return require.ensure([],(require)=>{
                    return require('./module/main/index');
                })*/
                require(['./heistory/index'],resolve)
            }
        },   
            {
            path: '/strategy', 
            meta:{
                title:"攻略"
            },
            component : function(resolve){
                require(['./strategy/index'],resolve)
            }
        },

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
        '$route' (to, from) {
             this.transitionName = this.getTransition(to,from);
           /* this.home = to.path!='/';
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'*/
        }
    },
    methods:{
          getTransition(to,from){
            var text = 'left' , 
                arr = ['/main','/task','/level','/strategy'];

            for(let i=0;i<arr.length;i++){
                if(to.path==arr[i]){
                    text = 'right';
                    break;
                }else if(from.path==arr[i]){
                    text = 'left';
                    break;
                }else{
                    text = 'left';
                }
            }
            return text;
        }
    },
    mounted(){
        const http = T.imgsrc+"/activity/src/images/"
        T.init({
            loadding : {
                imgs : [
                ],
                callback : function(){
                    if(!T.uid){
                        T.login();
                    }
                }
            }
        })
    },
    template: `
        <div id="app">
            <transition :name="transitionName">
                <router-view class="child-view"></router-view>
            </transition>
            <div id='pop'></div>
        </div>
    `
}).$mount('#app')
