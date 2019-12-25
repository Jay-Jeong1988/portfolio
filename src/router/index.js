import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/Content.vue'
import Notification from '../components/Notification.vue'
import AdminPage from '../components/AdminPage.vue'
import Payment from '../components/Payment.vue'
import About from '../components/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Content',
    component: Content
  },
  {
    path: '/notification',
    name: 'Notification',
    component: Notification
  },
  {
    path: '/admin',
    name: 'AdminPage',
    component: AdminPage
  },
  {
    path: '/how-to-pay',
    name: 'Payment',
    component: Payment
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
