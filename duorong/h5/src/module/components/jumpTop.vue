/**
* 跳转到顶部
* created by bo.peng 2018/4/18
* email:spion@qq.com
*/
<style scoped>
.jump{
    position:fixed;
    z-index: 9;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:100%;
    background:#FE7634;
    transition-duration:.3s;
    i{
        border-top:1px solid #fff;
        border-right:1px solid #fff;
        transform:rotate(-45deg);
    }
}
</style>
<template>
	<div class="jump img-size" v-show="show && isShow" @click="jump" data-width="60" data-height="60" data-right="30" data-bottom="140">
        <i class="img-size" data-marginTop="9"
           data-width="15" data-height="15" data-borderWidth="4"></i>
    </div>
</template>

<script>
	export default {
	    data(){
            return{
                show : false ,
                content : null,
                timer : 0,
                myScroll : null,
                isShow : true,//外部使用
            }
        },
		mounted(){
            this.setImgSize();
            this.getScroll();
        },
        methods:{
	        hide(){
	            this.show = false;
                this.isShow = true;
            },
            setJump( obj ){ //逻辑隐藏
                Object.assign(this,obj);
            },
	        getScroll(){
                let self = this;
                let content = document.querySelector("#Content");
                content.onscroll = function(){
                    if(content.scrollTop > 300){
                        self.show = true;
                    }else{
                        self.show = false;
                    }
                };
                self.content = content;
                setTimeout(()=>{
                    window.VueParent.$on("scroll",function(myScroll){
                        self.myScroll = myScroll;
                        if(Math.abs(myScroll.y) > 300){
                            self.show = true;
                        }else{
                            self.show = false;
                        }
                    })
                },500);
            },
            jump(){
	            let content = this.content ,
                    top = content.scrollTop,
                    sum = 0,
                    index = 0;
                let rAF = window.requestAnimationFrame	||
                window.webkitRequestAnimationFrame	||
                function (callback) { window.setTimeout(callback, 1000 / 60); };
	            function go(){
                    index+=30;
                    sum = top-index;
                    if(sum<=6){
                        sum=0;
                        //clearInterval(self.timer,go);
                    }else{
                        rAF(go);
                    }
                    content.scrollTop = sum;
                }
                if(this.myScroll){
	                this.myScroll.scrollTo(0,0,300);
                }
                go();
                this.hide();
                //this.go = go;
                //this.timer = setInterval(go,10)
            }
        }
	}
</script>
