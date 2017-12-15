<template>
	<div id="reg">
		<!-- 顶部标题 -->
		<my-title :title="'注册'"></my-title>
		<!-- 注册表单 -->
		<div class="content">
			<form action="#">
				<!-- <div class="picVer">
					<input class="left" type="text" placeholder="请输入图片验证码">
					<img src="../assets/images/GetVerityCode.jpg" alt="">
				</div> -->
				<div class="picVer">
					<input v-model="nickName" type="text" placeholder="用户名">
				</div>
				<div class="picVer">
					<input v-model="phone" type="number" placeholder="请输入您的手机号">
					<!-- <a href="">获取验证码</a> -->
				</div>
				<!-- <input type="number" placeholder="请输入手机验证码"> -->
				<input v-model="password" type="password" placeholder="密码：6-16位字母，数字，特殊字符">
				<input v-model="repass" type="password" placeholder="确认密码">
				<p>注册账号即表示同意遵守<a href="">《VANCL凡客服务条款》</a></p>
				<input @click.prevent="doReg" class="submit" type="submit" value="点击注册">
			</form>
		</div>
	</div>
</template>

<script>
	import Title from './Title'
	export default{
		name:'Reg',
		data(){
			return {
				nickName:"",
				phone:"",
				password:"",
				repass:"",			
			}
		},
		methods:{
			doReg(){
				if(this.password != this.repass){
					alert('密码输入不一致');
					return
				}

				// 手机号正则验证
				var reg = /^(13[0-9]|14[579]|15[012356789]|17[135678]|18[0-9]|199)[0-9]{8}$/;
				if(!reg.test(this.phone)){
					alert('您输入的格式不正确');
					return
				}

				// 用vue对象上axios发送ajax请求
				this.$axios.post('/api/users/add',{
					nickName:this.nickName,
					phone:this.phone,
					password:this.password
				}).then((res)=>{
					console.log(res.data);

					// 注册成功，跳转到登录页
					if(res.data.errno === 0){
						this.$router.push('/login');
					}
				})
			}
		},
		components:{
	        'myTitle':Title
	    }
	}
</script>

<style lang="scss">
	#reg{
		// 登录表单
		.content{
			margin-top:50px;
			form{
				text-align:left;
				padding:15px 25px 0;
				.picVer{
					position:relative;
					line-height:41px;
					img{
						position:absolute;
						right:5px;
						top:15px;
						height:35px;
					}
					a{
						position:absolute;
						right:5px;
						top:15px;
						display:inline-block;
						// width:115px;
						// height:48px;
						padding:0 15px;
						font-size:16px;
						color:#b81c22;
						border:2px solid #999;
						border-radius:5px;
					}
				}
				input{
					width:354px;
					height:41px;
					color:#b5b5b5;
					padding-left:10px;
					margin-top:15px;
					border:none;
					background-color:#f5f5f5;
				}
				.left{
					width:210px;
				}
				.submit{
					width:364px;
					font-size:18px;
					color:#fff;
					height:50px;
					background-color:#b81c22;
				}
				p{
					margin:50px 0 10px;
					text-align:center;
				}
			}
		}
	}
</style>