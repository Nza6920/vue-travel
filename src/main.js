import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import store from './store/index'

Vue.config.productionTip = false
// 使用fastClick 解决移动端点击事件会延迟 300ms 执行的问题
fastClick.attach(document.body)

// 使用 VueAwesomeSwiper 轮播图插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 键值一样可省略
  store,
  components: {App},
  template: '<App/>'
})
