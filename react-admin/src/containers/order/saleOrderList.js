/**
 *  author : bo.peng
 *  createTime 2018-11-06 16:29
 *  description :
 */
import React from 'react';
import API from "../../api/Api";
import {ORDER} from "../../api/urls/order";
import {Table} from 'antd';
import {Link} from "react-router-dom";
import {currency} from "../../filter/index";
import {datetimeFilter} from "../../filter/date";
import {routeLink} from "../../router/router";
import {ComPage, ComTopEdit} from "../common";
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
		API.get(ORDER.order, {orderType: 'SALE_ORDER'}).then((data) => {
			if(!data) return;
			self.setState({
				data: data.items
			})
		})
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
		return (<ComPage>
			<ComTopEdit right={<Search/>}/>
			<Table
				rowClassName={() => 'editable-row'}
				dataSource={data}
				columns={columns}
				rowKey={record=> record.orderId}
				pagination={{
					hideOnSinglePage: true
				}}
			/>
		</ComPage>);
	}
}

export default Order;