// 导入组件，组件必须声明 name
import XhPie from './src/xh-pie.vue'

// 为组件提供 install 安装方法，供按需引入
XhPie.install = function(Vue) {
  Vue.component(XhPie.name, XhPie)
}

// 默认导出组件
export default XhPie