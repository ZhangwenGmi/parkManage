<template>
<div>
  <div class="views-container">
    <div class="topChart">
      <h3>Energy consumption</h3>
      <div class="lineCharts">
        <IEcharts :option="line" :loading="loading"></IEcharts>
      </div>
    </div>
    <div class="charts">
      <div class="chartbox line_blue">
        <div class="charttitle bg_blue">
          <span class="c_darkgray">Building electricity</span>
        </div>
        <div class="chartdetail">
          <span class="c_gray">Total Power </span><span class="ml10 c_blue">3663.6 kw/hr </span>
          <br/>
          <span class="c_gray">Save Power </span><span class="ml10 c_blue">568.2 kw/hr</span>
        </div>

        <div class="chart">
          <IEcharts :option="pie" :loading="loading"></IEcharts>
        </div>
      </div>
      <div class="chartbox line_purple">
        <div class="charttitle bg_purple">
          <span class="c_darkgray">Power consumption</span>
        </div>
        <div class="chartdetail">
          <span class="c_gray">Total Power </span><span class="ml10 c_blue">&yen;3623.30 </span>
          <br/>
          <span class="c_gray">Save Power </span><span class="ml10 c_blue">&yen;561.95</span>
        </div>
        <div class="chart">
          <IEcharts :option="pieSec" :loading="loading"></IEcharts>
        </div>
      </div>
      <div class="chartbox line_green">
        <div class="charttitle bg_green">
          <span class="c_darkgray">building energy conservation</span>
        </div>
        <div class="chartdetail">
          <span class="c_gray">Operation energy saving rate </span><span class="ml10 c_blue">13.32%</span>
          <br/>
          <span class="c_gray">Design energy saving rate </span><span class="ml10 c_blue">20%</span>
        </div>
        <div class="chart">
          <IEcharts :option="gauge" :loading="loading"></IEcharts>
        </div>
      </div>
    </div>
  </div>

