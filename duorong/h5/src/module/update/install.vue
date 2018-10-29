/**
* desc:安装app
* created by bo.peng 2018/6/11.
* email:spion@qq.com
*/
<template><article></article></template>
<script>
    import share from "../../../static/share";
    export default {
        data(){
            return{
                iosImg : require("../../images/update/ios.jpg"),
                androidImg : require("../../images/update/android.jpg")
            }
        },
        created(){
            this.setTitle({
                title : "应用下载",
            });
            this.setNav({
                show : false
            });
            this.install();
            //this.share();
        },
        methods : {
            share(){
                share();
            },
            setIos(bool){
                let src = bool?this.iosImg:this.androidImg;
                this.$pop({
                    close : false,//是否显示关闭按钮
                    content : `<img width="100%" src=${src}/>`,
                    superClass : "mask",
                    width:"100%",
                    transition:"down"
                });
            },
            install(){
                if(T.weixin){
                    this.setIos(T.Iphone);
                }else if (T.Iphone) {
                    window.location.href="https://itunes.apple.com/cn/app/id1337530630?mt=8";
                }else if (T.Android) {
                    window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yz.dr_app";
                }else {
                    window.location.href="http://app.duorongcf.com/dr_app.apk";
                }
            }
        }
    }
</script>

<style scoped>

</style>
