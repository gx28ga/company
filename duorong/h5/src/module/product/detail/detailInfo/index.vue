/**
* 产品信息详情
* created by bo.peng 2018/4/26
* email:spion@qq.com
*/
<style scoped>
    section {
        background: #fff;
        margin-bottom: 10px;
    }
    .title {
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
        border-bottom: .5px solid #D2D2D2;
    }
    .content {
        line-height: 20px;
        padding: 10px 15px;
        color: #666666;
    }
    .icon {
        display: inline-block;
        width: 7px;
        height: 12px;
        background: url("../../../../images/product/right-icons.png") no-repeat;
        background-size: contain;
    }
    .arrow-parent {
        padding-left: 15px;
    }
    .doc {
        padding-left:15px;
        li{
            height:45px;
            padding-right:15px;
            display: flex;
            align-items:center;
            &:not(:last-child){
                border-bottom:.5px solid #D8D8D8;
            }
            .name{
                flex:1;
                color: #102542;
            }
        }
    }
    .power{
        padding:10px 15px;
        li{
            display:flex;
            padding:10px 0;
        }
        .name{
            flex:1;
        }
        .status{
            color:#41C653;
        }
        .check{
            display:inline-block;
            width:15px;
            height:15px;
            border-radius:100%;
            background:#41C653;
            text-align:center;
            margin-right:5px;
            i{
                width:7px;
                height:7px;
                border-top:1.5px solid #fff;
                border-right:1.5px solid #fff;
                transform:rotate(120deg);
            }
        }
    }
    .about{
        dl{
            dt{
                font-weight:bold;
            }
            dd{
                padding-bottom:10px;
                color:#999;
            }
        }
    }
</style>
<template>
    <article v-if="data">
        <section class="file" v-if="data.fileDocList || data.projectList">
            <div class="title" v-if="data.detail.fileDocList">
                <div class="icon"></div>
                项目文件
            </div>
            <div class="content" v-if="data.detail.fileDocList">
                <p>
                    为了保障您的权益，多融财富特别提醒您，在您投资之前请仔细阅读以下文件，如您继续投资，则表示您已经完全理解相关文件的全部内容并自愿接受相关文件的约束。
                </p>
            </div>
        </section>
        <section class="doc" v-if="data.detail.fileDocList">
            <ul>
                <li v-for="item in data.detail.fileDocList" :key="item.bigUrl" @click="goUrl(item)">
                    <div class="name">{{item.title}}</div>
                    <div class="arrow-parent">
                        <arrow color="#A0A0A0" :borderWidth="3" :width="15" :height="15" name="right"/>
                    </div>
                </li>
            </ul>
        </section>
        <section class="power" v-if="data.projectList">
            <ul>
                <li v-for="item in data.projectList" :key="item">
                    <div class="name">{{item}}</div>
                    <div class="status">
                        <span class="check"><i></i></span>
                        已审核
                    </div>
                </li>
            </ul>
        </section>
        <section class="about" v-if="(data.extendTextList!==null&&data.extendTextList.length)||(data.detail.extendTextList!=null&& data.detail.extendTextList.length)">
            <div class="title">
                <div class="icon"></div>
                项目介绍
            </div>
            <div class="content">
                <!--产品扩展信息-->
                <dl v-if="data.detail.extendTextList && data.detail.extendTextList.length" v-for="item in data.detail.extendTextList" :key="item.title">
                    <dt>{{item.title}}</dt>
                    <dd>{{item.content}}</dd>
                </dl>
                <dl v-for="item in data.extendTextList" :key="item.title">
                    <dt>{{item.title}}</dt>
                    <dd>{{item.content}}</dd>
                </dl>
            </div>
        </section>
    </article>
</template>

<script>
    import arrow from "../../../components/arrow";
    import {mapGetters} from "vuex";
    export default {
        components: {
            arrow
        },
        computed: {
            ...mapGetters({
                cath: "getCatch",
                user: "getUserInfo",
            })
        },
        data(){
            return{
                data : null,
            }
        },
        mounted() {
            if(!this.cath.productData){
                return this.go().product.home();
            }
            this.setTitle({
                title: "产品详情",
                show: true,
                back: true,
                share: true,
                gap : true,
                shareConfig: {
                    title: '产品详情', // 分享标题
                    desc: this.cath.productInfo.fullName,// 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl: "https://app.duorongcf.com/images/common/logo.png", // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                }
            });
            this.setNav({
                show : false
            });
            this.data = this.cath.productData;
            console.log(this.data)
        },
        methods:{
            goUrl(item){
                window.location.href = item.bigUrl;
            }
        }
    }
</script>
