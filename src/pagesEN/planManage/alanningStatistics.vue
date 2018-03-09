<template lang="html">
<div id="container">
    <div class="views-container">
        <div class="views-title">
            <ul class="clearfix">
                <li v-for="item,index in navList"  :class="{active : index === nowIndex}">
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
                                        <span class="ml5">Date range：</span>
                                        <el-date-picker v-model="value4" type="daterange" :picker-options="pickerOptions2" placeholder="选择时间范围" align="left" size="small"></el-date-picker>
                                        <el-button type="primary" size="small">Query</el-button>
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

            </div>
            <div class="charts" style="margin-top:20px;">
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
        navList: ['Analysis and Statistics', 'Plan Development', 'Plan Implementation'],
        value4: [new Date(2000, 10, 10), new Date(2000, 10, 18)],
        pickerOptions2: {
            shortcuts: [{
                text: 'Last a week',
                onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
                    picker.$emit('pick', [start, end]);
                }
            }, {
                text: 'Last a month',
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
        bar: {
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
                orient: 'vertical',
                left: '80%',
                top: '5%',
                textStyle: {
                    color: '#6b6b6b'
                },
                data: ['Unstart', 'Delayed', 'Invalid', 'Completed']
            },
            series: [{
                name: 'Plan Statistics',
                type: 'pie',
                radius: '55%',
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
                    name: 'Unstart'
                }, {
                    value: 285,
                    name: 'Delayed'
                }, {
                    value: 95,
                    name: 'Invalid'
                }, {
                    value: 95,
                    name: 'Completed'
                }]

            }]
        },
        barSec: {
            tooltip: {},
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
                name: 'Unstart',
                type: 'bar',
                barWidth: '25',
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
                data: [17, 6, 14, 18, 19, 7, 8]

            }, {
                name: 'Delayed',
                type: 'bar',
                barWidth: '25',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#7788E8',
                    }
                },
                data: [1, 2, 3, 0, 4, 9, 8]

            }, {
                name: 'Invalid',
                type: 'bar',
                barWidth: '25',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#D98888',
                    }
                },
                data: [1, 2, 3, 5, 1, 2, 1]

            }, {
                name: 'Completed',
                type: 'bar',
                barWidth: '25',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#73C3A3',
                    }
                },
                data: [12, 24, 14, 25, 10, 29, 18]

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
            let vdata = [2, 82, 50, 141, 122, 42, 60, 39, 30, 28, 145, 75, 45, 75, 8, 0, 0, ], //请求数据
                piedata = [{
                    value: 89,
                    name: 'Unstart'
                }, {
                    value: 18,
                    name: 'Delayed'
                }, {
                    value: 15,
                    name: 'Invalid'
                }, {
                    value: 132,
                    name: 'Completed'
                }],
                total = 0,
                timeDate = []; //七天日期;
            that.bar.series[0].data = piedata;
            //下拉日期
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
            that.value4 = [new Date(sevenAgo), new Date(today)];
            that.loading = !that.loading;
        }
    }
}
</script>
<style lang="scss" scoped>
.views-content {
    .c-list-div {
        margin-top: 15px;
        ul {
            margin-bottom: 0;
            li {
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
                dl {
                    margin-bottom: 0;
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
    }
}
</style>