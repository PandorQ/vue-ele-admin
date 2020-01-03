/** 按需导入element-ui 组件 */
import {
  Button
} from 'element-ui'

const element = {
  install: function (Vue) {
    Vue.use(Button)
  }
}

export default element
