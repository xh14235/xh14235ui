<template>
  <div class="xh-progress">
    <div
      class="xh-progress-outer"
      :style="{
        height: height + 'px',
        'border-radius': height / 2 + 'px'
      }"
    >
      <div
        class="xh-progress-inner"
        :style="{
          background: color,
          width: length + '%',
          height: height + 'px',
          'border-radius': height / 2 + 'px'
        }"
      ></div>
    </div>
    <span
      class="xh-progress-info"
      :style="{
        height: height + 'px',
        'line-height': height + 'px'
      }"
      >{{ length + "%" }}</span
    >
  </div>
</template>

<script>
export default {
  name: "XhProgress",
  props: {
    height: {
      type: Number,
      default: 6
    },
    color: {
      type: String,
      default: "#409eff"
    },
    length: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="stylus" scoped>
.xh-progress
  line-height: 1
  display: flex
  align-items: center
  .xh-progress-outer
    flex: auto
    background: #ebeef5
    .xh-progress-inner
      transition: all 0.2s
  .xh-progress-info
    flex: 0 0 55px
    width: 55px
    padding-left: 5px
</style>
