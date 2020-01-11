import Vue from 'vue'
import router from './router'
import App from './App.vue'
import RequestAxios from './utils/RequestAxios'

import './mock'

import './valid'
import {
  ValidationProvider
} from 'vee-validate'

/**全局样式 */
import './assets/css/global.less'

/**全局图标 */
import './assets/icons/iconfont.css'

/** element-ui css样式还是需要全部引入 */
import 'element-ui/lib/theme-chalk/index.css'

/**element-ui 部分导入 */
import element from './element/index'

/**vuex 引入 */
import store from './store'

/** localStore */
import LocalStore from './storage'


Vue.component('ValidationProvider', ValidationProvider)

Vue.use(element)



Vue.prototype.$axios = RequestAxios
Vue.prototype.$LocalStore = LocalStore

Vue.config.productionTip = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')