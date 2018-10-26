/**
 *  author : bo.peng
 *  createTime 2018-10-25 15:14
 *  description :
 */
import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
	<div>
	  <AddTodo />
	  <VisibleTodoList />
	  <Footer />
	</div>
)

export default App