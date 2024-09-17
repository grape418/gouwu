import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/Category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import detail from '@/views/detail/index.vue'
import CartList from '@/views/cartList/index.vue'
import Checkout from '@/views/checkout/index.vue'
import Pay from '@/views/pay/index.vue'
import PayBack from '@/views/pay/payBack.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: Layout,
      children:[
        {
          path:'',
          component: Home
        },
        {
          path: 'category/:id',
          component: Category
        },
        {
          path: 'category/sub/:id',
          component: subCategory
        },
        {
          path: 'detail/:id',
          component: detail
        },
        {
          path: 'cartList',
          component: CartList
        },
        {
          path: 'checkout',
          component: Checkout
        },
        {
          path: 'pay',
          component: Pay
        },
        {
          path: 'paycallback',
          component: PayBack
        },

    ]
    },
    {
      path:'/login',
      component:Login
    }
  ],
  scrollBehavior(){
    return{
      top: 0
    }
  }
})

export default router