</div>
</template>
<script>
import IEcharts from 'vue-echarts-v3/src/full.vue';
export default {
  name: 'view',
  components: {
    IEcharts
  },
  data: () => ({
    loading: true,
    pie: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        orient: 'vertical',
        left: '80%',
        top: '5%',
        textStyle: {
          color: '#6b6b6b'
        },
      },
      series: [{
        name: 'Power consumption statistics',
        type: 'pie',
        radius: '60%',
        center: ['50%', '35%'],
        hoverAnimation: false, //鼠标上移变大动画取消
        label: {
          normal: {
            show: true,
            position: 'inner',
            formatter: function(params) {
              return (params.percent - 0).toFixed(2) + '%'
            }
          }
        },
        itemStyle: {
          normal: {
            color: function(params) {　 //首先定义一个数组 
              var colorList = ['#73C3A3', '#509CE7', '#7788E8', '#D98888', ];
              return colorList[params.dataIndex]
            }
          }
        },
        data: [{
          value: 3663.6,
          name: 'Total Power'
        }, {
          value: 568.2,
          name: 'Save Power'
        }]

      }]
    },
    pieSec: {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        orient: 'vertical',
        left: '80%',
        top: '5%',
        textStyle: {
          color: '#6b6b6b'
        },
      },
      series: [{
        name: 'Power consumption',
        type: 'pie',
        radius: '60%',
        center: ['50%', '35%'],
        hoverAnimation: false, //鼠标上移变大动画取消
        label: {
          normal: {
            show: true,
            position: 'inner',
            formatter: function(params) {
              return (params.percent - 0).toFixed(2) + '%'
            }
          }
        },
        itemStyle: {
          normal: {
            color: function(params) {　 //首先定义一个数组 
              var colorList = ['#73C3A3', '#509CE7', '#7788E8', '#D98888', ];
              return colorList[params.dataIndex]
            }
          }
        },
        data: [{
          value: 3623.30,
          name: 'Total cost'
        }, {
          value: 561.95,
          name: 'Total cost savings'
        }]

      }]
    },
    gauge: {
      tooltip: {
        //formatter: '{a} : {c}/500'
        formatter: '{a} :13.32%'
      },
      series: [{
        name: 'Operation energy saving rate',
        type: 'gauge',
        radius: '60%',
        center: ['50%', '35%'],
        min: 0,
        max: 3917198,
        detail: {
          formatter: '13.32%',
          textStyle: {
            fontSize: 14
          },
        },
        axisLine: { // 坐标轴线
          show: false, // 默认显示，属性show控制显示与否
          lineStyle: { // 属性lineStyle控制线条样式
            color: [
              [0.3, '#14a8a6'],
              [0.8, '#f29752'],
              [1, '#ed4e48']
            ],
            width: 20
          }
        },
        axisTick: { // 坐标轴小标记
          splitNumber: 1, // 每份split细分多少段
          length: 1, // 每份split细分多少段
        },
        data: [{
          value: 521897
        }],
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
          show: false,
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: '#8aa8c5',
            fontSize: 8
          }
        }
      }]
    },
    line: {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['Lighting socket','Air conditioning energy consumption','Dynamic energy consumption','Special energy consumption']
    },
      backgroundColor: '#fafafa',
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: [],
        axisLine: {
          lineStyle: {
            color: '#d8d8d8'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#939DA9'
        }
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#d8d8d8',
            type: 'solid'
          }
        },
        axisTick: {
          show: false
        },
        splitNumber: 4,
        minInterval: 1,
        axisLabel: {
          color: '#939DA9'
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: 'dashed',
            color: '#304968'
          },
        }
      },
      series: [{
        name: 'Air conditioning energy consumption',
        type: 'line',
        barWidth: '50',
        itemStyle: {
          normal: {
            color: '#7788e8',
          }
        },
        data: []

      },{
        name: 'Lighting socket',
        type: 'line',
        barWidth: '50',
        itemStyle: {
          normal: {
            color: '#5aa2e8',
          }
        },
        data: []

      },{
        name: 'Dynamic energy consumption',
        type: 'line',
        barWidth: '50',
        itemStyle: {
          normal: {
            color: '#d98888',
          }
        },
        data: []

      },{
        name: 'Special energy consumption',
        type: 'line',
        barWidth: '50',
        itemStyle: {
          normal: {
            color: '#73c3a3',
          }
        },
        data: []

      }]
    }
  }),
  mounted: function() {
    this.$nextTick(function() {
      this.doRandom();
    })
  },
  methods: {
    doRandom() {
      const that = this;
      let vdata = [112, 182, 150, 141, 122, 136, 127, 144, 182, 150, 141, 122, 142, 160, 139, 130, 128, 145, 175, 145,175, 108, 175,98 ], //请求数据
          ldata = [22, 10, 20, 15, 10, 26, 27, 44, 22, 50, 41, 52, 42, 60, 39, 30, 28, 45, 75, 45, 75, 28, 20,30 ],
          edata = [2, 6, 27, 44, 82, 50, 141, 122, 42, 60, 39, 30, 28, 145, 75, 45, 75, 8, 0, 0,0, 0, 0, 0, ],
          sdata = [2, 0, 0, 0,0, 0, 0, 141, 122, 42, 60, 39, 30, 28, 145, 75, 45, 75, 8, 0, 0,0, 0, 6, 27, 44, 82, 50, ],
        d = new Date(),
        hours = d.getHours(), //获取当前小时
        xaxisData = [];
      for (var i = 0; i <= hours; i++) {
        xaxisData.push(i + ':00');
      }
      that.line.xAxis.data = xaxisData; //客流趋势根据刷新页面时间节点给x轴时间
      that.line.series[0].data = vdata.splice(0, hours + 1); //时间节点截取数据
      that.line.series[1].data = ldata.splice(0, hours + 1); //时间节点截取数据
      that.line.series[2].data = edata.splice(0, hours + 1); //时间节点截取数据
      that.line.series[3].data = sdata.splice(0, hours + 1); //时间节点截取数据
      that.loading = !that.loading;
    }
  }
}
</script>
<style lang="scss" scoped>
hr {
  margin-top: 6px;
  margin-bottom: 14px;
  border: 0;
  border-top: 1px solid #1199ec;
}

p {
  font-size: 16px;
  line-height: 20px;
  text-indent: 2em;
}

span.title {
  font-size: 26px;
  line-height: 26px;
}

.bg_blue {
  background: #dbeffc;
  border-left: 5px solid #1199ec;
}

.line_blue {
  border: 1px solid #dbeffc;
}

.bg_purple {
  background: #ebeefb;
  border-left: 5px solid #8393eb;
}

.line_purple {
  border: 1px solid #ebeefb;
}

.bg_green {
  background: #d8efe6;
  border-left: 5px solid #7ecaad;
}

.line_green {
  border: 1px solid #d8efe6;
}

.topChart {
  margin-top: 10px;
  width: 100%;
  height: 380px;
  h3 {
    color: #4d4d4d;
    font-size: 16px;
  }
}

.lineCharts {
  margin-top: 10px;
  width: 100%;
  height: 340px;
}

.charts {
  width: 100%;
  display: flex;
  margin-top: 10px;
  height: 400px;
}

.chartbox {
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 31%;
  margin-right: 3%;
  height: 410px;
}

.charttitle {
  width: 100%;
  height: 50px;
  padding: 15px;
  display: inline-block;
}

.chartdetail {
  width: 100%;
  height: 100px;
  padding: 15px 0 15px 15px;
  line-height: 30px;
  display: inline-block;
}

.chart {
  width: 100%;
  height: 260px;
  display: inline-block;
  padding-top: 5px;
}

@media screen and (max-width: 1366px) {
  .buidDetail {
    height: 210px;
  }
  span.title {
    font-size: 22px;
    line-height: 22px;
  }
  p {
    font-size: 14px;
  }
  .chartbox {
    height: 315px;
  }
  .chart {
    height: 180px;
  }
}
</style>


