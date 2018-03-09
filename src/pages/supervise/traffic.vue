<template>
<div id="container">
  <div class="views-container">
    <div class="echarts-div">
      <div class="echarts-left">
        <h3>车位动态监测</h3>
        <div class="echarts-content">
          <IEcharts :option="bar"></IEcharts>
        </div>
      </div>
      <div class="echarts-right">
        <div class="weather-title">
          <h3>园区路面交通监测</h3>
          <el-select placeholder="请选择" value='按小时统计' style="width:120px" size="small">
            <el-option value='按小时统计'></el-option>
          </el-select>
        </div>
        <div class="traffic-flow">
          <ul>
            <li v-for="item in flowData">
              <span class="fl10 c_gray">{{item.road}}</span><span class="fr10 c_gray">{{item.statusText}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="table-div mt20">
      <div class="tableList">
        <h3>今日车位使用统计</h3>
        <ul>
          <li v-for="item in statisticsData" :class="item.bgcolor">
            <div class="box_title">
              <span class="c_white">{{item.title}}</span>
            </div>
            <div class="box_detail">
              <span class="c_white">{{item.count}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="weather-qa">
        <div class="weather-title">
          <h3>实时入园车辆检测</h3>
        </div>
        <div class="traffic-enter">
          <ul>
            <li v-for="item in enterCarData">
              <span class="fl10 c_gray">{{item.plateNum}}</span><span class="fr10 c_gray">{{item.enterTime}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import IEcharts from 'vue-echarts-v3/src/full.vue';
export default {
  components: {
    IEcharts,
  },
  data: () => ({
    bar: {
      tooltip: {
        trigger: 'axis'
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
        name: '车位剩余',
        type: 'bar',
        barWidth: '30',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        itemStyle: {
          normal: {
            color: '#5aa2e8',
          }
        },
        data: []
      }]
    },
    statisticsData: [{
      bgcolor: 'bg_blue',
      title: '车位总个数/个',
      count: 890
    }, {
      bgcolor: 'bg_purple',
      title: '总车流量/辆',
      count: 3274
    }, {
      bgcolor: 'bg_prasinous',
      title: '今日总收入/元',
      count: 24995
    }, {
      bgcolor: 'bg_orange',
      title: '车位周转率',
      count: 1.26
    }],
    flowData: [{
      road: '嘉宾路',
      statusText: '轻度拥挤'
    }, {
      road: '人民南路',
      statusText: '畅通'
    }, {
      road: '友谊路',
      statusText: '畅通'
    }, {
      road: '南湖路',
      statusText: '畅通'
    }, {
      road: '白石路',
      statusText: '畅通'
    }],
    enterCarData: [{
        plateNum: '粤B.KV768',
        enterTime: '15:00',
      },
      {
        plateNum: '粤B.CX238',
        enterTime: '15:00',
      },
      {
        plateNum: '粤B.SA727',
        enterTime: '15:00',
      },
      {
        plateNum: '粤B.7A786',
        enterTime: '15:00',
      }, {
        plateNum: '粤B.C2732',
        enterTime: '15:00',
      }, {
        plateNum: '粤B.24721',
        enterTime: '15:00',
      }, {
        plateNum: '粤B.3A231',
        enterTime: '15:00',
      }, {
        plateNum: '粤B.F2863',
        enterTime: '15:00',
      }, {
        plateNum: '粤B.FF722',
        enterTime: '15:00',
      }
    ]
  }),
  mounted: function() {
    this.$nextTick(function() {
      this.doRandom();
    })
  },
  methods: {
    doRandom() {
      let that = this,
        xaxisData = [],
        vData = [687, 690, 690, 690, 688, 670, 680, 876, 770, 585, 282, 235, 223, 280, 440, 268, 560, 758, 716, 560, 664, 569, 683, 680], //请求数据

        d = new Date(),
        hours = d.getHours();
      for (var i = 0; i <= hours; i++) {
        xaxisData.push(i + ':00');
      }
      that.bar.xAxis.data = xaxisData;
      that.bar.series[0].data = vData.splice(0, hours + 1); //时间节点截取数据
      //实时入园车辆时间数据 start
      var enterData = that.enterCarData;
      for (var j = 0; j < enterData.length; j++) {
        var min = Math.floor(Math.random() * 60);
        if (min < 10) {
          min = '0' + min;
        }
        enterData[j].enterTime = (hours - 1) + ':' + min;
      }
      var compare = function(prop) {//排序时间
        return function(obj1, obj2) {
          var val1 = obj1[prop];
          var val2 = obj2[prop];
          if (val1 > val2) {
            return -1;
          } else if (val1 < val2) {
            return 1;
          } else {
            return 0;
          }
        }
      }
      enterData.sort(compare('enterTime'));
      that.enterCarData = enterData;//实时入园车辆时间数据赋值
    }
  }
}
</script>

<style lang="scss" scoped>
.views-container {
  padding: 20px;
  height: auto;
  .echarts-div,
  .table-div {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    h3 {
      color: #4d4d4d;
      font-size: 16px;
    }
    .echarts-content {
      height: 300px;
    }
    .echarts-right,
    .weather-qa {
      flex: 0 0 25%;
      height: auto;
      .weather-title {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        .el-select {
          width: 180px;
          margin-top: 4px;
        }
        .el-input__inner {
          height: 32px;
        }
      }
      .traffic-enter {
        background-color: #fafafa;
        height: auto;
        margin-top: -10px;
        ul {
          width: 100%;
          margin-top: 10px;
          li {
            width: 100%;
            height: 36px;
            padding: 10px 26px;
            font-size: 18px;
            span {
              display: inline-block;
              width: 50%;
              font-size: 16px;
            }
          }
        }
      }
      .traffic-flow {
        background-color: #fafafa;
        height: 300px;
        display: flex;
        justify-content: center;
        ul {
          width: 100%;
          margin-top: 10px;
          li {
            width: 100%;
            height: 36px;
            padding: 10px 26px;
            font-size: 18px;
            span {
              display: inline-block;
              width: 50%;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
  .echarts-left,
  .tableList {
    flex: 0 0 74%;
    height: 350px;
  }
  .table-div {
    .tableList {
      flex: 0 0 74%;
      width: 74%;
    }
    .weather-qa,
    .tableList {
      height: auto;
    }
  }
  .tableList {
    ul {
      li {
        width: 22%;
        height: auto;
        margin-left: 2%;
        display: inline-flex;
        flex-flow: row wrap;
        justify-content: space-between;
      }
    }
  }
  .bg_blue {
    background: #509ce7;
  }
  .bg_purple {
    background: #7686e6;
  }
  .bg_prasinous {
    background: #73c3a3;
  }
  .bg_orange {
    background: #f5a623;
  }
  .box_title {
    width: 100%;
    height: 50%;
    text-align: center;
    font-size: 22px;
    font-weight: 100;
    padding: 80px 0 0 0;
  }
  .box_detail {
    width: 100%;
    height: 50%;
    text-align: center;
    padding: 50px 0 80px 0;
    font-size: 26px;
  }
}

@media screen and (max-width: 1366px) {
  .views-container {
    .box_title {
      font-size: 18px;
      padding: 50px 0 0 0;
    }
    .box_detail {
      font-size: 20px;
      padding: 50px 0 50px 0;
    }
    .echarts-div {
      .echarts-right {
        .traffic-flow {
          ul {
            li {
              span {
                font-size: 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>