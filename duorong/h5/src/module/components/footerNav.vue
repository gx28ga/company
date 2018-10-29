/**
* 底部栏目信息
* created by bo.peng 2018/3/29
* email:spion@qq.com
*/
<style scoped>
    .footer{
        ul{
            height:100%;
            display:flex;
            padding-top:5px;
            border-top:.5px solid #ccc;
            background:#fff;
        }
        li{
            flex:1;
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            color:#A0A0A0;

            &.current{
                 color: #102542;
             }
        }
        i{
            display:block;
        }
        .home{
            i{
                background:url("../../images/nav/home.png");
                background-size:contain;
            }
            &.current i{
                 background-image: url("../../images/nav/home_on.png");
             }
        }
        .product{
            i{
                background:url("../../images/nav/product.png");
                background-size:contain;
            }
            &.current i{
                 background-image: url("../../images/nav/product_on.png");
             }
        }
        .find{
            i{
                background:url("../../images/nav/find.png");
                background-size:contain;
            }

            &.current i{
                 background-image: url("../../images/nav/find_on.png");
             }
        }
        .myaccount{
            i{
                background:url("../../images/nav/myaccount.png");
                background-size:contain;
            }

            &.current i{
                 background-image: url("../../images/nav/myaccount_on.png");
             }
        }
    }
    .blank{
        height:20px;
        background:#fff;
    }
</style>
<template>
    <section>
        <footer v-show="show" class="footer img-size" data-height="100" data-fontSize="24">
            <ul>
                <li class="home" :class="{current:showCurrent[0]}" @click="home">
                    <i class="img-size" data-width="36" data-height="36"></i>
                    首页
                </li>
                <li class="product" :class="{current:showCurrent[1]}" @click="product">
                    <i class="img-size" data-width="36" data-height="36"></i>
                    理财
                </li>
                <li class="find" :class="{current:showCurrent[2]}" @click="find">
                    <i class="img-size" data-width="36" data-height="36"></i>
                    发现
                </li>
                <li class="myaccount" :class="{current:showCurrent[3]}" @click="myAccount">
                    <i class="img-size" data-width="36" data-height="36"></i>
                    账户
                </li>
            </ul>
        </footer>
        <div class="blank" v-if="IphoneX"></div>
    </section>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    computed : {
        ...mapGetters({
            user : "getUserInfo"
        })
    },
    data (){
        return {
            show : !T.isApp,
            showCurrent : [],
            IphoneX : T.IphoneX,
        }
    },
    mounted(){
        this.setImgSize();
    },
    methods : {
        home(){
            this.go().home();
        },
        product(){
            this.go().product.home();
        },
        find(){
            this.go().find.home();
        },
        myAccount(){
            this.go().myAccount.home();
        },
        setNav(obj){
            this.show = T.isApp?false:obj.show;
        },
        changeStatus(url){
            let self = this;
            this.showCurrent = [];
            ["main$","list","find","myAccount,login,openAccount"].forEach((value , index)=>{
                let newValue , str = value.split(",") ,
                    len = str.length;
                if(len>1){
                    for( let i=0; i<len; i++ ){
                        newValue = url.search(new RegExp(str[i]))>-1;
                        if(newValue){
                            break;
                        }
                    }
                }else{
                    newValue = url.search(new RegExp(value))>-1;
                }
                self.showCurrent[index] = newValue;
            });
        }
    }
};
</script>
