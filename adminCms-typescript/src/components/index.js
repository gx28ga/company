/**
 *@author bo.peng
 *@createTime 06 2018/9/6
 *@description 常用组件
 */
import Vue from "vue/dist/vue";
Vue.component("pop",{
	template : `
		<transition :name="transition">
			<div class='pop transition' v-show='showModal' @click="closethisPop" :class="obj.superClass">
				<div class="content-wrapper" :class="obj.wrapper" @click='closePropagtion($event)'>
					<a v-if="obj.close" @click="close" href="javascript:void(0)" class='close'><i class="fa fa-times"/></a>
					<div v-if="obj.title" class='pop-title'>
						<slot name='title'></slot>
					</div>
					<div class='pop-content'>
						<slot name='content'></slot>
					</div>
					<div v-if="obj.footer" class='pop-footer'>
						<slot name='footer'></slot>
					</div>
				</div>
			</div>
		</transition>
	`,
	props : {
		obj : Object,
		transition : {
			type:String,
			default : 'bounceIn'
		},
	},
	data(){
		return {
			showModal : false
		}
	},
	mounted(){
		let self = this;
		window.onresize = ()=>{
			if(this.showModal){
				setTimeout(this.setSize,200);
			}
		}
		window.addEventListener('popstate', function() {
			self.closethisPop();
		});
	},
	methods : {
		closePropagtion : function( e ){
			e.stopPropagation();
		},
		show : function(callback){
			this.showModal = true;
			let html = document.querySelector("html");
			html.height = "100%";
			html.overflow = "hidden";
			setTimeout(()=>{
				this.setSize();
				if(typeof callback == 'function'){
					callback();
				}
			},310);
		},
		closethisPop(){
			if(this.obj.removeClose) return;
			this.close();
		},
		close : function(){
			this.showModal = false;
			let html = document.querySelector("html");
			html.removeAttribute('style');
			setTimeout(()=>{
				document.querySelector("body").removeChild(this.$el.parentNode.parentNode);
			},310);
			this.closeCallback && this.closeCallback();
			this.obj.closeCallback && this.obj.closeCallback();
		},
		setSize(){
			let ele = this.$el ,
				wrapper = ele.querySelector('.content-wrapper'),
				title = wrapper.querySelector(".pop-title"),
				content = wrapper.querySelector(".pop-content"),
				titHeight = title?(title.offsetHeight+26):0,
				width = window.innerWidth-50,
				height = window.innerHeight-50;

			if(wrapper.offsetWidth>=width){
				wrapper.style.width = width+"px";
			}else{
				wrapper.style.width = "auto";
			}
			if(wrapper.offsetHeight>=height){
				wrapper.style.height = (height-titHeight)+"px";
			}else{
				wrapper.style.height = 'auto';
				content.style.height = 'auto';
			}
		}
	}
});