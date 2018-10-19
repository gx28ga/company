<style lang="sass">
    @import "../../css/global.scss";
    @import "../../vendor/all-animation.min.css";

    .shake-page{
        @include contain("../../images/shake-page.jpg");
        position: relative;
        .back-main, .go-my-piece, .click-as-shake{
            position: absolute;
        }
        .chance-num{
            position: absolute;
            color: #FF2E00;
            font-size: .9rem;
            line-height: .9rem;
        }
    }
    .shaking-open{
        position: absolute;
        z-index: 5;
        /*@include contain("../../images/shaking.gif?asdf32341asfda");*/
    }
</style>
<template>
    <div class="shake-page img-size" data-width="750" data-height="1600">
        <div class="back-main img-size" data-top="30" data-left="20" data-width="100" data-height="44" @click="onBackMain"></div>
        <div class="go-my-piece img-size" data-top="282" data-left="66" data-width="204" data-height="29" @click="onGoMy"></div>
        <div class="chance-num img-size" data-top="788" data-left="414">{{chanceNum}}次</div>
        <div class="click-as-shake img-size" data-top="1000" data-left="340" data-width="100" data-height="50" @click="getShakePiece"></div>
        <!--<template>
            <audio id="shaking-wave" src="src/sound/shaking.mp3" autoplay></audio>
            &lt;!&ndash;<audio id="shaking-wave" src="src/sound/shaking.mp3" autoplay controls class="img-size" style="position: absolute" data-left="660" data-top="30"></audio>&ndash;&gt;
        </template>-->
        <div v-if="isPlaying == true" class="shaking-open img-size" data-top="0" data-left="0" data-width="750" data-height="1600"></div>
        <img style="display: none;" src="../../images/shaking.gif">
    </div>
</template>
<!--<script>
    // 音乐播放
    function autoPlayMusic() {
        // 自动播放音乐效果，解决浏览器或者APP自动播放问题
        function musicInBrowserHandler() {
            musicPlay(true);
            document.body.removeEventListener('touchstart', musicInBrowserHandler);
        }
        document.body.addEventListener('touchstart', musicInBrowserHandler);

        // 自动播放音乐效果，解决微信自动播放问题
        function musicInWeixinHandler() {
            musicPlay(true);
            document.addEventListener("WeixinJSBridgeReady", function () {
                musicPlay(true);
            }, false);
            document.removeEventListener('DOMContentLoaded', musicInWeixinHandler);
        }
        document.addEventListener('DOMContentLoaded', musicInWeixinHandler);
    }
    function musicPlay(isPlay) {
//        var media = document.querySelector('#shaking-wave');
        var media = document.getElementById('shaking-wave');
        if (isPlay && media.paused) {
            media.play();
        }
        if (!isPlay && !media.paused) {
            media.pause();
        }
    }
