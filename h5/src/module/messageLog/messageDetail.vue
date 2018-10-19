/**
* describe 消息详情
* Created by wangCuiqing
* Date: 2018/5/24
*/
<style scoped>
    .messageDetail{
        background:#fff;
        color:#102542;
        .name{
            text-align: right;
        }
    }
</style>
<template>
<article>
    <div class="messageDetail img-size" data-fontSize="28" data-paddingLeft="30" data-paddingRight="30" data-paddingTop="40" data-paddingBottom="40">
        <div v-html="content.htmlContent"></div>
        <div>
            <p class="content img-size" data-lineHeight="44">
                {{content.content}}
            </p>
            <p class="name img-size" data-lineHeight="44" data-marginTop="30">
               {{new Date(content.createTime).Format("yyyy.MM.dd")}}
            </p>
        </div>
    </div>
</article>
</template>

<script>
    import {MESSAGEDETAIL} from "../../contant/urls/USERINFO";
    export default {
        name: "message-detail",
        data(){
            return{
                content:"",
            }
        },
        mounted(){
            this.setImgSize();
            let self=this,
                id=T.getQueryString("id"),
                type=T.getQueryString("type"),
                title=T.getQuery("title")
            self.ajax({
                url:MESSAGEDETAIL,
                data:{
                    id:id,
                    type:type
                }
            }).then(data=>{
                self.content=data.map.sysArticle;
                let detailTitle=data.map.sysArticle.title?data.map.sysArticle.title:title;
                if(detailTitle.length>12){
                    detailTitle=detailTitle.substring(0,10)+"...";
                }
                self.setTitle({
                    show:true,
                    title:detailTitle,
                    back:true,
                })
                self.setNav({
                    show:false
                })
            })
        }
    }
</script>
