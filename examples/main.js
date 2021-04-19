import Vue from 'vue'
import App from './App.vue'

// 导入组件库
import xh14235ui from './../packages/index'
// 引入echarts
import "./plugins/echarts.js";
// 注册组件库
Vue.use(xh14235ui)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
