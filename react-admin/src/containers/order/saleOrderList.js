/**
 *  author : bo.peng
 *  createTime 2018-11-06 16:29
 *  description :
 */
import React from 'react';
import {Table} from 'antd';
import {Link} from "react-router-dom";
import {currency} from "../../filter/index";
import {datetimeFilter} from "../../filter/date";
import {routeLink} from "../../router/router";
import {ComPage, ComTopEdit, ComBox, ComTable} from "../common";
import {tableConfig} from '../../containers/config'
import Search from "./search";

class Order extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data:[],
		};
	}
	columns = [
		{
			title: '订单号',
			dataIndex: 'orderNo',
		},
		{
			title: '卖家',
			dataIndex: 'buyerName1',
			render:(text,record)=>(<>
				<p>[品牌商]</p>
				{record.buyerName}
			</>)
		},
		{
			title: '买家',
			dataIndex: 'buyerName',
			render:(text,record)=>(<>
				<p>[经销商]</p>
				{text}
			</>)
		},
		{
			title: '金额',
			dataIndex: 'finalTotalAmount',
			render:(text,record)=> (<>
				<p style={{fontSize:'12px',color:'#999'}}>商品总金额: ￥1230.00</p>
				订单总金额: {currency(text/100)}
			</>)
		},
		{
			title: '时间',
			dataIndex: 'createTime',
			render:(text,record)=>(
				<>
					<p style={{fontSize:'12px',color:'#999'}}>下单: {datetimeFilter(text)}</p>
					发货:
				</>
			)
		},
		{
			title: '状态',
			dataIndex: 'paymentStatus',
			render:(text,record)=>(this.status(record))
		},
		{
			title: '操作',
			dataIndex: 'operation',
			render: (text, record) => (<Link to={{
				pathname: routeLink.order.saleOrderDetail.path+'/'+record.orderId,
				search: '?id='+record.orderId,
			}}>详情</Link>),
		}
	];
	status= ({paymentStatus,approvalStatus,deliveryStatus,orderStatus})=> {
		if(paymentStatus==='UNPAID'&&approvalStatus==='NOT_APPROVED'&&deliveryStatus==='NOT_DELIVERY'&&orderStatus==='NORMAL'){
			return '待支付'
		}
		if(paymentStatus==='UNPAID'&&approvalStatus==='NOT_APPROVED'&&deliveryStatus==='NOT_DELIVERY'&&orderStatus==='CANCEL'){
			return '已取消'
		}
		if(paymentStatus==='PAID'&&approvalStatus==='NOT_APPROVED'&&deliveryStatus==='NOT_DELIVERY'&&orderStatus==='NORMAL'){
			return '待审核'
		}
		if(paymentStatus==='NO_REFUND'&&approvalStatus==='REJECT'&&deliveryStatus==='NOT_DELIVERY'&&orderStatus==='ABSOLETE'){
			return '已作废'
		}
		if(paymentStatus==='REFUNDING'&&approvalStatus==='REJECT'&&deliveryStatus==='NOT_DELIVERY'&&orderStatus==='ABSOLETE'){
			return '已作废、退款中'
		}
		if(paymentStatus==='REFUNDED'&&approvalStatus==='REJECT'&&deliveryStatus==='NOT_DELIVERY'&&orderStatus==='ABSOLETE'){
			return '已作废、已退款'
		}
		if(paymentStatus==='PAID'&&approvalStatus==='AUDITED'&&deliveryStatus==='NOT_DELIVERY'&&orderStatus==='NORMAL'){
			return '待发货'
		}
		if(paymentStatus==='PAID'&&approvalStatus==='AUDITED'&&deliveryStatus==='PARTIAL_DELIVERY'&&orderStatus==='NORMAL'/*&&res.unReceiveOrderCount > 0*/){
			return '部分发货、待签收'
		}
		if(paymentStatus==='PAID'&&approvalStatus==='AUDITED'&&deliveryStatus==='PARTIAL_DELIVERY'&&orderStatus==='NORMAL'/*&&res.unReceiveOrderCount === 0*/){
			return '部分发货'
		}
		if(paymentStatus==='PAID'&&approvalStatus==='AUDITED'&&deliveryStatus==='ALL_DELIVERY'&&orderStatus==='NORMAL'){
			return '全部发货、待签收'
		}
		if(paymentStatus==='PAID'&&approvalStatus==='AUDITED'&&deliveryStatus==='COMPLETE'&&orderStatus==='NORMAL'){
			return '已完成'
		}
		if(paymentStatus==='NO_REFUND'&&approvalStatus==='AUDITED'&&(deliveryStatus==='NOT_DELIVERY'||deliveryStatus==='PARTIAL_DELIVERY')&&orderStatus==='ABORT'){
			return '交易中止'
		}
		if(paymentStatus==='REFUNDING'&&approvalStatus==='AUDITED'&&(deliveryStatus==='NOT_DELIVERY'||deliveryStatus==='PARTIAL_DELIVERY')&&orderStatus==='ABORT'){
			return '交易中止、退款中'
		}
		if(paymentStatus==='REFUNDED'&&approvalStatus==='AUDITED'&&(deliveryStatus==='NOT_DELIVERY'||deliveryStatus==='PARTIAL_DELIVERY')&&orderStatus==='ABORT'){
			return '交易中止、已退款'
		}
	};
	componentWillMount() {
		const self = this;
		const arr = {
			"items":[{
				"afterSaleType":"UNKNOWN",
				"approvalStatus":"NOT_APPROVED",
				"buyerArea":"阿里街道",
				"buyerContact":"12121212",
				"buyerId":1,
				"buyerName":"淘宝",
				"cityId":1,
				"cityName":"上海",
				"countyId":1,
				"countyName":"浦东新区",
				"coupons":[],
				"createTime":1540558997000,
				"deleted":false,
				"deliveryStatus":"NOT_DELIVERY",
				"enabled":true,
				"finalTotalAmount":15600,
				"hasAfterSale":false,
				"hasChild":false,
				"orderId":5,
				"orderItemCount":1,
				"orderItems":[
					{
						"createTime":1540558997000,
						"deleted":false,
						"deliveredQuantity":0,
						"enabled":true,
						"finalAmount":15600,
						"itemId":5,
						"orderId":5,
						"orderNo":"SOd89c79d3-3d46-468b-862c-136f6512a55e",
						"originAmount":15600,
						"paidAmount":0,
						"productId":1,
						"quantity":1,
						"sellerArea":"阿里街道",
						"sellerContact":"12121212",
						"sellerId":1,
						"sellerName":"淘宝",
						"skuId":2,
						"spec":"[{\"attrItemId\":2,\"attrName\":\"尺寸\",\"attrValue\":\"13cm\"},{\"attrItemId\":3,\"attrName\":\"重量\",\"attrValue\":\"300g\"}]",
						"specId":"7c1d2363-a9ac-4191-bbe1-92682423f9a0",
						"title":"商品测试",
						"updateTime":1540558997000
					}
				],
				"orderNo":"SOd89c79d3-3d46-468b-862c-136f6512a55e",
				"orderStatus":"NORMAL",
				"orderType":"SALE_ORDER",
				"originTotalAmount":15600,
				"paidAmount":0,
				"parentId":0,
				"paymentStatus":"UNPAID",
				"provinceId":1,
				"provinceName":"上海",
				"receiverAddress":"盛夏路",
				"receiverName":"张无忌",
				"receiverPhone":"13333333333",
				"sellerArea":"地址",
				"sellerContact":"32234324",
				"sellerId":100,
				"sellerName":"测试1",
				"submitterId":-99,
				"totalQuantity":1,
				"updateTime":1540558997000
			},
				{
					"afterSaleType":"UNKNOWN",
					"approvalStatus":"NOT_APPROVED",
					"buyerArea":"阿里街道",
					"buyerContact":"12121212",
					"buyerId":1,
					"buyerName":"淘宝",
					"cityId":1,
					"cityName":"上海",
					"countyId":1,
					"countyName":"浦东新区",
					"coupons":[],
					"createTime":1540558997000,
					"deleted":false,
					"deliveryStatus":"NOT_DELIVERY",
					"enabled":true,
					"finalTotalAmount":15600,
					"hasAfterSale":false,
					"hasChild":false,
					"orderId":151,
					"orderItemCount":1,
					"orderNo":"SOd89c79d3-3d46-468b-862c-136f6512a55e",
					"orderStatus":"NORMAL",
					"orderType":"SALE_ORDER",
					"originTotalAmount":15600,
					"paidAmount":0,
					"parentId":0,
					"paymentStatus":"UNPAID",
					"provinceId":1,
					"provinceName":"上海",
					"receiverAddress":"盛夏路",
					"receiverName":"张无忌",
					"receiverPhone":"13333333333",
					"sellerArea":"地址",
					"sellerContact":"32234324",
					"sellerId":100,
					"sellerName":"测试1",
					"submitterId":-99,
					"totalQuantity":1,
					"updateTime":1540558997000
				},
				{
					"afterSaleType":"UNKNOWN",
					"approvalStatus":"NOT_APPROVED",
					"buyerArea":"阿里街道",
					"buyerContact":"12121212",
					"buyerId":1,
					"buyerName":"淘宝",
					"cityId":1,
					"cityName":"上海",
					"countyId":1,
					"countyName":"浦东新区",
					"coupons":[],
					"createTime":1540558997000,
					"deleted":false,
					"deliveryStatus":"NOT_DELIVERY",
					"enabled":true,
					"finalTotalAmount":15600,
					"hasAfterSale":false,
					"hasChild":false,
					"orderId":51,
					"orderItemCount":1,
					"orderNo":"SOd89c79d3-3d46-468b-862c-136f6512a55e",
					"orderStatus":"NORMAL",
					"orderType":"SALE_ORDER",
					"originTotalAmount":15600,
					"paidAmount":0,
					"parentId":0,
					"paymentStatus":"UNPAID",
					"provinceId":1,
					"provinceName":"上海",
					"receiverAddress":"盛夏路",
					"receiverName":"张无忌",
					"receiverPhone":"13333333333",
					"sellerArea":"地址",
					"sellerContact":"32234324",
					"sellerId":100,
					"sellerName":"测试1",
					"submitterId":-99,
					"totalQuantity":1,
					"updateTime":1540558997000
				},
				{
					"afterSaleType":"UNKNOWN",
					"approvalStatus":"NOT_APPROVED",
					"buyerArea":"阿里街道",
					"buyerContact":"12121212",
					"buyerId":1,
					"buyerName":"淘宝",
					"cityId":1,
					"cityName":"上海",
					"countyId":1,
					"countyName":"浦东新区",
					"coupons":[],
					"createTime":1540558997000,
					"deleted":false,
					"deliveryStatus":"NOT_DELIVERY",
					"enabled":true,
					"finalTotalAmount":15600,
					"hasAfterSale":false,
					"hasChild":false,
					"orderId":52,
					"orderItemCount":1,
					"orderNo":"SOd89c79d3-3d46-468b-862c-136f6512a55e",
					"orderStatus":"NORMAL",
					"orderType":"SALE_ORDER",
					"originTotalAmount":15600,
					"paidAmount":0,
					"parentId":0,
					"paymentStatus":"UNPAID",
					"provinceId":1,
					"provinceName":"上海",
					"receiverAddress":"盛夏路",
					"receiverName":"张无忌",
					"receiverPhone":"13333333333",
					"sellerArea":"地址",
					"sellerContact":"32234324",
					"sellerId":100,
					"sellerName":"测试1",
					"submitterId":-99,
					"totalQuantity":1,
					"updateTime":1540558997000
				},
				{
					"afterSaleType":"UNKNOWN",
					"approvalStatus":"NOT_APPROVED",
					"buyerArea":"阿里街道",
					"buyerContact":"12121212",
					"buyerId":1,
					"buyerName":"淘宝",
					"cityId":1,
					"cityName":"上海",
					"countyId":1,
					"countyName":"浦东新区",
					"coupons":[],
					"createTime":1540558997000,
					"deleted":false,
					"deliveryStatus":"NOT_DELIVERY",
					"enabled":true,
					"finalTotalAmount":15600,
					"hasAfterSale":false,
					"hasChild":false,
					"orderId":53,
					"orderItemCount":1,
					"orderNo":"SOd89c79d3-3d46-468b-862c-136f6512a55e",
					"orderStatus":"NORMAL",
					"orderType":"SALE_ORDER",
					"originTotalAmount":15600,
					"paidAmount":0,
					"parentId":0,
					"paymentStatus":"UNPAID",
					"provinceId":1,
					"provinceName":"上海",
					"receiverAddress":"盛夏路",
					"receiverName":"张无忌",
					"receiverPhone":"13333333333",
					"sellerArea":"地址",
					"sellerContact":"32234324",
					"sellerId":100,
					"sellerName":"测试1",
					"submitterId":-99,
					"totalQuantity":1,
					"updateTime":1540558997000
				},
				{
					"afterSaleType":"UNKNOWN",
					"approvalStatus":"NOT_APPROVED",
					"buyerArea":"阿里街道",
					"buyerContact":"12121212",
					"buyerId":1,
					"buyerName":"淘宝",
					"cityId":1,
					"cityName":"上海",
					"countyId":1,
					"countyName":"浦东新区",
					"coupons":[],
					"createTime":1540558997000,
					"deleted":false,
					"deliveryStatus":"NOT_DELIVERY",
					"enabled":true,
					"finalTotalAmount":15600,
					"hasAfterSale":false,
					"hasChild":false,
					"orderId":54,
					"orderItemCount":1,
					"orderNo":"SOd89c79d3-3d46-468b-862c-136f6512a55e",
					"orderStatus":"NORMAL",
					"orderType":"SALE_ORDER",
					"originTotalAmount":15600,
					"paidAmount":0,
					"parentId":0,
					"paymentStatus":"UNPAID",
					"provinceId":1,
					"provinceName":"上海",
					"receiverAddress":"盛夏路",
					"receiverName":"张无忌",
					"receiverPhone":"13333333333",
					"sellerArea":"地址",
					"sellerContact":"32234324",
					"sellerId":100,
					"sellerName":"测试1",
					"submitterId":-99,
					"totalQuantity":1,
					"updateTime":1540558997000
				}],
			"limit":10,
			"offset":0,
			"page":1,
			"total":1
		};
		self.setState({
			data: arr.items,
		})
		/*API.get(ORDER.order, {orderType: 'SALE_ORDER'}).then((data) => {
			if(!data) return;
			self.setState({
				data: data.items
			})
		})*/
	}
	render() {
		const {data} = this.state;
		const columns = this.columns.map((col) => {
			if (!col.editable) {
				return col;
			}
			return {
				...col,
				onCell: record => ({
					record,
					editable: col.editable,
					dataIndex: col.dataIndex,
					title: col.title,
				}),
			};
		});
		const TableList = () => {
			return <Table
				{...tableConfig.table}
				rowClassName={() => 'editable-row'}
				dataSource={data}
				columns={columns}
				rowKey={record=> record.orderId}
				pagination={{
					hideOnSinglePage: true
				}}
			/>;
		};
		return (<ComPage>
			<ComBox {...this.props}>
				<ComTopEdit right={<Search/>}/>
				<ComTable table={<TableList/>}/>
			</ComBox>
		</ComPage>);
	}
}

export default Order;