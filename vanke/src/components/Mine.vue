<template>
	<div class="mine">
		<!-- 顶部标题 -->
		<my-title :title="'个人中心'"></my-title>
		<div class="content">
			<!-- 顶部背景 -->
			<div class="topbg">
				<!-- 设置 -->
				<div class="setUp"><a href="#"></a></div>
				<!-- 头像、用户名 -->
				<div class="users">
					<img class="head" src="../assets/images/head.jpg" alt="">
					<!-- 用户登录时显示的内容 -->
					<p v-show="isLogin">{{username}}</p>
					<!-- 用户未登录时显示的内容 -->
					<p v-show="!isLogin"><router-link to="/login">请登录</router-link></p>
					<router-view/>
					<a href="#"><img class="vip" src="../assets/images/vip.png" alt=""></a>
				</div>
				<!-- 积分、余额、成长值 -->
				<ul>
					<li>积分:0</li>
					<li>余额:0.00</li>
					<li>成长值:0</li>
				</ul>
			</div>
			<!-- 全部订单 -->
			<div class="allOrder">
				<div class="order">
					<a href="">
						<span class="all">全部订单</span>
						<span class="more"></span>
					</a>
				</div>
				<ul>
					<li>
						<i class="doing"></i>
						<span>进行中</span>
					</li>
					<li>
						<i class="done"></i>
						<span>已完成</span>
					</li>
					<li>
						<i class="eval"></i>
						<span>待评价</span>
					</li>
					<li>
						<i class="invalid"></i>
						<span>无效</span>
					</li>
				</ul>
			</div>
			<!-- 更多功能 -->
			<section>
				<ul>
					<li v-for="item in iconList">
						<span :class="item.name">{{item.url}}</span>
						<span class="name">{{item.title}}</span>
						<span class="activity">{{item.activity}}</span>
					</li>
					
				</ul>
			</section>
		</div>
	</div>
</template>

<script>
	import Title from './Title'
	export default{
		name:'Mine',
		data(){
			return {
				iconList:[
					{id:1,name:"icon icon1",title:"充值返现",activity:"充100退100"},
					{id:2,name:"icon icon2",title:"我的私人定制"},
					{id:3,name:"icon icon3",title:"物流查询"},
					{id:4,name:"icon icon4",title:"退换货记录"},
					{id:5,name:"icon icon5",title:"地址管理"},
					{id:6,name:"icon icon6",title:"我的礼品卡"},
					{id:7,name:"icon icon7",title:"我的优惠券"},
					{id:8,name:"icon icon8",title:"我的积分"},
					{id:9,name:"icon icon9",title:"我的评论"},
					{id:10,name:"icon icon10",title:"我的提问"},
					{id:11,name:"icon icon11",title:"投诉建议"}
				]
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
	.mine{
		// 内容部分
		.content{
			background-color:#f0eff5;
			// 顶部背景
			.topbg{
				width:414px;
				height:222px;
				color:#fff;
				background:url(../assets/images/topbg.png);
				background-size:414px 222px;
				.setUp{
					width:414px;
					height:35px;
					a{
						display:inline-block;
						width:22.5px;
						height:25px;
						float:right;
						background:url(../assets/images/order-icon.png) 0 0;
						background-size:22.5px 25px;
					}
				}
				.users{
					text-align:center;
					.head{
						border-radius:50%;
					}
					p{
						margin:10px 0;
						a{
							color:#fff;
						}
					}
					.vip{
						width:63px;
						height:19px;
					}
				}
				li{
					list-style:none;
					float:left;
					margin:5px 45px;
				}
			}
			// 全部订单
			.allOrder{
				width:414px;
				height:116px;
				margin:12px 0;
				background-color:#fff;
				.order{
					position:relative;
					width:394px;
					height:43px;
					line-height:44px;
					padding:0 10px;
					border-bottom:1px solid #f0eff5;
					.more{
						position: absolute;
					    top: 50%;
					    right: 12px;
					    width: 12px;
					    height: 12px;
					    border-top: 1px solid #a5a5a5;
					    border-right: 1px solid #a5a5a5;
					    transform: translateY(-50%) rotate(45deg);
					    -webkit-transform: translateY(-50%) rotate(45deg);
					}
				}
				li{
					float:left;
					width:103px;
					height:48px;
					padding:12px 0;
					text-align:center;
					i{
						display:block;
						width:23px;
						height:25px;
						margin:0 auto;
					}
					.doing{
						background:url(../assets/images/order-icon.png) left -27px/100% no-repeat;
					}
					.done{
						background:url(../assets/images/order-icon.png) left -52px/100% no-repeat;
					}
					.eval{
						background:url(../assets/images/order-icon.png) left -78px/100% no-repeat;
					}
					.invalid{
						background:url(../assets/images/order-icon.png) left -104px/100% no-repeat;
					}
				}
			}
			// 更多功能
			section{
				height:280px;
				background-color:#fff;
				li{
					float:left;
					width:103px;
					height:56px;
					margin:15px 0;
					text-align:center;
					span{
						display:inline-block;
					}
					.icon{
						display:block;
						width:38px;
						height:38px;
						margin:0 auto;
						background-size:38px 525px;
					}
					.icon1{
						background:url(../assets/images/section-icon.png) left -1px/100% no-repeat;
					}
					.icon2{
						background:url(../assets/images/section-icon.png) left -40px/100% no-repeat;
					}
					.icon3{
						background:url(../assets/images/section-icon.png) left -452px/100% no-repeat;
					}
					.icon4{
						background:url(../assets/images/section-icon.png) left -495px/100% no-repeat;
					}
					.icon5{
						background:url(../assets/images/section-icon.png) left -152px/100% no-repeat;
					}
					.icon6{
						background:url(../assets/images/section-icon.png) left -77px/100% no-repeat;
					}
					.icon7{
						background:url(../assets/images/section-icon.png) left -114px/100% no-repeat;
					}
					.icon8{
						background:url(../assets/images/section-icon.png) left -265px/100% no-repeat;
					}
					.icon9{
						background:url(../assets/images/section-icon.png) left -191px/100% no-repeat;
					}
					.icon10{
						background:url(../assets/images/section-icon.png) left -229px/100% no-repeat;
					}
					.icon11{
						background:url(../assets/images/section-icon.png) left -302px/100% no-repeat;
					}
					.activity{
						color:#b81c22;
					}
				}
			}
		}
	}
</style>