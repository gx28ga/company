/**
* 委托协议
* Created by kaifa on 2018/3/27.
*/
<style scoped>
    @import "./style/protocol.css";
</style>
<template>
    <div class='protocol'>
        <h1>委托协议</h1>
         <p>委托人：<span class='tip'>{{map.investName}}</span></p>
         <p>受托人：浙江颐荣资产管理有限公司</p>
         <h2>委托人因与<span class="kong tip">{{map.loanName}}</span>借款事项，特委托受托人代为办理相关事项，现协议如下：</h2>
         <h2>一、委托事项：</h2>
         <p>代为签署质押合同、设立质权、收取质物及其相关文件、办理质押登记、代表委托人登记为质权人、实现质权；</p>
         <p>代为要求担保人承担担保义务；针对借款及担保引起的纠纷，代为委托律师诉讼（承认、变更、放弃诉讼请求；代为和解、上诉和反诉）；</p>
         <p>代为签署相关法律文书；</p>
         <p>在借款人（或担保人）不能按时偿还本、息的情况下，如有任何第三方自愿代其偿还应付本、息，则自该第三方支付金额至委托人时，视为委托人已经将其对于借款人的相应债权及从属权利完全转让给该第三方，各方明确不必为此另行签订债权转让协议。</p>
         <h2>二、委托人对于受托人在上述授权范围内所进行的民事行为后果承担相应责任。</h2>
         <h2>三、委托人的上述委托行为在委托期限内是不可变更和撤销的。</h2>
         <h2>四、上述委托事项委托权限自委托人在受托人网站平台确认委托之时开始至委托人获得资金本、息及其它相关费用全额得到清偿之日止。</h2>
         <h2>五、因本委托协议引起的纠纷，不能协商解决的，任何一方均有权向上海仲裁委员会提请仲裁。</h2>
         <p>兹证明委托人与受托人或其正式授权代表签署本委托协议。</p>
         <p>委托人:<span class='tip'>{{map.investName}}</span>	</p>
         <p>受托人: 浙江颐荣资产管理有限公司</p>
         <p style='float:right'>时间：<span class='tip'></span></p>
    </div>
</template>
<script>
    import {entrust} from "./js/protocol.js";
    export default {
        data(){
            return{
                map:"",
            }
        },
        mounted(){
            this.setTitle({
                show : true,
                title : "委托协议",
                back : true,
            });
            let self=this;
            self.ajax({
                type:"get",
                url:entrust,
                data:{
                    pid:"1517",
                    uid:"2113",
                    investId:"7960"
                },
                dataType:"jsonp",
                success:function(data){
                    self.map=data.map;
                }
            })
        },
        methods(){

        }
    }
</script>
