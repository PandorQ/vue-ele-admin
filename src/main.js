import Vue from 'vue'
import Router from './router/index'
import App from './App.vue'
import RequestAxios from './utils/RequestAxios'


Vue.config.productionTip = false

/** css样式还是需要全部引入 */
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'
Vue.use(element)

Vue.prototype.$axios = RequestAxios

new Vue({
  Router,
  render: h => h(App),
}).$mount('#app')
