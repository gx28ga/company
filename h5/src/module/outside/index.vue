/**
* 站外链接打开方式
* created by bo.peng 2018/3/31
* email:spion@qq.com
*/
<style scoped>
    .outside{
        display:flex;
        flex:1;
        flex-direction:column;
        height:100%;
        overflow:hidden;
        iframe{
            display:block;
            flex:1;
            height:100%;
            width:100%;
            border:none;
        }
    }
</style>
<template>
    <article class="outside">
        <iframe id="iframe" src="http://app.duorongcf.com" name="outside" style="height:100%"></iframe>
    </article>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        mounted(){
            let query = this.$route.query;
            $(this.$el).find("iframe").attr({"src":decodeURIComponent(query.url)});
            setTimeout(this.getTitle,300);
        },
        methods:{
            getTitle(){
                let title =this.$route.query.title?this.$route.query.title:"活动页面";
                title=title.length>12?title.substring(0,12)+"...":title
                try{
                    //var _iframe = document.getElementById('iframe').contentWindow;
                     title = window.frames["outside"].contentWindow.document.title;
                }catch(e){

                }
                this.setTitle({
                    show : true,
                    title : title,
                    back : true,
                    share:true,
                    shareConfig:{
                        title:"多融财富",
                        link:this.$route.query.url,
                        desc:title,
                        imgUrl:'https://www.duorongcf.com/images/common/dr-sina.png',
                        type:'',
                        dataUrl:''
                    }
                });
                this.setNav({
                    show : false
                });
            }
        }
    }
</script>
