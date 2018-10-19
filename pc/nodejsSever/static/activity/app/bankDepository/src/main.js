import './style/main.css';
import Content from './module/index.vue';

new Vue({
    el : '#app',
    mounted(){
        const url = T.imgsrc+'/activity/app/bankDepository/images/'
        T.init({
            loadding : {
                timing : 'spinner-loader', //加载 spinner , spinner-loader , loadingbar , lightLoader , square ,circles,circles1,circles2,circles3,circles4,line' 
                fillColor : 'rgba(150,213,0,1)',
                imgs : [
                    url+'banner.jpg',
                    url+'footer.jpg',
                    url+'img1.jpg',
                    url+'img2.jpg',
                    url+'text1.png',
                    url+'text2.png',
                    url+'text3.png',
                    url+'tit2.jpg',
                ],
                callback:()=>{
                    setTimeout(()=>{
                        $('#app').addClass('active');
                    },300)
                }
            }
        });
    },
    components : {
        Content
    },
    methods : {
        
    },
    render(h){
        return (
            <div id="app">
                <Content></Content>
                <div id='pop'></div>
            </div>
        )
    }
});
