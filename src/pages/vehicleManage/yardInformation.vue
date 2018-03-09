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
                </ul>
            </div>
            <div class="charts">
                <div class="pie">
                    <IEcharts :option="bar" :loading="loading"></IEcharts>
                </div>
                <div class="pie" style="margin-left:1%">
                    <IEcharts :option="barSec" :loading="loading"></IEcharts>
                </div>
                <div class="pie" style="margin-left:1%">
                    <IEcharts :option="barThird" :loading="loading"></IEcharts>
                </div>
            </div>
            <div class="c-list-div">
                
            </div>
            <div class="c-list-div">

            </div>
            <div class="mt20" >
                <el-table ref="multipleTable" :data="tableData" stripe tooltip-effect="dark" style="width: 100%">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="order" label="序号" align="center"></el-table-column>
                <el-table-column prop="name" label="车场名称" align="center"></el-table-column>
                <el-table-column prop="location" label="位置信息" align="center"></el-table-column>
                <el-table-column prop="discharged" label="车辆放行" align="center"></el-table-column>
                <el-table-column prop="rates" label="收费标准" align="left">
                    <template scope="scope">
                        <div v-for="item in scope.row.rates">{{ item }}</div>
                    </template>
                </el-table-column>
                <el-table-column prop="vip" label="VIP服务" align="center"></el-table-column>
                <el-table-column prop="parkDetail" label="普通车位(已用/总)" align="center"></el-table-column>
                <el-table-column prop="vipPark" label="VIP车位(已用/总)" align="center"></el-table-column>
            </el-table>
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
        navList: ['车辆列表'],
        bar: {
            title: {
                text: '车场类型车位数量（TOP3）',
                right: 'center',
                top:'20px',
                textStyle:{
                    color:'#4d4d4d',
                    fontWeight:'normal',
                    fontSize:'14'
                }
            },
            backgroundColor: '#fafafa',
            tooltip: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
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
            yAxis: {
                type: 'category',
                data: [ '地下停车场','露天停车场','立体停车场'],
                axisLine: {
                    lineStyle: {
                        color: '#d8d8d8'
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
                
            },

            series: [{
                name: '车场车位数量',
                type: 'bar',
                barWidth: '20',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {　 //首先定义一个数组 
                            var colorList = ['#ea6273', '#73c3a3', '#f5a623', ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [138,162,188]

            }]
        },
        barSec: {
            title: {
                text: '停留时长（TOP3）',
                right: 'center',
                top:'20px',
                textStyle:{
                    color:'#4d4d4d',
                    fontWeight:'normal',
                    fontSize:'14'
                }
            },
            backgroundColor: '#fafafa',
            tooltip: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
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
            yAxis: {
                type: 'category',
                data: [ '2~3小时','0~1小时','3~4小时'],
                axisLine: {
                    lineStyle: {
                        color: '#d8d8d8'
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
                
            },

            series: [{
                name: '停留时长',
                type: 'bar',
                barWidth: '20',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {　 //首先定义一个数组 
                            var colorList = ['#ea6273', '#73c3a3', '#f5a623', ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [28,46,109]

            }]
        },
        barThird: {
            title: {
                text: '最受欢迎车场（TOP3）',
                right: 'center',
                top:'20px',
                textStyle:{
                    color:'#4d4d4d',
                    fontWeight:'normal',
                    fontSize:'14'
                }
            },
            backgroundColor: '#fafafa',
            tooltip: {},
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
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
            yAxis: {
                type: 'category',
                data: [ '露天停车场','立体停车场','地下停车场'],
                axisLine: {
                    lineStyle: {
                        color: '#d8d8d8'
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
                
            },

            series: [{
                name: '停车车次',
                type: 'bar',
                barWidth: '20',
                label: {
                    normal: {
                        show: true,
                        position: 'right'
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {　 //首先定义一个数组 
                            var colorList = ['#ea6273', '#73c3a3', '#f5a623', ];
                            return colorList[params.dataIndex]
                        }
                    }
                },
                data: [48,52,83]

            }]
        },
        tableData:[{
            order: 1,
            name: '立体A1停车场',
            location: '园区A1区',
            discharged: '支持',
            rates: ['月卡：220/月;','年卡：2,420/年;','VIP年卡：2,800/年'],
            vip: '优先停车、车位预约、车位锁定',
            parkDetail: '16/78',
            vipPark: '5/20'
        },{
            order: 2,
            name: '立体B1停车场',
            location: '园区B1区',
            discharged: '支持',
            rates: ['月卡：220/月;','年卡：2,420/年;','VIP年卡：2,800/年'],
            vip: '优先停车、车位预约、车位锁定',
            parkDetail: '16/60',
            vipPark: '12/23'
        },{
            order: 2,
            name: '露天A1停车场',
            location: '园区A1区',
            discharged: '支持',
            rates: ['临时停车：10/小时;','月卡：180/月'],
            vip: '车位预约、车位锁定',
            parkDetail: '36/162',
            vipPark: '0/10'
        },{
            order: 4,
            name: '地下A1停车场',
            location: '园区A1区',
            discharged: '支持',
            rates: ['临时停车：12/小时;','月卡：220/月;','年卡：2,320/年;','VIP年卡：2,660/年'],
            vip: '优先停车、车位预约、车位锁定',
            parkDetail: '120/120',
            vipPark: '5/18'
        }]
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
            //日期查询
            var  date1  =  new  Date();        
            var  date2  =  new  Date(date1);
            date2.setDate(date1.getDate() - 6);
            var sevenAgo = date2.getFullYear() + ',' + (date2.getMonth() + 1) + ',' + date2.getDate();
            var today = date1.getFullYear() + ',' + (date1.getMonth() + 1) + ',' + date1.getDate();
            that. value4 = [new Date(sevenAgo), new Date(today)];//日期查询默认
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
        margin-top: 15px;
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
            width: 32.3%;
            height: 300px;
            display: inline-block;
        }
    }
}
</style>