/**
 * desc: 常用功能包装
 * created by bo.peng 2018/11/20.
 * email:spion@qq.com
 */
import React from 'react';
import {Icon} from "antd";
export default class Box extends React.Component{
	constructor( props ){
		super(props);
		this.state = {
			fullScreen : false,
			minus : false,
			contentStyle : {}
		};
		this.content = React.createRef();
		this.minusEventOpen = true;
		this.fullScreen = this.fullScreen.bind(this);
		this.minusEvent = this.minusEvent.bind(this);
	}
	// 全屏
	fullScreen(){
		this.setState({
			fullScreen : !this.state.fullScreen
		})
	}
	// 最大化最小化
	minusEvent(){
		console.log(this.minusEventOpen);
		if(!this.minusEventOpen) return;
		this.minusEventOpen = false;
		const content = this.content.current;
		if(!content.$height){
			content.$height = content.offsetHeight;
		}
		const height = content.$height;
		this.setState({
			minus: !this.state.minus
		});
		if(!this.state.minus){
			this.setState({
				contentStyle: {height:height+'px'}
			});
			setTimeout(()=>{
				this.setState({
					contentStyle: {height:'0',flex:'none'}
				});
			},60);
		}else{
			this.setState({
				contentStyle: {height:'0px'}
			});
			setTimeout(()=>{
				this.setState({
					contentStyle: {height:height+'px'}
				});
				setTimeout(()=>{
					this.setState({
						contentStyle: {},
					});
				},310);
			},60);
		}
		setTimeout(()=>{
			this.minusEventOpen = true;
		},370);
	}
	render(){
		const props = this.props;
		const className = (props.className||'') +
			' com-box ' +
			(this.state.fullScreen ? 'fixed' : '');
		const minus = this.state.minus?'plus-circle':"minus-circle";
		return (
			<div className={className} style={{...props.style}}>
				<div className="title">
					<div className="edit">
						<Icon onClick={this.fullScreen}
						      type={this.state.fullScreen?'fullscreen-exit':"fullscreen"}
						      style={{cursor:'pointer'}} />
						<Icon onClick={this.minusEvent}
						      type={minus}
						      theme="filled"
						      style={{marginLeft:'10px', cursor:'pointer'}} />
					</div>
					<div className="name">{props.title || props.parent.name}</div>
				</div>
				<div className='content'
				     style={this.state.contentStyle}
				     ref={this.content}>
					{props.children}
				</div>
			</div>
		);
	}
}