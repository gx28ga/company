import './style/main.css';
import home from './module';
new Vue({
	data(){
		return {

		}
	},
	components:{
		home
	},
	mounted(){
		T.init();
	},
	methods : {

	},
	template: `
	    <div id="app">
	    	<home></home>
	    </div>
	  `
}).$mount('#app');