 /**
* 债权转让协议
* created by wangcuiqing 2018/3/27
*
*/
<style scoped>
/**
* 用户登录
* created by bo.peng 2018/3/27
* email:spion@qq.com
*/ @import "./style/protocol.css";
/**
* 用户登录
* created by bo.peng 2018/3/27
* email:spion@qq.com
*/</style>
<template>
    <div class='protocol'>
      <h1 class="toph1">债权转让协议</h1>
       <div>
        <p class="bh">合同编号：<span class="tip">{{map.agreementNo}} </span></p>
       </div>
       <div class="top">甲方（债权受让人）：<span class="tip">{{map.investName}}</span></div>
       <div class="top">身份证号：<span class="tip">{{map.idCard}}</span></div>
       <div class="top">多融财富平台用户名：<span class="tip">{{map.userName}}</span></div>
       <br>
       <div class="top">乙方（债权出让人）：【详见列表】</div>
       <br>
       <div class="top">丙方（平台服务方）：上海银砖金融信息服务有限公司</div>
       <div class="top">企业编号：91310106324 4877750</div>
       <br>
       <div>鉴于：</div>
       <p><b>1.</b>乙方与借款人或原债权人签订并生效的借款协议或债权转让协议项下全部或部分债权转让给甲方，同时该债权以借款人合法拥有且由<span class="tip">{{map.acceptor}}</span>承诺付款的<span class="tip" >{{map.pawnType}}</span>作为质押物予以保证。现乙方将上述债权在丙方平台上进行出让；</p>
       <p><b>2.</b>甲方为丙方平台用户，拥有富余资金，愿意以其自有合法资金受让乙方的债权以获取收益；</p>
       <p><b>3.</b>丙方愿意为该等债权转让交易提供服务，主要包括信息发布、投资人资料核查登记、投资咨询、登记、管理等。甲方和乙方愿意接受丙方提供该等服务。</p>
       <br>
       <p>根据《中华人民共和国合同法》及相关法律法规的规定，各方遵循平等、自愿、互利和诚 实 信用原则，友好协商，就各方在丙方运营管理的多融财富平台（包括但不限于网页端、 手 机客户端，以下简称“平台”）上进行投资、债权转让、投资咨询、风险管理及其他管 理服 务达成一致，以资信守。甲方、乙方、丙方签订本协议，即认为各方已理解并同意本 协议的 所有条款。具体条款如下：</p>
       <br>
       <h2>第一条 债权转让条款：</h2>
       <p><b>1.</b>债权转让人:【详见列表】</p>
       <p><b>2.</b>债权受让人：<span class="tip" > {{map.investName}} </span></p>
       <p><b>3.</b>债权额：<span class="tip"> {{map.investAmount}} </span>元人民币</p>
       <p><b>4.</b>转让生效日：<span class="tip"> {{map.loanForceDate}} </span></p>
       <p><b>5.</b>债权到期日：<span class="tip"> {{map.loanExpireDate}} </span></p>
       <p><b>6.</b>预计产品到期日：<span class="tip"> {{map.productExpireDate}} </span></p>
       <p><b>7.</b>预计产品回款日：<span class="tip"> {{map.productRepaymentDate}} </span></p>
       <p><b>8.</b>债权附带收益：债权金额的一定比例，预计年化利率为<span class="tip">{{map.rate}}</span>%，此收益原由借款人支付，现暂由平台代付。另外丙方平台额外赠送年化利率<span class="tip">{{map.activityRate}}</span>%</p>
       <p><b>9.</b>债权本息收益权实现方式：上述债权全部转让给甲方行使，甲方按照本合同及原借 款协议直接向借款人主张债权及收益权。在债权可再转让日平台提供债权转让撮合 服务， 由平台上的投资人支付对应金额来实现甲方的退出。详见本协议条款第二条第5 点。若 甲方持有到期，则债权到期日由借款人向债权受让人直接偿还债权额及对应的债权附带 收益。
       </p>
       <p><b>10.</b>债权附带收益支付：产品到期一并支付。</p>
       <h2>第二条 甲方的权利与义务：</h2>
       <p><b>1.</b>甲方有利用丙方平台按约定价格受让相应债权额的权利。</p>
       <p><b>2.</b>甲方有权按照约定时间实现约定受让债权的权利。</p>
       <p><b>3.</b>甲方有义务按照丙方平台要求向丙方提供真实的个人信息，因甲方提供虚假信息而造成的一切法律后果（包括但不限于民事赔偿，行政处罚等）均由甲方承担。</p>
       <p><b>4.</b>甲方有义务按照丙方要求操作平台软件以及查收丙方发出的所有消息（包括但不限于站内通知、电子邮件、手机短信等）。因甲方个人操作不当以及疏于查收信息造成的损失由甲方自行承担。</p>
       <p><b>5.</b>经丙方撮合同意，甲方可以在债权可再转让日将所持债权转让予愿意以一定价款受让债权的平台投资人。甲方承诺，若丙方未能在可转让日将甲方所持有债权转让成功，平台会持续帮用户完成转让，期间甲方需一直持有标的并且享有利息，直到转让成功或者标的到期。</p>
       <p><b>6.</b>甲方受让的债权项下的借款人可以提前还款，若借款人提前还款，则甲方受让债权的期限至债务人提前还款之日止，甲方仅能取得实际债权受让期限内的收益，甲方对此表示同意。</p>
       <h2>第三条 乙方的权利与义务：</h2>
       <p><b>1.</b>乙方有向甲方提供并转让债权的权利。</p>
       <h2>第四条 丙方的权利和义务：</h2>
       <p><b>1.</b>丙方应当按照本协议的规定，恪尽职守，以诚实、守信、谨慎、有效管理的原则为甲方、乙方进行服务。</p>
       <p><b>2.</b>丙方须对甲方、乙方信息、资产情况及其他服务相关事务的具体情况和资料依法保密；当其中一方出现违约时，丙方有义务在平台上向其他各方披露公开违约方个人或企业的全部相关信息，并有义务协助各方维护自身权益。</p>
       <p><b>3.</b>丙方有义务对甲方、乙方的资格进行严格审查，保证在平台上交易方真实存在。</p>
       <p><b>4.</b>丙方有义务在可转让日将甲方所持有债权转让出去，若无法完成转让，丙方承诺会
        持续帮用户完成转让，期间甲方一直持有标的并且享有利息，直到转让成功或者借
        款到期。</p>
       <h2>第五条 风险提示：</h2>
       <p><b>1.</b><strong>政策风险:</strong>国家因宏观政策、财政政策、货币政策、行业政策、地区发展、法律法规
        等因素引起的政策风险。</p>
       <p><b>2.</b><strong>不可抗力:</strong>由于战争、动乱、自然灾害等不可抗力因素的出现而可能导致甲方资产损失的风险。</p>
       <h2>第六条 税务处理：</h2>
       <p><b>1.</b>各方根据中国法律规定，由各方自行向其主管税务机关申报、缴纳相关税费。</p>
       <h2>第七条 保密条款：</h2>
       <p><b>1.</b>本协议签署后，除非事先得到其他方的书面同意，本协议各方均应承担以下保密义务：
        <br>（1）任何一方不得向非本协议方披露本协议以及本协议项下的事宜以及与此等事宜有关的任何文件、资料或信息（“保密信息”）；
        <br>（2）任何一方只能将保密信息和其内容用于本协议项下的目的，不得用于任何其他目的。本款的约定不适用于下列保密信息：
        <br>A.从披露方获得时，已是公开的；
        <br>B.从披露方获得前，接受方已经获知的；
        <br>C.从有正当权限并不受保密义务制约的第三方获得的；</p>
       <p><b>2.</b>本协议各方因下列原因披露保密信息，不受前款的限制：
        <br>（1）向本协议各方的董事、监事、高级管理人员和雇员及其聘请的会计师、律师、咨询公司披露；
        <br>（2）因遵循可适用的法律、法规的强制性规定而披露；
        <br>（3）依据其他应遵守的法规向审批机构或权力机构进行的披露；</p>
       <p><b>3.</b>甲方和乙方提供给丙方的信息，及甲方和乙方享受丙方服务产生的信息（包括本协议签署之前提供和产生的），可由丙方享有，法律禁止的除外。</p>
       <p><b>4.</b>本协议任何一方应采取所有其他必要、适当和可采取的措施，以确保保密信息的保密性。</p>
       <p><b>5.</b>本协议各方应促使其向之披露保密信息的人亦严格遵守本条约定。</p>
       <p><b>6.</b>各方在本条项下的权利和义务应在本协议终止或到期后继续有效。</p>
       <h2>第八条 协议的订立及支付：</h2>
       <p><b>1.</b>本协议及其修改或补充均采用通过丙方多融财富网站以电子文本形式制成，可以有
        一份或者多份并且每一份具有同等法律效力，并永久保存在丙方为此设立的专用服
        务器上备查和保管。各方均认可该形式的协议效力并通过自行或授权有关方根据丙
        方多融财富网站有关规则和说明，在丙方多融财富网站进行债权本息收益权申购或
        投标操作等方式确认签署本协议。</p>
       <p><b>2.</b>各方通过上述方式接受本协议且丙方审核通过时，本协议立即成立；协议成立的同
        时甲方不可撤销地授权丙方将债权本息收益权认购款在扣除相关费用后划转、支付
        给乙方，债权本息收益权认购款由丙方根据授权划转完毕时本协议正式生效。</p>
       <p><b>3.</b>甲方同意并授权丙方按本协议及多融财富网站有关收费规则的约定对债权本息收益
        权认购款进行划扣和支付，并由丙方代为收取乙方支付的债权本息收益权本息收益等。</p>
       <p><b>4.</b>甲方知悉，因丙方（多融财富）系统原因或第三方支付公司的支付系统原因，丙方支付给甲方的款项可能会存在重复打款、错误打款等情形。若出现上述情形，甲方在此同意并授权丙方通过以下渠道扣除丙方多支付给甲方的款项：
        <br>a.甲方的多融财富余额账户；
        <br>b.甲方在丙方平台购买的理财产品的到期回款
        <br>c.与甲方多融财富余额账户绑定的银行卡</p>
       <h2>第九条 其他条款：</h2>
       <p><b>1.</b>如果甲方出现债权本息收益权的继承，必须由主张权利的继承人向丙方出示经国家
        权威机关认证的继承权利归属证明文件，丙方确认后方予协助进行债权本息收益权 的转
        移。由此产生的相关税费，由主张权利的继承人，向其主管税务机关申报、缴 纳，丙方
        不负责相关事宜处理。</p>
       <p><b>2.</b>本协议签订之日起至甲方债权本息兑付之日止，甲方的下列信息如发生变更的，其
        应当在相关信息发生变更三个工作日内将更新后的信息提供给丙方：本人、本人的 家庭
        联系人及紧急联系人、工作单位、居住地址、住所电话、手机号码、电子邮箱、 银行账
        户的变更。若因甲方不及时提供上述变更信息而带来的损失或额外费用应由 该方自行承担。</p>
       <p><b>3.</b>本合同一部分无效，不影响其他部分的法律效力。</p>
       <p><b>4.</b>本合同的传真件、复印件、扫描件等有效复本的效力与本协议原件效力一致。</p>
       <p><b>5.</b>如果各方在本协议履行过程中发生任何争议，应友好协商解决；如协商不成，则均可向丙方住所地有管辖权的人民法院提起诉讼。</p>
       <br>
       <br>
       <p>附：债权出让人列表及相应份额</p>
       <table>
        <tr>
         <td>债权出让人</td>
         <td>身份证号</td>
         <td>出让债权额</td>
        </tr>
        <tr>
         <td><span class="tip noline"></span></td>
         <td><span class="tip noline"></span></td>
         <td><span class="tip noline"></span> 元</td>
        </tr>
       </table>
    </div>
</template>
<script>
 import {transfer} from "./js/protocol.js";
 export default {
  data(){
   return{
    map:"",
   }
  },
  mounted(){
   this.setTitle({
    show : true,
    title : "债权转让协议",
    back : true,
   });
   let self=this;
   self.ajax({
    type:"GET",
    url:transfer,
    data:{
     pid:"1732",
     uid:"8541",
     investId:"7960"
    },
    dataType:"jsonp",
    success:function(data){
     self.map=data.map;
    },
    error:function(data){

    }
   })
  },
  methods(){

  }
 }
</script>
