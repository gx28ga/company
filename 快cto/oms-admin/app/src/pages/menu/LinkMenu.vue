<template>
    <div>
        <iframe  ref="iframe" @load="loaded"   v-iframe id="iframe-content" :style="height"  :src="url"  width="100%" height="100%"  frameborder="0"></iframe>
    </div>
</template>
<script>
    import { user as UserLogic, common } from '../../logic';
    export default{
        data(){
            return{
                list:[],
                height:'',
                url:'',
                content:''
            }
        },
        directives:{
            iframe:{
                bind(element,binding){
                    var vm = this;

                },
                update(){

                }
            }
        },
        methods:{
            loaded(){
                var vm = this;
                $(window).resize(vm.iFrameHeight());
                $(document).ready(vm.iFrameHeight());
                const app = this.$refs.iframe.contentWindow;
            },
            getUrl(data){ //递归根据id查找iframe的url
                var vm =this;
                if (data){
                    for(var i = 0;i<data.length;i++){
                        if (vm.$route.query.id == data[i].menuId){
                            vm.url =  data[i].url
                            break;
                        }
                        if (data[i].hasOwnProperty('children')){
                            vm.getUrl(data[i].children)
                        }

                    }
                }

                

            },
            getIframeWindow(obj){
                return obj.contentWindow || obj.contentDocument.parentWindow;
            },
            getIframeHeight(obj){
                var idoc = this.getIframeWindow(obj).document;
                if(idoc.body){
                    return Math.max(idoc.body.scrollHeight,idoc.body.offsetHeight);
                }else if(idoc.documentElement){
                    return Math.max(idoc.documentElement.scrollHeight,idoc.documentElement.offsetHeight);
                }
            },
            iFrameHeight() {
                var ifm = $("iframe");
                var a = $(window).height() - 60;
//                if (ifm != null) {
                    ifm.height(a);
//             }
    }
        },
        mounted(){
            var vm = this;
            console.log(UserLogic.getProfile())
             this.list =  UserLogic.getProfile().menus;
            this.getUrl(this.list)


        },
        watch:{
            $route:{
                handler (val) {
                    this.getUrl(UserLogic.getProfile().menus)

                } ,
                immediate: true
            }
        }
    }

</script>