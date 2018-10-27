import Vue from "vue";
Vue.component("pop",{
	template : `
		<transition :name="transition">
			<div class='pop transition' v-show='showModal' @click="closethisPop" :class="obj.superClass">
				<div class="content-wrapper img-size" :class="obj.wrapper" @click='closePropagtion($event)'
				    :data-width="obj.width*2||'auto'" data-paddingBottom="obj.paddingBottom?obj.paddingBottom:30">
					<a v-if="obj.close" @click="close" href="javascript:void(0)"
					    data-width="30" data-height="30" data-top="30" data-right="30"
					    class='close img-size'></a>
					<div v-if="obj.title" class='title img-size' data-marginTop="50" data-fontSize="36">
						<div class="icon img-size" :class="obj.icon"
						data-width="104" data-height="104"></div>
						<slot name='title'></slot>
					</div>
					<div class='content img-size' data-fontSize="28">
						<slot name='content'></slot>
					</div>
					<div v-if="obj.footer" class='footer img-size'>
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
		}
	},
	data(){
		return {
			showModal : false
		}
	},
    created(){
        if(!this.obj.icon){
            this.obj.icon = "icon3";
        }
    },
	mounted(){
	    let self = this;
        window.addEventListener('popstate', function() {
            self.closethisPop();
        });
		window.onresize = ()=>{
			if(this.showModal){
				this.setSize();
			}
		};
		this.$nextTick(()=>{
		   this.setImgSize();
        });
	},
	methods : {
		closePropagtion : function( e ){
			e.stopPropagation();
		},
		show : function(callback){
			this.showModal = true;
			$('html').css({height:'100%',overflow:'hidden'});
            this.setSize();
			setTimeout(()=>{
				if($.type(callback) === 'function'){
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
			$('html').removeAttr('style');
			setTimeout(()=>{
				$(this.$el).parent().remove();
			},310);
			this.obj.closeCallback && this.obj.closeCallback.call(this);
		},
		setSize(){
			let ele = $(this.$el) ,
				wrapper = ele.find('.content-wrapper'),
				title = wrapper.children(".title"),
				content = wrapper.children(".content"),
				titHeight = title.height()+26,
				width = window.innerWidth-20,
				height = window.innerHeight-50;
			if(this.obj.width!="100%" && this.obj.width != "auto"){
                if(wrapper.width()>=width){
                    wrapper.width(width);
                }else{
                    wrapper.width(this.obj.width)
                }
            }
			if(wrapper.height()>=height){
				wrapper.height(height);
				content.height(height-titHeight);
			}else{
				/*wrapper.height('auto');
				content.height("auto");*/
			}
		}
	}
});
