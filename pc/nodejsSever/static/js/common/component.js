Vue.component('coupon-tag', {
	template: '<div>' +
		'<span v-if="item.isRookie==1" data-tips="仅新注册用户可体验一次" class="yellow tag-tips">新手专享</span>' +
		'<span v-if="item.isExclusive==1" data-tips="本产品可用专属加息券，投资时增加投资利息" class="blue tag-tips">专属加息券</span>'+
		'<span v-if="item.isInterest==1" data-tips="本产品可用加息券，投资时增加投资利息" class="blue tag-tips">加息券</span>'+
		'<span v-if="item.isCash==1" data-tips="本产品可用返现券，投资成功返现" class="red tag-tips">返现券</span>'+
		'<span v-if="item.isDouble==1" data-tips="本产品可用翻倍券，投资时产品利率翻倍" class="red tag-tips">翻倍券</span>' +
		'<span v-if="item.activityRate>0" data-tips="活动利率" class="activity tag-tips">活动</span>' +
	'</div>',
	props : ['item']
});
Vue.component('product-status', {
	template: '<div>' +
		'<p class="bill-end" v-if="item.status == 6 || item.status == 7 "></p>' +
		 /*募集结束*/
		'<p class="bill-wait" v-if="item.status == 8"></p>'+
		/*项目计息中*/
		'<p class="bill-already" v-if="item.status == 9"></p>'+
		/*已回款*/
	'</div>',
	props : ['item']
});
Vue.component("pop",{
	template : `
		<transition name="down">
			<div class='pop transition' v-show='showModal' @click="close">
				<div class="content-wrapper" @click='closePropagtion($event)'>
					<a v-if="obj.close" @click="close" href="javascript:void(0)" class='close'>关闭</a>
					<div v-if="obj.title" class='title'>
						<slot name='title'></slot>
					</div>
					<div class='content'>
						<slot name='content'></slot>
					</div>
					<div v-if="obj.footer" class='footer'>
						<slot name='footer'></slot>
					</div>
				</div>
			</div>
		</transition>
	`,
	props : {
		obj : Object,
		closeCallback : {
			type: Function,
			default: function () {

			}
		},
		closePop : Function
	},
	data(){
		return {
			showModal : false
		}
	},
	mounted(){
		window.onresize = ()=>{
			if(this.showModal){
				setTimeout(this.setSize,200);
			}
		}
	},
	methods : {
		closePropagtion : function( e ){
			e.stopPropagation();
		},
		show : function(callback){
			this.showModal = true;
			$('html').css({height:'100%',overflow:'hidden'});
			setTimeout(()=>{
				this.setSize();
				if($.type(callback) == 'function'){
					callback();
				}
			},310);
		},
		close : function(){
			this.showModal = false;
			$('html').removeAttr('style');
			setTimeout(()=>{
				$(this.$el).parent().remove();
			},310);
			this.closeCallback();
			this.closePop && this.closePop();
		},
		setSize(){
			let ele = $(this.$el) ,
				wrapper = ele.find('.content-wrapper'),
				width = window.innerWidth-50,
				height = window.innerHeight-50;

			if(wrapper.width()>=width){
				wrapper.width(width);
			}else{
				wrapper.width('auto')
			}
			if(wrapper.height()>=height){
				wrapper.height(height);
			}else{
				wrapper.height('auto')
			}
		}
	}
});


