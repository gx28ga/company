/**
* describe  积分明细
* Created by wangCuiqing
* Date: 2018/5/2
*/
<style scoped>
.mingXi{
    .mingXiTitle{
        background:#fff;
        color:#A0A0A0;
        .points{
            color: rgba(254,118,52,0.90);
            float:right;
        }
    }
    .point{
        background:#fff;
        .pointCon{
            background:#fff;
            .pointMingXi{
                background:url("../../images/account/inviteFriend/mingxi.png") no-repeat;
                background-size:contain;
                float:left;
            }
            .pointNum{
                color:#333;
                float:left;
            }
            .pointsName{
                float: left;
                color:#A0A0A0;
                .name{
                    color:#333;
                }
            }
        }
    }
    .di{
        color:#A0A0A0;
        text-align: center;
    }
}
</style>
<template>
   <article class="mingXi">
       <div class="mingXiTitle img-size" data-fontSize="36" data-height="130" data-lineHeight="130" data-paddingLeft="30" data-paddingRight="35" data-marginBottom="20">
当前积分<span class="points img-size" data-fontSize="48">{{pointlog.points}}</span>
       </div>
       <div class="point img-size" data-paddingTop="40">
           <div class="pointCon img-size" data-height="110" data-paddingLeft="34" data-paddingBottom="20" v-for="item in pointlog.result" v-bind:key="item.id">
               <div class="pointMingXi img-size" data-width="22" data-height="106" data-marginRight="10" data-marginTop="15"></div>
               <div class="pointNum img-size" data-fontSize="36" data-width="100" >{{item.points}}</div>
               <div class="pointsName img-size" data-marginLeft="72">
                   <p class="img-size name" data-fontSize="28" data-marginBottom="20">{{item.desc}}</p>
                   <p class="img-size" data-fontSize="24" >{{item.occurTime}}</p>
               </div>
           </div>
       </div>
       <div class="di img-size" data-fontSize="24" data-height="30" data-lineHeight="30" data-marginTop="20" data-paddingBottom="40">已经到底啦~</div>
   </article>
</template>

<script>
    import {POINTLOG} from "../../contant/urls/SHOPPING";
    export default {
        data(){
            return{
               pointlog:"",
            }
        },
        mounted(){
            //this.setImgSize();
            this.setTitle({
                show:true,
                title:"积分明细",
                back:true,
            });
            this.setNav({
                show:false
            });
            let self=this;
            self.ajax({
                url:POINTLOG,
                load:true,
            }).then(data=>{
                self.pointlog=data.map;
                self.$nextTick(()=>{
                    self.setImgSize();
                })
            })
        }
    }
</script>
