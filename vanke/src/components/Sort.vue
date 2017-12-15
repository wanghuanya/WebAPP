<template>
	<div class="sort">
		<!-- 顶部标题 -->
		<my-title :title="'分类'"></my-title>
		<!-- 侧边导航栏 -->
		<div class="container">
			<ul class="type">
				<li class="type-item" :class="{active:index===currentIndex}" v-for="(item,index) in types" @click="changeType(index)">{{item}}</li>
			</ul>
			<!-- 右侧分类数据列表 -->
	        <div class="type-list ks-clear">
	            <div class="list-item" v-for="(item,index) in typeList" :key="index">
	                <img :src="'http://101.132.171.105:3000/images/'+item.logo" alt="">
	                <span>{{item.typeName}}</span>
	            </div>
	        </div>
		</div>
	</div>
</template>

<script>
	import Title from './Title'
	export default{
		name:'Sort',
		data(){
			return {
				level:0,
				currentIndex:0,
				types:["推荐","男装","女装","男鞋","女鞋","袜品","家居","童装","内衣"],
				typeList:[]
			}
		},
		created(){
			this.getType()
		},
		methods:{
			changeType(index){
				this.currentIndex = this.level = index;
				this.getType();
			},
			getType(){
				this.$axios.get("http://101.132.171.105:3000/typeList?level="+this.level).then((res)=>{
					console.log(res.data);
					this.typeList = res.data.result;
				})
			}
		},
		components:{
		    'myTitle':Title
		}
	}
</script>

<style lang="scss">
	.sort{
		// 侧边导航栏
		.container{
            position:fixed;
            top:50px;
            bottom:54px;
            display: flex;
            width:414px;
            .type{
                flex:2.5;
                background-color:#e5e5e5;
                height:100%;
                .type-item{
                    height: 38px;
                    line-height: 38px;
                    text-align: center;
                    border-bottom:1px solid white;
                    &.active{
                        color:red;
                        background-color:white;
                    }
                }
            }
            .type-list{
                flex:7.5;
                overflow-y: scroll;
	            &::-webkit-scrollbar{
	                display: none;
	            }
                .list-item{
                    float:left;
                    display: flex;
                    flex-direction: column;
                    width:102px;
                    height: 108px;
                    margin-top:5px;
                    img{
                        display: inline-block;
                        width:76px;
                        height:75px;
                        margin:0 auto;
                    }
                    span{
                        text-align: center;
                        margin-top:10px;
                    }
                }
            }
        }
	}
</style>