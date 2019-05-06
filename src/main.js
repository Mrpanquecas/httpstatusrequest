import Vue from 'vue'
import Antd from 'ant-design-vue'
import VueRouter from 'vue-router'
import App from './App'
import { router } from './router'
import 'ant-design-vue/dist/antd.css'
import './utils/axiosConfig'
Vue.config.productionTip = false

Vue.use(Antd, VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
