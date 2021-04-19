<template>
  <div id="app">
    <XhButton type="info" size="medium" disabled>hello</XhButton>
    <XhIcon name="lollipop"></XhIcon>
    <XhDateType :width="300" :color="'#258dde'"></XhDateType>
    <XhProgress :height="20" :color="'#258dde'" :length="68"></XhProgress>
    <div style="width: 400px; height: 300px; background: #ddd">
      <XhPie :echartsData="pieData"></XhPie>
    </div>
    <div style="width: 400px; height: 300px; background: #ddd">
      <XhLine :echartsData="lineData"></XhLine>
    </div>
    <div style="width: 400px; height: 300px; background: #ddd">
      <XhBar :echartsData="barData"></XhBar>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      pieData: {
        id: "skjdh1111",
        title: "lsdjfladjsf",
        legendData: ["搜索引擎", "直接访问"],
        color: ["green", "blue"],
        center: ["50%", "50%"],
        radius: ["40%", "50%"],
        data: [
          { value: 548, name: "搜索引擎" },
          { value: 735, name: "直接访问" }
        ]
      },
      lineData: {
        id: "abc",
        title: "sdfasd",
        legendData: ["aa", "bb"],
        color: ["red", "blue"],
        areaShow: true,
        smooth: true,
        xData: ["Mon", "Tue", "Wed", "Thu"],
        yName: "(kW)",
        data: [
          [150, 230, 224, 218],
          [223, 153, 245, 312]
        ]
      },
      barData: {
        id: "abcd",
        title: "sdfasxvczxcvd",
        legendData: ["aa", "bb"],
        color: ["red", "blue"],
        areaShow: true,
        smooth: true,
        xData: ["Mon", "Tue", "Wed", "Thu"],
        yName: "(kW)",
        data: [
          [150, 230, 224, 218],
          [223, 153, 245, 312]
        ]
      }
    };
  }
};
</script>

<style lang="stylus"></style>
