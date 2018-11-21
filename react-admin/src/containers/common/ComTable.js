/**
 * desc: table 表单处理
 * created by bo.peng 2018/11/20.
 * email:spion@qq.com
 */
import React from 'react';
export default (props) => {
	return (<div className={'table-list '+(props.className||'')}>
		{props.table}
	</div>);
}