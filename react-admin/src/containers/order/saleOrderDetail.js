/**
 *  author : bo.peng
 *  createTime 2018-11-08 13:17
 *  description :
 */
import React from 'react';
const Detail=({match})=> {
	return <div>detail{match.params.id}</div>;
};
export default Detail;