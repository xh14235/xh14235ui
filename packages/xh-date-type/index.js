// # /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import XhDateType from './src/xh-date-type.vue'

// 为组件提供 install 安装方法，供按需引入
XhDateType.install = function(Vue) {
  Vue.component(XhDateType.name, XhDateType)
}

// 默认导出组件
export default XhDateType