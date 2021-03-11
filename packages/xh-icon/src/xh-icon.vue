<template>
  <i class="xh-icon" :class="'xh-icon-' + name"></i>
</template>

<script>
export default {
  name: "XhIcon",
  props: {
    name: String
  }
};
</script>

<style lang="stylus" scoped>
@font-face
  font-family: xh-icons
  src: url('../../styles/icons/element-icons.woff') format('woff'), url('../../styles/icons/element-icons.ttf') format('truetype')
  font-weight: 400
  font-style: normal
.xh-icon
  font-family: xh-icons
  font-style: normal
  line-height: 1
  display: inline-block
.xh-icon-hello:before
  content: '\e6d7'
</style>