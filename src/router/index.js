import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/Content.vue'
import Notification from '../components/Notification.vue'

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
