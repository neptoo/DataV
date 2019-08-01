import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.config.productionTip = false

import '../static/css/reset.css' /**引入样式重置 */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})