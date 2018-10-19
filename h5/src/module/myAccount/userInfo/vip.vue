/**
* vip等级
* created by bo.peng 2018/4/12
* email:spion@qq.com
*/
<style scoped>
    #vip {
       overflow-y: scroll;
    }
   .vipContent{
       background:#fff;
       color:#A0A0A0;
       .vipImg{
           background:url("../../../images/account/vip/vip_bg.png") no-repeat;
           background-size:contain;
           margin:0 auto;
           position: relative;
           color:#fff;
           .vipLogo{
               background:url("../../../images/account/vip/logo_vip.png") no-repeat;
               background-size:contain;
               position: absolute;
           }
           .vipNum{
               background:url("../../../images/account/vip/default_icon.png") no-repeat;
               background-size:contain;
               position: absolute;
           }
           .vipUser{
               position: absolute;
           }
           .vip{
               color:#fff;
               position: absolute;
               .vipLevel{
                   background:url("../../../images/account/vip/VIP.png") no-repeat;
                   background-size:contain;
                   display: inline-block;
               }
           }
       }
       .privilege{
           display: flex;
           align-items: center;
           .privilegeIcon{
               background:url("../../../images/account/vip/gift-1-icons.png") no-repeat;
               background-size:contain;
               display: inline-block;
           }
           .experienceIcon{
               background:url("../../../images/account/vip/king-icons.png") no-repeat;
               background-size:contain;
               display: inline-block;
           }
           .levelRule{
               background:url("../../../images/account/vip/flagfilledicons.png") no-repeat;
               background-size:contain;
               display: inline-block;
           }
           .experienceNow{
               border:1px solid #efbf6c;
               border-radius: 10px;
               color:#666;
           }
           .privilegeCon{
               color:#102542;
           }
           .active{
               color:#FE7634;
           }
       }
       .progress{
           .box{
               display: flex;
               align-items: center;
               .preNumber{
                   color: #666666;
                   width: 50%;
                   text-align: left;
               }
               .nextNumber{
                   width: 50%;
                   color: #A0A0A0;
                   text-align: right;
               }
               .preLevel{
                   width: 50%;
                   color:#EFBF6C;
                   font-weight: 700;
                   text-align: left;
               }
               .nextLevel{
                   width:50%;
                   color:#EEE;
                   font-weight: 700;
                   text-align: right;
               }
           }
            .progressBar{
                background:#EEE;
                width:100%;
                border-radius: 10px;
                .progressBarActive{
                    background:#EFBF6C;
                    border-radius: 10px;
                }
            }
       }
       .levelRuleCon{
           color:#666;
       }
       .levelRuleTable{
           color:#666;
           th{
               background:#F2F2F2;
               text-align: center;
               border:0.5px solid #D2D2D2;
           }
           td{
               border:0.5px solid #D2D2D2;
               text-align: center;
               .numActive{
                   color:#FE7634;
               }
           }
       }
   }
