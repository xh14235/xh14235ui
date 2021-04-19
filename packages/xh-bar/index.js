// 导入组件，组件必须声明 name
import XhBar from './src/xh-bar.vue'

// 为组件提供 install 安装方法，供按需引入
XhBar.install = function(Vue) {
  Vue.component(XhBar.name, XhBar)
}

// 默认导出组件
export default XhBar