<template>
	<div class="tailor">
		<!-- 顶部标题 -->
		<my-title :title="'定制'"></my-title>
		<!-- 轮播图 -->
	    <div class="slider">
	        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
		        <!-- slides -->
		        <swiper-slide><img src="../assets/images/tailorSlider-1.jpg" alt=""></swiper-slide>
		        <swiper-slide><img src="../assets/images/tailorSlider-2.jpg" alt=""></swiper-slide>
		        <swiper-slide><img src="../assets/images/tailorSlider-3.jpg" alt=""></swiper-slide>
		        <swiper-slide><img src="../assets/images/tailorSlider-4.jpg" alt=""></swiper-slide>
		        <!-- Optional controls -->
		        <!-- 小圆点 -->
		        <div class="swiper-pagination"  slot="pagination"></div>
	        </swiper>
	    </div>
	    <!-- 广告图片 -->
	    <div class="admin">
	      	<img src="../assets/images/tailor-Admin.jpg" alt="">
	    </div>
	    <!-- 新品推荐 -->
	    <div class="section">
		    <div class="title">
		    	<a href="#"><img src="../assets/images/tailorNew.jpg" alt=""></a>
		    </div>
	 		<div class="sliders">
		        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
			        <!-- slides -->
			        <swiper-slide><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""></swiper-slide>
			        <swiper-slide><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""></swiper-slide>
		        </swiper>
			</div>
	    </div>
	    <!-- 风格特辑 -->
	    <div class="section">
		    <div class="title">
		    	<a href="#"><img src="../assets/images/style.jpg" alt=""></a>
		    </div>
		    <div class="topic">
		    	<a href="#"><img src="../assets/images/style-1.jpg" alt=""></a>
		    </div>
		    <div class="sliders">
		        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
			        <!-- slides -->
			        <swiper-slide><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""></swiper-slide>
			        <swiper-slide><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""></swiper-slide>
		        </swiper>
			</div>

		    <div class="topic">
		    	<a href="#"><img src="../assets/images/style-1.jpg" alt=""></a>
		    </div>
		    <div class="sliders">
		        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
			        <!-- slides -->
			        <swiper-slide><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""></swiper-slide>
			        <swiper-slide><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""><img src="../assets/images/tailorNew-1.jpg" alt=""></swiper-slide>
		        </swiper>
			</div>
	    </div>

	    <!-- 衬衫 -->
	    <div class="section1">
	    	<div class="type-name">
	    		<a href="#"><img src="../assets/images/shirt.jpg" alt=""></a>
	    	</div>
	    	<div class="item">
	    		<a href="#"><img src="../assets/images/shirt-1.jpg" alt=""></a>
	    	</div>
	    	<div class="item">
	    		<a href="#"><img src="../assets/images/shirt-1.jpg" alt=""></a>
	    	</div>
	    	<div class="item">
	    		<a href="#"><img src="../assets/images/shirt-1.jpg" alt=""></a>
	    	</div>
	    	<div class="item">
	    		<a href="#"><img src="../assets/images/shirt-1.jpg" alt=""></a>
	    	</div>
	    </div>

	    <!-- 西服套装 -->
	    <div class="section1">
	    	<div class="type-name">
	    		<a href="#"><img src="../assets/images/suit.jpg" alt=""></a>
	    	</div>
	    	<div class="item">
	    		<a href="#"><img src="../assets/images/suit-1.jpg" alt=""></a>
	    	</div>
	    	<div class="item">
	    		<a href="#"><img src="../assets/images/suit-1.jpg" alt=""></a>
	    	</div>
	    	<div class="item">
	    		<a href="#"><img src="../assets/images/suit-1.jpg" alt=""></a>
	    	</div>
	    	<div class="item">
	    		<a href="#"><img src="../assets/images/suit-1.jpg" alt=""></a>
	    	</div>
	    </div>

	    <!-- 裤装 -->
	    <div class="section1">
	    	<div class="type-name">
	    		<a href="#"><img src="../assets/images/pants.jpg" alt=""></a>
	    	</div>
	    	<div class="item1">
	    		<a href="#"><img src="../assets/images/pants-1.jpg" alt=""></a>
	    	</div>
	    	<div class="item1">
	    		<a href="#"><img src="../assets/images/pants-1.jpg" alt=""></a>
	    	</div>
	    	<div class="item1">
	    		<a href="#"><img src="../assets/images/pants-1.jpg" alt=""></a>
	    	</div>
	    	<div class="item1">
	    		<a href="#"><img src="../assets/images/pants-1.jpg" alt=""></a>
	    	</div>
	    </div>
	</div>
</template>

<script>
import Title from './Title'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
// 引入swiper.css文件
import "swiper/dist/css/swiper.css"

export default {
    name: 'Tailor',
    data () {
        return {
	        notNextTick: true,
	        swiperOption: {
	            autoplay: 3000,
	            direction: 'horizontal',
	            grabCursor: true,
	            setWrapperSize: true,
	            autoHeight: true,
	            pagination: '.swiper-pagination',
	            paginationClickable: true,
	            mousewheelControl: true,
	            observeParents: true
	        }
	    }
    },
    components:{
        swiper,
        swiperSlide,
        'myTitle':Title
    }
}
</script>

<style lang="scss">
	.tailor{
		margin-top:50px;
		// 轮播图
	    .slider{
	        width:414px;
	        height:260px;
	        background-color:#ccc;
	        .swiper-container{
	            height:260px;
	            .swiper-slide{
	                float:left;
	                width:414px;
	                height:260px;
	                img{
	                    display:inline-block;
	                    width:414px;
	                    height:260px;
	                }
	            }
	        }
	    }
	    // 广告图片
	    .admin{
	        margin-top:5px;
	        img{
	            width:414px;
	            height:41px;
	        }
	    }
	    // 新品推荐
	    .section{
	    	.title{
	    		img{
		    		width:414px;
		    		height:50px;
	    		}
	    	}
	    	.topic{
	    		img{
	    			width:414px;
	    			height:138px;
	    		}
	    	}
	    	.sliders{
		        width:414px;
		        height:260px;
		        .swiper-container{
		            .swiper-slide{
		                float:left;
		                img{
		                    display:inline-block;
		                    width:133px;
		                    height:260px;
		                    &+img{
		                    	margin-left:5px;
		                    }
		                }
		            }
		        }
		    }
	    }
	    .section1{
	    	.type-name{
	    		img{
		    		width:414px;
		    		height:50px;
	    		}
	    	}
	    	.item{
	    		float:left;
	    		img{
	    			width:207px;
	    			height:221px;
	    		}
	    	}
	    	.item1{
	    		float:left;
	    		img{
	    			height:331px;
	    		}
	    	}
	    }
	}
</style>