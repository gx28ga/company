import './style/main.css';
import index from './module';
new Vue({
	components : {
		index
	},
    mounted(){
        T.init();
        setTimeout(function(){
           $('#app').removeClass('cur');
           T.setImgSize();
        },300);
    },
    template: `
        <div id="app" class='cur'>
            <div class='container'>
	            <index></index>
            </div>
        </div>
    `
}).$mount('#app');
