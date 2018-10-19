import Vue from "vue";
import './style/main.css';
import Zepto from 'zepto';
import T from "./common/global";
import store from "./store";
import './router';
import Pop from './common/pop/Pop';
import './common/VuePlugin';
import './middle/components';
import jump from './router/jump';
import "./mixin/global";
import headbar from "./module/components/header";
import footerNav from "./module/components/footerNav";
import jumpTop from "./module/components/jumpTop";
import VueRouter from "vue-router";
if (!Object.assign) {
	Object.assign = $.extend;
}
Object.assign(window,{
    $ : Zepto,
    T : T,
    appCall : T.appCall,
    Vue : Vue,
    version : "1.0",//存管1.0 h5版本号
});
Vue.use(VueRouter);
Vue.use(Pop);
Vue.use(jump);
window.VueParent = new Vue({
	router,
	store,
	data() {
		return {
			transitionName: 'left'
		};
	},
	components: {
		headbar,
		footerNav,
        jumpTop
	},
	mounted() {
		this.setImgSize();
	},
	watch: {
		'$route'(to, from) {
			let url = to.path;
			this.$refs.nav.changeStatus(url);
            this.$refs.jump.hide();
			this.getTransition(to, from);
			if(url==="/main"){
			    this.setHead({
                    title : "多融财富"
                })
            }
		}
	},
	methods: {
		getTransition(to, from) {
			let text = 'left',
				arr = ['/main', '/list', '/find', "/myAccount"];
			for (let i = 0; i < arr.length; i++) {
				if (to.path === (arr[i])) {
					text = 'right';
					break;
				} else if (from.path === (arr[i])) {
					text = 'left';
					break;
				} else {
					text = 'left';
				}
			}
			this.transitionName = text;
		},
		setHead(obj) {
			this.$refs.head.setHead(obj);
		},
		setNav(obj) {
			this.$refs.nav.setNav(obj);
		},
        setJumpTop(obj){
		    this.$refs.jump.setJump(obj);
        }
	},
	template: `
	    <div id="app" class="img-size" data-fontSize="24">
	    	<headbar ref="head"></headbar>
	    	<article id="Content">
                <transition :name="transitionName">
                    <router-view class="view">
                    </router-view>
                </transition>
                <jump-top ref="jump"></jump-top>
			</article>
			<footer-nav ref="nav"></footer-nav>
	    </div>
	  `
}).$mount('#app');
