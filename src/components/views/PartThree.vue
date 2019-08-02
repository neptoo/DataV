<template>
  <div class="part-three" id="round-chart">
  </div>
</template>
<script>
var echarts = require('echarts/lib/echarts')
require('echarts/map/js/china')
export default {
  name: "PartThree",
  data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      let myChart = echarts.init(document.getElementById("round-chart"));
      let dataStyle = {
        normal: {
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          shadowBlur: 0,
          shadowColor: '#203665'
        }
      };
      myChart.setOption({
        title: {
          text: "综合能力",
          textStyle: {
            color: "#fff"
          },
          x: "center"
        },
        series: [{
          name: '第一个圆环',
          type: 'pie',
          radius: [45, 50],
          itemStyle: dataStyle,
          center: ['50%', '25%'],
          data: [{
            value: 75,
            label: {
              normal: {
                rich: {
                  a: {
                    color: '#fff',
                    align: 'center',
                    fontSize: 20,
                    fontWeight: "bold"
                  }
                },
                formatter: function(params) {
                  return "{a|" + params.value + "%}" + "\n\n{b|前端}";
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#2c6cc4',
                shadowColor: '#2c6cc4',
                shadowBlur: 0
              }
            }
          }, {
            value: 75,
            name: 'invisible',
            itemStyle: {
              normal: {
                color: '#24375c'
              },
              emphasis: {
                color: '#24375c'
              }
            }
          }]
        }, {
          name: '第二个圆环',
          type: 'pie',
          radius: [45, 50],
          itemStyle: dataStyle,
          center: ['50%', '50%'],
          data: [{
            value: 80,
            label: {
              normal: {
                rich: {
                  a: {
                    color: '#fff',
                    align: 'center',
                    fontSize: 20,
                    fontWeight: "bold"
                  }
                },
                formatter: function(params) {
                  return "{a|" + params.value + "%}" + "\n\n{b|英语}";
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#ef45ac',
                shadowColor: '#ef45ac',
                shadowBlur: 0
              }
            }
          }, {
            value: 50,
            name: 'invisible',
            itemStyle: {
              normal: {
                color: '#412a4e'
              },
              emphasis: {
                color: '#412a4e'
              }
            }
          }]
        }, {
          name: '第三个圆环',
          type: 'pie',
          radius: [45, 50],
          itemStyle: dataStyle,
          center: ['50%', '75%'],
          data: [{
            value: 25,
            label: {
              normal: {
                rich: {
                  a: {
                    color: '#fff',
                    align: 'center',
                    fontSize: 20,
                    fontWeight: "bold"
                  }
                },
                formatter: function(params) {
                  return "{a|" + params.value + "%}" + "\n\n{b|数据库}";
                },
                position: 'center',
                show: true,
                textStyle: {
                  fontSize: '14',
                  fontWeight: 'normal',
                  color: '#fff'
                }
              }
            },
            itemStyle: {
              normal: {
                color: '#5FC035',
                shadowColor: '#5FC035',
                shadowBlur: 0
              }
            }
          }, {
            value: 25,
            name: 'invisible',
            itemStyle: {
              normal: {
                color: '#453284'
              },
              emphasis: {
                color: '#453284'
              }
            }
          }]
        }]


      })
    }
  }
};

</script>
<style scoped>
.part-three {
  width: 100%;
  height: 500px;
  border: 1px solid #0b2d50;
  border-radius: 10px;
  padding: 0 30px;
  padding-top: 20px;
}

</style>
