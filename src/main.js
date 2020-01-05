import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import RequestAxios from './utils/RequestAxios'

import './assets/css/global.less'
import './assets/icons/iconfont.css'

/** css样式还是需要全部引入 */
import 'element-ui/lib/theme-chalk/index.css'
import element from './element/index'

Vue.use(element)

Vue.prototype.$axios = RequestAxios

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


