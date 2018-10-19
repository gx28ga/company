<style>
    .top{
        background:url("../images/top.jpg");
        background-size:100% auto;
        background-repeat:no-repeat;
    }
    .fx{
        padding:20px 30px;
        text-align:right;
        color:#333;
    }
    aside{
        h2{
            text-align:center;
            font-weight:normal;
            color:#ff7127;
        }
        dl{
            padding-bottom:10px;
            overflow:hidden;
        }
        dd{ float:left; width:10px;}
        dt{
            padding-left:8px;
        }
        ul{
            color:#ff5400
        }
    }
</style>
<template>
    <article>
        <div class="top img-size" data-height="733"></div>
        <box></box>
        <div class="fx img-size" data-fontSize="16">市场有风险 投资需谨慎</div>
        <aside class="img-size" data-padding="30" data-lineHeight="40" data-fontSize="20">
            <h2 class="img-size" data-fontSize="30">——活动规则——</h2>
            <dl>
                <dd>•</dd>
                <dt>活动时间：2017.10.14-10.30。</dt>
            </dl>
            <dl>
                <dd>•</dd>
                <dt>
                    活动期间，通过本页面注册或小米应用商店下载多融理财APP注册的新用户，单笔投资≥120天产品达相应金额，可获对应礼品。另外新用户还有一次抽取小米MIX2的机会，小米MIX2中奖名额仅限1位，由多融财富官方抽取，关注“多融财富”官方服务号，10月31日公布中奖名单。
                    <ul>
                        <li>1.首投金额≥3600元送199元【小米蓝牙音箱】</li>
                        <li>2.首投金额≥6000元送299元【90分旅行箱20寸】</li>
                        <li>3.首投金额≥13500元送699元【小米空气净化器2】</li>
                        <li>4.首投金额≥35800元送1699元【米家扫地机器人】</li>
                        <li>5.首投金额≥68000元送3499元【12.5"小米笔记本Air】</li>
                    </ul>
                </dt>
            </dl>
            <dl>
                <dd>•</dd>
                <dt>每人仅限领取1档奖励，奖品的兑换码将于活动结束后10个工作日内以短信形式发送，用户可登录小米商城使用，运费自理。客服热线：400-690-8896。</dt>
            </dl>
            <dl>
                <dd>•</dd>
                <dt>本活动不与平台其他活动同时享有。</dt>
            </dl>
            <dl>
                <dd>•</dd>
                <dt>本次活动解释权归多融理财所有。</dt>
            </dl>
            <dl>
                <dd>•</dd>
                <dt>理财有风险投资需谨慎。</dt>
            </dl>
        </aside>
    </article>
</template>
<script>
    import box from './box.vue'
	export default {
		components:{
			box
        }
	}
</script>