</script>-->
<script>
    import {httpMyScore, httpShake} from "../../common/URL";
    import requirePop from "../../pop/requirePop.js";
    //获取加速度信息
    //通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
    //而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
    var SHAKE_THRESHOLD = 20000;
    var last_update = 0;
    var x, y, z, last_x = 0, last_y = 0, last_z = 0;
    export default {
        data : function () {
            return {
                isLogin : false,
                chanceNum : 0,
                isShaking : false,
                isOnPop : false,
                isPlaying : false
            };
        },
        mounted : function() {
            T.setImgSize();
            T.mobile();
            T.getAppInfo();
            this.isLogin = T.isLogin;
            if (this.isLogin) {
                this.getMyScore();
                //运动事件监听
                if (window.DeviceMotionEvent) {
                    window.addEventListener('devicemotion',this.onShake, true);
                }
            }
        },
        methods : {
            onBackMain : function () {
                window.removeEventListener('devicemotion', function () {});
                if (T.wap) {
                    window.location.replace(window.location.pathname + "#/?wap=true&uid=" + T.uid);
                } else {
                    window.location.replace(window.location.pathname + "#/?uid=" + T.uid);
                }
                setTimeout(() => {window.location.reload();}, 300);
            },
            __requestService: function (url, params, callAfter) {
                T.ajax({
                    url: url,
                    data: params,
                    callback: true,
                    success: function (_data) {
                        if (!_data.success && !_data.hasOwnProperty('errorMsg')) {
                            let Pop = require('../../pop/index.js');
                            let pop = new Pop({
                                title: '&nbsp;',
                                content: "操作失败，请联系客服！",
                                okBtn: true,
                                cancelBtn: false,
                                timing: 'rotate3d', //rotate3d , slideOutUp , slideOutDown , bounceIn , flipInX , flipInY , fadeIn
                                okTxt: '确定',
                            });
                            return false;
                        }
                        callAfter(_data);
                    }
                });
            },
            getMyScore: function () {
                if (!T.isLogin) return false;
                let params = {uid: T.uid};
                this.__requestService(httpMyScore + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                        requirePop('warning', {
                            props : {
                                transition : 'bounceIn',
                                title : '系统提示',
                                detail: _data.errorMsg,
                                btnBackHome: false
                            }
                        });
                        return false;
                    }
                    this.chanceNum = _data.map.totalchance;
                });
            },
            onShake : function (eventData) {
                var acceleration =eventData.accelerationIncludingGravity;
                var curTime = new Date().getTime();
                if ((curTime-last_update)> 10) {
                    var diffTime = curTime -last_update;
                    last_update = curTime;
                    x = acceleration.x;
                    y = acceleration.y;
                    z = acceleration.z;
                    var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
                    if (speed > SHAKE_THRESHOLD) {
                        if (!this.isOnPop && !this.isPlaying) {
                            this.isPlaying = true;//document.getElementById("shaking-wave").play();
                            setTimeout(() => {
                                T.setImgSize();
                                var gif = document.createElement("IMG");
                                gif.src = "./src/images/shaking.gif?" + Math.random() + Math.random();
                                gif.setAttribute("width", "100%");
                                document.getElementsByClassName("shaking-open")[0].appendChild(gif);
                            }, 20);
                            setTimeout(() => {
                                this.isPlaying = false;
                            }, 2000);
                            setTimeout(() => {this.getShakePiece();}, 2000);
                        }
                        /*window.removeEventListener('devicemotion', function () {});
                        setTimeout(() => {
                            x, y, z, last_x = 0, last_y = 0, last_z = 0;
                            window.addEventListener('devicemotion',this.onShake, true);
                        }, 2000);*/
                    }
                    last_x = x;
                    last_y = y;
                    last_z = z;
                }
            },
            getShakePiece : function () {
                if (this.isShaking || this.isOnPop) return;
                this.isShaking = true;
                setTimeout(() => {this.isShaking = false;}, 2000);
                let params = {uid: T.uid};
                this.__requestService(httpShake + '?uid=' + T.uid, params, _data => {
                    if (_data.success == false && _data.hasOwnProperty('errorMsg')) {
                        if (_data.hasOwnProperty('errorCode') && _data.errorCode == '5000') {
                            this.chanceNum = 0;
                            requirePop('result', {
                                props : {
                                    transition : 'bounceIn',
                                    detail : _data.errorMsg,
                                    closeForward : 1
                                }
                            });
                        } else {
                            requirePop('warning', {
                                props : {
                                    transition : 'bounceIn',
                                    title : '系统提示',
                                    detail: _data.errorMsg,
                                    btnBackHome: false
                                }
                            });
                        }
                        return false;
                    }
                    if (_data.success) {
                        this.isOnPop = true;
                        requirePop('showPrize', {
                            props : {
                                transition : 'bounceIn',
                                uid : T.uid,
                                isWap : T.wap,
                                prizeName : _data.map.prizeName,
                                parent : this
                            }
                        });
                        this.chanceNum = _data.map.totalchance;
                    }
                });
            },
            login : function () {
                T.login();
            },
            onGoMy : function () {
                if (!this.isLogin) {
                    this.login();
                } else {
                    window.location.replace(window.location.pathname + "#/my/?" + (T.wap == true ? 'wap=true&' : '') + "uid=" + T.uid + '&from=shake');
                    setTimeout(() => {window.location.reload();}, 300);
                }
            }
        }
    };
</script>
