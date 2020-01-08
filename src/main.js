import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import RequestAxios from './utils/RequestAxios'

import './mock/index.js'

import './valid/index.js'
import {
  ValidationProvider
} from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider)




/**全局样式 */
import './assets/css/global.less'

/**全局图标 */
import './assets/icons/iconfont.css'

/** element-ui css样式还是需要全部引入 */
import 'element-ui/lib/theme-chalk/index.css'
/**element-ui 部分导入 */
import element from './element/index'
Vue.use(element)



Vue.prototype.$axios = RequestAxios

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')