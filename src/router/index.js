import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../components/LandingPage'
import ReservationList from '../components/ReservationList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/reservationList',
    name: 'ReservationList',
    component: ReservationList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
