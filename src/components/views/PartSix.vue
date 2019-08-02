<template>
  <div class="part-six" id="part-six">
    <!-- <h3 class="text-center">项目经历</h3> -->
    <!-- <p class="font-small"><span class="font-bold">前端：</span>HTML/HTML5、CSS/CSS3、JS/ES6、jQuery、Vue、微信小程序……</p>
    <p class="font-small"><span class="font-bold">后端：</span>Node、Java</p>
    <p class="font-small"><span class="font-bold">其他：</span>MySQL、Sqlserver</p> -->
  </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
export default {
  name: "PartSix",
  data() {
    return {};
  },
  mounted() {
    this.drawECharts();
  },
  methods: {
    drawECharts() {
      let myChart = echarts.init(document.getElementById("part-six"));
      myChart.setOption({
        title: {
          text: "行业区分",
          textStyle: {
            color: "#fff"
          },
          x: "center"
        },
        tooltip: {},
        animationDurationUpdate: 0,
        animationEasingUpdate: 'quinticInOut',
        color: ['#83e0ff', '#45f5ce', '#c998f9'],
        series: [{
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 400,
            edgeLength: 10
          },
          roam: true,
          label: {
            normal: {
              show: true,
              fontSize: 12
            }
          },
          data: [{
              name: '互联网行业',

              symbolSize: 70,
              draggable: true,
              category: 0,
              itemStyle: {
                normal: {

                  borderWidth: 6,

                }
              }
            },
            {
              name: '信息安全',
              symbolSize: 60,
              itemStyle: {
                normal: {
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7'
                }
              },
              category: 1,

            },
            {
              name: '智能硬件',
              symbolSize: 50,
              category: 1,
              itemStyle: {
                normal: {
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',

                }
              },

            },
            {
              name: '企业服务',
              symbolSize: 50,
              category: 1,
              itemStyle: {
                normal: {
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',

                }
              },

            },
            {
              name: '电子商务',
              symbolSize: 50,
              category: 1,
              itemStyle: {
                normal: {

                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',

                }
              },

            },
            {
              name: '计算机软件',
              symbolSize: 60,
              category: 2,
              itemStyle: {
                normal: {
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',

                }
              },

            },
            {
              name: '媒体',
              symbolSize: 50,
              category: 2,
              itemStyle: {
                normal: {

                  shadowBlur: 10,
                  shadowColor: '#b457ff',

                }
              },

            },
            {
              name: '游戏',
              symbolSize: 50,
              itemStyle: {
                normal: {

                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7',


                }
              },
              category: 2,

            },
            {
              name: '医疗',
              symbolSize: 50,
              itemStyle: {
                normal: {
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7'
                }
              },
              category: 2,

            },
            {
              name: '金融',
              symbolSize: 50,
              category: 2,
              itemStyle: {
                normal: {
                  borderWidth: 4,
                  shadowBlur: 10,
                  shadowColor: '#04f2a7'
                }
              },

            }
          ],
          links: [{
              source: '互联网行业',
              target: '信息安全'

            },
            {
              source: '互联网行业',
              target: '计算机软件',
            },
            {
              source: '信息安全',
              target: '智能硬件',
            },
            {
              source: '信息安全',
              target: '企业服务',
            },
            {
              source: '信息安全',
              target: '电子商务',
            },
            {
              source: '互联网行业',
              target: '计算机软件',
            },
            {
              source: '计算机软件',
              target: '金融',
            },
            {
              source: '计算机软件',
              target: '媒体',
            },
            {
              source: '计算机软件',
              target: '游戏',
              value: 'DNA',
            }, {
              source: '计算机软件',
              target: '医疗'

            }
          ],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          },
          categories: [{
              name: '0'
            },
            {
              name: '1'
            },
            {
              name: '2'
            }
          ]
        }]
      });
    }
  }

};

</script>
<style scoped>
.part-six {
  width: 100%;
  height: 500px;
  border: 1px solid #0b2d50;
  border-radius: 10px;
  padding: 0 10px;
  padding-top: 20px;
}

.text-center {
  text-align: center;
}

.font-small {
  font-size: .9em;
}

.font-bold {
  font-weight: bold;
  color: deepskyblue;
}

</style>
