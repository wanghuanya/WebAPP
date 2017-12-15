<template>
  <div class="home">
    <!-- 顶部搜索栏 -->
    <div class="search">
      <!-- 搜索表单 -->
      <form action="#">
        <input type="text" placeholder="熊本熊">
      </form>
      <!-- 消息图标 -->
      <div class="message">
        <img src="../assets/images/msg.png" alt="">
        <span></span>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="slider">
      <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="../assets/images/slider-1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/slider-2.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/slider-3.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../assets/images/slider-4.jpg" alt=""></swiper-slide>
        <!-- Optional controls -->
        <!-- 小圆点 -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <!-- 广告图片 -->
    <div class="admin">
      <img src="../assets/images/admin-1.jpg" alt="">
      <img src="../assets/images/admin-2.jpg" alt="">
    </div>
    <!-- 每日秒杀 -->
    <div class="seckill">
      <a href="#">
        <div class="every">
          <i class="clock"></i>
          <span>每日秒杀</span>
        </div>
        <div class="ready">
          <span class="time">20点场</span>
          <span>即将开始</span>
        </div>
        <div class="join">
          <span>进入会场</span>
          <i class="right"></i>
        </div>
      </a>
    </div>
    <div class="section">
      <div class="item">
        <a href="#">
          <img src="../assets/images/seckill-1.jpg" alt="">
        </a>
      </div>
      <div class="item">
        <a href="#">
          <img src="../assets/images/seckill-2.jpg" alt="">
        </a>
      </div>
      <div class="item">
        <a href="#">
          <img src="../assets/images/seckill-3.jpg" alt="">
        </a>
      </div>
      <div class="item">
        <a href="#">
          <img src="../assets/images/seckill-4.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="content">
      <!-- 新品推荐 -->
      <div class="section1">
        <div class="section-item"><a href="#"><img src="../assets/images/new.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/new-1.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/new-2.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/new-3.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/new-4.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/new-5.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/new-6.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/new-7.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/new-8.jpg" alt=""></a></div>
      </div>
      <!-- 当季热卖 -->
      <div class="section1">
        <div class="section-item"><a href="#"><img src="../assets/images/hot.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-1.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-2.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-3.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-4.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-5.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-6.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-7.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-8.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-9.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-10.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-11.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/hot-12.jpg" alt=""></a></div>
      </div>
      <!-- 吉国武衬衫 -->
      <div class="big">
        <a href="#">
          <img src="../assets/images/big-1.jpg" alt="">
        </a>
      </div>
      <div class="section1">
        <div class="item"><a href="#"><img src="../assets/images/item-1.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/item-2.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/item-3.jpg" alt=""></a></div>
        <div class="item"><a href="#"><img src="../assets/images/item-4.jpg" alt=""></a></div>
      </div>
      <!-- 小横图 -->
      <div class="small">
        <a href="#"><img src="../assets/images/small-1.jpg" alt=""></a>
        <a href="#"><img src="../assets/images/small-2.jpg" alt=""></a>
        <a href="#"><img src="../assets/images/small-3.jpg" alt=""></a>
        <a href="#"><img src="../assets/images/small-4.jpg" alt=""></a>
      </div>
      <!-- 查看更多、返回顶部 -->
      <div class="moreAndtop">
        <a href="#"><img src="../assets/images/see-all.jpg" alt=""></a>
        <a href="#"><img src="../assets/images/ret-top.jpg" alt=""></a>
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
  </div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
// 引入swiper.css文件
import "swiper/dist/css/swiper.css"

export default {
  name: 'Home',
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
  methods:{
    exit(){
      // 点击退出，跳转到主页，清除localStorage中用户信息，登录状态变为未登录
      this.$router.push('/');
      window.localStorage.removeItem('username');
      // this.$router.isLogin = false;
      this.$store.state.isLogin = false;
    }
  },
  created(){
    var username = window.localStorage.getItem("username")
    if(username){
      this.$store.commit("login",{nickname:username})
    }
  },
  components:{
    swiper,
    swiperSlide
  },
  computed:{
    username(){
      return this.$store.state.username
    },
    isLogin(){
      return this.$store.state.isLogin
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home{
    // 顶部搜索框
    .search{
      position:fixed;
      top:0;
      left:0;
      z-index:9999;
      width:414px;
      height:50px;
      background-color:#b81c22;
      form{
        position:absolute;
        top:11px;
        left:11px;
        width:352px;
        height:28px;
        border-radius:2px;
        background-color:#fff;
        input{
          width:100%;
          height:100%;
          padding-left:35px;
          border:none;
          background:url(../assets/images/search.png) 10px 5px no-repeat;
          background-size: 18px 18px;
        }
      }
      // 消息提示
      .message{
        position:absolute;
        top:17px;
        right:10px;
        width:22px;
        height:16px;
        img{
          display:inline-block;
          width:100%;
          height:100%;
        }
        span{
          position:absolute;
          top:-5px;
          right:-5px;
          display:inline-block;
          width:5px;
          height:5px;
          border-radius:50%;
          background-color:#fff;
        }
      }
    }
    // 轮播图
    .slider{
      width:414px;
      height:260px;
      margin-top:50px;
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
        float:left;
        width:207px;
        height:32px;
      }
    }
    // 每日秒杀
    .seckill{
      position:relative;
      width:100%;
      height:60px;
      text-align:center;
      margin-top:37px;
      .every{
        font-size:15px;
        padding:7px 7px 3px;
        color:#b81c22;
        i{
          background:url(../assets/images/clock.png) top left no-repeat;
          background-size:16px 16px;
        }
      }
      .ready{
        font-size:16px;
        color:#333;
        padding:3px 7px 6px;
        .time{
          font-weight:bold;
        }
      }
      .join{
        position:absolute;
        bottom:6px;
        right:6px;
        font-size:16px;
        font-weight:bold;
        color:#b81c22;
        .right{
          background:url(../assets/images/right-arrow.png) top left no-repeat;
          background-size:16px 16px;
        }
      }
    }
    .section{
      .item{
        float:left;
        img{
          width:207px;
          height:322px;
        }
      }
    }
    .content{
      background-color:#f2f2f2;
      .section1{
        .section-item{
          img{
            width:414px;
            height:52px;
          }
        }
        .item{
          float:left;
          img{
            width:207px;
            height:276px;
          }
        }
      }
      .big{
        img{
          width:414px;
          height:230px;
        }
      }
      .small{
        img{
          width:414px;
          height:118px;
        }
      }
      // 更多和返回顶部
      .moreAndtop{
        margin-bottom:40px;
        img{
          float:left;
          width:207px;
          height:49px;
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
  }
</style>
