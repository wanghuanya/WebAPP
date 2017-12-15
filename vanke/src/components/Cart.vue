<template>
	<div class="cart">
		<!-- 顶部标题 -->
		<my-title :title="'购物车'"></my-title>
		<div class="content">
			<div class="shoppingCar">
				<div class="shoppingCar-null">
					<img src="../assets/images/null-car.png" alt="">
				</div>
				<div class="bottomBtn">
					<a href="">我的收藏</a>
					<a href="">去逛逛</a>
				</div>
			</div>
			<!-- 登录注册 -->
	        <!-- 用户未登录时显示的内容 -->
	        <div class="loginAndReg" v-show="!isLogin">
		        <router-link to="/login">登录</router-link>
		        <router-link to="/reg">注册</router-link>
	        </div>
	        <!-- 用户登录时显示的内容 -->
	        <div class="loginAndReg" v-show="isLogin">
		        <a href="#">{{username}}</a>
		        <a @click="exit" href="#">退出</a>
	        </div>
	        <router-view/>
		</div>
		<!-- 底部链接 -->
        <div class="footer">
            <ul class="link">
                <li>
		            <a href="#"><img src="../assets/images/link-1.png"></a>
		            <a href="#"><img src="../assets/images/link-2.png"></a>
		            <a href="#"><img src="../assets/images/link-3.png"></a>
		            <a href="#"><img src="../assets/images/link-4.png"></a>
          		</li>
        	</ul>
        	<p>京ICP证100557号</p>
      	</div>
	</div>
</template>

<script>
	import Title from "./Title"
	export default{
		name:'Cart',
		data(){
			return {

			}
		},
		methods:{
    		exit(){
		        // 点击退出，跳转到主页，清除localStorage中用户信息，登录状态变为未登录
		        this.$router.push('/');
		        window.localStorage.removeItem('username');
		        this.$store.state.isLogin = false;
		    }
		},
		created(){
		    var username = window.localStorage.getItem("username")
		    if(username){
		      this.$store.commit("login",{nickname:username})
		    }
		},
		computed:{
		    username(){
		      return this.$store.state.username
		    },
		    isLogin(){
		      return this.$store.state.isLogin
		    }
		},
		components:{
	        'myTitle':Title
	    }
	}
</script>

<style lang="scss">
	.cart{
		// 内容部分
		.content{
			margin-top:50px;
			// 购物车
			.shoppingCar{
				width:366px;
				height:254px;
				padding:23px;
				margin-bottom:40px;
				.shoppingCar-null{
					position:relative;
					width:100%;
					height:252px;
					border:1px solid #666;
					img{
						position:absolute;
						top:0;
						left:0;
						bottom:0;
						right:0;
						margin:auto;
						width:156px;
						height:59px;
					}
				}
				.bottomBtn{
					margin-top:15px;
					a{
						display:inline-block;
						width:175px;
						height:37px;
						text-align:center;
						line-height:37px;
						background-color:#f5f5f5;
						&+a{
							margin-left:10px;
						}
					}
				}
			}
			// 登录注册
	        .loginAndReg{
		        padding:44px 0;
		        margin-top:90px;
		        text-align:center;
		        a{
	          	 	display:inline-block;
		            width:105px;
		            height:30px;
		            margin-right:8px;
		            line-height:30px;
		            font-size:16px;
		            color:#333;
		            text-decoration:none;
		            background-color:#fff;
		        }
	        }
		}
		// 底部链接
      	.footer{
	        padding-bottom:7px;
	        margin-bottom:53px;
	        .link{
		        width:288px;
		        padding:20px 0;
		        margin:0 auto;
		        border-top:2px solid #8c8c8c;
		        border-bottom:2px solid #8c8c8c;
	            a+a{
	              margin-left:25px;
	            }
		        img{
		            width:44px;
		            height:65px;
		        }
	        }
	        p{
	            margin-top:2px;
	            line-height:24px;
	            color:#8c8c8c;
	        	text-align:center;
	        }
        }
	}
</style>