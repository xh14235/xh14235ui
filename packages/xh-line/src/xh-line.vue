<template>
  <div class="echarts-id-box" :id="echartsData.id"></div>
</template>

<script>
export default {
  name: "XhLine",
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
      return this.echartsData.dataY;
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
      // 折线数据
      let series = [];
      // 区域面积样式，主要是color，默认用this.echartsData.color，可设置渐变
      let areaStyle = null;
      // if (this.echartsData.areaShow) {
      //   areaStyle = {
      //     color: {
      //       type: "linear",
      //       x: 0,
      //       y: 0,
      //       x2: 0,
      //       y2: 1,
      //       colorStops: [
      //         {
      //           offset: 0,
      //           color: "red" // 0% 处的颜色
      //         },
      //         {
      //           offset: 1,
      //           color: "yellow" // 100% 处的颜色
      //         }
      //       ],
      //       global: false // 缺省为 false
      //     }
      //   };
      // }
      for (let i = 0; i < this.echartsData.data.length; i++) {
        series.push({
          name: this.echartsData.legendData[i],
          data: this.echartsData.data[i],
          type: "line",
          // 折线拐点circle，arrow，rect， none等
          symbol: "none",
          // 平滑曲线
          smooth: this.echartsData.smooth,
          // 后一个系列的值会在前一个系列的值上相加
          stack: false,
          // 在拐点出显示item信息及数据，可formatter，可设置样式
          label: {},
          // 拐点样式，主要是color，默认用this.echartsData.color，可设置渐变
          itemStyle: {},
          // 折线样式，color，width，type等，可设置渐变
          lineStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: this.echartsData.color[i]
                },
                {
                  offset: 0.25,
                  color: "#fff"
                },
                {
                  offset: 0.5,
                  color: this.echartsData.color[i]
                },
                {
                  offset: 0.75,
                  color: "#fff"
                },
                {
                  offset: 1,
                  color: this.echartsData.color[i]
                }
              ],
              global: false // 缺省为 false
            }
          },
          // 区域面积样式，主要是color，默认用this.echartsData.color，可设置渐变
          areaStyle: areaStyle,
          // 高亮状态下各样式
          emphsis: {
            // label: {},
            // itemStyle: {},
            // lineStyle: {},
            // areaStyle: {}
          }
        });
      }
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
        // 鼠标浮动上面显示提示框
        tooltip: {
          trigger: "axis",
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
        // 图示距画布边界距离，边线显示隐藏等
        grid: {
          // 是否显示直角坐标系网格，即边框
          show: false,
          // top: "0",
          left: "5%",
          right: "5%",
          bottom: "5%",
          // grid 区域是否包含坐标轴的刻度标签
          containLabel: true,
          // 整个画布的边框
          borderWidth: 0
        },
        // x轴
        xAxis: {
          type: "category",
          data: this.echartsData.xData,
          // 折线是不是两边到头，与x轴0处及最大处是不是有间隔
          boundaryGap: true,
          // x轴
          axisLine: {
            show: true,
            lineStyle: {
              // 宽度
              width: "2",
              // 颜色，支持渐变
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "red" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "blue" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false，有渐变，为true是没有渐变
              }
            }
          },
          // x轴刻度
          axisTick: {
            show: true,
            // 刻度与标签对齐
            alignWithLabel: true
          },
          // x轴文字标签，可以加背景阴影位置等属性，可用formatter自定义
          axisLabel: {
            show: true,
            color: "red",
            fontSize: 14,
            fontWeight: 600
          },
          // 纵向刻度线
          splitLine: {
            show: false,
            // 刻度线样式，color、width等
            lineStyle: {}
          },
          // 纵向分割区域
          splitArea: {
            show: false,
            interval: 1,
            // 分割区域样式，颜色等
            areaStyle: {}
          }
        },
        // y轴
        yAxis: {
          type: "value",
          name: this.echartsData.yName,
          // y轴name样式，颜色，位置，字体，对齐方式等
          nameTextStyle: {},
          // 折线是不是两边到头，与x轴0处及最大处是不是有间隔
          boundaryGap: false,
          // y轴
          axisLine: {
            show: true,
            lineStyle: {
              // 宽度
              width: "2",
              // 颜色，支持渐变
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "red" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "blue" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false，有渐变，为true是没有渐变
              }
            }
          },
          // y轴刻度
          axisTick: {
            show: true,
            // 刻度与标签对齐
            alignWithLabel: true
          },
          // y轴文字标签，可以加背景阴影位置等属性，可用formatter自定义
          axisLabel: {
            show: true,
            color: "red",
            fontSize: 14,
            fontWeight: 600
          },
          // 纵向刻度线
          splitLine: {
            show: true,
            // 刻度线样式，color、width等
            lineStyle: {
              color: "pink"
            }
          },
          // 纵向分割区域
          splitArea: {
            show: false,
            interval: 1,
            // 分割区域样式，颜色等
            areaStyle: {}
          }
        },
        // 折线数据
        series: series
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
