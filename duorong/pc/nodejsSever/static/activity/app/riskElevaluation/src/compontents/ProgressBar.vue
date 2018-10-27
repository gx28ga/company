<style scope>
.progress{
    width:260px;
    height:4px;
    margin:20px;
    margin-top:25px;
    background: #D8D8D8;
    border-radius: 8px;
    position: relative;
    .native{
        background:#FF8246;
        border-radius: 8px;
        height:4px; 
    }
    .pencent{
        position: absolute;
        top:-8px;
        right:-40px;
    }
}
	
</style>
<template>
	 <div class='progress'>
       <div class='native'></div><span class='pencent'>{{current}}/10</span>
    </div>
</template>
<script>
	export default{
        props:['current'],
		data(){
			return {
                
			}
		},
		mounted(){
			var progress=$(".progress"),
			    native=progress.find(".native"),
			    width=this.current*26;
			    setTimeout(()=>{
			    	native.css({width:width});
			    },500)


		},
        watch:{
            current(){
                var progress=$(".progress"),
                native=progress.find(".native"),
                width=this.current*26;
                setTimeout(()=>{
                    native.css({width:width});
                },500)  
            }
              
        }
	}
</script>

