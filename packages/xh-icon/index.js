// # /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import XhIcon from './src/xh-icon.vue'

// 为组件提供 install 安装方法，供按需引入
XhIcon.install = function(Vue) {
  Vue.component(XhIcon.name, XhIcon)
}

// 默认导出组件
export default XhIcon