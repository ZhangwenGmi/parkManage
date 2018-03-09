<template>
<div>
  <div class="views-container">
    <div class="buildDetail">
      <div class="buildLeft">
        <img src="../../assets/images/common/building.png" style="width:98%" />
      </div>
      <div class="buildRight">
        <span class="ml10 c_blue title">A1楼</span>
        <hr/>
        <p class="ml10 c_gray">A1楼坐落在深圳市罗湖区人民南路与嘉滨路交点东北侧罗湖商业区高层建筑群的中心地段，是一座由中国人自己设计、施工和实施物业管理的综合性多功能超高建筑。</p>
        <br/>
        <span class="ml10 c_darkgray spanfont" >建筑面积</span><span class="ml10 c_blue spanfont" >13737 平方米</span>
        <br/>
        <span class="ml10 c_darkgray spanfont">建筑占地面积</span><span class="ml10 c_blue spanfont" >15494 平方米</span>
      </div>
    </div>

    <div class="charts">
      <div class="chartbox line_blue">
        <div class="charttitle bg_blue">
          <span class="c_darkgray">绿色运行指标 </span>
        </div>
        <div class="chartdetail">
          <span class="c_gray">运行面均能耗 </span><span class="ml10 c_blue">32.5 kWh/m&sup2; </span>
          <br/>
          <span class="c_gray">设计面均能耗 </span><span class="ml10 c_blue">75 kWh/m&sup2; </span>
        </div>

        <div class="chart">
          <IEcharts :option="pie" :loading="loading"></IEcharts>
        </div>
      </div>
      <div class="chartbox line_purple">
        <div class="charttitle bg_purple">
          <span class="c_darkgray">建筑入驻率</span>
        </div>
        <div class="chartdetail">
          <span class="c_gray">入驻部门 </span><span class="ml10 c_blue">5 个 </span>
          <br/>
          <span class="c_gray">入驻人数 </span><span class="ml10 c_blue">308 人 </span>
        </div>
        <div class="chart" style="margin-left:1%;border-color:#ebeefb;">
          <IEcharts :option="gauge" :loading="loading"></IEcharts>
        </div>
      </div>
      <div class="chartbox line_green">
        <div class="charttitle bg_green">
          <span class="c_darkgray">建筑生态环境</span>
        </div>
        <div class="chartdetail">
          <span class="c_gray">室内平均温度 </span><span class="ml10 c_blue">25 &#8451;</span>
          <br/>
          <span class="c_gray">室外平均温度 </span><span class="ml10 c_blue">29  &#8451;</span>
          <br>
          <span class="c_lightgray fr mr10">空气质量指数AQI</span>
        </div>
        <div class="chart spa">
          <div class="apirule"></div>
          <div class="pointer">
            <b class="cur">39</b>
          </div>
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
        name: '绿色运行指标',
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
          value: 32500,
          name: '运行面均能耗'
        }, {
          value: 75000,
          name: '设计面均能耗'
        }]

      }]
    },
    gauge: {
      tooltip: {
        formatter: '{a} :61.6%'
      },
      series: [{
        name: '建筑入驻率',
        type: 'gauge',
        radius: '60%',
        center: ['50%', '35%'],
        min: 0,
        max: 500,
        detail: {
          formatter: '61.6%',
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
          value: 308
        }],
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
          show: false,
          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
            color: '#8aa8c5',
            fontSize: 8
          }
        }
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

.buildDetail {
  margin-top: 20px;
  width: 100%;
  height: 340px;
}
.buildLeft{
  display:inline-block;
  float:left;
  width:39%;
}
.buildRight{
  display:inline-block;
  float:left;
  width:60%;
}
.spanfont{
  width:90px;
  text-align:left;
  display:inline-block;
}
.charts {
  width: 100%;
  display: flex;
  margin-top: 0;
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
.spa{
    margin-left:1%;
    border-color:#d8efe6;
    padding-top:60px;
  }
.apirule {
  background: url(../../assets/images/common/aqi-ruler.png) no-repeat;
  background-size: 100%;
  margin: 0 auto 8px;
  width: 80%;
  height: 33px;
  background-position: -1px 0;
}

.pointer {
  width: 70%;
  height: 33px;
  left: 12%;
  position: relative;
}

.pointer .cur {
  background: url(../../assets/images/common/aqi-ruler.png) no-repeat;
  background-size: 750%;
  font-size: 20px;
  color: #fff;
  background-position: 2px -43px;
  width: 40px;
  height: 46px;
  text-align: center;
  line-height: 50px;
  position: absolute;
}

@media screen and (max-width: 1366px) {
  .buildDetail {
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
  .spa{
    padding-top:40px;
  }
  .apirule {
    height: 20px;
  }
  .pointer .cur {
    background-size: 780%;
    background-position: 2px -30px;
    line-height: 30px;
    width: 26px;
    height: 30px;
    font-size: 16px;
  }
}
</style>


