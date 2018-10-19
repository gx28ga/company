export default {
	methods : {
		addview(id,type){ //新闻查看数
			this.ajax({
				url:'/appFind/findDetails.do',
				data : {
					id : id,
					type : type
				}
			});
		}
	}
};