import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index.js'
import fastclick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/font/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill'
import 'swiper/dist/css/swiper.min.css'
Vue.config.productionTip = false
fastclick.attach(document.body)

Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
