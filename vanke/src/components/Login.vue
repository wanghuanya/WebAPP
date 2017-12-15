<template>
	<div id="login">
		<!-- 顶部标题 -->
		<my-title :title="'登录'"></my-title>
		<!-- 登录表单 -->
		<div class="content">
			<header>
                <span @click="isActive=!isActive" :class="{active:isActive}" class="first">普通登录</span>
                <span class="second"></span>
                <span @click="isActive=!isActive" :class="{active:!isActive}" class="third">快速登录</span>
            </header>
			<!-- 普通登录 -->
			<form action="#" v-if="isActive" class="normal">
				<input v-model="phone" type="text" placeholder="点击输入手机号">
				<input v-model="password" type="password" placeholder="请输入密码">
			</form>
			<!-- 快速登录 -->
			<form action="#" v-if="!isActive" class="quick">
				<div class="picVer">
					<input class="left" type="text" placeholder="请输入图片验证码">
					<img src="../assets/images/GetVerityCode.jpg" alt="">
				</div>
				<div class="picVer">
					<input class="left" type="number" placeholder="请输入您的手机号">
					<a href="">获取验证码</a>
				</div>
				<input type="number" placeholder="请输入手机验证码">
			</form>
			<!-- 登录按钮 -->
			<button @click.prevent="doLogin" class="btn" type="submit">登录</button>
			<!-- 免费注册 -->
			<div class="other-service">
				<p class="free"><router-link to="/reg">免费注册&gt;</router-link></p>
				<a class="get" href="#">手机账号取回密码&gt;</a>
			</div>
			<!-- 其他登录方式 -->
			<div class="otherLogin">
				<span>使用其他账号登录</span>
				<div class="iconfont">
					<span class="zhifubao"></span>
					<span class="weibo"></span>
					<span class="mi"></span>
					<span class="qq"></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from './Title'
	export default{
		name:'Login',
		data(){
			return {
				phone:"",
				password:"",
				isActive:true
			}
		},
		methods:{
			doLogin(){
				// alert(222);
				this.$axios.post('/api/users/login',{
					phone:this.phone,
					password:this.password
				}).then((res)=>{
					// alert(res.data.msg);
					// 登录成功， 修改登录状态
					if(res.data.errno === 0){
						this.$store.commit('login',res.data.userInfo);
						this.$router.push('/');
					}
				})
			}
		},
	    beforeCreate(){
	        console.log(this.$store.state.isLogin)
	        if(this.$store.state.isLogin){
	            this.$router.push('/mine')
	        }
	    },
		components:{
	        'myTitle':Title
	    }
	}
</script>

<style lang="scss">
	#login{
		// 登录表单
		.content{
			margin-top:50px;
			padding:5px 30px;
			header{
                display: flex;
                flex-direction: row;
                height: 48px;
                .second{
                    flex:2
                }
                .first,.third{
                    flex:4;
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    font-size:18px;
                    font-weight: 500;
                    color:#666;
                    border-block-end: 3px solid white; 
                    box-sizing: border-box;
                }
                .active{
                    border-bottom-color: #b81c22;
                }
            }
			form{
				text-align:left;
				// padding:0 25px;
				.picVer{
					position:relative;
					line-height:41px;
					input{
						width:210px;
						outline:none;
					}
					img{
						position:absolute;
						right:5px;
						top:62px;
						height:35px;
					}
					a{
						position:absolute;
						right:5px;
						top:37px;
						display:inline-block;
						padding:0 15px;
						font-size:16px;
						color:#b81c22;
						border:2px solid #999;
						border-radius:5px;
					}
				}
				input{
					width:344px;
					height:41px;
					color:#b5b5b5;
					margin-top:40px;
					padding-left:10px;
					border:none;
					background-color:#f5f5f5;
				}
			}
			.btn{
		        display: block;
		        height: 50px;
		        width: 100%;
		        background-color:#b81b22;
		        text-align: center;
		        margin-top:40px;
		        color:white;
		        border: none;
		        outline: none;
		        border-radius: 5px;
		        font-size:22px;
		        font-weight: 700;
		        letter-spacing: 4px;
		    }
			// 免费注册
			.other-service{
				text-align:center;
				padding:10px 25px;
				a{
					color:#333;
				}
				.free{
					float:left;
				}
				.get{
					float:right;
				}
			}
			.otherLogin{
				margin-top:35px;
				padding:10px 25px;
				.iconfont{
					span{
						display:inline-block;
						width:25px;
						height:22px;
						margin-right:20px;
						margin-top:10px;
					}
					.zhifubao{
						background:url(../assets/images/loginlogs.png) left top no-repeat;
						background-size:145px 22px;
					}
					.weibo{
						background:url(../assets/images/loginlogs.png) -38px/100% 0 no-repeat;
						background-size:145px 22px;
					}
					.mi{
						background:url(../assets/images/loginlogs.png) -85px/100% 0 no-repeat;
						background-size:145px 22px;
					}
					.qq{
						background:url(../assets/images/loginlogs.png) -125px/100% 0 no-repeat;
						background-size:145px 22px;
					}
				}
			}
		}
	}
</style>