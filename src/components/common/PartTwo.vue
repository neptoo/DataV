<template>
  <div class="part-two">
    <div :style="{height:'500px',width:'100%'}" ref="myEchart"></div>
  </div>
</template>
<script>
var echarts = require('echarts/lib/echarts')
require('echarts/map/js/china')
export default {
  name: "PartTwo",
  data() {
    return {
    };
  },
  mounted() {
    this.chinaConfigure();
  },
  methods: {
    chinaConfigure() {
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
      window.onresize = myChart.resize;
      myChart.setOption({ // 进行相关配置
        // backgroundColor: "#02AFDB",
        title: {
          text: "前端好友分布",
          textStyle: {
            color: "#fff"
          },
          x: "center"
        },
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['#FA8BFF', '#5ddcfc', '#4386f9']
        },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: false, // 是否允许缩放
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)',
              areaColor: '#439bf9'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              color: '#445cfc',
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo' // 对应上方配置
          },
          {
            name: '好友数量', // 浮动框的标题
            type: 'map',
            geoIndex: 0,
            data: [{
              "name": "北京",
              "value": 232
            }, {
              "name": "广东",
              "value": 318
            }, {
              "name": "上海",
              "value": 120
            }, {
              "name": "浙江",
              "value": 84
            }, , {
              "name": "四川",
              "value": 46
            }, {
              "name": "湖北",
              "value": 24
            }, {
              "name": "重庆",
              "value": 20
            }, {
              "name": "陕西",
              "value": 18
            }, {
              "name": "江苏",
              "value": 8
            }, {
              "name": "福建",
              "value": 20
            }, {
              "name": "辽宁",
              "value": 6
            }, {
              "name": "天津",
              "value": 4
            }, {
              "name": "云南",
              "value": 2
            }, {
              "name": "广西",
              "value": 2
            }]
          }
        ]
      })
    }
  }
}

</script>
</script>
<style scoped>
.part-two {
  width: 100%;
  height: 500px;
  border: 1px solid #0b2d50;
  border-radius: 10px;
  padding: 0 30px;
  padding-top: 20px;
}
</style>
