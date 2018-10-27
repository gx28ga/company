/**
* 我的投资记录 - 历史记录
* created by bo.peng 2018/5/21
* email:spion@qq.com
*/
<style scoped>
    .inverst{
        background:#fff;
        .center{
            display:flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        nav{
            .flex{ flex:1;}
            ul{
                height:45px;
                li{
                    font-size: 14px;
                    &.line{
                        width:.5px;
                        height:14px;
                        background: #D2D2D2;
                    }
                    &.current{
                        color: #FE7634;
                    }
                }
                h2{
                    padding-right:5px;
                    font-size:14px;
                    font-weight:normal;
                }
            }
        }
        .nodata{
            padding:30px;
            text-align:Center;
        }
        .more{
            padding:10px 0;
            i{ display:block; margin:0 auto; background:url(../../../images/common/loading.gif); background-size: contain; }
        }
    }
</style>
<template>
    <article id="List" class="inverst" v-if="map">
        <nav>
            <ul class="center">
                <li class="flex center" :class="{current:index===0||index===1}" @click="setTab(0)">
                    <h2>投资时间</h2>
                    <div class="arrow">
                        <arrow name="top" :color="color1" :width="9" :height="9"/>
                        <arrow name="bottom" :color="color0" :width="9" :height="9"/>
                    </div>
                </li>
                <li class="line"></li>
                <li class="flex center" :class="{current:index===2||index===3}" @click="setTab(1)">
                    <h2>到期时间</h2>
                    <div class="arrow">
                        <arrow name="top" :color="color3" :width="9" :height="9"/>
                        <arrow name="bottom" :color="color2" :width="9" :height="9"/>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="content" v-if="list">
            <box :list="list"/>
            <div class='more' v-show='showMore'>
                <i class='img-size' data-width='100' data-height='100'></i>
            </div>
        </div>
        <div class="content nodata" v-else>
            暂无数据
        </div>
    </article>
</template>
<script>
    import filter from "../../../mixin/filters";
    import arrow from "../../components/arrow";
    import {MYINVEST_CENTER} from "../../../contant/urls/MYACCOUNT";
    import box from "./common/box";
    export default {
        components:{
            arrow,
            box
        },
        data(){
            return{
                index : -1,
                color0 : '#FE7634',
                color1 : '',
                color2 : '',
                color3 : '',
                pageOn : 1,
                pageSize : 20,
                list : [],
                map : null,
                showMore : false,
            }
        },
        watch:{
            index(num){
                let self = this;
                [0,1,2,3].forEach(val=>{self["color"+val] = "#D2D2D2"});
                this["color"+num] = "#FE7634";
                this.list = [];
                this.getList();
            }
        },
        mounted(){
            this.index = 0;
            this.setTitle({
                show:true,
                title : "投资记录",
                back : true,
            });
        },
        filters:{
            localeString : filter.methods._localeString
        },
        methods:{
            getList(){
                let self = this ,
                    page = 1 ,
                    pageSize = 10 ,
                    loading = true;
                function getList(){
                    if(loading==false) return;
                    loading = false;
                    self.showMore = true;
                    self.ajax({
                        url : MYINVEST_CENTER,
                        data : {
                            sortType : self.index,
                            type : 2,
                            pageOn : page,
                            pageSize : pageSize,
                        },
                    }).then(data=>{
                        self.map = data.map;
                        if(data.map.current){
                            data.map.current.type = 99
                        }
                        let list = data.map.drProductInvestList;
                        loading = true;
                        self.showMore = false;
                        if(!list || !list.length){
                            loading = false;
                            return;
                        }
                        self.list = self.list.concat(list);
                        self.$nextTick(function(){
                            T.setImgSize();
                            let box = $('#List');
                            if(!box.length) return;
                            box.unbind().on('scroll',function(){
                                let scrollHeight = box[0].scrollHeight ,
                                    height = window.innerHeight;
                                if(!loading) return;
                                let scrollTop = $(this).scrollTop()+height+100;
                                if(scrollTop>scrollHeight){
                                    if(loading){
                                        loading = true;
                                        page++;
                                        getList();
                                    }
                                }
                            })
                        });
                    });
                }
                getList();
            },
            setTab( val ){
                if(val===0){
                    this.index = this.index===0?1:0;
                }else{
                    this.index = this.index===2?3:2;
                }
            }
        }
    }
</script>
