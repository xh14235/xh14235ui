// # /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import XhProgress from './src/xh-progress.vue'

// 为组件提供 install 安装方法，供按需引入
XhProgress.install = function(Vue) {
  Vue.component(XhProgress.name, XhProgress)
}

// 默认导出组件
export default XhProgress