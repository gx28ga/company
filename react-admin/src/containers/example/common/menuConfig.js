/**
 *  author : bo.peng
 *  createTime 2018-11-19 15:00
 *  description : 菜单
 */
export default [
	{
		name: '项目规范文档',
		path: '/',
		icon: 'ordered-list',
		children:[
			{
				name: '文件夹命名',
				path: 'folder',
			},
			{
				name: 'js,ts文件命名',
				path: 'file',
			},
			{
				name: '变量，涵数命名',
				path: 'jsAndTs',
			},
			{
				name: '其它命名方式',
				path: 'jsAndTs',
			},
		]
	},
	{
		name: '项目流程',
		path: '/',
		icon: 'rollback',
		children:[
			{
				name: '文件夹命名',
				path: 'folder',
			},
		]
	},
	{
		name: '公共组件',
		path: '/',
		icon: 'align-left',
		children:[
			{
				name: '文件夹命名',
				path: 'folder',
			},
		]
	},
]