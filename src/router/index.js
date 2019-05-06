import Vue from 'vue'
import VueRouter from 'vue-router'
import MainWrapper from '../components/MainWrapper'
import e404 from '../components/Exceptions/e404'
import e500 from '../components/Exceptions/e500'

Vue.use(VueRouter)



export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { name: 'home', path: '/', component: MainWrapper },
    { name: '500', path: '/500', component: e500},
    { name: '404', path: '/404', component: e404},
  ]
})