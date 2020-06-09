import api from './scripts/api/index.js'
import utils from './scripts/utils.js'

export default {
  install (Vue, options) {
    Vue.prototype.api = api
    Vue.prototype.utils = utils
  }
}
