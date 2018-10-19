/**
* 个人相关信息
* created by bo.peng 2018/4/2
* email:spion@qq.com
*/
<style scoped>
.topbar{
    position:relative;
    box-sizing:border-box;
	color:#fff;
    overflow:hidden;
    .setting{
        float:right;
        i{
            background: url("../../../images/account/setting.png") no-repeat;
            background-size:contain;
        }
    }
}
.header{
    background: url("../../../images/account/top_bg.png") 0 bottom #7b7d9a no-repeat;
    background-size:100% auto;
	color:#fff;
	box-sizing:border-box;

    .img{
        float:left;
        background: url("../../../images/account/touxiang.png") no-repeat;
        background-size:contain;
    }
    .name{
        float:left;
    }
    .vip{
        float:left;
        background: url("../../../images/account/vip_zh.png") no-repeat;
        background-size:contain;
        box-sizing:border-box;
    }
    .vip0{
        letter-spacing: -2px;
    }
    .text{
        text-align:center;
    }

}
.assets{
    overflow:hidden;
    clear:both;
    .eye{
        display:inline-block;
        vertical-align: middle;
        margin-top:-2px;
        background: url("../../../images/account/eye_close.png") no-repeat;
        background-size:contain;
        &.current{
            background-image: url("../../../images/account/eye_open.png");
         }
    }
    .price{
        text-align: center;
    }
    ul{
        display:flex;
        li{
            flex:1;
            text-align:center;
        }
    }
}
</style>
<template>
    <header v-if="account" class="header img-size" data-height="430" data-padding="30">
        <div class="topbar img-size" data-paddingBottom="20">
            <div class="setting" @click="setting">
                <i class="img-size" data-width="50" data-height="50"></i>
            </div>
            <div class="userInfo">
                <div class="img img-size"
                     @click="go().all({returnUrl:'/myAccount/userInfo'})"
                     data-width="62" data-height="62"></div>
                <div class="name img-size" data-paddingLeft="20" data-fontSize="34" data-paddingTop="8" >{{account.isRas==1?account.realName:"未开户"}}</div>
                <div class="vip img-size" data-width="112" data-height="30"
                     data-marginTop="15" data-marginLeft="10"
                     data-paddingLeft="30" v-show="account.isRas==1">
                    <div v-if="account.userAccountLevel && account.userAccountLevel.vipLevelNum !=0 &&account.userAccountLevel.vipLevelNum!=null"
                         class="text img-size" data-width="75" data-fontSize="18" data-height="30" data-lineHeight="30">
                        VIP{{account.userAccountLevel.vipLevelNum}}
                    </div>
                    <div v-else class="text vip0 img-size" data-width="75" data-fontSize="12"
                         data-height="30" data-lineHeight="30">
                        普通会员
                    </div>
                </div>
            </div>
        </div>
        <div class="assets">
            <div class="text img-size" data-fontSize="24">
                <span>总资产(元)</span>
                <span class="eye img-size" @click="setPrice" :class="{current:showPrice}" data-width="40" data-height="25" data-marginleft="5"></span>
            </div>
            <div class="price img-size" data-height="140" data-lineHeight="140"
                 data-paddingBottom="35" data-fontSize="72" v-if="showPrice">
                {{(account.balance+account.free+account.wprincipal)|fixed|localeString}}
            </div>
            <div class="price img-size" data-height="140" data-lineHeight="140"
                 data-paddingBottom="35" data-fontSize="72" v-else>
                {{hideVal}}
            </div>
            <aside>
                <ul>
                    <li>
                        <p class="img-size" data-fontSize="24">可用余额(元)</p>
                        <em class="img-size" data-fontSize="28" v-if="showPrice">
                            {{(account.balance)|fixed|localeString}}
                        </em>
                        <em class="img-size" data-fontSize="28" v-else>
                            {{hideVal}}
                        </em>
                    </li>
                    <li>
                        <p class="img-size" data-fontSize="24">累计收益(元)</p>
                        <em class="img-size" data-fontSize="28" v-if="showPrice">{{(account.allWinterest)|fixed |localeString}}</em>
                        <em class="img-size" data-fontSize="28" v-else>{{hideVal}}</em>
                    </li>
                </ul>
            </aside>
        </div>
    </header>
</template>

<script>
    import filter from "../../../mixin/filters";
    filter.filters = {
        fixed : filter.methods._toFixed,
        localeString(val){
            return filter.methods._localeString(val,true);
        }
    };
    export default {
        mixins : [filter],
        props : {
            user : Object,
            account : Object,
            showPrice : Boolean,
            setPrice : Function
        },
        data(){
            return {
                hideVal : "***"
            }
        },
        mounted(){
            this.setImgSize();
        },
        methods : {
            setting(){
                this.go().myAccount.setting();
            }
        }
    }
</script>
