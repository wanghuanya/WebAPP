<template>
	<div class="title">
		<!-- 顶部标题 -->
		<div class="my-title">
			<span class="back" @click="$router.go(-1)"></span>
       		<span>{{title}}</span>
		</div>
	</div>
</template>

<script>
export default{
	name:'Title',
	props:['title']
}
</script>

<style lang="scss">
	// 顶部标题
		.my-title{
			position:fixed;
			top:0;
			z-index:9999;
			width:414px;
			height:50px;
			text-align:center;
			line-height:50px;
			background-color:#b81c22;
			span{
				color:#fff;
				font-size:18px;
			}
			.back{
				position:absolute;
				top:25px;
				left:25px;
			    transform: translateY(-50%) rotate(45deg);
			    -webkit-transform: translateY(-50%) rotate(45deg);
			    width: 16px;
			    height: 16px;
			    border-bottom: 2px solid #fff;
			    border-left: 2px solid #fff;
			    cursor: pointer;
			}
		}
</style>