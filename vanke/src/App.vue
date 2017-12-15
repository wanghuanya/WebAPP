<template>
  <div id="app">
  	<!-- 底部导航栏 -->
    <footer>
		<router-link to="/">
    		<span class="icon iconfont icon-home"></span>
    		<span class="text">凡客</span>
		</router-link>
		<router-link to="/sort">
    		<span class="icon iconfont icon-menu1"></span>
    		<span class="text">分类</span>
		</router-link>
		<router-link to="/tailor">
    		<span class="icon iconfont icon-dingzhi"></span>
    		<span class="text">定制</span>
		</router-link>
		<router-link to="/cart">
    		<span class="icon iconfont icon-shopcar1"></span>
    		<span class="text">购物车</span>
    		<span class="number">0</span>
		</router-link>
		<router-link to="/login">
    		<span class="icon iconfont icon-user"></span>
    		<span class="text">我的</span>
		</router-link>
	</footer>
    <router-view/>
  </div>
</template>

<script>
//将字体图标的css文件导入
import "./assets/icons/iconfont.css"
export default {
  	name: 'app',
  	data(){
  		return {
  			
  		}
  	}
}
</script>

<style lang="scss">
*{
	padding:0;
	margin: 0;
}
a{
	text-decoration:none;
	color:#333;
}
ul,li{
	list-style:none;
}
#app {
  	font-family: 'Avenir', Helvetica, Arial, sans-serif;
  	/* 底部导航栏*/
	footer{
	    position: fixed;
	    bottom:0;
	    z-index:9999;
	    display: flex;
	    flex-direction:row;
	    width:414px;
	    height:54px;
	    padding-top:3px;
	    background-color:#fff;
	    a{
	    	position:relative;
	        display: flex;
	        flex-direction: column;
	        flex:1;
	        text-align: center;
	        color:#ccc;
	        &.router-link-exact-active{
		        color:#b81c22;
	        }
	        span.icon{
	        	font-size:22px;
	        }
	        span.text{
	        	font-size:14px;
	        }
	        span.number{
	        	position:absolute;
	        	top:0;
	        	right:17px;
	        	width:14px;
	        	height:14px;
	        	background-color:#b81c22;
	        	color:#fff;
	        	font-size:12px;
	        	font-weight:bold;
	        	border-radius:50%;
	        }
	    }
  	}
}
</style>
