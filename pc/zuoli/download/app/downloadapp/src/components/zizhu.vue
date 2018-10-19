<style scoped>
   .zizhu{
        background:#fff;
        .liimg{
            background: url("../images/limoney/bao.png") no-repeat;
            background-size: contain;
            box-sizing: border-box;
        }
        .product{
            text-align: center;
            color:#333333;
        }
        .number{
            text-align: center;
            color:#ff4e6b;
        }
        .mobile{
            border:1px solid #dcdcdc;
            background: #fff;
            margin:0 auto;
            border-radius: 40px;
         .input{
            flex:1;
            input{
                display:block;
                width:100%;
                height:100%;
                border:none;
                box-sizing:border-box;
                border-radius: 40px;
                padding:0 10px;
                background:#fff;
                :-webkit-input-placeholder{
                    color:red;
                    font-size:30px;
                }
            }
        }
        }
        .tishi{ 
            margin:0 auto;
            color:#999;
        }
        .edu{
           .eduBtn{
                color:#ffffff;
                text-align: center;
                border-radius: 40px;
                margin:10px auto;
                 background:-webkit-gradient(linear, 0 0, 100% 0, from(#39d6c6), to(#3bb5dd));
           } 
        }
        .read{
            padding-top:10px;
            line-height:20px;
            color:#333333;
            margin: auto;
            .select{
                display:inline-block;
                margin:  0 30px;
            }
            .check{
                float:left;
                margin-top:5px;
                margin-right:5px;
                background:url("../images/limoney/check.png") no-repeat;
                background-size:contain;
                &.cur{
                     background-image:url("../images/limoney/checked.png");
                 }
            }
            .link{
               color:#0099ff; 
            }
            a:visited{
                text-decoration: none;
            }
        }
        }
</style>
<template>
<article class='zizhu img-size'>
    <div class='liimg img-size' data-height='617' data-marginBottom='70'></div>
    <div class="product img-size" data-fontSize='32' data-height='60' data-lineHeight='60' data-marginTop='10'>最高额度</div>
    <div class='number img-size' data-fontSize='60' data-height='70' data-lineHeight='70' data-marginBottom='80'>3,000.00</div>
    <div class='edu'>
        <div class='eduBtn img-size' data-fontSize='36' data-height='90' data-lineHeight='90' data-width='546' @click='download'>立即下载</div>
    </div>
</article>
</template>
<script>
import Verify from '../common/verifcation'
import requirePop from '../pop/requirePop.js';
import { mapState , mapGetters } from 'vuex';
export default {
    data (){
        return {
            mobile:"",
            checked:true,
            error:null,
            isRight:false
        }
    },
    computed : {
    },
    mounted(){
    },
    watch:{
        
    },
    methods : {
        download(){
            window.location.href='https://h5.zuoli360.com/download'
        }
    }
}
</script>

