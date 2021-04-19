// 导入组件，组件必须声明 name
import XhLine from './src/xh-line.vue'

// 为组件提供 install 安装方法，供按需引入
XhLine.install = function(Vue) {
  Vue.component(XhLine.name, XhLine)
}

// 默认导出组件
export default XhLine