/**
 *  author : bo.peng
 *  createTime 2018-10-26 19:20
 *  description :
 */
import React from 'react';
import { connect } from 'react-redux';
import {Login} from "./user/Login";
import { Button } from 'antd';
import action from "../redux/actions";
import RouterAPP from "../router";

const mapStateUser = state => {
  return {
	user: state.user
  }
};
let bool = false;
const view = ({ user , dispatch }) => {
  return (
	<>
	  <Button  type="primary" onClick={e=>{
		bool = !bool;
		dispatch(action.userLogin(bool));
	  }}/>
	  {user.LOGIN?<RouterAPP/>:<Login/>}
	  </>
)};

const Main = connect(
	mapStateUser,
)(view);

export default Main;