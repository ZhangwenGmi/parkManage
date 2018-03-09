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
                                        <span class="ml5">关键词：</span>
                                        <el-input class='tableSearchInput'  placeholder="" icon="search" size="small"></el-input>
                                    </div>
                                    <div class="floatL">
                                    <span class="ml5">日期查询：</span>
                                        <el-date-picker v-model="value4" type="daterange" :picker-options="pickerOptions2" size="small" placeholder="选择时间范围" align="right"></el-date-picker>
                                    <button class="export" size="small"><i class="icon_export"></i>导出</button>
                                </div>
                                </dt>
                        </dl>
                    </li>
                    <li >
                        <div class="sub-title">
                            <div class="title-left">
                                <span class="ml5">部门预算分析</span>
                            </div>
                            <div class="title-right">
                                <span class="ml5">业务预算分析</span>
                            </div>
                        </div>
                         
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
           <div class="sub-title mt20">
                <div class="title-left">
                    <span class="ml5">各部门预算对比分析</span>
                </div>
            </div>

            <div class="charts">
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
        navList: ['采购列表'],
        value4:[new Date(2000, 10, 10), new Date(2000, 10, 18)],
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
        pie: {
            title: {
                text: '部门预算',
                left: '20%',
                top: '20px',
                textStyle: {
                    color: '#6b6b6b',
                    fontWeight: '200',
                    fontSize: 16
                }
            },
            graphic: {
                type: 'text',
                left: '70%',
                top: '28px',
                style: {
                    text: '实际支出',

                    fill: '#6b6b6b',
                    font: '200 16px "Microsoft YaHei", sans-serif'
                }
            },
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
                left: 'center',
                bottom: '5px',
                textStyle:{
                    color: '#6b6b6b'
                },
                data: ['技术部', '财务部', '行政部', '市场部']
            },
            series: [{
                name: '部门预算',
                type: 'pie',
                radius: '45%',
                center: ['25%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{d|{d}}%\n ',
                        rich: {
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
                    name: '技术部'
                }, {
                    value: 85,
                    name: '财务部'
                }, {
                    value: 395,
                    name: '行政部'
                }, {
                    value: 195,
                    name: '市场部'
                }]

            }, {
                name: '部门实际支出',
                type: 'pie',
                radius: '45%',
                center: ['75%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{d|{d}}%\n ',
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
                    value: 33,
                    name: '技术部'
                }, {
                    value: 65,
                    name: '财务部'
                }, {
                    value: 265,
                    name: '行政部'
                }, {
                    value: 135,
                    name: '市场部'
                }]

            }]
        },
        pieSec: {
            title: {
                text: '业务预算',
                left: '20%',
                top: '20px',
                textStyle: {
                    color: '#6b6b6b',
                    fontWeight: '200',
                    fontSize: 16
                }
            },
            graphic: {
                type: 'text',
                left: '70%',
                top: '28px',
                style: {
                    text: '实际支出',

                    fill: '#6b6b6b',
                    font: '200 16px "Microsoft YaHei", sans-serif'
                }
            },
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
                left: 'center',
                bottom: '5px',
                textStyle:{
                    color: '#6b6b6b'
                },
                data: ['文具类', '电器类', '食物类', '其他']
            },
            series: [{
                name: '业务预算',
                type: 'pie',
                radius: '45%',
                center: ['25%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{d|{d}}%\n ',
                        rich: {
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
                    value: 235,
                    name: '文具类'
                }, {
                    value: 285,
                    name: '电器类'
                }, {
                    value: 445,
                    name: '食物类'
                }, {
                    value: 45,
                    name: '其他'
                }]

            }, {
                name: '业务实际支出',
                type: 'pie',
                radius: '45%',
                center: ['75%', '50%'],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: '{d|{d}}%\n ',
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
                    value: 33,
                    name: '文具类'
                }, {
                    value: 10,
                    name: '电器类'
                }, {
                    value: 345,
                    name: '食物类'
                }, {
                    value: 20,
                    name: '其他'
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
            legend: {
                right:'center',
                top:'15px',
                textStyle:{
                    color: '#6b6b6b'
                },
                data:['实际支出','预算支出','技术部','财务部','行政部','市场部']
            },
            series: [
        {
            name:'实际支出',
            type:'line',
            itemStyle: {
                    normal: {
                        color: '#509ce7',
                    }
                },
            
            data:[ 760, 339, 230, 528, 234, 410, 890]
        },{
                name: '预算支出',
                type: 'line',
                itemStyle: {
                    normal: {
                        color: '#73c3a3',
                    }
                },
                data: [800, 476, 520, 466, 519, 1010]

            },{
            name:'技术部',
            type:'bar',
            barWidth: '30',
            itemStyle: {
                normal: {
                    color: '#509ce7',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[198, 19, 45, 26, 48, 335]
        },{
            name:'财务部',
            type:'bar',
            barWidth: '30',
            itemStyle: {
                normal: {
                    color: '#7788e8',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[107, 49, 137, 54, 241,85]
        },{
            name:'行政部',
            type:'bar',
            barWidth: '30',
            itemStyle: {
                normal: {
                    color: '#d98888',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[200, 249, 277, 188, 165, 395]
        },
        {
            name:'市场部',
            type:'bar',
            barWidth: '30',
            itemStyle: {
                normal: {
                    color: '#73c3a3',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data:[215, 159, 61, 198, 65, 195]
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
            var that = this,
                monthDate = [];//半年的月份
            var date1  =  new  Date(),
                date2  =  new  Date(date1);
            var year=date1.getFullYear(); 

            for (var i = 5; i > -1; i--) {
               var month= date1.getMonth()+1-i,
                    months = year.toString()+'-'+month.toString();
                monthDate.push(months);
            }
            that.barSec.xAxis.data = monthDate; //x轴数据
            date2.setDate(date1.getDate() - 29);
            var ago = date2.getFullYear() + ',' + (date2.getMonth() + 1) + ',' + date2.getDate();
            var today = date1.getFullYear() + ',' + (date1.getMonth() + 1) + ',' + date1.getDate();
            that. value4 = [new Date(ago), new Date(today)];
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
    .tableSearchInput{
    	width: 150px;
    }
    .c-list-div {
        margin-top: 10px;
        ul{
            margin-bottom: 0;
        }
        li {
            dt {
                height: 30px;
                line-height: 30px;
                .title-name {
                    float: left;
                    color: #6b6b6b;
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
    .sub-title{
        position:relative;
        width:100%;
        height:20px;
        
        span{
            color: #6b6b6b;
        }
    }
    .title-left{
        position: absolute;
        left: 0px;
    }
    .title-right{
        position: absolute;
        left: 50%;
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