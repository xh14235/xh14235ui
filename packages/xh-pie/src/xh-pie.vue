<template>
  <div class="echarts-id-box" :id="echartsData.id"></div>
</template>

<script>
export default {
  name: "XhPie",
  data() {
    return {
      myChart: null
    };
  },
  props: {
    echartsData: Object
  },
  computed: {
    changeData() {
      return this.echartsData.data;
    }
  },
  methods: {
    drawCharts() {
      // 清除上次数据绘制的echarts图
      if (
        this.myChart !== null &&
        this.myChart !== "" &&
        this.myChart !== undefined
      ) {
        this.myChart.dispose();
      }
      this.myChart = this.$echarts.init(
        document.getElementById(this.echartsData.id)
      );
      // echarts配置
      let option = {
        // 标题
        title: {
          show: this.echartsData.title,
          text: this.echartsData.title,
          // 标题样式可以用rich
          textStyle: {
            color: "blue",
            fontSize: 24,
            fontWeight: 600
            // rich
          }
        },
        // 鼠标浮动上面显示提示框，可formatter
        tooltip: {
          trigger: "item",
          backgroundColor: "yellow",
          padding: 20
        },
        // 不同的颜色或者icon标记不同的折线，需要引入想对应的echarts vue组件
        legend: {
          show: this.echartsData.legendData,
          data: this.echartsData.legendData
        },
        // 各item颜色
        color: this.echartsData.color,
        series: [
          {
            data: this.echartsData.data,
            type: "pie",
            radius: this.echartsData.radius,
            center: this.echartsData.center,
            // 各item文字信息及样式，可formatter
            label: {
              color: "#fff",
              fontSize: 14,
              borderWidth: 3,
              padding: 5,
              backgroundColor: "pink"
            },
            // 标签引导线
            labelLine: {
              show: true,
              length1: 10,
              length2: 10,
              smooth: true,
              lineStyle: {
                color: "#fff",
                width: 4,
                type: "dotted"
              }
            },
            // 图形样式
            itemStyle: {
              // color: "#526452",
              // color: {
              //   type: "linear",
              //   x: 0,
              //   y: 0,
              //   x2: 0,
              //   y2: 1,
              //   colorStops: [
              //     {
              //       offset: 0,
              //       color: "red" // 0% 处的颜色
              //     },
              //     {
              //       offset: 1,
              //       color: "blue" // 100% 处的颜色
              //     }
              //   ],
              //   global: false // 缺省为 false
              // },
              // borderColor: "#fff",
              // borderWidth: 4,
              borderRadius: 10
            }
          }
        ]
      };
      option && this.myChart.setOption(option);
      // 只有页面最后一个echarts图会改变尺寸
      // window.onresize = function () {
      //   myChart.resize()
      // }
      // 多个echarts图都可以改变尺寸
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    }
  },
  watch: {
    changeData() {
      this.drawCharts();
    }
  },
  mounted() {
    this.drawCharts();
  }
};
</script>

<style lang="stylus" scoped>
.echarts-id-box
  width: 100%
  height: 100%
</style>
