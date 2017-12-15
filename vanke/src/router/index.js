import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Sort from '@/components/Sort'
import Tailor from '@/components/Tailor'
import Cart from '@/components/Cart'
import Mine from '@/components/Mine'
import Login from '@/components/Login'
import Reg from '@/components/Reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
        path:'/user',
        name:'User',
        component:User,
        children:[
            {
                path:'/login',
                name:'Login',
                component:Login
            },
            {
                path:'/reg',
                name:'Reg',
                component:Reg
            }
        ]
    },
    {
    	path:'/sort',
    	name:'Sort',
    	component:Sort
    },
    {
    	path:'/tailor',
    	name:'Tailor',
    	component:Tailor
    },
    {
    	path:'/cart',
    	name:'Cart',
    	component:Cart
    },
    {
    	path:'/mine',
    	name:'Mine',
    	component:Mine
    }
  ]
})
