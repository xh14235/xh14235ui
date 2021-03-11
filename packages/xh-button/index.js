// # /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import XhButton from './src/xh-button.vue'

// 为组件提供 install 安装方法，供按需引入
XhButton.install = function(Vue) {
  Vue.component(XhButton.name, XhButton)
}

// 默认导出组件
export default XhButton