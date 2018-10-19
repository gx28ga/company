<style scoped>
	.test{
		h1{
			padding:5px 0;
			background:#1a6bcf;
			color:#fff;
			text-align:Center;
		}
		.list{
			li{
				display:flex;
				padding:5px 0;
				text-align:center;
			}
			.btn{
				flex:1;
				height:22px;
				line-height:22px;
				padding:5px 0;
				background:#00bf00;
				color:#fff;
			}
		}
		.footer{
			padding:10px;
			background:#eb9b00;
			word-break: break-all;
			color:#fff;
			transition-duration:.3s;
		}
	}
</style>
<template>
	<article class="test">
		<h1>测试页面</h1>
		<div class="list">
			<ul>
				<li>
					<div class="btn" @click="share">分享</div>
				</li>
				<li>
					<div class="btn" @click="login">登录</div>
				</li>
				<li>
					<div class="btn" @click="loginout">退出</div>
				</li>
				<li>
					<div class="btn" @click="setting">设置</div>
				</li>
                <li>
                    <div class="btn" @click="tel">打电话</div>
                </li>
				<li>
					<div class="btn" @click="getAppInfo">app信息</div>
				</li>
				<li><div class="btn" @click="jPush">推送功能测试</div></li>
				<li><div class="btn" @click="webview">打开新的webview</div></li>
				<li>
                    <div class="btn" @click="login1">登录returnUrl</div>
                    <div class="btn" @click="invert">投资returnUrl</div>
                </li>
			</ul>
		</div>
		<div class="footer">
			{{code}}
		</div>
	</article>
</template>
<script>
	export default {
		data() {
			return {
				index : 0,
				code : "",
			}
		},
		mounted() {
			T.mobile();
		},
		methods : {
			callApp(name,val){
				this.index++;
				val = val || "";
				val = JSON.stringify(val);
				if(T.Iphone){
					if(window.webkit){
						try{
							window.webkit.messageHandlers[name].postMessage(val);
						}catch (e){
							this.code = "messageHandlers或postMessage调用失败"
						}
					}else{
						this.code = "没有webkit方法，调用失败"
					}
				}else{
					if(window.DRAPI){
						DRAPI[name](val);
					}else{
						this.code = "没有DRAPI方法，调用失败"
					}
				}
				setTimeout(()=>{
					this.code = "DRAPI."+name+"("+val+")"+this.index;
				},500);
			},
			share(){
				let share = {
					title: '分享标题', // 分享标题
					desc: '分享描述', // 分享描述
					link: 'http://www.duorongcf.com', // 分享链接
					imgUrl: "https://www.duorongcf.com/images/home/newslider/video.jpg", // 分享图标
					type: '', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
				};
				this.callApp("share",share);
			},
			login(){
				this.callApp("login",{
					uid : 2,
					token : "LAKSDF!SDasdfF=,2490901234GKLASDFJ"
				});
			},
			loginout(){
				this.callApp("loginout");
			},

			setting(){
				this.callApp("setting");
			},
			getAppInfo(){
				this.code = T.appInfo;
			},
			jPush(){
				this.callApp("jPush");
			},
            login1(){
                router.push({path:"/login",query:{returnUrl:encodeURIComponent("http://www.baidu.com")}})
            },
            invert(){
                router.push({path:"/list",query:{returnUrl:encodeURIComponent("http://www.baidu.com"),invert:"true"}})
            },
            tel(){
                this.callApp("callPhone","4006908896");
            },
            webview(){
                this.callApp("webview",{
                    back: true,
                    title : "这是标题",
                    href : "https://mp.weixin.qq.com/s/6JL3SRmLDXpxg_uEXUf4Gw?uid=1712",
                    share : {
                        title: '分享标题', // 分享标题
                        desc: '分享描述', // 分享描述
                        link: 'http://www.duorongcf.com', // 分享链接
                        imgUrl: "https://www.duorongcf.com/images/home/newslider/video.jpg", // 分享图标
                        type: '', // 分享类型,music、video或link，不填默认为link
                        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    }
                });
            }
		}
	}
</script>
