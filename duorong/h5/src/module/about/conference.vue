/**
* describe 国家事业单位控股
* Created by wangCuiqing
* Date: 2018/6/1
*/
<style scoped>
    @import "./style/conference.css";
</style>
<template>
<article class="conference-body">
    <div class="swiper-container swiper-container1">
        <div class="swiper-wrapper">
            <div class="swiper-slide app1"></div>
            <div class="swiper-slide app22">
            </div>
            <div class="swiper-slide app3">
                <div class="content">
                    <div class="titleJS">
                        <div class="sanjiao"></div>
                        <div class="spanBox">
                            <p>沪深控股有限公司</p>
                            <span>沪深控股有限公司（原中商沪深资本控股有限公司）是国务院国资委下属商业网点建设开发中心发起设立的全资子公司。主营业务涵盖供应链管理、产业投资及金融服务三大板块。</span>
                        </div>
                    </div>
                </div>
                <div class="content" style="margin-top: 0;">
                    <div class="titleJS">
                        <div class="sanjiao"></div>
                        <div class="spanBox">
                            <p>中商沪深产业投资有限公司</p>
                            <span>中商沪深产业投资有限公司是中商沪深全资子公司，专注于清洁能源、现代农业、健康医疗、文化传媒等领域的产业投资运营。</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-slide app4">
                <div class="huaTitle"><i class="hua"></i><span>直击现场</span></div>
                <div class="imgBox">
                    <!--<img src="../../main/images/conference/boss.png" alt="">-->
                    <!--<img src="../../main/images/conference/team.png" alt="" class="team">-->
                </div>
            </div>
            <div class="swiper-slide app5">
                <div class="huaTitle"><i class="hua"></i><span>媒体报道</span></div>
                <div class="MTBox">
                    <div class="swiper-container swiper-container2">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <div class="MT">
                                    <a href="http://business.sohu.com/20161010/n469927718.shtml">
                                        <!--<img src="../../main/images/conference/shw.png" alt="">-->
                                        <span class="MTText">沪深控股战略控股多融财富<br>领跑供应链金融</span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="MT">
                                    <a href="http://sh.qq.com/a/20161011/024493.htm">
                                        <!--<img src="../../main/images/conference/txw.png" alt="">-->
                                        <span class="MTText">沪深控股战略控股多融财富<br>领跑供应链金融</span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="MT">
                                    <a href="http://u.zp.china.com.cn/news-134737-1.html">
                                        <!--<img src="../../main/images/conference/zgw.png" alt="">-->
                                        <span class="MTText">沪深控股战略控股多融财富<br>领跑供应链金融</span>
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-slide">
                                <div class="MT">
                                    <a href="http://www.sh.chinanews.com/swzx/2016-10-10/12123.shtml">
                                        <!--<img src="../../main/images/conference/zxw.png" alt="">-->
                                        <span class="MTText">沪深控股战略控股多融财富<br>领跑供应链金融</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination2"></div>
                </div>
            </div>
            <div class="swiper-slide app6">
            </div>
        </div>
    </div>
</article>

</template>
<script>
    import Swiper from "../../../static/plug/swiper-3.4.2.jquery.min";
    export default {
        name: "conference",
        data(){
            return{
            }
        },
        mounted(){
            this.setTitle({
                title:"国家事业单位控股",
                show:true,
                back:true,
                share:true,
                shareConfig:{
                    title:"国家事业单位控股",
                    link:window.location.href,
                    desc:"国家事业单位控股",
                    imgUrl:'',
                    type:'',
                    dataUrl:''
                }
            })
             new Swiper('.swiper-container', {
                direction: 'vertical',
                 loop: true,
            });
            this.setNav({
                show:false
            })
            this.setImgSize();
        }
    }
</script>
