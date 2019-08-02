<template>
  <div class="part-four" id="part-four"></div>
</template>
<script>
let echarts = require("echarts/lib/echarts");

export default {
  name: "PartFour",
  data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("part-four"));
      var myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];

      myChart.setOption({
        title: {
          // 标题文本
          text: "专业课熟练度",
          // 标题样式
          textStyle: {
            color: "#fff"
          },
          // 标题位置
          x: "center"
        },
        grid: {
          left: '11%',
          top: '12%',
          right: '0%',
          bottom: '8%',
          containLabel: true
        },
        xAxis: [{
          show: false,
        }],
        yAxis: [{
          axisTick: 'none',
          axisLine: 'none',
          offset: '27',
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '16',
            }
          },
          data: ['项目管理', '电子商务概论','面向对象程序设计', '数据挖掘','计算机网络', '商务智能', '数据库管理系统', 'JSP网站开发与设计', '物流管理信息系统', '搜索引擎优化']
        }, {
          axisTick: 'none',
          axisLine: 'none',
          axisLabel: {
            textStyle: {
              color: '#ffffff',
              fontSize: '16',
            }
          },
          data: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']
        }, {
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0)'
            }
          },
          data: [],
        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [6, 13, 25, 29, 38, 44, 50, 52, 60, 72],
            label: {
              normal: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '16',
                }
              }
            },
            barWidth: 12,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
              }
            },
            z: 2
          }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: '#0e2147',
                barBorderRadius: 5,
              }
            },
            z: 1
          }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            barWidth: 24,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
                barBorderRadius: 5,
              }
            },
            z: 0
          },
          {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            yAxisIndex: 2,
            symbolSize: 35,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
                opacity: 1,
              }
            },
            z: 2
          }
        ]

      });
    }
  }
};

</script>
<style scoped>
.part-four {
  width: 100%;
  height: 500px;
  border: 1px solid #0b2d50;
  border-radius: 10px;
  padding: 0 10px;
  padding-top: 20px;
}

</style>
