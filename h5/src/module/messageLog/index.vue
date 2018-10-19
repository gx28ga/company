/**
* describe 消息记录
* Created by wangCuiqing
* Date: 2018/5/23
*/
<style scoped>
.messageLog{
    .title{
        background:#fff;
        display: flex;
        align-items: center;
        justify-content: center;
        .titleName{
            text-align: center;
        }
        .active{
            border-bottom:1px solid #0084D7;
            color:#0084D7;
        }
    }
    .messageContent{
        background:#fff;
        .messageTop{
            display: flex;
           align-items: center;
            .messageIcon{
                background:#D2D2D2;
                color:#fff;
                text-align: center;
            }
            .noRead{
                background:#FE7634;
                color:#fff;
                text-align: center;
            }
            .messageTitle{
                color:#102542;
            }
        }
        .messageTime{
            color: #A0A0A0;
        }

    }
}
</style>
<template>
    <article class="messageLog img-size" id="List">
       <div class="title img-size" data-height="90" data-marginBottom="2">
            <div class="img-size titleName" data-marginLeft="40" :class="{active:index==num}" data-marginRight="40" data-height="90" data-lineHeight="90" data-fontSize="28" data-width="100" v-for="(item,index) in tabTitle" v-bind:key="index" @click="toggle(index)">{{item}}</div>
       </div>
        <div class="messageContent img-size" data-paddingTop="32" data-paddingBottom="30" data-paddingLeft="30"  v-if="messageList.length>0" v-for="item in messageList" v-bind:key="item.id" data-marginBottom="2" @click="goMessageDetail(item)">
            <div class="messageTop img-size">
                <div class="messageIcon img-size" :class="{'noRead':item.isRead!=1}"  data-width="60" data-height="30" data-fontSize="24" data-marginRight="20" data-marginTop="5" v-text="typeContent(item.type)"></div>
                <div class="messageTitle img-size" data-fontSize="36" v-if="item.title!=null&&item.title!=''">{{item.title}}</div> <div class="messageTitle img-size" data-fontSize="36" v-else>{{item.content}}</div>
            </div>
            <div class="messageTime  img-size" data-fontSize="24" data-marginTop="10" data-paddingLeft="80">{{new Date(item.addTime).Format("yy-MM-dd hh:mm:ss")}}</div>
        </div>
        <noRecord v-if="messageList.length==0"></noRecord>
    </article>
</template>

<script>
    import {MESSAGE_LOG, MESSAGE_READ} from "../../contant/urls/USERINFO";
    import noRecord from "../components/noRecord";
    import {mapGetters} from "vuex";
    export default {
        name: "index",
        computed: {
            ...mapGetters({
                //tradeTypeNumber:"changeTradType",
                catch:"getCatch",
            })
        },
        components:{
            noRecord
        },
        data(){
            return{
               tabTitle:["全部","交易","活动","公告"],
                messageList:[],
                type:-1,
                num:-1,
            }
        },
        watch:{
            num( val ){
                this.messageList=[];
                if(this.num===0){
                    this.type = 0;
                }
                if(this.num===1){
                    this.type=3;
                }else if(this.num===3){
                    this.type=1;
                }else{
                    this.type=this.num;
                }
                this.$store.commit("setCatch",{
                    changeMessgaeLogIndex : {
                        type : val
                    }
                });
                this.getList();
            },
        },
        mounted(){
            this.setImgSize();
            this.setTitle({
                show:true,
                title:"消息记录",
                back:true,
            })
            this.setNav({
                show:false
            })
            let self = this;
            if(this.catch.changeMessgaeLogIndex){
                this.num = this.catch.changeMessgaeLogIndex.type;
            }else{
                this.num = 0;
            };
            self.ajax({
                url:MESSAGE_READ,
            }).then(data=>{
                self.$store.commit("updateHomeIndex",{update:true});
            })
          self.getList();
        },
        methods:{
            toggle(index){//tab栏切换
               this.num=index;
            },
            typeContent(num){
                if(num==1){
                    return "公告"
                }else if(num==2){
                    return "活动"
                }else {
                    return "交易"
                }
            },
            goMessageDetail(item){
                this.go().messageLog.messageDetail({
                    query:{
                        id:item.id,
                        type:item.type,
                        title:item.title,
                    }
                })
            },
            getList(){
                let self=this,
                    page=1,
                    pageOn=10,
                    type=this.type,
                    loadding=true;
                function getInfoMation(){
                    if(loadding==false) return;
                    if(type===-1){
                        return;
                    }
                    loadding=false;
                    self.showMore=true;
                    self.ajax({
                        url:MESSAGE_LOG,
                        data:{
                            type:type,
                            pageOn:page,
                            pageSize:pageOn
                        },
                        load:true
                    }).then(data=>{
                        let list=data.map.page.rows;
                        loadding=true;
                        self.showMore=false;
                        if(!list || !list.length){
                            loadding=false;
                            return;
                        }
                        self.messageList=self.messageList.concat(list);
                        self.$nextTick(()=>{
                            self.setImgSize();
                            let box=$("#List");
                            if(!box.length) return;
                            box.unbind().on("scroll",function(){
                                let scrollHeight=box[0].scrollHeight,
                                    height=window.innerHeight;
                                if(!loadding) return;
                                let scrollTop=$(this).scrollTop()+height+100;
                                if(scrollTop>scrollHeight){
                                    if(loadding){
                                        loadding=true;
                                        page++;
                                        getInfoMation();
                                    }
                                }
                            })

                        })
                    })
                }
                getInfoMation();
            }
        }
    }
</script>
