<template>
  <div
    class="xh-date-tab"
    :style="{ width: width + 'px', border: '1px solid ' + color }"
  >
    <div
      class="xh-date-tab-item"
      :style="index === dateIndex && activeStyle"
      v-for="(item, index) of dateList"
      :key="item.name"
      @click="changeDateType(item.name, index)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { getRgba } from "../../methods";
export default {
  name: "XhDateType",
  data() {
    return {
      dateIndex: 0,
      dateList: [
        {
          name: "day",
          title: "日"
        },
        {
          name: "month",
          title: "月"
        },
        {
          name: "year",
          title: "年"
        }
      ]
    };
  },
  computed: {
    activeStyle() {
      return {
        color: this.color,
        "font-weight": 600,
        background: getRgba(this.color, 0.2)
      };
    }
  },
  props: {
    width: Number,
    color: {
      type: String,
      default: "#409eff"
    }
  },
  methods: {
    changeDateType(type, index) {
      this.$emit("dateTypeChange", type);
      this.dateIndex = index;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../styles/css/mixin.styl'
.xh-date-tab
  height: 38px
  display: flex
  justify-content: space-between
  align-items: center
  border-radius: 2px
  .xh-date-tab-item
    flex: 0 0 33.333%
    width: 33.333%
    text-align: center
    line-height: 38px
    cursor: pointer
</style>