</style>
<template>
    <article class="img-size vip" id="vip">
        <div class="vipContent img-size" data-paddingTop="40"  data-paddingBottom="40" data-paddingLeft="30" data-paddingRight="30" data-marginBottom="20">
            <div class="vipImg img-size" data-width="534" data-height="290" data-marginBottom="42">
                <div class="vipLogo img-size" data-width="122" data-height="34" data-top="40" data-right="30"></div>
                <div class="vipNum img-size" data-width="52" data-height="52" data-top="30" data-left="28"></div>
                <div class="vipUser img-size" data-fontSize="28" data-top="38" data-left="102">{{userName}}</div>
                <div class="vip img-size" data-left="40" data-bottom="48" data-fontSize="48" v-if="vipInfo.viplevel">
                    <span class="vipLevel img-size" data-width="78" data-height="32"></span>{{vipInfo.viplevel}}
                </div>
                <div class="vip img-size" data-left="40" data-bottom="48" data-fontSize="48" v-else>
                    普通会员
                </div>
            </div>
            <div class="privilege img-size" data-fontSize="28" v-if="vipInfo.rateLimit">
                <span class="privilegeIcon img-size"  data-width="34" data-height="30"></span>
                <span class="img-size privilegeCon" data-fontSize="28" data-marginLeft="31" data-marginRight="250">加息特权</span>
                加息  <span class="active">{{vipInfo.rateLimit}}%</span>,剩余 <span class="active">{{vipInfo.useTimes}}</span>次
            </div>
            <div class="privilege img-size" data-fontSize="28" v-if="account.isRas==0" @click="goOpenBank">
                <span class="privilegeIcon img-size"  data-width="34" data-height="30"></span>
                <span class="img-size privilegeCon" data-fontSize="28" data-marginLeft="31" data-marginRight="200">加息特权</span>
                去开户获得加息特权
                <div class="arrow-parent">
                    <arrow color="#A0A0A0"  :borderWidth="3" :width="15" :height="15" name="right"/>
                </div>
            </div>
            <div class="privilege img-size" data-fontSize="28" v-if="account.isRas==1&& !vipInfo.rateLimit">
                <span class="privilegeIcon img-size"  data-width="34" data-height="30"></span>
                <span class="img-size privilegeCon" data-fontSize="28" data-marginLeft="31" data-marginRight="400">加息特权</span>
                暂无
            </div>
        </div>
        <div class="vipContent img-size" data-paddingTop="30" data-paddingBottom="42" data-paddingLeft="30" data-paddingRight="30" data-marginBottom="20">
            <div class="privilege img-size">
                <span class="experienceIcon img-size" data-width="36" data-height="34"></span>
                <span class="img-size privilegeCon" data-fontSize="28" data-marginLeft="31" data-marginRight="42">当前经验</span>
                <span class="img-size experienceNow" data-height="40" data-lineHeight="40" data-fontSize="24" data-paddingLeft="20" data-paddingRight="20">本月已获得{{vipInfo.experiencePoints}}点</span>
            </div>
            <div class="progress img-size" data-marginTop="36">
                <div class="box img-size">
                    <span class="preNumber img-size" data-fontSize="24">{{vipInfo.experienceMin?vipInfo.experienceMin:0}}点</span>
                    <span class="nextNumber img-size" data-fontSize="24">{{vipInfo.experienceMax?vipInfo.experienceMax:0}}点</span>
                </div>
                <div class="progressBar img-size" data-height="10" data-marginTop="10">
                    <div class="progressBarActive img-size" data-height="10" id="progressBar"></div>
                </div>
                <div class="box img-size" data-marginTop="10">
                    <span class="preLevel img-size" data-fontSize="24" v-if="vipInfo.vipName">{{vipInfo.vipName}}</span>
                    <span class="preLevel img-size" data-fontSize="24" v-else>普通会员</span>
                    <span class="nextLevel img-size" data-fontSize="24">{{vipInfo.nextVipName
}}</span>
                </div>
            </div>
        </div>
        <div class="vipContent img-size" data-paddingTop="30" data-paddingBottom="30" data-paddingLeft="30" data-paddingRight="30" data-marginBottom="20">
            <div class="privilege img-size" data-marginBottom="18">
                <span class="levelRule img-size" data-width="34" data-height="30"></span>
                <span class="img-size privilegeCon" data-fontSize="28" data-marginLeft="31" data-marginRight="42">等级规则</span>
            </div>
            <div class="levelRuleCon img-size" data-fontSize="24" data-lineHeight="40">
                1、每月月初会根据上月已获得经验是否达到原VIP等级来判断是否保级成功，保级失败则VIP等级下降一级。<br>
                2、当月获得的经验达到条件可以实时升级，并同时更新VIP特权。<br>
                3、VIP等级与经验值以及对应可享受的加息特权如下表
            </div>
            <table class="img-size levelRuleTable" data-marginTop="20">
                <tr class="img-size" data-height="50">
                    <th class="img-size" data-width="148" data-height="50">VIP等级</th>
                    <th class="img-size" data-width="275" data-height="50">经验值</th>
                    <th class="img-size" data-width="265" data-height="50">加息特权</th>
                </tr>
                <tr v-if="vipInfo" v-for="item in vipInfo.vipConfigVOList" :key="item.id" class="img-size" data-height="50" >
                    <td class="img-size" data-width="148" data-height="50">{{item.vipName}}</td>
                    <td class="img-size" data-width="275" data-height="50">{{item.experienceMin}}~{{item.experienceMax}}</td>
                    <td class="img-size" data-width="265" data-height="50">加息<span class="numActive">{{item.rateLimit}}%</span>剩余 <span class="numActive">{{item.useTimes}}</span>次</td>
                </tr>
            </table>
            <div class="levelRuleCon img-size" data-fontSize="24" data-lineHeight="40">
                <br>
            </div>
        </div>
    </article>
</template>

<script>
    import {LEVEL_INFO} from "../../../contant/urls/USERINFO";
    import arrow from "../../components/arrow";
    import {mapGetters} from 'vuex';
	export default {
        computed:{
            ...mapGetters({
                user: "getUserInfo",
                account : "getUserAccount"
            })
        },
        components:{
            arrow
        },
        data(){
            return{
                vipInfo:"",
                userName:""
            }
        },
        mounted(){
            this.setTitle({
                title : "等级特权",
                show:true,
                back:true
            });
            this.setNav({
                show : false
            });
            let self=this;
            self.ajax({
                url:LEVEL_INFO,
            }).then(data=>{
                self.vipInfo=data.map.result;
                self.$nextTick(()=>{
                    self.setImgSize();
                })
                if(self.vipInfo.experiencePoints>self.vipInfo.experienceMin){
                    let  progressBarWidth=(self.vipInfo.experiencePoints-self.vipInfo.experienceMin)/(self.vipInfo.experienceMax-self.vipInfo.experienceMin)*690;
                    $('#progressBar').attr('data-width', progressBarWidth);
                }else{
                    $('#progressBar').attr('data-width', 1);
                };
            })
            if(this.account.sex==1){
                self.userName=self.account.realName.slice(0,1)+"先生";
            }else if(this.account.sex==2){
                self.userName=self.account.realName.slice(0,1)+"女士";
            }
        },
        methods:{
            goOpenBank(){
                this.go().openAccount.home();
            }
        }
	}
</script>
