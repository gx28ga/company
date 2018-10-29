<style scoped>
    .novice{
        background:#fff; overflow:hidden; margin-bottom:10px;
        .title{ color:#444; padding-left:15px; border-bottom: .5px solid #ddd;
            display:flex;
            flex-direction:row;
            h2{ font-weight:bold;}
            .expain{
                background: #F4F4F4;
                color:#E94F37;
                padding:0 10px;
                border-radius: 100px;
                i{ display:inline-block;
                    vertical-align: middle; margin-top:-3px; background:url(../images/hongbao.png) no-repeat; background-size:contain;}
            }
        }
        .content{
            padding:15px; text-align:center;
            .price{ 
                em{color: #FF580F; font-weight:bold;}
                p{color: #999999;}
            }
            .about{
                ul{
                    display:flex;
                    li{ flex:1; display:flex;
                        flex-direction:column;
                        justify-content:center;
                    }
                }
                b{ display:block; color:#444;}
                p{ color:#999; }
            }
            .btn{ background: #00C6A8; border-radius:4px; color:#fff; }
        }
    }
</style>
<template>
<article class='novice'>
    <div class='title img-size' data-height='90' data-lineHeight='90' >
        <h2 class="img-size" data-fontSize='30'>新手专享标</h2>
        <div class="expain img-size" data-fontSize="24" data-height="40" data-lineHeight="40" data-marginLeft="30" data-marginTop="25"><i class='img-size' data-marginRight="5" data-width="22" data-height="24"></i>投资兑现20元红包</div>
    </div>
    <div class='content'>
        <div class='about img-size' data-paddingTop='25' data-paddingBottom='50'>
            <ul>
                <li class="price">
                    <em class='img-size' data-fontSize='56'>50<span class='img-size' data-fontSize='32'>%</span></em>
                    <p class='img-size' data-fontSize='26'>历史年化收益率</p>
                </li>
                <li>
                    <b class='img-size' data-fontSize='32'>33天</b>
                    <p class='img-size' data-fontSize='26'>项目期限</p>
                </li>
                <li>
                    <b class='img-size' data-fontSize='32'>454元</b>
                    <p class='img-size' data-fontSize='26'>剩余金额</p>
                </li>
            </ul>
        </div>
        <div class='btn img-size' data-height='88' data-lineHeight='88' data-fontSize='33' @click="gonovice">立即去投资</div>
    </div>
</article>
</template>
<script>
import requirePop from '../pop/requirePop.js';
import { mapState , mapGetters } from 'vuex';
export default {
    props : {
        commend : Boolean,//是否是推荐项目里显示 true 为是
    },
    data (){
        return {
            data : null,
            list : []
        }
    },
    computed : {
        ...mapState([
            'user'
        ]),
        ...mapGetters([
            'userInfo'
        ])
    },
    mounted(){
        const self = this;
        /*T.ajax({
            mobile : 
        },'M003').then(data=>{

        })*/
    },
    watch:{
        "userInfo"(){
            this.getRcomment();
        }
    },
    filters : {
        maxfilter( num ){
            let text = num;
            if(num>=10000){
                text = (num/10000).toFixed(3);
                text = text.substr(0,text.length-1);
                text += '万'
            }
            return text;
        }
    },
    methods : {
        getRcomment(){
            const self = this;
        },
        gonovice(  ){
	        requirePop('tel')
        }
    }
}
</script>