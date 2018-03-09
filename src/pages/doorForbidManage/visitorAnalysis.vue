<template lang="html">
    <div class="views-content">
        <div class="c-list-div">
            <ul>
                <li>
                    <dl>
                        <dt class="clearfix">
                                <div class="title-name">访客统计</div>
                                <div class="floatL">
                                    <span>时段选择：</span>
                                    <el-date-picker class="el-date-h"  size="small" v-model="value4" type="datetimerange" align="right" placeholder="选择日期范围" :picker-options="pickerOptions2"></el-date-picker>
                                    <el-button  size="small" type="primary">查询</el-button>
                                </div> 
                            </dt>
                    </dl>
                </li>
            </ul>
        </div>
        <div class="charts">
            <IEcharts :option="bar" :loading="loading"></IEcharts>
        </div>
        <div class="c-list-div">
            <ul>
                <li>
                    <dl>
                        <dt class="clearfix">
                                <div class="title-name">客流趋势</div> 
                            </dt>
                    </dl>
                </li>
            </ul>
        </div>
        <div class="charts" style="margin-top: 0px;">
            <IEcharts :option="barSec" :loading="loading"></IEcharts>
        </div>
    </div>
</template>
<script>
import IEcharts from 'vue-echarts-v3/src/full.vue';
import $ from 'jquery'
export default {
    name: 'view',
    components: {
        IEcharts,
        $
    },
    data: () => ({
        loading: true,
        nowIndex: 0,
        value4:[new Date(2000, 10, 10,0,0), new Date(2000, 10, 18,18,0)],
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        navList: ['访客分析', '访客详情', '二维码统计'],
        bar: {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            backgroundColor: '#fafafa',
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
                textStyle:{
                    color: '#6b6b6b'
                },
                data: ['内部人员', '外来访客', '临时人员']
            },
            series: [{
                name: '访客统计',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{b|{b}}\t{d|{d}}%\n ',
                        rich: {
                            b: {
                                fontSize: 14,
                                lineHeight: 14,
                                align: 'center'
                            },
                            d: {
                                fontSize: 14,
                                lineHeight: 22,
                                align: 'center'
                            }
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {　 //首先定义一个数组 
                            var colorList = ['#509ce7', '#7788e8', '#73c3a3'];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [{value: 335,
                    name: '内部人员'
                }, {
                    value: 285,
                    name: '外来访客'
                }, {
                    value: 95,
                    name: '临时人员'
                }]

            }]
        },
        barSec: {
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
                name: '客流趋势',
                type: 'line',
                barWidth: '50',
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
        }
    }),
    mounted: function() {
        this.$nextTick(function() {
            this.doRandom();
        })
    },
    methods: {
        navSelection(index) {
            this.nowIndex = index;
        },
        doRandom() {
            const that = this;
            let vdata = [2, 0, 0, 0, 0, 6, 27, 44, 82, 50, 141, 122, 42, 60, 39, 30, 28, 145, 75, 45, 75, 8, 0, 0, ], //请求数据
                piedata = [{
                    value: 335,
                    name: '内部人员'
                }, {
                    value: 285,
                    name: '外来访客'
                }, {
                    value: 95,
                    name: '临时人员'
                }],
                total = 0,
                xaxisData = [];
            let d = new Date();
            let hours = d.getHours(); //获取当前小时
            for (var i = 0; i <= hours; i++) {
                xaxisData.push(i + ':00');
            }
            that.barSec.xAxis.data = xaxisData; //客流趋势根据刷新页面时间节点给x轴时间
            that.bar.series[0].data = piedata;
            that.barSec.series[0].data = vdata.splice(0, hours + 1); //时间节点截取数据
            //下拉日期
            var date1 = new Date();
            var ago = date1.getFullYear()+','+(date1.getMonth()+1)+','+date1.getDate()+',00:00';
            var today = date1.getFullYear()+','+(date1.getMonth()+1)+','+date1.getDate()+','+ date1.getHours()+':00';

            that.value4 = [new Date(ago), new Date(today)];//?
            that.loading = !that.loading;
        }
    }
}
</script>
<style lang="scss" scoped>
.views-content {
    span{
        color: #a6a6a6;
    }
    
    .el-date-h{
    	width: 332px;
    }
    .c-list-div {
        margin-top: 10px;
        ul{
            margin-bottom: 0;
        }
        li {
            dl{
                    margin-bottom: 0;
                }
            dt {
                height: 30px;
                line-height: 30px;
                .title-name {
                    float: left;
                    color: #868686;
                    font-weight: normal;
                }
                .floatL {
                    float: right;
                }
            }
            dd {
                height: 200px;
                line-height: 200px;
                background-color: #f5f5f5;
                vertical-align: middle;
                text-align: center;
                color: #b8b8b8;
            }
        }
    }
}
</style>