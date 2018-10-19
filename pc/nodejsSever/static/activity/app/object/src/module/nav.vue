<style scoped>
    .nav-footer{
        position:fixed; left:0; bottom:0; width:100%; z-index:998;
    }
    .nav{ background: #FFFFFF; border-top:1px solid #ddd;
        box-sizing:border-box;
        ul{
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:row;
            li{
                flex:1;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
                text-align:center;
                h2{ font-weight:normal; }
                transition-duration:.3s;
                i{
                    display:block;
                    background-size:contain;
                    &.home{
                        background-image:url(../images/nav-icon-home.png);
                    }
                    &.project{
                        background-image:url(../images/nav-icon-rcomment.png);
                    }
                    &.my{
                        background-image:url(../images/nav-icon-my.png);
                    }
                }
                &.active{
                    color:#00C6A8;
                    .home{background-image:url(../images/nav-icon-home-active.png);}
                    .project{background-image:url(../images/nav-icon-rcomment-active.png);}
                    .my{background-image:url(../images/nav-icon-my-active.png);}
                }
            }
        }

    }
</style>
<template>
<div class='nav-footer' v-show='showNav'>
    <nav id='Nav' class='nav img-size' data-height='98' data-fontSize='20'>
       <ul>
            <router-link to="main" tag='li' ><i class='home img-size' data-width='50' data-height='50'></i><h2>首页</h2></router-link>
            <router-link to="login" tag='li' ><i class='project img-size' data-width='50' data-height='50'></i><h2>登录</h2></router-link>
       </ul>
    </nav>
   <downApp :closeDown='closeDown'></downApp>
</div>
</template>
<script>
import downApp from '../components/downApp.vue';
export default {
    components : {
        downApp : downApp
    },
    props:{
        setBottom : Function,
        showNav : Boolean
    },
    watch :{
        showNav : function( val ){
            if(val == true){
                setTimeout(this.getHeight,300);
            }else{
                this.setBottom(0)
            }
        }
    },
    mounted(){
        T.setImgSize();
        this.getHeight();
    },
    methods:{
        getHeight(){
            var height = $('#Nav').height()+$('.downApp').height();
            this.setBottom(height)
        },
        closeDown(){
            var height = $('#Nav').height();
            this.setBottom(height)
        }
    }
}
</script>