import echarts from 'echarts'

import api from './script/api/index.js'

export default {
  install (Vue, options) {
    Vue.prototype.echarts = echarts
    Vue.prototype.api = api
  }
}
