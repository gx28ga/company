/**
 *  author : bo.peng
 *  createTime 2018-10-26 19:20
 *  description :
 */
import React from 'react';
import { connect } from 'react-redux';
import Login from "./user/Login";
import RouterAPP from "../router";

const view = ({ user , dispatch }) => {
  return (
	<>
	  {user.login?<RouterAPP/>:<Login/>}
	  </>
)};

const Main = connect(
	state=>{return{user:state.user}},
)(view);

export default Main;