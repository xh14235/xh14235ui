<template>
  <button
    class="xh-button"
    :class="[
      type ? 'xh-button--' + type : '',
      size ? 'xh-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-circle': circle,
        'is-round': round,
        'is-plain': plain,
        'is-loading': loading
      }
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
/*
圆形circle
圆角round
颜色color
尺寸size
禁用disabled
等待loading
朴素plain

*/
export default {
  name: "XhButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
    circle: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e)
    }
  }
}
</script>

<style lang="stylus">
@import '../../styles/css/mixin.styl'
.xh-button
  display: inline-block
  line-height: 1
  white-space: nowrap
  cursor: pointer
  background: $white
  border: 1px solid $border
  color: $font
  -webkit-appearance: none
  text-align: center
  -webkit-box-sizing: border-box
  box-sizing: border-box
  outline: 0
  margin: 0
  -webkit-transition: 0.1s
  transition: 0.1s
  font-weight: 500
  padding: 12px 20px
  font-size: 14px
  border-radius: 4px
  &:hover, &:focus
    background-color: $green2
    border-color: $green2
    // 圆形按钮
  &.is-circle
    border-radius: 50%
    padding: 12px
    // 圆角按钮
  &.is-round
    border-radius: 20px
    padding: 12px 23px
    // 中等按钮
  &.xh-button--medium
    padding: 10px 20px
    // 小型按钮
  &.xh-button--small
    padding: 9px 15px
    // 微型按钮
  &.xh-button--mini
    padding: 7px 15px
  &.xh-button--primary
    background-color: $blue
    border-color: $blue
    color: $white
    &:hover, &:focus
      background-color: $blue2
      border-color: $blue2
  &.xh-button--success
    background-color: $green
    border-color: $green
    color: $white
    &:hover, &:focus
      background-color: $green2
      border-color: $green2
  &.xh-button--info
    background-color: $grey
    border-color: $grey
    color: $white
    &:hover, &:focus
      background-color: $grey2
      border-color: $grey2
  &.xh-button--warning
    background-color: $yellow
    border-color: $yellow
    color: $white
    &:hover, &:focus
      background-color: $yellow2
      border-color: $yellow2
  &.xh-button--danger
    background-color: $red
    border-color: $red
    color: $white
    &:hover, &:focus
      background-color: $red2
      border-color: $red2
</style>
