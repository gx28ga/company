<style scoped>
    article{
        .title{
            h2{ font-weight: bold; }
            .more{ float:right; color:#999; 
                .jian{
                    background:red;
                    background-size: contain;
                    display: inline-block;
                    vertical-align: middle;
                    margin-top: -3px;
                    margin-left: 5px;
                }
            }
        }
        .content{
            ul{ display:flex; padding-top:5px;
                li{
                    flex:1;
                    width:33%;
                    text-align: center;
                    img{ margin:0 auto; }
                    h3{
                        width:90%;
                        margin:0 auto;
                        font-size:14px;
                        overflow:hidden;
                    }
                }
            }
        }
    }
</style>
<template>
<article>
    <div class="title img-size" data-height='60' data-lineHeight='60'>
        <div class='more img-size' data-fontSize='26' @click='more()'>查看全部<i class='jian img-size' data-width='14' data-height='24'></i></div>
        <h2 class="img-size" data-fontSize='30'>相关协议</h2>
    </div>
    <div class="content">
        <ul>
            <li v-for="obj in list" @click='showPic(obj)'>
                <img class='img-size' data-width='210' data-height='260' src=''>
                <h3 data-fontSize='28' data-height='55' data-lineHeight='55'>picName</h3>
            </li>
        </ul>
    </div>
</article>
</template>
<script>
    import requirePop from '../pop/requirePop.js';
    export default {
        props : {
            data : Object,
        },
        data(){
            return {
                list : null
            }
        },
        mounted(){
            let arr = [];

            this.$nextTick(T.setImgSize);
        },
        methods : {
            more(){
                //T.go.relevantagreement();
            },
            showPic(obj){
            },
        }
    }
</script>