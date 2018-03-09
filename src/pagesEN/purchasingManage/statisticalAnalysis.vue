<template lang="html">
<div id="container">
    <div class="views-container">
        <div class="views-title">
            <ul class="clearfix">
                <li v-for="item,index in navList" @click="navSelection(index)" :class="{active : index === nowIndex}">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="views-content">
            <div class="c-list-div">
                <ul>
                    <li>
                        <dl>
                            <dt class="clearfix">
                                    <div class="title-name">
                                        <span class="ml5">Key：</span>
                                        <el-input size="small" class='tableSearchInput'  placeholder="" icon="search"></el-input>
                                    </div>
                                    <div class="floatL">
                                    <span class="ml5">Date range：</span>
                                    <el-date-picker class="mr5" size="small" v-model="value4" type="daterange" :picker-options="pickerOptions2"  start-placeholder="Start date"  end-placeholder="End date"  align="right"></el-date-picker>
                                    <button class="export" size="small" style="float: right;"><i class="icon_export"></i>Export</button>
                                </div>
                                </dt>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="charts">
                <div class="pie">
                    <IEcharts :option="pie" :loading="loading"></IEcharts>
                </div>
                <div class="pie" style="margin-left:1%">
                    <IEcharts :option="pieSec" :loading="loading"></IEcharts>
                </div>
            </div>
            <div class="c-list-div">
                <ul>
                    <li>
                        <dl>
                            <dt class="clearfix">
                                <div class="title-name">Procurement Trend</div> 
                            </dt>
                        </dl>
                    </li>
                </ul>
            </div>
            <div class="charts" style="margin-top:0">
                <IEcharts :option="barSec" :loading="loading"></IEcharts>
            </div>
        </div>
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
        navList: ['Procurement List'],
        value4:[new Date(2000, 10, 10), new Date(2000, 10, 18)],
        pickerOptions2: {
          shortcuts: [{
            text: 'Last Week',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last Month',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: 'Last 3 months',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        pie: {
            title: {
                text: 'Procurement statistics by department',
                x: 'center',
                top: '20px',
                textStyle: {
                    color: '#6b6b6b',
                    fontWeight: '200',
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            backgroundColor: '#fafafa',
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            legend: {
                show: false
            },
            series: [{
                name: 'Procurement statistics by department',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: "{b|{b}}\t{d|{d}}%\n ",
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
                            var colorList = ['#509CE7', '#7788E8', '#D98888', '#73C3A3'];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [{
                    value: 335,
                    name: '未启动'
                }, {
                    value: 285,
                    name: '延误完成'
                }, {
                    value: 95,
                    name: '失效计划'
                }, {
                    value: 95,
                    name: '正常完成'
                }]

            }]
        },
        pieSec: {
            title: {
                text: 'Procurement Category',
                x: 'center',
                top: '20px',
                textStyle: {
                    color: '#6b6b6b',
                    fontWeight: '200',
                    fontSize: 16
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            backgroundColor: '#fafafa',
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            legend: {
                show: false
            },
            series: [{
                name: 'Procurement Category',
                type: 'pie',
                radius: '50%',
                center: ['50%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: "{b|{b}}\t{d|{d}}%\n ",
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
                            var colorList = ['#509CE7', '#7788E8', '#D98888', '#73C3A3'];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [{
                    value: 35,
                    name: '技术部'
                }, {
                    value: 285,
                    name: '财务部'
                }, {
                    value: 395,
                    name: '行政部'
                }, {
                    value: 95,
                    name: '市场部'
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
                name: 'Purchase quantity',
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
                data: [{
                    value: 135,
                    name: '文具类'
                }, {
                    value: 85,
                    name: '电气类'
                }, {
                    value: 595,
                    name: '食物类'
                }, {
                    value: 95,
                    name: '其他'
                }]

            }]
        },
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
            let vdata = [2, 82, 50, 141, 122, 42, 60, 39, 30, 28], //请求数据
                piedata1 = [{
                    value: 35,
                    name: 'Technology dept'
                }, {
                    value: 285,
                    name: 'Finance dept'
                }, {
                    value: 395,
                    name: 'Administration dept'
                }, {
                    value: 95,
                    name: 'Marketing dept'
                }],
                piedata2 = [{
                    value: 135,
                    name: 'Stationary'
                }, {
                    value: 85,
                    name: 'Appliances'
                }, {
                    value: 595,
                    name: 'Foods'
                }, {
                    value: 95,
                    name: 'Other'
                }],
                total = 0,
                timeDate = []; //七天日期;
            that.pie.series[0].data = piedata1;
            that.pieSec.series[0].data = piedata2;
            that.barSec.series[0].data = vdata;
            var  date1  =  new  Date();       
            for (var i = 6; i > -1; i--) {
                var  date2  =  new  Date(date1);
                date2.setDate(date1.getDate() - i);        
                var  times  =  date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate(); //七天
                timeDate.push(times);
            }
            that.barSec.xAxis.data = timeDate; //x轴数据
            date2.setDate(date1.getDate() - 6);
            var sevenAgo = date2.getFullYear() + ',' + (date2.getMonth() + 1) + ',' + date2.getDate();
            var today = date1.getFullYear() + ',' + (date1.getMonth() + 1) + ',' + date1.getDate();
            that. value4 = [new Date(sevenAgo), new Date(today)];
            that.loading = !that.loading;
        }
    }
}
</script>
<style lang="scss" scoped>
.views-content {
	.tableSearchInput{
		width: 150px;
	}
    span{
        color: #a6a6a6;
    }
    .c-list-div {
        margin-top: 25px;
        ul{
            margin-bottom: 0;
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
    .charts {
        .pie {
            width: 49%;
            height: 300px;
            display: inline-block;
        }
    }
}
</style>