// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "lib-flexible"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import Vuex from 'vuex'

//全局注册vuex
Vue.use(Vuex)

//创建一个vuex的实例
var store = new Vuex.Store({
	state:{
		isLogin:false, //保存用户的登录状态
		username:""
	},
	mutations:{
		login(state,userInfo){
			state.isLogin = true
			state.username = userInfo.nickname
		}
	}
})

Vue.config.productionTip = false
Vue.prototype.$axios = axios

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//将vuex实例挂载到全局vue对象上
  template: '<App/>',
  components: { App }
})
