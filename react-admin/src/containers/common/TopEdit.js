/**
 *  author : bo.peng
 *  createTime 2018-11-08 17:20
 *  description :
 */
import React from 'react';
export default (props)=> (
	<div className='top-edit'>
		<div style={{float:'right'}}>
			{props.right}
		</div>
		<div>
			{props.left}
		</div>
	</div>
);